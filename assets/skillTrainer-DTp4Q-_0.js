const n=`/**
 * Skill 训练器（pack31：Agent 向 LLM 方向进化，结合 Skill 进行训练）
 *
 * 核心职责：
 *   1. 从 installedSkills.ts 提取已启用 skill 的结构化规则
 *   2. 将规则构建为 LLM 可理解的训练 prompt（few-shot 格式：正例 + 反例）
 *   3. 对 LLM 输出的建议进行 skill 合规校验（检测是否违反规则）
 *
 * 设计理念：
 *   - Skill 规则 = LLM 的"领域知识"（让 LLM 理解项目约定，而非通用建议）
 *   - 正反例 = few-shot 训练样本（让 LLM 学会"什么该做、什么不该做"）
 *   - 合规校验 = 后验过滤（LLM 建议需通过 skill 规则检查才能采纳）
 */
import { getInstalledSkills, type SkillRule } from '../config/installedSkills'
import type { LLMSuggestion, SkillTrainingConfig, SkillCompliance } from '../types/ai'

/**
 * 提取所有已启用 skill 的规则（扁平化）
 */
export function extractAllSkillRules(): Array<SkillRule & { skillId: string; skillName: string }> {
  const skills = getInstalledSkills()
  const rules: Array<SkillRule & { skillId: string; skillName: string }> = []
  for (const skill of skills) {
    if (!skill.enabled || !skill.rules) continue
    for (const rule of skill.rules) {
      rules.push({ ...rule, skillId: skill.id, skillName: skill.name })
    }
  }
  return rules
}

/**
 * 按 skill ID 提取规则（只训练用户选择的 skill）
 */
export function extractSkillRulesBySkillIds(skillIds: string[]): Array<SkillRule & { skillId: string; skillName: string }> {
  if (skillIds.length === 0) return extractAllSkillRules()
  const skills = getInstalledSkills().filter(s => skillIds.includes(s.id))
  const rules: Array<SkillRule & { skillId: string; skillName: string }> = []
  for (const skill of skills) {
    if (!skill.rules) continue
    for (const rule of skill.rules) {
      rules.push({ ...rule, skillId: skill.id, skillName: skill.name })
    }
  }
  return rules
}

/**
 * 构建 Skill 训练 prompt 段落（注入 LLM system prompt）
 *
 * 格式：
 *   ## 项目 Skill 规则（你必须遵守这些规则）
 *   ### [skillName] skillId
 *   - 规则1: title
 *     描述: desc
 *     ✅ 正例: goodExample
 *     ❌ 反例: badExample
 *   ...
 */
export function buildSkillTrainingPrompt(config: SkillTrainingConfig): string {
  if (!config.enabled) return ''

  const rules = extractSkillRulesBySkillIds(config.activeSkillIds)
  if (rules.length === 0) return ''

  const lines: string[] = [
    '',
    '## 项目 Skill 规则（你已通过这些规则训练，给出建议时必须遵守）',
    '',
  ]

  // 按 skill 分组
  const bySkill = new Map<string, { skillName: string; rules: typeof rules }>()
  for (const r of rules) {
    if (!bySkill.has(r.skillId)) {
      bySkill.set(r.skillId, { skillName: r.skillName, rules: [] })
    }
    bySkill.get(r.skillId)!.rules.push(r)
  }

  for (const [skillId, group] of bySkill) {
    lines.push(\`### \${group.skillName} (\${skillId})\`)
    for (const r of group.rules) {
      lines.push(\`- **\${r.title}** (\${r.ruleId})\`)
      lines.push(\`  \${r.desc}\`)
      if (r.badExample) lines.push(\`  ❌ 反例: \${r.badExample}\`)
      if (r.goodExample) lines.push(\`  ✅ 正例: \${r.goodExample}\`)
    }
    lines.push('')
  }

  lines.push('重要：你的建议必须符合上述所有 Skill 规则。如果某条建议违反了规则，请在 rationale 中标注冲突的 ruleId。')
  return lines.join('\\n')
}

/**
 * 校验单条建议是否违反 skill 规则
 *
 * 检测策略：
 *   1. 关键词匹配：建议中的参数值/代码片段是否命中反例关键词
 *   2. 规则适用性：根据建议的 target 判断哪些 skill 规则适用
 *   3. 冲突标记：如果建议的 fix 中包含反例的关键模式，标记为违规
 */
export function checkSuggestionCompliance(
  suggestion: LLMSuggestion,
  config: SkillTrainingConfig,
): SkillCompliance[] {
  if (!config.enabled) return []

  const rules = extractSkillRulesBySkillIds(config.activeSkillIds)
  const results: SkillCompliance[] = []

  for (const rule of rules) {
    let status: 'pass' | 'warn' | 'violation' = 'pass'
    let reason = ''

    // 提取建议文本用于检测
    const text = \`\${suggestion.target} \${suggestion.problem} \${suggestion.fix} \${suggestion.rationale || ''}\`.toLowerCase()

    // 检测反例关键词是否出现在建议中
    if (rule.badExample) {
      const badLower = rule.badExample.toLowerCase()
      // 提取反例中的关键模式（颜色值、字体名、属性名等）
      const patterns = extractPatterns(badLower)
      for (const pattern of patterns) {
        if (text.includes(pattern) && pattern.length > 3) {
          status = 'violation'
          reason = \`建议中包含反例模式 "\${pattern}"（违反 \${rule.skillName}/\${rule.ruleId}）\`
          break
        }
      }
    }

    // 特定规则检测
    if (rule.ruleId === 'anti-slop' && suggestion.paramChanges) {
      // anti-slop: 检查是否使用了默认值（如 timeout 30000、temperature 0.7）
      for (const [k, v] of Object.entries(suggestion.paramChanges)) {
        if (k === 'timeout' && v === 30000) {
          status = 'warn'
          reason = \`timeout=30000 是默认值，违反 anti-slop 原则，需说明选择理由\`
        }
      }
    }

    if (rule.ruleId === 'console-leftover' && text.includes('console.log')) {
      status = 'violation'
      reason = \`建议中包含 console.log，违反 impeccable/console-leftover 规则\`
    }

    if (rule.ruleId === 'lila-anti-purple-blue' && suggestion.paramChanges) {
      // 检查是否有颜色相关参数（虽然 TunableParams 没有颜色，但 codePatch 可能有）
      const colorMatch = text.match(/#[0-9a-f]{6}/g)
      if (colorMatch) {
        for (const hex of colorMatch) {
          const r = parseInt(hex.slice(1, 3), 16)
          const g = parseInt(hex.slice(3, 5), 16)
          const b = parseInt(hex.slice(5, 7), 16)
          // 紫蓝色检测：B > R 且 B > G 且 B > 100
          if (b > r && b > g && b > 100) {
            status = 'violation'
            reason = \`颜色 \${hex} 是 AI 紫蓝色，违反 LILA 规则\`
            break
          }
        }
      }
    }

    if (rule.ruleId === 'spacing-scale' && suggestion.codePatch) {
      // 检查间距魔数
      const magicMatch = text.match(/\\b(padding|margin):\\s*(\\d+)px/g)
      if (magicMatch) {
        for (const m of magicMatch) {
          const val = parseInt(m.match(/\\d+/)![0])
          if (val % 8 !== 0) {
            status = 'warn'
            reason = \`间距 \${val}px 不是 8 的倍数，违反 spacing-scale 规则\`
            break
          }
        }
      }
    }

    // 只记录非 pass 的结果（减少噪音）
    if (status !== 'pass') {
      results.push({
        ruleId: rule.ruleId,
        skillId: rule.skillId,
        skillName: rule.skillName,
        ruleTitle: rule.title,
        status,
        reason,
        suggestionId: suggestion.id,
      })
    }
  }

  return results
}

/**
 * 批量校验建议合规性
 */
export function checkAllSuggestionsCompliance(
  suggestions: LLMSuggestion[],
  config: SkillTrainingConfig,
): SkillCompliance[] {
  if (!config.enabled) return []
  const allResults: SkillCompliance[] = []
  for (const s of suggestions) {
    allResults.push(...checkSuggestionCompliance(s, config))
  }
  return allResults
}

/**
 * 从反例文本中提取关键模式（颜色值、字体名、属性名等）
 */
function extractPatterns(text: string): string[] {
  const patterns: string[] = []
  // 颜色值 #xxxxxx
  const colors = text.match(/#[0-9a-f]{6}/g)
  if (colors) patterns.push(...colors)
  // 字体名
  const fonts = text.match(/(inter|serif|sans-serif|system-ui)/g)
  if (fonts) patterns.push(...fonts)
  // console 残留
  if (text.includes('console.log')) patterns.push('console.log')
  // 硬编码 px（间距类）
  const pxMatch = text.match(/\\b\\d+px/g)
  if (pxMatch) patterns.push(...pxMatch)
  return patterns
}

/**
 * 获取 skill 训练摘要（用于 UI 展示）
 */
export function getSkillTrainingSummary(config: SkillTrainingConfig): {
  totalSkills: number
  totalRules: number
  activeSkills: string[]
} {
  const allSkills = getInstalledSkills()
  const activeSkillIds = config.activeSkillIds.length === 0
    ? allSkills.map(s => s.id)
    : config.activeSkillIds
  const activeSkills = allSkills.filter(s => activeSkillIds.includes(s.id))
  const totalRules = activeSkills.reduce((sum, s) => sum + (s.rules?.length || 0), 0)
  return {
    totalSkills: activeSkills.length,
    totalRules,
    activeSkills: activeSkills.map(s => s.name),
  }
}

/** 默认 Skill 训练配置 */
export const DEFAULT_SKILL_TRAINING_CONFIG: SkillTrainingConfig = {
  enabled: true,             // 默认启用 skill 训练
  activeSkillIds: [],        // 空数组 = 所有已启用 skill 都参与训练
  strictMode: false,         // 非严格模式：违规建议只 warn 不拦截
}
`;export{n as default};
