export interface InteractiveStep {
  id: number
  title: string
  type: 'explanation' | 'example' | 'practice' | 'quiz'
  content: string
  code?: string
  testCode?: string
  hint?: string
  options?: string[]
  correctAnswer?: number
}

export interface ChallengeData {
  id: number
  title: string
  description: string
  difficulty: 'easy' | 'medium' | 'hard'
  initialCode: string
  testCode: string
  testCases: { name: string; input: string; expected: string }[]
  xpReward: number
}

export const lessonSteps: Record<number, InteractiveStep[]> = {
  4: [
    {
      id: 1,
      title: '什么是循环？',
      type: 'explanation',
      content: `**循环**是编程中最强大的概念之一。它允许我们**重复执行一段代码**，而不需要复制粘贴。

想象一下，如果你要打印 1 到 100 的数字，没有循环的话你需要写 100 行 print 语句！但有了循环，只需要几行代码就能搞定。

Python 中有两种主要的循环：
- **for 循环**：用于遍历序列（如列表、字符串、range）
- **while 循环**：在条件为真时重复执行

让我们开始学习吧！`
    },
    {
      id: 2,
      title: 'for 循环基础',
      type: 'example',
      content: `**for 循环**用于遍历一个序列。基本语法是：

\`\`\`
for 变量 in 序列:
    循环体
\`\`\`

每次循环，变量会取序列中的下一个值，然后执行循环体中的代码。

最常用的是配合 \`range()\` 函数使用，\`range(n)\` 会生成 0 到 n-1 的整数序列。

试试运行下面的代码，看看效果：`,
      code: `# for 循环示例
for i in range(5):
    print(f"第 {i+1} 次循环，i = {i}")

print("循环结束！")`
    },
    {
      id: 3,
      title: 'range() 函数详解',
      type: 'explanation',
      content: `\`range()\` 函数是 Python 中最常用的函数之一，它有三种用法：

1. **range(stop)** - 生成 0 到 stop-1 的整数
   - \`range(5)\` → 0, 1, 2, 3, 4

2. **range(start, stop)** - 生成 start 到 stop-1 的整数
   - \`range(2, 7)\` → 2, 3, 4, 5, 6

3. **range(start, stop, step)** - 按步长生成
   - \`range(0, 10, 2)\` → 0, 2, 4, 6, 8
   - \`range(10, 0, -1)\` → 10, 9, 8, ..., 1

注意：\`range()\` 生成的是"左闭右开"区间，包含起始值，不包含结束值。`
    },
    {
      id: 4,
      title: '小练习：打印偶数',
      type: 'practice',
      content: `**练习时间！** 请编写代码，使用 for 循环打印出 1 到 20 之间的所有偶数。

提示：
- 使用 \`range()\` 的步长参数
- 偶数是能被 2 整除的数
- 从 2 开始，每次加 2

完成后点击运行，你的代码应该输出：2, 4, 6, ..., 20`,
      hint: '试试 range(2, 21, 2)，这样每次都会增加 2',
      code: `# 请在此处编写代码
# 打印 1 到 20 之间的所有偶数

`,
      testCode: `# 测试代码
import sys

# 保存之前的输出
output_lines = []
for line in _output_buffer.getvalue().strip().split('\\n'):
    if line.strip():
        try:
            num = int(line.strip())
            output_lines.append(num)
        except:
            pass

_test_results.append({
    "name": "输出了偶数",
    "passed": len(output_lines) >= 10,
    "message": f"找到 {len(output_lines)} 个数字，需要至少 10 个偶数"
})

_test_results.append({
    "name": "都是偶数",
    "passed": all(n % 2 == 0 for n in output_lines) and len(output_lines) > 0,
    "message": "确保输出的都是偶数"
})

_test_results.append({
    "name": "范围正确",
    "passed": all(2 <= n <= 20 for n in output_lines) and len(output_lines) == 10,
    "message": "偶数应该在 2 到 20 之间，共 10 个"
})
`
    },
    {
      id: 5,
      title: 'while 循环',
      type: 'example',
      content: `**while 循环**会在条件为真时不断重复执行代码块。

语法：
\`\`\`
while 条件:
    循环体
\`\`\`

**注意**：一定要确保条件最终会变为 False，否则会造成**死循环**！

试试运行下面的例子：`,
      code: `# while 循环示例
count = 1
while count <= 5:
    print(f"计数: {count}")
    count += 1  # 别忘了更新计数变量！

print("循环结束")`
    },
    {
      id: 6,
      title: '小测验',
      type: 'quiz',
      content: `来测试一下你学到的知识吧！

**问题**：以下哪个选项是正确的？

\`range(1, 10, 3)\` 会生成哪些数字？`,
      options: [
        '1, 4, 7, 10',
        '1, 4, 7',
        '0, 3, 6, 9',
        '1, 3, 6, 9'
      ],
      correctAnswer: 1
    },
    {
      id: 7,
      title: 'break 与 continue',
      type: 'explanation',
      content: `循环中有两个重要的控制语句：

**break** - 立即终止整个循环
- 当满足某个条件时，直接跳出循环，不再执行后续迭代

**continue** - 跳过当前迭代，继续下一次
- 当满足某个条件时，跳过本次循环剩余的代码，直接进入下一次循环

这两个语句让我们可以更灵活地控制循环的执行流程。`
    },
    {
      id: 8,
      title: '实战：九九乘法表',
      type: 'practice',
      content: `**终极挑战！** 使用嵌套循环打印九九乘法表。

要求：
- 使用两层 for 循环（外层控制行，内层控制列）
- 每行打印从 1*1 到 i*i 的算式
- 格式如：1x1=1  2x1=2  ...

提示：
- 外层循环变量 i 从 1 到 9
- 内层循环变量 j 从 1 到 i
- 使用 print 的 end 参数控制不换行`,
      hint: '外层 for i in range(1, 10): 内层 for j in range(1, i+1):',
      code: `# 打印九九乘法表
# 外层循环控制行数，内层循环控制列数

`,
      testCode: `# 测试九九乘法表
output = _output_buffer.getvalue()

# 检查是否包含乘法表的关键内容
has_1x1 = '1x1=1' in output or '1*1=1' in output
has_9x9 = '9x9=81' in output or '9*9=81' in output
line_count = len([l for l in output.split('\\n') if l.strip()])

_test_results.append({
    "name": "包含 1x1=1",
    "passed": has_1x1,
    "message": "乘法表应该从 1x1=1 开始"
})

_test_results.append({
    "name": "包含 9x9=81",
    "passed": has_9x9,
    "message": "乘法表应该以 9x9=81 结束"
})

_test_results.append({
    "name": "有9行输出",
    "passed": line_count >= 9,
    "message": f"找到 {line_count} 行，九九乘法表应该有9行"
})
`
    }
  ]
}

export const challenges: Record<number, ChallengeData[]> = {
  4: [
    {
      id: 1,
      title: '计算 1 到 100 的和',
      description: '编写一个程序，使用 for 循环计算 1 到 100 所有整数的和，并打印结果。\n\n提示：\n- 使用一个变量来累加和\n- 使用 range(1, 101) 遍历 1 到 100\n- 最终结果应该是 5050',
      difficulty: 'easy',
      initialCode: `# 计算 1 到 100 的和
total = 0

# 请在此处编写你的代码

print("1到100的和是:", total)`,
      testCode: `# 测试代码
output = _output_buffer.getvalue()

# 检查结果
has_5050 = '5050' in output

_test_results.append({
    "name": "正确计算和为5050",
    "passed": has_5050,
    "message": "1到100的和应该是5050，检查你的循环是否正确"
})

_test_results.append({
    "name": "输出包含total变量",
    "passed": len(output.strip()) > 0,
    "message": "请确保你的代码有输出结果"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: '5050' }
      ],
      xpReward: 10
    },
    {
      id: 2,
      title: '打印三角形图案',
      description: '编写程序，使用嵌套循环打印如下的星号三角形：\n\n    *\n   ***\n  *****\n *******\n*********\n\n提示：\n- 外层循环控制行数（5行）\n- 内层循环打印空格和星号\n- 第i行有 5-i 个空格和 2*i-1 个星号',
      difficulty: 'easy',
      initialCode: `# 打印三角形图案
n = 5  # 行数

# 请在此处编写你的代码

`,
      testCode: `# 测试三角形图案
output = _output_buffer.getvalue()
lines = output.strip().split('\\n')
lines = [l.rstrip() for l in lines if l.strip()]

# 检查
has_5_lines = len(lines) >= 5
last_line_stars = lines[-1].count('*') if lines else 0
first_line_stars = lines[0].count('*') if lines else 0

_test_results.append({
    "name": "至少5行",
    "passed": has_5_lines,
    "message": f"找到 {len(lines)} 行，需要至少 5 行"
})

_test_results.append({
    "name": "第一行1个星号",
    "passed": first_line_stars == 1,
    "message": f"第一行有 {first_line_stars} 个星号，应该是 1 个"
})

_test_results.append({
    "name": "最后一行9个星号",
    "passed": last_line_stars == 9,
    "message": f"最后一行有 {last_line_stars} 个星号，应该是 9 个"
})
`,
      testCases: [
        { name: '第1行', input: '无', expected: '    *' },
        { name: '第5行', input: '无', expected: '*********' }
      ],
      xpReward: 15
    },
    {
      id: 3,
      title: '找出 100 以内的素数',
      description: '编写程序，找出 100 以内的所有素数（质数）并打印出来。\n\n素数的定义：只能被1和自身整除的大于1的自然数。\n\n提示：\n- 外层循环遍历 2 到 100\n- 内层循环检查是否能被其他数整除\n- 如果一个数能被 2 到 sqrt(n) 之间的任何数整除，就不是素数',
      difficulty: 'medium',
      initialCode: `# 找出100以内的所有素数

# 请在此处编写你的代码

`,
      testCode: `# 测试素数
import re

output = _output_buffer.getvalue()
numbers = [int(n) for n in re.findall(r'\\d+', output)]

# 100以内的素数列表
primes_under_100 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

# 检查用户输出的数字中包含多少正确的素数
found_primes = [n for n in numbers if n in primes_under_100]
correct_count = len(set(found_primes))

_test_results.append({
    "name": "包含2（唯一的偶素数）",
    "passed": 2 in numbers,
    "message": "2是唯一的偶素数，应该包含在内"
})

_test_results.append({
    "name": "找到至少20个素数",
    "passed": correct_count >= 20,
    "message": f"找到 {correct_count} 个正确的素数，100以内共有25个"
})

_test_results.append({
    "name": "没有包含非素数",
    "passed": all(n in primes_under_100 for n in numbers if n > 1),
    "message": "确保输出的都是素数，检查你的判断逻辑"
})
`,
      testCases: [
        { name: '包含2', input: '无', expected: '2' },
        { name: '包含97', input: '无', expected: '97' }
      ],
      xpReward: 20
    }
  ]
}
