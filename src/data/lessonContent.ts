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
      answer: `# 打印 1 到 20 之间的所有偶数
for i in range(2, 21, 2):
    print(i)`,
      explanation: `**关键点：range(start, stop, step)**
- start=2：从 2 开始
- stop=21：到 20 结束（左闭右开）
- step=2：每次加 2

**其他解法**：
- 解法 2：\`for i in range(1, 21): if i % 2 == 0: print(i)\`
- 解法 3：\`for i in range(20): print(i * 2 + 2)\`（不推荐，难懂）

**易错点**：
- 写成 \`range(1, 21, 2)\` 会得到 1, 3, 5...（奇数）
- 写成 \`range(2, 20, 2)\` 少一个 20（左闭右开）`,
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
      correctAnswer: 1,
      explanation: `**逐步拆解 range(1, 10, 3)**：
- start=1：起点是 1
- stop=10：终点是 10（不包含）
- step=3：每次加 3
- 序列：1, 1+3=4, 4+3=7, 7+3=10（10 ≥ 10，停止）
- 结果：**1, 4, 7**

**注意左闭右开**：
- \`range(1, 10)\` = 1,2,3,4,5,6,7,8,9（不包含 10）
- 加步长不影响这个规则`
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
      title: '练习：break 与 continue',
      type: 'practice',
      content: `**实战练习！** 使用 break 和 continue 完成两个小任务。

**任务 1**：打印 1 到 20 的数字，但**跳过**所有 3 的倍数
- 用 \`continue\` 跳过 3 的倍数

**任务 2**：从 1 开始累加，当和**超过 100** 时停止循环
- 用 \`break\` 退出循环
- 打印最终的累加和

预期输出：
\`\`\`
（任务1）1 2 4 5 7 8 10 11 13 14 16 17 19 20
（任务2）累加和 = 105
\`\`\``,
      hint: 'continue 用 if i % 3 == 0: continue；break 用 if total > 100: break',
      answer: `# 任务 1：跳过 3 的倍数
print("（任务1）", end="")
for i in range(1, 21):
    if i % 3 == 0:
        continue
    print(i, end=" ")
print()

# 任务 2：累加超过 100 停止
total = 0
for i in range(1, 1000):
    total += i
    if total > 100:
        break
print(f"（任务2）累加和 = {total}")`,
      explanation: `**continue 的工作原理**：
- 遇到 continue 后，**本次循环剩余的代码不再执行**
- 直接进入下一轮循环
- 任务 1 中：i=3 时 continue，所以不 print

**break 的工作原理**：
- 遇到 break 后，**整个循环立即终止**
- 任务 2 中：total=105 时 > 100，break 跳出

**调试技巧**：
- \`if i % 3 == 0\` 判断是否为 3 的倍数
- 也可以 \`if i in [3, 6, 9, ...]\` 但太麻烦
- break 写在累加之后，所以 total 已经包含了当前 i

**常见错误**：
- 把 \`if total > 100: break\` 写在累加之前会漏算
- 写 \`if total >= 100: break\` 会提前停止（结果不同）`
    },
    {
      id: 9,
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
      answer: `# 九九乘法表
for i in range(1, 10):
    for j in range(1, i + 1):
        print(f"{j}x{i}={j*i}", end="\\t")
    print()  # 换行`,
      explanation: `**嵌套循环的执行过程**：
- 外层 i=1 → 内层 j 跑 1 次：1x1=1
- 外层 i=2 → 内层 j 跑 1,2：1x2=2  2x2=4
- 外层 i=3 → 内层 j 跑 1,2,3：1x3=3  2x3=6  3x3=9
- ... 以此类推

**关键技巧**：
- \`end="\\t"\` 让数字间用制表符分隔，不换行
- 内层循环结束后 \`print()\` 用来换行
- 用 \`f"{j}x{i}={j*i}"\` 格式化更清晰

**易错点**：
- 内层写成 \`range(1, 10)\` 会变成矩形（每行都一样）
- 忘记内层 \`print()\` 会全部挤一行`,
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
  ],
  1: [
    {
      id: 1,
      title: '欢迎来到 Python 世界',
      type: 'explanation',
      content: `**Python** 是一门简洁、优雅、易学的编程语言，被广泛应用于数据分析、人工智能、网站开发、自动化脚本等领域。

为什么选择 Python？
- **语法简洁**：代码读起来像英语，非常适合初学者
- **功能强大**：拥有丰富的标准库和第三方库
- **社区活跃**：遇到问题很容易找到解决方案

Python 程序由一条条**语句**组成，每条语句完成一个操作。最简单的操作就是把信息输出到屏幕上。

让我们开始写第一行 Python 代码吧！`
    },
    {
      id: 2,
      title: 'print 函数：和世界打招呼',
      type: 'example',
      content: `**print()** 是 Python 中最常用的函数，它可以把内容输出到屏幕上。

基本用法：
\`\`\`
print("要输出的内容")
\`\`\`

- 双引号 \`"\` 或单引号 \`'\` 之间的内容称为**字符串**，会被原样输出
- print 默认在结尾换行
- 可以输出数字、文字、运算结果等

点击运行，看看效果：`,
      code: `# 我的第一个 Python 程序
print("Hello, World!")
print("你好，Python！")
print("1 + 1 =", 1 + 1)
print("学习编程很有趣")`
    },
    {
      id: 3,
      title: '注释：给代码写说明',
      type: 'explanation',
      content: `**注释**是写给人看的说明文字，Python 解释器会忽略注释内容。

Python 中有两种注释：

1. **单行注释**：以 \`#\` 开头，\`#\` 后面的内容会被忽略
   \`\`\`
   # 这是一行注释
   print("你好")  # 这也是注释
   \`\`\`

2. **多行注释**：用三引号 \`"""\` 或 \`'''\` 包裹（本质上是字符串）
   \`\`\`
   """
   这是多行注释
   可以写很多行
   """
   \`\`\`

**为什么要写注释？**
- 解释代码的功能和思路
- 方便日后维护和他人阅读
- 临时禁用某段代码（调试时常用）

好的注释让代码更易读，但也要避免过度注释显而易见的代码。`
    },
    {
      id: 4,
      title: '小练习：自我介绍',
      type: 'practice',
      content: `**动手试试！** 请使用 print 函数输出一段自我介绍。

要求：
- 第 1 行输出你的名字
- 第 2 行输出你的年龄
- 第 3 行输出你学习 Python 的目标
- 在代码中添加至少一行注释

示例输出：
\`\`\`
我叫小明
我今年 18 岁
我要成为 Python 高手
\`\`\``,
      hint: '每条信息用一个 print()，注释用 # 开头',
      answer: `# 自我介绍
# 作者：你的名字
print("我叫小明")
print("我今年 18 岁")
print("我要成为 Python 高手")`,
      explanation: `**解题思路**：
- 用 \`#\` 写注释说明作者信息
- 每条信息用 \`print()\` 函数输出
- 字符串必须用引号（单/双引号）包裹
- print 默认会换行，无需手动加换行符

**易错点**：
- 忘记加引号会报错 \`NameError\`
- 中文标点不会报错但建议用英文标点`,
      code: `# 在此写你的自我介绍
# 例如：print("我叫小明")

`,
      testCode: `# 测试自我介绍
output = _output_buffer.getvalue()
lines = [l for l in output.split('\\n') if l.strip()]

_test_results.append({
    "name": "至少输出3行",
    "passed": len(lines) >= 3,
    "message": f"输出了 {len(lines)} 行，需要至少 3 行"
})

_test_results.append({
    "name": "有实际内容",
    "passed": all(len(l.strip()) > 0 for l in lines),
    "message": "每行都应该有内容"
})
`
    },
    {
      id: 5,
      title: '字符串与转义字符',
      type: 'example',
      content: `在 print 中输出字符串时，有些特殊字符需要用 **转义字符** \`\\\` 来表示：

- \`\\\\n\` - 换行
- \`\\\\t\` - 制表符（Tab）
- \`\\\\\\\\\` - 反斜杠本身
- \`\\\\'\` - 单引号（在单引号字符串中）
- \`\\\\"\` - 双引号（在双引号字符串中）

另外，print 可以一次输出多个内容，用逗号分隔，默认用空格连接。

试试运行：`,
      code: `# 转义字符示例
print("第一行\\n第二行")  # 换行
print("姓名:\\t张三")    # 制表符
print("他说:\\"你好!\\"") # 输出引号

# 多个参数用逗号分隔
print("苹果", "香蕉", "橘子")
print("1 + 2 =", 3)

# 自定义分隔符
print("2025", "01", "01", sep="-")`
    },
    {
      id: 6,
      title: '小测验',
      type: 'quiz',
      content: `来测试一下你的理解！

**问题**：下面代码会输出什么？

\`\`\`
print("Hello", end=" ")
print("World")
\`\`\``,
      options: [
        'Hello 和 World 分别在两行',
        'Hello World 在同一行，中间有空格',
        'HelloWorld 在同一行，无空格',
        '程序报错'
      ],
      correctAnswer: 1,
      explanation: `**解析**：
- \`end=" "\` 把 print 默认的换行符改成了空格，所以第一行末尾不再换行
- 第二次 print 紧接着输出 \`World\`
- 最终输出是 \`Hello World\`（中间有空格）

**拓展知识**：
- \`end=""\` 可以让两次 print 紧挨着输出
- \`sep=""\` 可以让多个参数紧挨着输出（不加分隔）`
    },
    {
      id: 7,
      title: '实战：打印个性名片',
      type: 'practice',
      content: `**综合练习！** 请编写代码，输出一个有个性的"个人名片"。

要求：
- 用 print 输出至少 5 行内容
- 使用 \\n 或多个 print 实现换行
- 至少使用一次制表符 \\t 对齐
- 使用分隔线（如 ========）装饰

示例效果：
\`\`\`
==================
\\t个人名片
==================
姓名：\\t小明
职业：\\t学生
座右铭：\\t代码改变世界
==================
\`\`\``,
      hint: '可以用 print("=" * 18) 来生成分隔线',
      answer: `# 制作个人名片
print("=" * 18)
print("\t个人名片")
print("=" * 18)
print("姓名：\t小明")
print("职业：\t学生")
print("座右铭：\t代码改变世界")
print("=" * 18)`,
      explanation: `**解题思路**：
- 用 \`"=" * 18\` 快速生成长分隔线（字符串乘法）
- \\t 制表符让"姓名"、"职业"、"座右铭"对齐
- 每行单独 print 自动换行

**进阶技巧**：
- 把信息存到变量里，f-string 格式化：\`f"姓名：\\t{name}"\`
- 这样改名字时只改一处就够了`,
      code: `# 制作你的个人名片

`,
      testCode: `# 测试个人名片
output = _output_buffer.getvalue()
lines = [l for l in output.split('\\n') if l.strip()]

has_tab = '\\t' in output or '    ' in output
has_separator = '=' in output or '-' in output or '*' in output

_test_results.append({
    "name": "至少5行内容",
    "passed": len(lines) >= 5,
    "message": f"输出了 {len(lines)} 行，需要至少 5 行"
})

_test_results.append({
    "name": "使用了对齐",
    "passed": has_tab,
    "message": "建议使用 \\t 制表符对齐内容"
})

_test_results.append({
    "name": "有装饰分隔线",
    "passed": has_separator,
    "message": "添加分隔线让名片更美观"
})
`
    },
    {
      id: 8,
      title: '变量与赋值入门',
      type: 'explanation',
      content: `**变量**是用来存储数据的"小盒子"。

\`\`\`
name = "小明"
\`\`\`

上面的代码把字符串 \`"小明"\` 放进了名为 \`name\` 的盒子里。下次想用 \`"小明"\` 时，直接写 \`name\` 就行。

**为什么用变量？**
- 避免重复写同样的值
- 让代码更易读、修改更方便
- 一次定义，多处使用

**变量命名规则**：
- 只能包含字母、数字、下划线
- 不能以数字开头
- 区分大小写（Name 和 name 是不同的）
- 见名知意（age 比 a 好）`
    },
    {
      id: 9,
      title: '实战练习：变量版自我介绍',
      type: 'practice',
      content: `**再练一次！** 这次用 **变量** 和 **f-string** 重写自我介绍。

要求：
- 定义 \`name\`、\`age\`、\`hobby\` 三个变量（自己编内容）
- 用 f-string 把变量拼接到字符串里
- 输出至少 2 行包含变量的内容

提示：f-string 是 \`f"...{变量名}..."\``,
      hint: 'print(f"我是 {name}，今年 {age} 岁，喜欢 {hobby}")',
      answer: `# 用变量改造的自我介绍
name = "小明"
age = 18
hobby = "编程"

print(f"我是 {name}，今年 {age} 岁，喜欢 {hobby}")
print(f"欢迎和我一起学习 Python！")`,
      explanation: `**为什么用 f-string？**
- 比字符串拼接 (\`+\`) 更直观
- 比 \`format()\` 更简洁
- 可以在 \`{}\` 里放任何表达式：\`f"1+1={1+1}"\` → \`1+1=2\`

**三种写法对比**：
\`\`\`
# 写法1：+ 拼接（容易出错）
print("我是" + name + "，今年" + str(age) + "岁")

# 写法2：format
print("我是{}，今年{}岁".format(name, age))

# 写法3：f-string（推荐）
print(f"我是{name}，今年{age}岁")
\`\`\``,
      code: `# 请用变量和 f-string 写自我介绍

`,
      testCode: `# 测试变量自我介绍
output = _output_buffer.getvalue()

_test_results.append({
    "name": "输出非空",
    "passed": len(output.strip()) > 0,
    "message": "应该有输出内容"
})

_test_results.append({
    "name": "包含中文",
    "passed": any('\\u4e00' <= c <= '\\u9fff' for c in output),
    "message": "输出应该包含中文"
})
`
    }
  ],
  2: [
    {
      id: 1,
      title: '什么是变量？',
      type: 'explanation',
      content: `**变量**是存储数据的"盒子"。你可以把数据放进去，之后通过变量名来使用它。

比如：
\`\`\`
name = "小明"
age = 18
\`\`\`

这样，\`name\` 就代表字符串 "小明"，\`age\` 就代表数字 18。

**变量的命名规则**：
- 只能包含字母、数字、下划线
- 不能以数字开头
- 不能使用 Python 关键字（如 if、for、class）
- 区分大小写（Name 和 name 是不同的变量）
- 建议使用有意义的名字，如 user_age 而不是 a

Python 中变量不需要提前声明类型，赋值时自动确定类型，这就是"动态类型"。`
    },
    {
      id: 2,
      title: '创建和使用变量',
      type: 'example',
      content: `让我们来创建一些变量并使用它们。

在 Python 中，用 \`=\` 给变量赋值。注意 \`=\` 是赋值，不是数学中的"等于"。

\`\`\`
变量名 = 值
\`\`\`

变量可以反复赋值，也可以参与运算。运行下面的代码看看：`,
      code: `# 创建变量
name = "小明"
age = 18
height = 1.75

# 使用变量
print("姓名:", name)
print("年龄:", age)
print("身高:", height)

# 变量参与运算
next_age = age + 1
print("明年:", next_age, "岁")

# 变量重新赋值
age = 20
print("现在的年龄:", age)

# 多重赋值
a, b, c = 1, 2, 3
print(a, b, c)`
    },
    {
      id: 3,
      title: '基本数据类型',
      type: 'explanation',
      content: `Python 有几种基本数据类型：

| 类型 | 关键字 | 示例 | 说明 |
|------|--------|------|------|
| 整数 | int | 10, -5, 0 | 没有小数点的数 |
| 浮点数 | float | 3.14, -0.5 | 带小数点的数 |
| 字符串 | str | "hello" | 文本，用引号包裹 |
| 布尔值 | bool | True, False | 真或假，首字母大写 |

**查看变量类型**：使用 \`type()\` 函数
\`\`\`
type(42)        # <class 'int'>
type(3.14)      # <class 'float'>
type("hello")   # <class 'str'>
type(True)      # <class 'bool'>
\`\`\`

Python 会根据赋的值自动判断类型，你也可以用 \`int()\`、\`float()\`、\`str()\` 进行类型转换。`
    },
    {
      id: 4,
      title: '运算符',
      type: 'example',
      content: `Python 支持多种运算符：

**算术运算符**：
- \`+\` 加、\`-\` 减、\`*\` 乘、\`/\` 除
- \`//\` 整除（向下取整）
- \`%\` 取余数
- \`**\` 幂运算

**注意**：\`/\` 总是返回浮点数，即使能整除。

试试运行：`,
      code: `# 算术运算
a = 10
b = 3

print("加法:", a + b)       # 13
print("减法:", a - b)       # 7
print("乘法:", a * b)       # 30
print("除法:", a / b)       # 3.333...
print("整除:", a // b)      # 3
print("取余:", a % b)       # 1
print("幂运算:", a ** b)    # 1000

# 字符串也可以"运算"
print("哈" * 3)             # 哈哈哈
print("Hello" + " World")   # 拼接

# 增强赋值
x = 5
x += 3   # 等价于 x = x + 3
print("x += 3:", x)`
    },
    {
      id: 5,
      title: '小练习：计算 BMI',
      type: 'practice',
      content: `**练习时间！** 请编写代码计算 BMI（身体质量指数）。

BMI 公式：\`体重 / 身高的平方\`

要求：
- 创建变量 weight = 70（公斤）
- 创建变量 height = 1.75（米）
- 计算 BMI 并打印结果
- 打印时使用 f-string 格式化：\`f"BMI = {bmi:.2f}"\`
  （\`:.2f\` 表示保留 2 位小数）

预期输出：\`BMI = 22.86\``,
      hint: 'bmi = weight / (height ** 2)，然后用 f-string 打印',
      answer: `# 计算 BMI
weight = 70
height = 1.75

# 计算 BMI
bmi = weight / (height ** 2)

# 打印结果
print(f"BMI = {bmi:.2f}")`,
      explanation: `**解题步骤**：
1. 用 \`height ** 2\` 计算身高的平方
2. \`weight / (height ** 2)\` 得出 BMI
3. 用 f-string 的 \`{bmi:.2f}\` 保留 2 位小数

**关键点**：
- 运算符优先级：\`**\` 高于 \`/\`，但加括号更清晰
- \`{bmi:.2f}\` 里的 \`:\` 后是格式说明符
- \`.2f\` 表示保留 2 位的浮点数

**拓展**：
- \`{bmi:.1f}\` 保留 1 位
- \`{bmi:.0f}\` 保留 0 位（四舍五入）
- \`{bmi:8.2f}\` 总宽度 8，右对齐`,
      code: `# 计算 BMI
weight = 70
height = 1.75

# 在此计算 BMI 并打印

`,
      testCode: `# 测试 BMI 计算
output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含22",
    "passed": "22" in output,
    "message": "BMI 应该在 22 左右"
})

_test_results.append({
    "name": "包含小数",
    "passed": "." in output,
    "message": "BMI 应该有小数部分"
})

_test_results.append({
    "name": "结果接近22.86",
    "passed": "22.8" in output or "22.9" in output,
    "message": "70 / 1.75^2 ≈ 22.86，检查计算"
})
`
    },
    {
      id: 6,
      title: '小测验',
      type: 'quiz',
      content: `来测试一下你学到的知识！

**问题**：下面代码的输出是什么？

\`\`\`
x = 5
y = 2
print(x // y, x % y, x ** y)
\`\`\``,
      options: [
        '2 1 25',
        '2.5 1 10',
        '2 1 10',
        '2.5 1 25'
      ],
      correctAnswer: 0,
      explanation: `**逐步计算**：
- \`x // y\` = 5 \`//\` 2 = **2**（整除，向下取整）
- \`x % y\` = 5 \`%\` 2 = **1**（取余数）
- \`x ** y\` = 5 \`**\` 2 = **25**（5 的平方）

**注意**：
- \`/\` 是普通除法，结果是浮点数：5/2 = 2.5
- \`//\` 是整除，结果是整数：5//2 = 2（即使能整除，结果也是 int 类型在 Python 3 之前的版本，3 之后 \`/\` 总是返回 float）

**记忆技巧**：
- 整除\`//\`想象成"切一刀"
- 取余\`%\`想象成"切完剩下多少"`
    },
    {
      id: 7,
      title: '类型转换',
      type: 'practice',
      content: `**实战练习！** 不同类型的数据需要转换后才能正确运算。

请完成以下任务：
1. 有字符串 \`s1 = "15"\` 和 \`s2 = "27"\`
2. 将它们转换为整数并求和，打印结果
3. 有整数 \`n = 100\`，将其转换为字符串并与 \`"分"\` 拼接打印
4. 有字符串 \`"3.14"\`，转换为浮点数并打印其 2 倍

预期输出：
\`\`\`
42
100分
6.28
\`\`\``,
      hint: '使用 int()、float()、str() 进行类型转换',
      answer: `# 类型转换练习
s1 = "15"
s2 = "27"
n = 100

# 1. 字符串转整数求和
result = int(s1) + int(s2)
print(result)

# 2. 整数转字符串拼接
print(str(n) + "分")

# 3. 字符串转浮点数计算
print(float("3.14") * 2)`,
      explanation: `**关键函数**：
- \`int(字符串)\` → 整数（如 \`int("15")\` = 15）
- \`float(字符串)\` → 浮点数（如 \`float("3.14")\` = 3.14）
- \`str(数字)\` → 字符串（如 \`str(100)\` = "100"）

**为什么需要转换？**
- 字符串 \`+\` 是拼接：\`"15" + "27"\` = "1527"
- 数字 \`+\` 是相加：\`15 + 27\` = 42
- 字符串和数字不能直接 \`+\`，必须先转换

**易错点**：
- \`int("3.14")\` 会报错（不能把"3.14"直接转成 int）
- 应该先 \`float("3.14")\` 再 \`int(...)\``,
      code: `# 类型转换练习
s1 = "15"
s2 = "27"
n = 100

# 1. 字符串转整数求和

# 2. 整数转字符串拼接

# 3. 字符串转浮点数计算

`,
      testCode: `# 测试类型转换
output = _output_buffer.getvalue()
lines = [l.strip() for l in output.split('\\n') if l.strip()]

_test_results.append({
    "name": "包含42",
    "passed": "42" in output,
    "message": "15 + 27 = 42"
})

_test_results.append({
    "name": "包含100分",
    "passed": "100分" in output,
    "message": "应该输出 '100分'"
})

_test_results.append({
    "name": "包含6.28",
    "passed": "6.28" in output,
    "message": "3.14 * 2 = 6.28"
})
`
    }
  ],
  3: [
    {
      id: 1,
      title: '什么是条件判断？',
      type: 'explanation',
      content: `**条件判断**让程序能够根据不同的情况执行不同的代码，这是编程的核心能力之一。

生活中到处是条件判断：
- **如果**下雨，**就**带伞
- **如果**成绩 >= 60，**就**及格，**否则**不及格
- **如果**温度 > 30，穿短袖；**否则如果**温度 > 20，穿长袖；**否则**穿外套

Python 中用 \`if\` 语句实现条件判断：

\`\`\`
if 条件:
    条件成立时执行的代码
\`\`\`

**关键点**：
- 条件后面必须有冒号 \`:\`
- 缩进的代码块是条件成立时执行的内容
- Python 用**缩进**（通常是 4 个空格）表示代码层级`
    },
    {
      id: 2,
      title: 'if 语句入门',
      type: 'example',
      content: `最简单的条件判断就是 \`if\` 语句。

**比较运算符**：
- \`>\` 大于、\`<\` 小于
- \`>=\` 大于等于、\`<=\` 小于等于
- \`==\` 等于（注意是两个等号！）
- \`!=\` 不等于

比较的结果是**布尔值** \`True\` 或 \`False\`。

运行下面的例子：`,
      code: `# if 语句示例
age = 18

if age >= 18:
    print("你成年了！")
    print("可以考驾照了")

print("程序继续执行")

# 注意缩进！
score = 85
if score >= 60:
    print("恭喜，你及格了！")
    print(f"你的成绩是 {score} 分")`
    },
    {
      id: 3,
      title: 'if-else 和 if-elif-else',
      type: 'explanation',
      content: `很多时候我们需要处理多种情况，这时可以用 \`else\` 和 \`elif\`。

**if-else**：二选一
\`\`\`
if 条件:
    条件成立时执行
else:
    条件不成立时执行
\`\`\`

**if-elif-else**：多选一
\`\`\`
if 条件1:
    执行代码1
elif 条件2:
    执行代码2
elif 条件3:
    执行代码3
else:
    以上都不满足时执行
\`\`\`

**注意**：
- \`elif\` 是 "else if" 的缩写
- 程序会从上到下依次检查，**一旦某个条件成立就执行对应代码，然后跳出整个判断**
- \`else\` 不是必须的
- 只有一个分支会被执行`
    },
    {
      id: 4,
      title: '成绩等级判断',
      type: 'example',
      content: `让我们用 if-elif-else 来实现一个成绩等级判断系统。

规则：
- 90-100：A（优秀）
- 80-89：B（良好）
- 70-79：C（中等）
- 60-69：D（及格）
- 60 以下：F（不及格）

运行看看：`,
      code: `# 成绩等级判断
score = 85

if score >= 90:
    grade = "A"
    print("优秀！")
elif score >= 80:
    grade = "B"
    print("良好！")
elif score >= 70:
    grade = "C"
    print("中等")
elif score >= 60:
    grade = "D"
    print("及格")
else:
    grade = "F"
    print("不及格，加油！")

print(f"你的等级是 {grade}")

# 试试改改 score 的值，看看结果如何变化`
    },
    {
      id: 5,
      title: '逻辑运算符',
      type: 'explanation',
      content: `有时候需要组合多个条件，这就需要**逻辑运算符**：

| 运算符 | 含义 | 说明 |
|--------|------|------|
| \`and\` | 与 | 两边都为 True 才是 True |
| \`or\` | 或 | 任一边为 True 就是 True |
| \`not\` | 非 | 取反，True 变 False |

示例：
\`\`\`
age = 20
has_id = True

if age >= 18 and has_id:
    print("可以进入")

if age < 12 or age > 65:
    print("半价票")

if not has_id:
    print("请出示身份证")
\`\`\`

**短路求值**：
- \`A and B\`：如果 A 为 False，就不会判断 B
- \`A or B\`：如果 A 为 True，就不会判断 B`
    },
    {
      id: 6,
      title: '小练习：闰年判断',
      type: 'practice',
      content: `**练习！** 编写代码判断一个年份是否为闰年。

闰年规则：
1. 能被 4 整除但不能被 100 整除，**或者**
2. 能被 400 整除

要求：
- 设置变量 \`year = 2024\`
- 判断是否为闰年，打印 "2024 是闰年" 或 "2024 不是闰年"

测试：
- 2024 → 是闰年
- 1900 → 不是闰年
- 2000 → 是闰年`,
      hint: '条件：(year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)',
      answer: `# 闰年判断
year = 2024

if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
    print(f"{year} 是闰年")
else:
    print(f"{year} 不是闰年")`,
      explanation: `**闰年规则拆解**：
- 规则 1：能被 4 整除 **且** 不能被 100 整除（普通闰年）
- 规则 2：能被 400 整除（世纪闰年）
- 两个规则用 \`or\` 连接，满足任一即可

**为什么这么设计？**
- 地球公转一圈实际是 365.2422 天
- 4 年一闰（多了 0.968 天）能补回大部分
- 但每 100 年会多补一天，所以 100 年不闰
- 400 年又必须补回来（少算了 0.22 天）

**测试用例**：
- 2024：4 整除，100 不整除 → ✅ 是
- 1900：4 整除，100 也整除 → ❌ 不是
- 2000：400 整除 → ✅ 是`,
      code: `# 闰年判断
year = 2024

# 在此编写判断代码

`,
      testCode: `# 测试闰年判断
output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含闰年相关文字",
    "passed": "闰年" in output,
    "message": "输出应该包含 '闰年' 字样"
})

_test_results.append({
    "name": "2024是闰年",
    "passed": "是闰年" in output,
    "message": "2024 能被 4 整除且不被 100 整除，是闰年"
})
`
    },
    {
      id: 7,
      title: '小测验',
      type: 'quiz',
      content: `来测试一下你的理解！

**问题**：下面代码输出什么？

\`\`\`
x = 5
if x > 3:
    print("A")
elif x > 4:
    print("B")
else:
    print("C")
\`\`\``,
      options: [
        'A',
        'B',
        'A B',
        'C'
      ],
      correctAnswer: 0,
      explanation: `**关键点：if-elif-else 只执行第一个满足的分支**

- \`x > 3\`（5 > 3）→ **True**，执行 \`print("A")\`
- 第一个条件满足后，**elif 和 else 都不会再判断**
- 所以不会输出 B

**陷阱提醒**：
- 即使后面的 \`elif x > 4\` 也是 True，也不会执行
- 多个条件互斥时，**条件顺序很重要**：把更严格/更具体的条件放前面`
    },
    {
      id: 8,
      title: '实战：简易计算器',
      type: 'practice',
      content: `**综合挑战！** 编写一个简易计算器。

要求：
- 有两个数字变量 a = 12, b = 4
- 有一个运算符变量 op = "*"
- 用 if-elif-else 判断运算符，进行对应运算
- 打印结果，格式：\`12 * 4 = 48\`
- 支持 +、-、*、/ 四种运算
- 如果运算符不认识，打印 "不支持的运算"

提示：除法时注意输出可以是浮点数`,
      hint: '用 if op == "+": ... elif op == "-": ... 的结构',
      answer: `# 简易计算器
a = 12
b = 4
op = "*"

if op == "+":
    result = a + b
elif op == "-":
    result = a - b
elif op == "*":
    result = a * b
elif op == "/":
    result = a / b
else:
    result = "不支持的运算"

if result == "不支持的运算":
    print("不支持的运算")
else:
    print(f"{a} {op} {b} = {result}")`,
      explanation: `**实现思路**：
- 用 if-elif-else 链判断运算符
- 字符串用 \`==\` 比较（不是 \`=\`）
- 注意除法 \`/\` 在 Python 中返回浮点数

**格式控制技巧**：
- 用 f-string 拼接结果
- 把"是否支持"也用变量保存，统一处理

**进阶版（用字典）**：
\`\`\`
ops = {"+": lambda x,y: x+y, "-": lambda x,y: x-y}
result = ops.get(op, lambda x,y: "不支持")(a, b)
\`\`\``,
      code: `# 简易计算器
a = 12
b = 4
op = "*"

# 在此编写计算逻辑

`,
      testCode: `# 测试计算器
output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含48",
    "passed": "48" in output,
    "message": "12 * 4 = 48，应该输出 48"
})

_test_results.append({
    "name": "包含运算式",
    "passed": "12" in output and "4" in output,
    "message": "输出应该包含两个操作数"
})
`
    }
  ],
  5: [
    {
      id: 1,
      title: '列表：数据的集合',
      type: 'explanation',
      content: `**列表（list）**是 Python 中最常用的数据结构之一，它可以存储一组**有序**的数据。

特点：
- 用方括号 \`[]\` 创建
- 元素之间用逗号分隔
- 可以存储任意类型的数据
- **可以修改**（增、删、改）

\`\`\`
fruits = ["苹果", "香蕉", "橘子"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", True, 3.14]
\`\`\`

列表就像一排抽屉，每个抽屉有编号（**索引**），从 **0** 开始计数。

\`\`\`
索引:  0     1     2
     ["苹果", "香蕉", "橘子"]
      -3    -2    -1   （负数索引从后往前）
\`\`\`

列表在生活中无处不在：购物清单、成绩单、待办事项……都可以用列表表示。`
    },
    {
      id: 2,
      title: '创建和访问列表',
      type: 'example',
      content: `让我们来创建列表并访问其中的元素。

**访问元素**：\`列表名[索引]\`
- 正数索引从 0 开始
- 负数索引从 -1 开始（最后一个元素）

**修改元素**：\`列表名[索引] = 新值\`

**获取长度**：\`len(列表名)\`

运行下面的代码：`,
      code: `# 创建列表
fruits = ["苹果", "香蕉", "橘子", "葡萄", "西瓜"]

# 访问元素
print("第一个:", fruits[0])    # 苹果
print("第三个:", fruits[2])    # 橘子
print("最后一个:", fruits[-1]) # 西瓜

# 修改元素
fruits[0] = "芒果"
print("修改后:", fruits)

# 列表长度
print("共有", len(fruits), "种水果")

# 遍历列表
for fruit in fruits:
    print("-", fruit)`
    },
    {
      id: 3,
      title: '切片：截取部分列表',
      type: 'explanation',
      content: `**切片（slicing）**可以提取列表的一部分，非常强大。

语法：\`列表[起始:结束:步长]\`
- 包含起始位置，**不包含**结束位置（左闭右开）
- 三个参数都可以省略

\`\`\`
nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

nums[2:5]    # [2, 3, 4]  第2到第4个
nums[:3]     # [0, 1, 2]  前3个
nums[5:]     # [5, 6, 7, 8, 9]  第5个到最后
nums[::2]    # [0, 2, 4, 6, 8]  每隔一个取一个
nums[::-1]   # [9, 8, ..., 0]  反转列表
\`\`\`

**记忆技巧**：
- \`列表[:n]\` 取前 n 个
- \`列表[-n:]\` 取后 n 个
- \`列表[::-1]\` 反转列表`
    },
    {
      id: 4,
      title: '列表方法',
      type: 'example',
      content: `列表有很多内置方法，可以方便地增删改查。

**添加元素**：
- \`append(x)\` - 在末尾添加
- \`insert(i, x)\` - 在位置 i 插入
- \`extend(列表)\` - 合并另一个列表

**删除元素**：
- \`remove(x)\` - 删除第一个值为 x 的元素
- \`pop(i)\` - 删除并返回位置 i 的元素（默认最后一个）
- \`clear()\` - 清空列表

**其他常用方法**：
- \`sort()\` - 排序
- \`reverse()\` - 反转
- \`index(x)\` - 查找元素位置
- \`count(x)\` - 统计元素个数

试试运行：`,
      code: `# 列表方法演示
nums = [3, 1, 4, 1, 5, 9, 2, 6]

# 添加
nums.append(8)
print("添加后:", nums)

# 排序
nums.sort()
print("排序后:", nums)

# 反转
nums.reverse()
print("反转后:", nums)

# 统计
print("1 出现了", nums.count(1), "次")
print("5 的位置:", nums.index(5))

# 删除
nums.remove(1)  # 删除第一个 1
print("删除1后:", nums)

popped = nums.pop()  # 删除最后一个
print(f"弹出了 {popped}，剩余 {nums}")`
    },
    {
      id: 5,
      title: '小练习：列表操作',
      type: 'practice',
      content: `**练习时间！** 请完成以下列表操作：

1. 创建列表 \`numbers = [5, 2, 8, 1, 9, 3, 7]\`
2. 在末尾添加数字 10
3. 对列表进行排序
4. 打印排序后的列表
5. 打印列表中的最大值和最小值（使用 max() 和 min()）
6. 打印列表中第 2 到第 5 个元素（切片）

预期输出：
\`\`\`
[1, 2, 3, 5, 7, 8, 9, 10]
最大值: 10
最小值: 1
[2, 3, 5, 7]
\`\`\``,
      hint: 'append() 添加，sort() 排序，numbers[1:5] 取第2到第5个',
      code: `# 列表操作练习
numbers = [5, 2, 8, 1, 9, 3, 7]

# 1. 添加 10

# 2. 排序

# 3. 打印排序后的列表

# 4. 打印最大值和最小值

# 5. 打印第2到第5个元素

`,
      testCode: `# 测试列表操作
output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含10",
    "passed": "10" in output,
    "message": "列表应该包含添加的 10"
})

_test_results.append({
    "name": "包含最大值10",
    "passed": "10" in output,
    "message": "最大值应该是 10"
})

_test_results.append({
    "name": "包含最小值1",
    "passed": "1" in output,
    "message": "最小值应该是 1"
})

_test_results.append({
    "name": "有排序效果",
    "passed": "1" in output and "2" in output,
    "message": "检查是否正确排序"
})
`
    },
    {
      id: 6,
      title: '列表推导式',
      type: 'example',
      content: `**列表推导式**是 Python 的特色功能，可以用一行代码创建列表，非常优雅。

语法：
\`\`\`
[表达式 for 变量 in 可迭代对象]
[表达式 for 变量 in 可迭代对象 if 条件]
\`\`\`

对比传统写法：
\`\`\`
# 传统写法
squares = []
for i in range(10):
    squares.append(i ** 2)

# 列表推导式
squares = [i ** 2 for i in range(10)]
\`\`\`

运行下面的例子感受一下：`,
      code: `# 列表推导式示例

# 生成 0-9 的平方
squares = [i ** 2 for i in range(10)]
print("平方:", squares)

# 生成偶数
evens = [i for i in range(20) if i % 2 == 0]
print("偶数:", evens)

# 字符串转大写
words = ["hello", "world", "python"]
upper = [w.upper() for w in words]
print("大写:", upper)

# 嵌套推导式：二维矩阵
matrix = [[i * j for j in range(1, 4)] for i in range(1, 4)]
print("矩阵:", matrix)

# 带条件的推导式
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_squares = [n ** 2 for n in nums if n % 2 == 0]
print("偶数的平方:", even_squares)`
    },
    {
      id: 7,
      title: '小测验',
      type: 'quiz',
      content: `来测试一下你的理解！

**问题**：\`[1, 2, 3, 4, 5][1:4]\` 的结果是？`,
      options: [
        '[1, 2, 3, 4]',
        '[2, 3, 4]',
        '[2, 3, 4, 5]',
        '[1, 2, 3]'
      ],
      correctAnswer: 1
    },
    {
      id: 8,
      title: '元组：不可变的列表',
      type: 'explanation',
      content: `**元组（tuple）**和列表很像，但有一个重要区别：**元组创建后不能修改**。

特点：
- 用圆括号 \`()\` 创建
- 访问方式和列表相同（索引、切片）
- **不可变**：不能增、删、改元素
- 通常用于存储不该改变的数据

\`\`\`
point = (3, 4)           # 坐标
rgb = (255, 128, 0)      # 颜色
person = ("小明", 18, "学生")  # 个人信息
\`\`\`

**为什么要用元组？**
- 保护数据不被意外修改
- 比列表占用更少内存
- 可以作为字典的键（列表不行）

**注意**：单个元素的元组要加逗号：\`(42,)\` 而不是 \`(42)\`

**解包**：元组（和列表）可以方便地解包到多个变量
\`\`\`
x, y = point
name, age, role = person
\`\`\``
    }
  ],
  6: [
    {
      id: 1,
      title: '字典：键值对的集合',
      type: 'explanation',
      content: `**字典（dict）**是 Python 中极其重要的数据结构，它用**键值对（key-value）**存储数据。

想象一本电话簿：
- 名字 → 电话号码
- 通过"名字"（键）查找"电话号码"（值）

\`\`\`
phonebook = {
    "小明": "13800138000",
    "小红": "13900139000",
    "小刚": "13700137000"
}
\`\`\`

特点：
- 用花括号 \`{}\` 创建
- 每个元素是 \`键: 值\` 的形式
- **键必须唯一**，且不可变（字符串、数字、元组）
- **值可以是任意类型**
- 通过键访问值，速度非常快

字典在 Python 中无处不在：JSON 数据、配置文件、数据库记录……都常用字典表示。`
    },
    {
      id: 2,
      title: '创建和访问字典',
      type: 'example',
      content: `让我们来创建字典并访问其中的数据。

**创建字典**：
\`\`\`
d = {"键1": "值1", "键2": "值2"}
\`\`\`

**访问值**：\`字典[键]\`
- 如果键不存在会报错 KeyError
- 用 \`字典.get(键)\` 更安全，不存在时返回 None

**添加/修改**：\`字典[键] = 值\`

运行下面的代码：`,
      code: `# 创建字典
student = {
    "name": "小明",
    "age": 18,
    "grade": "高三",
    "score": 95
}

# 访问
print("姓名:", student["name"])
print("年龄:", student["age"])

# 用 get 访问（更安全）
print("性别:", student.get("gender", "未设置"))

# 添加新键值对
student["gender"] = "男"
print("添加后:", student)

# 修改值
student["score"] = 98
print("修改后:", student)

# 获取所有键、值、键值对
print("所有键:", list(student.keys()))
print("所有值:", list(student.values()))

# 遍历字典
for key, value in student.items():
    print(f"{key}: {value}")`
    },
    {
      id: 3,
      title: '字典的增删改查',
      type: 'explanation',
      content: `字典的基本操作可以总结为"增删改查"：

**增**（添加）：
\`\`\`
d["新键"] = 新值
d.update({"键": "值", "键2": "值2"})  # 合并另一个字典
\`\`\`

**删**（删除）：
\`\`\`
del d["键"]          # 删除指定键值对
d.pop("键")          # 删除并返回值
d.popitem()          # 删除最后一个键值对
d.clear()            # 清空字典
\`\`\`

**改**（修改）：
\`\`\`
d["已有键"] = 新值   # 直接赋值即可修改
\`\`\`

**查**（查询）：
\`\`\`
d["键"]              # 获取值，不存在则报错
d.get("键", 默认值)  # 获取值，不存在返回默认值
"键" in d            # 检查键是否存在
d.keys()             # 所有键
d.values()           # 所有值
d.items()            # 所有键值对
\`\`\``
    },
    {
      id: 4,
      title: '字典实战：词频统计',
      type: 'example',
      content: `字典非常适合用来做统计。让我们统计一段文字中每个字符出现的次数。

这个例子展示了字典的经典用法：
1. 遍历数据
2. 检查键是否存在
3. 更新计数

也可以用 \`collections.Counter\` 快速实现，但手写一遍更能理解原理。`,
      code: `# 词频统计
text = "hello world hello python"

# 方法1：手动统计
word_count = {}
for word in text.split():
    if word in word_count:
        word_count[word] += 1
    else:
        word_count[word] = 1

print("统计结果:")
for word, count in word_count.items():
    print(f"  {word}: {count}次")

# 方法2：使用 get() 更简洁
word_count2 = {}
for word in text.split():
    word_count2[word] = word_count2.get(word, 0) + 1

print("用get统计:", word_count2)

# 字符统计
char_count = {}
for char in "abracadabra":
    char_count[char] = char_count.get(char, 0) + 1
print("字符统计:", char_count)`
    },
    {
      id: 5,
      title: '小练习：学生成绩管理',
      type: 'practice',
      content: `**练习！** 用字典管理学生成绩。

要求：
1. 创建字典 \`scores = {"小明": 85, "小红": 92, "小刚": 78, "小丽": 96}\`
2. 添加新学生 "小华": 88
3. 修改 "小刚" 的成绩为 82
4. 删除 "小明" 的记录
5. 打印所有学生及其成绩
6. 计算并打印平均成绩（保留 1 位小数）

预期输出包含：
\`\`\`
小红: 92
小刚: 82
小丽: 96
小华: 88
平均成绩: 89.5
\`\`\``,
      hint: '添加用 scores["小华"]=88，删除用 del scores["小明"]，求和用 sum(scores.values())',
      code: `# 学生成绩管理
scores = {"小明": 85, "小红": 92, "小刚": 78, "小丽": 96}

# 1. 添加小华

# 2. 修改小刚成绩

# 3. 删除小明

# 4. 打印所有学生成绩

# 5. 计算并打印平均成绩

`,
      testCode: `# 测试学生成绩管理
output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含92",
    "passed": "92" in output,
    "message": "小红的成绩 92 应该出现"
})

_test_results.append({
    "name": "包含82",
    "passed": "82" in output,
    "message": "小刚修改后的成绩 82 应该出现"
})

_test_results.append({
    "name": "包含88",
    "passed": "88" in output,
    "message": "小华的成绩 88 应该出现"
})

_test_results.append({
    "name": "包含85为错误",
    "passed": "85" not in output or "82" in output,
    "message": "小明应被删除，85 不应出现（除非有其他匹配）"
})

_test_results.append({
    "name": "包含平均成绩",
    "passed": "89.5" in output or "89" in output,
    "message": "平均成绩约为 89.5"
})
`
    },
    {
      id: 6,
      title: '集合：去重利器',
      type: 'explanation',
      content: `**集合（set）**是一个**无序**、**不重复**的元素集合。

特点：
- 用花括号 \`{}\` 或 \`set()\` 创建
- 元素**自动去重**
- 无序（不能用索引访问）
- 支持集合运算：交集、并集、差集

\`\`\`
# 创建集合
s1 = {1, 2, 3, 4, 5}
s2 = {4, 5, 6, 7, 8}

# 集合运算
s1 & s2   # 交集 {4, 5}
s1 | s2   # 并集 {1, 2, 3, 4, 5, 6, 7, 8}
s1 - s2   # 差集 {1, 2, 3}
\`\`\`

**常用场景**：
- 列表去重：\`list(set([1, 1, 2, 2, 3]))\` → \`[1, 2, 3]\`
- 判断成员关系：\`x in 集合\`（比列表快得多）
- 集合运算（找共同好友、差异等）

**注意**：空集合必须用 \`set()\` 创建，\`{}\` 创建的是空字典！`
    },
    {
      id: 7,
      title: '小测验',
      type: 'quiz',
      content: `来测试一下你的理解！

**问题**：执行下面代码后，\`result\` 是什么？

\`\`\`
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}
result = a & b
\`\`\``,
      options: [
        '{1, 2, 3, 4, 5, 6}',
        '{3, 4}',
        '{1, 2, 5, 6}',
        '{1, 2, 3, 4}'
      ],
      correctAnswer: 1
    },
    {
      id: 8,
      title: '实战：集合运算练习',
      type: 'practice',
      content: `**综合练习！** 用集合解决实际问题。

场景：两个班级的学生名单
\`\`\`
class_a = {"小明", "小红", "小刚", "小丽", "小华"}
class_b = {"小红", "小刚", "小强", "小芳"}
\`\`\`

要求：
1. 找出两个班都有的学生（交集），打印 "共同学生: ..."
2. 找出所有学生（并集），打印 "所有学生: ..."
3. 找出只在 A 班的学生（差集），打印 "只在A班: ..."
4. 统计总共有多少不同的学生

提示：用 &、|、- 运算符`,
      hint: '交集用 &，并集用 |，差集用 -',
      code: `# 集合运算练习
class_a = {"小明", "小红", "小刚", "小丽", "小华"}
class_b = {"小红", "小刚", "小强", "小芳"}

# 1. 交集：共同学生

# 2. 并集：所有学生

# 3. 差集：只在A班的学生

# 4. 统计总人数

`,
      testCode: `# 测试集合运算
output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含共同学生",
    "passed": "小红" in output and "小刚" in output,
    "message": "小红和小刚是两个班共同的学生"
})

_test_results.append({
    "name": "包含所有学生",
    "passed": "小明" in output and "小强" in output,
    "message": "应该包含所有学生"
})

_test_results.append({
    "name": "只在A班的学生",
    "passed": "小明" in output and "小丽" in output,
    "message": "小明和小丽只在A班"
})

_test_results.append({
    "name": "包含数字统计",
    "passed": any(c.isdigit() for c in output),
    "message": "应该有总人数的数字"
})
`
    }
  ],
  7: [
    {
      id: 1,
      title: '什么是函数？',
      type: 'explanation',
      content: `**函数**是把一段代码"打包"起来，可以反复使用的机制。

想象一台"榨汁机"：
- **输入**：水果（参数）
- **处理**：榨汁（函数体）
- **输出**：果汁（返回值）

你不需要知道榨汁机内部怎么工作，只需要知道怎么用。

**为什么要用函数？**
- **避免重复**：写一次，用多次
- **代码清晰**：把复杂问题分解成小模块
- **易于维护**：修改一处，处处生效
- **便于测试**：独立测试每个函数

Python 中定义函数用 \`def\` 关键字：

\`\`\`
def 函数名(参数):
    函数体
    return 返回值
\`\`\`

函数名要有意义，通常用小写字母和下划线，如 \`calculate_area\`。`
    },
    {
      id: 2,
      title: '定义和调用函数',
      type: 'example',
      content: `让我们来定义和调用几个简单的函数。

**要点**：
- \`def\` 定义函数
- \`return\` 返回结果（如果没有 return，返回 None）
- 调用时用 \`函数名(参数)\`
- 函数必须**先定义，后调用**

运行下面的代码：`,
      code: `# 定义一个简单的函数
def greet(name):
    """向某人问好"""
    return f"你好，{name}！"

# 调用函数
message = greet("小明")
print(message)
print(greet("小红"))

# 带多个参数的函数
def add(a, b):
    return a + b

print("3 + 5 =", add(3, 5))
print("10 + 20 =", add(10, 20))

# 没有 return 的函数
def say_hello():
    print("Hello!")

result = say_hello()
print("返回值:", result)  # None

# 函数可以返回多个值
def min_max(numbers):
    return min(numbers), max(numbers)

minimum, maximum = min_max([3, 1, 4, 1, 5, 9])
print(f"最小: {minimum}, 最大: {maximum}")`
    },
    {
      id: 3,
      title: '参数的多种形式',
      type: 'explanation',
      content: `Python 函数的参数非常灵活，支持多种形式：

**1. 位置参数**（按顺序传递）
\`\`\`
def power(base, exp):
    return base ** exp
power(2, 3)   # 2^3 = 8
\`\`\`

**2. 默认参数**（有默认值，可省略）
\`\`\`
def greet(name, msg="你好"):
    return f"{msg}，{name}！"
greet("小明")           # 你好，小明！
greet("小明", "嗨")     # 嗨，小明！
\`\`\`

**3. 关键字参数**（按名称传递，顺序无关）
\`\`\`
power(exp=3, base=2)   # 8
\`\`\`

**4. 可变参数**（接收任意数量参数）
\`\`\`
def sum_all(*args):       # 接收元组
    return sum(args)
sum_all(1, 2, 3, 4)       # 10

def show_info(**kwargs):  # 接收字典
    for k, v in kwargs.items():
        print(f"{k}: {v}")
show_info(name="小明", age=18)
\`\`\`

**规则**：参数顺序为 位置参数 → 默认参数 → *args → **kwargs`
    },
    {
      id: 4,
      title: '默认参数和关键字参数',
      type: 'example',
      content: `让我们深入练习默认参数和关键字参数的用法。

默认参数让函数调用更灵活，关键字参数让代码更易读。`,
      code: `# 默认参数
def introduce(name, age, city="北京"):
    return f"我叫{name}，{age}岁，来自{city}"

print(introduce("小明", 18))
print(introduce("小红", 20, "上海"))
print(introduce("小刚", 19, city="广州"))

# 关键字参数让调用更清晰
def create_user(name, email, age=18, active=True):
    return {
        "name": name,
        "email": email,
        "age": age,
        "active": active
    }

# 用关键字参数，顺序可以打乱
user = create_user(email="tom@test.com", name="Tom", age=25)
print("用户:", user)

# 可变参数
def calculate(*numbers, operation="sum"):
    if operation == "sum":
        return sum(numbers)
    elif operation == "avg":
        return sum(numbers) / len(numbers)
    elif operation == "max":
        return max(numbers)

print("求和:", calculate(1, 2, 3, 4, 5))
print("平均值:", calculate(1, 2, 3, 4, 5, operation="avg"))
print("最大值:", calculate(3, 7, 1, 9, 2, operation="max"))`
    },
    {
      id: 5,
      title: '小练习：计算面积函数',
      type: 'practice',
      content: `**练习！** 编写计算图形面积的函数。

要求：
1. 定义函数 \`rectangle_area(length, width)\`，返回矩形面积
2. 定义函数 \`circle_area(radius, pi=3.14)\`，返回圆面积（pi 有默认值）
3. 调用 \`rectangle_area(5, 3)\` 打印结果
4. 调用 \`circle_area(4)\` 打印结果
5. 调用 \`circle_area(4, pi=3.14159)\` 打印更精确的结果

预期输出：
\`\`\`
矩形面积: 15
圆面积: 50.24
圆面积(精确): 50.26544
\`\`\``,
      hint: 'def rectangle_area(length, width): return length * width',
      code: `# 在此定义和调用函数

# 1. 定义 rectangle_area


# 2. 定义 circle_area


# 3. 调用并打印

`,
      testCode: `# 测试面积函数
output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含15",
    "passed": "15" in output,
    "message": "矩形面积 5*3=15"
})

_test_results.append({
    "name": "包含50.24",
    "passed": "50.24" in output,
    "message": "圆面积 3.14*16=50.24"
})

_test_results.append({
    "name": "包含50.265",
    "passed": "50.265" in output or "50.27" in output,
    "message": "精确圆面积约为 50.265"
})
`
    },
    {
      id: 6,
      title: '递归：函数调用自己',
      type: 'example',
      content: `**递归**是函数调用自身的技巧，适合解决可以分解为同类子问题的问题。

经典例子：阶乘
- 5! = 5 × 4!
- 4! = 4 × 3!
- ...
- 1! = 1（**基准条件**）

递归的两个必要条件：
1. **基准条件**：停止递归的条件（否则会无限循环）
2. **递归条件**：向基准条件靠近

\`\`\`
def factorial(n):
    if n <= 1:        # 基准条件
        return 1
    return n * factorial(n - 1)  # 递归调用
\`\`\`

运行看看：`,
      code: `# 递归求阶乘
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

print("5! =", factorial(5))   # 120
print("10! =", factorial(10)) # 3628800

# 递归求斐波那契数
def fib(n):
    if n <= 0:
        return 0
    if n == 1:
        return 1
    return fib(n - 1) + fib(n - 2)

print("斐波那契数列前10项:")
for i in range(10):
    print(fib(i), end=" ")
print()

# 递归求和
def sum_to(n):
    if n == 0:
        return 0
    return n + sum_to(n - 1)

print("1到100的和:", sum_to(100))`
    },
    {
      id: 7,
      title: '小测验',
      type: 'quiz',
      content: `来测试一下你的理解！

**问题**：递归函数必须有什么，否则会出错？`,
      options: [
        '至少一个参数',
        '基准条件（停止条件）',
        '返回值必须是数字',
        '必须有两个以上的参数'
      ],
      correctAnswer: 1
    },
    {
      id: 8,
      title: '实战：判断素数函数',
      type: 'practice',
      content: `**综合挑战！** 编写一个判断素数的函数。

要求：
1. 定义函数 \`is_prime(n)\`，接收一个整数
2. 如果 n 是素数返回 True，否则返回 False
3. 素数：大于 1 且只能被 1 和自身整除的数
4. 用该函数检查 7（是素数）和 9（不是素数），打印结果

提示：
- n <= 1 不是素数
- 检查 2 到 n-1 是否有能整除 n 的数
- 优化：只需检查到 sqrt(n)

预期输出：
\`\`\`
7 是素数: True
9 是素数: False
\`\`\``,
      hint: 'def is_prime(n): if n <= 1: return False; for i in range(2, n): if n % i == 0: return False; return True',
      code: `# 定义判断素数的函数


# 测试
print("7 是素数:", is_prime(7))
print("9 是素数:", is_prime(9))

`,
      testCode: `# 测试素数函数
output = _output_buffer.getvalue()

_test_results.append({
    "name": "7是素数返回True",
    "passed": "True" in output,
    "message": "7 是素数，应该返回 True"
})

_test_results.append({
    "name": "9不是素数返回False",
    "passed": "False" in output,
    "message": "9 不是素数（9=3*3），应该返回 False"
})

_test_results.append({
    "name": "同时包含True和False",
    "passed": "True" in output and "False" in output,
    "message": "应该同时有 True 和 False 的结果"
})
`
    }
  ],
  8: [
    {
      id: 1,
      title: '文件操作基础',
      type: 'explanation',
      content: `程序的数据通常存在内存中，程序结束就消失了。**文件操作**让数据可以持久化保存。

Python 操作文件三步走：
1. **打开文件**：\`open(文件路径, 模式)\`
2. **读/写**：读取或写入内容
3. **关闭文件**：\`close()\`

**打开模式**：
| 模式 | 含义 | 说明 |
|------|------|------|
| \`'r'\` | 读 | 读取文件（默认），文件不存在会报错 |
| \`'w'\` | 写 | 覆盖写入，文件不存在则创建 |
| \`'a'\` | 追加 | 在末尾追加，文件不存在则创建 |
| \`'r+'\` | 读写 | 读写模式 |

\`\`\`
# 基本写法（不推荐，忘了 close 会出问题）
f = open("test.txt", "w")
f.write("Hello!")
f.close()
\`\`\`

**编码问题**：中文文件建议指定 \`encoding="utf-8"\`，否则可能出现乱码。

\`\`\`
f = open("test.txt", "w", encoding="utf-8")
\`\`\``
    },
    {
      id: 2,
      title: 'with 语句：安全操作文件',
      type: 'example',
      content: `**with 语句**是操作文件的最佳实践，它会自动关闭文件，即使出错也不会遗漏。

\`\`\`
with open("文件", "模式") as f:
    操作 f
# 离开 with 块后自动关闭
\`\`\`

**为什么用 with？**
- 自动关闭文件，不用手动 \`close()\`
- 即使中途出错（异常），文件也会被正确关闭
- 代码更简洁

运行下面的代码：`,
      code: `# 写入文件
with open("demo.txt", "w", encoding="utf-8") as f:
    f.write("第一行\\n")
    f.write("第二行\\n")
    f.write("第三行\\n")

print("文件写入完成！")

# 读取整个文件
with open("demo.txt", "r", encoding="utf-8") as f:
    content = f.read()
print("--- read() 读取全部 ---")
print(content)

# 逐行读取
with open("demo.txt", "r", encoding="utf-8") as f:
    print("--- 逐行读取 ---")
    for line in f:
        print("行:", line.strip())

# 读取所有行到列表
with open("demo.txt", "r", encoding="utf-8") as f:
    lines = f.readlines()
print("--- readlines() ---")
print(lines)`
    },
    {
      id: 3,
      title: '读写方法详解',
      type: 'explanation',
      content: `文件读写有多种方法，各有用途：

**读取方法**：
- \`f.read()\` - 读取整个文件为一个字符串
- \`f.readline()\` - 读取一行
- \`f.readlines()\` - 读取所有行，返回列表
- \`for line in f:\` - 逐行遍历（**最推荐**，内存友好）

**写入方法**：
- \`f.write(s)\` - 写入字符串（**不会自动换行**）
- \`f.writelines(列表)\` - 写入多行（也不会自动换行）
- \`print(s, file=f)\` - 写入并自动换行

**文件指针**：
- 读写会移动"指针"位置
- \`f.seek(0)\` 可以回到开头
- \`f.tell()\` 查看当前位置

**追加模式**：
\`\`\`
with open("log.txt", "a") as f:
    f.write("新日志\\n")  # 不会覆盖原内容
\`\`\`

**小技巧**：写入时如果要换行，需要手动加 \`\\n\`。`
    },
    {
      id: 4,
      title: '异常处理：try-except',
      type: 'example',
      content: `程序运行时可能出错（文件不存在、除以零等），**异常处理**让程序在出错时优雅地处理，而不是崩溃。

语法：
\`\`\`
try:
    可能出错的代码
except 错误类型:
    处理错误的代码
else:
    没出错时执行
finally:
    无论如何都执行
\`\`\`

运行看看：`,
      code: `# 异常处理示例
try:
    # 尝试打开不存在的文件
    with open("不存在.txt", "r") as f:
        content = f.read()
except FileNotFoundError:
    print("错误：文件不存在！")
except PermissionError:
    print("错误：没有权限！")

# 捕获多种异常
try:
    num = int("abc")
except ValueError as e:
    print(f"值错误: {e}")

# try-except-else-finally
try:
    result = 10 / 2
except ZeroDivisionError:
    print("不能除以零！")
else:
    print(f"结果是 {result}")
finally:
    print("无论如何都会执行")

# 实际应用：安全读取文件
def safe_read(filename):
    try:
        with open(filename, "r", encoding="utf-8") as f:
            return f.read()
    except FileNotFoundError:
        return "文件不存在"
    except Exception as e:
        return f"读取出错: {e}"

print(safe_read("不存在.txt"))`
    },
    {
      id: 5,
      title: '小练习：写日记本',
      type: 'practice',
      content: `**练习！** 编写一个简单的日记本程序。

要求：
1. 用 with 语句打开文件 \`diary.txt\`（写入模式）
2. 写入 3 行内容：今天的日期、天气、心情
3. 再次用 with 语句以读取模式打开，读取并打印所有内容

预期输出：
\`\`\`
日记已保存
--- 读取日记 ---
日期：2025-01-1
天气：晴
心情：开心
\`\`\``,
      hint: 'with open("diary.txt", "w", encoding="utf-8") as f: f.write(...)',
      code: `# 简单日记本

# 1. 写入日记


print("日记已保存")

# 2. 读取日记
print("--- 读取日记 ---")

`,
      testCode: `# 测试日记本
output = _output_buffer.getvalue()

_test_results.append({
    "name": "提示已保存",
    "passed": "保存" in output or "已" in output,
    "message": "应该提示日记已保存"
})

_test_results.append({
    "name": "有读取标记",
    "passed": "读取" in output or "日记" in output,
    "message": "应该有读取日记的标记"
})

_test_results.append({
    "name": "有多行内容",
    "passed": len([l for l in output.split('\\n') if l.strip()]) >= 3,
    "message": "应该至少有 3 行输出"
})
`
    },
    {
      id: 6,
      title: '小测验',
      type: 'quiz',
      content: `来测试一下你的理解！

**问题**：使用 \`with open(...) as f:\` 的好处是什么？`,
      options: [
        '读取速度更快',
        '会自动关闭文件，即使出错也不会遗漏',
        '可以同时打开更多文件',
        '文件内容会自动加密'
      ],
      correctAnswer: 1
    },
    {
      id: 7,
      title: '实战：学生成绩文件处理',
      type: 'practice',
      content: `**综合练习！** 处理学生成绩文件。

要求：
1. 用 with 语句写入文件 \`scores.txt\`，内容如下：
\`\`\`
小明,85
小红,92
小刚,78
小丽,96
\`\`\`
2. 用 with 语句读取文件
3. 解析每行，提取姓名和成绩
4. 计算并打印平均成绩
5. 找出最高分的学生并打印

预期输出包含：
\`\`\`
平均成绩: 87.75
最高分: 小丽 96
\`\`\``,
      hint: '用 line.strip().split(",") 解析每行，成绩用 int() 转换',
      code: `# 学生成绩文件处理

# 1. 写入文件


# 2. 读取并处理


# 3. 打印结果

`,
      testCode: `# 测试成绩处理
output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含平均成绩",
    "passed": "87" in output,
    "message": "平均成绩 (85+92+78+96)/4 = 87.75"
})

_test_results.append({
    "name": "包含最高分96",
    "passed": "96" in output,
    "message": "最高分是 96"
})

_test_results.append({
    "name": "包含小丽",
    "passed": "小丽" in output,
    "message": "最高分学生是小丽"
})
`
    }
  ],
  9: [
    {
      id: 1,
      title: '项目实战：综合运用',
      type: 'explanation',
      content: `恭喜你来到最后一关！到这里，你已经学会了 Python 的核心知识：

- ✅ 基本语法和输入输出
- ✅ 变量和数据类型
- ✅ 条件判断
- ✅ 循环
- ✅ 列表、元组、字典、集合
- ✅ 函数和递归
- ✅ 文件操作和异常处理

**项目实战**的目标是把这些知识**综合运用**，做出一个完整的程序。

好的项目应该具备：
- **结构清晰**：用函数组织代码
- **交互友好**：有菜单和提示
- **数据持久**：用文件保存数据
- **健壮稳定**：处理异常输入

接下来我们将通过示例和练习，完成几个小项目，把所学知识串联起来。`
    },
    {
      id: 2,
      title: '项目结构：模块化设计',
      type: 'example',
      content: `好的项目会把代码组织成一个个**函数**，每个函数负责一个功能。

让我们看一个"学生管理"项目的雏形：

\`\`\`
def show_menu():       # 显示菜单
def add_student():     # 添加学生
def list_students():   # 列出学生
def save_to_file():    # 保存到文件
def load_from_file():  # 从文件加载
def main():            # 主循环
\`\`\`

运行下面的示例：`,
      code: `# 学生管理项目雏形
students = []  # 全局变量存储学生数据

def add_student(name, score):
    """添加学生"""
    students.append({"name": name, "score": score})
    print(f"已添加: {name} {score}分")

def list_students():
    """列出所有学生"""
    if not students:
        print("暂无学生数据")
        return
    print("--- 学生列表 ---")
    for s in students:
        print(f"  {s['name']}: {s['score']}分")

def get_average():
    """计算平均分"""
    if not students:
        return 0
    total = sum(s["score"] for s in students)
    return total / len(students)

def get_top_student():
    """找最高分学生"""
    if not students:
        return None
    return max(students, key=lambda s: s["score"])

# 测试功能
add_student("小明", 85)
add_student("小红", 92)
add_student("小刚", 78)

list_students()
print(f"平均分: {get_average():.1f}")
top = get_top_student()
print(f"最高分: {top['name']} {top['score']}分")`
    },
    {
      id: 3,
      title: '综合示例：猜数字游戏',
      type: 'example',
      content: `让我们综合运用条件判断、循环、函数，做一个**猜数字游戏**。

游戏规则：
1. 程序随机生成 1-100 的数字
2. 玩家输入猜测
3. 提示"大了"或"小了"
4. 猜中后显示用了多少次

这个例子展示了：
- 函数封装功能
- while 循环
- 条件判断
- 异常处理（输入不是数字时）

由于交互式输入在教程中不便演示，这里用预设猜测来模拟：`,
      code: `import random

def generate_number():
    """生成随机数"""
    return random.randint(1, 100)

def check_guess(guess, target):
    """检查猜测结果"""
    if guess < target:
        return "小了"
    elif guess > target:
        return "大了"
    else:
        return "猜对了"

def play_game(guesses):
    """模拟游戏（用预设的猜测列表）"""
    target = generate_number()
    print(f"目标数字: {target}（调试用）")
    
    for i, guess in enumerate(guesses, 1):
        result = check_guess(guess, target)
        print(f"第{i}次猜 {guess}: {result}")
        if result == "猜对了":
            print(f"恭喜！用了 {i} 次")
            return i
    return -1

# 模拟猜测过程
guesses = [50, 75, 63, 70, 68]
play_game(guesses)

# 另一局
print("\\n--- 新一局 ---")
play_game([30, 60, 45, 50])`
    },
    {
      id: 4,
      title: '数据持久化：文件存储',
      type: 'explanation',
      content: `真正的项目需要把数据**保存到文件**，下次启动时再加载。

**JSON** 是最常用的数据存储格式，Python 内置 \`json\` 模块支持。

\`\`\`
import json

# 写入 JSON 文件
data = {"name": "小明", "score": 85}
with open("data.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

# 读取 JSON 文件
with open("data.json", "r", encoding="utf-8") as f:
    loaded = json.load(f)
\`\`\`

**项目数据管理模式**：
- 程序启动时：\`load()\` 从文件读取数据到内存
- 用户操作时：在内存中增删改查
- 程序退出前：\`save()\` 把数据写回文件

**为什么用 JSON？**
- 人类可读的文本格式
- 跨语言支持（几乎所有编程语言都支持）
- 可以存储字典、列表等复杂结构
- \`ensure_ascii=False\` 让中文正常显示`
    },
    {
      id: 5,
      title: '小练习：任务管理器',
      type: 'practice',
      content: `**项目练习！** 编写一个简单的任务管理器。

要求：
1. 定义函数 \`add_task(tasks, name)\`，添加任务到列表
2. 定义函数 \`show_tasks(tasks)\`，打印所有任务
3. 定义函数 \`complete_task(tasks, index)\`，标记完成
4. 创建任务列表，添加 3 个任务
5. 完成第 1 个任务（标记为已完成）
6. 打印最终任务列表

任务用字典表示：\`{"name": "任务名", "done": False}\`

预期输出：
\`\`\`
[1] 学习Python [未完成]
[2] 写作业 [未完成]
[3] 运动 [未完成]
--- 完成第1个任务 ---
[1] 学习Python [已完成]
[2] 写作业 [未完成]
[3] 运动 [未完成]
\`\`\``,
      hint: 'add_task 用 tasks.append({"name": name, "done": False})',
      code: `# 任务管理器

# 1. 定义 add_task 函数


# 2. 定义 show_tasks 函数


# 3. 定义 complete_task 函数


# 4. 创建并添加任务
tasks = []


# 5. 打印任务


# 6. 完成第1个任务
print("--- 完成第1个任务 ---")


# 7. 再次打印

`,
      testCode: `# 测试任务管理器
output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含3个任务",
    "passed": output.count("未完成") + output.count("已完成") >= 3,
    "message": "应该有 3 个任务"
})

_test_results.append({
    "name": "有完成标记",
    "passed": "已完成" in output,
    "message": "应该有标记为已完成的任务"
})

_test_results.append({
    "name": "包含学习Python",
    "passed": "学习" in output or "Python" in output or "python" in output,
    "message": "应该包含一个学习相关的任务"
})
`
    },
    {
      id: 6,
      title: '小测验',
      type: 'quiz',
      content: `来测试一下你的综合理解！

**问题**：开发一个项目时，把代码分成多个函数的好处是什么？`,
      options: [
        '运行速度更快',
        '代码更清晰、易于维护、可以复用',
        '可以省略变量',
        '不需要写注释'
      ],
      correctAnswer: 1
    },
    {
      id: 7,
      title: '实战：简易通讯录',
      type: 'practice',
      content: `**终极挑战！** 综合运用所有知识，做一个简易通讯录。

要求：
1. 用**列表**存储联系人，每个联系人是**字典**：\`{"name": "...", "phone": "..."}\`
2. 定义函数 \`add_contact(contacts, name, phone)\` 添加联系人
3. 定义函数 \`find_contact(contacts, name)\` 按姓名查找
4. 定义函数 \`show_all(contacts)\` 显示所有联系人
5. 添加 3 个联系人
6. 查找其中一个并打印结果
7. 显示所有联系人

预期输出包含：
\`\`\`
--- 所有联系人 ---
小明: 13800138000
小红: 13900139000
小刚: 13700137000
--- 查找 小明 ---
小明: 13800138000
\`\`\``,
      hint: 'find_contact 用 for 循环遍历，if c["name"] == name 判断',
      code: `# 简易通讯录

# 1. 定义函数
def add_contact(contacts, name, phone):
    pass  # 替换为你的代码

def find_contact(contacts, name):
    pass  # 替换为你的代码

def show_all(contacts):
    pass  # 替换为你的代码

# 2. 添加联系人
contacts = []


# 3. 显示所有联系人
print("--- 所有联系人 ---")


# 4. 查找联系人
print("--- 查找 小明 ---")

`,
      testCode: `# 测试通讯录
output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含3个联系人",
    "passed": output.count("138") + output.count("139") + output.count("137") >= 3,
    "message": "应该有 3 个电话号码"
})

_test_results.append({
    "name": "有查找功能",
    "passed": "查找" in output or "搜索" in output or "小明" in output,
    "message": "应该有查找联系人的功能"
})

_test_results.append({
    "name": "包含小明",
    "passed": "小明" in output,
    "message": "通讯录应该包含小明"
})

_test_results.append({
    "name": "包含电话号码",
    "passed": "138" in output or "139" in output,
    "message": "应该有电话号码"
})
`
    },
    {
      id: 8,
      title: '恭喜完成学习之旅！',
      type: 'explanation',
      content: `🎉 **恭喜！** 你已经完成了 Python 学习之旅！

**回顾你学到的知识**：
1. **基础语法** - print、注释、字符串
2. **变量与类型** - int、float、str、bool、运算符
3. **条件判断** - if-elif-else、逻辑运算
4. **循环** - for、while、break、continue
5. **数据结构** - 列表、元组、字典、集合
6. **函数** - 定义、参数、返回值、递归
7. **文件操作** - 读写、with 语句、异常处理
8. **项目实战** - 综合运用

**下一步建议**：
- 📚 继续学习面向对象编程（类和对象）
- 🌐 探索 Python 标准库（os、sys、datetime、re）
- 📦 学习第三方库（requests、pandas、numpy）
- 💼 做一个完整的项目（爬虫、网站、数据分析）
- 🤝 加入 Python 社区，参与开源项目

**记住**：编程是实践的艺术，多写代码、多思考、多阅读他人的代码，你会越来越厉害！

祝你在 Python 的道路上越走越远！🚀`
    }
  ],
  // ============== 字符串深入 ==============
  10: [
    {
      id: 1,
      title: '字符串的本质',
      type: 'explanation',
      content: `**字符串（str）**是 Python 中最重要的数据类型之一，它在底层是**不可变**的字符序列。

**字符串的三大特点**：
- 不可变：创建后不能修改任何字符
- 可迭代：可以用 for 遍历每个字符
- 支持索引：和列表一样有正/负索引

\`\`\`
s = "Hello"
s[0]      # 'H'
s[-1]     # 'o'
s[1:4]    # 'ell'
\`\`\`

**多行字符串**：用三引号 ('三个双引号' 或 '三个单引号') 创建，可跨行。`
    },
    {
      id: 2,
      title: '字符串常用方法（上）',
      type: 'example',
      content: `Python 字符串提供了大量实用方法，下面是常用的几个：

**查找类**：
- \`str.find(sub)\` - 查找子串位置，找不到返回 -1
- \`str.index(sub)\` - 同 find，但找不到会报错
- \`str.count(sub)\` - 统计子串出现次数

**判断类**：
- \`str.startswith(prefix)\` - 是否以指定前缀开头
- \`str.endswith(suffix)\` - 是否以指定后缀结尾
- \`str.isdigit()\` / \`isalpha()\` / \`isspace()\` - 是否为数字/字母/空白

运行下面的代码：`,
      code: `text = "Hello, Python World!"

# 查找
print(text.find("Python"))    # 7
print(text.count("o"))          # 3
print(text.startswith("Hello")) # True
print(text.endswith("!"))        # True

# 判断
print("123".isdigit())   # True
print("abc".isalpha())   # True
print("  ".isspace())    # True
print("abc123".isalnum()) # True（字母+数字）`
    },
    {
      id: 3,
      title: '字符串常用方法（下）',
      type: 'example',
      content: `**修改类**（注意：原字符串不变，返回新字符串）：
- \`str.replace(old, new)\` - 替换
- \`str.upper()\` / \`lower()\` - 大小写转换
- \`str.strip()\` - 去除两端空白（也支持 lstrip/rstrip）
- \`str.split(sep)\` - 分割为列表
- \`str.join(iterable)\` - 用字符串连接可迭代对象

试试看：`,
      code: `text = "  Hello, World!  "

print("|" + text.strip() + "|")           # |Hello, World!|
print(text.upper())                       # HELLO
print(text.lower())                       # hello
print(text.replace("World", "Python"))     # Hello, Python!

# 分割和连接
words = "apple,banana,orange".split(",")
print(words)                  # ['apple', 'banana', 'orange']
print("-".join(words))        # apple-banana-orange`
    },
    {
      id: 4,
      title: '小练习：字符串处理',
      type: 'practice',
      content: `**练习！** 综合运用字符串方法。

要求：
- 给定字符串 \`s = "  Hello, Python!  "\`
- 去除两端空白
- 全部转为大写
- 用 ", " 分割成列表
- 打印每一步的结果

预期输出：
\`\`\`
原: '|' + s + '|'
处理: 'Hello, Python!'
大写: 'HELLO, PYTHON!'
列表: ['Hello', 'Python!']
\`\`\``,
      hint: '按顺序用 strip() → upper() → split(", ")',
      answer: `s = "  Hello, Python!  "

# 1. 去空白
cleaned = s.strip()
print(f"清理: '{cleaned}'")

# 2. 转大写
upper = cleaned.upper()
print(f"大写: '{upper}'")

# 3. 分割
parts = upper.split(", ")
print(f"列表: {parts}")`,
      explanation: `**关键点**：
- \`strip()\` 默认去除空格、\\t、\\n
- \`upper()\` 返回新字符串，原字符串不变
- \`split(", ")\` 按 ", " 分割（注意空格）
- 三步操作可以链式调用：\`s.strip().upper().split(", ")\``,
      code: `s = "  Hello, Python!  "

# 在此完成字符串处理

`,
      testCode: `output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含Hello",
    "passed": "Hello" in output,
    "message": "应该包含清理后的 Hello"
})
_test_results.append({
    "name": "包含大写",
    "passed": "HELLO" in output,
    "message": "应该包含大写的 HELLO"
})
_test_results.append({
    "name": "包含列表",
    "passed": "[" in output and "]" in output,
    "message": "应该有列表形式输出"
})
`
    },
    {
      id: 5,
      title: '字符串格式化',
      type: 'explanation',
      content: `**字符串格式化**是把变量插入到字符串中的方法。Python 提供了多种方式：

**1. f-string（Python 3.6+，推荐）**
\`\`\`
name = "小明"
age = 18
print(f"我是{name}，今年{age}岁")  # 我是小明，今年18岁
\`\`\`

**2. format() 方法**
\`\`\`
print("我是{}，今年{}岁".format(name, age))
print("我是{0}，今年{1}岁".format(name, age))
\`\`\`

**3. % 格式化（旧式）**
\`\`\`
print("我是%s，今年%d岁" % (name, age))
\`\`\`

**4. 格式化控制**
- \`{:.2f}\` - 保留 2 位小数
- \`{:>10}\` - 右对齐，宽度 10
- \`{:,}\` - 千分位分隔符
- \`{:.2%}\` - 百分比格式`
    },
    {
      id: 6,
      title: '小测验',
      type: 'quiz',
      content: `**问题**：执行下面代码后输出什么？

\`\`\`
s = "  hello world  "
print(s.strip().title())
\`\`\``,
      options: [
        'hello world',
        'Hello World',
        '  hello world  ',
        'HELLO WORLD'
      ],
      correctAnswer: 1,
      explanation: `**逐步执行**：
- \`s.strip()\` → "hello world"（去两端空白）
- \`.title()\` → "Hello World"（每个单词首字母大写）

**记忆技巧**：
- \`title()\` 把每个单词的首字母大写
- \`capitalize()\` 只把第一个字母大写
- \`upper()\` 全部大写，\`lower()\` 全部小写`
    }
  ],
  // ============== 模块与包 ==============
  11: [
    {
      id: 1,
      title: '什么是模块？',
      type: 'explanation',
      content: `**模块（module）**就是一个 .py 文件，里面定义了函数、变量、类。

为什么要用模块？
- **代码组织**：把相关代码放一起
- **代码复用**：一处定义，多处使用
- **命名空间**：避免命名冲突

**三种导入方式**：

\`\`\`
# 1. import 模块
import math
print(math.pi)       # 3.14159...

# 2. from 模块 import 名称
from math import pi, sqrt
print(pi)             # 3.14159...

# 3. import 模块 as 别名
import numpy as np
print(np.array([1, 2, 3]))
\`\`\`

**import 的本质**：执行模块文件，并把名字存入当前命名空间。`
    },
    {
      id: 2,
      title: '__name__ 变量',
      type: 'explanation',
      content: `**\`__name__\`** 是 Python 的内置变量，表示当前模块的名字。

- 当文件**直接运行**时，\`__name__ = "__main__"\`
- 当文件**被导入**时，\`__name__\` = 模块名

**经典用法**：
\`\`\`
def main():
    print("主程序")

if __name__ == "__main__":
    main()
\`\`\`

这样写的好处：
- 直接运行：执行 main()
- 被导入：不会执行 main()，避免副作用`
    },
    {
      id: 3,
      title: '常用标准库',
      type: 'example',
      content: `Python 自带大量标准库，无需安装即可使用：

**sys** - 系统相关
\`\`\`
import sys
print(sys.version)         # Python 版本
print(sys.platform)        # 操作系统
\`\`\`

**os** - 操作系统接口
\`\`\`
import os
print(os.getcwd())         # 当前工作目录
print(os.listdir("."))     # 列出文件
\`\`\`

**datetime** - 日期时间
\`\`\`
from datetime import datetime
now = datetime.now()
print(now.year, now.month, now.day)
\`\`\`

**random** - 随机数
\`\`\`
import random
print(random.randint(1, 10))   # 1-10 随机整数
print(random.choice(["A", "B", "C"]))
\`\`\`

运行：`,
      code: `import sys
import os
import random
from datetime import datetime

# 系统信息
print("Python:", sys.version.split()[0])
print("平台:", sys.platform)

# 随机数
nums = [random.randint(1, 100) for _ in range(5)]
print("随机数:", nums)
print("最大:", max(nums), "最小:", min(nums))

# 当前时间
now = datetime.now()
print(f"现在是 {now.year}年{now.month}月{now.day}日")`
    },
    {
      id: 4,
      title: '小练习：自定义模块',
      type: 'practice',
      content: `**练习！** 创建一个简单的工具模块。

要求：
- 定义一个变量 \`PI = 3.14159\`
- 定义函数 \`circle_area(r)\` 计算圆面积
- 定义函数 \`circle_circumference(r)\` 计算圆周长
- 在主程序中导入并使用这些

预期输出：
\`\`\`
面积: 78.54
周长: 31.42
\`\`\``,
      hint: '使用 from 模块 import 方式，或者在同一文件模拟模块',
      answer: `# 在同一文件中模拟"自定义模块"
PI = 3.14159

def circle_area(r):
    """计算圆的面积"""
    return PI * r ** 2

def circle_circumference(r):
    """计算圆的周长"""
    return 2 * PI * r

# 模拟 from mymodule import circle_area
from types import SimpleNamespace
mymodule = SimpleNamespace(
    PI=PI,
    circle_area=circle_area,
    circle_circumference=circle_circumference
)

# 使用
print(f"面积: {mymodule.circle_area(5):.2f}")
print(f"周长: {mymodule.circle_circumference(5):.2f}")`,
      explanation: `**真实使用场景**：
- 假设 \`mymodule.py\` 是保存的模块文件
- 主程序用 \`from mymodule import circle_area\` 导入
- 因为 Pyodide 没有文件系统，用 SimpleNamespace 模拟

**模块文件示例（mymodule.py）**：
\`\`\`
PI = 3.14159

def circle_area(r):
    return PI * r ** 2
\`\`\``,
      code: `# 模拟创建工具模块
PI = 3.14159

def circle_area(r):
    # 在此实现
    pass

def circle_circumference(r):
    # 在此实现
    pass

# 测试
print(f"面积: {circle_area(5):.2f}")
print(f"周长: {circle_circumference(5):.2f}")

`,
      testCode: `output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含78.5",
    "passed": "78.5" in output or "78.54" in output,
    "message": "圆面积应该是 78.54"
})
_test_results.append({
    "name": "包含31.4",
    "passed": "31.4" in output or "31.42" in output,
    "message": "圆周长应该是 31.42"
})
`
    },
    {
      id: 5,
      title: '小测验',
      type: 'quiz',
      content: `**问题**：关于 \`__name__\` 变量，下面哪个说法正确？`,
      options: [
        '总是等于 "__main__"',
        '直接运行时等于模块名',
        '直接运行时等于 "__main__"，被导入时等于模块名',
        '等于文件名（不含扩展名）'
      ],
      correctAnswer: 2,
      explanation: `**正确答案**：直接运行时 \`__name__ == "__main__"\`，被导入时等于模块名。

**经典模式**：
\`\`\`
if __name__ == "__main__":
    # 只在直接运行时执行
    main()
\`\`\`

这个模式让模块既可以独立运行（测试），也可以被其他文件导入。`
    }
  ],
  // ============== 面向对象基础 ==============
  12: [
    {
      id: 1,
      title: '什么是面向对象？',
      type: 'explanation',
      content: `**面向对象编程（OOP）**是一种组织代码的方式，把数据和操作数据的函数"打包"在一起。

**核心概念**：
- **类（Class）** - 对象的模板/蓝图
- **对象（Object）** - 类的实例
- **属性（Attribute）** - 对象的数据
- **方法（Method）** - 对象的函数

**为什么要用 OOP？**
- **封装**：把数据和方法打包，隐藏细节
- **复用**：类可以反复创建多个对象
- **可维护**：结构清晰，易于扩展

**类比**：类是"手机设计图"，对象是"生产出的手机"。`
    },
    {
      id: 2,
      title: '定义第一个类',
      type: 'example',
      content: `**\`class\`** 关键字用来定义类。

最简单的类：
\`\`\`
class Dog:
    pass
\`\`\`

带属性和方法的类：
\`\`\`
class Dog:
    # 构造函数
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    # 方法
    def bark(self):
        return f"{self.name} 在汪汪叫"
    
    def info(self):
        return f"{self.name} 今年 {self.age} 岁"
\`\`\`

**关键点**：
- \`__init__\` 是构造函数，创建对象时自动调用
- \`self\` 指向当前对象
- 访问属性用 \`对象.属性\`
- 调用方法用 \`对象.方法()\`

试试：`,
      code: `class Dog:
    """狗类"""
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def bark(self):
        return f"{self.name} 在汪汪叫"
    
    def info(self):
        return f"{self.name} 今年 {self.age} 岁"

# 创建对象
dog1 = Dog("旺财", 3)
dog2 = Dog("小黑", 5)

# 访问属性
print(dog1.name)
print(dog2.age)

# 调用方法
print(dog1.bark())
print(dog2.info())`
    },
    {
      id: 3,
      title: 'self 的含义',
      type: 'explanation',
      content: `**self** 是方法的第一个参数，指向**调用该方法的对象**。

\`\`\`
class Cat:
    def __init__(self, name):
        self.name = name  # self.name 是对象的属性
    
    def meow(self):
        return f"{self.name} 在喵喵叫"

cat = Cat("小花")
cat.meow()  # 实际调用 Cat.meow(cat)
\`\`\`

**注意事项**：
- self 必须作为第一个参数（约定俗成）
- 调用方法时**不需要**传 self，Python 自动传入
- self 不是关键字，可以用其他名字，但强烈建议用 self`
    },
    {
      id: 4,
      title: '小练习：学生类',
      type: 'practice',
      content: `**练习！** 定义一个 \`Student\` 类。

要求：
- 属性：\`name\`（姓名）、\`score\`（成绩）
- 方法 \`is_pass()\`：成绩 >= 60 返回 True，否则 False
- 方法 \`grade()\`：返回等级（A: 90+, B: 80+, C: 70+, D: 60+, F: 其他）
- 创建两个学生并测试

预期输出：
\`\`\`
小明 及格: True 等级: B
小红 及格: False 等级: F
\`\`\``,
      hint: '用 if-elif 在 grade() 中判断分数',
      answer: `class Student:
    def __init__(self, name, score):
        self.name = name
        self.score = score
    
    def is_pass(self):
        return self.score >= 60
    
    def grade(self):
        if self.score >= 90:
            return "A"
        elif self.score >= 80:
            return "B"
        elif self.score >= 70:
            return "C"
        elif self.score >= 60:
            return "D"
        else:
            return "F"

# 测试
s1 = Student("小明", 85)
s2 = Student("小红", 45)

print(f"{s1.name} 及格: {s1.is_pass()} 等级: {s1.grade()}")
print(f"{s2.name} 及格: {s2.is_pass()} 等级: {s2.grade()}")`,
      explanation: `**关键点**：
- \`__init__\` 中用 \`self.xxx = xxx\` 创建实例属性
- 每个方法第一个参数都是 self
- 调用时 \`对象.方法()\` 不需要传 self

**改进版**：
- 添加 \`__str__\` 方法可以自定义 print 输出
- 用 @property 装饰器可以把方法当属性调用`,
      code: `class Student:
    def __init__(self, name, score):
        self.name = name
        self.score = score
    
    def is_pass(self):
        # 在此实现
        pass
    
    def grade(self):
        # 在此实现
        pass

# 测试
s1 = Student("小明", 85)
s2 = Student("小红", 45)
print(f"{s1.name} 及格: {s1.is_pass()} 等级: {s1.grade()}")
print(f"{s2.name} 及格: {s2.is_pass()} 等级: {s2.grade()}")

`,
      testCode: `output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含小明",
    "passed": "小明" in output,
    "message": "应该输出学生姓名"
})
_test_results.append({
    "name": "包含B等级",
    "passed": "B" in output,
    "message": "85分应该是B等级"
})
_test_results.append({
    "name": "包含F等级",
    "passed": "F" in output,
    "message": "45分应该是F等级"
})
_test_results.append({
    "name": "及格判断正确",
    "passed": "True" in output and "False" in output,
    "message": "应该同时有 True 和 False"
})
`
    },
    {
      id: 5,
      title: '类属性 vs 实例属性',
      type: 'explanation',
      content: `Python 类有两种属性：

**实例属性**：每个对象独有
\`\`\`
class Dog:
    def __init__(self, name):
        self.name = name  # 实例属性

d1 = Dog("旺财")
d2 = Dog("小黑")
print(d1.name)  # 旺财
print(d2.name)  # 小黑
\`\`\`

**类属性**：所有对象共享
\`\`\`
class Dog:
    species = "犬科"  # 类属性
    
    def __init__(self, name):
        self.name = name

d1 = Dog("旺财")
d2 = Dog("小黑")
print(d1.species)  # 犬科
print(d2.species)  # 犬科
\`\`\`

**访问方式**：
- 实例属性：\`对象.属性\`
- 类属性：\`类名.属性\` 或 \`对象.属性\``
    },
    {
      id: 6,
      title: '小测验',
      type: 'quiz',
      content: `**问题**：下面代码会输出什么？

\`\`\`
class Counter:
    count = 0
    
    def __init__(self):
        Counter.count += 1

a = Counter()
b = Counter()
c = Counter()
print(Counter.count)
\`\`\``,
      options: [
        '0',
        '1',
        '2',
        '3'
      ],
      correctAnswer: 3,
      explanation: `**解析**：
- 创建第一个对象 \`a\`：count 变为 1
- 创建第二个对象 \`b\`：count 变为 2
- 创建第三个对象 \`c\`：count 变为 3
- \`Counter.count\` 输出 3

**关键点**：
- 类属性被所有实例共享
- 修改类属性用 \`类名.属性 = 值\``
    }
  ],
  // ============== 继承与多态 ==============
  13: [
    {
      id: 1,
      title: '什么是继承？',
      type: 'explanation',
      content: `**继承（Inheritance）**是 OOP 的核心特性，让一个新类可以基于现有类创建，自动获得父类的属性和方法。

**为什么要继承？**
- **代码复用**：不用重写父类的代码
- **扩展性**：可以在子类中添加新功能
- **层次结构**：建立类的层次关系

**基本语法**：
\`\`\`
class Parent:        # 父类（基类）
    pass

class Child(Parent): # 子类（派生类）
    pass
\`\`\`

**示例**：Dog 继承 Animal
\`\`\`
class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        return "..."

class Dog(Animal):
    pass  # 自动继承父类所有方法

d = Dog("旺财")
print(d.speak())  # ...
print(d.name)     # 旺财
\`\`\``
    },
    {
      id: 2,
      title: '方法重写（Override）',
      type: 'example',
      content: `子类可以**重写**父类的方法，提供自己的实现：

\`\`\`
class Animal:
    def speak(self):
        return "..."

class Dog(Animal):
    def speak(self):  # 重写父类方法
        return "汪汪汪"

class Cat(Animal):
    def speak(self):  # 重写父类方法
        return "喵喵喵"

d = Dog()
c = Cat()
print(d.speak())  # 汪汪汪
print(c.speak())  # 喵喵喵
\`\`\`

**super() 函数**：调用父类的方法
\`\`\`
class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name)  # 调用父类 __init__
        self.breed = breed
\`\`\`

试试：`,
      code: `class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        return "..."

    def info(self):
        return f"我是 {self.name}"

class Dog(Animal):
    def speak(self):
        return "汪汪汪"

class Cat(Animal):
    def speak(self):
        return "喵喵喵"

animals = [Dog("旺财"), Cat("小花"), Dog("小黑")]
for a in animals:
    print(f"{a.name}: {a.speak()}")`
    },
    {
      id: 3,
      title: '多态',
      type: 'explanation',
      content: `**多态（Polymorphism）**：相同的方法调用，不同的对象有不同的行为。

\`\`\`
def make_speak(animal):
    print(animal.speak())

make_speak(Dog("旺财"))  # 汪汪汪
make_speak(Cat("小花"))  # 喵喵喵
\`\`\`

**多态的好处**：
- 代码更灵活，添加新类不需要改 make_speak
- 符合"开放-封闭"原则：对扩展开放，对修改封闭

**Python 的鸭子类型**：
"如果它走起来像鸭子、叫起来像鸭子，那它就是鸭子"
- 不需要显式继承，只要对象有 speak() 方法就行
- 比传统 OOP 更灵活`
    },
    {
      id: 4,
      title: '小练习：图形继承',
      type: 'practice',
      content: `**练习！** 用 OOP 实现图形面积计算。

要求：
- 父类 \`Shape\`：方法 \`area()\` 返回 0
- 子类 \`Circle\`：属性 radius，重写 \`area()\` 返回 πr²
- 子类 \`Rectangle\`：属性 width、height，重写 \`area()\` 返回 w*h
- 创建一个列表，包含 1 个圆和 1 个矩形，遍历打印面积

预期输出：
\`\`\`
圆面积: 78.54
矩形面积: 24
\`\`\``,
      hint: '在 Shape 中定义 area(self) 返回 0，子类用 super().__init__() 或自定义',
      answer: `import math

class Shape:
    def __init__(self):
        pass
    
    def area(self):
        return 0

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):
        return math.pi * self.radius ** 2

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def area(self):
        return self.width * self.height

# 测试
shapes = [Circle(5), Rectangle(4, 6)]
for s in shapes:
    name = type(s).__name__
    print(f"{name}面积: {s.area():.2f}")`,
      explanation: `**关键点**：
- 子类用 \`class 子类(父类):\` 继承
- 重写方法：定义同名方法
- \`type(s).__name__\` 获取类名
- 圆面积公式：π × r²
- 矩面积公式：w × h

**多态体现**：
- 同一个 \`s.area()\` 调用，根据对象类型返回不同结果`,
      code: `import math

class Shape:
    def area(self):
        return 0

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    # 在此重写 area()

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
    # 在此重写 area()

# 测试多态
shapes = [Circle(5), Rectangle(4, 6)]
for s in shapes:
    name = type(s).__name__
    print(f"{name}面积: {s.area():.2f}")

`,
      testCode: `output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含78.5",
    "passed": "78.5" in output or "78.54" in output,
    "message": "圆面积应该是 78.54"
})
_test_results.append({
    "name": "包含24",
    "passed": "24" in output or "24.00" in output,
    "message": "矩形面积应该是 24"
})
`
    },
    {
      id: 5,
      title: '小测验',
      type: 'quiz',
      content: `**问题**：调用 \`super().__init__()\` 的作用是什么？`,
      options: [
        '创建新的父类对象',
        '调用父类的构造函数',
        '删除父类的属性',
        '返回 self'
      ],
      correctAnswer: 1,
      explanation: `**super()** 函数用于调用父类的方法，常用于：
- 调用父类的 \`__init__\`
- 调用父类被重写的方法
- 确保父类的初始化逻辑被执行

**示例**：
\`\`\`
class Parent:
    def __init__(self):
        self.x = 10

class Child(Parent):
    def __init__(self):
        super().__init__()  # 调用 Parent.__init__
        self.y = 20

c = Child()
print(c.x)  # 10
print(c.y)  # 20
\`\`\``
    }
  ],
  // ============== 异常处理进阶 ==============
  14: [
    {
      id: 1,
      title: '异常的传播',
      type: 'explanation',
      content: `当异常没有被捕获时，它会**沿着调用栈向上传播**，直到被某个 try-except 捕获或导致程序崩溃。

\`\`\`
def level3():
    return 1 / 0  # ZeroDivisionError

def level2():
    return level3()

def level1():
    return level2()

# 在 main 中捕获
try:
    level1()
except ZeroDivisionError:
    print("捕获到除零异常")
\`\`\`

**异常传播的好处**：
- 底层只管抛出
- 上层决定如何处理
- 让异常处理逻辑更集中`
    },
    {
      id: 2,
      title: '自定义异常',
      type: 'example',
      content: `除了内置异常，还可以**自定义异常类**：

\`\`\`
class AgeError(Exception):
    """年龄不合法异常"""
    pass

def set_age(age):
    if age < 0 or age > 150:
        raise AgeError(f"年龄 {age} 不合法")
    return age

try:
    set_age(200)
except AgeError as e:
    print(f"错误: {e}")
\`\`\`

**为什么要自定义？**
- 让错误信息更具体
- 便于上层针对性处理
- 让代码更易读

**最佳实践**：继承 \`Exception\` 类

试试：`,
      code: `class PasswordError(Exception):
    """密码错误异常"""
    pass

def login(username, password):
    if password != "123456":
        raise PasswordError(f"用户 {username} 密码错误")
    return f"欢迎 {username}"

# 测试
try:
    msg = login("admin", "wrong")
    print(msg)
except PasswordError as e:
    print(f"登录失败: {e}")

# 正常情况
try:
    msg = login("admin", "123456")
    print(msg)
except PasswordError as e:
    print(f"登录失败: {e}")`
    },
    {
      id: 3,
      title: 'with 语句与上下文管理',
      type: 'explanation',
      content: `**with 语句**用于资源管理，自动执行清理操作（如关闭文件）。

\`\`\`
with open("test.txt", "r") as f:
    content = f.read()
# 文件自动关闭，即使发生异常
\`\`\`

**原理**：实现了 \`__enter__\` 和 \`__exit__\` 方法的对象都可以用 with。

\`\`\`
class MyContext:
    def __enter__(self):
        print("进入")
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        print("退出")
        return False

with MyContext() as ctx:
    print("使用 ctx")
# 输出：进入 / 使用 ctx / 退出
\`\`\``
    },
    {
      id: 4,
      title: '小练习：自定义异常类',
      type: 'practice',
      content: `**练习！** 实现一个简单的银行账户类，包含异常处理。

要求：
- 类 \`BankAccount\`，属性 balance（初始为 0）
- 方法 \`deposit(amount)\` 存款（amount > 0）
- 方法 \`withdraw(amount)\` 取款
- 自定义异常 \`InsufficientFundsError\`（余额不足时抛出）
- 连续测试：存款 1000 → 取款 500 → 取款 800（应失败）→ 打印最终余额

预期输出：
\`\`\`
存款成功: 1000
取款成功: 500
错误: 余额不足
最终余额: 500
\`\`\``,
      hint: '用 raise InsufficientFundsError("...") 抛出异常',
      answer: `class InsufficientFundsError(Exception):
    """余额不足异常"""
    pass

class BankAccount:
    def __init__(self):
        self.balance = 0
    
    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("存款金额必须大于0")
        self.balance += amount
        return f"存款成功: {amount}"
    
    def withdraw(self, amount):
        if amount > self.balance:
            raise InsufficientFundsError("余额不足")
        self.balance -= amount
        return f"取款成功: {amount}"

# 测试
account = BankAccount()

try:
    print(account.deposit(1000))
except ValueError as e:
    print(f"错误: {e}")

try:
    print(account.withdraw(500))
except InsufficientFundsError as e:
    print(f"错误: {e}")

try:
    print(account.withdraw(800))
except InsufficientFundsError as e:
    print(f"错误: {e}")

print(f"最终余额: {account.balance}")`,
      explanation: `**关键点**：
- 自定义异常继承 Exception
- 用 \`raise\` 抛出异常
- 用 \`except ExceptionType as e:\` 捕获并获取信息
- 不同异常类型可以分别处理

**改进**：
- 添加账户所有者属性
- 添加交易记录功能
- 用 @property 保护 balance 属性`,
      code: `class InsufficientFundsError(Exception):
    pass

class BankAccount:
    def __init__(self):
        self.balance = 0
    
    def deposit(self, amount):
        # 在此实现
        pass
    
    def withdraw(self, amount):
        # 在此实现
        pass

# 测试
account = BankAccount()
try:
    print(account.deposit(1000))
except Exception as e:
    print(f"错误: {e}")

try:
    print(account.withdraw(500))
except InsufficientFundsError as e:
    print(f"错误: {e}")

try:
    print(account.withdraw(800))
except InsufficientFundsError as e:
    print(f"错误: {e}")

print(f"最终余额: {account.balance}")

`,
      testCode: `output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含存款成功",
    "passed": "存款成功" in output and "1000" in output,
    "message": "应该显示存款成功 1000"
})
_test_results.append({
    "name": "包含余额不足",
    "passed": "余额不足" in output,
    "message": "800 元取款应触发余额不足异常"
})
_test_results.append({
    "name": "最终余额500",
    "passed": "500" in output,
    "message": "最终余额应该是 500"
})
`
    },
    {
      id: 5,
      title: '小测验',
      type: 'quiz',
      content: `**问题**：下面代码的输出是？

\`\`\`
try:
    print("A")
    raise ValueError("错误")
    print("B")
except ValueError:
    print("C")
finally:
    print("D")
\`\`\``,
      options: [
        'A B C D',
        'A C D',
        'A C',
        'A D'
      ],
      correctAnswer: 1,
      explanation: `**执行流程**：
1. \`print("A")\` → 输出 A
2. \`raise ValueError\` → 抛出异常，B 不会执行
3. \`except\` 捕获 → 输出 C
4. \`finally\` 无论如何执行 → 输出 D

**关键点**：
- raise 之后的代码不会执行
- finally 块在退出 try 时必定执行（即使 return）`
    }
  ],
  // ============== 文件与目录 ==============
  15: [
    {
      id: 1,
      title: 'os 模块概览',
      type: 'explanation',
      content: `**os 模块**提供了访问操作系统功能的接口。

**常用功能**：

**路径相关**：
- \`os.getcwd()\` - 获取当前工作目录
- \`os.chdir(path)\` - 切换目录
- \`os.path.join(a, b)\` - 拼接路径

**目录操作**：
- \`os.listdir(path)\` - 列出目录内容
- \`os.mkdir(path)\` - 创建单层目录
- \`os.makedirs(path)\` - 递归创建多层目录
- \`os.rmdir(path)\` - 删除空目录
- \`os.rename(old, new)\` - 重命名

**os.path 模块**：
- \`os.path.exists(path)\` - 是否存在
- \`os.path.isfile(path)\` - 是否为文件
- \`os.path.isdir(path)\` - 是否为目录
- \`os.path.basename(path)\` - 文件名部分
- \`os.path.dirname(path)\` - 目录部分
- \`os.path.splitext(path)\` - 分离扩展名`
    },
    {
      id: 2,
      title: 'shutil 模块：高级文件操作',
      type: 'example',
      content: `**shutil** 模块提供更高级的文件操作：

\`\`\`
import shutil

# 复制文件
shutil.copy("src.txt", "dst.txt")      # 复制文件+权限
shutil.copy2("src.txt", "dst.txt")     # 复制文件+元数据
shutil.copyfile("src.txt", "dst.txt")  # 只复制内容

# 移动文件/目录
shutil.move("old.txt", "new.txt")

# 删除目录
shutil.rmtree("mydir")  # 递归删除整个目录

# 压缩
shutil.make_archive("name", "zip", "dir")
\`\`\`

**glob 模块**：用通配符查找文件
\`\`\`
import glob
# 查找所有 .py 文件
files = glob.glob("*.py")
# 递归查找
files = glob.glob("**/*.py", recursive=True)
\`\`\`

试试：`,
      code: `import os
import shutil

# 创建临时目录
test_dir = "test_python_quest"
if os.path.exists(test_dir):
    shutil.rmtree(test_dir)
os.makedirs(test_dir)

# 创建几个测试文件
for i in range(3):
    with open(f"{test_dir}/file_{i}.txt", "w") as f:
        f.write(f"内容 {i}")

# 列出文件
files = os.listdir(test_dir)
print("文件列表:", files)

# 清理
shutil.rmtree(test_dir)
print("清理完成")`
    },
    {
      id: 3,
      title: '遍历目录树',
      type: 'example',
      content: `**os.walk()** 可以递归遍历目录树：

\`\`\`
import os

for root, dirs, files in os.walk("path"):
    # root: 当前目录路径
    # dirs: 当前目录下的子目录列表
    # files: 当前目录下的文件列表
    for file in files:
        full_path = os.path.join(root, file)
        print(full_path)
\`\`\`

**实际应用：批量重命名**

试试看：`,
      code: `import os

# 模拟文件树
sample = {
    "photos": {
        "img1.jpg": "",
        "img2.jpg": "",
        "sub": {
            "img3.jpg": ""
        }
    }
}

# 简化的 walk 演示
def walk_simulate(d, prefix=""):
    for name, content in d.items():
        path = prefix + "/" + name if prefix else name
        if isinstance(content, dict):
            print(f"[目录] {path}")
            walk_simulate(content, path)
        else:
            print(f"[文件] {path}")

walk_simulate(sample)`
    },
    {
      id: 4,
      title: '小练习：路径处理工具',
      type: 'practice',
      content: `**练习！** 实现一个路径处理工具函数。

要求：
- 函数 \`file_info(path)\` 返回一个字典：
  - \`name\`: 文件名（不含目录）
  - \`ext\`: 扩展名
  - \`dir\`: 所在目录
  - \`is_py\`: 是否为 .py 文件
- 测试以下路径：
  - "/home/user/project/main.py"
  - "/var/log/app.log"
  - "README.md"

预期输出（每行一个文件信息）：
\`\`\`
main.py
.py
/home/user/project
True
...
\`\`\``,
      hint: '用 os.path.basename, os.path.splitext, os.path.dirname',
      answer: `import os

def file_info(path):
    """返回文件信息字典"""
    name = os.path.basename(path)
    dir_ = os.path.dirname(path)
    # 处理空目录的情况
    if not dir_:
        dir_ = "."
    base, ext = os.path.splitext(path)
    return {
        "name": name,
        "ext": ext,
        "dir": dir_,
        "is_py": ext == ".py"
    }

# 测试
test_paths = [
    "/home/user/project/main.py",
    "/var/log/app.log",
    "README.md"
]

for p in test_paths:
    info = file_info(p)
    print(f"路径: {p}")
    print(f"  文件名: {info['name']}")
    print(f"  扩展名: {info['ext']}")
    print(f"  目录: {info['dir']}")
    print(f"  是.py: {info['is_py']}")`,
      explanation: `**关键函数**：
- \`os.path.basename(path)\` - 获取文件名
- \`os.path.dirname(path)\` - 获取目录
- \`os.path.splitext(path)\` - 分离扩展名（返回元组）
- 注意：\`splitext\` 不会检查文件是否存在

**边界情况**：
- 没有目录的路径：dirname 为空字符串
- 没有扩展名：ext 为空字符串`,
      code: `import os

def file_info(path):
    """返回文件信息字典"""
    # 在此实现
    pass

# 测试
for p in ["/home/user/project/main.py", "/var/log/app.log", "README.md"]:
    info = file_info(p)
    print(f"路径: {p}")
    print(f"  文件名: {info['name']}")
    print(f"  扩展名: {info['ext']}")
    print(f"  目录: {info['dir']}")
    print(f"  是.py: {info['is_py']}")

`,
      testCode: `output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含main.py",
    "passed": "main.py" in output,
    "message": "应该包含 main.py 文件名"
})
_test_results.append({
    "name": "包含.py扩展名",
    "passed": ".py" in output,
    "message": "应该识别 .py 扩展名"
})
_test_results.append({
    "name": "包含True",
    "passed": "True" in output,
    "message": "main.py 应该是 .py 文件"
})
`
    },
    {
      id: 5,
      title: '小测验',
      type: 'quiz',
      content: `**问题**：\`os.path.splitext("/data/file.tar.gz")\` 返回什么？`,
      options: [
        '("/data/file.tar", ".gz")',
        '("/data/file", ".tar.gz")',
        '("/data/file.tar.gz", "")',
        '("/data", "/file.tar.gz")'
      ],
      correctAnswer: 0,
      explanation: `**\`splitext\` 从右向左分割第一个 \`.\`**：
- 输入：\`"/data/file.tar.gz"\`
- 结果：\`("/data/file.tar", ".gz")\`
- 不会分割中间的 \`.\`

**如需分割多个扩展名**：
\`\`\`
filename.rsplit(".", 1)  # ["file.tar", "gz"]
\`\`\``
    }
  ],
  // ============== 高级特性 ==============
  16: [
    {
      id: 1,
      title: '生成器（Generator）',
      type: 'explanation',
      content: `**生成器**是特殊的迭代器，用 \`yield\` 关键字定义。

**为什么用生成器？**
- 节省内存：不会一次性生成所有数据
- 惰性求值：按需计算
- 适合处理大数据

**两种创建方式**：

**1. 生成器函数**（用 yield）
\`\`\`
def count_up(n):
    i = 0
    while i < n:
        yield i
        i += 1

for x in count_up(5):
    print(x)  # 0 1 2 3 4
\`\`\`

**2. 生成器表达式**（类似列表推导式）
\`\`\`
gen = (x**2 for x in range(5))
# vs 列表推导式
lst = [x**2 for x in range(5)]
\`\`\`

**关键区别**：
- 列表推导式：\`[\`...\`]\` - 立即生成全部
- 生成器表达式：\`(\`...\`)\` - 按需生成`
    },
    {
      id: 2,
      title: '装饰器（Decorator）',
      type: 'explanation',
      content: `**装饰器**用于在不修改原函数代码的情况下，给函数添加额外功能。

**基本语法**：
\`\`\`
def my_decorator(func):
    def wrapper(*args, **kwargs):
        print("调用前")
        result = func(*args, **kwargs)
        print("调用后")
        return result
    return wrapper

@my_decorator
def say_hello(name):
    print(f"Hello, {name}!")

say_hello("小明")
# 输出: 调用前 / Hello, 小明! / 调用后
\`\`\`

**装饰器链**：可以叠加多个装饰器
\`\`\`
@decorator1
@decorator2
def func():
    pass
# 等价于 decorator1(decorator2(func))
\`\`\`

**常见用途**：
- 日志记录
- 性能测试（计时）
- 权限检查
- 缓存`
    },
    {
      id: 3,
      title: '闭包（Closure）',
      type: 'example',
      content: `**闭包**是指引用了外部作用域变量的内部函数。

\`\`\`
def outer(x):
    def inner(y):
        return x + y  # 引用了外部 x
    return inner

add5 = outer(5)
print(add5(3))  # 8
print(add5(10)) # 15
\`\`\`

**闭包的三个条件**：
1. 有嵌套函数
2. 内部函数引用了外部变量
3. 外部函数返回内部函数

**应用**：工厂函数、装饰器底层

试试看：`,
      code: `def power(n):
    """返回计算 x^n 的函数"""
    def calc(x):
        return x ** n
    return calc

# 创建不同的幂函数
square = power(2)
cube = power(3)

print(square(5))  # 25
print(cube(2))    # 8
print(power(4)(2)) # 16 (2的4次方)`
    },
    {
      id: 4,
      title: 'Lambda 表达式',
      type: 'explanation',
      content: `**Lambda** 是创建小型匿名函数的方式。

\`\`\`
# 普通函数
def add(a, b):
    return a + b

# 等价 Lambda
add = lambda a, b: a + b
\`\`\`

**语法**：\`lambda 参数: 表达式\`

**常用于高阶函数**：

\`\`\`
# map: 对每个元素应用函数
nums = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, nums))

# filter: 过滤元素
evens = list(filter(lambda x: x % 2 == 0, nums))

# sorted: 自定义排序
students = [("小明", 85), ("小红", 92), ("小刚", 78)]
by_score = sorted(students, key=lambda s: s[1], reverse=True)
\`\`\`

**注意**：
- Lambda 只能写单个表达式
- 复杂的逻辑应该用 def 定义函数`
    },
    {
      id: 5,
      title: '小练习：装饰器与生成器',
      type: 'practice',
      content: `**练习！** 实现一个计时装饰器，并应用到函数上。

要求：
- 装饰器 \`timer\`，打印函数执行耗时（毫秒）
- 被装饰函数 \`slow_func(n)\`：循环 n 次做空操作
- 测试 \`slow_func(1000000)\`

预期输出：
\`\`\`
执行耗时: X 毫秒
\`\`\`

提示：使用 \`time.time()\` 获取时间戳`,
      hint: '用 time.time() 在函数前后取时间差',
      answer: `import time

def timer(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        elapsed = (end - start) * 1000
        print(f"执行耗时: {elapsed:.2f} 毫秒")
        return result
    return wrapper

@timer
def slow_func(n):
    total = 0
    for i in range(n):
        total += i
    return total

# 测试
result = slow_func(1000000)
print(f"结果: {result}")`,
      explanation: `**关键点**：
- \`time.time()\` 返回当前时间戳（秒，浮点）
- 装饰器返回 wrapper 函数
- \`*args, **kwargs\` 让装饰器适配任何函数
- 毫秒 = 秒 × 1000

**functools.wraps**：
- 用 \`@functools.wraps(func)\` 保留原函数的元信息
- 避免调试时混淆`,
      code: `import time

def timer(func):
    def wrapper(*args, **kwargs):
        # 在此实现计时逻辑
        pass
    return wrapper

@timer
def slow_func(n):
    total = 0
    for i in range(n):
        total += i
    return total

# 测试
slow_func(1000000)

`,
      testCode: `output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含耗时",
    "passed": "耗时" in output or "毫秒" in output,
    "message": "应该输出耗时信息"
})
`
    },
    {
      id: 6,
      title: '小测验',
      type: 'quiz',
      content: `**问题**：下面代码会输出什么？

\`\`\`
def gen():
    yield 1
    yield 2
    yield 3

g = gen()
print(next(g))
print(next(g))
\`\`\``,
      options: [
        '1 2 3',
        '1 2',
        '2 3',
        '报错'
      ],
      correctAnswer: 1,
      explanation: `**解析**：
- 创建生成器 \`g\`
- 第一次 \`next(g)\` → 输出 1（执行到第一个 yield）
- 第二次 \`next(g)\` → 输出 2（执行到第二个 yield）
- 不调用第三次，所以 3 不会输出

**生成器特点**：
- 每次 \`next()\` 推进到下一个 yield
- 状态会被保留
- 用 \`for\` 循环会自动处理`
    }
  ],
  // ============== 常用标准库 ==============
  17: [
    {
      id: 1,
      title: 'datetime：日期时间',
      type: 'explanation',
      content: `**datetime** 模块处理日期和时间：

\`\`\`
from datetime import datetime, date, time, timedelta

# 当前时间
now = datetime.now()
print(now)  # 2025-01-01 12:00:00.000000

# 创建指定时间
d = datetime(2025, 12, 25, 10, 30, 0)

# 格式化
print(now.strftime("%Y-%m-%d %H:%M:%S"))
print(now.strftime("%Y年%m月%d日"))

# 解析字符串
dt = datetime.strptime("2025-12-25", "%Y-%m-%d")

# 时间差
delta = timedelta(days=7)
next_week = now + delta
print(f"一周后: {next_week}")
\`\`\`

**常用格式化符号**：
- \`%Y\` - 4位年、\`%m\` - 月、\`%d\` - 日
- \`%H\` - 24小时、\`%M\` - 分钟、\`%S\` - 秒
- \`%A\` - 星期名`
    },
    {
      id: 2,
      title: 're 模块：正则表达式',
      type: 'example',
      content: `**正则表达式**是用来匹配字符串的强大工具。

**常用方法**：
- \`re.match(pattern, str)\` - 从开头匹配
- \`re.search(pattern, str)\` - 搜索第一个匹配
- \`re.findall(pattern, str)\` - 找出所有匹配
- \`re.sub(pattern, repl, str)\` - 替换

**常用模式**：
- \`\\d\` - 数字、\`\\w\` - 字母数字下划线、\`\\s\` - 空白
- \`.\` - 任意字符、\`^\` - 开头、\`$\` - 结尾
- \`*\` - 0+次、\`+\` - 1+次、\`?\` - 0或1次
- \`{n}\` - n次、\`{n,m}\` - n到m次
- \`[abc]\` - 字符集、\`[a-z]\` - 范围

试试：`,
      code: `import re

text = "联系我: 138-0013-8000 或 email@example.com"

# 查找电话号码
phones = re.findall(r"\\d{3}-\\d{4}-\\d{4}", text)
print("电话:", phones)

# 查找邮箱
emails = re.findall(r"[\\w.]+@[\\w.]+", text)
print("邮箱:", emails)

# 替换
hidden = re.sub(r"\\d", "*", "我的密码: 123456")
print("隐藏:", hidden)

# 验证
if re.match(r"^1[3-9]\\d{9}$", "13800138000"):
    print("手机号格式正确")`
    },
    {
      id: 3,
      title: 'json 模块：JSON 处理',
      type: 'example',
      content: `**json** 模块处理 JSON 数据（API、配置文件常用）。

\`\`\`
import json

# Python 对象 → JSON 字符串
data = {"name": "小明", "age": 18, "scores": [85, 92, 78]}
json_str = json.dumps(data, ensure_ascii=False, indent=2)

# JSON 字符串 → Python 对象
parsed = json.loads(json_str)

# 读写文件
with open("data.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

with open("data.json", "r", encoding="utf-8") as f:
    loaded = json.load(f)
\`\`\`

**Python ↔ JSON 类型对应**：
| Python | JSON |
|--------|------|
| dict | object {\`{}\`} |
| list | array [\`[]\`] |
| str | string |
| int/float | number |
| True/False | true/false |
| None | null |

试试：`,
      code: `import json

# 创建数据
student = {
    "name": "小明",
    "age": 18,
    "scores": {"math": 95, "english": 88},
    "hobbies": ["编程", "阅读", "运动"]
}

# 序列化为 JSON
json_str = json.dumps(student, ensure_ascii=False, indent=2)
print("JSON 字符串:")
print(json_str)

# 反序列化
restored = json.loads(json_str)
print(f"\\n姓名: {restored['name']}")
print(f"数学成绩: {restored['scores']['math']}")
print(f"爱好数: {len(restored['hobbies'])}")`
    },
    {
      id: 4,
      title: 'collections：特殊容器',
      type: 'explanation',
      content: `**collections** 模块提供高级容器：

**Counter** - 计数器
\`\`\`
from collections import Counter
c = Counter("abracadabra")
print(c)  # Counter({'a': 5, 'b': 2, 'r': 2, 'c': 1, 'd': 1})
print(c.most_common(2))  # [('a', 5), ('b', 2)]
\`\`\`

**defaultdict** - 带默认值的字典
\`\`\`
from collections import defaultdict
dd = defaultdict(list)
dd["fruits"].append("苹果")
print(dd)  # {'fruits': ['苹果']}
\`\`\`

**OrderedDict** - 保持插入顺序的字典
**deque** - 双端队列（高效的头尾操作）
\`\`\`
from collections import deque
d = deque([1, 2, 3])
d.appendleft(0)  # 在头部添加
d.append(4)      # 在尾部添加
print(d)  # deque([0, 1, 2, 3, 4])
\`\`\`

**namedtuple** - 命名字段元组
\`\`\`
from collections import namedtuple
Point = namedtuple("Point", ["x", "y"])
p = Point(3, 4)
print(p.x, p.y)  # 3 4
\`\`\``
    },
    {
      id: 5,
      title: '小练习：词频统计',
      type: 'practice',
      content: `**练习！** 用 \`collections.Counter\` 统计词频。

要求：
- 给定文本："the quick brown fox jumps over the lazy dog the"
- 找出出现次数最多的 3 个单词
- 统计 "the" 出现的次数

预期输出：
\`\`\`
词频: [('the', 3), ('quick', 1), ('brown', 1)]
'the' 出现 3 次
\`\`\``,
      hint: '用 Counter(words).most_common(3)',
      answer: `from collections import Counter

text = "the quick brown fox jumps over the lazy dog the"
words = text.split()

counter = Counter(words)
print("词频:", counter.most_common(3))
print(f"'the' 出现 {counter['the']} 次")`,
      explanation: `**Counter 的强大功能**：
- \`Counter(iterable)\` 直接统计
- \`most_common(n)\` 返回前 n 个
- 支持字典的所有操作
- 支持加减运算：\`c1 + c2\`

**应用场景**：
- 词频统计
- 投票计数
- 找出多数元素
- 任意需要"统计"的场景`,
      code: `from collections import Counter

text = "the quick brown fox jumps over the lazy dog the"

# 在此实现词频统计

`,
      testCode: `output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含the",
    "passed": "the" in output,
    "message": "应该包含 the"
})
_test_results.append({
    "name": "包含3次",
    "passed": "3" in output,
    "message": "the 应该出现 3 次"
})
_test_results.append({
    "name": "包含词频",
    "passed": "词频" in output or "出现" in output or "Common" in output or "most" in output.lower(),
    "message": "应该输出词频统计结果"
})
`
    },
    {
      id: 6,
      title: '小测验',
      type: 'quiz',
      content: `**问题**：用正则 \`r"\\d+"\` 匹配 "abc 123 def 456" 会得到什么？`,
      options: [
        '["123 456"]',
        '["123", "456"]',
        '["1", "2", "3", "4", "5", "6"]',
        '"123 456"'
      ],
      correctAnswer: 1,
      explanation: `**解析**：
- \`\\d+\` 匹配**一个或多个数字**
- \`findall\` 找出所有匹配
- 结果：\`["123", "456"]\`（每个数字块作为一个匹配）

**相关**：
- \`\\d\` - 单个数字
- \`\\d+\` - 一个或多个（贪婪）
- \`\\d*\` - 0 个或多个
- \`\\d?\` - 0 个或 1 个`
    }
  ],
  // ============== 综合实战 ==============
  18: [
    {
      id: 1,
      title: 'Python 大师之路',
      type: 'explanation',
      content: `🎉 **恭喜到达最终关！** 你已经走完了 Python 学习的完整旅程。

**完整知识体系回顾**：
1. ✅ 基础语法 - print、注释、变量、运算符
2. ✅ 数据结构 - 列表、元组、字典、集合
3. ✅ 控制流 - 条件判断、循环
4. ✅ 函数 - 定义、参数、Lambda、装饰器
5. ✅ OOP - 类、对象、继承、多态
6. ✅ 文件 - 读写、with、os、shutil
7. ✅ 异常 - try-except、自定义异常
8. ✅ 高级 - 生成器、闭包、Lambda
9. ✅ 标准库 - datetime、re、json、collections
10. ✅ 项目 - 综合运用

**下一步建议**：
- 📦 学习 pip 和 venv（包管理与虚拟环境）
- 🌐 Web 开发（Flask、Django、FastAPI）
- 📊 数据分析（NumPy、Pandas、Matplotlib）
- 🤖 AI/ML（Scikit-learn、PyTorch）
- 🕷️ 爬虫（requests、BeautifulSoup、Scrapy）`
    },
    {
      id: 2,
      title: '实战：单词统计工具',
      type: 'example',
      content: `让我们做一个简单的**文本分析工具**，综合运用前面学到的知识：

**功能**：
1. 统计文本中的单词数
2. 找出出现频率最高的 5 个单词
3. 统计句子数（按 . ! ? 分隔）
4. 找出最长的单词

\`\`\`
输入: "Python is great. Python is dynamic. I love Python!"
输出: 单词数: 9, 句子数: 3, 高频词: [('python', 3), ...]
\`\`\`

运行下面的实现：`,
      code: `import re
from collections import Counter

text = """
Python is a great programming language.
Python is easy to learn.
Python is powerful and Python is fun.
I love Python programming.
"""

# 1. 清理文本：转小写，去标点
cleaned = re.sub(r"[^a-zA-Z\\s]", "", text.lower())
words = cleaned.split()

# 2. 统计
word_count = len(words)
counter = Counter(words)
top5 = counter.most_common(5)

# 3. 句子数
sentences = re.split(r"[.!?]+", text)
sentences = [s for s in sentences if s.strip()]
sentence_count = len(sentences)

# 4. 最长单词
longest = max(words, key=len) if words else ""

print(f"单词数: {word_count}")
print(f"句子数: {sentence_count}")
print(f"高频词 TOP 5: {top5}")
print(f"最长单词: '{longest}' (长度: {len(longest)})")`
    },
    {
      id: 3,
      title: '实战：简易计算器（OOP版）',
      type: 'example',
      content: `用面向对象的方式重写计算器，更专业：

\`\`\`
class Calculator:
    def add(self, a, b): ...
    def subtract(self, a, b): ...
    def multiply(self, a, b): ...
    def divide(self, a, b): ...
    def calculate(self, a, op, b): ...
\`\`\`

试试：`,
      code: `class Calculator:
    """支持 +、-、*、/ 的计算器"""
    
    def add(self, a, b):
        return a + b
    
    def subtract(self, a, b):
        return a - b
    
    def multiply(self, a, b):
        return a * b
    
    def divide(self, a, b):
        if b == 0:
            raise ValueError("不能除以零")
        return a / b
    
    def calculate(self, a, op, b):
        ops = {
            "+": self.add,
            "-": self.subtract,
            "*": self.multiply,
            "/": self.divide
        }
        if op not in ops:
            raise ValueError(f"不支持的运算符: {op}")
        return ops[op](a, b)

# 使用
calc = Calculator()
print(calc.calculate(10, "+", 5))
print(calc.calculate(10, "*", 4))
print(calc.calculate(2, "**", 10) if False else "暂不支持 **")`
    },
    {
      id: 4,
      title: '实战：学生管理系统',
      type: 'practice',
      content: `**综合实战！** 用 OOP + 异常处理 + JSON 实现一个学生管理系统。

要求：
- 类 \`Student\`：name, age, scores（字典：科目→分数）
- 类 \`StudentManager\`：管理学生列表
  - \`add_student(student)\`
  - \`find_student(name)\` - 找不到抛 StudentNotFoundError
  - \`get_average(name)\` - 返回学生平均分
  - \`save_to_file(filename)\` - 序列化为 JSON
  - \`load_from_file(filename)\` - 从 JSON 加载
- 自定义异常 \`StudentNotFoundError\`
- 测试：创建 2 个学生 → 保存 → 重新加载 → 打印信息

预期输出包含：
\`\`\`
加载成功，共 2 名学生
小明 平均分: 88.5
\`\`\``,
      hint: '用 json.dumps/loads 序列化，注意处理异常',
      answer: `import json

class StudentNotFoundError(Exception):
    pass

class Student:
    def __init__(self, name, age, scores):
        self.name = name
        self.age = age
        self.scores = scores  # dict: 科目→分数
    
    def average(self):
        if not self.scores:
            return 0
        return sum(self.scores.values()) / len(self.scores)
    
    def to_dict(self):
        return {
            "name": self.name,
            "age": self.age,
            "scores": self.scores
        }
    
    @staticmethod
    def from_dict(d):
        return Student(d["name"], d["age"], d["scores"])

class StudentManager:
    def __init__(self):
        self.students = []
    
    def add_student(self, student):
        self.students.append(student)
    
    def find_student(self, name):
        for s in self.students:
            if s.name == name:
                return s
        raise StudentNotFoundError(f"未找到学生: {name}")
    
    def get_average(self, name):
        s = self.find_student(name)
        return s.average()
    
    def save_to_file(self, filename):
        data = [s.to_dict() for s in self.students]
        with open(filename, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
    
    def load_from_file(self, filename):
        with open(filename, "r", encoding="utf-8") as f:
            data = json.load(f)
        self.students = [Student.from_dict(d) for d in data]
        return len(self.students)

# 使用
mgr = StudentManager()
mgr.add_student(Student("小明", 18, {"math": 95, "english": 82}))
mgr.add_student(Student("小红", 19, {"math": 88, "english": 91}))

# 保存到文件
mgr.save_to_file("students.json")

# 重新加载
new_mgr = StudentManager()
count = new_mgr.load_from_file("students.json")
print(f"加载成功，共 {count} 名学生")
print(f"小明 平均分: {new_mgr.get_average('小明')}")`,
      explanation: `**这个例子综合运用了**：
- **类与对象**：Student、StudentManager
- **OOP 进阶**：静态方法、实例方法
- **自定义异常**：StudentNotFoundError
- **JSON 序列化**：to_dict / from_dict
- **文件操作**：with open
- **列表推导式**：\`[s.to_dict() for s in self.students]\`
- **错误处理**：异常向上传播

**可扩展方向**：
- 添加删除、修改功能
- 改成 SQLite 数据库存储
- 添加 CLI / Web 界面`,
      code: `import json

class StudentNotFoundError(Exception):
    pass

class Student:
    def __init__(self, name, age, scores):
        self.name = name
        self.age = age
        self.scores = scores
    
    def average(self):
        if not self.scores:
            return 0
        return sum(self.scores.values()) / len(self.scores)

class StudentManager:
    def __init__(self):
        self.students = []
    
    def add_student(self, student):
        self.students.append(student)
    
    def find_student(self, name):
        # 在此实现
        pass
    
    def get_average(self, name):
        # 在此实现
        pass
    
    def save_to_file(self, filename):
        # 在此实现
        pass
    
    def load_from_file(self, filename):
        # 在此实现
        pass

# 测试
mgr = StudentManager()
mgr.add_student(Student("小明", 18, {"math": 95, "english": 82}))
mgr.add_student(Student("小红", 19, {"math": 88, "english": 91}))

mgr.save_to_file("students.json")

new_mgr = StudentManager()
count = new_mgr.load_from_file("students.json")
print(f"加载成功，共 {count} 名学生")
print(f"小明 平均分: {new_mgr.get_average('小明'):.1f}")

`,
      testCode: `output = _output_buffer.getvalue()

_test_results.append({
    "name": "加载成功",
    "passed": "加载成功" in output or "2 名学生" in output or "2名学生" in output,
    "message": "应该提示加载成功 2 名学生"
})
_test_results.append({
    "name": "平均分88",
    "passed": "88" in output,
    "message": "小明的平均分应该是 88.5"
})
`
    },
    {
      id: 5,
      title: '毕业总结',
      type: 'explanation',
      content: `🎓 **恭喜毕业！** 你已经是一名 Python 程序员了！

**你掌握的技能**：
- ✅ 完整的 Python 基础语法
- ✅ 数据结构与算法思维
- ✅ 函数式与面向对象编程
- ✅ 异常处理与代码健壮性
- ✅ 文件与系统操作
- ✅ 正则表达式与文本处理
- ✅ JSON 数据处理
- ✅ 模块化与代码组织

**继续保持进步的秘诀**：
1. **多写代码** - 每天至少 30 分钟
2. **读优秀代码** - GitHub 上的开源项目
3. **做项目** - 用 Python 解决实际问题
4. **加入社区** - Python 中文社区、Stack Overflow
5. **学习新库** - 跟上生态发展

**Python 的精髓**：
\`\`\`
import this
\`\`\`
运行上面这行代码，看看 Python 之禅！

**祝你在编程的道路上越走越远！** 🚀

— Python Quest 全体导师敬上`
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
  ],
  1: [
    {
      id: 1,
      title: '打印欢迎横幅',
      description: '使用 print 函数打印一个欢迎横幅，要求：\n\n1. 用 = 号作为分隔线（至少 20 个）\n2. 中间打印 "欢迎学习 Python"\n3. 底部再用 = 号分隔\n\n输出效果：\n====================\n欢迎学习 Python\n====================',
      difficulty: 'easy',
      initialCode: `# 打印欢迎横幅


`,
      testCode: `# 测试欢迎横幅
output = _output_buffer.getvalue()
lines = [l for l in output.split('\\n') if l.strip()]

_test_results.append({
    "name": "至少3行",
    "passed": len(lines) >= 3,
    "message": f"找到 {len(lines)} 行，需要至少 3 行"
})

_test_results.append({
    "name": "包含欢迎语",
    "passed": "欢迎" in output,
    "message": "应该包含欢迎语"
})

_test_results.append({
    "name": "有分隔线",
    "passed": "===" in output,
    "message": "应该有 = 分隔线"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: '多行横幅' }
      ],
      xpReward: 10
    },
    {
      id: 2,
      title: '打印星号矩形',
      description: '使用 print 和字符串乘法，打印一个 4 行 5 列的星号矩形：\n\n*****\n*****\n*****\n*****\n\n提示：\n- "*" * 5 可以生成 5 个星号\n- 使用 for 循环或重复 print 语句',
      difficulty: 'easy',
      initialCode: `# 打印 4 行 5 列的星号矩形

`,
      testCode: `# 测试星号矩形
output = _output_buffer.getvalue()
lines = [l for l in output.split('\\n') if l.strip()]

has_4_lines = len(lines) >= 4
all_5_stars = all(l.strip() == '*****' for l in lines[:4]) if len(lines) >= 4 else False

_test_results.append({
    "name": "至少4行",
    "passed": has_4_lines,
    "message": f"找到 {len(lines)} 行，需要 4 行"
})

_test_results.append({
    "name": "每行5个星号",
    "passed": all_5_stars,
    "message": "每行应该恰好是 5 个星号 *****"
})
`,
      testCases: [
        { name: '行数', input: '无', expected: '4行' },
        { name: '第1行', input: '无', expected: '*****' }
      ],
      xpReward: 15
    },
    {
      id: 3,
      title: '自我介绍卡片',
      description: '使用 print 和 f-string 打印一张自我介绍卡片，要求：\n\n1. 用 - 号作为分隔线\n2. 包含姓名、年龄、爱好三个信息\n3. 每个信息用制表符 \\t 对齐\n\n输出效果示例：\n--------------------\n姓名:\\t小明\n年龄:\\t18\n爱好:\\t编程\n--------------------',
      difficulty: 'medium',
      initialCode: `# 自我介绍卡片
name = "小明"
age = 18
hobby = "编程"

# 在此打印卡片

`,
      testCode: `# 测试自我介绍卡片
output = _output_buffer.getvalue()
lines = [l for l in output.split('\\n') if l.strip()]

_test_results.append({
    "name": "至少5行",
    "passed": len(lines) >= 5,
    "message": f"找到 {len(lines)} 行，需要至少 5 行（含分隔线）"
})

_test_results.append({
    "name": "有分隔线",
    "passed": "---" in output,
    "message": "应该有 - 分隔线"
})

_test_results.append({
    "name": "包含姓名年龄爱好",
    "passed": "小明" in output and "18" in output and "编程" in output,
    "message": "应该包含姓名、年龄、爱好信息"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: '格式化卡片' }
      ],
      xpReward: 20
    }
  ],
  2: [
    {
      id: 1,
      title: '温度转换',
      description: '编写程序，将摄氏温度转换为华氏温度。\n\n公式：F = C * 9/5 + 32\n\n要求：\n- 设置变量 celsius = 37\n- 计算华氏温度\n- 打印格式："37°C = 98.6°F"（保留1位小数）',
      difficulty: 'easy',
      initialCode: `# 温度转换
celsius = 37

# 在此计算并打印

`,
      testCode: `# 测试温度转换
output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含37",
    "passed": "37" in output,
    "message": "应该显示原始摄氏温度 37"
})

_test_results.append({
    "name": "包含98.6",
    "passed": "98.6" in output,
    "message": "37°C = 98.6°F，检查计算"
})

_test_results.append({
    "name": "包含F标记",
    "passed": "F" in output or "f" in output or "华" in output,
    "message": "应该标注华氏温度"
})
`,
      testCases: [
        { name: '基础测试', input: '37', expected: '98.6' }
      ],
      xpReward: 10
    },
    {
      id: 2,
      title: '计算圆的面积和周长',
      description: '编写程序计算圆的面积和周长。\n\n要求：\n- 设置半径 radius = 5\n- pi = 3.14159\n- 面积 = pi * r^2\n- 周长 = 2 * pi * r\n- 打印面积和周长，保留2位小数\n\n预期输出：\n面积: 78.54\n周长: 31.42',
      difficulty: 'medium',
      initialCode: `# 计算圆的面积和周长
radius = 5
pi = 3.14159

# 在此计算并打印

`,
      testCode: `# 测试圆的计算
output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含78.54",
    "passed": "78.54" in output or "78.5" in output,
    "message": "面积 = 3.14159 * 25 = 78.54"
})

_test_results.append({
    "name": "包含31.42",
    "passed": "31.42" in output or "31.4" in output,
    "message": "周长 = 2 * 3.14159 * 5 = 31.42"
})
`,
      testCases: [
        { name: '面积', input: '5', expected: '78.54' },
        { name: '周长', input: '5', expected: '31.42' }
      ],
      xpReward: 15
    },
    {
      id: 3,
      title: '时间换算',
      description: '编写程序，将秒数换算为"X小时Y分钟Z秒"的格式。\n\n要求：\n- 设置变量 total_seconds = 7384\n- 计算小时、分钟、秒\n- 打印格式："7384秒 = 2小时3分钟4秒"\n\n提示：\n- 小时 = total_seconds // 3600\n- 剩余 = total_seconds % 3600\n- 分钟 = 剩余 // 60\n- 秒 = 剩余 % 60',
      difficulty: 'hard',
      initialCode: `# 时间换算
total_seconds = 7384

# 在此计算并打印

`,
      testCode: `# 测试时间换算
output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含2小时",
    "passed": "2" in output and ("小时" in output or "时" in output),
    "message": "7384 // 3600 = 2 小时"
})

_test_results.append({
    "name": "包含3分钟",
    "passed": "3" in output and ("分钟" in output or "分" in output),
    "message": "剩余 184 秒，184 // 60 = 3 分钟"
})

_test_results.append({
    "name": "包含4秒",
    "passed": "4秒" in output or ("4" in output and "秒" in output),
    "message": "184 % 60 = 4 秒"
})
`,
      testCases: [
        { name: '基础测试', input: '7384', expected: '2小时3分钟4秒' }
      ],
      xpReward: 25
    }
  ],
  3: [
    {
      id: 1,
      title: '奇偶判断',
      description: '编写程序，判断一个数字是奇数还是偶数。\n\n要求：\n- 设置变量 num = 17\n- 如果是偶数打印 "17 是偶数"\n- 如果是奇数打印 "17 是奇数"\n\n提示：用 % 运算符，num % 2 == 0 是偶数',
      difficulty: 'easy',
      initialCode: `# 奇偶判断
num = 17

# 在此编写判断代码

`,
      testCode: `# 测试奇偶判断
output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含17",
    "passed": "17" in output,
    "message": "输出应该包含数字 17"
})

_test_results.append({
    "name": "判断为奇数",
    "passed": "奇数" in output,
    "message": "17 是奇数，应该输出 '奇数'"
})
`,
      testCases: [
        { name: '奇数测试', input: '17', expected: '奇数' }
      ],
      xpReward: 10
    },
    {
      id: 2,
      title: '成绩等级评定',
      description: '编写程序，根据分数评定等级。\n\n要求：\n- 设置变量 score = 78\n- 等级规则：\n  - 90-100: A\n  - 80-89: B\n  - 70-79: C\n  - 60-69: D\n  - 60以下: F\n- 打印格式："成绩 78，等级 C"\n\n用 if-elif-else 实现',
      difficulty: 'medium',
      initialCode: `# 成绩等级评定
score = 78

# 在此编写判断代码

`,
      testCode: `# 测试成绩等级
output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含78",
    "passed": "78" in output,
    "message": "应该显示成绩 78"
})

_test_results.append({
    "name": "等级为C",
    "passed": "C" in output,
    "message": "78 分应该是 C 等级"
})
`,
      testCases: [
        { name: '基础测试', input: '78', expected: 'C' }
      ],
      xpReward: 15
    },
    {
      id: 3,
      title: '个人所得税计算',
      description: '编写简易个人所得税计算器。\n\n要求：\n- 设置变量 income = 15000（月收入）\n- 起征点 5000 元\n- 应纳税额 = 收入 - 起征点\n- 税率规则：\n  - 不超过3000: 3%\n  - 3000-12000: 10%\n  - 12000-25000: 20%\n  - 超过25000: 25%\n- 打印应纳税额和税金\n\n提示：15000 - 5000 = 10000，适用 10% 税率，税金 = 1000',
      difficulty: 'hard',
      initialCode: `# 个人所得税计算
income = 15000
threshold = 5000

# 在此计算并打印

`,
      testCode: `# 测试个税计算
output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含10000",
    "passed": "10000" in output,
    "message": "应纳税额 = 15000 - 5000 = 10000"
})

_test_results.append({
    "name": "包含1000",
    "passed": "1000" in output,
    "message": "税金 = 10000 * 10% = 1000"
})
`,
      testCases: [
        { name: '基础测试', input: '15000', expected: '税金1000' }
      ],
      xpReward: 25
    }
  ],
  5: [
    {
      id: 1,
      title: '求列表最大最小值',
      description: '编写程序，找出列表中的最大值和最小值。\n\n要求：\n- 列表 numbers = [23, 45, 12, 67, 34, 89, 5, 56]\n- 不使用 max() 和 min()，用循环实现\n- 打印最大值和最小值\n\n预期输出：\n最大值: 89\n最小值: 5',
      difficulty: 'easy',
      initialCode: `# 求列表最大最小值
numbers = [23, 45, 12, 67, 34, 89, 5, 56]

# 在此编写代码

`,
      testCode: `# 测试最大最小值
output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含89",
    "passed": "89" in output,
    "message": "最大值应该是 89"
})

_test_results.append({
    "name": "包含5",
    "passed": "5" in output,
    "message": "最小值应该是 5"
})
`,
      testCases: [
        { name: '最大值', input: '无', expected: '89' },
        { name: '最小值', input: '无', expected: '5' }
      ],
      xpReward: 10
    },
    {
      id: 2,
      title: '列表去重并排序',
      description: '编写程序，对列表去重并排序。\n\n要求：\n- 列表 nums = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]\n- 去除重复元素\n- 从小到大排序\n- 打印结果\n\n预期输出：[1, 2, 3, 4, 5, 6, 9]\n\n提示：可以用 set() 去重，sorted() 排序',
      difficulty: 'medium',
      initialCode: `# 列表去重并排序
nums = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]

# 在此编写代码

`,
      testCode: `# 测试去重排序
output = _output_buffer.getvalue()

# 检查是否包含所有去重后的数字
has_1 = "1" in output
has_9 = "9" in output
has_2 = "2" in output

_test_results.append({
    "name": "包含1",
    "passed": has_1,
    "message": "去重后应包含 1"
})

_test_results.append({
    "name": "包含9",
    "passed": has_9,
    "message": "去重后应包含 9"
})

_test_results.append({
    "name": "包含2",
    "passed": has_2,
    "message": "去重后应包含 2"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: '[1, 2, 3, 4, 5, 6, 9]' }
      ],
      xpReward: 15
    },
    {
      id: 3,
      title: '矩阵转置',
      description: '编写程序，实现二维矩阵的转置（行列互换）。\n\n要求：\n- 矩阵 matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\n- 转置后：[[1, 4, 7], [2, 5, 8], [3, 6, 9]]\n- 打印转置后的矩阵\n\n提示：可以用嵌套列表推导式 [[matrix[j][i] for j in range(len(matrix))] for i in range(len(matrix[0]))]',
      difficulty: 'hard',
      initialCode: `# 矩阵转置
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# 在此编写转置代码

`,
      testCode: `# 测试矩阵转置
output = _output_buffer.getvalue()

# 转置后第一行应为 [1, 4, 7]
_test_results.append({
    "name": "包含1",
    "passed": "1" in output,
    "message": "转置后应包含 1"
})

_test_results.append({
    "name": "包含7",
    "passed": "7" in output,
    "message": "转置后第一行包含 7"
})

_test_results.append({
    "name": "包含4",
    "passed": "4" in output,
    "message": "转置后应包含 4"
})

_test_results.append({
    "name": "包含6",
    "passed": "6" in output,
    "message": "转置后应包含 6"
})
`,
      testCases: [
        { name: '第1行', input: '无', expected: '[1, 4, 7]' },
        { name: '第3行', input: '无', expected: '[3, 6, 9]' }
      ],
      xpReward: 25
    }
  ],
  6: [
    {
      id: 1,
      title: '词频统计',
      description: '编写程序，统计句子中每个单词出现的次数。\n\n要求：\n- 句子 text = "the cat sat on the mat the cat"\n- 用字典统计每个单词出现次数\n- 打印统计结果\n\n预期输出包含：\nthe: 3\ncat: 2\nsat: 1\non: 1\nmat: 1',
      difficulty: 'easy',
      initialCode: `# 词频统计
text = "the cat sat on the mat the cat"

# 在此编写代码

`,
      testCode: `# 测试词频统计
output = _output_buffer.getvalue()

_test_results.append({
    "name": "the出现3次",
    "passed": "3" in output,
    "message": "the 出现了 3 次"
})

_test_results.append({
    "name": "cat出现2次",
    "passed": "2" in output,
    "message": "cat 出现了 2 次"
})

_test_results.append({
    "name": "包含the",
    "passed": "the" in output,
    "message": "应该统计 the 的次数"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: 'the:3' }
      ],
      xpReward: 10
    },
    {
      id: 2,
      title: '通讯录管理',
      description: '编写简易通讯录程序。\n\n要求：\n- 创建字典 contacts 存储联系人\n- 添加 3 个联系人："小明": "13800138000", "小红": "13900139000", "小刚": "13700137000"\n- 修改 "小刚" 的电话为 "13500135000"\n- 删除 "小红"\n- 打印所有联系人\n\n预期输出包含：\n小明: 13800138000\n小刚: 13500135000',
      difficulty: 'medium',
      initialCode: `# 通讯录管理
contacts = {}

# 1. 添加联系人


# 2. 修改小刚电话


# 3. 删除小红


# 4. 打印所有联系人

`,
      testCode: `# 测试通讯录
output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含小明",
    "passed": "小明" in output,
    "message": "通讯录应包含小明"
})

_test_results.append({
    "name": "包含13800138000",
    "passed": "13800138000" in output or "138" in output,
    "message": "小明电话 13800138000"
})

_test_results.append({
    "name": "包含13500135000",
    "passed": "13500135000" in output or "135" in output,
    "message": "小刚修改后的电话 13500135000"
})

_test_results.append({
    "name": "不含139",
    "passed": "13900139000" not in output,
    "message": "小红应被删除，13900139000 不应出现"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: '2个联系人' }
      ],
      xpReward: 20
    },
    {
      id: 3,
      title: '集合运算：找共同好友',
      description: '编写程序，用集合运算找出共同好友和独有好友。\n\n要求：\n- my_friends = {"小明", "小红", "小刚", "小丽"}\n- their_friends = {"小刚", "小丽", "小强", "小芳"}\n- 找出共同好友（交集）\n- 找出只有我有的好友（差集）\n- 找出所有好友（并集）\n- 分别打印\n\n预期输出包含：\n共同好友: 小刚 小丽\n我的独有好友: 小明 小红\n所有好友: ...',
      difficulty: 'hard',
      initialCode: `# 集合运算
my_friends = {"小明", "小红", "小刚", "小丽"}
their_friends = {"小刚", "小丽", "小强", "小芳"}

# 1. 共同好友（交集）

# 2. 我的独有好友（差集）

# 3. 所有好友（并集）

`,
      testCode: `# 测试集合运算
output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含小刚",
    "passed": "小刚" in output,
    "message": "小刚是共同好友"
})

_test_results.append({
    "name": "包含小明",
    "passed": "小明" in output,
    "message": "小明是我的独有好友"
})

_test_results.append({
    "name": "包含小强",
    "passed": "小强" in output,
    "message": "小强是对方的好友"
})

_test_results.append({
    "name": "包含小芳",
    "passed": "小芳" in output,
    "message": "小芳是对方的好友"
})
`,
      testCases: [
        { name: '共同好友', input: '无', expected: '小刚小丽' },
        { name: '所有好友', input: '无', expected: '6人' }
      ],
      xpReward: 25
    }
  ],
  7: [
    {
      id: 1,
      title: '判断素数函数',
      description: '编写函数 is_prime(n)，判断 n 是否为素数。\n\n要求：\n- 函数返回 True 或 False\n- 素数：大于 1 且只能被 1 和自身整除\n- 测试：is_prime(7) 返回 True，is_prime(10) 返回 False\n- 打印测试结果\n\n提示：检查 2 到 n-1 是否有能整除 n 的数',
      difficulty: 'easy',
      initialCode: `# 判断素数函数
def is_prime(n):
    # 在此编写代码
    pass

# 测试
print("7 是素数:", is_prime(7))
print("10 是素数:", is_prime(10))
print("2 是素数:", is_prime(2))
`,
      testCode: `# 测试素数函数
output = _output_buffer.getvalue()

_test_results.append({
    "name": "7是素数",
    "passed": "True" in output,
    "message": "7 是素数，应返回 True"
})

_test_results.append({
    "name": "10不是素数",
    "passed": "False" in output,
    "message": "10 = 2*5，不是素数，应返回 False"
})

_test_results.append({
    "name": "2是素数",
    "passed": output.count("True") >= 2,
    "message": "2 是素数，应返回 True"
})
`,
      testCases: [
        { name: '7是素数', input: '7', expected: 'True' },
        { name: '10不是素数', input: '10', expected: 'False' }
      ],
      xpReward: 15
    },
    {
      id: 2,
      title: '斐波那契数列',
      description: '编写函数生成斐波那契数列。\n\n要求：\n- 函数 fibonacci(n) 返回前 n 个斐波那契数\n- 斐波那契数列：0, 1, 1, 2, 3, 5, 8, 13, ...\n- 每个数 = 前两个数之和\n- 打印 fibonacci(10) 的结果\n\n预期输出：[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]',
      difficulty: 'medium',
      initialCode: `# 斐波那契数列
def fibonacci(n):
    # 在此编写代码
    pass

# 测试
print(fibonacci(10))
`,
      testCode: `# 测试斐波那契
output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含0",
    "passed": "0" in output,
    "message": "斐波那契数列从 0 开始"
})

_test_results.append({
    "name": "包含34",
    "passed": "34" in output,
    "message": "第10个斐波那契数是 34"
})

_test_results.append({
    "name": "包含13",
    "passed": "13" in output,
    "message": "斐波那契数列应包含 13"
})
`,
      testCases: [
        { name: '基础测试', input: '10', expected: '[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]' }
      ],
      xpReward: 20
    },
    {
      id: 3,
      title: '汉诺塔递归',
      description: '编写递归函数解决汉诺塔问题。\n\n要求：\n- 函数 hanoi(n, src, mid, dst) 打印移动步骤\n- 将 n 个盘子从 src 移到 dst\n- 打印格式："从 X 移到 Y"\n- 测试：hanoi(3, "A", "B", "C")\n\n汉诺塔规则：\n1. 一次只能移动一个盘子\n2. 大盘不能压在小盘上\n\n3 个盘子需要 7 步，打印每一步',
      difficulty: 'hard',
      initialCode: `# 汉诺塔递归
def hanoi(n, src, mid, dst):
    # 在此编写递归代码
    pass

# 测试
hanoi(3, "A", "B", "C")
`,
      testCode: `# 测试汉诺塔
output = _output_buffer.getvalue()
lines = [l for l in output.split('\\n') if l.strip()]

_test_results.append({
    "name": "至少7步",
    "passed": len(lines) >= 7,
    "message": f"3个盘子的汉诺塔需要 7 步，找到 {len(lines)} 步"
})

_test_results.append({
    "name": "包含A",
    "passed": "A" in output,
    "message": "移动步骤应包含 A"
})

_test_results.append({
    "name": "包含C",
    "passed": "C" in output,
    "message": "移动步骤应包含 C"
})
`,
      testCases: [
        { name: '步数', input: '3', expected: '7步' }
      ],
      xpReward: 30
    }
  ],
  8: [
    {
      id: 1,
      title: '写入日志文件',
      description: '编写程序，将日志信息写入文件。\n\n要求：\n- 用 with 语句打开文件 "log.txt"（写入模式）\n- 写入 3 行日志：\n  "2025-01-01 系统启动"\n  "2025-01-01 用户登录"\n  "2025-01-01 操作完成"\n- 再用 with 语句读取并打印文件内容\n- 打印 "日志写入完成"',
      difficulty: 'easy',
      initialCode: `# 写入日志文件

# 1. 写入日志


print("日志写入完成")

# 2. 读取并打印

`,
      testCode: `# 测试日志写入
output = _output_buffer.getvalue()

_test_results.append({
    "name": "提示完成",
    "passed": "完成" in output,
    "message": "应该提示日志写入完成"
})

_test_results.append({
    "name": "包含系统启动",
    "passed": "启动" in output or "系统" in output,
    "message": "应该包含系统启动日志"
})

_test_results.append({
    "name": "包含用户登录",
    "passed": "登录" in output or "用户" in output,
    "message": "应该包含用户登录日志"
})

_test_results.append({
    "name": "至少4行输出",
    "passed": len([l for l in output.split('\\n') if l.strip()]) >= 4,
    "message": "应该至少有 4 行输出（提示+3行日志）"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: '日志文件' }
      ],
      xpReward: 15
    },
    {
      id: 2,
      title: '学生成绩文件处理',
      description: '编写程序，读取学生成绩文件并统计。\n\n要求：\n1. 写入文件 grades.txt，内容：\n   小明,85\n   小红,92\n   小刚,78\n   小丽,96\n   小华,88\n2. 读取文件，解析每行\n3. 计算并打印平均成绩\n4. 找出最高分学生并打印\n5. 找出最低分学生并打印\n\n预期输出包含：\n平均成绩: 87.8\n最高分: 小丽 96\n最低分: 小刚 78',
      difficulty: 'medium',
      initialCode: `# 学生成绩文件处理

# 1. 写入文件


# 2. 读取并解析


# 3. 计算并打印结果

`,
      testCode: `# 测试成绩文件处理
output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含平均87",
    "passed": "87" in output,
    "message": "平均成绩 (85+92+78+96+88)/5 = 87.8"
})

_test_results.append({
    "name": "包含96",
    "passed": "96" in output,
    "message": "最高分 96"
})

_test_results.append({
    "name": "包含78",
    "passed": "78" in output,
    "message": "最低分 78"
})

_test_results.append({
    "name": "包含小丽",
    "passed": "小丽" in output,
    "message": "小丽是最高分"
})
`,
      testCases: [
        { name: '平均成绩', input: '无', expected: '87.8' },
        { name: '最高分', input: '无', expected: '小丽 96' }
      ],
      xpReward: 20
    },
    {
      id: 3,
      title: '异常处理：安全除法',
      description: '编写程序，用异常处理实现安全的除法计算器。\n\n要求：\n- 定义函数 safe_divide(a, b)\n- 用 try-except 处理：\n  - 除以零（ZeroDivisionError）\n  - 类型错误（TypeError）\n- 出错时返回错误信息字符串\n- 测试以下情况：\n  - safe_divide(10, 3) → 返回数值\n  - safe_divide(10, 0) → 返回 "错误：除以零"\n  - safe_divide("10", 3) → 返回 "错误：类型错误" 或成功转换\n\n打印所有测试结果',
      difficulty: 'hard',
      initialCode: `# 安全除法计算器
def safe_divide(a, b):
    # 在此编写代码，用 try-except 处理异常
    pass

# 测试
print("10 / 3 =", safe_divide(10, 3))
print("10 / 0 =", safe_divide(10, 0))
print("10 / 2 =", safe_divide(10, 2))
`,
      testCode: `# 测试安全除法
output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含3.33",
    "passed": "3.33" in output or "3.3" in output,
    "message": "10 / 3 ≈ 3.33"
})

_test_results.append({
    "name": "处理除以零",
    "passed": "零" in output or "zero" in output.lower() or "错误" in output,
    "message": "除以零应该返回错误信息"
})

_test_results.append({
    "name": "包含5",
    "passed": "5" in output,
    "message": "10 / 2 = 5"
})
`,
      testCases: [
        { name: '正常除法', input: '10,3', expected: '3.33' },
        { name: '除以零', input: '10,0', expected: '错误' }
      ],
      xpReward: 25
    }
  ],
  9: [
    {
      id: 1,
      title: '猜数字游戏',
      description: '编写一个猜数字游戏（模拟版）。\n\n要求：\n- 设置目标数字 target = 42\n- 给定猜测列表 guesses = [20, 50, 35, 42]\n- 用 for 循环遍历猜测\n- 每次提示"大了"、"小了"或"猜对了"\n- 猜对后打印用了几次\n\n预期输出：\n猜 20: 小了\n猜 50: 大了\n猜 35: 小了\n猜 42: 猜对了！用了 4 次',
      difficulty: 'easy',
      initialCode: `# 猜数字游戏
target = 42
guesses = [20, 50, 35, 42]

# 在此编写游戏逻辑

`,
      testCode: `# 测试猜数字游戏
output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含小了",
    "passed": "小了" in output,
    "message": "20 < 42，应该提示小了"
})

_test_results.append({
    "name": "包含大了",
    "passed": "大了" in output,
    "message": "50 > 42，应该提示大了"
})

_test_results.append({
    "name": "包含猜对",
    "passed": "对" in output,
    "message": "42 = 42，应该提示猜对了"
})

_test_results.append({
    "name": "包含4次",
    "passed": "4" in output,
    "message": "应该显示用了 4 次"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: '猜对' }
      ],
      xpReward: 20
    },
    {
      id: 2,
      title: '学生成绩管理系统',
      description: '编写简易学生成绩管理系统。\n\n要求：\n- 用列表存储学生数据，每个学生是字典 {"name": "...", "score": ...}\n- 定义函数：\n  - add_student(students, name, score) 添加学生\n  - get_average(students) 计算平均分\n  - get_top(students) 找最高分学生\n- 添加 4 个学生：小明85, 小红92, 小刚78, 小丽96\n- 打印所有学生\n- 打印平均成绩（保留1位小数）\n- 打印最高分学生\n\n预期输出包含：\n平均分: 87.8\n最高分: 小丽 96',
      difficulty: 'medium',
      initialCode: `# 学生成绩管理系统
def add_student(students, name, score):
    pass  # 替换为你的代码

def get_average(students):
    pass  # 替换为你的代码

def get_top(students):
    pass  # 替换为你的代码

# 测试
students = []

# 添加学生


# 打印结果

`,
      testCode: `# 测试学生管理系统
output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含87.8",
    "passed": "87.8" in output or "87" in output,
    "message": "平均分 (85+92+78+96)/4 = 87.8"
})

_test_results.append({
    "name": "包含96",
    "passed": "96" in output,
    "message": "最高分 96"
})

_test_results.append({
    "name": "包含小丽",
    "passed": "小丽" in output,
    "message": "最高分学生是小丽"
})

_test_results.append({
    "name": "包含小明",
    "passed": "小明" in output,
    "message": "应该包含小明"
})
`,
      testCases: [
        { name: '平均分', input: '无', expected: '87.8' },
        { name: '最高分', input: '无', expected: '小丽 96' }
      ],
      xpReward: 30
    },
    {
      id: 3,
      title: '简易计算器',
      description: '编写简易计算器程序，支持多种运算。\n\n要求：\n- 定义函数 calculate(a, op, b)\n- 支持 +、-、*、/、%（取余）、**（幂）运算\n- 用 if-elif-else 判断运算符\n- 除法和取余时处理除以零的情况\n- 未知运算符返回 "不支持的操作"\n- 测试以下运算：\n  - calculate(10, "+", 5)\n  - calculate(10, "*", 4)\n  - calculate(2, "**", 10)\n  - calculate(10, "/", 0)\n\n打印所有测试结果',
      difficulty: 'hard',
      initialCode: `# 简易计算器
def calculate(a, op, b):
    # 在此编写代码
    pass

# 测试
print("10 + 5 =", calculate(10, "+", 5))
print("10 * 4 =", calculate(10, "*", 4))
print("2 ** 10 =", calculate(2, "**", 10))
print("10 / 0 =", calculate(10, "/", 0))
`,
      testCode: `# 测试计算器
output = _output_buffer.getvalue()

_test_results.append({
    "name": "加法15",
    "passed": "15" in output,
    "message": "10 + 5 = 15"
})

_test_results.append({
    "name": "乘法40",
    "passed": "40" in output,
    "message": "10 * 4 = 40"
})

_test_results.append({
    "name": "幂1024",
    "passed": "1024" in output,
    "message": "2 ** 10 = 1024"
})

_test_results.append({
    "name": "处理除以零",
    "passed": "零" in output or "错" in output or "不可" in output,
    "message": "除以零应该有错误提示"
})
`,
      testCases: [
        { name: '加法', input: '10,+,5', expected: '15' },
        { name: '幂运算', input: '2,**,10', expected: '1024' }
      ],
      xpReward: 40
    }
  ],
  // ============== 字符串深入 挑战 ==============
  10: [
    {
      id: 1,
      title: '回文判断',
      description: '判断一个字符串是否为回文（正反读都一样）。\n\n要求：\n- 函数 is_palindrome(s) 返回 True 或 False\n- 忽略大小写和空格\n- 测试 "A man a plan a canal Panama" → True\n- 测试 "hello" → False',
      difficulty: 'easy',
      initialCode: `def is_palindrome(s):
    # 在此实现
    pass

print(is_palindrome("A man a plan a canal Panama"))
print(is_palindrome("hello"))
print(is_palindrome("racecar"))
`,
      testCode: `output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含True",
    "passed": "True" in output,
    "message": "回文应该返回 True"
})
_test_results.append({
    "name": "包含False",
    "passed": "False" in output,
    "message": "hello 不是回文"
})
_test_results.append({
    "name": "同时出现",
    "passed": output.count("True") >= 2 and "False" in output,
    "message": "应该有多个 True 和 False"
})
`,
      testCases: [
        { name: '基础回文', input: 'A man a plan a canal Panama', expected: 'True' }
      ],
      xpReward: 15
    },
    {
      id: 2,
      title: '统计字符频率',
      description: '统计字符串中每个字符出现的次数。\n\n要求：\n- 函数 char_frequency(s) 返回字典\n- 统计 "hello world" 中每个字符',
      difficulty: 'easy',
      initialCode: `def char_frequency(s):
    # 在此实现
    pass

result = char_frequency("hello world")
print(result)
`,
      testCode: `output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含字典",
    "passed": "{" in output and "}" in output,
    "message": "应该返回字典"
})
_test_results.append({
    "name": "l出现3次",
    "passed": "3" in output,
    "message": "l 出现 3 次"
})
`,
      testCases: [
        { name: 'hello world', input: '无', expected: "l: 3" }
      ],
      xpReward: 15
    },
    {
      id: 3,
      title: '字符串模板',
      description: '实现简单的字符串模板替换。\n\n要求：\n- 函数 render(template, data)\n- 将 template 中的 {key} 替换为 data[key]\n- 例如 render("Hi, {name}!", {"name": "小明"}) → "Hi, 小明!"',
      difficulty: 'medium',
      initialCode: `def render(template, data):
    # 在此实现
    pass

print(render("Hi, {name}! You are {age} years old.", {"name": "小明", "age": 18}))
`,
      testCode: `output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含小明",
    "passed": "小明" in output,
    "message": "应该替换 {name} 为小明"
})
_test_results.append({
    "name": "包含18",
    "passed": "18" in output,
    "message": "应该替换 {age} 为 18"
})
_test_results.append({
    "name": "无大括号",
    "passed": "{" not in output and "}" not in output,
    "message": "模板标记应被替换"
})
`,
      testCases: [
        { name: '基础模板', input: '无', expected: 'Hi, 小明!' }
      ],
      xpReward: 20
    },
    {
      id: 4,
      title: '凯撒密码加密',
      description: '实现简单的凯撒密码加密。\n\n要求：\n- 函数 caesar_cipher(text, shift)\n- 将每个字母按 shift 偏移（保留大小写）\n- 测试 "Hello, World!" shift=3 → "Khoor, Zruog!"',
      difficulty: 'hard',
      initialCode: `def caesar_cipher(text, shift):
    # 在此实现
    pass

print(caesar_cipher("Hello, World!", 3))
print(caesar_cipher("Python", 1))
`,
      testCode: `output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含Khoor",
    "passed": "Khoor" in output,
    "message": "Hello 加密 3 位应该是 Khoor"
})
_test_results.append({
    "name": "包含Zruog",
    "passed": "Zruog" in output,
    "message": "World 加密 3 位应该是 Zruog"
})
_test_results.append({
    "name": "包含Qzuipo",
    "passed": "Qzuipo" in output,
    "message": "Python 加密 1 位应该是 Qzuipo"
})
`,
      testCases: [
        { name: 'Hello 加密3', input: '无', expected: 'Khoor' }
      ],
      xpReward: 30
    }
  ],
  // ============== 模块与包 挑战 ==============
  11: [
    {
      id: 1,
      title: '随机密码生成器',
      description: '使用 random 模块生成随机密码。\n\n要求：\n- 函数 generate_password(length=8)\n- 包含大小写字母和数字\n- 测试生成长度为 12 的密码',
      difficulty: 'easy',
      initialCode: `import random
import string

def generate_password(length=8):
    # 在此实现
    pass

pwd = generate_password(12)
print(f"密码: {pwd}")
print(f"长度: {len(pwd)}")
`,
      testCode: `output = _output_buffer.getvalue()

_test_results.append({
    "name": "长度12",
    "passed": "12" in output,
    "message": "密码长度应该是 12"
})
_test_results.append({
    "name": "包含密码",
    "passed": "密码" in output,
    "message": "应该输出密码"
})
`,
      testCases: [
        { name: '长度测试', input: '12', expected: '12' }
      ],
      xpReward: 15
    },
    {
      id: 2,
      title: '计时器装饰器',
      description: '实现一个计时装饰器。\n\n要求：\n- 装饰器 timer\n- 打印函数执行耗时（毫秒）\n- 用 time 模块',
      difficulty: 'medium',
      initialCode: `import time

def timer(func):
    def wrapper(*args, **kwargs):
        # 在此实现
        pass
    return wrapper

@timer
def slow_func():
    time.sleep(0.01)

slow_func()
`,
      testCode: `output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含耗时",
    "passed": "耗时" in output or "毫秒" in output or "ms" in output.lower(),
    "message": "应该输出耗时信息"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: '耗时' }
      ],
      xpReward: 20
    },
    {
      id: 3,
      title: 'JSON 工具类',
      description: '创建一个 JSON 工具模块。\n\n要求：\n- 类 JsonHelper\n- 方法 save(obj, filename) 序列化保存\n- 方法 load(filename) 反序列化加载\n- 测试保存和加载字典',
      difficulty: 'medium',
      initialCode: `import json
import os

class JsonHelper:
    def save(self, obj, filename):
        # 在此实现
        pass
    
    def load(self, filename):
        # 在此实现
        pass

helper = JsonHelper()
data = {"name": "Python", "version": 3.10, "features": ["easy", "powerful"]}
helper.save(data, "test.json")
loaded = helper.load("test.json")
print(loaded)
print(type(loaded))

# 清理
if os.path.exists("test.json"):
    os.remove("test.json")
`,
      testCode: `output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含Python",
    "passed": "Python" in output,
    "message": "应该加载出 Python"
})
_test_results.append({
    "name": "包含dict",
    "passed": "dict" in output.lower() or "{" in output,
    "message": "应该返回字典类型"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: 'dict' }
      ],
      xpReward: 25
    },
    {
      id: 4,
      title: '简易日志系统',
      description: '实现一个日志记录器。\n\n要求：\n- 类 Logger\n- 方法 log(level, message) 打印带时间戳的日志\n- 方法 log_to_file(message, filename) 追加到文件\n- 测试两种用法',
      difficulty: 'hard',
      initialCode: `from datetime import datetime
import os

class Logger:
    def log(self, level, message):
        # 在此实现
        pass
    
    def log_to_file(self, message, filename="app.log"):
        # 在此实现
        pass

logger = Logger()
logger.log("INFO", "应用启动")
logger.log("ERROR", "发生错误")
logger.log_to_file("文件日志测试")
logger.log_to_file("另一条日志")

# 读取并显示
if os.path.exists("app.log"):
    with open("app.log", "r", encoding="utf-8") as f:
        print("--- 文件内容 ---")
        print(f.read())
    os.remove("app.log")
`,
      testCode: `output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含INFO",
    "passed": "INFO" in output,
    "message": "应该显示 INFO 级别"
})
_test_results.append({
    "name": "包含ERROR",
    "passed": "ERROR" in output,
    "message": "应该显示 ERROR 级别"
})
_test_results.append({
    "name": "包含时间戳",
    "passed": "20" in output or ":" in output,
    "message": "应该包含时间戳"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: 'INFO' }
      ],
      xpReward: 30
    }
  ],
  // ============== 面向对象基础 挑战 ==============
  12: [
    {
      id: 1,
      title: '矩形类',
      description: '创建一个 Rectangle 类。\n\n要求：\n- 初始化 width 和 height\n- 方法 area() 返回面积\n- 方法 perimeter() 返回周长\n- 测试 4x3 的矩形',
      difficulty: 'easy',
      initialCode: `class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def area(self):
        # 在此实现
        pass
    
    def perimeter(self):
        # 在此实现
        pass

r = Rectangle(4, 3)
print(f"面积: {r.area()}")
print(f"周长: {r.perimeter()}")
`,
      testCode: `output = _output_buffer.getvalue()

_test_results.append({
    "name": "面积12",
    "passed": "12" in output,
    "message": "4*3 = 12"
})
_test_results.append({
    "name": "周长14",
    "passed": "14" in output,
    "message": "(4+3)*2 = 14"
})
`,
      testCases: [
        { name: '面积', input: '4,3', expected: '12' },
        { name: '周长', input: '4,3', expected: '14' }
      ],
      xpReward: 15
    },
    {
      id: 2,
      title: '银行账户类',
      description: '创建 BankAccount 类。\n\n要求：\n- 初始化 owner 和 balance\n- deposit(amount) 存款\n- withdraw(amount) 取款\n- 测试存取款操作',
      difficulty: 'medium',
      initialCode: `class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    
    def deposit(self, amount):
        # 在此实现
        pass
    
    def withdraw(self, amount):
        # 在此实现
        pass
    
    def __str__(self):
        return f"{self.owner}: {self.balance}元"

acc = BankAccount("小明", 1000)
acc.deposit(500)
print(acc)
acc.withdraw(200)
print(acc)
`,
      testCode: `output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含1500",
    "passed": "1500" in output,
    "message": "存款 500 后应该是 1500"
})
_test_results.append({
    "name": "包含1300",
    "passed": "1300" in output,
    "message": "取款 200 后应该是 1300"
})
_test_results.append({
    "name": "包含小明",
    "passed": "小明" in output,
    "message": "应该显示账户名"
})
`,
      testCases: [
        { name: '存款后', input: '无', expected: '1500' }
      ],
      xpReward: 20
    },
    {
      id: 3,
      title: '计数器类',
      description: '创建一个可以记录调用次数的类装饰器。\n\n要求：\n- 类 CallCounter\n- 实现 __call__ 方法\n- 每次调用时打印是第几次调用',
      difficulty: 'medium',
      initialCode: `class CallCounter:
    def __init__(self):
        self.count = 0
    
    def __call__(self, *args, **kwargs):
        # 在此实现
        pass

counter = CallCounter()
counter()
counter()
counter("hello")
`,
      testCode: `output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含第1次",
    "passed": "1" in output,
    "message": "第一次调用"
})
_test_results.append({
    "name": "包含第3次",
    "passed": "3" in output,
    "message": "第三次调用"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: '3' }
      ],
      xpReward: 20
    },
    {
      id: 4,
      title: '图书管理系统',
      description: '创建一个 Book 类。\n\n要求：\n- 属性：title, author, year, available（默认True）\n- borrow() 借书（如果可用，标记为不可用）\n- return_book() 还书\n- 测试借还书流程',
      difficulty: 'hard',
      initialCode: `class Book:
    def __init__(self, title, author, year):
        # 在此实现
        pass
    
    def borrow(self):
        # 在此实现
        pass
    
    def return_book(self):
        # 在此实现
        pass
    
    def __str__(self):
        return f"{self.title} - {self.author} ({'可借' if self.available else '已借出'})"

book = Book("Python编程", "小明", 2024)
print(book)
book.borrow()
print(book)
book.borrow()  # 应该提示
book.return_book()
print(book)
`,
      testCode: `output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含可借",
    "passed": "可借" in output,
    "message": "初始状态应该是可借"
})
_test_results.append({
    "name": "包含已借出",
    "passed": "已借出" in output,
    "message": "借出后应该是已借出"
})
_test_results.append({
    "name": "包含Python编程",
    "passed": "Python编程" in output,
    "message": "应该显示书名"
})
`,
      testCases: [
        { name: '借书后', input: '无', expected: '已借出' }
      ],
      xpReward: 30
    }
  ],
  // ============== 继承与多态 挑战 ==============
  13: [
    {
      id: 1,
      title: '动物声音多态',
      description: '用多态实现不同动物的叫声。\n\n要求：\n- 父类 Animal，方法 speak() 返回 "..."\n- 子类 Dog 重写 speak() 返回 "汪汪"\n- 子类 Cat 重写 speak() 返回 "喵喵"\n- 用循环调用 speak()',
      difficulty: 'easy',
      initialCode: `class Animal:
    def speak(self):
        return "..."

class Dog(Animal):
    # 在此重写
    pass

class Cat(Animal):
    # 在此重写
    pass

animals = [Dog(), Cat(), Dog(), Cat()]
for a in animals:
    print(a.speak())
`,
      testCode: `output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含汪汪",
    "passed": "汪汪" in output,
    "message": "Dog 应该返回汪汪"
})
_test_results.append({
    "name": "包含喵喵",
    "passed": "喵喵" in output,
    "message": "Cat 应该返回喵喵"
})
`,
      testCases: [
        { name: '狗叫', input: '无', expected: '汪汪' }
      ],
      xpReward: 15
    },
    {
      id: 2,
      title: '员工薪资系统',
      description: '用继承实现不同类型员工的薪资计算。\n\n要求：\n- 父类 Employee，属性 name，方法 calculate_salary() 返回基础工资 5000\n- 子类 Manager 重写，基础 + 奖金 3000\n- 子类 Developer 重写，基础 + 项目奖金',
      difficulty: 'medium',
      initialCode: `class Employee:
    def __init__(self, name):
        self.name = name
    
    def calculate_salary(self):
        return 5000

class Manager(Employee):
    # 在此重写
    pass

class Developer(Employee):
    def __init__(self, name, projects=0):
        super().__init__(name)
        self.projects = projects
    
    def calculate_salary(self):
        return super().calculate_salary() + self.projects * 1000

emps = [
    Manager("经理A"),
    Developer("开发B", 5),
    Employee("普通员工C")
]
for e in emps:
    print(f"{e.name}: {e.calculate_salary()}元")
`,
      testCode: `output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含8000",
    "passed": "8000" in output,
    "message": "经理 5000+3000=8000"
})
_test_results.append({
    "name": "包含10000",
    "passed": "10000" in output,
    "message": "开发 5000+5*1000=10000"
})
_test_results.append({
    "name": "包含5000",
    "passed": "5000" in output,
    "message": "普通员工应该是 5000"
})
`,
      testCases: [
        { name: '经理薪资', input: '无', expected: '8000' }
      ],
      xpReward: 25
    },
    {
      id: 3,
      title: '几何图形系统',
      description: '用继承实现几何图形。\n\n要求：\n- 父类 Shape，方法 area() 返回 0\n- 子类 Square（边长）\n- 子类 Triangle（底和高）\n- 列表中放不同图形，遍历打印面积',
      difficulty: 'medium',
      initialCode: `class Shape:
    def area(self):
        return 0

class Square(Shape):
    def __init__(self, side):
        self.side = side
    # 在此重写 area()

class Triangle(Shape):
    def __init__(self, base, height):
        self.base = base
        self.height = height
    # 在此重写 area()

shapes = [Square(5), Triangle(4, 6), Square(3)]
for s in shapes:
    print(f"{type(s).__name__} 面积: {s.area()}")
`,
      testCode: `output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含25",
    "passed": "25" in output,
    "message": "正方形 5*5=25"
})
_test_results.append({
    "name": "包含12",
    "passed": "12" in output,
    "message": "三角形 4*6/2=12"
})
_test_results.append({
    "name": "包含9",
    "passed": "9" in output,
    "message": "正方形 3*3=9"
})
`,
      testCases: [
        { name: '正方形', input: '5', expected: '25' }
      ],
      xpReward: 25
    },
    {
      id: 4,
      title: 'RPG 角色系统',
      description: '用继承实现 RPG 游戏角色。\n\n要求：\n- 父类 Character，hp、attack 属性，方法 take_damage()\n- 子类 Warrior 高攻击\n- 子类 Mage 有 mana 属性和 spell() 方法\n- 测试战士和法师',
      difficulty: 'hard',
      initialCode: `class Character:
    def __init__(self, name, hp, attack):
        self.name = name
        self.hp = hp
        self.attack = attack
    
    def take_damage(self, dmg):
        self.hp -= dmg
        return f"{self.name} 受到 {dmg} 伤害，剩余 HP: {self.hp}"

class Warrior(Character):
    def __init__(self, name):
        super().__init__(name, 100, 15)

class Mage(Character):
    def __init__(self, name):
        super().__init__(name, 60, 8)
        self.mana = 100
    
    def spell(self, target):
        if self.mana >= 20:
            self.mana -= 20
            damage = 25
            target.hp -= damage
            return f"{self.name} 施法对 {target.name} 造成 {damage} 伤害"
        return "法力不足"

w = Warrior("战士A")
m = Mage("法师B")
print(w.take_damage(10))
print(m.spell(w))
print(f"法师剩余法力: {m.mana}")
`,
      testCode: `output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含HP",
    "passed": "HP" in output or "hp" in output or "血" in output,
    "message": "应该显示 HP"
})
_test_results.append({
    "name": "包含法力",
    "passed": "法力" in output or "mana" in output.lower(),
    "message": "法师有法力"
})
_test_results.append({
    "name": "包含战士",
    "passed": "战士" in output,
    "message": "应该显示战士"
})
_test_results.append({
    "name": "包含法师",
    "passed": "法师" in output,
    "message": "应该显示法师"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: '法力' }
      ],
      xpReward: 35
    }
  ],
  // ============== 异常处理进阶 挑战 ==============
  14: [
    {
      id: 1,
      title: '安全除法器',
      description: '实现一个安全除法函数，处理各种异常。\n\n要求：\n- 函数 safe_div(a, b)\n- 处理 ZeroDivisionError\n- 处理 TypeError\n- 返回结果或错误信息',
      difficulty: 'easy',
      initialCode: `def safe_div(a, b):
    # 在此实现
    pass

print(safe_div(10, 2))
print(safe_div(10, 0))
print(safe_div("10", 2))
`,
      testCode: `output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含5",
    "passed": "5.0" in output or "5" in output,
    "message": "10/2 = 5"
})
_test_results.append({
    "name": "包含错误",
    "passed": "错" in output or "零" in output,
    "message": "除以零应该返回错误"
})
`,
      testCases: [
        { name: '正常', input: '10,2', expected: '5.0' }
      ],
      xpReward: 15
    },
    {
      id: 2,
      title: '输入验证器',
      description: '实现用户输入验证。\n\n要求：\n- 函数 validate_age(age)\n- age < 0 或 > 150 抛出 ValueError\n- age 不是数字抛 TypeError\n- 测试三种情况',
      difficulty: 'medium',
      initialCode: `class InvalidAgeError(ValueError):
    pass

def validate_age(age):
    # 在此实现
    pass

# 测试
for test_age in [25, -5, 200, "abc", 30]:
    try:
        validate_age(test_age)
        print(f"{test_age}: 有效")
    except (ValueError, TypeError) as e:
        print(f"{test_age}: 无效 - {e}")
`,
      testCode: `output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含有效",
    "passed": "有效" in output,
    "message": "25 应该是有效"
})
_test_results.append({
    "name": "包含无效",
    "passed": "无效" in output,
    "message": "应该识别无效输入"
})
`,
      testCases: [
        { name: '有效年龄', input: '25', expected: '有效' }
      ],
      xpReward: 20
    },
    {
      id: 3,
      title: '上下文管理器',
      description: '实现一个计时上下文管理器。\n\n要求：\n- 类 Timer\n- __enter__ 记录开始时间\n- __exit__ 计算并打印耗时\n- 用 with 语句测试',
      difficulty: 'hard',
      initialCode: `import time

class Timer:
    def __enter__(self):
        # 在此实现
        pass
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        # 在此实现
        pass

with Timer() as t:
    # 模拟耗时操作
    total = 0
    for i in range(100000):
        total += i
    print(f"计算结果: {total}")
`,
      testCode: `output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含耗时",
    "passed": "耗时" in output or "秒" in output or "s" in output.lower(),
    "message": "应该输出耗时"
})
_test_results.append({
    "name": "包含结果",
    "passed": "4999950000" in output or "结果" in output,
    "message": "应该输出计算结果"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: '耗时' }
      ],
      xpReward: 30
    }
  ],
  // ============== 文件与目录 挑战 ==============
  15: [
    {
      id: 1,
      title: '列出所有 .py 文件',
      description: '使用 glob 模块列出所有 Python 文件。\n\n要求：\n- 使用 glob 查找当前目录所有 .py 文件\n- 打印文件列表和数量',
      difficulty: 'easy',
      initialCode: `import glob
import os

# 模拟一些文件名
files = ["main.py", "test.py", "app.py", "data.txt", "readme.md"]
py_files = [f for f in files if f.endswith(".py")]
print("Python 文件:", py_files)
print(f"数量: {len(py_files)}")
`,
      testCode: `output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含.py",
    "passed": ".py" in output,
    "message": "应该包含 .py 文件"
})
_test_results.append({
    "name": "包含数量3",
    "passed": "3" in output,
    "message": "应该有 3 个 .py 文件"
})
_test_results.append({
    "name": "包含main",
    "passed": "main" in output,
    "message": "应该包含 main.py"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: '3' }
      ],
      xpReward: 15
    },
    {
      id: 2,
      title: '路径信息工具',
      description: '实现一个函数提取路径信息。\n\n要求：\n- 函数 path_info(path) 返回字典\n- 包含 name, dir, ext, exists 字段\n- 测试多个路径',
      difficulty: 'medium',
      initialCode: `import os

def path_info(path):
    # 在此实现
    pass

for p in ["/home/user/main.py", "test.txt", "../data.json"]:
    info = path_info(p)
    print(f"{p}:")
    print(f"  name={info['name']}, dir={info['dir']}, ext={info['ext']}")
`,
      testCode: `output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含main.py",
    "passed": "main.py" in output,
    "message": "应该识别 main.py"
})
_test_results.append({
    "name": "包含.json",
    "passed": ".json" in output,
    "message": "应该识别 .json 扩展名"
})
_test_results.append({
    "name": "包含txt",
    "passed": "txt" in output,
    "message": "应该识别 .txt 扩展名"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: 'ext' }
      ],
      xpReward: 20
    },
    {
      id: 3,
      title: '批量重命名',
      description: '实现批量重命名文件。\n\n要求：\n- 函数 batch_rename(file_list, prefix)\n- 给所有文件添加前缀\n- 返回新文件名列表',
      difficulty: 'medium',
      initialCode: `def batch_rename(file_list, prefix):
    # 在此实现
    pass

originals = ["report.txt", "data.csv", "image.png"]
renamed = batch_rename(originals, "2024_")
for old, new in zip(originals, renamed):
    print(f"{old} -> {new}")
`,
      testCode: `output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含2024_",
    "passed": "2024_" in output,
    "message": "应该添加 2024_ 前缀"
})
_test_results.append({
    "name": "包含report",
    "passed": "report" in output,
    "message": "应该保留原文件名"
})
_test_results.append({
    "name": "包含3个文件",
    "passed": output.count("->") >= 3,
    "message": "应该重命名 3 个文件"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: '2024_' }
      ],
      xpReward: 20
    },
    {
      id: 4,
      title: '文件统计器',
      description: '统计目录中的文件信息。\n\n要求：\n- 函数 count_files(file_list)\n- 统计文件总数、.py 数量、总大小（假设每个文件100字节）',
      difficulty: 'hard',
      initialCode: `def count_files(file_list):
    # 在此实现
    pass

files = ["a.py", "b.txt", "c.py", "d.py", "e.md", "f.py"]
result = count_files(files)
print(f"总文件: {result['total']}")
print(f".py 文件: {result['py_count']}")
print(f"总大小: {result['total_size']} 字节")
`,
      testCode: `output = _output_buffer.getvalue()

_test_results.append({
    "name": "总文件6",
    "passed": "6" in output,
    "message": "总文件数 6"
})
_test_results.append({
    "name": "py文件4",
    "passed": "4" in output,
    "message": ".py 文件 4 个"
})
_test_results.append({
    "name": "大小600",
    "passed": "600" in output,
    "message": "总大小 6*100=600 字节"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: '600' }
      ],
      xpReward: 25
    }
  ],
  // ============== 高级特性 挑战 ==============
  16: [
    {
      id: 1,
      title: '斐波那契生成器',
      description: '用生成器实现斐波那契数列。\n\n要求：\n- 函数 fib(n) 是生成器\n- yield 前 n 个斐波那契数\n- 测试 fib(10)',
      difficulty: 'easy',
      initialCode: `def fib(n):
    # 在此实现
    pass

# 测试
for num in fib(10):
    print(num, end=" ")
print()
`,
      testCode: `output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含0",
    "passed": "0" in output,
    "message": "第一个应该是 0"
})
_test_results.append({
    "name": "包含34",
    "passed": "34" in output,
    "message": "第10个斐波那契是 34"
})
_test_results.append({
    "name": "包含21",
    "passed": "21" in output,
    "message": "应该包含 21"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: '34' }
      ],
      xpReward: 15
    },
    {
      id: 2,
      title: '缓存装饰器',
      description: '实现一个简单的缓存装饰器。\n\n要求：\n- 装饰器 cache\n- 第二次调用相同参数时直接返回缓存结果\n- 用字典存缓存',
      difficulty: 'medium',
      initialCode: `def cache(func):
    cached = {}
    def wrapper(*args):
        # 在此实现
        pass
    return wrapper

@cache
def slow_add(a, b):
    print(f"计算 {a} + {b}")
    return a + b

print(slow_add(1, 2))
print(slow_add(1, 2))  # 应该用缓存
print(slow_add(2, 3))
print(slow_add(2, 3))  # 应该用缓存
`,
      testCode: `output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含3",
    "passed": "3" in output,
    "message": "1+2=3"
})
_test_results.append({
    "name": "包含5",
    "passed": "5" in output,
    "message": "2+3=5"
})
_test_results.append({
    "name": "计算次数",
    "passed": output.count("计算") == 2,
    "message": "实际计算应该只发生 2 次"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: '3' }
      ],
      xpReward: 25
    },
    {
      id: 3,
      title: '日志装饰器',
      description: '实现一个日志装饰器。\n\n要求：\n- 装饰器 log_call\n- 打印函数名、参数、返回值\n- 用 functools.wraps 保留元信息',
      difficulty: 'medium',
      initialCode: `import functools

def log_call(func):
    # 在此实现
    pass

@log_call
def add(a, b):
    return a + b

result = add(3, 5)
`,
      testCode: `output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含add",
    "passed": "add" in output,
    "message": "应该包含函数名 add"
})
_test_results.append({
    "name": "包含3",
    "passed": "3" in output,
    "message": "应该包含参数"
})
_test_results.append({
    "name": "包含8",
    "passed": "8" in output,
    "message": "应该包含返回值"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: 'add' }
      ],
      xpReward: 25
    },
    {
      id: 4,
      title: '数据管道',
      description: '用 map/filter/lambda 处理数据。\n\n要求：\n- 给定 [1,2,3,4,5,6,7,8,9,10]\n- 筛选出偶数\n- 每个数平方\n- 求总和',
      difficulty: 'hard',
      initialCode: `numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# 在此实现数据管道
result = None

print(f"原数据: {numbers}")
print(f"偶数平方和: {result}")
`,
      testCode: `output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含220",
    "passed": "220" in output,
    "message": "4+16+36+64+100 = 220"
})
_test_results.append({
    "name": "包含原数据",
    "passed": "原数据" in output or "1" in output,
    "message": "应该输出原数据"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: '220' }
      ],
      xpReward: 30
    }
  ],
  // ============== 常用标准库 挑战 ==============
  17: [
    {
      id: 1,
      title: '日期计算器',
      description: '使用 datetime 计算日期。\n\n要求：\n- 计算今天到年底还有多少天\n- 打印今天的日期、星期',
      difficulty: 'easy',
      initialCode: `from datetime import datetime, timedelta

now = datetime.now()
year_end = datetime(now.year, 12, 31)
days_left = (year_end - now).days

print(f"今天: {now.strftime('%Y-%m-%d %A')}")
print(f"距离年底还有: {days_left} 天")
`,
      testCode: `output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含今天",
    "passed": "今天" in output,
    "message": "应该显示今天"
})
_test_results.append({
    "name": "包含距离",
    "passed": "距离" in output,
    "message": "应该显示距离年底"
})
_test_results.append({
    "name": "包含天",
    "passed": "天" in output,
    "message": "应该包含天数"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: '今天' }
      ],
      xpReward: 15
    },
    {
      id: 2,
      title: '邮箱验证',
      description: '用正则验证邮箱格式。\n\n要求：\n- 函数 is_email(s)\n- 用正则匹配\n- 测试多个邮箱',
      difficulty: 'medium',
      initialCode: `import re

def is_email(s):
    # 在此实现
    pass

tests = ["test@example.com", "user.name+tag@domain.co.uk", "invalid.email", "@nodomain.com", "no@dot"]
for t in tests:
    print(f"{t}: {'有效' if is_email(t) else '无效'}")
`,
      testCode: `output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含有效",
    "passed": "有效" in output,
    "message": "test@example.com 应该是有效"
})
_test_results.append({
    "name": "包含无效",
    "passed": "无效" in output,
    "message": "应该有无效的邮箱"
})
_test_results.append({
    "name": "包含test",
    "passed": "test@example" in output or "test" in output,
    "message": "应该输出 test 邮箱"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: '有效' }
      ],
      xpReward: 20
    },
    {
      id: 3,
      title: 'JSON 配置加载',
      description: '加载和修改 JSON 配置。\n\n要求：\n- 创建配置字典\n- 序列化为 JSON 字符串\n- 修改配置再反序列化\n- 验证修改生效',
      difficulty: 'medium',
      initialCode: `import json

config = {
    "app_name": "MyApp",
    "version": "1.0.0",
    "debug": False,
    "max_users": 100
}

# 序列化
json_str = json.dumps(config, ensure_ascii=False, indent=2)
print("原配置:")
print(json_str)

# 反序列化修改
loaded = json.loads(json_str)
loaded["version"] = "2.0.0"
loaded["debug"] = True
loaded["max_users"] = 200

print("\\n修改后:")
print(json.dumps(loaded, ensure_ascii=False, indent=2))
`,
      testCode: `output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含MyApp",
    "passed": "MyApp" in output,
    "message": "应该包含 app_name"
})
_test_results.append({
    "name": "包含2.0.0",
    "passed": "2.0.0" in output,
    "message": "修改后的版本号"
})
_test_results.append({
    "name": "包含200",
    "passed": "200" in output,
    "message": "修改后的 max_users"
})
_test_results.append({
    "name": "包含true",
    "passed": "true" in output,
    "message": "debug 应该是 true"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: '2.0.0' }
      ],
      xpReward: 25
    },
    {
      id: 4,
      title: '词频分析报告',
      description: '分析一段文本的词频。\n\n要求：\n- 给定英文段落\n- 用 Counter 统计\n- 找出前 3 个高频词\n- 找出只出现一次的词数',
      difficulty: 'hard',
      initialCode: `from collections import Counter

text = "the quick brown fox jumps over the lazy dog the fox is quick and the dog is lazy"
words = text.split()
counter = Counter(words)

top3 = counter.most_common(3)
once = [w for w, c in counter.items() if c == 1]

print(f"总词数: {len(words)}")
print(f"不重复词数: {len(counter)}")
print(f"前3高频: {top3}")
print(f"只出现1次的词: {once}")
`,
      testCode: `output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含the",
    "passed": "the" in output and ("4" in output or "3" in output),
    "message": "the 是高频词"
})
_test_results.append({
    "name": "包含总数",
    "passed": "总词数" in output,
    "message": "应该输出总词数"
})
_test_results.append({
    "name": "包含前3",
    "passed": "前3" in output or "Top" in output or "top" in output.lower(),
    "message": "应该输出高频词"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: 'the' }
      ],
      xpReward: 30
    }
  ],
  // ============== 综合实战 挑战 ==============
  18: [
    {
      id: 1,
      title: '待办事项管理器',
      description: '实现一个待办事项管理器。\n\n要求：\n- 类 TodoList\n- 方法 add(item), remove(item), list_all()\n- 方法 mark_done(item) 标记完成\n- 测试增删改查',
      difficulty: 'medium',
      initialCode: `class TodoList:
    def __init__(self):
        self.items = []
    
    def add(self, item):
        # 在此实现
        pass
    
    def list_all(self):
        # 在此实现
        pass
    
    def mark_done(self, item):
        # 在此实现
        pass

todo = TodoList()
todo.add("学习 Python")
todo.add("做项目")
todo.add("写博客")
print("--- 所有待办 ---")
todo.list_all()
todo.mark_done("学习 Python")
print("--- 完成后 ---")
todo.list_all()
`,
      testCode: `output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含学习",
    "passed": "学习" in output,
    "message": "应该包含待办"
})
_test_results.append({
    "name": "包含✓",
    "passed": "✓" in output or "[x]" in output or "完成" in output,
    "message": "应该显示完成标记"
})
_test_results.append({
    "name": "包含所有待办",
    "passed": "所有" in output,
    "message": "应该列出所有待办"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: '学习' }
      ],
      xpReward: 30
    },
    {
      id: 2,
      title: '数据导出器',
      description: '实现一个数据导出器，支持多种格式。\n\n要求：\n- 类 DataExporter\n- 方法 to_json(data), to_csv(data)\n- 数据是字典列表\n- 测试两种导出',
      difficulty: 'medium',
      initialCode: `import json
import csv
import io

class DataExporter:
    def to_json(self, data):
        # 在此实现
        pass
    
    def to_csv(self, data):
        # 在此实现
        pass

data = [
    {"name": "小明", "age": 18, "score": 95},
    {"name": "小红", "age": 19, "score": 88}
]

exporter = DataExporter()
print("=== JSON ===")
print(exporter.to_json(data))
print("\\n=== CSV ===")
print(exporter.to_csv(data))
`,
      testCode: `output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含JSON",
    "passed": "JSON" in output and "{" in output,
    "message": "应该有 JSON 输出"
})
_test_results.append({
    "name": "包含CSV",
    "passed": "CSV" in output and "," in output,
    "message": "应该有 CSV 输出"
})
_test_results.append({
    "name": "包含小明",
    "passed": "小明" in output,
    "message": "应该包含数据"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: 'JSON' }
      ],
      xpReward: 35
    },
    {
      id: 3,
      title: '简易爬虫',
      description: '实现一个简易的网页内容获取。\n\n要求：\n- 模拟函数 fetch(url)\n- 模拟解析函数 parse(html)\n- 主流程：获取 → 解析 → 提取标题',
      difficulty: 'hard',
      initialCode: `import re

# 模拟的 fetch（实际用 requests）
def fetch(url):
    """模拟获取网页内容"""
    if "example" in url:
        return "<html><head><title>Example Page</title></head><body>Hello World</body></html>"
    return "<html><head><title>Other</title></head></html>"

# 解析标题
def extract_title(html):
    match = re.search(r"<title>(.*?)</title>", html)
    return match.group(1) if match else None

# 主流程
url = "https://example.com"
html = fetch(url)
title = extract_title(html)
print(f"URL: {url}")
print(f"标题: {title}")
`,
      testCode: `output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含标题",
    "passed": "标题" in output or "Example" in output,
    "message": "应该提取标题"
})
_test_results.append({
    "name": "包含URL",
    "passed": "URL" in output or "url" in output or "example" in output,
    "message": "应该输出 URL"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: 'Example' }
      ],
      xpReward: 40
    },
    {
      id: 4,
      title: '毕业挑战：迷你电商',
      description: '综合实战：迷你电商系统。\n\n要求：\n- 类 Product、Cart、Order\n- Product: name, price\n- Cart: add/remove/total\n- Order: 整合 Cart 生成订单（含时间戳）\n- 测试完整流程',
      difficulty: 'hard',
      initialCode: `from datetime import datetime

class Product:
    def __init__(self, name, price):
        self.name = name
        self.price = price

class Cart:
    def __init__(self):
        self.items = []
    
    def add(self, product, qty=1):
        # 在此实现
        pass
    
    def total(self):
        # 在此实现
        pass

class Order:
    def __init__(self, cart):
        self.cart = cart
        self.created_at = datetime.now()
    
    def summary(self):
        # 在此实现
        pass

# 测试
cart = Cart()
cart.add(Product("Python书", 59.9), 2)
cart.add(Product("咖啡", 25.0), 1)

order = Order(cart)
print(order.summary())
`,
      testCode: `output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含Python",
    "passed": "Python" in output,
    "message": "应该包含商品"
})
_test_results.append({
    "name": "包含价格",
    "passed": "144" in output or "59.9" in output or "25" in output,
    "message": "应该输出价格"
})
_test_results.append({
    "name": "包含时间",
    "passed": "20" in output or ":" in output,
    "message": "应该包含时间戳"
})
_test_results.append({
    "name": "包含订单",
    "passed": "订单" in output or "Order" in output or "总价" in output or "合计" in output,
    "message": "应该输出订单信息"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: 'Python' }
      ],
      xpReward: 50
    }
  ]
}
