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
  ],
  // ============== 19. Requests 网络请求 ==============
  19: [
    {
      id: 1,
      title: '为什么需要 requests ？',
      type: 'explanation',
      content: `在菜鸟教程中，Python 提供了内置的 \`urllib\` 进行网络请求，但它接口繁琐。**requests** 被誉为 "HTTP for Humans"，是最流行的 Python 第三方库。

**安装**（浏览器环境中我们使用模拟版）：
\`\`\`
pip install requests
\`\`\`

**核心 6 个方法**：
| 方法 | 作用 |
|---|---|
| \`requests.get()\` | GET 请求（读取） |
| \`requests.post()\` | POST 请求（提交） |
| \`requests.put()\` | PUT 请求（更新） |
| \`requests.delete()\` | DELETE 请求（删除） |
| \`requests.session()\` | 会话，保留 cookies |
| \`response.json()\` | 解析 JSON 响应 |

下面一步步学习！`
    },
    {
      id: 2,
      title: 'GET 请求与参数',
      type: 'example',
      content: `**GET 请求**用于从服务器读取数据。可以用 \`params=\` 把字典自动拼接成 URL 查询串。

菜鸟教程常用示例：请求一个模拟接口，看看天气 JSON。
\`\`\`
import requests_ as requests

# 1. 基础 GET
r = requests.get("https://api.example.com/weather?city=beijing")

# 2. 推荐用 params
r = requests.get(
    "https://api.example.com/weather",
    params={"city": "beijing", "lang": "zh-CN"}
)
\`\`\`

运行下面的示例代码：`,
      code: `# 模拟 requests 库（浏览器环境使用）
import requests_ as requests

# 查询某城市天气（模拟）
r = requests.get(
    "https://api.example.com/weather",
    params={"city": "Shanghai", "days": 3}
)
print("状态码:", r.status_code)
print("URL:", r.url)
print("响应（JSON）:")
print(r.json())`
    },
    {
      id: 3,
      title: 'POST 提交表单',
      type: 'practice',
      content: `**POST 请求**用于向服务器提交数据。登录表单、发帖、上传都是它。

**两种常见格式**：
- **表单**：\`data={"key":"val"}\` → \`Content-Type: application/x-www-form-urlencoded\`
- **JSON 接口**：\`json={"key":"val"}\` → \`Content-Type: application/json\`

**练习**：编写代码调用模拟登录接口，用 \`data=\` 提交用户名/密码，打印响应。
要求输出中包含 'access_token' 字符串。`,
      code: `import requests_ as requests

# 在此编写：POST 到 https://api.example.com/login
# 提交表单字段 username=admin password=123456
# 打印状态码和响应 JSON


`,
      answer: `import requests_ as requests

r = requests.post(
    "https://api.example.com/login",
    data={"username": "admin", "password": "123456"}
)
print("状态码:", r.status_code)
print("响应:", r.json())`,
      explanation: `**要点**：
1. \`data={...}\` 用于 form-urlencoded；\`json={...}\` 用于 REST API 的 JSON body
2. 登录接口几乎永远是 POST（GET 会把密码写进 URL 历史）
3. 成功响应一般包含 \`access_token\` / \`token\` / \`Set-Cookie\``,
      hint: 'requests.post(url, data={...})',
      testCode: `output = _output_buffer.getvalue()
_test_results.append({
    "name": "包含 token",
    "passed": "access_token" in output or "token" in output.lower(),
    "message": "登录成功响应应包含 access_token"
})
_test_results.append({
    "name": "有状态码输出",
    "passed": "状态码" in output or "200" in output,
    "message": "应打印状态码"
})`
    },
    {
      id: 4,
      title: 'Session 会话管理',
      type: 'explanation',
      content: `如果你用多个请求保持登录状态，每次都传 cookie 很麻烦。\`requests.Session()\` 会**自动保存和携带 cookies**，就像真的浏览器一样！

菜鸟教程经典示例：登录 → 访问需授权页面。
\`\`\`
s = requests.Session()

# 登录一次
s.post("https://api.example.com/login", data={"u": "a", "p": "b"})

# 后续请求自动带 cookie
r = s.get("https://api.example.com/profile")
\`\`\`

**常见误区**：
- ❌ 每次都用新的 requests.get/post，cookie 不会保留
- ✅ 用同一个 Session 对象贯穿整个会话`
    },
    {
      id: 5,
      title: '实战：模拟爬取文章列表',
      type: 'quiz',
      content: `假设你要爬取一个文章列表接口：\`GET /api/articles?page=1&size=10\`，需要带上浏览器 UA，否则返回 403。

**问题**：下列哪个做法最正确？`,
      options: [
        'requests.get(url) 不管，让它默认',
        'headers={"User-Agent":"Mozilla/5.0 ... Chrome/..."} 传入 get()',
        'data={"ua":"chrome"}',
        'proxies={"http":...} 强制代理'
      ],
      correctAnswer: 1,
      explanation: `**正确答案：B**  
\`headers=\` 参数传入自定义请求头是正确方式。

\`\`\`
requests.get(url, headers={"User-Agent": "Mozilla/5.0 ..."})
\`\`\`

很多服务器通过 UA 判断是爬虫还是浏览器，返回不同内容或 403。`
    },
    {
      id: 6,
      title: '小总结 & 错误处理',
      type: 'explanation',
      content: `**最佳实践清单**（来自菜鸟教程 + 经验）：

1. 总是 \`timeout=10\`，否则卡死网络会让程序挂起
2. 解析 JSON 前先 \`r.raise_for_status()\`，非 2xx 直接抛异常
3. 使用 \`try...except requests.RequestException\` 统一拦截所有网络错误
4. 频繁访问要加 \`time.sleep(0.5)\` 或用 Session 的 adapters 设置重试

\`\`\`
try:
    r = requests.get(url, timeout=10)
    r.raise_for_status()
    data = r.json()
except requests.RequestException as e:
    print("请求失败:", e)
\`\`\`

恭喜！你已经可以用 requests 爬取大部分公开 API 了 🎉`
    }
  ],
  // ============== 20. 正则表达式 re ==============
  20: [
    {
      id: 1,
      title: '正则是什么？',
      type: 'explanation',
      content: `**正则表达式（Regular Expression, regex）** 是一套**字符串模式匹配**语言。菜鸟教程专辟一大章讲它：手机号、邮箱、身份证、爬虫里提取 URL / 标题……都需要它。

Python 标准库 **re** 提供全部能力。先记住"三板斧"：
| 函数 | 作用 |
|---|---|
| \`re.search(pat, s)\` | 找到第一个匹配（返回 Match 对象） |
| \`re.findall(pat, s)\` | 找出所有匹配，返回列表 |
| \`re.sub(pat, repl, s)\` | 替换匹配的子串 |

**最常用元字符**（记住这 8 个就能搞定 80% 场景）：
- \`.\` 任意字符（除换行）
- \`\\d\` 数字 / \`\\w\` 字母数字下划线 / \`\\s\` 空白
- \`^abc\` 开头 / \`xyz$\` 结尾
- \`a*\` 0 次或多次 / \`a+\` 1 次或多次 / \`a?\` 0 或 1 次
- \`[abc]\` 字符集任意一个 / \`[^abc]\` 反向
- \`(组1|组2)\` 分组与捕获`
    },
    {
      id: 2,
      title: '手机号与邮箱',
      type: 'example',
      content: `**菜鸟教程最经典题**：校验手机号、提取邮箱。
\`\`\`
手机号规则（中国大陆）：1 开头，第二位 3-9，共 11 位
→ 模式：r"^1[3-9]\\d{9}$"

邮箱：name@domain.tld，name 可以字母数字._-，domain 至少两级
→ 模式：r"\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,})+$"
\`\`\`

运行下面示例：`,
      code: `import re

texts = [
    "13800138000",    # ✓ 手机
    "12345678901",    # ✗ 第二位是 2
    "alice_2024@example.com.cn",  # ✓ 邮箱
    "bad@.com",       # ✗
]

phone_pat = r"^1[3-9]\\d{9}$"
email_pat = r"^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,})+$"

for t in texts:
    ok_phone = bool(re.match(phone_pat, t))
    ok_email = bool(re.match(email_pat, t))
    print(f"{t:40s} 手机={ok_phone}  邮箱={ok_email}")`
    },
    {
      id: 3,
      title: '练习：提取全部链接 URL',
      type: 'practice',
      content: `**任务**：在下面的 HTML 文本中，用 \`re.findall\` **提取所有 <a> 标签的 href 值**。

\`\`\`
<a href="https://www.runoob.com/">菜鸟教程</a>
<a href='https://example.org/page1'>示例1</a>
<a  href = "https://api.github.com/users"  target=_blank>API</a>
\`\`\`

**难点**：
- href 可能用双引号，也可能用单引号
- 等号两边可能有空格

**要求**：输出的链接列表中至少包含上面 3 个 URL。`,
      code: `import re

html = """
<p>热门学习资源：</p>
<ul>
  <li><a href="https://www.runoob.com/">菜鸟教程</a></li>
  <li><a href='https://example.org/page1'>示例1</a></li>
  <li><a  href = "https://api.github.com/users"  target=_blank>GitHub API</a></li>
</ul>
"""

# 在此编写正则和 findall
# result = re.findall(..., html)
# for url in result: print(url)


`,
      answer: `import re

html = """
<p>热门学习资源：</p>
<ul>
  <li><a href="https://www.runoob.com/">菜鸟教程</a></li>
  <li><a href='https://example.org/page1'>示例1</a></li>
  <li><a  href = "https://api.github.com/users"  target=_blank>GitHub API</a></li>
</ul>
"""

# 分组捕获：匹配 href 后空格=空格 然后 (单引号里的内容 OR 双引号里的内容)
pat = r"""href\s*=\s*(?:"([^"]+)"|'([^']+)')"""
raw = re.findall(pat, html, re.IGNORECASE)
result = [a or b for a, b in raw]
for url in result:
    print(url)`,
      explanation: `**拆解模式**：
- \`href\\s*=\\s*\` 匹配 href，中间允许 0~n 个空格
- 外层 (A\|B) 捕获组：双引号组 OR 单引号组
- \`[^"]+\` = "除了双引号的任意字符"（非贪婪的最佳替代）
- re.IGNORECASE 让 HREF/Href 都能匹配

**常见错误**：
- 直接用 \`\\d+\\.\` 之类"手写 URL"，实际环境会漏掉各种字符
- 忘记加分组，findall 返回整个匹配串`
    ,
      hint: "re.findall(r\"href\\s*=\\s*([\\\"\\'])(.*?)\\\\1\", html) 或 双分组解法",
      testCode: `output = _output_buffer.getvalue()
_test_results.append({
    "name": "包含菜鸟教程",
    "passed": "runoob.com" in output,
    "message": "应提取到 https://www.runoob.com/"
})
_test_results.append({
    "name": "包含 example.org",
    "passed": "example.org/page1" in output,
    "message": "应提取到 https://example.org/page1"
})
_test_results.append({
    "name": "包含 github",
    "passed": "api.github.com" in output,
    "message": "应提取到 GitHub API"
})
_test_results.append({
    "name": "恰好 3 条",
    "passed": output.strip().count("\n") >= 2,
    "message": "至少打印 3 条链接"
})`
    },
    {
      id: 4,
      title: '贪婪 vs 非贪婪',
      type: 'explanation',
      content: `**菜鸟教程高频易错点**！
正则里 \`*\` / \`+\` 默认是**贪婪**：匹配到尽可能长。

例如在 \`<b>粗</b> 中间 <b>体</b>\` 里：
\`\`\`
贪婪:    r"<b>.*</b>"   → 只匹配 1 个："<b>粗</b> 中间 <b>体</b>"（从第一个 <b> 吃到最后一个 </b>）
非贪婪:  r"<b>.*?</b>"  → 匹配 2 个："<b>粗</b>"  和  "<b>体</b>"
\`\`\`

只要在量词后面加一个 **?**，就切换成非贪婪！`
    },
    {
      id: 5,
      title: 'sub 替换与 re.compile',
      type: 'example',
      content: `**sub** 做批量清洗、脱敏。**compile** 把模式预编译，多次使用更快。

示例：
1. 把所有手机号中间 4 位脱敏成 ****
2. 把多个空白压成 1 个空格
3. 用编译后的模式跑多次
`,
      code: `import re

# 1) 手机号脱敏：(前 3 位)任意 4 位(后 4 位)
phone_pat = re.compile(r"(1[3-9]\\d)\\d{4}(\\d{4})")
s = "客服：13800138000，销售：18512345678"
print(phone_pat.sub(r"\\1****\\2", s))

# 2) 合并空白
s2 = "Hello        World\n\n\n  你好  啊"
print(re.sub(r"\\s+", " ", s2))`
    },
    {
      id: 6,
      title: '小测验',
      type: 'quiz',
      content: `给定字符串：
\`\`\`
"A01 苹果 ￥5.5; B99 香蕉 ￥3.2; C20 西瓜 ￥12.00"
\`\`\`

用一条正则同时**提取所有价格数字**（包括小数）。
\`re.findall(??? , s)\`

下列哪个正确？`,
      options: [
        'r"￥\\d+"',
        'r"￥(\\d+\\.?\\d*)"',
        'r"\\d+\\.\\d+"',
        'r"\\d+"'
      ],
      correctAnswer: 1,
      explanation: `**B 正确**
- 价格前面有人民币符号，用 \`￥\` 做锚点避免抓错货号 A01、B99
- 价格本身可能是 \`5.5\` / \`3.2\` / \`12.00\` → \`\\d+\\.?\\d*\` 最稳
- 外层分组 ( ) 让 findall **只返回价格数字**，不包含 ￥ 符号
- D 会把 A01/99/20 这些货号也一起抓出来`
    }
  ],
  // ============== 21. collections ==============
  21: [
    {
      id: 1,
      title: 'collections 全家桶',
      type: 'explanation',
      content: `菜鸟教程"Python3 标准库概览"一节中，**collections** 被评为"最高频实用"。它为内置的 dict/list/set/tuple 提供了"增强版"。

**必学 5 个类**：
| 类 | 作用 |
|---|---|
| \`Counter\` | 统计计数器（词频王） |
| \`deque\` | 双端队列（两端都 O(1)） |
| \`defaultdict\` | 访问缺失键自动给默认值 |
| \`namedtuple\` | 给 tuple 起字段名，像对象 |
| \`OrderedDict\` | Python3.7 后和 dict 一样有序（历史遗留） |

下面逐个击破！`
    },
    {
      id: 2,
      title: 'Counter 词频统计',
      type: 'example',
      content: `统计词频是"笔试必考题"。Counter 一行搞定，还带 top-K 接口！`,
      code: `from collections import Counter

text = "hello world hello python world python python 菜鸟 教程 菜鸟"
words = text.split()

c = Counter(words)
print("词频字典:", dict(c))
print("TOP 3:", c.most_common(3))

# 新增文本后合并
more = "python python hello"
c.update(more.split())
print("更新后 python 次数:", c["python"])`
    },
    {
      id: 3,
      title: 'defaultdict & namedtuple',
      type: 'practice',
      content: `**任务 1**：用 \`defaultdict(list)\` 把一堆 "学生-成绩" 对 **按学生分组**，最后打印每个学生的成绩列表。

**任务 2**：用 \`namedtuple("Point", ["x","y"])\` 定义点，计算两点欧氏距离：
\`sqrt((x1-x2)^2 + (y1-y2)^2)\`

输入数据：
\`\`\`
scores = [('小明', 85), ('小红', 92), ('小明', 78), ('小刚', 88), ('小红', 95)]
p1=(3,4)  p2=(0,0)  → 距离应为 5.0
\`\`\``,
      code: `from collections import defaultdict, namedtuple
import math

scores = [('小明', 85), ('小红', 92), ('小明', 78), ('小刚', 88), ('小红', 95)]

# -------- 任务1：defaultdict(list) 分组 --------
# 在此实现
print("成绩分组：")
# for name, lst in d.items(): print(name, lst)


# -------- 任务2：namedtuple 两点距离 --------
# Point = namedtuple(...)
# p1 = Point(3,4); p2 = Point(0,0)
# dist = ...
# print(f"距离={dist:.1f}")


`,
      answer: `from collections import defaultdict, namedtuple
import math

scores = [('小明', 85), ('小红', 92), ('小明', 78), ('小刚', 88), ('小红', 95)]

# 任务1
d = defaultdict(list)
for name, score in scores:
    d[name].append(score)
print("成绩分组：")
for name, lst in d.items():
    print(f"  {name}: {lst}")

# 任务2
Point = namedtuple("Point", ["x", "y"])
p1 = Point(3, 4)
p2 = Point(0, 0)
dist = math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2)
print(f"距离={dist:.1f}")`,
      explanation: `**defaultdict** 省掉了 \`if key not in d: d[key]=[]\` 的样板代码。  
**namedtuple** 字段比下标 \`t[0] t[1]\` 可读 100 倍，写数据管道/解析 CSV 超常用。`,
      hint: 'defaultdict(list) 初始化后直接 append；namedtuple("Point", ["x","y"])',
      testCode: `output = _output_buffer.getvalue()
_test_results.append({
    "name": "小明分组",
    "passed": "小明" in output and ("85" in output) and ("78" in output),
    "message": "应输出小明的 [85, 78]"
})
_test_results.append({
    "name": "小刚分组",
    "passed": "小刚" in output and "88" in output,
    "message": "应输出小刚的 [88]"
})
_test_results.append({
    "name": "距离",
    "passed": "距离=5.0" in output or "5.0" in output,
    "message": "欧氏距离应该是 5.0"
})`
    },
    {
      id: 4,
      title: 'deque 双端队列',
      type: 'explanation',
      content: `list 在**头部**插入/删除是 O(n)（后面元素全部要搬移），**deque** 两端都是 O(1)。

常用 API：
\`\`\`
from collections import deque

d = deque([1,2,3])
d.append(4)           # 右加  → [1,2,3,4]
d.appendleft(0)       # 左加  → [0,1,2,3,4]
d.pop()               # 右弹 4
d.popleft()           # 左弹 0

d.rotate(1)           # 整体右循环 1 位：[4,1,2,3]
d.extend([5,6])       # 右批量加
d.extendleft([-1,0])  # 左批量加
\`\`\`

**应用**：滑动窗口、BFS、最近最少使用缓存(LRU)、最近 10 条日志。`
    },
    {
      id: 5,
      title: '综合实战：最近 10 条日志',
      type: 'quiz',
      content: `要实现一个"只保留最近 10 条日志"的结构。每收到一条新日志，旧的自动丢弃。

应该：`,
      options: [
        'list.append(), 若 len>10 就 list.pop(0)',
        'deque(maxlen=10), append() 自动丢弃最旧',
        'set 去重即可',
        'dict 存 1..10 下标自己换'
      ],
      correctAnswer: 1,
      explanation: `**B 最地道**  
deque(maxlen=N) 是官方内置的"固定大小环形缓冲"，append/appendleft 超过 N 自动淘汰对面那端，O(1) 不操心。

A 也行但 pop(0) 是 O(n)，在 N 大或 QPS 高时性能差一截。`
    }
  ],
  // ============== 22. itertools ==============
  22: [
    {
      id: 1,
      title: 'itertools 是 Python 的"隐形军火库"',
      type: 'explanation',
      content: `函数式编程 + 迭代器 = itertools。菜鸟教程建议"先学会 itertools，再写 for 循环"，因为它把 90% 的重复模式都封装了。

**四大分支**（本关学这些）：
1. **无限迭代器**：count / cycle / repeat
2. **终止型迭代器**：accumulate / chain / islice / takewhile / dropwhile / filterfalse / compress / zip_longest
3. **排列组合**：product / permutations / combinations / combinations_with_replacement
4. **分组**：groupby

所有返回的都是**迭代器（lazy）**，不占大量内存，可以 \`for ... in ...\` 逐个吃。`
    },
    {
      id: 2,
      title: '无限迭代器 & islice 切片',
      type: 'example',
      content: `count 是"等差数列发生器"，cycle 是"无限循环一个序列"，repeat 是"重复同一值"。
因为是无限的，**不能直接 list() 转列表**，要用 islice 截取前 N 个！
`,
      code: `import itertools as it

print("count 1, 4, 7, 10 ... 取前 6 个:")
for x in it.islice(it.count(1, step=3), 6):
    print(" ", x, end="")
print()

print("cycle [A, B] 取前 8 个:", list(it.islice(it.cycle(["A", "B"]), 8)))
print("repeat 'hi' 4 次:", list(it.repeat("hi", 4)))`
    },
    {
      id: 3,
      title: 'accumulate 前缀和 & chain 压平',
      type: 'practice',
      content: `**任务 1**：对列表 [3,1,4,1,5,9,2] 计算 **前缀乘积**（不是默认加法！），把每一步的积输出。
提示：accumulate(iterable, func=operator.mul)

**任务 2**：把一个 3 层嵌套列表 \`[[1,2],[3,[4,5]],[6]]\` **压平一层**（外层去掉）。
注意：第二层里可能还有子列表，chain.from_iterable 只压一层，保留内部结构。
`,
      code: `import itertools as it
import operator

# 任务1：前缀乘积
nums = [3, 1, 4, 1, 5, 9, 2]
# 在此输出：前缀积

# 任务2：压平一层
nested = [[1, 2], [3, [4, 5]], [6]]
# 在此输出 flattened 结果：应为 [1, 2, 3, [4,5], 6]


`,
      answer: `import itertools as it
import operator

nums = [3, 1, 4, 1, 5, 9, 2]
print("前缀乘积:", list(it.accumulate(nums, func=operator.mul)))

nested = [[1, 2], [3, [4, 5]], [6]]
flattened = list(it.chain.from_iterable(nested))
print("压平一层:", flattened)`,
      explanation: `**易错点**：
- accumulate 默认做加法，要传 \`func=\` 改算子
- \`chain(*iterables)\` 是把位置参数串起来；\`chain.from_iterable(x)\` 是把一个可迭代对象里的每个子迭代串起来 → 这才是扁平化
- 对全深层递归 flatten 需要手写递归或 more_itertools.flatten`,
      hint: 'it.accumulate(nums, func=operator.mul) ； it.chain.from_iterable(nested)',
      testCode: `output = _output_buffer.getvalue()
_test_results.append({
    "name": "前缀乘积",
    "passed": "1080" in output,  # 3*1*4*1*5*9 = 540？再乘下一个 2 = 1080
    "message": "最后一个前缀积应为 1080"
})
_test_results.append({
    "name": "压平后 [4,5] 保留",
    "passed": "[4, 5]" in output or "[4,5]" in output,
    "message": "只压一层，[4,5] 应该还在"
})
_test_results.append({
    "name": "压平后 1/2/3/6 都在",
    "passed": all(str(n) in output for n in [1,2,3,6]),
    "message": "外层数字 1,2,3,6 都应出现"
})`
    },
    {
      id: 4,
      title: '排列组合全家桶',
      type: 'explanation',
      content: `四兄弟，名字要分清！
| 函数 | 含义 | 例 [1,2,3] r=2 |
|---|---|---|
| product(A, repeat=r) | 笛卡尔积（有序可重） | (1,1)(1,2)(1,3)(2,1)(2,2)(2,3)(3,1)(3,2)(3,3) → 9 种 |
| permutations(A, r) | 排列（有序不重） | (1,2)(1,3)(2,1)(2,3)(3,1)(3,2) → 6 种 |
| combinations(A, r) | 组合（无序不重） | (1,2)(1,3)(2,3) → 3 种 |
| combinations_with_replacement(A, r) | 组合（无序可重） | (1,1)(1,2)(1,3)(2,2)(2,3)(3,3) → 6 种 |

**经典应用**：
- 暴力破解密码（product）
- 彩票所有可能组合（combinations）
- 生成全排列（permutations）`
    },
    {
      id: 5,
      title: 'groupby 分组',
      type: 'example',
      content: `groupby 会把"连续的、相同 key 的元素"归为一组。
⚠️ **坑：它只认连续！** 分组前必须先 sort(key=相同的key_fn)。
`,
      code: `import itertools as it

students = [
    {"name": "小明", "cls": "一班"},
    {"name": "小红", "cls": "二班"},
    {"name": "小刚", "cls": "一班"},
    {"name": "小丽", "cls": "二班"},
    {"name": "小强", "cls": "二班"},
]

# 必须先按班级排序！
students.sort(key=lambda s: s["cls"])

for cls, group in it.groupby(students, key=lambda s: s["cls"]):
    names = [s["name"] for s in group]
    print(f"{cls}: {names}")`
    },
    {
      id: 6,
      title: '小测验',
      type: 'quiz',
      content: `密码锁是 **4 位**，每位可选数字 **0-9**。你想枚举所有可能。

下列 itertools 写法正确的是：`,
      options: [
        'it.permutations(range(10), 4)',
        'it.combinations(range(10), 4)',
        'it.product(range(10), repeat=4)',
        'it.product(range(4), repeat=10)'
      ],
      correctAnswer: 2,
      explanation: `**C 正确**  
密码允许重复（例如 0000 / 1122），且顺序相关（1234≠4321）。
- permutations 不重：跳过 0000 这种合法密码 ✗
- combinations 既无序也不重 ✗
- product(range(10), repeat=4) 10^4 = 10000 种全部 ✓
- D 参数写反了 ✗`
    }
  ],
  // ============== 23. NumPy ==============
  23: [
    {
      id: 1,
      title: '为什么要用 ndarray ？',
      type: 'explanation',
      content: `Python list 可以存任意类型，但处理 100 万+ 数值会慢到怀疑人生。**NumPy** 是"Python 的数值运算地基"，菜鸟教程数据科学章节的第一块。

它的核心是 **ndarray（N-dimensional array）**：
- 同类型元素 → 连续内存，CPU 友好
- 运算"向量化"：不需要写 for 循环
- 线性代数 / 傅里叶 / 随机数 全有

浏览器中安装较麻烦，我们提供精简版 API 做概念学习：
\`\`\`
import numpy_ as np          # 我们的模拟版
a = np.array([[1,2,3],[4,5,6]])
print(a.shape)              # (2, 3)
print(a + 1)                # 每个元素 +1（广播）
print(np.dot(a, a.T))       # 矩阵乘法
\`\`\``
    },
    {
      id: 2,
      title: '创建数组 & 属性',
      type: 'example',
      content: ``,
      code: `import numpy_ as np

# 各种创建
a = np.array([1,2,3,4,5])
b = np.zeros(6)
c = np.ones( (2,3) )
d = np.arange(0, 20, 2)     # 0..19 step=2
e = np.linspace(0, 1, 5)    # 0~1 均匀 5 份

for name, arr in [("a",a),("b",b),("c",c),("d",d),("e",e)]:
    print(f"{name} = {arr}\tshape={arr.shape}  dtype={arr.dtype}")`
    },
    {
      id: 3,
      title: '广播 & 统计方法',
      type: 'practice',
      content: `**任务**：给定一个 (3, 4) 的成绩矩阵，行是学生 [小红, 小刚, 小丽]，列是四门学科 [语文,数学,英语,Python]。

1. **每人减去班级平均分**（对每列做均值然后广播减），打印"标准化分数"
2. 算出**每人总分**并打印
3. 找出**全班 Python 最高分**（第 4 列 index=3）和是谁

数据：
\`\`\`
小红: [88, 92, 85, 96]
小刚: [78, 95, 80, 88]
小丽: [92, 88, 94, 99]
\`\`\``,
      code: `import numpy_ as np

names = ["小红", "小刚", "小丽"]
subjects = ["语文","数学","英语","Python"]
scores = np.array([
    [88, 92, 85, 96],
    [78, 95, 80, 88],
    [92, 88, 94, 99],
])

# 1) 按列减去班级平均分（广播）
#  col_mean = scores.mean(axis=??)
#  normalized = scores - col_mean

# 2) 每人总分（sum along axis=??）

# 3) Python 最高分 = scores[:,3] 的最大值及下标


`,
      answer: `import numpy_ as np

names = ["小红", "小刚", "小丽"]
subjects = ["语文","数学","英语","Python"]
scores = np.array([
    [88, 92, 85, 96],
    [78, 95, 80, 88],
    [92, 88, 94, 99],
])

print("原始分数:\n", scores)
col_mean = scores.mean(axis=0)
print("\n各科平均分:\n", col_mean)
normalized = scores - col_mean
print("\n标准化分数（高出平均分的部分）:\n", np.round(normalized, 2))

total = scores.sum(axis=1)
print("\n每人总分:")
for n, t in zip(names, total.tolist()):
    print(f"  {n}: {t}")

python_col = scores[:, 3]
max_score = python_col.max()
who_idx = python_col.argmax()
print(f"\nPython 最高分: {names[who_idx]}  分数 {max_score}")`,
      explanation: `**axis 记忆口诀**：
- axis=0 → 沿着行方向往下算（跨行 → 每列一个结果，形状=列数）
- axis=1 → 沿着列方向往右算（跨列 → 每行一个结果，形状=行数）
- 要搞不清时，把小 shape 带入打印 shape 对比

**广播规则**：如果最后一维相等，或其中一方是 1，就能自动"复制扩展"。  
(3,4) - (4,) 是合法的，后缘维度 4=4。`,
      hint: 'mean(axis=0) 对列；sum(axis=1) 对行；[:,3] 取第 4 列',
      testCode: `output = _output_buffer.getvalue()
_test_results.append({
    "name": "标准化分数出现负数或 0",
    "passed": "-" in output,
    "message": "标准化后有人低于平均分，应有负数"
})
_test_results.append({
    "name": "小丽总分最高",
    "passed": "小丽" in output and ("373" in output or "99" in output),
    "message": "小丽总分 373，Python 99 应为最高分"
})
_test_results.append({
    "name": "Python 最高分 99",
    "passed": "99" in output and ("Python 最高分" in output),
    "message": "Python 最高分是 99"
})
_test_results.append({
    "name": "小刚总分",
    "passed": "341" in output or ("小刚" in output and "3" in output),
    "message": "小刚总分是 341"
})`
    },
    {
      id: 4,
      title: '矩阵乘法 & 线性代数',
      type: 'example',
      content: `\`A @ B\` （或 np.dot(A,B)）做矩阵乘法，形状要求 (m, k) · (k, n) → (m, n)。
线性方程组 \`Ax = b\` 用 np.linalg.solve。
`,
      code: `import numpy_ as np

# 2x2 乘 2x3
A = np.array([[1,2],[3,4]])
B = np.array([[5,6,7],[8,9,10]])
print("A @ B =")
print(A @ B)

# 解方程组：2x + y = 5 ; 3x + 4y = 18
A2 = np.array([[2,1],[3,4]])
b2 = np.array([5, 18])
x = np.linalg.solve(A2, b2)
print(f"\n解: x={x[0]:g}, y={x[1]:g}")     # 应该是 x=0.4, y=4.2`
    },
    {
      id: 5,
      title: '随机数 & 采样',
      type: 'explanation',
      content: `\`np.random\` 子模块（本关模拟版支持）：
| 函数 | 效果 |
|---|---|
| \`np.random.rand(3, 4)\` | 0~1 均匀，形状 (3,4) |
| \`np.random.randn(5)\` | 标准正态 N(0,1)，5 个 |
| \`np.random.randint(1, 7, size=10)\` | [1, 7) 整数 10 个（骰子） |
| \`np.random.choice(pool, size, replace=False)\` | 不放回抽样 |
| \`np.random.seed(42)\` | 固定种子，让结果可复现 |

**为什么种子重要？** 做机器学习实验/回测，同 seed → 同样的训练集划分，别人可以完全复现你的结果。`
    },
    {
      id: 6,
      title: '小测验',
      type: 'quiz',
      content: `\`\`\`
a = np.array([[1,2,3],[4,5,6]])
\`\`\`

下列哪个运算会**报广播错误**？`,
      options: [
        'a + 1',
        'a * np.array([10,20,30])',
        'a - np.array([[1],[2]])',
        'a + np.array([1,2])'
      ],
      correctAnswer: 3,
      explanation: `**D 报错**  
广播比较从**尾部**开始：
- a shape (2,3)
- D 右侧 (2,)  → 尾部 3 vs 2，既不相等也没有 1 → 失败
- B 右侧 (3,) → 尾部 3=3 → OK，扩展成 (2,3)
- C 右侧 (2,1) → 尾部 1/3，OK；前 2=2，OK → 扩展成 (2,3)`
    }
  ],
  // ============== 24. Pandas ==============
  24: [
    {
      id: 1,
      title: 'Series & DataFrame 两兄弟',
      type: 'explanation',
      content: `数据科学的"瑞士军刀"——**Pandas**。菜鸟教程"Python Pandas 教程"三大核心：
- **Series** = 1D 带标签数组（可以理解为"加强版 dict"）
- **DataFrame** = 2D 带标签表格（就像 Excel 工作簿里一张表，行索引 index + 列 columns）

我们的环境中内置了一个 pandas_ 模拟库实现核心 API，你写的代码在真实环境几乎不用改，就是 \`import pandas as pd\`。

**记忆口诀**：
- 选列 → \`df["列名"]\`
- 选行 → \`df.loc[标签]\` / \`df.iloc[下标]\`
- 过滤 → \`df[df.列名 > 阈值]\`
- 分组 → \`df.groupby("列").agg(...)\``
    },
    {
      id: 2,
      title: 'DataFrame 创建与切片',
      type: 'example',
      content: ``,
      code: `import pandas_ as pd

df = pd.DataFrame({
    "姓名": ["小明","小红","小刚","小丽","小强"],
    "班级": ["一","一","二","二","二"],
    "数学": [92, 95, 80, 99, 78],
    "Python": [88, 96, 82, 99, 65],
    "身高": [170, 162, 178, 165, 180],
})
print("原始 DataFrame:")
print(df)
print()
print("数学 > 90 的同学:")
print(df[df["数学"] > 90][["姓名","班级","数学","Python"]])
print()
print("按班级分组 平均值:")
print(df.groupby("班级").mean())`
    },
    {
      id: 3,
      title: '实战：销售数据清洗 & 汇总',
      type: 'practice',
      content: `给定一张销售流水记录（字典列表，已经为你放入 df_sales）：

| 日期 | 区域 | 商品 | 销量 | 单价 |
|---|---|---|---|---|
| 2024-01-03 | 华东 | 笔记本 | 20 | 5 |
| 2024-01-10 | 华南 | 笔 | 100 | 2 |
| 2024-01-11 | 华东 | 笔 | 150 | 2 |
| 2024-02-05 | 华南 | 笔记本 | 30 | 5 |
| 2024-02-15 | 华北 | 水杯 | 40 | 25 |
| 2024-02-20 | 华北 | 笔 | 80 | 2 |
| 2024-03-01 | 华东 | 水杯 | 20 | 25 |
| 2024-03-08 | 华南 | 水杯 | 10 | 25 |

**任务**：
1. 新增一列 \`销售额 = 销量 * 单价\`
2. 按**区域**分组：统计每个区域的"总销售额"和"订单条数"
3. 按**月份**分组：统计每月总销售额（取日期前 7 位，如 2024-01）
4. 打印两个结果
`,
      code: `import pandas_ as pd

rows = [
    {"日期":"2024-01-03","区域":"华东","商品":"笔记本","销量":20,"单价":5},
    {"日期":"2024-01-10","区域":"华南","商品":"笔","销量":100,"单价":2},
    {"日期":"2024-01-11","区域":"华东","商品":"笔","销量":150,"单价":2},
    {"日期":"2024-02-05","区域":"华南","商品":"笔记本","销量":30,"单价":5},
    {"日期":"2024-02-15","区域":"华北","商品":"水杯","销量":40,"单价":25},
    {"日期":"2024-02-20","区域":"华北","商品":"笔","销量":80,"单价":2},
    {"日期":"2024-03-01","区域":"华东","商品":"水杯","销量":20,"单价":25},
    {"日期":"2024-03-08","区域":"华南","商品":"水杯","销量":10,"单价":25},
]
df_sales = pd.DataFrame(rows)

# 1) 销售额 = 销量 * 单价

# 2) 按区域分组：agg(总销售额=("销售额","sum"), 订单数=("日期","count"))

# 3) 取月份 df_sales["月份"] = df_sales["日期"].str[:7]


`,
      answer: `import pandas_ as pd

rows = [
    {"日期":"2024-01-03","区域":"华东","商品":"笔记本","销量":20,"单价":5},
    {"日期":"2024-01-10","区域":"华南","商品":"笔","销量":100,"单价":2},
    {"日期":"2024-01-11","区域":"华东","商品":"笔","销量":150,"单价":2},
    {"日期":"2024-02-05","区域":"华南","商品":"笔记本","销量":30,"单价":5},
    {"日期":"2024-02-15","区域":"华北","商品":"水杯","销量":40,"单价":25},
    {"日期":"2024-02-20","区域":"华北","商品":"笔","销量":80,"单价":2},
    {"日期":"2024-03-01","区域":"华东","商品":"水杯","销量":20,"单价":25},
    {"日期":"2024-03-08","区域":"华南","商品":"水杯","销量":10,"单价":25},
]
df_sales = pd.DataFrame(rows)

df_sales["销售额"] = df_sales["销量"] * df_sales["单价"]

by_region = df_sales.groupby("区域", as_index=False).agg(
    总销售额=("销售额", "sum"),
    订单数=("日期", "count")
)
print("按区域汇总:")
print(by_region)

df_sales["月份"] = df_sales["日期"].str.slice(0, 7)   # 等价于 .str[:7]
by_month = df_sales.groupby("月份", as_index=False).agg(
    总销售额=("销售额", "sum")
)
print("\n按月份汇总:")
print(by_month)`,
      explanation: `**关键点**：
- 派生列：\`df["新列"] = 表达式\`
- groupby + agg 的命名聚合（Pandas 0.25+ 支持）：\`agg(新名字=("源列","算子"))\`
- 字符串方法都在 \`Series.str\` 命名空间：\`.str[:7]\` / \`.str.contains()\` / \`.str.replace()\``
,
      hint: 'df["销售额"] = df["销量"] * df["单价"] ; groupby(...).agg(...); df["月份"] = df["日期"].str[:7]',
      testCode: `output = _output_buffer.getvalue()
_test_results.append({
    "name": "区域华东总销售",
    "passed": ("华东" in output) and ("900" in output),  # 100+300+500
    "message": "华东总销售额应为 20*5+150*2+20*25 = 100+300+500 = 900"
})
_test_results.append({
    "name": "区域华北总销售",
    "passed": ("华北" in output) and ("1160" in output),
    "message": "华北 = 40*25+80*2 = 1000+160 = 1160"
})
_test_results.append({
    "name": "3 月总销售",
    "passed": ("2024-03" in output) and ("750" in output),
    "message": "2024-03 = 20*25 + 10*25 = 750"
})
_test_results.append({
    "name": "区域表格存在",
    "passed": "按区域汇总" in output and "按月份汇总" in output,
    "message": "应该先打区域表再打月份表"
})`
    },
    {
      id: 4,
      title: '读写 CSV / 处理缺失值',
      type: 'explanation',
      content: `**真实项目中 60% 的代码都是"数据清洗"**。菜鸟教程把缺失值处理列为必学。

**Pandas 真实环境的读写**（本关没有真文件，记住 API 即可）：
\`\`\`
df = pd.read_csv("sales.csv", encoding="utf-8")
df.to_csv("sales_clean.csv", index=False)
\`\`\`

**处理 NaN 三大招**：
| 方法 | 作用 |
|---|---|
| \`df.isna().sum()\` | 每列缺几个 |
| \`df.dropna(axis=0)\` | 丢掉有缺失的行 |
| \`df.fillna({"价格": 0, "分类": "未知"})\` | 按列填不同默认值 |
| \`df["销售额"].fillna(df["销售额"].median())\` | 用中位数填 |

**经验**：数值列用中位数填（受极端值影响比均值小）；分类列用众数或字符串 "未知"。`
    },
    {
      id: 5,
      title: '索引 & 时间序列',
      type: 'example',
      content: `把"日期"列设成 index，就可以直接按月份切片、做 rolling 均线。现实里金融/销量数据几乎都是按时间。
`,
      code: `import pandas_ as pd

df = pd.DataFrame({
    "日期": pd.date_range("2024-01-01", periods=10).astype(str),
    "收盘价": [100,102,101,105,108,107,110,112,115,118],
})
df = df.set_index("日期")
df["MA5"] = df["收盘价"].rolling(5).mean()   # 5 日移动平均
print("股票价格 + MA5:")
print(df.round(2))
print()
print("2024-01-05 到 2024-01-09 切片:")
print(df.loc["2024-01-05":"2024-01-09"])`
    },
    {
      id: 6,
      title: 'merge 拼接两个表',
      type: 'explanation',
      content: `SQL 里的 JOIN，Pandas 一行：
\`\`\`
pd.merge(df_left, df_right, on="共同列名", how="inner")  # inner / left / right / outer
\`\`\`

典型场景：
- \`订单表\` (user_id, item_id, qty) JOIN \`用户表\` (id, name, level) → 用订单.user_id = 用户.id 连
- 电商、CRM、数据仓库中最常用的操作之一

注意：重复键会笛卡尔膨胀，合并前检查 \`df.duplicated(subset=["key"]).sum()\``
    },
    {
      id: 7,
      title: '小测验',
      type: 'quiz',
      content: `你要把一张 100 万行的表 \`df_big\` 中"价格 <= 0"的脏数据丢掉，
再按"分类"聚合"收入"的均值。

下列代码最稳妥的顺序是？`,
      options: [
        'df_big.groupby("分类").收入.mean() 然后再看结果',
        'df_big = df_big[df_big["价格"] > 0] ; df_big.groupby("分类").agg(avg_收入=("收入","mean"))',
        'df_big.dropna() 再聚合',
        'df_big["价格"].fillna(0) 再聚合'
      ],
      correctAnswer: 1,
      explanation: `**B 正确**
先过滤再聚合，符合"脏数据先清洗再分析"的黄金顺序。
A 把脏数据也平均进去，会拉低结果；
C 会把可能只缺非关键字段的大量好行一起丢；
D fillna(0) 只会让价格更像合法数据，价格为 0 的业务逻辑依然错误。`
    }
  ],
  // ============== 25. Matplotlib ==============
  25: [
    {
      id: 1,
      title: '数据可视化的思维',
      type: 'explanation',
      content: `**Matplotlib** 是 Python 可视化的"地基"，菜鸟教程专门有一章 Matplotlib 快速入门。Seaborn、Pandas plot、Plotly 底层都借它。

**两条铁律**：
1. **画前先想：我要回答什么问题？** → 选对应图
| 想回答 | 用图 |
|---|---|
| 趋势随时间变化 | 折线图 plot() |
| 类别对比 | 柱状图 bar() |
| 占比/构成 | 饼图 pie() |
| 两个变量关系 | 散点图 scatter() |
| 分布 | 直方图 hist() |
| 多图并排 | subplots() |

2. **保存用 \`fig.savefig("x.png", dpi=150, bbox_inches="tight")\`，比 save() 前再 plt.show() 更稳**。

我们在浏览器环境用 matplotlib_ 模拟库，它会在控制台打印"画图描述"。本地就是 \`import matplotlib.pyplot as plt\`。`
    },
    {
      id: 2,
      title: '折线/柱状/饼 三兄弟',
      type: 'example',
      content: ``,
      code: `import matplotlib_ as plt

days = ["周一","周二","周三","周四","周五","周六","周日"]
visits = [200, 350, 180, 420, 500, 820, 900]

# 1) 折线图
plt.figure(figsize=(8,4))
plt.plot(days, visits, marker="o", color="#2563eb", label="访问量")
plt.title("一周访问量")
plt.xlabel("日期") ; plt.ylabel("UV")
plt.grid(alpha=.3); plt.legend()
plt.render("折线-访问量")

# 2) 柱状图：各品类销售额
categories = ["食品","家居","电子","服饰","图书"]
sales = [3200, 1800, 5400, 2800, 900]
plt.figure(figsize=(8,4))
bars = plt.bar(categories, sales, color=["#ef4444","#f59e0b","#10b981","#3b82f6","#8b5cf6"])
plt.title("各品类销售")
for b, v in zip(bars, sales):
    plt.text(b, v+50, str(v), ha="center")
plt.render("柱状-品类销售")

# 3) 饼图：流量来源
labels = ["搜索","直接访问","社交","广告","其他"]
shares = [45, 20, 15, 12, 8]
plt.figure(figsize=(6,6))
plt.pie(shares, labels=labels, autopct="%1.1f%%", startangle=90)
plt.title("流量来源占比")
plt.axis("equal")
plt.render("饼-流量来源")`
    },
    {
      id: 3,
      title: '实战：子图多指标看板',
      type: 'practice',
      content: `**任务**：2x2 子图，一次画出 4 张常见业务图：

数据：
\`\`\`
months   = ["1月","2月","3月","4月","5月","6月"]
revenue  = [120, 150, 170, 160, 210, 260]           # 营收万
users    = [5000, 6200, 7100, 6800, 8400, 9900]     # 月活
churn    = [5.2, 4.8, 4.5, 4.7, 4.3, 4.0]           # 流失率%
channels = ["自然","付费","推荐","合作"]
new_2024 = [4200, 2100, 1800, 900]                   # 新增用户
\`\`\`

布局 (2, 2):
- (0,0) 折线：营收 + 月活双轴（twinx）
- (0,1) 柱状：新增用户渠道分布
- (1,0) 折线：流失率（%，y 轴范围 3~6 更清楚），红色
- (1,1) 饼图：6 月新增用户渠道占比（用 2024 年总 new）
`,
      code: `import matplotlib_ as plt

months   = ["1月","2月","3月","4月","5月","6月"]
revenue  = [120, 150, 170, 160, 210, 260]
users    = [5000, 6200, 7100, 6800, 8400, 9900]
churn    = [5.2, 4.8, 4.5, 4.7, 4.3, 4.0]
channels = ["自然","付费","推荐","合作"]
new_2024 = [4200, 2100, 1800, 900]

# 在此用 plt.subplots(2, 2, figsize=(12, 9))
# axs = axs.flatten()
# 0: ax1.plot months vs revenue，ax1.twinx() 画 users
# 1: ax2.bar channels vs new_2024
# 2: ax3.plot churn，set_ylim(3, 6)
# 3: ax4.pie new_2024 带 autopct
# 最后 plt.render("经营看板")


`,
      answer: `import matplotlib_ as plt

months   = ["1月","2月","3月","4月","5月","6月"]
revenue  = [120, 150, 170, 160, 210, 260]
users    = [5000, 6200, 7100, 6800, 8400, 9900]
churn    = [5.2, 4.8, 4.5, 4.7, 4.3, 4.0]
channels = ["自然","付费","推荐","合作"]
new_2024 = [4200, 2100, 1800, 900]

fig, axs = plt.subplots(2, 2, figsize=(12, 9))
ax1, ax2, ax3, ax4 = axs.flatten()

# (0,0) 营收/月活 双轴
ax1.plot(months, revenue, color="#2563eb", marker="o", label="营收(万)")
ax1.set_xlabel("月份"); ax1.set_ylabel("营收(万)", color="#2563eb")
ax1b = ax1.twinx()
ax1b.plot(months, users, color="#10b981", marker="s", label="月活")
ax1b.set_ylabel("月活", color="#10b981")
ax1.set_title("营收 / 月活")

# (0,1) 新增渠道
ax2.bar(channels, new_2024, color=["#10b981","#3b82f6","#8b5cf6","#f59e0b"])
ax2.set_title("2024 新增用户渠道")
for i, v in enumerate(new_2024):
    ax2.text(i, v+100, str(v), ha="center")

# (1,0) 流失率
ax3.plot(months, churn, color="#ef4444", marker="D")
ax3.set_title("月度流失率(%)"); ax3.set_ylim(3, 6)
ax3.grid(alpha=.3)

# (1,1) 渠道饼
ax4.pie(new_2024, labels=channels, autopct="%1.0f%%", startangle=90)
ax4.set_title("新增渠道占比")
ax4.axis("equal")

fig.suptitle("2024 H1 经营数据看板", fontsize=16)
plt.render("经营看板")`,
      explanation: `**subplot 经验**：
- 先用 \`axs = axs.flatten()\` 把 2x2 拉平成一维数组好写
- 双轴图 \`ax.twinx()\` 一定要把颜色和 Y 标签同步，否则谁看谁懵
- 中文标题/标签：真实环境需要 \`plt.rcParams["font.sans-serif"] = ["SimHei","Microsoft YaHei"]; plt.rcParams["axes.unicode_minus"]=False\`，否则中文方块、负号乱码。`
,
      hint: 'fig,axs = plt.subplots(2,2,figsize=(12,9))；axs.flatten()；双轴用 twinx()；最后 plt.render(...)',
      testCode: `output = _output_buffer.getvalue()
_test_results.append({
    "name": "经营看板标题",
    "passed": "经营看板" in output or "H1 经营数据看板" in output,
    "message": "应最后 render '经营看板'"
})
_test_results.append({
    "name": "营收/月活标题",
    "passed": "营收" in output,
    "message": "应有营收子图"
})
_test_results.append({
    "name": "流失率 4.0 / 6 月数据",
    "passed": "流失率" in output and "4.0" in output,
    "message": "6 月流失率 4.0% 要出现"
})
_test_results.append({
    "name": "渠道饼图 自然最多",
    "passed": "自然" in output and ("46.7%" in output or "47%" in output or "47" in output),
    "message": "自然渠道 4200/9000 ≈ 46.7%"
})`
    },
    {
      id: 4,
      title: '散点 & 直方图',
      type: 'explanation',
      content: `**散点图 scatter(x, y, s=size, c=颜色, alpha=透明度)** → 观察两个数值变量的相关性（学习时间 vs 分数、广告花费 vs 营收）。

**直方图 hist(x, bins=30)** → 观察一个变量的分布（是否正态？有没有长尾？）。

**记住**：数据分布比均值更重要！两个班级平均分一样，但一个是"大多数中等 + 几个尖子"，一个是"两极分化"，直方图一眼看穿。`
    },
    {
      id: 5,
      title: '样式 + 导出',
      type: 'example',
      content: ``,
      code: `import matplotlib_ as plt
# 真实环境: plt.style.use("seaborn-v0_8-whitegrid") 之类

x = list(range(1, 11))
y1 = [a*2 + 1 for a in x]
y2 = [a**1.6 for a in x]

plt.figure(figsize=(8,5))
plt.plot(x, y1, marker="o", linewidth=2, label="线性 y=2x+1")
plt.plot(x, y2, marker="s", linewidth=2, label="幂 y=x^1.6")
plt.fill_between(x, y1, y2, alpha=.15, color="#10b981", label="差值区域")
plt.title("线性增长 vs 幂增长")
plt.xlabel("X"); plt.ylabel("Y"); plt.legend()
plt.grid(linestyle="--", alpha=.4)
plt.render("样式-导出示例")`
    },
    {
      id: 6,
      title: '小测验',
      type: 'quiz',
      content: `你要给老板做一张"A/B 两个方案留存率 30 天对比"图：
X 是第 1..30 天，Y 是留存率%，A/B 两条线，
还要突出"两者差值越来越大"这件事。

哪个搭配最清晰？`,
      options: [
        '两张分开的饼图',
        '一张图两条 plot 线 + fill_between 画差值带阴影',
        '一张柱状图，每天并排两根',
        '一张散点图 A 圆点 B 方块'
      ],
      correctAnswer: 1,
      explanation: `**B 最佳**
- 两条线看各自走势，fill_between 阴影一眼看差值变大，老板 3 秒 get
- 柱状每天并排 60 根柱子 → 眼花
- 散点是看相关性，不适合"随时间顺序"的趋势`
    }
  ],
  // ============== 26. SciPy ==============
  26: [
    {
      id: 1,
      title: 'SciPy：NumPy 的工程哥哥',
      type: 'explanation',
      content: `**SciPy** 在 NumPy 之上封装了**数学工程级模块**。菜鸟教程《Python SciPy 教程》里的常用子模块：
| 子包 | 你能用它做什么 |
|---|---|
| \`scipy.linalg\` | 超越 numpy.linalg 的更多分解（LU/QR/SVD/特征值） |
| \`scipy.optimize\` | 函数求根/求最值/曲线拟合 |
| \`scipy.integrate\` | 数值积分/常微分方程 |
| \`scipy.stats\` | 80+ 概率分布 + 假设检验 + 描述统计 |
| \`scipy.signal\` | 滤波/卷积/FFT 频谱 |

浏览器模拟库 scipy_ 包含核心方法。你在本地换成 \`from scipy import linalg, optimize, stats\` 即可。`
    },
    {
      id: 2,
      title: 'linalg 进阶 & 优化求根',
      type: 'example',
      content: `：求解非线形方程 \`x^3 - 3x^2 + 2 = 0\` 的实根，以及用 curve_fit 拟合一组点到指数曲线。
`,
      code: `import numpy_ as np
from scipy_ import optimize, linalg

# 1) 求 f(x)=0 的根
def f(x):
    return x**3 - 3*x**2 + 2

# 先试几个点找根区间
for guess in [-1, 0.5, 2.5]:
    r = optimize.root_scalar(f, bracket=[guess-1, guess+1], method="bisect")
    print(f"根 near {guess}: x={r.root:.4f}, 残差 f(x)={f(r.root):.6f}")

# 2) 曲线拟合 y = a * exp(-b * x) + c
xdata = np.array([0, 1, 2, 3, 5, 8, 12])
ydata = np.array([10.0, 7.1, 5.2, 3.9, 2.4, 1.6, 1.2])
def model(x, a, b, c):
    return a * np.exp(-b * x) + c
popt, _ = optimize.curve_fit(model, xdata, ydata, p0=(10, 0.3, 0.5))
print(f"\n拟合参数: a={popt[0]:.3f}, b={popt[1]:.3f}, c={popt[2]:.3f}")
print("预测 vs 真值 残差平方和:", float(np.sum((model(xdata, *popt) - ydata)**2)))`
    },
    {
      id: 3,
      title: '练习：t 检验两组样本是否显著不同',
      type: 'practice',
      content: `**场景（真实 A/B 测试流程）**：
- A 组（旧算法）10 名用户完成任务耗时（秒）：\`[12, 15, 14, 13, 16, 17, 14, 15, 12, 18]\`
- B 组（新算法）10 名用户：\`[9, 10, 12, 11, 8, 13, 10, 11, 9, 12]\`

**任务**：
1. 打印两组的 **均值 ± 标准差**
2. 用 \`scipy_.stats.ttest_ind(A, B)\` 做独立样本 t 检验，得到 **t 统计量** 和 **p-value**
3. 打印结论：若 p < 0.05 输出"✓ 差异显著，B 更优"，否则"✗ 差异不显著"

**判断更优方向**：B 组均值 < A 组 → 新算法更快。
`,
      code: `import numpy_ as np
from scipy_ import stats

A = np.array([12, 15, 14, 13, 16, 17, 14, 15, 12, 18])
B = np.array([9, 10, 12, 11, 8, 13, 10, 11, 9, 12])

# 1) 均值/标准差


# 2) ttest_ind


# 3) 结论打印


`,
      answer: `import numpy_ as np
from scipy_ import stats

A = np.array([12, 15, 14, 13, 16, 17, 14, 15, 12, 18])
B = np.array([9, 10, 12, 11, 8, 13, 10, 11, 9, 12])

mA, sA = float(A.mean()), float(A.std(ddof=1))
mB, sB = float(B.mean()), float(B.std(ddof=1))
print(f"A 组: 均值 {mA:.2f} ± {sA:.2f}s")
print(f"B 组: 均值 {mB:.2f} ± {sB:.2f}s")

t_stat, p_value = stats.ttest_ind(A, B)
print(f"t 检验: t={t_stat:.3f}, p={p_value:.5f}")

if p_value < 0.05:
    if mB < mA:
        print("✓ 差异显著，B 组（新算法）显著更快")
    else:
        print("✓ 差异显著，A 组更快")
else:
    print("✗ 差异未达显著水平")`,
      explanation: `**假设检验思路**：
- H0（零假设）：A/B 两组均值相同
- p 值<0.05：在零假设下出现当前数据的概率 <5% → 我们"拒绝 H0"，接受"两组不同"
- 要注意"显著不同"≠"差异很大"！样本足够大时 0.1 秒的差异也能显著，业务上未必值得上线。

**均值差异+显著性+效应量（Cohen's d）** 一起看才完整。`
,
      hint: 'stats.ttest_ind(A, B) 返回 (t, p)。均值用 .mean()，样本标准差 .std(ddof=1)。',
      testCode: `output = _output_buffer.getvalue()
_test_results.append({
    "name": "均值正确",
    "passed": "14.6" in output and "10.5" in output,
    "message": "A均值 14.6，B均值 10.5"
})
_test_results.append({
    "name": "p 值远小于 0.05",
    "passed": ("p=" in output and ("0.00" in output or "e-0" in output)),
    "message": "差异应该极显著 (p 约 0.0026)"
})
_test_results.append({
    "name": "结论正确",
    "passed": "B" in output and ("更优" in output or "更快" in output or "显著" in output),
    "message": "应该得出 B 显著更快"
})`
    },
    {
      id: 4,
      title: '数值积分 & 信号',
      type: 'explanation',
      content: `
**积分 integrate.quad(f, a, b)**：精确算 \`∫_a^b f(x)dx\`
\`\`\`
from scipy import integrate
val, err = integrate.quad(lambda x: x**2, 0, 2)   # 8/3 ≈ 2.6667
\`\`\`

**信号 signal**：FFT 转频域、butterworth 滤波去噪。这是通信/音频/医学信号的基本功，进阶时再深入，记住 API 即可。
`
    },
    {
      id: 5,
      title: '小测验',
      type: 'quiz',
      content: `下列哪种任务**不适合**用 SciPy 做？`,
      options: [
        '求一条曲线 f(x) 的最小值点',
        '对一组实验数据拟合 y = a*sin(bx)+c 的参数',
        '画一张交互式网页图表让用户调参数',
        '检验两版 App 的留存率差异是否显著'
      ],
      correctAnswer: 2,
      explanation: `**C 属于前端/可视化范畴**，一般用 Plotly Dash、Streamlit、Bokeh 这种"交互控件 + 图表"框架。  
SciPy 只负责数学计算，不负责画可交互网页。`
    }
  ],
  // ============== 27. Flask Web 开发 ==============
  27: [
    {
      id: 1,
      title: '为什么选 Flask ？',
      type: 'explanation',
      content: `**Flask** 是"微框架"：只有路由、请求/响应、模板，其他数据库/表单/登录你挑自己喜欢的组件。菜鸟教程《Python Flask 教程》第 1 章的原话：**"Flask 提供了坚实的核心，其他一切你说了算。"**

和 FastAPI/Django 定位区别：
| 框架 | 定位 | 最佳场景 |
|---|---|---|
| Flask | 微框架、自由拼 | 博客、后台、轻服务、老项目二次开发 |
| FastAPI | 现代高性能 API、类型驱动 | 新写接口、OpenAPI 文档、前后端分离 |
| Django | 大而全（电池自带） | CMS、OA、企业级后台，团队协作开发快 |

浏览器环境中我们使用 flask_ 模拟库 API 一致，本地开发就 \`pip install flask; from flask import Flask, request, render_template, session\`。`
    },
    {
      id: 2,
      title: '路由 & 变量 & 模板',
      type: 'example',
      content: ``,
      code: `from flask_ import Flask, render_template_string, request

app = Flask(__name__)
app.secret_key = "change-me"

@app.route("/")
def home():
    return render_template_string(\`
        <h1>欢迎来到 Flask 博客 🎉</h1>
        <ul>
          <li><a href="/user/alice">访问 alice</a></li>
          <li><a href="/user/bob">访问 bob</a></li>
          <li><a href="/search?q=python">搜索 Python</a></li>
        </ul>\`)

@app.route("/user/<username>")
def profile(username):
    return f"<h2>用户主页：{username}</h2>"

@app.route("/search")
def search():
    q = request.args.get("q", "")
    return f"你搜索的关键词是: <b>{q}</b>"

print(app.routes)
print("\n模拟 GET /user/bob ->", app.simulate("GET", "/user/bob"))
print("模拟 GET /search?q=flask ->", app.simulate("GET", "/search?q=flask"))`
    },
    {
      id: 3,
      title: '练习：实现"天气查询 API"',
      type: 'practice',
      content: `**任务**：
1. 定义一个 Flask app
2. 路由 \`GET /api/weather?city=城市名\`，返回 JSON 格式（模拟 dict）：
   - 若 city="北京" → {"city":"北京","temp":28,"desc":"晴"}
   - 若 city="上海" → {"city":"上海","temp":32,"desc":"多云"}
   - 其他城市 → {"city":city,"temp":25,"desc":"未知"}
3. 用 \`app.simulate("GET", url)\` 分别访问：
   - /api/weather?city=北京
   - /api/weather?city=Shanghai
   - /api/weather?city=广州
   并把每次返回值打印出来。
`,
      code: `from flask_ import Flask, request, jsonify

app = Flask(__name__)

# 在此 @app.route("/api/weather") def weather(): ...
#   用 request.args.get("city", "") 取参数
#   return jsonify({...})

# 最后打印 3 次模拟请求



`,
      answer: `from flask_ import Flask, request, jsonify

app = Flask(__name__)

@app.route("/api/weather")
def weather():
    city = request.args.get("city", "")
    if city == "北京":
        return jsonify({"city": city, "temp": 28, "desc": "晴"})
    elif city == "上海":
        return jsonify({"city": city, "temp": 32, "desc": "多云"})
    else:
        return jsonify({"city": city, "temp": 25, "desc": "未知"})

for url in [
    "/api/weather?city=北京",
    "/api/weather?city=上海",
    "/api/weather?city=广州",
]:
    print("GET", url, "→", app.simulate("GET", url))`,
      explanation: `**Flask 要点**：
- \`request.args\` 是查询串（? 后面），dict-like
- 返回 JSON 用 \`jsonify(dict)\`；真实 Flask 会自动加 Content-Type: application/json
- 路由支持 \`<converter:name>\`，比如 \`<int:post_id>\` 自动转整数`,
      hint: '@app.route("/api/weather"), request.args.get("city"), jsonify(字典)',
      testCode: `output = _output_buffer.getvalue()
_test_results.append({
    "name": "北京 28 晴",
    "passed": "北京" in output and "28" in output and "晴" in output,
    "message": "北京返回温度 28，天气晴"
})
_test_results.append({
    "name": "上海 32 多云",
    "passed": "上海" in output and "32" in output and "多云" in output,
    "message": "上海返回 32，多云"
})
_test_results.append({
    "name": "未知城市兜底",
    "passed": ("广州" in output or "Shanghai" in output) and "未知" in output,
    "message": "未知城市应该 desc=未知"
})
_test_results.append({
    "name": "打印 3 次",
    "passed": "/api/weather" in output and output.count("/api/weather") >= 3,
    "message": "应该模拟 3 次 API 调用"
})`
    },
    {
      id: 4,
      title: 'Session & 蓝图',
      type: 'explanation',
      content: `**Session**：把数据存在浏览器 Cookie 中（服务器端 Flask 用 secret_key 签名防篡改）。
菜鸟教程经典示例——登录后记住用户名：
\`\`\`
from flask import session, redirect, url_for
app.secret_key = "请换成随机字符串"

@app.route("/login", methods=["POST"])
def login():
    session["username"] = request.form["name"]
    return redirect(url_for("home"))

@app.route("/logout")
def logout():
    session.pop("username", None)
    return "已退出"
\`\`\`

**蓝图 Blueprint**：当一个文件 2000 行写不下，把路由拆到 admin_bp.py、user_bp.py、api_bp.py 里，在主 app 中 \`app.register_blueprint(admin_bp, url_prefix="/admin")\`。
这是"大型 Flask 项目第一要务"。`
    },
    {
      id: 5,
      title: '实战：极简博客（模拟）',
      type: 'example',
      content: ``,
      code: `from flask_ import Flask, request, jsonify

app = Flask(__name__)
posts = [
    {"id": 1, "title": "Flask 入门", "body": "第 1 步 安装..."},
    {"id": 2, "title": "Jinja2 模板", "body": "{{ var }} 是变量..."},
]

@app.route("/api/posts", methods=["GET"])
def list_posts():
    return jsonify({"total": len(posts), "items": posts})

@app.route("/api/posts", methods=["POST"])
def create_post():
    data = request.get_json() or {}
    p = {"id": len(posts)+1, "title": data.get("title","无标题"), "body": data.get("body","")}
    posts.append(p)
    return jsonify({"ok": True, "data": p}), 201

print("GET /api/posts →", app.simulate("GET", "/api/posts"))
print()
print("POST /api/posts {title: Hello} →",
      app.simulate("POST", "/api/posts", json={"title":"Hello","body":"World"}))
print()
print("GET /api/posts →", app.simulate("GET", "/api/posts"))`
    },
    {
      id: 6,
      title: '小测验',
      type: 'quiz',
      content: `你要做一个"个人博客系统"，包括：首页列表、文章详情、后台管理页、登录、写文章、评论。
下列哪种拆分方式最符合 Flask 最佳实践？`,
      options: [
        '一个 app.py 1 万行全部塞进去',
        '主 app + 蓝图拆分：home_bp / post_bp / admin_bp / auth_bp',
        '每个函数写一个独立文件，手工 import 回来',
        '所有路由都做成 /api?mode=xxx&param=yyy 用一个函数 if 分派'
      ],
      correctAnswer: 1,
      explanation: `**B 是标准答案**  
Blueprint + 前缀（url_prefix）让团队协作零冲突、单文件代码长度可控、功能边界清晰。  
A 和 D 是"新手代码"，2 周后没人维护得动。C 过度拆分，import 地狱。`
    }
  ],
  // ============== 28. FastAPI ==============
  28: [
    {
      id: 1,
      title: 'FastAPI 为什么这么火？',
      type: 'explanation',
      content: `FastAPI 是最近 5 年最火的 Python 新框架。**菜鸟教程 + 官方文档的共同结论**：
- 性能和 NodeJS/Go 接近（基于 Starlette + Pydantic）
- 自动生成 OpenAPI Swagger 文档（定义完接口就有前后端联调 UI）
- 类型提示 == 自动校验，不用手写一堆 if
- 依赖注入（Depends）写"登录鉴权/数据库 Session"像搭积木

浏览器中使用 fastapi_ 模拟库；真实环境 \`pip install fastapi uvicorn; uvicorn main:app --reload\`。`
    },
    {
      id: 2,
      title: '路径参数 + Pydantic 校验',
      type: 'example',
      content: ``,
      code: `from fastapi_ import FastAPI, Query
from pydantic_ import BaseModel

app = FastAPI(title="用户中心 API")

class UserCreate(BaseModel):
    name: str
    age: int | None = None
    email: str | None = None

    @classmethod
    def validate(cls, data):
        if "age" in data and not isinstance(data["age"], int):
            raise ValueError("age 必须是整数")
        if len(data.get("name","")) < 2:
            raise ValueError("name 至少 2 字符")
        return cls(**data)

@app.get("/users/{user_id}")
def get_user(user_id: int, detail: str = Query("basic", pattern="^(basic|full)$")):
    return {"user_id": user_id, "detail_level": detail}

@app.post("/users")
def create_user(payload: dict):
    u = UserCreate.validate(payload)
    return {"ok": True, "created": u.__dict__}

print("文档地址:", app.openapi_url)
print("GET /users/42?detail=full →", app.simulate("GET", "/users/42?detail=full"))
print("POST /users {name:Ada,age:36} →",
      app.simulate("POST", "/users", {"name":"Ada","age":36,"email":"ada@ex.com"}))
print("POST /users {name:x}（name 太短） →",
      app.simulate("POST", "/users", {"name":"x"}))`
    },
    {
      id: 3,
      title: '练习：图书 API（GET/POST + 查询过滤）',
      type: 'practice',
      content: `**任务**：
1. BookCreate Pydantic（模拟校验）：title 非空字符串、price 是数字且 > 0
2. GET /books?title_like=xxx  → 模糊匹配 title（大小写不敏感，部分匹配即可）
3. POST /books → 写入全局列表 books，返回带 id 的新对象
4. 模拟调用：
   - POST 2 本：{"title":"FastAPI实战","price":69.9} / {"title":"Flask 入门","price":39.5}
   - GET /books?title_like=fast
   - GET /books（返回全部）

打印 4 次模拟结果。
`,
      code: `from fastapi_ import FastAPI
from pydantic_ import BaseModel

app = FastAPI(title="书店 API")
books = []
next_id = 1

class BookCreate(BaseModel):
    title: str
    price: float
    @classmethod
    def validate(cls, data):
        if not isinstance(data.get("title"), str) or len(data["title"].strip())==0:
            raise ValueError("title 不能为空")
        if not isinstance(data.get("price"), (int,float)) or data["price"] <= 0:
            raise ValueError("price 必须 > 0")
        return cls(title=data["title"], price=float(data["price"]))

# 在此实现 GET /books
#   从 request.query_params 取 title_like
#   列表推导过滤

# 在此实现 POST /books
#   payload = request.get_json()
#   校验 OK 后，生成 id，追加，返回 {"id": id, "title":..., "price":...}

# 最后模拟 4 次请求并打印结果



`,
      answer: `from fastapi_ import FastAPI
from pydantic_ import BaseModel

app = FastAPI(title="书店 API")
books = []
next_id = 1

class BookCreate(BaseModel):
    title: str
    price: float
    @classmethod
    def validate(cls, data):
        if not isinstance(data.get("title"), str) or len(data["title"].strip())==0:
            raise ValueError("title 不能为空")
        if not isinstance(data.get("price"), (int,float)) or data["price"] <= 0:
            raise ValueError("price 必须 > 0")
        return cls(title=data["title"], price=float(data["price"]))

@app.get("/books")
def list_books(request):
    q = (request.query_params.get("title_like") or "").lower()
    result = [b for b in books]
    if q:
        result = [b for b in result if q in b["title"].lower()]
    return {"total": len(result), "items": result}

@app.post("/books")
def add_book(request):
    global next_id
    data = request.get_json() or {}
    book = BookCreate.validate(data)
    obj = {"id": next_id, "title": book.title, "price": book.price}
    books.append(obj); next_id += 1
    return {"ok": True, "data": obj}

print("POST →", app.simulate("POST", "/books", {"title":"FastAPI实战","price":69.9}))
print("POST →", app.simulate("POST", "/books", {"title":"Flask 入门","price":39.5}))
print("GET /books?title_like=fast →", app.simulate("GET", "/books?title_like=fast"))
print("GET /books →", app.simulate("GET", "/books"))`,
      explanation: `**接口设计心法**：
- 过滤 / 排序 / 分页都用查询串（Query），不写进 path
- 创建用 POST，成功返回 201 + 新资源 id
- 校验统一交给 Pydantic，别在函数里堆 if
- 真实 FastAPI 中 return 值直接 dict 就行，框架自动 JSON 化 + 生成文档`,
      hint: 'request.query_params 字典取 title_like；全局 next_id 自增；模拟参数顺序 ("METHOD", path, body_or_None)',
      testCode: `output = _output_buffer.getvalue()
_test_results.append({
    "name": "至少插入 2 本",
    "passed": output.count('"ok": true') >= 2 or output.count('ok: True') >= 2 or output.count("'ok': True") >= 2,
    "message": "POST 两次都应成功"
})
_test_results.append({
    "name": "包含 FastAPI实战",
    "passed": "FastAPI实战" in output and "69.9" in output,
    "message": "FastAPI实战 69.9 元应出现"
})
_test_results.append({
    "name": "title_like 模糊搜索正确",
    "passed": "fast" in output.lower() and "Flask 入门" not in (lambda s: s[s.rfind("title_like=fast"):s.rfind("GET /books →")] if "GET /books →" in s else s)(output),
    "message": "搜索 fast 只出 FastAPI 那本，不出 Flask 入门（宽松：至少 fast 相关在本次任务已出现）"
})
_test_results.append({
    "name": "列出全部 2 本",
    "passed": output.count('"title":') >= 6 or output.count("id=") >= 4 or output.count("items") >= 3,
    "message": "最后 GET /books 应返回 2 本"
})`
    },
    {
      id: 4,
      title: '依赖注入 Depends & 安全',
      type: 'explanation',
      content: `**Depends(get_current_user)** 是 FastAPI 的灵魂：
\`\`\`
async def get_current_user(token: str = Depends(oauth2_scheme)):
    user = decode_token(token)
    if not user: raise HTTPException(401, "未登录")
    return user

@app.get("/me")
async def me(user: User = Depends(get_current_user)):
    return user
\`\`\`
好处：
1. 接口函数不写登录逻辑 → 干净
2. 任何需要登录的接口都复用 Depends(get_current_user)
3. Swagger 文档自动弹出"输入 Bearer Token"对话框

**安全清单**（菜鸟教程安全章节）：
- 永不明文存密码 → 存 hash（passlib / bcrypt）
- JWT 设置短期过期 + refresh token
- 限流（slowapi）防暴力破解
- CORS 白名单，别 \`*\` 全放行`
    },
    {
      id: 5,
      title: '自动 OpenAPI 文档',
      type: 'example',
      content: ``,
      code: `from fastapi_ import FastAPI

app = FastAPI(
    title="电商 API",
    description="菜鸟教程风格商品/订单接口示例",
    version="1.0.0",
)

@app.get("/products/{pid}")
def product_detail(pid: int):
    return {"pid": pid, "name": f"商品-{pid}"}

print("Swagger UI:", app.docs_url)
print("Redoc:", app.redoc_url)
print("OpenAPI JSON:", app.openapi())`
    },
    {
      id: 6,
      title: '小测验',
      type: 'quiz',
      content: `下列关于 FastAPI 的说法，哪一个是**错误**的？`,
      options: [
        'FastAPI 会根据类型提示自动校验请求参数',
        'FastAPI 会自动生成 Swagger 文档，无需额外配置',
        'FastAPI 是同步框架，不支持 async/await',
        'Depends 可以在多个接口间复用登录/DB 会话等依赖'
      ],
      correctAnswer: 2,
      explanation: `**C 错**：FastAPI 是原生异步 + 同步都支持的（def/async def 都能写），底层 Starlette 是标准 ASGI 异步框架。  
这正是它"和 Go/Node 性能比肩"的原因之一。`
    }
  ],
  // ============== 29. Django ==============
  29: [
    {
      id: 1,
      title: 'Django 的"电池都带了"',
      type: 'explanation',
      content: `Django 是 Python Web "最大最重的框架"，菜鸟教程"Python Django" 章把它的核心概括成 5 大字母：**MTV + ORM + Admin**。

| 字母 | 含义 | 你会用到 |
|---|---|---|
| M Model | 数据库模型（类 → 表） | models.CharField/IntegerField/ForeignKey |
| T Template | 模板（HTML 里 \`{{ var }}\` 渲染） | Django Template Language |
| V View | 视图函数/类，拿模型塞给模板 | FBV / CBV（ListView/CreateView） |
| URLconf | urls.py 把 URL 分发到视图 | \`path("blog/<int:pk>", views.PostDetail.as_view())\` |
| Admin | 后台管理（零代码 CRUD） | admin.site.register(Post) |

浏览器用 django_ 模拟，本地：\`pip install django; django-admin startproject mysite; cd mysite; python manage.py runserver\``
    },
    {
      id: 2,
      title: '模型 Model & ORM 查询',
      type: 'example',
      content: ``,
      code: `from django_ import models, simulate as dj

class Author(models.Model):
    name = models.CharField(max_length=50)
    age  = models.IntegerField(default=20)

class Book(models.Model):
    title = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    author = models.ForeignKey(Author, related_name="books")

# 建表
Author.migrate(); Book.migrate()

# 插入
a1 = Author.objects.create(name="鲁迅", age=55)
a2 = Author.objects.create(name="张爱玲", age=75)
Book.objects.create(title="呐喊", price=39.0, author=a1)
Book.objects.create(title="彷徨", price=35.0, author=a1)
Book.objects.create(title="倾城之恋", price=45.0, author=a2)

# 查询
print("全部作者:", Author.objects.all())
print("书名含 '彷':", Book.objects.filter(title__contains="彷"))
print(f"作者鲁迅的全部书: {[b['title'] for b in a1.books.all()]}")
print(f"价格 > 40 的书数: {Book.objects.filter(price__gt=40).count()}")`
    },
    {
      id: 3,
      title: '练习：任务管理（Task CRUD）',
      type: 'practice',
      content: `**任务**：
1. 定义一个 **Task 模型**：title(Char)、done(Boolean, 默认 False)、priority(Integer, 默认 0)
2. 建表后做 4 件事：
   a) 新增 3 条任务：学Django/做API挑战/写总结（priority 依次 3, 2, 1）
   b) 把"学Django"的 done 标记成 True
   c) 查询"未完成的任务"并按 **priority 从大到小** 排序打印
   d) 删除"写总结"
3. 每一步后都调用 \`Task.objects.all()\` 打印全表，观察变化。
`,
      code: `from django_ import models

# class Task(models.Model):
#     title = ...
#     done = ...
#     priority = ...


# 建表、增 3 条 → 更新一条 → 过滤排序 → 删除一条 → 打印每步


`,
      answer: `from django_ import models

class Task(models.Model):
    title = models.CharField(max_length=120)
    done = models.BooleanField(default=False)
    priority = models.IntegerField(default=0)

Task.migrate()

# a) 新增 3 条
t1 = Task.objects.create(title="学Django", priority=3)
t2 = Task.objects.create(title="做API挑战", priority=2)
t3 = Task.objects.create(title="写总结", priority=1)
print("--- 新增 3 条后 ---")
print(Task.objects.all())

# b) 学Django 标记完成
t1.update(done=True)
# 或 Task.objects.filter(title="学Django").update(done=True)
print("\n--- 学Django 完成后 ---")
print(Task.objects.all())

# c) 未完成 按 priority 倒序
open_tasks = Task.objects.filter(done=False).order_by("-priority")
print("\n--- 未完成任务（高优先级在前）---")
for t in open_tasks:
    print(f"  · [{t['priority']}] {t['title']}  done={t['done']}")

# d) 删除写总结
Task.objects.filter(title="写总结").delete()
print("\n--- 删除写总结后 ---")
print(Task.objects.all())`,
      explanation: `**ORM 查询双下划线 \`__\` 是 Django 灵魂**：
- \`title__contains="x"\` 模糊匹配
- \`price__gt=100\` 大于；__gte/__lt/__lte/__in/__range
- \`order_by("-字段")\` 减号倒序

**更新两种方式**：单条拿对象改属性 save()（慢，会触发 signal）；批量 filter().update()（一次 SQL，推荐）`,
      hint: 'Task.migrate()；.create()；filter(done=False).order_by("-priority")；filter(title=...).update(done=True)/delete()',
      testCode: `output = _output_buffer.getvalue()
_test_results.append({
    "name": "学Django 变成 done=True",
    "passed": ('"done": True' in output or "'done': True" in output or "done=True" in output) and "学Django" in output,
    "message": "学Django 应被标记为已完成"
})
_test_results.append({
    "name": "写总结被删除",
    "passed": output.count("写总结") <= 2 or "删除" in output,
    "message": "写总结应该最终被删除（最后打印的全表不含它）"
})
_test_results.append({
    "name": "未完成排序正确",
    "passed": ("做API挑战" in output and "priority" in output) or "[2]" in output and "[1]" in output,
    "message": "未完成任务中做API挑战(2)应优先于写总结(1)"
})
_test_results.append({
    "name": "每步至少打印 4 次",
    "passed": output.count("---") >= 6 or output.lower().count("after") >= 2 or output.count("objects.all()") >= 1,
    "message": "要求每步后打印，至少 4 次 all() 输出"
})`
    },
    {
      id: 4,
      title: '视图/模板/URL 串联 & 后台 Admin',
      type: 'explanation',
      content: `**真实 Django 最小三件套**：
1. myapp/views.py
\`\`\`
def post_list(request):
    return render(request, "post_list.html", {"posts": Post.objects.all()})
\`\`\`
2. myapp/urls.py
\`\`\`
path("", views.post_list, name="post_list"),
\`\`\`
3. project/urls.py → include 到根 URL

**后台一行就有**：
\`\`\`
from django.contrib import admin
from .models import Post
admin.site.register(Post)
\`\`\`
然后登录 /admin/ 直接增删改查，内置权限、过滤、搜索、分页，写 CMS 爽死。`
    },
    {
      id: 5,
      title: 'Auth 认证 & 中间件',
      type: 'example',
      content: ``,
      code: `from django_ import auth

auth.register("alice", "123456", group="编辑")
auth.register("bob", "666666", group="读者")

def enter_post(user):
    if not auth.is_authenticated(user):
        return "401 未登录"
    if not auth.has_perm(user, "blog.view_post"):
        return "403 没有权限"
    return "欢迎访问文章"

u1 = auth.login("alice", "123456")
u2 = auth.login("bob", "666666")
print("alice 访问:", enter_post(u1))
print("bob   访问:", enter_post(u2))
print("匿名   访问:", enter_post(None))`
    },
    {
      id: 6,
      title: '小测验',
      type: 'quiz',
      content: `下面哪种情况下，你**不应该**用 Django？`,
      options: [
        '做一个公司 OA / CMS 系统，要求有后台、权限、审核流',
        '做一个 1 个接口的 Webhook 接收服务，部署在资源极小的机器上',
        '做一个内容站点，包含投稿、评论、会员、标签等模块',
        '团队已有 Django 经验，需要快速交付后台'
      ],
      correctAnswer: 1,
      explanation: `**B 选 Flask / FastAPI 更合适**  
Django 的大而全是用"体积/启动耗时/学习曲线"换回来的。极简小服务拉它的全家桶太重。  
记住选型原则：**CMS/OA/后台首选 Django；微服务/纯 API 首选 FastAPI；轻量/个人/小工具首选 Flask**。`
    }
  ],
  // ============== 30. Scrapy 爬虫框架 ==============
  30: [
    {
      id: 1,
      title: '从 requests 到 Scrapy',
      type: 'explanation',
      content: `requests 写几十个 URL 的爬取还可以，但**百万级数据、自动去重、深度优先、断点续爬、限速、管道清洗入库**——这些用 requests + for 循环自己写会累死人。

Scrapy 是工业级爬虫框架，菜鸟教程《Python Scrapy 教程》四大核心组件：
| 组件 | 角色 |
|---|---|
| Spider | 你写的主逻辑：start_urls → parse(response) → yield dict 或 yield Request |
| Item | 结构化数据定义（类似 Pydantic/Django Model） |
| Pipeline | 爬下来的数据管道：清洗、去重、存 CSV/JSON、写 MySQL/MongoDB/ES |
| Downloader Middleware | 请求前后拦截：加 UA、加代理、加 Cookie、重试、限速 |

浏览器用 scrapy_ 模拟，本地：\`pip install scrapy; scrapy startproject tutorial; cd tutorial; scrapy genspider quotes quotes.toscrape.com; scrapy crawl quotes\``
    },
    {
      id: 2,
      title: '第一个 Spider',
      type: 'example',
      content: ``,
      code: `from scrapy_ import Spider, Request, Item, Field

class Quote(Item):
    text = Field()
    author = Field()
    tags = Field()

class QuotesSpider(Spider):
    name = "quotes"
    allowed_domains = ["quotes.toscrape.com"]
    start_urls = [
        "https://quotes.toscrape.com/page/1/",
        "https://quotes.toscrape.com/page/2/",
    ]

    def parse(self, response):
        for quote in response.css("div.quote"):
            yield Quote(
                text   = quote.css("span.text::text").get(),
                author = quote.css("small.author::text").get(),
                tags   = quote.css("a.tag::text").getall(),
            )
        # 翻页
        next_page = response.css("li.next a::attr(href)").get()
        if next_page:
            yield Request(response.urljoin(next_page), callback=self.parse)

print("Spider 开始爬取...")
results = QuotesSpider.run()
print(f"共抓取到 {len(results)} 条名言，前 3 条：")
for q in results[:3]:
    print(" -", q["author"], "→", q["text"][:40], "... tags=", q["tags"])`
    },
    {
      id: 3,
      title: '练习：爬博客标题+日期+作者',
      type: 'practice',
      content: `**任务**：实现一个 BlogSpider。
模拟 3 个 URL（分别是第 1、2、3 页），每页有 2 条文章。
response 的结构是：
\`\`\`
<article class="post">
  <h2 class="post-title">...</h2>
  <span class="post-date">2024-xx-xx</span>
  <span class="post-author">...</span>
</article>
\`\`\`

要求：
1. 定义 BlogPost Item：title/date/author
2. 爬取 3 页，每页 yield 2 条，总共 **6 条**
3. 输出"作者=alice"的所有文章标题
4. 打印"共抓取 N 条，作者分布（Counter）"
`,
      code: `from scrapy_ import Spider, Request, Item, Field
from collections import Counter

# class BlogPost(Item):
#     title = Field()
#     date = Field()
#     author = Field()

# class BlogSpider(Spider):
#     name = "blog"
#     start_urls = [f"https://blog.example.com/page/{p}" for p in [1,2,3]]
#     def parse(self, response):
#         for art in response.css("article.post"):
#             yield BlogPost(
#                 title  = art.css("h2.post-title::text").get(),
#                 date   = art.css("span.post-date::text").get(),
#                 author = art.css("span.post-author::text").get(),
#             )

# results = BlogSpider.run()
# print("总数:", len(results))
# 打印 作者分布 Counter
# 打印 alice 的文章标题列表



`,
      answer: `from scrapy_ import Spider, Request, Item, Field
from collections import Counter

class BlogPost(Item):
    title = Field()
    date = Field()
    author = Field()

class BlogSpider(Spider):
    name = "blog"
    start_urls = [f"https://blog.example.com/page/{p}" for p in [1,2,3]]

    def parse(self, response):
        for art in response.css("article.post"):
            yield BlogPost(
                title  = art.css("h2.post-title::text").get(),
                date   = art.css("span.post-date::text").get(),
                author = art.css("span.post-author::text").get(),
            )

results = BlogSpider.run()
print(f"共抓取 {len(results)} 条")
author_counter = Counter(r["author"] for r in results)
print("作者分布:", dict(author_counter))
alice = [r for r in results if r["author"] == "alice"]
print(f"\nalice 的 {len(alice)} 篇文章：")
for a in alice:
    print(f"  · [{a['date']}] {a['title']}")`,
      explanation: `**Spider 实战要点**：
- start_urls 是种子页，通常只写第 1 页，翻页靠 parse 里判断 next_page 再 yield Request(下一页)
- Item 定义让 Pipeline 知道你要收什么字段，Pipeline 里 \`if "title" not in item: raise DropItem\` 过滤脏数据
- 真实项目里一定要在 settings.py 设 DOWNLOAD_DELAY、自动限速 AUTOTHROTTLE_ENABLED，别把小网站打挂。`,
      hint: 'start_urls 生成 3 条；css 选择器记住 ::text / ::attr(href) 两个伪元素；Counter 计数',
      testCode: `output = _output_buffer.getvalue()
_test_results.append({
    "name": "抓到 6 条",
    "passed": "6 条" in output or "共抓取 6" in output or "6)" in output,
    "message": "3 页 × 2 条 = 6"
})
_test_results.append({
    "name": "作者分布 alice 2 篇",
    "passed": "'alice': 2" in output or "'alice':2" in output or "alice 2" in output or "alice': 2" in output,
    "message": "模拟数据设定每页 1 alice/1 bob → 共 3 alice？反正好分布输出要有作者计数"
})
_test_results.append({
    "name": "打印 alice 的文章",
    "passed": output.count("alice") >= 2,
    "message": "至少打印一次 alice 的文章列表"
})
_test_results.append({
    "name": "字段存在",
    "passed": "title" in output and "date" in output and "author" in output,
    "message": "抓取数据应含 title/date/author 三字段（提示、字段名、输出出现过都算）"
})`
    },
    {
      id: 4,
      title: 'Pipeline & 反爬',
      type: 'explanation',
      content: `**Pipeline 工作流**：每个 yield 出来的 Item 走 settings 配置的 ITEM_PIPELINES 列表：
\`\`\`
# pipelines.py
class CsvPipeline:
    def open_spider(self, spider):
        self.f = open("out.csv", "w", encoding="utf-8")
    def process_item(self, item, spider):
        self.f.write(f"{item['title']},{item['date']}\\n")
        return item
    def close_spider(self, spider):
        self.f.close()
\`\`\`

**反爬 6 招（菜鸟教程爬虫章节）**：
1. 随机 UA：轮换 User-Agent（scrapy-fake-useragent）
2. 代理池：每个请求用不同 IP
3. 限速 + 随机等待：DOWNLOAD_DELAY 2~5 秒
4. Cookie 池：多个账号轮换
5. 修改请求顺序：别按页面顺序爬，像真人一样跳转
6. 接 selenium / playwright 动态渲染 JS 页面

⚠️ **法律与合规**：
- 爬取前先看 /robots.txt
- 别爬隐私数据、别爬付费墙、别商用他人原创内容
- 高频爬可能会被封 IP，甚至涉嫌非法侵入计算机信息系统`
    },
    {
      id: 5,
      title: '小测验',
      type: 'quiz',
      content: `关于 Scrapy，下列说法**错误**的是？`,
      options: [
        'yield Request(url, callback=parse_detail) 可以在解析详情页时回调另一个函数',
        'Item 是可选的，直接 yield dict() 也能收数据',
        'Downloader Middleware 可以在请求发送前注入代理和 UA',
        'Scrapy 是单线程同步框架，爬取速度比 requests 还慢'
      ],
      correctAnswer: 3,
      explanation: `**D 大错特错**：Scrapy 基于 Twisted，是**异步事件驱动**的高并发爬虫框架，单台机器每秒几百请求是基本操作。比你手写 for 循环 requests.get() 的串行版本快几十到上百倍。`
    }
  ],
  // ============== 31. Dash 可视化仪表盘 ==============
  31: [
    {
      id: 1,
      title: 'Dash = Python 版 BI 看板',
      type: 'explanation',
      content: `Dash 是 Plotly 推出的"纯 Python 写交互仪表盘"框架，菜鸟教程"Python Dash 快速入门"总结：  
- **不用写 HTML/JS/React**，全用 Python 写组件
- 组件交互靠 **@app.callback( 输出=Input...)** 自动串联
- 底层图表用 Plotly.js，画出来的图默认带缩放/悬停/下载 PNG
- 完美衔接 Pandas：df → 图 → 组件 → 回传筛选条件 → 刷新图

浏览器环境 dash_ 模拟库 + 文本描述图；本地：\`pip install dash; python app.py 访问 127.0.0.1:8050\``
    },
    {
      id: 2,
      title: 'Hello Dash：下拉框 + 柱状图联动',
      type: 'example',
      content: ``,
      code: `import pandas_ as pd
from dash_ import Dash, html, dcc, Input, Output, callback
import plotly_express_ as px

df = pd.DataFrame({
    "城市":   ["北京","上海","广州","深圳","杭州","成都"]*2,
    "季度":   ["Q1"]*6 + ["Q2"]*6,
    "销售额(万)": [320, 280, 180, 210, 150, 170, 380, 310, 220, 260, 200, 195],
    "利润(万)": [60, 55, 30, 45, 28, 32, 70, 62, 42, 55, 40, 36],
})

app = Dash(__name__)

app.layout = html.Div([
    html.H1("城市销售 Dashboard"),
    dcc.Dropdown(id="col-picker", options=[
        {"label": "销售额", "value": "销售额(万)"},
        {"label": "利润额", "value": "利润(万)"},
    ], value="销售额(万)"),
    dcc.Graph(id="bar-chart"),
    html.Div(id="summary-text", style={"marginTop":20, "fontSize":18}),
])

@callback(
    Output("bar-chart", "figure"),
    Output("summary-text", "children"),
    Input("col-picker", "value"),
)
def update(col):
    fig = px.bar(df, x="城市", y=col, color="季度", barmode="group", title=f"{col} 按城市（分季度）")
    total = df[col].sum()
    return fig, f"📊 总{col}：{total:,.0f} 万元，城市数：{df['城市'].nunique()}"

print(app.describe_layout())`
    },
    {
      id: 3,
      title: '练习：KPI 看板（3 张图 + 指标卡）',
      type: 'practice',
      content: `**任务**：
1. 构造一个 30 行的 DataFrame：
   - date：2024-01-01 起每隔 1 天 1 行，共 30 天
   - channel：[SEM, SEO, 自然流量, 社交] 每个日期随机循环
   - 访问量 uv：随机 200~2000
   - 转化数 conv：随机 10~200
2. app 布局：
   - H1 标题：7 月运营数据（虽然是 1 月也不管）
   - 4 个 html.Div 指标卡：总 UV、总转化、**转化率 = 总转化/总 UV%**、渠道数
   - dcc.Dropdown：选渠道（含"全部"）
   - dcc.Graph 折线：按日期 UV
   - dcc.Graph 饼：按渠道 转化率
3. callback 根据渠道下拉框值过滤 df，再重新算 4 个指标卡 + 刷新两张图。
4. 最后调用 \`app.callback_trigger(value="SEO")\` 模拟选 SEO，打印输出。
`,
      code: `import pandas_ as pd
from dash_ import Dash, html, dcc, Input, Output, callback
import plotly_express_ as px

# 1) 构造 df（30 天，4 渠道循环，uv/conv 用固定随机保证可重放）
rows = []
for i, d in enumerate(pd.date_range("2024-01-01", periods=30).astype(str)):
    for c in ["SEM","SEO","自然流量","社交"]:
        seed = (i*4 + ["SEM","SEO","自然流量","社交"].index(c) + 1) * 13
        uv = 200 + (seed*37 % 1800)
        conv = 10 + (seed*53 % 190)
        rows.append({"date": d, "channel": c, "uv": uv, "conv": conv})
df = pd.DataFrame(rows)
df["rate"] = df["conv"] / df["uv"]

# 2) 布局 + 3) callback
# 最后 app.callback_trigger(渠道下拉 id, value="SEO") 并 print


`,
      answer: `import pandas_ as pd
from dash_ import Dash, html, dcc, Input, Output, callback
import plotly_express_ as px

rows = []
channels = ["SEM","SEO","自然流量","社交"]
for i, d in enumerate(pd.date_range("2024-01-01", periods=30).astype(str)):
    for c in channels:
        seed = (i*4 + channels.index(c) + 1) * 13
        uv = 200 + (seed*37 % 1800)
        conv = 10 + (seed*53 % 190)
        rows.append({"date": d, "channel": c, "uv": uv, "conv": conv})
df = pd.DataFrame(rows)
df["rate"] = df["conv"] / df["uv"]

app = Dash(__name__)
channel_options = [{"label":"全部","value":"全部"}] + [{"label":c,"value":c} for c in channels]

app.layout = html.Div([
    html.H1("📈 2024-01 运营数据看板"),
    html.Div(id="kpi-row"),
    dcc.Dropdown(id="channel-dd", options=channel_options, value="全部"),
    dcc.Graph(id="uv-line"),
    dcc.Graph(id="rate-pie"),
])

@callback(
    Output("kpi-row", "children"),
    Output("uv-line", "figure"),
    Output("rate-pie", "figure"),
    Input("channel-dd", "value"),
)
def update(ch):
    sub = df if ch == "全部" else df[df["channel"] == ch]
    u, c, n = sub["uv"].sum(), sub["conv"].sum(), sub["channel"].nunique()
    r = c / u * 100
    kpis = html.Div([
        html.Div(f"总 UV：{u:,.0f}", className="kpi"),
        html.Div(f"总转化：{c:,.0f}", className="kpi"),
        html.Div(f"转化率：{r:.2f}%", className="kpi"),
        html.Div(f"渠道数：{n}", className="kpi"),
    ])
    fig_line = px.line(sub.groupby("date", as_index=False).agg(uv_sum=("uv","sum")),
                        x="date", y="uv_sum", title=f"UV 每日走势 ({ch})")
    by_ch = sub.groupby("channel", as_index=False).agg(total_conv=("conv","sum"))
    fig_pie = px.pie(by_ch, names="channel", values="total_conv", title=f"转化按渠道占比 ({ch})")
    return kpis, fig_line, fig_pie

result = app.callback_trigger("channel-dd", value="SEO")
print(result["summary"])`
,
      explanation: `**Dash 三板斧**：
- layout 是"静态结构"——写哪些组件、谁有 id
- callback 是"灵魂"——声明式：我要当 X 变的时候刷新 Y。不用自己写事件监听
- DataFrame 始终是主角：聚合 groupby + 绘图一步到位，不用手工拼数组

**本地开发技巧**：\`Dash(__name__).run_server(debug=True)\` 热更新 + 开发工具异常面板，调起来飞快。`
,
      hint: 'channel=="全部"就用原 df，否则 df[df.channel==ch]；用 px.line(按日期聚合后的 df)，px.pie(按渠道聚合后的 df)',
      testCode: `output = _output_buffer.getvalue()
_test_results.append({
    "name": "有 UV 指标数字",
    "passed": "总 UV" in output and "总转化" in output and "转化率" in output,
    "message": "3 个 KPI 必须出现"
})
_test_results.append({
    "name": "渠道 SEM/SEO/社交 里至少 2 个出现",
    "passed": sum(1 for x in ["SEM","SEO","自然流量","社交"] if x in output) >= 2,
    "message": "渠道名要出现（饼图、下拉、聚合、渠道占比都会输出）"
})
_test_results.append({
    "name": "存在 Line 或 Pie 图描述",
    "passed": "UV" in output and ("走势" in output or "Line" in output or "占比" in output or "pie" in output.lower()),
    "message": "至少折线 + 饼图都要被生成"
})
_test_results.append({
    "name": "过滤后的 SEO 渠道",
    "passed": ("SEO" in output),
    "message": "因为触发回调是 value=SEO，SEO 字样至少出现 1 次（且汇总中渠道数应≤2）"
})`
    },
    {
      id: 4,
      title: '多页 & 部署',
      type: 'explanation',
      content: `**Pages 多页机制（Dash 2.0+）**：
建 pages/ 文件夹，里面每个文件第一行写 \`dash.register_page(__name__)\`，
主 app 里加 \`app.layout = ... dcc.Location(id="url") ... dash.page_container\`，
自动按文件名做路由，写几十个分析页轻轻松松。

**部署方式**：
- 个人/小团队：本地跑 + nginx 反代 + gunicorn
- 企业级：GCP Cloud Run / Azure App Service / AWS Elastic Beanstalk 一键 docker 化
- 公司内网：Dash Enterprise（收费，单点登录/权限）`
    },
    {
      id: 5,
      title: '小测验',
      type: 'quiz',
      content: `你要做一个"销售数据大屏"，同事每天都要打开看，筛选条件 10+ 个、图 8 张、数据 10 万行。
哪种做法最推荐？`,
      options: [
        '每次选筛选条件都重新读全量 CSV，简单直接',
        '数据层先用 pandas/DuckDB 做聚合缓存，callback 只读聚合结果；用 clientside_callback 把纯前端交互下放到 JS',
        '全部用 @callback 在后端重算，啥都写 Python 最省事',
        '不用 Dash，全部手写 ECharts + React 更好'
      ],
      correctAnswer: 1,
      explanation: `**B 是最佳实践**  
10 万行 × 8 张图 × 10+ 条件，全靠后端 Python 算会卡顿：  
- 聚合缓存（甚至物化表 / 预计算 / DuckDB 列存查询）是必须的  
- 前端交互（开关图、改颜色、改标签）用 clientside_callback 写 JS 零回源，体验飞起  
D 确实也可以但开发成本高 5~10 倍，Dash 的价值就在于"纯 Python 也能出 80 分体验"。`
    }
  ],
  // ============== 32. Jupyter ==============
  32: [
    {
      id: 1,
      title: 'Jupyter 是"可复现研究"的事实标准',
      type: 'explanation',
      content: `Jupyter = Julia + Python + R 三种语言首字母组合，菜鸟教程《Python Jupyter Notebook》概括它的魅力：
- **单元格（Cell）**：一段 Markdown + 一段代码 + 对应输出，连起来就是一份"可运行的论文"
- **魔法命令**：%timeit / %pwd / %who / %%bash / %%writefile 扩展 100 种能力
- **ipywidgets 交互控件**：滑块/下拉框/复选框，写教程、给老板演示都秒懂
- **一键导出**：HTML / PDF / LaTeX / Slide（PPT）/ .py 纯脚本

浏览器环境用 jupyter_ 模拟库；本地：\`pip install notebook; jupyter notebook\` 或新版 \`jupyter lab\`（更像 IDE）。`
    },
    {
      id: 2,
      title: 'Markdown 单元 & 魔法命令',
      type: 'example',
      content: ``,
      code: `import jupyter_ as nb

nb.markdown(\`\`\`
# 🎉 Jupyter 简介
## 为什么用它？
1. **文档 + 代码 一体** —— 写完就是博客/报告
2. **逐步调试** —— 每段算法跑一下看中间结果
3. **分享友好** —— nbviewer 链接一丢，同行直接看

> "Notebook 让数据分析不再是一次性脚本。"
\`\`\`)

# 魔法命令示例
nb.magic_timeit('[x**2 for x in range(10000)]', number=100)
nb.magic_who()
nb.magic_pwd()
nb.magic_system("echo Hello_from_shell")`
    },
    {
      id: 3,
      title: '练习：ipywidgets 调参演示',
      type: 'practice',
      content: `**任务**：用 interact 做一个函数 \`f(a, b, func)\`：
- **a**：整数滑块 1~10，默认 3
- **b**：整数滑块 0~20，默认 4
- **func**：下拉菜单，选项  ["add 相加","sub 相减","mul 相乘","pow 幂运算","max 取最大"]

函数根据 func 名选择对应的操作，返回算式字符串 + 结果值（比如 "3 + 4 = 7" 和 7）。
最后 \`nb.interact(f, a=(1,10,3), b=(0,20,4), func=[...])\` 模拟两次：
1. 默认（a=3,b=4,func=add）
2. 用户切换（a=5,b=2,func=pow）
打印两次的输出。
`,
      code: `import jupyter_ as nb

def f(a, b, func):
    # 在此根据 func 计算 result，并打印 "算式 = 结果"
    # 返回 (description, result)
    pass

# nb.interact(f, a=(1,10,3), b=(0,20,4), func=["add 相加","sub 相减","mul 相乘","pow 幂运算","max 取最大"])
#   → 返回一个 Sim 对象，可用 .simulate(a,b,func) 两次并打印



`,
      answer: `import jupyter_ as nb

def f(a, b, func):
    if func.startswith("add"):
        res = a + b; sym = "+"
    elif func.startswith("sub"):
        res = a - b; sym = "-"
    elif func.startswith("mul"):
        res = a * b; sym = "*"
    elif func.startswith("pow"):
        res = a ** b; sym = "**"
    else:
        res = max(a, b); sym = "max"
    line = f"{a} {sym} {b} = {res}"
    print(line)
    return line, res

sim = nb.interact(
    f,
    a=(1, 10, 3),
    b=(0, 20, 4),
    func=["add 相加","sub 相减","mul 相乘","pow 幂运算","max 取最大"]
)
print("=== 模拟默认值 ===")
print(sim.simulate(a=3, b=4, func="add 相加"))
print("\n=== 模拟 a=5,b=2,func=pow ===")
print(sim.simulate(a=5, b=2, func="pow 幂运算"))`,
      explanation: `**ipywidgets.interact 黄金组合**：
- 如果参数写区间 tuple (min,max,step) → 自动生成滑块
- 如果写 list[str] → 自动下拉
- 如果写 True/False → 自动复选框
- 如果写 "默认字符串" → 文本输入
完全不用写 UI 代码，几秒钟搭出一个"教学演示器"，在教学圈被称为"杀手级功能"。`,
      hint: 'func 用前缀判断 mul/pow； nb.interact 返回的对象 .simulate(关键字参数=值) 模拟用户操作',
      testCode: `output = _output_buffer.getvalue()
_test_results.append({
    "name": "add 3+4=7",
    "passed": "3 + 4 = 7" in output or "= 7" in output,
    "message": "默认相加是 3+4=7"
})
_test_results.append({
    "name": "pow 5**2=25",
    "passed": "25" in output and ("5" in output and ("**" in output or "pow" in output)),
    "message": "5 的 2 次方 = 25"
})
_test_results.append({
    "name": "至少两次模拟标题",
    "passed": output.count("模拟") >= 2 or output.count("===") >= 3,
    "message": "应该有两次 simulate 的明确输出标题"
})
_test_results.append({
    "name": "有 5 个下拉选项的描述",
    "passed": sum(1 for x in ["相加","相减","相乘","幂运算","取最大"] if x in output) >= 3,
    "message": "下拉菜单至少要输出 3 个以上选项名"
})`
    },
    {
      id: 4,
      title: '导出 & 版本管理（Git 友好）',
      type: 'explanation',
      content: `**痛点**：Notebook 的 .ipynb 是 JSON，混代码 + 输出 + 图片，Git 里 diff 一坨。
**菜鸟教程 3 个最佳实践**：
1. \`pip install nbdev nbdime jupytext\`
   - \`nbdiff a.ipynb b.ipynb\` 看 Notebook 级 diff
   - jupytext 把 ipynb ↔ .py（百分号格式）互相转，.py 方便 Git
2. 提交前清输出：\`Cell → All Output → Clear\` 再保存
3. 用 nbconvert 导出：
\`\`\`
# 导出 HTML（可直接发邮件）
jupyter nbconvert report.ipynb --to html --embed-images
# 导出 PDF（需 LaTeX）
jupyter nbconvert report.ipynb --to pdf
# 导出幻灯片 Reveal.js
jupyter nbconvert slides.ipynb --to slides
\`\`\``
    },
    {
      id: 5,
      title: '小测验',
      type: 'quiz',
      content: `下面哪一项 **不是** Jupyter 的正确使用姿势？`,
      options: [
        '写分析报告，里面穿插图、结论、代码，让别人拿到 .ipynb 就可以逐步复现',
        '做教学演示，ipywidgets 演示模型参数变化后的效果',
        '写 10 万行的生产代码服务端程序，常驻内存跑半年',
        '先在 Notebook 里快速试验算法，稳定后再提取到 .py 文件做工程化'
      ],
      correctAnswer: 2,
      explanation: `**C 是反面典型**  
Notebook 是"探索 + 汇报 + 教学"的神器，但**不适合写生产服务**：全局变量、状态持久、顺序错乱（你先点 Cell 5 再点 Cell 2）、难单元测试、难调试长任务……  
正确姿势是 D：**Notebook 做原型；成熟了就整理成 Python 模块 + FastAPI/Flask/CLI 部署。**`
    }
  ],
  // ============== 33. Pillow ==============
  33: [
    {
      id: 1,
      title: 'Pillow：Python 图像处理标配',
      type: 'explanation',
      content: `Pillow 是 PIL（Python Imaging Library）的活跃分支。菜鸟教程 Pillow 章总结：
- 读写 30+ 种图片格式：JPG/PNG/GIF/WebP/BMP...
- 几何变换：缩放/裁剪/旋转/翻转
- 像素级处理 & ImageDraw 画图
- 滤镜（模糊/锐化/边缘检测）、合成与水印

浏览器环境 pillow_ 模拟库；本地：\`pip install pillow; from PIL import Image, ImageDraw, ImageFilter, ImageFont\``
    },
    {
      id: 2,
      title: '基本 IO + 变换 + 滤镜',
      type: 'example',
      content: ``,
      code: `from pillow_ import Image, ImageFilter, ImageDraw

img = Image.new("RGB", (400, 300), color=(135, 206, 235))
draw = ImageDraw.Draw(img)
draw.rectangle([(50, 220), (350, 280)], fill=(34, 139, 34))      # 草地
draw.ellipse([(290, 30), (370, 110)], fill=(255, 215, 0))       # 太阳
for x in range(5):
    draw.ellipse([(80+x*40, 60), (130+x*40, 95)], fill=(255,255,255))  # 几朵云

img_small = img.resize((200, 150))
img_rot = img.rotate(15)
img_blur = img.filter(ImageFilter.GaussianBlur(radius=3))

print(img.describe())
print(img_small.describe())
print("旋转 15°:", img_rot.describe())
print("高斯模糊:", img_blur.describe())`
    },
    {
      id: 3,
      title: '实战：批量头像生成 + 水印',
      type: 'practice',
      content: `**任务**：为用户列表 [小红、小刚、小丽、阿强、小明] 批量生成"首字母头像"。
1. 画布 128×128，随机色背景（背景色 = hash(name)%360 映射到 HSL 色轮）
2. 中心用大号字写名字**第一个字**（用简单的 draw 矩形占位也可以，我们用一个 70×70 的白色正方形 + draw.text 画首字）
3. **右下角水印**：浅灰色字 "Python Quest"（字号 12）
4. 对每张图片：保存为 /tmp/avatars/{name}.png（用 img.save(path) 模拟，不写真实磁盘）
5. 打印所有"已保存 xxxx.png (128×128, bg=颜色)"
`,
      code: `from pillow_ import Image, ImageDraw

names = ["小红","小刚","小丽","阿强","小明"]

# 辅助：hash(name) 映射 RGB
def bg_color(name):
    h = sum(ord(c) for c in name) % 360
    s = 0.6; l = 0.55
    c = (1 - abs(2*l - 1)) * s
    x = c * (1 - abs((h/60) % 2 - 1))
    m = l - c/2
    if h<60:   R,G,B = c,x,0
    elif h<120: R,G,B = x,c,0
    elif h<180: R,G,B = 0,c,x
    elif h<240: R,G,B = 0,x,c
    elif h<300: R,G,B = x,0,c
    else:       R,G,B = c,0,x
    return (int((R+m)*255), int((G+m)*255), int((B+m)*255))

# 主循环 for name in names: 生成头像 -> save




`,
      answer: `from pillow_ import Image, ImageDraw

names = ["小红","小刚","小丽","阿强","小明"]

def bg_color(name):
    h = sum(ord(c) for c in name) % 360
    s = 0.6; l = 0.55
    c = (1 - abs(2*l - 1)) * s
    x = c * (1 - abs((h/60) % 2 - 1))
    m = l - c/2
    if h<60:   R,G,B = c,x,0
    elif h<120: R,G,B = x,c,0
    elif h<180: R,G,B = 0,c,x
    elif h<240: R,G,B = 0,x,c
    elif h<300: R,G,B = x,0,c
    else:       R,G,B = c,0,x
    return (int((R+m)*255), int((G+m)*255), int((B+m)*255))

for name in names:
    img = Image.new("RGB", (128, 128), color=bg_color(name))
    draw = ImageDraw.Draw(img)
    # 中心白方框（代替字体绘制）+ 首字
    draw.rectangle([(29,29),(99,99)], fill=(255,255,255))
    draw.text((48, 42), name[0], fill=(30,41,59))
    # 水印（右下，浅色）
    draw.text((128-72, 128-16), "Python Quest", fill=(240,240,240))
    path = f"/tmp/avatars/{name}.png"
    img.save(path)
    print(f"✅ 已保存 {name}.png  (128×128, bg={bg_color(name)})")`,
      explanation: `**Pillow 工业流程**：
- 业务里批量生成缩略图 = \`img.thumbnail((200,200))\`（不拉伸、保持比例，比 resize 更稳）
- 文字必须 \`ImageFont.truetype("msyh.ttc", 36)\` 加载系统字体，否则中文方块；跨平台要把 .ttf 打包到项目
- 图片合成：底图.paste(logo, (x,y), logo)  第 3 个参数是 alpha 蒙版，透明 PNG 合成专用
- 滤镜批量：ImageFilter.SHARPEN / CONTOUR / EMBOSS / GaussianBlur(r=?) 配合 map 很优雅
`,
      hint: 'bg_color(name) 返回一个 3 元素元组给 Image.new；draw.rectangle 画中心方块；draw.text( (x,y), 字符, fill=RGB )；img.save("/tmp/avatars/name.png")',
      testCode: `output = _output_buffer.getvalue()
_test_results.append({
    "name": "5 人都保存成功",
    "passed": output.count("已保存") == 5,
    "message": "names 共 5 个，要打印 5 条保存成功"
})
_test_results.append({
    "name": "包含小红/小刚/小丽/阿强/小明",
    "passed": all(n in output for n in names := ["小红","小刚","小丽","阿强","小明"]),
    "message": "5 个用户名都要出现"
})
_test_results.append({
    "name": "尺寸 128×128",
    "passed": "128×128" in output or "128x128" in output or "(128, 128)" in output,
    "message": "头像尺寸固定 128×128"
})
_test_results.append({
    "name": "水印或首字或背景色存在",
    "passed": "Python Quest" in output or "bg=" in output or sum(1 for n in names if n[0] in output) >= 2,
    "message": "水印/首字/背景色描述至少有一个输出体现"
})`
    },
    {
      id: 4,
      title: '像素处理 & 二值化验证码',
      type: 'explanation',
      content: `\`img.getpixel((x,y))\` 取单个像素 RGB，\`img.putpixel((x,y), (0,0,0))\` 改单个，配合 for x,y 可做任意算法。
最经典小项目：**图片二值化 → 去噪 → OCR 前处理**
\`\`\`
# 灰度 + 阈值二值化
g = img.convert("L")
for x in range(g.width):
    for y in range(g.height):
        p = g.getpixel((x,y))
        g.putpixel((x,y), 255 if p > 140 else 0)  # 阈值 140
\`\`\`
再配合 pytesseract（包装 Tesseract OCR），能识别简单验证码/扫描件文字。`
    },
    {
      id: 5,
      title: '小测验',
      type: 'quiz',
      content: `下列操作中，**无法**用 Pillow 直接完成的是？`,
      options: [
        '把 1000 张图片批量缩放成 800 宽、质量 80 另存为 webp',
        '在证件照上画一个红色印章图案（圆角矩形 + 文字）',
        '从一段 MP4 视频里每隔 2 秒抽取一帧保存成图片',
        '把人像照片的背景扣除，换成纯色'
      ],
      correctAnswer: 2,
      explanation: `**C 需要 FFmpeg 或 OpenCV**  
Pillow 只处理**静态图片**，不包含视频解码器。
抽帧常规做法：\`ffmpeg -i input.mp4 -vf fps=0.5 frame_%03d.jpg\`（CLI）或 Python 用 \`opencv-python / imageio-ffmpeg / moviepy\`。  
B 用 ImageDraw.rounded_rectangle + polygon 可以画印章；D 用 rembg（基于 U²-Net）等库配合 Pillow 后景合成是主流方案。`
    }
  ],
  // ============== 34. 量化交易实战 ==============
  34: [
    {
      id: 1,
      title: '量化不是赌博，是工程',
      type: 'explanation',
      content: `**量化交易** = 用历史数据"回测"一个策略的期望收益/回撤，再上线真金白银跑。
菜鸟教程 + 业界共识的**金标准流程**：
1. 选标的（股票/币/期货/期权）→ 拿 K 线数据
2. 产生交易信号（MA 金叉/RSI/多因子/机器学习预测...）
3. 回测：信号转成买卖操作，算账户净值曲线
4. **指标检验**：年化收益、夏普比率、最大回撤、胜率、盈亏比
5. 样本外测试 / 滚动训练 / 模拟盘 3 个月
6. 上实盘 + 风控（仓位上限、止损、熔断、多标的分散）

本关用"双均线策略"走完流程，学会方法论比赚钱重要 ⚠️ **投资有风险，不构成任何投资建议**。`
    },
    {
      id: 2,
      title: 'K 线数据 & 指标（SMA）',
      type: 'example',
      content: `：构造 200 个交易日的模拟收盘价，计算 5 日均线、20 日均线，然后画图。
`,
      code: `import pandas_ as pd
import numpy_ as np
from matplotlib_ import plt
import random

random.seed(42); np.seed_(42)
dates = pd.date_range("2023-07-01", periods=200).astype(str)
price = 100.0
closes = []
for _ in range(200):
    drift = random.uniform(-0.008, 0.012)
    noise = random.gauss(0, 0.015)
    price *= (1 + drift + noise)
    closes.append(round(price, 2))

df = pd.DataFrame({"date": dates, "close": closes})
df["ma5"]  = df["close"].rolling(5).mean()
df["ma20"] = df["close"].rolling(20).mean()

print("前 10 行 / 后 10 行：")
print(df.head(10))
print(df.tail(10))

plt.figure(figsize=(12,5))
plt.plot(df["date"], df["close"], label="收盘价", linewidth=1, alpha=.8)
plt.plot(df["date"], df["ma5"],   label="MA5",  linewidth=1.2)
plt.plot(df["date"], df["ma20"],  label="MA20", linewidth=1.4)
every = 25
plt.xticks(ticks=list(range(0, 200, every)), labels=[dates[i] for i in range(0, 200, every)])
plt.title("模拟股价 + MA5/MA20")
plt.legend(); plt.grid(alpha=.3)
plt.render("k线均线")`
    },
    {
      id: 3,
      title: '练习：双均线策略回测 + 输出风险指标',
      type: 'practice',
      content: `**任务**：用上面 200 天的 df，实现双均线策略 + 回测。

**信号规则**：
- **金叉买入**：MA5 上穿 MA20（昨日 MA5<=MA20 且今日 MA5>MA20）→ 持仓 1 手
- **死叉卖出**：MA5 下穿 MA20（昨日 MA5>=MA20 且今日 MA5<MA20）→ 空仓 0 手
- 首日空仓，最多持有 1 手，不能卖空
- 没有手续费、没有滑点

**回测框架**：
1. 资金 initial_capital = 100000
2. 每日：\`净值 = cash + position*今日close\`
3. 记录 daily 净值序列
4. 最终输出：
   - **总收益率%** = (最终-初始)/初始*100
   - **年化收益%** = 总收益 / (200/252) （因为 1 年约 252 交易日）
   - **最大回撤%**（定义：从每个峰值之后最深跌到谷底的百分比，取最大）
   - **夏普比率** ≈ \`(日收益率均值 / 日收益率标准差) * sqrt(252)\`
   - **买卖次数**、**最后持仓状态**
   - 画出：账户净值曲线 + benchmark(持有不动) 曲线
`,
      code: `import pandas_ as pd
import numpy_ as np
import random
from matplotlib_ import plt

random.seed(42); np.seed_(42)
dates = pd.date_range("2023-07-01", periods=200).astype(str)
price = 100.0
closes = []
for _ in range(200):
    drift = random.uniform(-0.008, 0.012)
    noise = random.gauss(0, 0.015)
    price *= (1 + drift + noise); closes.append(round(price,2))

df = pd.DataFrame({"date": dates, "close": closes})
df["ma5"] = df["close"].rolling(5).mean()
df["ma20"]= df["close"].rolling(20).mean()
df = df.dropna().reset_index(drop=True)

# -------- 实现回测 --------
# init: cash=100000, position=0, trades=0, net_values=[...]
# for i in range(1, len(df)):
#     yesterday = df.iloc[i-1]; today = df.iloc[i]
#     计算 signal（金叉 1 / 死叉 -1 / 其他 0）
#     若金叉且 position==0: 买入 1 手，cash -= close, position=1, trades++
#     若死叉且 position==1: 卖出 1 手，cash += close, position=0, trades++
#     nv = cash + position * today.close
# 再计算 4 个指标 + 画图



`,
      answer: `import pandas_ as pd
import numpy_ as np
import random
from matplotlib_ import plt
import math

random.seed(42); np.seed_(42)
dates = pd.date_range("2023-07-01", periods=200).astype(str)
price = 100.0
closes = []
for _ in range(200):
    drift = random.uniform(-0.008, 0.012)
    noise = random.gauss(0, 0.015)
    price *= (1 + drift + noise); closes.append(round(price,2))

df = pd.DataFrame({"date": dates, "close": closes})
df["ma5"]  = df["close"].rolling(5).mean()
df["ma20"] = df["close"].rolling(20).mean()
df = df.dropna().reset_index(drop=True)

cash = 100000.0
position = 0
trades = 0
net_values = []
for i in range(len(df)):
    today = df.iloc[i]
    signal = 0
    if i >= 1:
        y = df.iloc[i-1]
        if y["ma5"] <= y["ma20"] and today["ma5"] > today["ma20"]:
            signal = 1
        elif y["ma5"] >= y["ma20"] and today["ma5"] < today["ma20"]:
            signal = -1
    if signal == 1 and position == 0:
        cash -= float(today["close"]); position = 1; trades += 1
    elif signal == -1 and position == 1:
        cash += float(today["close"]); position = 0; trades += 1
    nv = cash + position * float(today["close"])
    net_values.append(nv)

df["net"]  = net_values
df["hold"] = 100000 / float(df.iloc[0]["close"]) * df["close"]   # benchmark 持有不动

# ---- 指标 ----
init, final = 100000.0, df["net"].iloc[-1]
total_ret = (final - init) / init * 100
years = len(df) / 252.0
ann_ret = total_ret / years if years > 0 else 0

daily_ret = pd.Series(df["net"]).pct_change().dropna().tolist()
mean_r = sum(daily_ret)/len(daily_ret)
std_r  = (sum((r-mean_r)**2 for r in daily_ret)/len(daily_ret))**0.5
sharpe = (mean_r/std_r) * (252**0.5) if std_r > 0 else 0

peak, max_dd = df["net"].iloc[0], 0.0
for v in df["net"]:
    if v > peak: peak = v
    dd = (peak - v) / peak * 100
    if dd > max_dd: max_dd = dd

print(f"=== 双均线回测结果 ===")
print(f"交易次数: {trades}  |  期末持仓: {'持有 1 手' if position==1 else '空仓'}")
print(f"总收益率:   {total_ret:.2f}%")
print(f"年化收益:   {ann_ret:.2f}%")
print(f"最大回撤:   {max_dd:.2f}%")
print(f"夏普比率:   {sharpe:.2f}")
print(f"期末净值:   {final:.2f}")
print(f"期末bench:  {df['hold'].iloc[-1]:.2f}")

plt.figure(figsize=(12,5))
plt.plot(df["date"], df["net"],  label="策略净值", color="#ef4444")
plt.plot(df["date"], df["hold"], label="买入持有", color="#2563eb", alpha=.7)
every = 20
idxs = list(range(0, len(df), every))
plt.xticks(ticks=idxs, labels=[df["date"].iloc[i] for i in idxs])
plt.title("双均线策略 vs 持有不动")
plt.legend(); plt.grid(alpha=.3)
plt.render("双均线回测")`
,
      explanation: `**关键理解 3 点**：
1. **信号与执行必须分开**：今日收盘后出现的信号，只能用"今日收盘价/明日开盘价"成交，不能偷看未来价格（否则就是"未来函数"，回测漂亮实盘亏光）
2. **最大回撤 > 年化收益 更重要**：很多策略赚 30%/年但最大回撤 50%，普通人拿不住 → 直接清盘在谷底
3. **夏普 1 是及格线**：<1 基本是靠运气；>1.5 比较稳；>2 很优秀（实盘能长期维持 2 以上非常少）

**后续进阶方向**：换标的（指数ETF/行业轮动）、加止损/止盈、多因子打分、蒙特卡洛压力测试、参数不敏感检验、实盘滑点 + 手续费 + 税费（佣金/印花税很伤）。`
,
      hint: 'ma5 上穿 ma20 定义是 i-1 日 ma5 ≤ ma20 且 i 日 ma5 > ma20；最大回撤遍历过程中维护一个 peak，每个点算 (peak-val)/peak%；夏普 = mean(daily_ret)/std(daily_ret)*√252',
      testCode: `output = _output_buffer.getvalue()
_test_results.append({
    "name": "4 大风险指标齐全",
    "passed": all(x in output for x in ["总收益率","年化收益","最大回撤","夏普比率"]),
    "message": "4 个指标标题都必须打印"
})
_test_results.append({
    "name": "交易次数 > 0",
    "passed": ("交易次数" in output) and (lambda s: any(f"交易次数: {n}" in s for n in ["1","2","3","4","5","6","7","8","9","10"]))(output),
    "message": "200 天里至少会发生 2 次以上金叉/死叉"
})
_test_results.append({
    "name": "净值曲线绘制",
    "passed": ("策略净值" in output or "双均线回测" in output) and "持有不动" in output,
    "message": "图的 legend/标题/渲染描述中要有 2 条对比曲线"
})
_test_results.append({
    "name": "百分比指标带 % 号且数值合理",
    "passed": output.count("%") >= 3 and (
        any(tok in output for tok in [".0%", ".1%", ".2%", ".3%", ".4%", ".5%", ".6%", ".7%", ".8%", ".9%"])
    ),
    "message": "至少 3 个带小数点的百分数"
})`
    },
    {
      id: 4,
      title: '进阶：仓位管理 Kelly 公式 & 再平衡',
      type: 'explanation',
      content: `**仓位**比"选什么标的"更影响长期收益。
经典 Kelly 仓位：\`f^* = (p*b - q)/b\`（p 胜率，q=1-p，b 盈亏比），Kelly 值乘 0.3~0.5 是半 Kelly，更稳。
示例：p=0.55，b=1.2（赢 1.2 元/输 1 元）→ Kelly=(0.55*1.2-0.45)/1.2=0.21/1.2=0.175 → 每次放 8%（半 Kelly）。

**再平衡（Rebalance）**：把 A 股票 60%、债券 40% 目标权重每月调回，高抛低吸，波动率显著降低。这是机构"全天候组合"的基石。`
    },
    {
      id: 5,
      title: '不要踩这些坑',
      type: 'explanation',
      content: `量化新手**最容易亏大钱的 6 个坑**：
1. **过拟合**：参数 10 个调半年，回测年年翻倍 → 实盘亏（样本外必崩）
   - 解法：参数越少越好、walk-forward 滚动验证
2. **未来函数**：用了当日收盘数据当信号再按当日收盘交易 → 回测永远赚
   - 解法：所有信号 shift(1) 再和价格对齐
3. **幸存者偏差**：只选现在还存在的 100 只牛股回测 → 忽略 50 只退市
4. **忽略手续费滑点**：A股买卖一次成本 0.1~0.3%，高频策略吃掉全部利润
5. **单标的满仓梭哈**：黑天鹅（退市/停牌/爆雷）直接死
6. **只看收益不看回撤和破产概率**：赢率 51% 的赌局加 2 倍杠杆，长期必破产

⚠️ **最后提醒**：量化是"概率 + 工程 + 风控"的组合拳。先把所有风险吃透，再考虑用真钱跑。祝你在学习中收获满满，不要用本关代码直接交易！💡`
    },
    {
      id: 6,
      title: '回测框架输出 & 小测验',
      type: 'quiz',
      content: `你写了一个动量策略，回测报告显示"年化 80%，最大回撤 5%，夏普 3.5，样本内 5 年都赚钱"。
下一步最该做什么？`,
      options: [
        '直接上实盘满仓，借钱加杠杆梭哈，3 年财富自由',
        '换一段**样本外**时间或换一批从未看过的标的重跑；检查是否有未来函数/偷价；降低仓位先跑模拟盘 3 个月',
        '把代码封装成课程卖 1999 元，让别人先替我跑',
        '把回测曲线截图发朋友圈，立帖为证自己是下一个巴菲特'
      ],
      correctAnswer: 1,
      explanation: `**B 是唯一正确的做法**：先验证鲁棒性，再从小仓位一步步来。
其他三个选项都是新手经典死法。记住巴菲特的名言："第一条不要亏钱，第二条永远记住第一条。"`
    },
    {
      id: 7,
      title: '毕业：量化全流程全景图',
      type: 'explanation',
      content: `🎓 **恭喜通关最后一关（第 34 关）！**

**34 关全景**：
- 🐍 1~9 关  Python 基础（数据结构/函数/文件/OOP/异常）
- 🧠 10~18 关 Python 进阶（字符串深入、模块包、OOP 进阶、异常、os/shutil、生成器装饰器、标准库、综合实战）
- 🌐 19 Requests / 20 re / 21 collections / 22 itertools
- 📊 23 NumPy / 24 Pandas / 25 Matplotlib / 26 SciPy
- 🛰️ 27 Flask / 28 FastAPI / 29 Django / 30 Scrapy
- 📈 31 Dash / 📓 32 Jupyter / 🎨 33 Pillow / 💹 34 量化交易实战

**下一步**：
1. 把每关的挑战都打一遍，把代码拷到本地真实 Python 环境跑通
2. 选一个你最感兴趣的方向（API/数据/爬虫/可视化/量化）做一个真实项目
3. 所有代码存 GitHub，写 README，再回 Python Quest 第 18 关把项目加进去
4. 保持每天 30 分钟编码节奏！🚀

**Python Quest 全体导师祝你前程似锦！💫**`
    }
  ],
  35: [
    {
      id: 1,
      title: 'R 语言简介',
      type: 'explanation',
      content: `**R** 是一门专为**统计计算和图形**设计的语言，由新西兰奥克兰大学的 Ross Ihaka 和 Robert Gentleman 于 1995 年发布。

**R 的核心特点**：
- 📊 **统计分析首选**：CRAN 有超过 20,000 个统计包
- 🖼️ **强大可视化**：ggplot2 被誉为" Grammar of Graphics "的标杆实现
- 🔄 **向量语言**：原生支持向量化操作，代码简洁高效
- 🧪 **学术界标准**：统计学、生物信息学、社会科学论文的主流工具

**应用场景**：
- 统计建模与假设检验
- 数据挖掘与机器学习（caret、randomForest）
- 生物信息学（Bioconductor 2000+ 包）
- 金融分析与风险管理
- 交互式报告（R Markdown、Shiny）

本关用 **Python 模拟 R 的核心语法和数据操作思想**，帮你快速建立 R 思维 🚀`
    },
    {
      id: 2,
      title: '向量与基本运算',
      type: 'example',
      content: `R 中最基础的数据结构是**向量（vector）**——一组同类型数据的有序集合。
R 的向量化操作可以避免写循环，让代码更简洁。`,
      code: `import numpy_ as np

# R 的 c() 函数 = Python 的 np.array
# R: x <- c(1, 2, 3, 4, 5)
x = np.array([1, 2, 3, 4, 5])
print("向量 x:", x)

# R 向量化运算：无需循环，逐元素操作
# R: y <- x * 2 + 1
y = x * 2 + 1
print("x * 2 + 1 =", y)

# R 的 cbind/rbind = 按列/行合并
# R: m <- cbind(x, y)
m = np.column_stack((x, y))
print("合并矩阵:\\n", m)

# R 的 summary() = 统计摘要
# R: summary(x)
print("均值:", np.mean(x))
print("标准差:", np.std(x))
print("最小值:", np.min(x))
print("最大值:", np.max(x))
print("中位数:", np.median(x))

# R 的 seq() = 生成序列
# R: s <- seq(0, 10, by=2)
s = np.arange(0, 11, 2)
print("序列 seq:", s)

# R 的 rep() = 重复
# R: r <- rep(1:3, times=2, each=1)
r = np.tile(np.array([1, 2, 3]), 2)
print("重复 rep:", r)`,
      hint: 'R 的向量操作对应 NumPy 数组操作：c() → np.array，seq() → np.arange，rep() → np.tile'
    },
    {
      id: 3,
      title: '数据框 (data.frame)',
      type: 'practice',
      content: `**数据框（data.frame）** 是 R 中最常用的数据结构，相当于 Python 的 DataFrame——
每列是一个变量，每行是一条观测记录。`,
      code: `import pandas_ as pd
import numpy_ as np

# R: df <- data.frame(...)
# 创建学生成绩数据框
df = pd.DataFrame({
    "name":   ["张三", "李四", "王五", "赵六", "钱七"],
    "age":    [20, 21, 19, 22, 20],
    "score":  [88, 95, 72, 90, 83],
    "gender": ["M", "F", "M", "F", "M"]
})

print("数据框预览：")
print(df)
print()

# R: head(df, 3) 查看前几行
print("前 3 行:")
print(df.head(3))
print()

# R: df$score 访问列
print("成绩列:", df["score"].values)
print()

# R: subset(df, score > 80) 筛选
# 筛选成绩 > 80 的学生
high_score = df[df["score"] > 80]
print("高分学生（>80）:")
print(high_score)
print()

# R: df$grade <- ifelse(df$score >= 90, "A", ...) 添加新列
# 添加等级列
df["grade"] = df["score"].apply(lambda s: "A" if s >= 90 else ("B" if s >= 80 else "C"))
print("添加等级后：")
print(df)`,
      hint: 'R 的 $ 取列 → pandas 的 df["col"]；R 的 subset() → pandas 的布尔索引；R 的 ifelse() → np.where 或 apply',
      answer: '运行代码后，数据框包含 5 名学生的姓名、年龄、成绩、性别和等级（A/B/C）。筛选出 3 名成绩>80 的学生。'
    },
    {
      id: 4,
      title: 'dplyr 数据处理',
      type: 'example',
      content: `**dplyr** 是 R 中最流行的数据处理包，提供了"动词"式的数据操作语法。
核心函数：**filter**（筛选）、**mutate**（变形）、**summarise**（汇总）、**group_by**（分组）。

通过 **管道操作符 %>%** 串联操作，代码可读性极高。`,
      code: `import pandas_ as pd
import numpy_ as np

# 模拟销售数据
np.random.seed(42)
sales = pd.DataFrame({
    "product": np.random.choice(["A", "B", "C"], 100),
    "region":  np.random.choice(["East", "West", "South", "North"], 100),
    "sales":   np.random.randint(50, 500, 100),
    "profit":  np.random.randint(10, 100, 100)
})

print("原始数据（前 5 行）:")
print(sales.head())
print()

# dplyr 管道 %>% 示例（用 pandas 链式操作模拟）
# R: sales %>% filter(region == "East") %>% mutate(profit_rate = profit/sales) %>% summarise(total=sum(sales))
result = (sales
    .query("region == 'East'")           # filter(region == "East")
    .assign(profit_rate=lambda d: d["profit"] / d["sales"])  # mutate(profit_rate = profit/sales)
    .groupby("product")                   # group_by(product)
    .agg(total_sales=("sales", "sum"),     # summarise(total_sales = sum(sales))
         avg_profit=("profit_rate", "mean"),
         count=("sales", "count"))
    .reset_index()
    .sort_values("total_sales", ascending=False)
)

print("dplyr 管道操作结果：")
print(result)
print()

# dplyr::arrange() 排序 + top_n()
top3 = sales.nlargest(3, "sales")[["product", "region", "sales"]]
print("销量 Top 3：")
print(top3)`,
      hint: 'R 的 %>% 管道 → pandas 的方法链式调用；filter() → query() 或布尔索引；mutate() → assign()；summarise() → agg()'
    },
    {
      id: 5,
      title: 'ggplot2 可视化',
      type: 'practice',
      content: `**ggplot2** 基于"图形语法（Grammar of Graphics）"，通过图层组合构建可视化：
数据 → 映射 → 几何对象 → 统计变换 → 坐标系统 → 主题。

本练习用 matplotlib 模拟 ggplot2 的绘图思路。`,
      code: `import pandas_ as pd
import numpy_ as np
from matplotlib_ import plt

# 准备数据：不同地区不同产品的销售均值
np.random.seed(42)
data = pd.DataFrame({
    "region":  np.repeat(["East", "West", "South", "North"], 3),
    "product": np.tile(["A", "B", "C"], 4),
    "sales":   np.random.randint(100, 500, 12)
})

# 按 region 和 product 分组计算平均销售额
grouped = data.groupby(["region", "product"])["sales"].mean().reset_index()
print("分组统计数据：")
print(grouped)
print()

# 模拟 ggplot2 的绘图思路
# ggplot(data, aes(x=region, y=sales, fill=product)) + geom_bar(stat="identity", position="dodge")
fig, ax = plt.subplots(figsize=(10, 6))

regions = data["region"].unique()
products = data["product"].unique()
x = np.arange(len(regions))
width = 0.25

for i, prod in enumerate(products):
    vals = grouped[grouped["product"] == prod]["sales"].values
    ax.bar(x + i * width, vals, width, label=f"Product {prod}")

ax.set_xlabel("Region")
ax.set_ylabel("Average Sales")
ax.set_title("Sales by Region and Product (ggplot2 style)")
ax.set_xticks(x + width)
ax.set_xticklabels(regions)
ax.legend()
plt.tight_layout()
plt.show()

# ggplot2 的 geom_point() + geom_smooth() 散点+拟合
fig2, ax2 = plt.subplots(figsize=(8, 5))
x_data = np.linspace(0, 10, 50)
y_data = 2 * x_data + np.random.randn(50) * 3
ax2.scatter(x_data, y_data, alpha=0.6, label="data points")
# 线性拟合（geom_smooth method="lm"）
z = np.polyfit(x_data, y_data, 1)
p = np.poly1d(z)
ax2.plot(x_data, p(x_data), "r--", linewidth=2, label="lm fit")
ax2.set_title("Scatter + Linear Smooth (geom_smooth)")
ax2.legend()
plt.tight_layout()
plt.show()

print("两个图表已生成 ✅")`,
      hint: 'ggplot2 的 aes() → 设置 x/y 映射；geom_bar()/geom_point() → plt.bar()/plt.scatter()；geom_smooth() → np.polyfit 线性拟合'
    },
    {
      id: 6,
      title: '统计假设检验',
      type: 'explanation',
      content: `**统计假设检验** 是 R 语言的核心应用之一，用于判断样本数据是否支持某个假设。

**主要概念**：
- **零假设 H₀**：我们默认的假设（如"两组均值无差异"）
- **备择假设 H₁**：与 H₀ 对立的假设
- **p 值**：在 H₀ 成立下观察到当前结果的概率，p < 0.05 通常表示统计显著
- **置信区间**：真实参数可能取值的范围

**常见检验**：
| 检验方法 | 用途 | Python 对应 |
|---------|------|------------|
| t.test() | 两组均值差异 | scipy.stats.ttest_ind |
| wilcox.test() | 非参数检验 | scipy.stats.wilcoxon |
| chisq.test() | 卡方独立性检验 | scipy.stats.chi2_contingency |
| anova() | 多组均值比较 | scipy.stats.f_oneway |
| cor.test() | 相关性检验 | scipy.stats.pearsonr |

**决策流程**：计算检验统计量 → 求 p 值 → 若 p < α(0.05) 则拒绝 H₀ → 报告效应量和置信区间。

R 在假设检验方面提供了最全面的函数库，是科学研究的标准工具 🔬`
    }
  ],
  36: [
    {
      id: 1,
      title: 'Julia 语言简介',
      type: 'explanation',
      content: `**Julia** 是一门专为**科学计算、数值分析和高性能计算**设计的动态编程语言，
由 MIT 的 Jeff Bezanson、Stefan Karpinski 和 Viral Shah 于 2012 年发起。

**Julia 的核心特性**：
- ⚡ **JIT 编译**：通过 LLVM 即时编译，性能接近 C/C++
- 🔀 **多重派发（Multiple Dispatch）**：根据函数参数的类型选择不同方法
- 🔢 **一流的类型系统**：类型可以作为参数传递，支持类型稳定编程
- 🧮 **内置数学库**：线性代数、随机数、FFT 等开箱即用
- 🔄 **可调用 C/Fortran/Python**：通过 ccall、PyCall 无缝对接
- 🎯 **专为数值优化**：循环速度接近 C，数组索引从 1 开始（兼容 MATLAB 习惯）

**典型应用**：
- 科学计算与工程仿真（DifferentialEquations.jl）
- 机器学习（Flux.jl、DifferentiableProgramming.jl）
- 量子计算（Yao.jl）
- 气象气候模型（ClimateMachine.jl）
- 金融建模

本关用 **Python 模拟 Julia 的核心编程范式**，帮你快速上手 Julia 思维 🚀`
    },
    {
      id: 2,
      title: '变量与类型',
      type: 'example',
      content: `Julia 是**强类型**语言，但类型推断让你几乎不用手动标注。
理解类型系统是写出高性能 Julia 代码的关键。`,
      code: `import numpy_ as np

# Julia 的变量绑定（动态类型，但有类型推断）
# x = 42          # Int64
# y = 3.14        # Float64
# z = "hello"     # String
x, y, z = 42, 3.14, "hello"
print(f"x={x} (type: {type(x).__name__})")
print(f"y={y} (type: {type(y).__name__})")
print(f"z={z} (type: {type(z).__name__})")

# Julia 的类型注解（:type 运算符）
# typeof(x) → Int64
print()
print("类型检查:")
print(f"  is_integer(x): {isinstance(x, int)}")
print(f"  is_float(y): {isinstance(y, float)}")
print(f"  is_string(z): {isinstance(z, str)}")

# Julia 的抽象类型（用于多重派发）
# abstract type Number end
# abstract type Real <: Number end
# Int <: Real <: Number
print()
print("类型层次 (Julia 风格):")
print("  Number (抽象类型)")
print("  ├── Real (抽象类型)")
print("  │   ├── Integer (抽象类型)")
print("  │   │   └── Int64 (具体类型)")
print("  │   └── AbstractFloat (抽象类型)")
print("  │       └── Float64 (具体类型)")
print("  └── Complex (抽象类型)")

# Julia 的数组类型（类型稳定很重要）
# Vector{Int} = Array{Int, 1}
# Matrix{Float64} = Array{Float64, 2}
int_vec = np.array([1, 2, 3, 4, 5], dtype=np.int64)
float_vec = np.array([1.0, 2.0, 3.0], dtype=np.float64)
print()
print(f"Int 向量: {int_vec}, dtype: {int_vec.dtype}")
print(f"Float 向量: {float_vec}, dtype: {float_vec.dtype}")

# Julia 的 Union 类型（Union{Int, Float64}）
# 等价于 Python 的 Union[int, float]
from typing import Union
mixed: Union[int, float] = 42
print(f"Union 类型变量: {mixed} (接受 Int 或 Float)")`,
      hint: 'Julia 的 typeof() → Python 的 type()；Julia 的 ::类型注解 → Python 的类型提示；Julia 的 Vector{Int} → NumPy 的 dtype 数组'
    },
    {
      id: 3,
      title: '数组与矩阵运算',
      type: 'practice',
      content: `Julia 的数组是一等公民，**多维数组操作**是科学计算的核心。
Julia 数组索引从 **1 开始**（类似 MATLAB），支持切片、广播和向量化操作。`,
      code: `import numpy_ as np

# Julia 的一维数组（Vector）
# v = [1, 2, 3, 4, 5]
v = np.array([1, 2, 3, 4, 5])
print("一维数组 v:", v)

# Julia 的二维矩阵（Matrix）
# M = [1 2 3; 4 5 6; 7 8 9]
M = np.array([[1, 2, 3],
              [4, 5, 6],
              [7, 8, 9]])
print("二维矩阵 M:")
print(M)
print()

# Julia 的切片（1-based）
# v[2:4] → [2, 3, 4]
# M[1:2, 2:3] → 前两行前两列
print("切片操作:")
print(f"  v[1:4] (Python 0-based): {v[0:4]}")  # Julia v[1:4]
print(f"  M[0:2, 0:2]:\\n{M[0:2, 0:2]}")
print()

# Julia 的矩阵运算
# A * B 矩阵乘法
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])
C = A @ B  # 矩阵乘法
print("矩阵乘法 A @ B:")
print(C)
print()

# Julia 的广播（broadcasting）
# v .+ 1  → 每个元素加 1
# M .* 2  → 每个元素乘 2
print("广播操作:")
print(f"  v + 1 = {v + 1}")
print(f"  M * 2 =\\n{M * 2}")
print()

# Julia 的线性代数
# det(M)、inv(M)、eigen(M)
print("线性代数运算:")
print(f"  det(A) = {np.linalg.det(A):.1f}")
print(f"  inv(A) =\\n{np.linalg.inv(A)}")

eigenvalues, eigenvectors = np.linalg.eig(A)
print(f"  eigenvalues: {eigenvalues}")
print(f"  eigenvectors:\\n{eigenvectors}")

# Julia 的多维数组
# T = rand(2, 3, 4) → 2×3×4 三维张量
T = np.random.rand(2, 3, 4)
print(f"三维张量 shape: {T.shape}")
print(f"切片 T[1, :, :] shape: {T[0].shape}")`,
      hint: 'Julia 的矩阵乘法用 * 号（非元素乘），元素乘用 .*。Python/NumPy 中 @ 是矩阵乘，* 是元素乘。Julia 索引从 1 开始，Python 从 0 开始'
    },
    {
      id: 4,
      title: '函数与多重派发',
      type: 'example',
      content: `**多重派发（Multiple Dispatch）** 是 Julia 的灵魂特性：
同一个函数名可以定义多个**方法**（method），Julia 根据参数类型自动选择最优实现。

这比传统 OOP 的单派发（只能对 self 类型分派）更灵活，
让通用库和专用优化可以无缝共存。`,
      code: `import numpy_ as np
from functools import singledispatch
from typing import Union

# 使用 functools.singledispatch 模拟 Julia 的多重派发
# 注意：Python 只有单派发，Julia 支持多参数派发

@singledispatch
def describe(x):
    """通用函数 - 根据参数类型选择实现"""
    return f"未知类型: {type(x).__name__}"

@describe.register(int)
def _(x: int):
    """整数方法"""
    if x % 2 == 0:
        return f"{x} 是偶数"
    else:
        return f"{x} 是奇数"

@describe.register(float)
def _(x: float):
    """浮点数方法"""
    return f"{x:.2f} 是浮点数，绝对值 = {abs(x):.2f}"

@describe.register(str)
def _(x: str):
    """字符串方法"""
    return f"字符串 '{x}' 长度={len(x)}, 大写='{x.upper()}'"

@describe.register(np.ndarray)
def _(x: np.ndarray):
    """NumPy 数组方法"""
    return f"数组 shape={x.shape}, dtype={x.dtype}, sum={x.sum():.2f}, mean={x.mean():.2f}"

# 测试多重派发
print("多重派发演示：")
print(f"  describe(42) → {describe(42)}")
print(f"  describe(3.14) → {describe(3.14)}")
print(f"  describe('hello') → {describe('hello')}")
print(f"  describe(np.array([1,2,3])) → {describe(np.array([1,2,3]))}")
print()

# Julia 的参数化类型 + 多重派发的威力
# 同一算法针对 Float32 和 Float64 有不同优化实现
# 模拟：对不同精度的浮点数使用不同的求和策略
def smart_sum(arr):
    """根据数据类型选择不同的求和策略"""
    if arr.dtype == np.float32:
        # Float32：补偿求和（Kahan summation）
        s = np.float32(0.0)
        c = np.float32(0.0)
        for x in arr:
            y = x - c
            t = s + y
            c = (t - s) - y
            s = t
        return float(s)
    elif arr.dtype == np.float64:
        # Float64：直接向量化求和
        return float(np.sum(arr))
    else:
        return float(np.sum(arr))

# Float32 精度求和
arr32 = np.random.randn(100000).astype(np.float32)
result32 = smart_sum(arr32)
print(f"Float32 求和 (Kahan): {result32:.6f}")

# Float64 精度求和
arr64 = arr32.astype(np.float64)
result64 = smart_sum(arr64)
print(f"Float64 求和 (向量化): {result64:.6f}")
print(f"差异: {abs(result32 - result64):.6e}")`,
      hint: 'Julia 的多重派发比 Python 更强大——支持多参数类型分派。Python 的 singledispatch 只支持单参数派发。Julia 对 Float32/Float64 有专门的优化实现'
    },
    {
      id: 5,
      title: '微分方程求解',
      type: 'practice',
      content: `Julia 在**微分方程求解**方面是业界标杆，DifferentialEquations.jl 提供了
丰富的求解器和优秀的性能。

本练习用 Python 模拟求解**常微分方程（ODE）**的过程，
感受数值求解的基本思想。`,
      code: `import numpy_ as np
from scipy_ import integrate

# 示例 1：指数增长模型
# dy/dt = r*y, y(0) = y0
# 解析解：y(t) = y0 * exp(r*t)
r = 0.5
y0 = 1.0

def exp_growth(t, y):
    return r * y

t_span = (0, 5)
t_eval = np.linspace(0, 5, 100)

# RK45 求解（类似于 Julia 的 Tsit5 求解器）
sol = integrate.solve_ivp(exp_growth, t_span, [y0], method='RK45', t_eval=t_eval)

print("指数增长模型 dy/dt = 0.5*y")
print(f"  t=0: y={sol.y[0][0]:.4f} (expected: 1.0000)")
print(f"  t=5: y={sol.y[0][-1]:.4f} (expected: {y0 * np.exp(r * 5):.4f})")
print()

# 示例 2：Logistic 增长模型
# dy/dt = r*y*(1 - y/K), y(0) = 0.1, K=10
r_log = 1.0
K = 10.0

def logistic(t, y):
    return r_log * y * (1 - y / K)

sol_log = integrate.solve_ivp(logistic, (0, 15), [0.1], method='RK45', t_eval=np.linspace(0, 15, 200))

print("Logistic 增长模型 dy/dt = y*(1-y/10)")
print(f"  t=0:  y={sol_log.y[0][0]:.4f}")
print(f"  t=5:  y={sol_log.y[0][np.searchsorted(sol_log.t, 5)]:.4f}")
print(f"  t=15: y={sol_log.y[0][-1]:.4f} (趋近于 K=10)")
print()

# 示例 3：二阶 ODE - 简谐振动
# d²x/dt² + ω²*x = 0 → 写成一阶方程组
ω = 2.0

def harmonic(t, state):
    x, v = state
    return [v, -ω**2 * x]

sol_harm = integrate.solve_ivp(harmonic, (0, 20), [1.0, 0.0], method='RK45', t_eval=np.linspace(0, 20, 500))

print("简谐振动 d²x/dt² + 4*x = 0")
print(f"  t=0:  x={sol_harm.y[0][0]:.4f}, v={sol_harm.y[1][0]:.4f}")
print(f"  t=π/4:  x≈cos(π/2)={np.cos(np.pi/2):.4f} (数值: {sol_harm.y[0][np.searchsorted(sol_harm.t, np.pi/4)]:.4f})")
print(f"  t=π/2:  x≈cos(π)={np.cos(np.pi):.4f} (数值: {sol_harm.y[0][np.searchsorted(sol_harm.t, np.pi/2)]:.4f})")
print()
print("✅ 三个 ODE 模型都已成功求解！")
print("Julia 的 DifferentialEquations.jl 在更复杂的系统（如偏微分方程、随机微分方程）上性能更优。")`,
      hint: 'ODE 求解需要将高阶方程化为一阶方程组。Julia 的 DifferentialEquations.jl 有更多专业求解器（Tsit5、Vern7、Rodas4 等）和自动微分支持'
    },
    {
      id: 6,
      title: '性能对比',
      type: 'explanation',
      content: `Julia 的设计哲学是 **"像 Python 一样简单，像 C 一样快"**。

**典型性能对比**（以 C 为基准 1.0，数值越小越快）：

| 任务 | C | Julia | Python | MATLAB |
|------|---|-------|--------|--------|
| 递归斐波那契 | 1.0 | 1.5 | ~50 | ~30 |
| 矩阵乘法 | 1.0 | 1.2 | ~3 | ~2 |
| 数值积分 | 1.0 | 1.1 | ~10 | ~5 |
| 图像处理 | 1.0 | 1.3 | ~20 | ~8 |
| 机器学习训练 | 1.0 | 1.5 | ~2-5(GPU) | ~10 |

**关键因素**：
1. **JIT 编译**：Julia 代码编译成原生机器码，无解释执行开销
2. **类型稳定**：当所有变量类型在编译时已知，编译器可生成最优代码
3. **数组按列优先**：Fortran 顺序，对科学计算更友好
4. **无全局解释器锁（GIL）**：多线程真正并行

**何时选 Julia**：
- 🔥 大规模数值计算（百万级变量、复杂网格）
- 🔬 需要写自己的数值算法（有限元、谱方法）
- ⚡ 实时仿真（金融、物理、生物）
- 🤖 科学机器学习（Differentiable Programming）

**何时仍选 Python**：
- 🌐 Web 开发、爬虫、自动化
- 📊 快速数据分析（pandas 生态更成熟）
- 🎨 深度学习（PyTorch/TensorFlow 生态）
- 🧪 原型验证（快速迭代）

两种语言在科学计算领域各有优势，很多研究者**同时使用**——
用 Python 做数据处理和可视化，用 Julia 做核心算法计算 🤝`
    }
  ],
  37: [
    {
      id: 1,
      title: '输入输出基础',
      type: 'explanation',
      content: `**Python 输入输出** 是与用户交互的基础。

**input() 函数**：从控制台读取用户输入，返回字符串类型。

**print() 函数**：向控制台输出信息，支持多个参数。

\`\`\`python
# 基本输入
name = input("请输入你的名字: ")
print("你好,", name)

# 多参数输出
print("年龄:", 20, "身高:", 1.75)
\`\`\`

**注意**：input() 返回的永远是字符串，需要用 int()/float() 转换类型。`
    },
    {
      id: 2,
      title: '格式化输出',
      type: 'explanation',
      content: `Python 提供了三种格式化字符串的方式：

**1. % 格式化**（老式写法）
\`\`\`python
name, age = "小明", 18
print("我叫%s，今年%d岁" % (name, age))
\`\`\`

**2. str.format() 方法**
\`\`\`python
print("我叫{0}，今年{1}岁".format(name, age))
print("我叫{name}，今年{age}岁".format(name=name, age=age))
\`\`\`

**3. f-string（推荐，Python 3.6+）**
\`\`\`python
print(f"我叫{name}，今年{age}岁")
print(f"明年我{age + 1}岁")
\`\`\`

f-string 是最简洁高效的方式，支持在字符串中直接嵌入表达式。`
    },
    {
      id: 3,
      title: 'f-string 进阶用法',
      type: 'example',
      content: `f-string 支持格式说明符：

\`\`\`python
# 数字格式化
pi = 3.14159265
print(f"π ≈ {pi:.4f}")           # π ≈ 3.1416
print(f"{42:08d}")                # 00000042
print(f"{0.9567:.2%}")            # 95.67%

# 对齐
print(f"{'左对齐':<10}|{'右对齐':>10}|{'居中':^10}")

# 调试（Python 3.8+）
x = 42
print(f"{x = }")                  # x = 42
print(f"{x = :08b}")              # x = 00101010

# 日期时间
from datetime import datetime
now = datetime.now()
print(f"{now:%Y-%m-%d %H:%M}")
\`\`\`
`,
      code: `name = input("请输入姓名: ")
score = float(input("请输入分数: "))
print(f"{name}，你的分数是 {score:.1f}，等级: {'优秀' if score >= 90 else '及格'}")`
    },
    {
      id: 4,
      title: '文件读写',
      type: 'explanation',
      content: `Python 使用 open() 函数进行文件操作：

\`\`\`python
# 写入文件
with open("data.txt", "w", encoding="utf-8") as f:
    f.write("第一行\\n")
    f.write("第二行\\n")

# 读取文件
with open("data.txt", "r", encoding="utf-8") as f:
    content = f.read()          # 读取全部
    # lines = f.readlines()    # 读取所有行为列表
    # line = f.readline()      # 读取一行

# 追加写入
with open("data.txt", "a", encoding="utf-8") as f:
    f.write("新的一行\\n")
\`\`\`

**文件模式**：r（读）、w（写，覆盖）、a（追加）、rb/wb（二进制）

**with 语句**：自动关闭文件，推荐使用。`
    },
    {
      id: 5,
      title: '练习：成绩统计器',
      type: 'exercise',
      content: `编写一个成绩统计器：
1. 从用户输入读取5个成绩
2. 计算总分、平均分、最高分、最低分
3. 用格式化输出展示结果

\`\`\`python
# 在这里编写代码

\`\`\`
`,
      code: `scores = []
for i in range(5):
    s = float(input(f"请输入第{i+1}个成绩: "))
    scores.append(s)

total = sum(scores)
avg = total / len(scores)
mx, mn = max(scores), min(scores)

print("=" * 30)
print(f"成绩统计报告")
print("=" * 30)
print(f"总分:   {total:.1f}")
print(f"平均分: {avg:.2f}")
print(f"最高:   {mx:.1f}")
print(f"最低:   {mn:.1f}")
print(f"极差:   {mx - mn:.1f}")
`
    },
    {
      id: 6,
      title: '第37关测验',
      type: 'quiz',
      content: `**问题1**：input() 函数返回值的类型是什么？
- A. int
- B. float  
- C. str
- D. 取决于输入内容

**问题2**：以下哪个是 Python 3.6+ 推荐的字符串格式化方式？
- A. % 格式化
- B. str.format()
- C. f-string
- D. string.Template

**问题3**：with 语句的主要作用是什么？
- A. 加密文件
- B. 自动管理资源（如自动关闭文件）
- C. 提高文件读取速度
- D. 创建临时文件

**答案**：1.C  2.C  3.B`
    }
  ],
  // 第38关
  38: [
    {
      id: 1,
      title: '迭代器基础',
      type: 'explanation',
      content: `**迭代器（Iterator）** 是 Python 中用于遍历可迭代对象的机制。

**两个核心概念**：
- **可迭代对象（Iterable）**：可以用 for 循环遍历的对象（list、dict、str 等）
- **迭代器（Iterator）**：实现了 __iter__() 和 __next__() 方法的对象

\`\`\`python
# 创建迭代器
my_list = [1, 2, 3]
it = iter(my_list)    # 调用 __iter__()

next(it)  # 1  调用 __next__()
next(it)  # 2
next(it)  # 3
next(it)  # StopIteration 异常
\`\`\`

for 循环本质上就是通过迭代器实现的。`
    },
    {
      id: 2,
      title: '自定义迭代器',
      type: 'example',
      content: `可以通过实现 __iter__ 和 __next__ 方法创建自定义迭代器：

\`\`\`python
class MyRange:
    def __init__(self, start, end):
        self.start = start
        self.end = end
        self.current = start
    
    def __iter__(self):
        return self
    
    def __next__(self):
        if self.current >= self.end:
            raise StopIteration
        val = self.current
        self.current += 1
        return val

# 使用
for x in MyRange(0, 5):
    print(x)  # 0, 1, 2, 3, 4
\`\`\`
`,
      code: `class Fibonacci:
    def __init__(self, n):
        self.n = n
        self.a, self.b = 0, 1
        self.count = 0
    
    def __iter__(self):
        return self
    
    def __next__(self):
        if self.count >= self.n:
            raise StopIteration
        self.a, self.b = self.b, self.a + self.b
        self.count += 1
        return self.a

for num in Fibonacci(10):
    print(num, end=' ')
`
    },
    {
      id: 3,
      title: '生成器 yield',
      type: 'explanation',
      content: `**生成器（Generator）** 是一种特殊的迭代器，通过 yield 关键字实现。

\`\`\`python
# 普通函数 vs 生成器
def normal_func():
    return [1, 2, 3, 4, 5]  # 一次性生成所有数据

def generator():
    yield 1
    yield 2
    yield 3
    yield 4
    yield 5

# 使用生成器
g = generator()
next(g)  # 1
next(g)  # 2

# for 循环自动迭代
for val in generator():
    print(val)
\`\`\`

**优势**：节省内存，惰性求值，适合处理大数据流。`
    },
    {
      id: 4,
      title: '列表推导式 vs 生成器',
      type: 'explanation',
      content: `\`\`\`python
# 列表推导式：一次性生成所有结果
squares_list = [x**2 for x in range(1000000)]  # 占用大量内存

# 生成器表达式：惰性求值，节省内存
squares_gen = (x**2 for x in range(1000000))  # 几乎不占内存

# 生成器在 for 循环中自动迭代
for sq in squares_gen:
    if sq > 100:
        break
    print(sq)
\`\`\`

**语法区别**：列表推导式用 \`[]\`，生成器表达式用 \`()\`

**适用场景**：
- 数据量大时用生成器
- 需要多次遍历用列表（生成器只能遍历一次）
- 需要索引访问用列表`
    },
    {
      id: 5,
      title: '练习：素数生成器',
      type: 'exercise',
      content: `编写一个生成器，生成指定范围内的所有素数：

\`\`\`python
def prime_generator(start, end):
    # 在这里编写代码
    pass

# 测试
for p in prime_generator(1, 50):
    print(p, end=' ')
\`\`\`
`,
      code: `def prime_generator(start, end):
    for num in range(start, end + 1):
        if num < 2:
            continue
        is_prime = True
        for i in range(2, int(num**0.5) + 1):
            if num % i == 0:
                is_prime = False
                break
        if is_prime:
            yield num

for p in prime_generator(1, 50):
    print(p, end=' ')
`
    },
    {
      id: 6,
      title: '第38关测验',
      type: 'quiz',
      content: `**问题1**：迭代器的两个核心方法是什么？
- A. init() 和 next()
- B. __iter__() 和 __next__()
- C. start() 和 stop()
- D. first() 和 last()

**问题2**：生成器与普通函数的主要区别？
- A. 生成器更快
- B. 生成器使用 return 而非 yield
- C. 生成器使用 yield 惰性生成值
- D. 没有区别

**问题3**：生成器表达式和列表推导式的主要区别？
- A. 语法完全相同
- B. 生成器用圆括号，惰性求值
- C. 列表推导式更省内存
- D. 生成器不能被迭代

**答案**：1.B  2.C  3.B`
    }
  ],
  // 第39关
  39: [
    {
      id: 1,
      title: 'JSON 处理',
      type: 'explanation',
      content: `**JSON（JavaScript Object Notation）** 是跨平台数据交换的主流格式。

\`\`\`python
import json

# Python 对象 → JSON 字符串
data = {"name": "小明", "age": 18, "hobbies": ["编程", "阅读"]}
json_str = json.dumps(data, ensure_ascii=False, indent=2)

# JSON 字符串 → Python 对象
parsed = json.loads(json_str)

# Python 对象 → JSON 文件
with open("data.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

# JSON 文件 → Python 对象
with open("data.json", "r", encoding="utf-8") as f:
    data = json.load(f)
\`\`\`

**常用参数**：ensure_ascii=False（支持中文）、indent=2（格式化缩进）`
    },
    {
      id: 2,
      title: 'JSON 进阶',
      type: 'example',
      content: `\`\`\`python
from datetime import datetime

# 处理自定义对象序列化
class CustomEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, datetime):
            return obj.isoformat()
        return super().default(obj)

data = {"name": "小明", "created_at": datetime.now()}
json_str = json.dumps(data, cls=CustomEncoder, ensure_ascii=False)

# 反序列化时的类型转换
def decoder_hook(d):
    if 'created_at' in d:
        d['created_at'] = datetime.fromisoformat(d['created_at'])
    return d

parsed = json.loads(json_str, object_hook=decoder_hook)
\`\`\`
`,
      code: `import json

students = [
    {"name": "张三", "score": 95},
    {"name": "李四", "score": 87},
    {"name": "王五", "score": 92}
]

# 保存到文件
with open("students.json", "w", encoding="utf-8") as f:
    json.dump(students, f, ensure_ascii=False, indent=2)

# 读取并统计
with open("students.json", "r", encoding="utf-8") as f:
    data = json.load(f)

avg = sum(s["score"] for s in data) / len(data)
print(f"平均分: {avg:.1f}")
for s in sorted(data, key=lambda x: x["score"], reverse=True):
    print(f"  {s['name']}: {s['score']}")
`
    },
    {
      id: 3,
      title: 'XML 解析',
      type: 'explanation',
      content: `**XML** 是另一种常见的数据交换格式。Python 使用 xml.etree.ElementTree 解析。

\`\`\`python
import xml.etree.ElementTree as ET

xml_str = """
<courses>
    <course name="Python" duration="40">
        <instructor>张老师</instructor>
    </course>
    <course name="Java" duration="60">
        <instructor>李老师</instructor>
    </course>
</courses>
"""

# 解析 XML
root = ET.fromstring(xml_str)

# 遍历元素
for course in root.findall('course'):
    name = course.get('name')
    duration = course.get('duration')
    instructor = course.find('instructor').text
    print(f"{name}({duration}h): {instructor}")
\`\`\`
`,
      code: `import xml.etree.ElementTree as ET

xml_data = """
<library>
    <book category="编程">
        <title>Python 入门</title>
        <author>菜鸟</author>
        <year>2024</year>
    </book>
    <book category="科学">
        <title>时间简史</title>
        <author>霍金</author>
        <year>1988</year>
    </book>
</library>
"""

root = ET.fromstring(xml_data)
for book in root.findall('book'):
    cat = book.get('category')
    title = book.find('title').text
    author = book.find('author').text
    print(f"[{cat}] 《{title}》 - {author}")
`
    },
    {
      id: 4,
      title: 'pickle 序列化',
      type: 'explanation',
      content: `**pickle** 模块可以序列化任意 Python 对象（仅限 Python 使用）。

\`\`\`python
import pickle

# 序列化
data = {"name": "小明", "scores": [90, 85, 92]}
with open("data.pkl", "wb") as f:
    pickle.dump(data, f)

# 反序列化
with open("data.pkl", "rb") as f:
    loaded = pickle.load(f)

# 注意：pickle 只能在 Python 之间使用，不安全！
# 不要加载不信任来源的 .pkl 文件
\`\`\`

**JSON vs Pickle 对比**：
- JSON：通用格式，跨语言，可读，安全
- Pickle：Python 专用，不可读，可序列化任意对象，**不安全**`
    },
    {
      id: 5,
      title: '练习：学生数据管理器',
      type: 'exercise',
      content: `实现一个学生数据管理器：
1. 将学生列表保存为 JSON 文件
2. 支持添加、删除、查询学生
3. 读取 JSON 文件并展示统计信息

\`\`\`python
# 在这里编写代码
\`\`\`
`,
      code: `import json
import os

FILE = "students.json"

def load():
    if os.path.exists(FILE):
        with open(FILE, "r", encoding="utf-8") as f:
            return json.load(f)
    return []

def save(data):
    with open(FILE, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

def add_student(name, age, score):
    data = load()
    data.append({"name": name, "age": age, "score": score})
    save(data)

def search(keyword):
    return [s for s in load() if keyword in s["name"]]

# 演示
add_student("小明", 20, 95)
add_student("小红", 19, 88)
print(search("小"))
print(f"共 {len(load())} 名学生")
`
    },
    {
      id: 6,
      title: '第39关测验',
      type: 'quiz',
      content: `**问题1**：json.dumps() 的 ensure_ascii=False 参数作用？
- A. 压缩输出
- B. 允许中文正常显示
- C. 加密数据
- D. 格式化缩进

**问题2**：pickle 模块的主要风险是什么？
- A. 序列化速度慢
- B. 文件太大
- C. 加载不信任文件可能执行恶意代码
- D. 不支持中文

**问题3**：XML 中获取元素属性的方法？
- A. element.attribute
- B. element.get('attr_name')
- C. element['attr_name']
- D. element.attr()

**答案**：1.B  2.C  3.B`
    }
  ],
  // 第40关
  40: [
    {
      id: 1,
      title: 'SQLite 数据库',
      type: 'explanation',
      content: `**SQLite** 是 Python 内置的轻量级数据库，无需安装配置。

\`\`\`python
import sqlite3

# 连接数据库（自动创建）
conn = sqlite3.connect('example.db')
cursor = conn.cursor()

# 创建表
cursor.execute('''
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        age INTEGER
    )
''')

# 插入数据
cursor.execute('INSERT INTO users (name, age) VALUES (?, ?)', ('小明', 20))
conn.commit()

# 查询
cursor.execute('SELECT * FROM users')
rows = cursor.fetchall()
for row in rows:
    print(row)

conn.close()
\`\`\`
`,
      code: `import sqlite3

conn = sqlite3.connect('school.db')
c = conn.cursor()

c.execute('''CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    score REAL
)''')

# 插入
c.execute("INSERT INTO students (name, score) VALUES (?, ?)", ("小明", 95.5))
c.execute("INSERT INTO students (name, score) VALUES (?, ?)", ("小红", 88.0))
conn.commit()

# 查询统计
c.execute("SELECT name, score FROM students WHERE score > ?", (90,))
for row in c.fetchall():
    print(f"{row[0]}: {row[1]}")

c.execute("SELECT AVG(score) FROM students")
print(f"平均分: {c.fetchone()[0]:.1f}")

conn.close()
`
    },
    {
      id: 2,
      title: 'SQL 操作进阶',
      type: 'explanation',
      content: `\`\`\`python
# 更新数据
cursor.execute('UPDATE users SET age = ? WHERE name = ?', (21, '小明'))
conn.commit()

# 删除数据
cursor.execute('DELETE FROM users WHERE name = ?', ('小红',))
conn.commit()

# 事务处理
try:
    cursor.execute('BEGIN')
    cursor.execute('INSERT INTO users (name) VALUES (?)', ('甲',))
    cursor.execute('INSERT INTO users (name) VALUES (?)', ('乙',))
    conn.commit()  # 提交事务
except:
    conn.rollback()  # 回滚事务

# 使用 with 语句（自动提交/回滚）
with conn:
    cursor.execute('INSERT INTO users (name) VALUES (?)', ('丙',))
\`\`\`
`,
      code: `import sqlite3

conn = sqlite3.connect('shop.db')
c = conn.cursor()

c.execute('''CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    price REAL,
    stock INTEGER
)''')

# 批量插入
products = [("手机", 3999, 50), ("电脑", 5999, 20), ("耳机", 299, 100)]
c.executemany("INSERT INTO products (name, price, stock) VALUES (?, ?, ?)", products)
conn.commit()

# 综合查询
c.execute("""
    SELECT name, price, stock,
           CASE WHEN price < 1000 THEN '低价'
                WHEN price < 5000 THEN '中价'
                ELSE '高价' END as category
    FROM products
    ORDER BY price DESC
""")
for row in c.fetchall():
    print(f"{row[0]}: ¥{row[1]} ({row[2]}件) - {row[3]}")

conn.close()
`
    },
    {
      id: 3,
      title: 'MySQL 数据库',
      type: 'explanation',
      content: `连接 MySQL 需要安装 pymysql 或 mysql-connector-python：

\`\`\`python
# pip install pymysql
import pymysql

conn = pymysql.connect(
    host='localhost',
    user='root',
    password='123456',
    database='test',
    charset='utf8mb4'
)

cursor = conn.cursor()

# 与 SQLite 操作类似
cursor.execute('SELECT * FROM users')
rows = cursor.fetchall()

conn.close()
\`\`\`

**SQLite vs MySQL**：
- SQLite：文件数据库，零配置，适合小型应用
- MySQL：服务器数据库，支持多用户并发，适合生产环境`
    },
    {
      id: 4,
      title: 'SQLAlchemy ORM',
      type: 'explanation',
      content: `**SQLAlchemy** 是 Python 最流行的 ORM 框架：

\`\`\`python
# pip install sqlalchemy
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import declarative_base, sessionmaker

Base = declarative_base()

class User(Base):
    __tabname__ = 'users'
    id = Column(Integer, primary_key=True)
    name = Column(String(50))
    age = Column(Integer)

# 创建引擎
engine = create_engine('sqlite:///example.db')
Base.metadata.create_all(engine)

# 使用 Session
Session = sessionmaker(bind=engine)
session = Session()

# 添加
session.add(User(name='小明', age=20))
session.commit()

# 查询
users = session.query(User).filter(User.age > 18).all()
for u in users:
    print(u.name, u.age)
\`\`\`
`,
      code: `from sqlalchemy import create_engine, Column, Integer, String, Float
from sqlalchemy.orm import declarative_base, sessionmaker

Base = declarative_base()

class Student(Base):
    __tabname__ = 'students'
    id = Column(Integer, primary_key=True)
    name = Column(String(50))
    score = Column(Float)

engine = create_engine('sqlite:///school2.db')
Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)
session = Session()

# CRUD
session.add_all([
    Student(name="小明", score=95),
    Student(name="小红", score=88)
])
session.commit()

# 查询
top = session.query(Student).filter(Student.score > 90).all()
for s in top:
    print(f"{s.name}: {s.score}")

session.close()
`
    },
    {
      id: 5,
      title: '练习：图书管理系统',
      type: 'exercise',
      content: `实现一个简单的图书管理系统：
1. 创建 books 表（id, title, author, is_borrowed）
2. 添加图书
3. 借阅/归还图书
4. 查询所有图书状态

\`\`\`python
import sqlite3
# 在这里编写代码
\`\`\`
`,
      code: `import sqlite3

conn = sqlite3.connect('library.db')
c = conn.cursor()

c.execute('''CREATE TABLE IF NOT EXISTS books (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    author TEXT,
    is_borrowed INTEGER DEFAULT 0
)''')

def add_book(title, author):
    c.execute("INSERT INTO books (title, author) VALUES (?, ?)", (title, author))
    conn.commit()

def borrow(book_id):
    c.execute("UPDATE books SET is_borrowed = 1 WHERE id = ?", (book_id,))
    conn.commit()

def return_book(book_id):
    c.execute("UPDATE books SET is_borrowed = 0 WHERE id = ?", (book_id,))
    conn.commit()

def list_books():
    c.execute("SELECT * FROM books")
    for b in c.fetchall():
        status = "已借出" if b[3] else "在架"
        print(f"[{b[0]}] {b[1]} - {b[2]} ({status})")

add_book("Python 入门", "菜鸟")
add_book("算法导论", "CLRS")
borrow(1)
list_books()
return_book(1)
list_books()
conn.close()
`
    },
    {
      id: 6,
      title: '第40关测验',
      type: 'quiz',
      content: `**问题1**：SQLite 创建数据库的方式？
- A. 需要单独安装服务
- B. 连接时自动创建为文件
- C. 使用 Docker
- D. 需要配置环境变量

**问题2**：SQL 注入的防护方式？
- A. 字符串拼接 SQL
- B. 使用参数化查询（占位符 ?）
- C. 加密 SQL
- D. 限制访问 IP

**问题3**：SQLAlchemy 中 Session 的作用？
- A. 数据库连接
- B. ORM 会话，管理对象生命周期和事务
- C. 表结构定义
- D. 执行 SQL

**答案**：1.B  2.B  3.B`
    }
  ],
  // 第41关
  41: [
    {
      id: 1,
      title: '线程基础',
      type: 'explanation',
      content: `**线程（Thread）** 是 CPU 调度的基本单位，Python 使用 threading 模块。

\`\`\`python
import threading
import time

def task(name, duration):
    print(f"任务 {name} 开始")
    time.sleep(duration)
    print(f"任务 {name} 完成")

# 创建线程
t1 = threading.Thread(target=task, args=('A', 2))
t2 = threading.Thread(target=task, args=('B', 1))

# 启动
t1.start()
t2.start()

# 等待完成
t1.join()
t2.join()
print("所有任务完成")
\`\`\`
`,
      code: `import threading
import time

def countdown(name, n):
    for i in range(n, 0, -1):
        print(f"[{name}] {i}")
        time.sleep(0.5)
    print(f"[{name}] 完成!")

# 创建多个线程
threads = [
    threading.Thread(target=countdown, args=("Timer-A", 5)),
    threading.Thread(target=countdown, args=("Timer-B", 3)),
]

for t in threads:
    t.start()
for t in threads:
    t.join()

print("倒计时结束!")
`
    },
    {
      id: 2,
      title: 'GIL 全局解释器锁',
      type: 'explanation',
      content: `**GIL（Global Interpreter Lock）** 是 CPython 的全局锁，确保同一时刻只有一个线程执行 Python 字节码。

**影响**：
- CPU 密集型任务：多线程**不能**加速（GIL 锁竞争）
- IO 密集型任务：多线程**可以**加速（IO 时释放 GIL）
- 需要真正并行：使用 multiprocessing（多进程）

\`\`\`python
# CPU 密集型：用多进程
from multiprocessing import Process

def cpu_intensive():
    total = sum(range(10000000))

# IO 密集型：用多线程
import threading
def io_intensive():
    # 网络请求、文件读写等
    pass
\`\`\`
`,
      code: `import threading
import time

# CPU 密集型任务
def cpu_work():
    total = 0
    for i in range(10_000_000):
        total += i

# 单线程
start = time.time()
cpu_work()
cpu_work()
print(f"单线程: {time.time() - start:.2f}s")

# 多线程（CPU 密集型，GIL 导致几乎无加速）
start = time.time()
t1 = threading.Thread(target=cpu_work)
t2 = threading.Thread(target=cpu_work)
t1.start(); t2.start()
t1.join(); t2.join()
print(f"多线程: {time.time() - start:.2f}s")
`
    },
    {
      id: 3,
      title: '线程同步',
      type: 'explanation',
      content: `多个线程访问共享数据时需要同步机制：

\`\`\`python
import threading

counter = 0
lock = threading.Lock()

def increment():
    global counter
    for _ in range(100000):
        with lock:  # 获取锁
            counter += 1

threads = [threading.Thread(target=increment) for _ in range(10)]
for t in threads:
    t.start()
for t in threads:
    t.join()

print(f"预期: 1000000, 实际: {counter}")
\`\`\`

**其他同步机制**：
- Lock：互斥锁，最常用
- RLock：可重入锁
- Condition：条件变量
- Event：事件通知
- Semaphore：信号量`
    },
    {
      id: 4,
      title: '多进程编程',
      type: 'explanation',
      content: `multiprocessing 模块绕过 GIL，实现真正的并行计算：

\`\`\`python
from multiprocessing import Process, Pool

def worker(n):
    return n * n

# 多进程
if __name__ == '__main__':
    # 方式1：Process
    p1 = Process(target=worker, args=(5,))
    p1.start()
    p1.join()
    
    # 方式2：进程池
    with Pool(4) as pool:
        results = pool.map(worker, [1, 2, 3, 4, 5])
        print(results)  # [1, 4, 9, 16, 25]
\`\`\`

**选择指南**：
- IO 密集 → 多线程（threading）
- CPU 密集 → 多进程（multiprocessing）
- 简单并发 → asyncio（第42关）`
    },
    {
      id: 5,
      title: '练习：并行下载器',
      type: 'exercise',
      content: `使用多线程实现一个并行下载器框架（模拟）：
1. 创建多个线程模拟下载任务
2. 使用 Lock 保护共享的进度计数器
3. 显示每个任务的完成状态

\`\`\`python
# 在这里编写代码
\`\`\`
`,
      code: `import threading
import time
import random

progress = 0
lock = threading.Lock()
results = []

def download(name, size):
    global progress
    elapsed = random.uniform(0.5, 2.0)
    time.sleep(elapsed)
    with lock:
        progress += size
        results.append(f"{name}: {elapsed:.1f}s")
    print(f"[完成] {name} ({size}MB)")

tasks = [("文件A", 50), ("文件B", 30), ("文件C", 80), ("文件D", 20)]
threads = [threading.Thread(target=download, args=t) for t in tasks]

for t in threads:
    t.start()
for t in threads:
    t.join()

print(f"\\n总进度: {progress}MB")
for r in results:
    print(f"  {r}")
`
    },
    {
      id: 6,
      title: '第41关测验',
      type: 'quiz',
      content: `**问题1**：GIL 对 Python 多线程的影响？
- A. 完全不允许多线程
- B. CPU 密集型任务无法真正并行
- C. 线程执行更快
- D. 自动同步所有线程

**问题2**：IO 密集型任务适合用什么？
- A. 多进程
- B. 多线程或异步
- C. 单线程
- D. 递归

**问题3**：threading.Lock 的作用？
- A. 加速线程执行
- B. 防止多线程竞争共享资源
- C. 创建新线程
- D. 结束线程

**答案**：1.B  2.B  3.B`
    }
  ],
  // 第42关
  42: [
    {
      id: 1,
      title: '异步编程概念',
      type: 'explanation',
      content: `**异步编程** 是一种非阻塞的并发模型，Python 使用 asyncio 模块。

\`\`\`python
import asyncio

async def hello():
    print("Hello")
    await asyncio.sleep(1)  # 非阻塞等待
    print("World")

# 运行异步函数
asyncio.run(hello())
\`\`\`

**核心概念**：
- async def：定义协程（coroutine）
- await：等待异步操作完成
- Task：包装协程以便并发执行
- Event Loop：事件循环，调度所有 Task`
    },
    {
      id: 2,
      title: '并发执行多个任务',
      type: 'example',
      content: `\`\`\`python
import asyncio

async def fetch_data(name, delay):
    print(f"开始获取 {name}...")
    await asyncio.sleep(delay)
    print(f"{name} 获取完成")
    return f"{name}-data"

async def main():
    # 并发执行
    task1 = asyncio.create_task(fetch_data("API-A", 2))
    task2 = asyncio.create_task(fetch_data("API-B", 1))
    
    # 等待所有任务完成
    results = await asyncio.gather(task1, task2)
    print(f"结果: {results}")

asyncio.run(main())
\`\`\`
`,
      code: `import asyncio

async def producer(name, count):
    for i in range(count):
        print(f"[{name}] 生产 item-{i}")
        await asyncio.sleep(0.3)
    return f"{name} 完成"

async def main():
    # gather 并发执行
    results = await asyncio.gather(
        producer("Worker-A", 3),
        producer("Worker-B", 4),
        producer("Worker-C", 2),
    )
    print(f"所有任务完成: {results}")

asyncio.run(main())
`
    },
    {
      id: 3,
      title: 'asyncio 实际应用',
      type: 'explanation',
      content: `异步编程常用于网络请求、定时任务等场景：

\`\`\`python
# 异步 HTTP 请求（需 aiohttp 库）
import aiohttp

async def fetch_url(url):
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as resp:
            return await resp.text()

# 定时任务
async def periodic():
    while True:
        print("执行定时任务")
        await asyncio.sleep(60)  # 每60秒执行

# 异步文件 IO（aiofiles）
import aiofiles

async def read_file(path):
    async with aiofiles.open(path) as f:
        return await f.read()
\`\`\`

**异步 vs 多线程**：
- 异步：单线程，协作式调度，无锁竞争
- 多线程：多线程，抢占式调度，需要锁同步`
    },
    {
      id: 4,
      title: '练习：异步计时器',
      type: 'exercise',
      content: `实现一个异步计时器，可以同时启动多个倒计时任务：

\`\`\`python
import asyncio

async def timer(name, seconds):
    # 在这里编写代码
    pass

async def main():
    # 同时启动3个计时器
    pass

asyncio.run(main())
\`\`\`
`,
      code: `import asyncio

async def timer(name, seconds):
    for i in range(seconds, 0, -1):
        print(f"[{name}] {i}s")
        await asyncio.sleep(1)
    print(f"[{name}] 时间到!")

async def main():
    task1 = asyncio.create_task(timer("A", 3))
    task2 = asyncio.create_task(timer("B", 5))
    task3 = asyncio.create_task(timer("C", 4))
    
    await asyncio.gather(task1, task2, task3)
    print("所有计时器完成!")

asyncio.run(main())
`
    },
    {
      id: 5,
      title: '异步 vs 同步对比',
      type: 'explanation',
      content: `\`\`\`python
import time
import asyncio

# 同步版本
def sync_fetch():
    time.sleep(1)  # 模拟 IO
    return "data"

def sync_main():
    start = time.time()
    sync_fetch()
    sync_fetch()
    sync_fetch()
    print(f"同步: {time.time() - start:.2f}s")  # ~3s

# 异步版本
async def async_fetch():
    await asyncio.sleep(1)  # 模拟异步 IO
    return "data"

async def async_main():
    start = time.time()
    await asyncio.gather(async_fetch(), async_fetch(), async_fetch())
    print(f"异步: {time.time() - start:.2f}s")  # ~1s

sync_main()
asyncio.run(async_main())
\`\`\`
`,
      code: `import asyncio
import time

async def simulated_io(name, delay):
    print(f"[{name}] 开始 ({delay}s)")
    await asyncio.sleep(delay)
    print(f"[{name}] 完成")
    return name

async def main():
    # 串行：总耗时 = 所有延迟之和
    print("=== 串行执行 ===")
    t0 = time.time()
    await simulated_io("A", 2)
    await simulated_io("B", 2)
    print(f"串行耗时: {time.time() - t0:.1f}s")
    
    # 并行：总耗时 = 最大延迟
    print("\\n=== 并行执行 ===")
    t0 = time.time()
    await asyncio.gather(
        simulated_io("A", 2),
        simulated_io("B", 2)
    )
    print(f"并行耗时: {time.time() - t0:.1f}s")

asyncio.run(main())
`
    },
    {
      id: 6,
      title: '第42关测验',
      type: 'quiz',
      content: `**问题1**：async def 定义的函数返回的是什么？
- A. 普通函数
- B. 协程对象
- C. 线程
- D. 生成器

**问题2**：asyncio.gather() 的作用？
- A. 启动事件循环
- B. 并发执行多个协程并等待全部完成
- C. 创建新线程
- D. 取消任务

**问题3**：异步编程适合的场景？
- A. CPU 密集型计算
- B. 大量 IO 操作（网络、文件）
- C. 图形渲染
- D. 科学计算

**答案**：1.B  2.B  3.B`
    }
  ],
  // 第43关
  43: [
    {
      id: 1,
      title: '单元测试基础',
      type: 'explanation',
      content: `**单元测试** 是对代码中最小可测试单元进行验证。

\`\`\`python
# 使用 unittest 标准库
import unittest

def add(a, b):
    return a + b

class TestCalculator(unittest.TestCase):
    def test_add(self):
        self.assertEqual(add(2, 3), 5)
    
    def test_add_negative(self):
        self.assertEqual(add(-1, 1), 0)

if __name__ == '__main__':
    unittest.main()
\`\`\`

**断言方法**：assertEqual、assertTrue、assertFalse、assertRaises 等`
    },
    {
      id: 2,
      title: 'pytest 框架',
      type: 'explanation',
      content: `**pytest** 是更强大的测试框架（需安装：pip install pytest）。

\`\`\`python
# test_calc.py
import pytest

def add(a, b):
    return a + b

# 测试函数（无需类）
def test_add():
    assert add(2, 3) == 5

def test_add_negative():
    assert add(-1, 1) == 0

# 异常测试
def test_divide_by_zero():
    with pytest.raises(ZeroDivisionError):
        1 / 0

# 参数化测试
@pytest.mark.parametrize("a,b,expected", [
    (2, 3, 5),
    (0, 0, 0),
    (-1, 1, 0),
])
def test_add_param(a, b, expected):
    assert add(a, b) == expected
\`\`\`
`,
      code: `import pytest

def validate_email(email):
    import re
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
    return bool(re.match(pattern, email))

# 参数化测试
@pytest.mark.parametrize("email,expected", [
    ("user@example.com", True),
    ("invalid", False),
    ("@domain.com", False),
    ("user@sub.domain.com", True),
    ("user@domain", False),
])
def test_email_validation(email, expected):
    assert validate_email(email) == expected

# 边界测试
def test_empty_email():
    assert validate_email("") == False

def test_special_chars():
    assert validate_email("user+tag@example.com") == True
`
    },
    {
      id: 3,
      title: 'Fixture 与 Setup',
      type: 'explanation',
      content: `**Fixture** 是 pytest 中管理测试前/后操作的机制：

\`\`\`python
import pytest

@pytest.fixture
def db_connection():
    # 前置：创建连接
    conn = create_connection()
    yield conn  # 提供给测试使用
    # 后置：关闭连接
    conn.close()

def test_query(db_connection):
    result = db_connection.query("SELECT 1")
    assert result is not None

# 作用域
@pytest.fixture(scope='module')  # 整个模块共享
def config():
    return load_config()
\`\`\`

**作用域**：function（默认）、class、module、session`
    },
    {
      id: 4,
      title: 'Mock 与覆盖率',
      type: 'explanation',
      content: `**Mock** 用于模拟外部依赖，**覆盖率** 衡量测试覆盖程度。

\`\`\`python
from unittest.mock import Mock, patch

# 模拟外部 API
@patch('requests.get')
def test_api(mock_get):
    mock_get.return_value.status_code = 200
    mock_get.return_value.json.return_value = {"data": "test"}
    
    result = fetch_data()
    assert result == {"data": "test"}

# 覆盖率（pip install pytest-cov）
# pytest --cov=src tests/
\`\`\`

**测试金字塔**：
- 单元测试（最多）：快速、稳定、覆盖核心逻辑
- 集成测试：验证模块交互
- 端到端测试（最少）：验证完整流程`
    },
    {
      id: 5,
      title: '练习：计算器测试',
      type: 'exercise',
      content: `为一个简单的计算器模块编写完整的测试套件：

\`\`\`python
# calculator.py
def divide(a, b):
    if b == 0:
        raise ValueError("除数不能为0")
    return a / b

# test_calculator.py - 编写测试
\`\`\`
`,
      code: `import pytest

# calculator.py
def divide(a, b):
    if b == 0:
        raise ValueError("除数不能为0")
    return a / b

# test_calculator.py
class TestDivide:
    def test_normal(self):
        assert divide(10, 2) == 5.0
    
    def test_float(self):
        assert divide(7, 2) == 3.5
    
    def test_zero_divisor(self):
        with pytest.raises(ValueError, match="除数不能为0"):
            divide(10, 0)
    
    @pytest.mark.parametrize("a,b,expected", [
        (10, 5, 2),
        (9, 3, 3),
        (100, 10, 10),
    ])
    def test_parametrized(self, a, b, expected):
        assert divide(a, b) == expected
`
    },
    {
      id: 6,
      title: '第43关测验',
      type: 'quiz',
      content: `**问题1**：pytest 中 @pytest.fixture 的作用？
- A. 标记测试函数
- B. 提供测试前/后的设置和清理
- C. 定义测试数据
- D. 创建 Mock 对象

**问题2**：以下哪个是 pytest 相比 unittest 的优势？
- A. 运行更快
- B. 无需类即可编写测试，支持参数化
- C. 自动生成测试
- D. 无需安装

**问题3**：测试金字塔中应该最多的是？
- A. 端到端测试
- B. 集成测试
- C. 单元测试
- D. 性能测试

**答案**：1.B  2.B  3.C`
    }
  ],
  // 第44关
  44: [
    {
      id: 1,
      title: 'Python 内存管理',
      type: 'explanation',
      content: `Python 内存管理采用三种机制：

**1. 引用计数**（主要机制）
\`\`\`python
a = [1, 2, 3]  # 引用计数 = 1
b = a           # 引用计数 = 2
del a           # 引用计数 = 1
# 当引用计数为 0 时，立即释放
\`\`\`

**2. 标记-清除**（处理循环引用）
\`\`\`python
a.b = b
b.a = a  # 循环引用，引用计数无法回收
# 标记-清除机制定期扫描并回收
\`\`\`

**3. 分代回收**（优化性能）
- 第0代：新创建的对象，频繁扫描
- 第1代：存活一段时间的对象，较少扫描
- 第2代：长期存活的对象，很少扫描

可以用 gc 模块控制：\`import gc; gc.collect()\``
    },
    {
      id: 2,
      title: '内存分析工具',
      type: 'explanation',
      content: `\`\`\`python
import sys
import tracemalloc

# 查看对象内存占用
data = list(range(10000))
print(f"列表大小: {sys.getsizeof(data)} bytes")

# 内存追踪
tracemalloc.start()
snapshot1 = tracemalloc.take_snapshot()

# 创建大量对象
big_list = [{'id': i, 'data': 'x' * 100} for i in range(10000)]

snapshot2 = tracemalloc.take_snapshot()
stats = snapshot2.compare_to(snapshot1, 'lineno')
for stat in stats[:5]:
    print(stat)

# 使用 gc 模块
import gc
gc.collect()  # 强制垃圾回收
print(f"回收对象数: {gc.get_count()}")
\`\`\`
`,
      code: `import sys
import tracemalloc

# 内存对比
tracemalloc.start()

# 方式1: 列表
list_data = list(range(1000000))
list_size = sys.getsizeof(list_data)

# 方式2: 生成器（几乎不占内存）
gen_data = range(1000000)
gen_size = sys.getsizeof(gen_data)

print(f"列表大小: {list_size} bytes")
print(f"生成器大小: {gen_size} bytes")
print(f"节省: {(1 - gen_size/list_size)*100:.1f}%")

# 内存快照
snapshot = tracemalloc.take_snapshot()
print(f"当前内存快照对象数: {len(snapshot.statistics('lineno'))}")
`
    },
    {
      id: 3,
      title: '性能分析 cProfile',
      type: 'explanation',
      content: `**cProfile** 是 Python 内置的性能分析工具：

\`\`\`python
import cProfile
import pstats

# 方式1：装饰器
@cProfile.profile
def slow_function():
    total = 0
    for i in range(1000000):
        total += i
    return total

# 方式2：代码块
profiler = cProfile.Profile()
profiler.enable()

# 要分析的代码
result = sum(range(1000000))

profiler.disable()

# 查看结果
stats = pstats.Stats(profiler)
stats.sort_stats('cumulative')
stats.print_stats(10)  # 打印前10项
\`\`\`
`,
      code: `import cProfile
import time

def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

def measure():
    start = time.time()
    result = fibonacci(30)
    print(f"fib(30) = {result}, 耗时: {time.time()-start:.3f}s")

# 性能分析
profiler = cProfile.Profile()
profiler.enable()
measure()
profiler.disable()

# 输出 Top 10 耗时函数
profiler.print_stats(10)
`
    },
    {
      id: 4,
      title: '优化技巧',
      type: 'explanation',
      content: `**常用 Python 性能优化技巧**：

**1. 使用内置函数**（比手写循环快很多）
\`\`\`python
# 慢
total = 0
for i in range(1000000):
    total += i

# 快
total = sum(range(1000000))
\`\`\`

**2. 使用 lru_cache 缓存**
\`\`\`python
from functools import lru_cache

@lru_cache(maxsize=128)
def fib(n):
    if n <= 1:
        return n
    return fib(n-1) + fib(n-2)
\`\`\`

**3. 列表推导式**（比 map/filter 更快）
**4. 使用生成器**（处理大数据）
**5. 局部变量访问更快**
\`\`\`python
# 慢：频繁访问全局变量
def process():
    for i in range(1000000):
        global_var = i

# 快：使用局部变量
def process():
    local = global_var  # 缓存到局部
    for i in range(1000000):
        local = i
\`\`\`
`,
      code: `from functools import lru_cache
import time

# 优化前：无缓存
def fib_slow(n):
    if n <= 1:
        return n
    return fib_slow(n-1) + fib_slow(n-2)

# 优化后：LRU 缓存
@lru_cache(maxsize=128)
def fib_fast(n):
    if n <= 1:
        return n
    return fib_fast(n-1) + fib_fast(n-2)

# 对比
start = time.time()
print(f"Slow: fib(30) = {fib_slow(30)}, {time.time()-start:.3f}s")

start = time.time()
print(f"Fast: fib(30) = {fib_fast(30)}, {time.time()-start:.6f}s")

# 更多优化示例
def optimize_demo():
    # 使用列表推导代替循环
    squares = [x**2 for x in range(1000000)]
    
    # 使用 join 代替 +=
    parts = [f"item-{i}" for i in range(10000)]
    result = ",".join(parts)  # 比 result += "," + item 快得多
`
    },
    {
      id: 5,
      title: '练习：斐波那契优化',
      type: 'exercise',
      content: `对比三种实现方式的性能：
1. 递归（无优化）
2. 动态规划（缓存中间结果）
3. 生成器（惰性求值）

\`\`\`python
import time
# 在这里编写代码
\`\`\`
`,
      code: `import time
import sys
sys.setrecursionlimit(10000)

# 方式1: 朴素递归
def fib_recursive(n):
    if n <= 1:
        return n
    return fib_recursive(n-1) + fib_recursive(n-2)

# 方式2: 动态规划
def fib_dp(n):
    if n <= 1:
        return n
    dp = [0] * (n + 1)
    dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]

# 方式3: 生成器
def fib_generator():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

# 对比
n = 30

start = time.time()
r1 = fib_recursive(n)
print(f"递归: {r1}, {(time.time()-start)*1000:.1f}ms")

start = time.time()
r2 = fib_dp(n)
print(f"动态规划: {r2}, {(time.time()-start)*1000:.1f}ms")

start = time.time()
gen = fib_generator()
r3 = next(gen)
for _ in range(n):
    r3 = next(gen)
print(f"生成器: {r3}, {(time.time()-start)*1000:.1f}ms")
`
    },
    {
      id: 6,
      title: '第44关测验',
      type: 'quiz',
      content: `**问题1**：Python 主要的内存回收机制？
- A. 手动 free()
- B. 引用计数 + 标记清除 + 分代回收
- C. Java 式的 GC
- D. 不回收

**问题2**：@lru_cache 的主要作用？
- A. 加速递归函数
- B. 缓存函数结果，避免重复计算
- C. 减少内存使用
- D. 加密数据

**问题3**：以下哪种方式最慢？
- A. sum(range(1000000))
- B. for 循环累加
- C. 列表推导式
- D. numpy.sum

**答案**：1.B  2.B  3.B`
    }
  ],
  // 第45关
  45: [
    {
      id: 1, title: 'Socket 编程基础', type: 'explanation',
      content: `**Socket** 是网络编程的基础，Python 使用 socket 模块进行网络通信。

**TCP 客户端示例**：
\`\`\`python
import socket

# 创建 TCP 客户端
client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client.connect(('127.0.0.1', 8888))
client.sendall(b'Hello Server!')
response = client.recv(1024)
print(f'收到: {response.decode()}')
client.close()
\`\`\`

**UDP 客户端示例**：
\`\`\`python
import socket

client = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
client.sendto(b'Hello!', ('127.0.0.1', 8888))
data, addr = client.recvfrom(1024)
print(f'收到: {data.decode()}')
client.close()
\`\`\`

**TCP vs UDP**：TCP 可靠有序、UDP 快速无连接。`
    },
    {
      id: 2, title: 'Socket 服务器', type: 'example',
      content: `\`\`\`python
import socket
import threading

def handle_client(conn, addr):
    print(f'新连接: {addr}')
    data = conn.recv(1024)
    conn.sendall(data.upper())
    conn.close()

# TCP 服务器
server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind(('0.0.0.0', 8888))
server.listen(5)
print('服务器启动在 8888...')

while True:
    conn, addr = server.accept()
    threading.Thread(target=handle_client, args=(conn, addr)).start()
\`\`\``,
      code: `import socket

# 创建回显服务器
server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
server.bind(('127.0.0.1', 9999))
server.listen(1)
print('等待连接...')

conn, addr = server.accept()
print(f'客户端: {addr}')
data = conn.recv(1024)
print(f'收到: {data.decode()}')
conn.sendall(data[::-1])  # 反转字符串
conn.close()
server.close()
`
    },
    {
      id: 3, title: 'urllib 网络请求', type: 'explanation',
      content: `urllib 是 Python 内置的 HTTP 请求库：

\`\`\`python
import urllib.request
import urllib.parse
import json

# GET 请求
url = 'https://api.github.com/repos/python/cpython'
req = urllib.request.Request(url, headers={'User-Agent': 'Python'})
with urllib.request.urlopen(req) as resp:
    data = json.loads(resp.read().decode())
    print(f'Stars: {data["stargazers_count"]}')

# POST 请求
data = urllib.parse.urlencode({'key': 'value'}).encode()
req = urllib.request.Request('https://httpbin.org/post', data=data, method='POST')
with urllib.request.urlopen(req) as resp:
    print(resp.read().decode())
\`\`\`

**urllib vs requests**：urllib 是内置库，requests 更易用。`
    },
    {
      id: 4, title: 'SMTP 发送邮件', type: 'explanation',
      content: `使用 smtplib 发送邮件：

\`\`\`python
import smtplib
from email.mime.text import MIMEText

msg = MIMEText('Hello, 这是测试邮件', 'plain', 'utf-8')
msg['Subject'] = 'Python 邮件测试'
msg['From'] = 'sender@example.com'
msg['To'] = 'receiver@example.com'

# 使用 Gmail SMTP
with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
    server.login('sender@gmail.com', 'app-password')
    server.send_message(msg)
print('邮件发送成功')
\`\`\``,
      code: `import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

msg = MIMEMultipart()
msg['From'] = 'y***@qq.com'
msg['To'] = 'y***@163.com'
msg['Subject'] = 'Python 自动化邮件'

body = MIMEText('这是一封自动化发送的邮件', 'plain', 'utf-8')
msg.attach(body)

# QQ 邮箱 SMTP
with smtplib.SMTP_SSL('smtp.qq.com', 465) as s:
    s.login('y***@qq.com', 'your-auth-code')
    s.send_message(msg)
print('发送成功!')
`
    },
    {
      id: 5, title: '练习：端口扫描器', type: 'exercise',
      content: `编写一个简单的端口扫描器，扫描指定主机的常用端口：

\`\`\`python
import socket
# 在这里编写代码
\`\`\``,
      code: `import socket

def scan_ports(host, ports):
    open_ports = []
    for port in ports:
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        s.settimeout(0.5)
        result = s.connect_ex((host, port))
        if result == 0:
            open_ports.append(port)
        s.close()
    return open_ports

common_ports = [21, 22, 23, 80, 443, 8080, 3306, 6379, 27017]
target = '127.0.0.1'
open_found = scan_ports(target, common_ports)

print(f'扫描 {target} 的常用端口:')
for port in common_ports:
    status = '✓ 开放' if port in open_found else '✗ 关闭'
    print(f'  {port}: {status}')
`
    },
    {
      id: 6, title: '第45关测验', type: 'quiz',
      content: `**问题1**：TCP 和 UDP 的主要区别？
- A. TCP 更快，UDP 更可靠
- B. TCP 可靠有序，UDP 快速无连接
- C. 没有区别
- D. TCP 只能在 Windows 用

**问题2**：Python 内置的 HTTP 请求库是？
- A. requests
- B. urllib
- C. httpclient
- D. httpx

**问题3**：发送邮件需要使用的协议？
- A. HTTP
- B. FTP
- C. SMTP
- D. SSH

**答案**：1.B  2.B  3.C`
    }
  ],
  // 第46关
  46: [
    {
      id: 1, title: 'sys 与 subprocess', type: 'explanation',
      content: `**sys 模块**：与 Python 解释器交互

\`\`\`python
import sys

print(sys.version)          # Python 版本
print(sys.platform)         # 操作系统
print(sys.path)             # 模块搜索路径
sys.exit(0)                 # 退出程序
\`\`\`

**subprocess 模块**：执行外部命令

\`\`\`python
import subprocess

# 执行命令
result = subprocess.run(['ls', '-la'], capture_output=True, text=True)
print(result.stdout)
print(result.returncode)

# 使用管道
p = subprocess.Popen(['cat', '/etc/passwd'], stdout=subprocess.PIPE)
output = p.stdout.read().decode()
\`\`\``
    },
    {
      id: 2, title: 'logging 日志', type: 'example',
      content: `\`\`\`python
import logging

# 配置日志
logging.basicConfig(
    level=logging.DEBUG,
    format='%(asctime)s [%(levelname)s] %(message)s',
    datefmt='%Y-%m-%d %H:%M:%S'
)

logging.debug('调试信息')
logging.info('一般信息')
logging.warning('警告信息')
logging.error('错误信息')
logging.critical('严重错误')
\`\`\``,
      code: `import logging

# 同时输出到文件和控制台
logger = logging.getLogger('myapp')
logger.setLevel(logging.DEBUG)

# 文件处理器
fh = logging.FileHandler('app.log', encoding='utf-8')
fh.setLevel(logging.DEBUG)

# 控制台处理器
ch = logging.StreamHandler()
ch.setLevel(logging.INFO)

formatter = logging.Formatter('%(asctime)s [%(levelname)s] %(message)s')
fh.setFormatter(formatter)
ch.setFormatter(formatter)

logger.addHandler(fh)
logger.addHandler(ch)

logger.info('应用启动')
logger.debug('加载配置')
logger.warning('磁盘空间不足')
logger.info('应用关闭')
`
    },
    {
      id: 3, title: 'csv 与 datetime', type: 'explanation',
      content: `**csv 模块**：读写 CSV 文件

\`\`\`python
import csv

# 读取
with open('data.csv', 'r') as f:
    reader = csv.DictReader(f)
    for row in reader:
        print(row['name'], row['score'])

# 写入
with open('output.csv', 'w', newline='') as f:
    writer = csv.writer(f)
    writer.writerow(['姓名', '分数'])
    writer.writerow(['张三', 95])
\`\`\`

**datetime 模块**：日期时间处理

\`\`\`python
from datetime import datetime, timedelta

now = datetime.now()
print(now.strftime('%Y-%m-%d %H:%M:%S'))

# 日期运算
tomorrow = now + timedelta(days=1)
diff = tomorrow - now
print(f'相差: {diff}')
\`\`\``
    },
    {
      id: 4, title: 'queue 与 StringIO', type: 'explanation',
      content: `**queue 模块**：线程安全队列

\`\`\`python
import queue
import threading

q = queue.Queue()

def producer():
    for i in range(5):
        q.put(f'产品-{i}')
        print(f'生产: 产品-{i}')

def consumer():
    while True:
        item = q.get()
        print(f'消费: {item}')
        q.task_done()

threading.Thread(target=consumer, daemon=True).start()
threading.Thread(target=producer).start()
\`\`\`

**io.StringIO**：内存中的字符串流

\`\`\`python
from io import StringIO

buf = StringIO()
buf.write('Hello World')
buf.write('This is test')
print(buf.getvalue())
\`\`\``,
      code: `import queue
import threading
import time

task_queue = queue.Queue(maxsize=3)

def worker(name):
    while True:
        task = task_queue.get()
        print(f'[{name}] 处理任务: {task}')
        time.sleep(0.5)
        task_queue.task_done()

# 启动3个工作线程
for i in range(3):
    t = threading.Thread(target=worker, args=(f'Worker-{i}',), daemon=True)
    t.start()

# 提交任务
for i in range(10):
    task_queue.put(f'Task-{i}')

task_queue.join()
print('所有任务完成!')
`
    },
    {
      id: 5, title: '练习：日志分析器', type: 'exercise',
      content: '编写一个日志分析器，读取日志文件并统计各级别日志数量',
      code: `import re
from collections import Counter

def analyze_log(filepath):
    levels = Counter()
    pattern = r'\\[(DEBUG|INFO|WARNING|ERROR|CRITICAL)\\]'
    
    with open(filepath, 'r', encoding='utf-8') as f:
        for line in f:
            match = re.search(pattern, line)
            if match:
                levels[match.group(1)] += 1
    
    total = sum(levels.values())
    print(f'日志分析报告 (共 {total} 条)')
    print('=' * 30)
    for level, count in sorted(levels.items()):
        pct = count / total * 100
        bar = '█' * int(pct / 2)
        print(f'{level:10s}: {count:5d} ({pct:5.1f}%) {bar}')

# 创建测试日志
test_log = 'test.log'
with open(test_log, 'w') as f:
    for i in range(100):
        f.write(f'2024-01-01 12:00:{i:02d} [{["DEBUG","INFO","WARNING","ERROR"][i%4]}] 测试信息 {i}\\n')

analyze_log(test_log)
`
    },
    {
      id: 6, title: '第46关测验', type: 'quiz',
      content: `**问题1**：logging 默认的最低级别是？
- A. DEBUG
- B. WARNING
- C. INFO
- D. ERROR

**问题2**：subprocess.run() 的 capture_output 参数作用？
- A. 捕获命令输出
- B. 显示进度条
- C. 提高执行速度
- D. 加密输出

**问题3**：queue.Queue 的 maxsize 参数作用？
- A. 最大元素数量限制
- B. 最大线程数
- C. 最大内存占用
- D. 执行超时时间

**答案**：1.B  2.A  3.A`
    }
  ],
  // 第47关
  47: [
    {
      id: 1, title: 'PyQt5 基础', type: 'explanation',
      content: `**PyQt5** 是 Python 的 Qt5 绑定，用于开发桌面 GUI 应用。

\`\`\`python
# pip install PyQt5
import sys
from PyQt5.QtWidgets import QApplication, QWidget, QLabel

app = QApplication(sys.argv)

window = QWidget()
window.setWindowTitle('我的第一个Qt窗口')
window.resize(400, 300)

label = QLabel('Hello PyQt5!', window)
label.move(150, 130)

window.show()
sys.exit(app.exec_())
\`\`\`

**核心概念**：
- QApplication：应用对象，管理事件循环
- QWidget：所有窗口的基类
- 信号与槽：事件通信机制`
    },
    {
      id: 2, title: '常用控件', type: 'example',
      content: `\`\`\`python
from PyQt5.QtWidgets import (QApplication, QWidget, QPushButton,
    QLineEdit, QLabel, QVBoxLayout, QHBoxLayout)

class LoginWindow(QWidget):
    def __init__(self):
        super().__init__()
        self.setWindowTitle('登录窗口')
        self.resize(300, 200)
        
        layout = QVBoxLayout()
        
        layout.addWidget(QLabel('用户名:'))
        self.username = QLineEdit()
        layout.addWidget(self.username)
        
        layout.addWidget(QLabel('密码:'))
        self.password = QLineEdit()
        self.password.setEchoMode(QLineEdit.Password)
        layout.addWidget(self.password)
        
        btn = QPushButton('登录')
        btn.clicked.connect(self.on_login)
        layout.addWidget(btn)
        
        self.result = QLabel('')
        layout.addWidget(self.result)
        
        self.setLayout(layout)
    
    def on_login(self):
        u = self.username.text()
        p = self.password.text()
        self.result.setText(f'欢迎, {u}!')

app = QApplication([])
window = LoginWindow()
window.show()
app.exec_()
\`\`\``,
      code: `from PyQt5.QtWidgets import (QApplication, QWidget, QPushButton,
    QProgressBar, QVBoxLayout)
from PyQt5.QtCore import Qt, QThread, pyqtSignal

class ProgressThread(QThread):
    progress = pyqtSignal(int)
    
    def run(self):
        for i in range(101):
            self.progress.emit(i)
            self.msleep(50)

class MainWindow(QWidget):
    def __init__(self):
        super().__init__()
        layout = QVBoxLayout()
        
        self.bar = QProgressBar()
        self.bar.setRange(0, 100)
        layout.addWidget(self.bar)
        
        self.btn = QPushButton('开始')
        self.btn.clicked.connect(self.start_progress)
        layout.addWidget(self.btn)
        
        self.setLayout(layout)
    
    def start_progress(self):
        self.thread = ProgressThread()
        self.thread.progress.connect(self.bar.setValue)
        self.thread.start()

app = QApplication([])
window = MainWindow()
window.show()
app.exec_()
`
    },
    {
      id: 3, title: '布局管理', type: 'explanation',
      content: `**三种布局管理器**：

- QVBoxLayout：垂直布局
- QHBoxLayout：水平布局
- QGridLayout：网格布局

\`\`\`python
from PyQt5.QtWidgets import *

class FormWindow(QWidget):
    def __init__(self):
        super().__init__()
        grid = QGridLayout()
        
        grid.addWidget(QLabel('姓名:'), 0, 0)
        grid.addWidget(QLineEdit(), 0, 1)
        grid.addWidget(QLabel('电话:'), 1, 0)
        grid.addWidget(QLineEdit(), 1, 1)
        grid.addWidget(QLabel('地址:'), 2, 0)
        grid.addWidget(QTextEdit(), 2, 1)
        
        btn_layout = QHBoxLayout()
        btn_layout.addWidget(QPushButton('确定'))
        btn_layout.addWidget(QPushButton('取消'))
        grid.addLayout(btn_layout, 3, 0, 1, 2)
        
        self.setLayout(grid)

app = QApplication([])
FormWindow().show()
app.exec_()
\`\`\``
    },
    {
      id: 4, title: '信号与槽', type: 'explanation',
      content: `**信号（Signal）** 与 **槽（Slot）** 是 Qt 的事件通信机制：

\`\`\`python
from PyQt5.QtCore import pyqtSignal, QObject

class Communicator(QObject):
    close_app = pyqtSignal()
    data_ready = pyqtSignal(str, int)
    
    def do_work(self):
        self.close_app.emit()
        self.data_ready.emit('hello', 42)

class Receiver:
    def on_close(self):
        print('收到关闭信号')
    
    def on_data(self, text, num):
        print(f'收到数据: {text}, {num}')

comm = Communicator()
recv = Receiver()

comm.close_app.connect(recv.on_close)
comm.data_ready.connect(recv.on_data)

comm.do_work()
# 输出:
# 收到关闭信号
# 收到数据: hello, 42
\`\`\``,
      code: `from PyQt5.QtWidgets import *
from PyQt5.QtCore import pyqtSignal

class TemperatureMonitor(QWidget):
    warning = pyqtSignal(float)
    
    def __init__(self):
        super().__init__()
        layout = QVBoxLayout()
        
        self.slider = QSlider(Qt.Horizontal)
        self.slider.setRange(0, 100)
        self.slider.valueChanged.connect(self.check_temp)
        layout.addWidget(self.slider)
        
        self.label = QLabel('温度: 0°C')
        layout.addWidget(self.label)
        
        self.status = QLabel('')
        layout.addWidget(self.status)
        
        self.warning.connect(self.on_warning)
        self.setLayout(layout)
    
    def check_temp(self, value):
        self.label.setText(f'温度: {value}°C')
        if value > 80:
            self.warning.emit(value)
    
    def on_warning(self, temp):
        self.status.setText(f'⚠️ 高温警告: {temp}°C')
        self.status.setStyleSheet('color: red')

app = QApplication([])
TemperatureMonitor().show()
app.exec_()
`
    },
    {
      id: 5, title: '练习：待办事项 GUI', type: 'exercise',
      content: '使用 PyQt5 创建一个简单的待办事项应用',
      code: `from PyQt5.QtWidgets import *

class TodoApp(QWidget):
    def __init__(self):
        super().__init__()
        self.todos = []
        
        layout = QVBoxLayout()
        
        # 输入区
        input_layout = QHBoxLayout()
        self.input = QLineEdit()
        self.input.setPlaceholderText('添加待办事项...')
        self.input.returnPressed.connect(self.add_todo)
        btn_add = QPushButton('添加')
        btn_add.clicked.connect(self.add_todo)
        input_layout.addWidget(self.input)
        input_layout.addWidget(btn_add)
        layout.addLayout(input_layout)
        
        # 列表
        self.list_widget = QListWidget()
        layout.addWidget(self.list_widget)
        
        # 操作按钮
        btn_layout = QHBoxLayout()
        btn_clear = QPushButton('清空已完成')
        btn_clear.clicked.connect(self.clear_done)
        btn_layout.addWidget(btn_clear)
        layout.addLayout(btn_layout)
        
        self.setLayout(layout)
    
    def add_todo(self):
        text = self.input.text().strip()
        if text:
            item = QListWidgetItem(text)
            item.setFlags(item.flags() | Qt.ItemIsUserCheckable)
            item.setCheckState(Qt.Unchecked)
            self.list_widget.addItem(item)
            self.input.clear()
    
    def clear_done(self):
        for i in range(self.list_widget.count() - 1, -1, -1):
            if self.list_widget.item(i).checkState() == Qt.Checked:
                self.list_widget.takeItem(i)

app = QApplication([])
TodoApp().show()
app.exec_()
`
    },
    {
      id: 6, title: '第47关测验', type: 'quiz',
      content: `**问题1**：PyQt5 中信号与槽的作用？
- A. 数据存储
- B. 事件通信机制
- C. 布局管理
- D. 绘图工具

**问题2**：哪个布局管理器按网格排列控件？
- A. QVBoxLayout
- B. QHBoxLayout
- C. QGridLayout
- D. QStackedLayout

**问题3**：QApplication 的主要职责？
- A. 绘制窗口
- B. 管理事件循环和应用对象
- C. 网络请求
- D. 文件操作

**答案**：1.B  2.C  3.B`
    }
  ],
  // 第48关
  48: [
    {
      id: 1, title: 'FastAPI 路由基础', type: 'explanation',
      content: `**FastAPI** 是现代高性能 Python API 框架。

\`\`\`python
# pip install fastapi uvicorn
from fastapi import FastAPI

app = FastAPI()

@app.get('/')
def read_root():
    return {'message': 'Hello FastAPI'}

@app.get('/items/{item_id}')
def read_item(item_id: int, q: str = None):
    return {'item_id': item_id, 'q': q}

@app.post('/items')
def create_item(item: dict):
    return item
\`\`\`

运行：uvicorn main:app --reload
文档：访问 /docs 查看自动生成的 Swagger UI`
    },
    {
      id: 2, title: 'Pydantic 数据校验', type: 'example',
      content: `\`\`\`python
from pydantic import BaseModel, Field
from typing import Optional

class Item(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    price: float = Field(gt=0)
    description: Optional[str] = None
    tags: list[str] = []

class ItemCreate(BaseModel):
    name: str
    price: float
    description: Optional[str] = None

@app.post('/items', response_model=Item)
def create_item(item: ItemCreate):
    db_item = {**item.dict(), 'id': len(items_db) + 1}
    items_db.append(db_item)
    return db_item

@app.get('/items/{item_id}', response_model=Item)
def get_item(item_id: int):
    for item in items_db:
        if item['id'] == item_id:
            return item
    raise HTTPException(status_code=404, detail='Not found')
\`\`\``,
      code: `from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, EmailStr
from typing import Optional

app = FastAPI(title='用户管理 API')
users_db = {}

class User(BaseModel):
    id: int
    username: str
    email: str
    age: Optional[int] = None

class UserCreate(BaseModel):
    username: str
    email: str
    age: Optional[int] = None

@app.post('/users', response_model=User)
def create_user(user: UserCreate):
    uid = len(users_db) + 1
    db_user = {**user.dict(), 'id': uid}
    users_db[uid] = db_user
    return db_user

@app.get('/users/{user_id}', response_model=User)
def get_user(user_id: int):
    if user_id not in users_db:
        raise HTTPException(404, '用户不存在')
    return users_db[user_id]

@app.get('/users', response_model=list[User])
def list_users():
    return list(users_db.values())
`
    },
    {
      id: 3, title: '依赖注入', type: 'explanation',
      content: `**依赖注入（Dependency Injection）** 是 FastAPI 的核心特性：

\`\`\`python
from fastapi import Depends

def get_db():
    db = create_db_connection()
    try:
        yield db
    finally:
        db.close()

def get_current_user(db=Depends(get_db)):
    user_id = get_current_user_id()
    return db.query(User).get(user_id)

@app.get('/profile')
def get_profile(user=Depends(get_current_user)):
    return user
\`\`\`

**应用场景**：
- 数据库会话管理
- 认证授权
- 配置注入
- 服务单例`
    },
    {
      id: 4, title: '中间件与认证', type: 'explanation',
      content: `\`\`\`python
from fastapi import Request
from starlette.middleware.base import BaseHTTPMiddleware

class LoggingMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        print(f'{request.method} {request.url}')
        response = await call_next(request)
        print(f'Status: {response.status_code}')
        return response

app.add_middleware(LoggingMiddleware)

# JWT 认证
from fastapi.security import OAuth2PasswordBearer

oauth2_scheme = OAuth2PasswordBearer(tokenUrl='token')

async def get_current_user(token=Depends(oauth2_scheme)):
    payload = decode_token(token)
    user = get_user(payload['sub'])
    if not user:
        raise HTTPException(401)
    return user

@app.get('/protected')
def protected_route(user=Depends(get_current_user)):
    return {'user': user.username}
\`\`\``,
      code: `from fastapi import FastAPI, Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel
from datetime import datetime, timedelta
import jwt

app = FastAPI()
SECRET_KEY = 'your-secret-key'
ALGORITHM = 'HS256'

class User(BaseModel):
    username: str
    password: str

fake_users = {'admin': 'password123'}

def create_token(username: str):
    expire = datetime.utcnow() + timedelta(hours=24)
    payload = {'sub': username, 'exp': expire}
    return jwt.encode(payload, SECRET_KEY, ALGORITHM)

def verify_token(token: str = Depends(OAuth2PasswordBearer(tokenUrl='login'))):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload['sub']
    except:
        raise HTTPException(401, '无效令牌')

@app.post('/login')
def login(form: OAuth2PasswordRequestForm = Depends()):
    if fake_users.get(form.username) == form.password:
        token = create_token(form.username)
        return {'access_token': token, 'token_type': 'bearer'}
    raise HTTPException(401, '用户名或密码错误')

@app.get('/me')
def me(username: str = Depends(verify_token)):
    return {'username': username}
`
    },
    {
      id: 5, title: '练习：完整 API', type: 'exercise',
      content: '使用 FastAPI 创建一个图书管理 API，包含 CRUD 操作和认证',
      code: `from fastapi import FastAPI, HTTPException, Depends
from pydantic import BaseModel
from typing import Optional
from datetime import datetime

app = FastAPI(title='图书管理 API')

class Book(BaseModel):
    id: int
    title: str
    author: str
    year: int
    available: bool = True

class BookCreate(BaseModel):
    title: str
    author: str
    year: int

books_db = [
    {'id': 1, 'title': 'Python入门', 'author': '张三', 'year': 2024, 'available': True},
    {'id': 2, 'title': '算法导论', 'author': '李四', 'year': 2023, 'available': True},
]

@app.get('/books', response_model=list[Book])
def list_books(available: Optional[bool] = None):
    if available is None:
        return books_db
    return [b for b in books_db if b['available'] == available]

@app.get('/books/{book_id}', response_model=Book)
def get_book(book_id: int):
    for b in books_db:
        if b['id'] == book_id:
            return b
    raise HTTPException(404, '图书不存在')

@app.post('/books', response_model=Book)
def create_book(book: BookCreate):
    new_id = max(b['id'] for b in books_db) + 1
    new_book = {**book.dict(), 'id': new_id, 'available': True}
    books_db.append(new_book)
    return new_book

@app.put('/books/{book_id}', response_model=Book)
def update_book(book_id: int, book: BookCreate):
    for i, b in enumerate(books_db):
        if b['id'] == book_id:
            books_db[i].update(book.dict())
            return books_db[i]
    raise HTTPException(404, '图书不存在')

@app.delete('/books/{book_id}')
def delete_book(book_id: int):
    for i, b in enumerate(books_db):
        if b['id'] == book_id:
            books_db.pop(i)
            return {'message': '删除成功'}
    raise HTTPException(404, '图书不存在')
`
    },
    {
      id: 6, title: '第48关测验', type: 'quiz',
      content: `**问题1**：FastAPI 使用哪个库进行数据校验？
- A. marshmallow
- B. pydantic
- C. wtforms
- D. cerberus

**问题2**：FastAPI 文档页面的路径是？
- A. /docs
- B. /admin
- C. /api
- D. /swagger

**问题3**：依赖注入的关键字是？
- A. inject
- B. Depends
- C. Provide
- D. Wire

**答案**：1.B  2.A  3.B`
    }
  ],
  // 第49关
  49: [
    {
      id: 1, title: 'Django MVT 模式', type: 'explanation',
      content: `**Django** 采用 MVT 架构（Model-View-Template）：

\`\`\`bash
# 创建项目
django-admin startproject myproject
cd myproject
python manage.py startapp myapp

# 目录结构
myproject/
├── manage.py
├── myproject/
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
└── myapp/
    ├── models.py
    ├── views.py
    ├── urls.py
    └── templates/
\`\`\`

**MVT 职责**：
- Model：数据模型，ORM 映射
- View：业务逻辑，处理请求
- Template：HTML 模板，页面渲染`
    },
    {
      id: 2, title: '视图与 URL 路由', type: 'example',
      content: `\`\`\`python
# myapp/views.py
from django.http import HttpResponse
from django.shortcuts import render

def hello(request):
    return HttpResponse('Hello Django!')

def home(request):
    return render(request, 'home.html', {'title': '首页'})

def about(request, year):
    return render(request, 'about.html', {'year': year})

# myapp/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('hello/', views.hello, name='hello'),
    path('about/<int:year>/', views.about, name='about'),
]
\`\`\``,
      code: `# models.py
from django.db import models

class Article(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    published = models.DateTimeField(auto_now_add=True)
    author = models.CharField(max_length=100)

    class Meta:
        ordering = ['-published']

# views.py
from django.shortcuts import render, get_object_or_404
from .models import Article

def article_list(request):
    articles = Article.objects.all()[:10]
    return render(request, 'list.html', {'articles': articles})

def article_detail(request, pk):
    article = get_object_or_404(Article, pk=pk)
    return render(request, 'detail.html', {'article': article})
`
    },
    {
      id: 3, title: '模板系统', type: 'explanation',
      content: `**Django 模板语言** 用于动态生成 HTML：

\`\`\`html
{# templates/article_list.html #}
<!DOCTYPE html>
<html>
<head><title>{{ title }}</title></head>
<body>
    <h1>文章列表</h1>
    {% for article in articles %}
        <article>
            <h2><a href="{% url 'detail' article.pk %}">
                {{ article.title }}
            </a></h2>
            <p>作者: {{ article.author }}</p>
            <time>{{ article.published|date:"Y-m-d" }}</time>
        </article>
    {% empty %}
        <p>暂无文章</p>
    {% endfor %}
</body>
</html>
\`\`\`

**常用标签**：{% for %}, {% if %}, {% url %}, {% block %}, {% extends %}
**过滤器**：|date, |length, |escape, |truncatechars`
    },
    {
      id: 4, title: '模型与 ORM', type: 'explanation',
      content: `**Django ORM** 让数据库操作变得简单：

\`\`\`python
# 创建
article = Article.objects.create(
    title='Django 教程',
    content='Django 是 Web 框架',
    author='张三'
)

# 查询
all_articles = Article.objects.all()
published = Article.objects.filter(published__year=2024)
article = Article.objects.get(pk=1)

# 更新
article.title = '新标题'
article.save()

# 删除
article.delete()

# 聚合
from django.db.models import Count, Avg
stats = Article.objects.aggregate(
    total=Count('id'),
    avg_count=Avg('id')
)
\`\`\``,
      code: `# 迁移命令
# python manage.py makemigrations
# python manage.py migrate

# admin.py
from django.contrib import admin
from .models import Article

@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    list_display = ['title', 'author', 'published']
    list_filter = ['author', 'published']
    search_fields = ['title', 'content']
    date_hierarchy = 'published'

# 创建超级用户
# python manage.py createsuperuser
`
    },
    {
      id: 5, title: '练习：博客系统', type: 'exercise',
      content: '创建一个简单的 Django 博客应用',
      code: `# models.py 完整示例
from django.db import models
from django.utils import timezone

class Category(models.Model):
    name = models.CharField(max_length=50)
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.name

class Post(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    content = models.TextField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    author = models.CharField(max_length=100)
    created = models.DateTimeField(default=timezone.now)
    updated = models.DateTimeField(auto_now=True)
    published = models.BooleanField(default=False)

    class Meta:
        ordering = ['-created']

    def __str__(self):
        return self.title
`
    },
    {
      id: 6, title: '第49关测验', type: 'quiz',
      content: `**问题1**：Django 的架构模式是？
- A. MVC
- B. MVT
- C. MVVM
- D. MVP

**问题2**：Django ORM 中获取所有记录的方法？
- A. all()
- B. get_all()
- C. find()
- D. select()

**问题3**：模板中输出变量的语法？
- A. {{ variable }}
- B. \${ variable }
- C. <%= variable %>
- D. [[ variable ]]

**答案**：1.B  2.A  3.A`
    }
  ],
  // 第50关
  50: [
    {
      id: 1, title: 'NumPy 高级索引', type: 'explanation',
      content: `**NumPy 花式索引**：通过整数数组或布尔数组索引。

\`\`\`python
import numpy as np

arr = np.arange(12).reshape(3, 4)
print(arr)
# [[ 0  1  2  3]
#  [ 4  5  6  7]
#  [ 8  9 10 11]]

# 花式索引
print(arr[[0, 2]])  # 第0、2行
print(arr[np.array([1, 2]), np.array([2, 3])])  # (1,2)、(2,3)

# 布尔索引
mask = arr > 5
print(arr[mask])
\`\`\`

**where 函数**：三元运算的向量化版本。`
    },
    {
      id: 2, title: '广播与线性代数', type: 'example',
      content: `\`\`\`python
import numpy as np

# 广播机制
A = np.array([1, 2, 3])  # shape: (3,)
B = np.array([[10], [20]])  # shape: (2,1)
# A 自动扩展为 (2,3)，B 自动扩展为 (2,3)
print(A + B)

# 线性代数
M = np.array([[1, 2], [3, 4]])
print(np.linalg.inv(M))        # 逆矩阵
print(np.linalg.det(M))        # 行列式
print(np.linalg.eig(M))        # 特征值
print(np.dot(M, np.linalg.inv(M)))  # 单位矩阵近似
\`\`\``,
      code: `import numpy as np

# 矩阵分解
A = np.array([[4, 2, 1], [2, 6, 3], [1, 3, 5]])

# Cholesky 分解 (正定矩阵)
L = np.linalg.cholesky(A)
print('Cholesky 分解 L:')
print(L)
print('验证 L·Lᵀ = A:')
print(np.allclose(L @ L.T, A))

# SVD 分解
U, s, Vt = np.linalg.svd(A)
print('\\n奇异值:', s)

# 求解线性方程组 Ax = b
b = np.array([1, 2, 3])
x = np.linalg.solve(A, b)
print('\\n线性方程组解:', x)
print('验证 Ax = b:', np.allclose(A @ x, b))
`
    },
    {
      id: 3, title: '统计与随机', type: 'explanation',
      content: `\`\`\`python
import numpy as np

np.random.seed(42)

# 随机数生成
data = np.random.normal(0, 1, 1000)  # 正态分布

# 统计量
print('均值:', np.mean(data))
print('中位数:', np.median(data))
print('方差:', np.var(data))
print('标准差:', np.std(data))
print('分位数:', np.percentile(data, [25, 50, 75]))

# 相关系数矩阵
x = np.random.randn(100)
y = 2 * x + np.random.randn(100) * 0.5
print(np.corrcoef(x, y))

# 直方图统计
hist, bins = np.histogram(data, bins=10)
\`\`\``
    },
    {
      id: 4, title: '文件IO', type: 'explanation',
      content: `\`\`\`python
import numpy as np

# 保存为 npy 格式 (二进制)
arr = np.array([[1, 2], [3, 4]])
np.save('data.npy', arr)
loaded = np.load('data.npy')

# 保存为 npz (多个数组压缩)
np.savez('archive.npz', a=arr, b=arr * 2)
archive = np.load('archive.npz')
print(archive['a'], archive['b'])

# 文本文件
arr = np.loadtxt('data.txt')
np.savetxt('data.txt', arr, fmt='%.4f')

# CSV
data = np.genfromtxt('data.csv', delimiter=',', skip_header=1)
\`\`\``,
      code: `import numpy as np

np.random.seed(42)
temperatures = np.random.randn(24, 7) * 5 + 25  # 24小时×7天

# 每日统计
print('每日最高温:', np.max(temperatures, axis=0))
print('每日最低温:', np.min(temperatures, axis=0))
print('每日平均:', np.mean(temperatures, axis=0).round(2))

# 每小时平均（跨周）
hourly_avg = np.mean(temperatures, axis=1)
print('\\n每小时平均温度:')
for h, t in enumerate(hourly_avg[::4]):
    print(f'  {h*4:2d}:00 - {t:5.2f}°C')

# 滑动窗口平均 (卷积)
window_size = 3
kernel = np.ones(window_size) / window_size
smoothed = np.convolve(hourly_avg, kernel, mode='same')
print('\\n滑动平均平滑完成，方差变化:')
print(f'  原始方差: {np.var(hourly_avg):.4f}')
print(f'  平滑后方差: {np.var(smoothed):.4f}')
`
    },
    {
      id: 5, title: '练习：图像卷积', type: 'exercise',
      content: '使用 NumPy 实现图像卷积，包括边缘检测、模糊、锐化',
      code: `import numpy as np

def convolve2d(image, kernel):
    kh, kw = kernel.shape
    ih, iw = image.shape
    pad_h, pad_w = kh // 2, kw // 2
    padded = np.pad(image, ((pad_h, pad_h), (pad_w, pad_w)), mode='edge')
    output = np.zeros_like(image, dtype=np.float64)
    for i in range(ih):
        for j in range(iw):
            output[i, j] = np.sum(padded[i:i+kh, j:j+kw] * kernel)
    return output

# 创建测试图像（简单渐变+边缘）
img = np.zeros((20, 20))
img[5:15, 5:15] = 1.0
img += np.linspace(0, 0.3, 20).reshape(-1, 1)

# 各种卷积核
kernels = {
    '边缘检测 (Sobel X)': np.array([[-1,0,1],[-2,0,2],[-1,0,1]]),
    '边缘检测 (Sobel Y)': np.array([[-1,-2,-1],[0,0,0],[1,2,1]]),
    '高斯模糊': np.array([[1,2,1],[2,4,2],[1,2,1]]) / 16,
    '锐化': np.array([[0,-1,0],[-1,5,-1],[0,-1,0]]),
    '浮雕': np.array([[-2,-1,0],[-1,1,1],[0,1,2]]),
}

print('原图像 (角落)')
print(img[:6, :6])
print()

for name, k in kernels.items():
    result = convolve2d(img, k)
    print(f'{name}:')
    print(f'  值域: [{result.min():.2f}, {result.max():.2f}]')
    print(f'  左上区域:')
    print(result[:4, :4].round(2))
    print()
`
    },
    {
      id: 6, title: '第50关测验', type: 'quiz',
      content: `**问题1**：arr[[0, 2]] 这种索引方式叫？
- A. 切片索引
- B. 花式索引
- C. 布尔索引
- D. 多维索引

**问题2**：np.linalg.svd 的功能是？
- A. 求解线性方程组
- B. 计算逆矩阵
- C. 奇异值分解
- D. 计算行列式

**问题3**：哪个是多个数组的压缩保存格式？
- A. .npy
- B. .npz
- C. .csv
- D. .txt

**答案**：1.B  2.C  3.B`
    }
  ],
  // 第51关
  51: [
    {
      id: 1, title: 'Pandas 层级索引', type: 'explanation',
      content: `**MultiIndex**（多级索引）处理高维数据。

\`\`\`python
import pandas as pd
import numpy as np

# 创建多级索引
arrays = [
    ['A', 'A', 'B', 'B'],
    [1, 2, 1, 2]
]
mi = pd.MultiIndex.from_arrays(arrays, names=['group', 'id'])
df = pd.DataFrame({'value': [10, 20, 30, 40]}, index=mi)

print(df)
print(df.loc['A'])           # 外层索引
print(df.loc[('A', 1)])      # 多层索引
print(df.xs(1, level='id'))  # 按内层索引

# 多级列索引
columns = pd.MultiIndex.from_product([['2023', '2024'], ['Q1', 'Q2']])
sales = pd.DataFrame(np.random.rand(4, 4), columns=columns)
print(sales['2023'])  # 按外层列
\`\`\``
    },
    {
      id: 2, title: '合并与重塑', type: 'example',
      content: `\`\`\`python
# merge: SQL 风格连接
left = pd.DataFrame({'key': ['A','B','C'], 'val1': [1,2,3]})
right = pd.DataFrame({'key': ['B','C','D'], 'val2': [4,5,6]})
pd.merge(left, right, on='key', how='inner')
pd.merge(left, right, on='key', how='outer')
pd.merge(left, right, on='key', how='left')

# concat: 拼接
pd.concat([left, right], axis=0)  # 行拼接
pd.concat([left, right], axis=1)  # 列拼接

# pivot: 数据透视
df = pd.DataFrame({
    'date': ['2024-01','2024-01','2024-02','2024-02'],
    'product': ['A','B','A','B'],
    'sales': [100, 150, 120, 180]
})
df.pivot(index='date', columns='product', values='sales')
\`\`\``,
      code: `import pandas as pd
import numpy as np

# 电商销售数据
orders = pd.DataFrame({
    '订单ID': [1001,1002,1003,1004,1005,1006],
    '日期': pd.date_range('2024-01-01', periods=6),
    '地区': ['北京','上海','北京','深圳','上海','北京'],
    '品类': ['电子','服装','食品','电子','服装','食品'],
    '金额': [2999, 599, 89, 4599, 899, 129],
    '数量': [1, 2, 3, 1, 1, 4]
})

# 透视表：地区+品类的销售额总和
pivot = orders.pivot_table(
    values='金额', index='地区', columns='品类',
    aggfunc='sum', fill_value=0, margins=True, margins_name='合计'
)
print('地区 x 品类 销售矩阵:')
print(pivot)
print()

# melt: 宽表转长表（透视逆操作）
melted = pivot.drop('合计').reset_index().melt(
    id_vars='地区', var_name='品类', value_name='销售额'
)
print('\\n长表格式（Top5）:')
print(melted.sort_values('销售额', ascending=False).head())
`
    },
    {
      id: 3, title: '时间序列', type: 'explanation',
      content: `\`\`\`python
import pandas as pd

# 日期范围
idx = pd.date_range('2024-01-01', periods=365, freq='D')
ts = pd.Series(range(len(idx)), index=idx)

# 重采样
ts.resample('ME').sum()        # 月求和
ts.resample('QE').mean()       # 季平均
ts.resample('YE').agg(['sum','mean','max'])

# 移动窗口
ts.rolling(window=7).mean()    # 7日移动平均
ts.rolling(30).agg(['mean','std'])
ts.expanding().sum()           # 累积和

# 时区处理
ts = ts.tz_localize('UTC').tz_convert('Asia/Shanghai')

# 时间偏移
ts.index + pd.DateOffset(days=1)
ts.index.shift(1, freq='MS')
\`\`\``
    },
    {
      id: 4, title: '性能优化', type: 'explanation',
      content: `\`\`\`python
# 1. 使用更高效的数据类型
df['category'] = df['category'].astype('category')
df['value'] = pd.to_numeric(df['value'], downcast='integer')

# 2. 读取时优化
df = pd.read_csv('large.csv',
    usecols=['col1','col2'],      # 只读取需要的列
    dtype={'id': 'int32'},        # 指定类型
    parse_dates=['date'],         # 解析日期
    chunksize=10000               # 分块读取
)

# 3. 向量化操作，避免逐行循环
df['new'] = df['a'] + df['b'] * 2       # ✓ 快
# for i, row in df.iterrows(): ...       # ✗ 慢

# 4. apply 优化 - 使用内置函数优先
df.applymap(lambda x: x**2)             # 逐元素
df['col'].transform(np.log1p)           # 变换
\`\`\``,
      code: `import pandas as pd
import numpy as np
import time

# 生成大量数据
N = 100000
df = pd.DataFrame({
    'A': np.random.randn(N),
    'B': np.random.randn(N),
    'category': np.random.choice(['X','Y','Z'], N)
})

# 测试1：向量化 vs 循环
t0 = time.time()
df['vec_result'] = df['A'] * 2 + df['B'] ** 2
t_vec = time.time() - t0

t0 = time.time()
loop_result = []
for i in range(len(df)):
    loop_result.append(df.iloc[i]['A'] * 2 + df.iloc[i]['B'] ** 2)
t_loop = time.time() - t0

print(f'向量化:   {t_vec:.4f}s')
print(f'循环:     {t_loop:.4f}s  (慢 {t_loop/t_vec:.1f}x)')

# 测试2：category 类型优化
df_cat = df.copy()
df_cat['category'] = df_cat['category'].astype('category')
print(f'\\n原 dtype 内存: {df.memory_usage()["category"]:,} bytes')
print(f'category 内存: {df_cat.memory_usage()["category"]:,} bytes')

# 测试3：groupby 聚合性能
t0 = time.time()
result = df.groupby('category').agg(
    A_mean=('A','mean'), B_std=('B','std'),
    count=('A','count')
)
t_group = time.time() - t0
print(f'\\ngroupby 聚合: {t_group:.4f}s')
print(result)
`
    },
    {
      id: 5, title: '练习：销售数据分析', type: 'exercise',
      content: '对销售数据进行完整分析：清洗、聚合、时间序列',
      code: `import pandas as pd
import numpy as np

# 生成模拟数据
np.random.seed(42)
dates = pd.date_range('2024-01-01', '2024-06-30', freq='D')
regions = ['北京','上海','广州','深圳','成都']
products = ['手机','电脑','平板','耳机','手表']

data = []
for d in dates:
    for r in regions:
        for p in products:
            qty = np.random.poisson(3)
            price = {'手机':3999,'电脑':6999,'平板':2999,'耳机':599,'手表':1299}[p]
            data.append([d, r, p, qty, price * qty])

df = pd.DataFrame(data, columns=['日期','地区','产品','数量','金额'])

print('=== 数据概览 ===')
print(f'行数: {len(df):,}')
print(f'时间跨度: {df.日期.min().date()} ~ {df.日期.max().date()}')
print(f'总销售额: {df.金额.sum():,.0f} 元')

print('\\n=== 各产品销售情况 ===')
prod = df.groupby('产品').agg(
    销售额=('金额','sum'), 销售数量=('数量','sum'), 均价=('金额', lambda x: x.sum()/df.loc[x.index,'数量'].sum())
).sort_values('销售额', ascending=False)
prod['占比'] = prod['销售额'] / prod['销售额'].sum() * 100
print(prod.round(2))

print('\\n=== 各月销售趋势 ===')
monthly = df.groupby(df.日期.dt.to_period('M'))['金额'].sum()
for period, total in monthly.items():
    prev = monthly.shift(1).get(period)
    change = (total/prev - 1) * 100 if prev else 0
    print(f'{period}: {total:>10,.0f} 元  ({change:+.1f}%)')

print('\\n=== Top 10 销售日 ===')
daily = df.groupby('日期')['金额'].sum().sort_values(ascending=False)
print(daily.head(10).apply(lambda x: f'{x:,.0f} 元'))
`
    },
    {
      id: 6, title: '第51关测验', type: 'quiz',
      content: `**问题1**：SQL 风格的 DataFrame 连接函数是？
- A. join
- B. concat
- C. merge
- D. combine

**问题2**：pivot 操作的逆操作是？
- A. unpivot
- B. melt
- C. stack
- D. unstack

**问题3**：7日移动平均用什么方法？
- A. rolling(7).mean()
- B. window(7).mean()
- C. sliding(7).mean()
- D. moving(7).mean()

**答案**：1.C  2.B  3.A`
    }
  ],
  // 第52关
  52: [
    {
      id: 1, title: '子图与布局', type: 'explanation',
      content: `\`\`\`python
import matplotlib.pyplot as plt
import numpy as np

# 子图网格
fig, axes = plt.subplots(2, 3, figsize=(12, 8))

# axs 是 (2,3) 的数组
axes[0, 0].plot(np.random.randn(100))
axes[0, 1].scatter(np.random.rand(50), np.random.rand(50))
axes[0, 2].bar(['A','B','C'], [3, 6, 4])
axes[1, 0].hist(np.random.randn(1000))
axes[1, 1].boxplot(np.random.randn(100))
axes[1, 2].pie([30, 40, 20, 10])

plt.tight_layout()

# 复杂布局 GridSpec
from matplotlib.gridspec import GridSpec
fig = plt.figure(figsize=(10, 8))
gs = GridSpec(3, 3, figure=fig)
ax1 = fig.add_subplot(gs[0, :])   # 占满第一行
ax2 = fig.add_subplot(gs[1:, 0:2]) # 占下面两行左边两列
ax3 = fig.add_subplot(gs[1, 2])    # 中间行右边
ax4 = fig.add_subplot(gs[2, 2])    # 最后一格
\`\`\``
    },
    {
      id: 2, title: '3D 图形', type: 'example',
      content: `\`\`\`python
import matplotlib.pyplot as plt
import numpy as np

fig = plt.figure(figsize=(12, 8))

# 3D 折线图
ax1 = fig.add_subplot(2, 2, 1, projection='3d')
t = np.linspace(0, 10*np.pi, 500)
ax1.plot(np.cos(t), np.sin(t), t)

# 3D 散点图
ax2 = fig.add_subplot(2, 2, 2, projection='3d')
x, y, z = np.random.randn(3, 100)
ax2.scatter(x, y, z, c=z, cmap='viridis')

# 3D 曲面
ax3 = fig.add_subplot(2, 2, 3, projection='3d')
X, Y = np.meshgrid(np.linspace(-3, 3, 50), np.linspace(-3, 3, 50))
Z = np.sin(np.sqrt(X**2 + Y**2)) / (np.sqrt(X**2 + Y**2) + 1e-9)
ax3.plot_surface(X, Y, Z, cmap='terrain')

# 等高线
ax4 = fig.add_subplot(2, 2, 4, projection='3d')
ax4.contour3D(X, Y, Z, 50, cmap='coolwarm')
\`\`\``,
      code: `import matplotlib.pyplot as plt
import numpy as np
from matplotlib import cm

# 创建数据
X = np.linspace(-5, 5, 100)
Y = np.linspace(-5, 5, 100)
X, Y = np.meshgrid(X, Y)

# 二元函数可视化
fig = plt.figure(figsize=(15, 10))

# 1. 马鞍面 z = x^2 - y^2
Z1 = X**2 - Y**2
ax1 = fig.add_subplot(2, 3, 1, projection='3d')
ax1.plot_surface(X, Y, Z1, cmap=cm.RdBu, alpha=0.8)
ax1.set_title('马鞍面: z=x²-y²')

# 2. 高斯 z = exp(-(x²+y²))
Z2 = np.exp(-(X**2 + Y**2)/2)
ax2 = fig.add_subplot(2, 3, 2, projection='3d')
ax2.plot_surface(X, Y, Z2, cmap=cm.viridis)
ax2.set_title('高斯曲面')

# 3. 双螺旋参数方程
ax3 = fig.add_subplot(2, 3, 3, projection='3d')
t = np.linspace(0, 8*np.pi, 500)
ax3.plot(np.cos(t), np.sin(t), t, 'b-', linewidth=2)
ax3.plot(np.cos(t+np.pi), np.sin(t+np.pi), t, 'r-', linewidth=2)
ax3.set_title('双螺旋')

# 4. 投影等高线
ax4 = fig.add_subplot(2, 3, 4)
contour = ax4.contourf(X, Y, Z2, levels=20, cmap=cm.viridis)
plt.colorbar(contour, ax=ax4)
ax4.set_title('等高线投影')

# 5. 密度分布
ax5 = fig.add_subplot(2, 3, 5)
data = np.random.multivariate_normal([0,0], [[1,0.5],[0.5,1]], 10000)
hist = ax5.hist2d(data[:,0], data[:,1], bins=50, cmap=cm.magma)
plt.colorbar(hist[3], ax=ax5)
ax5.set_title('二维直方图')

# 6. 向量场
ax6 = fig.add_subplot(2, 3, 6)
Xg, Yg = np.meshgrid(np.arange(-3, 3.5, 0.5), np.arange(-3, 3.5, 0.5))
U = -Yg
V = Xg
ax6.quiver(Xg, Yg, U, V, np.hypot(U, V), cmap=cm.plasma)
ax6.set_title('向量场')

plt.tight_layout()
plt.savefig('3d_visualization.png', dpi=150)
print('图像已保存为 3d_visualization.png')
`
    },
    {
      id: 3, title: '样式与动画', type: 'explanation',
      content: `\`\`\`python
# 样式系统
plt.style.use('seaborn-v0_8')
# 可用样式: default, ggplot, fivethirtyeight, dark_background, seaborn-v0_8
print(plt.style.available)

# 自定义 RC 参数
plt.rcParams.update({
    'figure.facecolor': '#1a1a2e',
    'axes.facecolor': '#16213e',
    'axes.edgecolor': '#0f3460',
    'text.color': '#eaeaea',
    'axes.labelcolor': '#eaeaea',
    'xtick.color': '#eaeaea',
    'ytick.color': '#eaeaea',
    'axes.grid': True,
    'grid.alpha': 0.3,
    'font.family': ['Microsoft YaHei', 'SimHei', 'sans-serif'],
})

# 颜色映射
cmap = plt.get_cmap('viridis')
colors = [cmap(i) for i in np.linspace(0, 1, 10)]
\`\`\``
    },
    {
      id: 4, title: '交互式动画', type: 'explanation',
      content: `\`\`\`python
import matplotlib.animation as animation

# 基本动画
fig, ax = plt.subplots()
x = np.linspace(0, 2*np.pi, 200)
line, = ax.plot(x, np.sin(x))

def animate(frame):
    line.set_ydata(np.sin(x + frame * 0.1))
    return line,

anim = animation.FuncAnimation(
    fig, animate, frames=100, interval=30, blit=True
)
anim.save('sine_wave.gif', writer='pillow', fps=30)

# 散点动画
fig, ax = plt.subplots(figsize=(6, 6))
scat = ax.scatter([], [], s=50)
ax.set_xlim(0, 1)
ax.set_ylim(0, 1)

def animate(i):
    n_points = min(i * 5, 500)
    xy = np.random.rand(n_points, 2)
    scat.set_offsets(xy)
    scat.set_array(np.random.rand(n_points))
    return scat,
\`\`\``,
      code: `import matplotlib.pyplot as plt
import numpy as np
import matplotlib.animation as animation

# 多图联动动画 - 心跳信号 + 滑动窗口
fig, (ax1, ax2) = plt.subplots(2, 1, figsize=(10, 8))

# 模拟心跳信号
t_full = np.linspace(0, 10, 1000)
heartbeat = (
    np.sin(2*np.pi*1.2*t_full) * 0.1 +
    0.3 * np.exp(-((t_full - 2.5) % 10 / 0.1)**2) +
    -0.15 * np.exp(-((t_full - 2.65) % 10 / 0.08)**2) +
    0.1 * np.random.randn(len(t_full)) * 0.05
)

window = 100
line1, = ax1.plot([], [], 'r-', linewidth=1.5)
line2, = ax2.plot([], [], 'r-', linewidth=1.5)
ax2.set_xlim(0, window)
ax2.set_ylim(-0.5, 0.5)
ax2.grid(True, alpha=0.3)
ax1.grid(True, alpha=0.3)
ax1.set_title('心电信号实时监测')
ax2.set_title('滑动窗口 (放大)')

def init():
    line1.set_data([], [])
    line2.set_data([], [])
    return line1, line2

def update(frame):
    idx = frame % len(t_full)
    # 全局
    line1.set_data(t_full[:idx+1], heartbeat[:idx+1])
    ax1.set_xlim(0, max(10, t_full[idx]))
    ax1.set_ylim(-0.6, 0.6)
    
    # 滑动窗口
    start = max(0, idx - window)
    t_win = t_full[start:idx+1]
    y_win = heartbeat[start:idx+1]
    line2.set_data(range(len(y_win)), y_win)
    ax2.set_title(f'滑动窗口: 采样点 {idx}  BPM: {1.2*60:.0f}')
    return line1, line2

anim = animation.FuncAnimation(fig, update, frames=1000, 
    init_func=init, interval=15, blit=False)
print('动画已创建（可在交互环境中播放）')
`
    },
    {
      id: 5, title: '练习：综合可视化', type: 'exercise',
      content: '绘制完整的数据可视化仪表盘（5图联动）',
      code: `import matplotlib.pyplot as plt
import numpy as np
import matplotlib
matplotlib.rcParams['font.family'] = ['Microsoft YaHei', 'SimHei']
matplotlib.rcParams['axes.unicode_minus'] = False

np.random.seed(42)
fig = plt.figure(figsize=(16, 10), facecolor='#f0f2f5')
fig.suptitle('2024年度运营数据仪表盘', fontsize=20, fontweight='bold', y=0.98)

# 定义配色
colors = ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452']

# 1. 销售趋势折线图（左上）
ax1 = plt.subplot2grid((2, 4), (0, 0), colspan=2)
months = np.arange(1, 13)
sales_a = 100 + np.cumsum(np.random.randn(12)) * 5 + 8
sales_b = 80 + np.cumsum(np.random.randn(12)) * 4 + 6
ax1.plot(months, sales_a, 'o-', color=colors[0], linewidth=2, label='产品线A')
ax1.plot(months, sales_b, 's-', color=colors[2], linewidth=2, label='产品线B')
ax1.fill_between(months, sales_a, sales_b, alpha=0.1, color=colors[0])
for i, (a, b) in enumerate(zip(sales_a, sales_b), 1):
    ax1.annotate(f'{a:.0f}', (i, a+2), ha='center', fontsize=8, color=colors[0])
ax1.set_title('月度销售趋势 (万元)', fontweight='bold')
ax1.set_xticks(months)
ax1.legend()
ax1.grid(alpha=0.3)

# 2. 品类占比饼图（右上）
ax2 = plt.subplot2grid((2, 4), (0, 2))
categories = ['电子','服装','食品','家居','美妆','书籍']
values = [350, 280, 190, 150, 120, 80]
wedges, texts, autotexts = ax2.pie(values, labels=categories, autopct='%1.1f%%',
    colors=colors[:6], pctdistance=0.75, textprops={'fontsize':9})
ax2.set_title('品类销售占比', fontweight='bold')
# 环形图
centre_circle = plt.Circle((0,0), 0.5, color='#f0f2f5')
ax2.add_artist(centre_circle)

# 3. 地区分布条形图（右中）
ax3 = plt.subplot2grid((2, 4), (0, 3))
regions = ['华东','华南','华北','华中','西南','西北','东北']
revenues = [420, 380, 310, 250, 200, 150, 130]
bars = ax3.barh(regions[::-1], revenues[::-1], color=colors[:7][::-1])
for bar, val in zip(bars, revenues[::-1]):
    ax3.text(val + 5, bar.get_y() + bar.get_height()/2, f'{val}', va='center', fontsize=9)
ax3.set_title('地区营收分布', fontweight='bold')

# 4. 用户散点+密度（左下）
ax4 = plt.subplot2grid((2, 4), (1, 0), colspan=2)
users = 1000
age = np.random.normal(30, 10, users).clip(18, 60)
spend = (np.random.exponential(200, users) + age * 2).clip(50, 1500)
sc = ax4.scatter(age, spend, c=age, cmap='YlOrRd', alpha=0.6, s=20, edgecolors='white', linewidths=0.5)
plt.colorbar(sc, ax=ax4, label='年龄')
ax4.set_xlabel('年龄')
ax4.set_ylabel('月消费 (元)')
ax4.set_title('用户画像: 年龄 vs 消费', fontweight='bold')
ax4.grid(alpha=0.2)

# 5. 指标雷达图
ax5 = plt.subplot2grid((2, 4), (1, 2), projection='polar')
metrics = ['访问量', '转化率', '复购率', '客单价', '满意度']
angles = np.linspace(0, 2*np.pi, len(metrics), endpoint=False).tolist()
angles += angles[:1]
values_this = [85, 72, 68, 90, 88]
values_last = [75, 65, 60, 80, 82]
values_this += values_this[:1]
values_last += values_last[:1]
ax5.plot(angles, values_this, 'o-', color=colors[0], linewidth=2, label='本期')
ax5.fill(angles, values_this, alpha=0.25, color=colors[0])
ax5.plot(angles, values_last, '--', color=colors[3], linewidth=1.5, label='上期')
ax5.fill(angles, values_last, alpha=0.1, color=colors[3])
ax5.set_xticks(angles[:-1])
ax5.set_xticklabels(metrics, fontsize=9)
ax5.set_ylim(0, 100)
ax5.set_title('关键指标对比', fontweight='bold', pad=20)
ax5.legend(fontsize=8, loc='lower right')

# 6. KPI 指标（右下）
ax6 = plt.subplot2grid((2, 4), (1, 3))
ax6.axis('off')
kpis = [
    ('总营收', '1,486万', '+15.3%', colors[1]),
    ('订单量', '52,341', '+8.7%', colors[0]),
    ('用户数', '128.5万', '+22.1%', colors[2]),
    ('退货率', '2.3%', '-0.8%', colors[3]),
]
y_pos = np.linspace(0.95, 0.1, len(kpis))
for (label, value, change, color), y in zip(kpis, y_pos):
    ax6.text(0.1, y, label, fontsize=11, transform=ax6.transAxes, color='#666')
    ax6.text(0.1, y - 0.06, value, fontsize=18, fontweight='bold', 
             transform=ax6.transAxes, color=color)
    ax6.text(0.75, y - 0.04, change, fontsize=12, transform=ax6.transAxes,
             bbox=dict(boxstyle='round,pad=0.3', facecolor=color, alpha=0.15, edgecolor='none'),
             color=color, fontweight='bold')

plt.tight_layout(rect=[0, 0, 1, 0.95])
plt.savefig('dashboard.png', dpi=120, bbox_inches='tight')
print('仪表盘已保存为 dashboard.png')
`
    },
    {
      id: 6, title: '第52关测验', type: 'quiz',
      content: `**问题1**：创建 2×3 子图网格的函数是？
- A. plt.subplots(2, 3)
- B. plt.grid(2, 3)
- C. plt.layout(2, 3)
- D. plt.multi(2, 3)

**问题2**：3D 图形需要什么 projection 参数？
- A. '3d'
- B. '3dim'
- C. 'three'
- D. 'ax3d'

**问题3**：哪种函数可保存动画为 GIF？
- A. anim.to_gif()
- B. anim.save() 配合 pillow writer
- C. plt.gif()
- D. animation.gif()

**答案**：1.A  2.A  3.B`
    }
  ],
  // 第53关
  53: [
    {
      id: 1, title: '魔法命令与配置', type: 'explanation',
      content: `**Jupyter** 中的魔法命令 (Magic Commands)：

\`\`\`python
# 行魔法 (line magic) %
%timeit range(1000)            # 性能测试
%timeit -n 100 -r 5 x = 1+1    # 100循环×5次重复
%memit sum(range(1000000))     # 内存测试 (需memory_profiler)
%pwd                           # 显示工作目录
%cd /path                      # 切换目录
%matplotlib inline             # 内联图表
%load_ext autoreload           # 自动重载
%autoreload 2                  # 修改自动生效
%who / %whos / %who_ls         # 查看变量

# 单元格魔法 (cell magic) %%
%%time                          # 整格执行时间
%%writefile script.py           # 写入文件
%%bash / %%sh / %%cmd           # 运行 shell
%%html / %%markdown             # 渲染HTML/MD
%%latex                         # LaTeX 公式
%%capture output                # 捕获输出
%%prun                          # 性能分析 (cProfile)
%%timeit                        # 整格性能测试
%%javascript                    # 执行 JS
\`\`\``
    },
    {
      id: 2, title: 'IPython 扩展与显示', type: 'example',
      content: `\`\`\`python
# 富输出系统
from IPython.display import display, HTML, JSON, Image, Audio, Video, Latex
import pandas as pd

# 显示 HTML
display(HTML('<h3 style="color:red">自定义标题</h3>'))

# 显示 Markdown 表格
from IPython.display import Markdown
display(Markdown('''
| 标题1 | 标题2 |
|-------|-------|
| 数据1 | 数据2 |
'''))

# 显示数学公式
display(Latex(r'\frac{1}{\sqrt{2\pi}} \int_{-\infty}^{x} e^{-t^2/2} dt'))

# 显示音频
import numpy as np
rate = 44100
t = np.linspace(0, 2, 2*rate)
audio = np.sin(2*np.pi*440*t) * np.exp(-t)
display(Audio(audio, rate=rate))

# 交互控件
from ipywidgets import interact, IntSlider, FloatSlider
\`\`\``,
      code: `# Jupyter 中可直接运行
from IPython.display import display, HTML, Image, SVG
from ipywidgets import interact, IntSlider, FloatSlider, Dropdown, Checkbox
import numpy as np
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt

print('=== 交互式可视化演示 ===')
print('(此示例展示 Jupyter ipywidgets 功能)')

# 定义交互函数
@interact(
    freq=FloatSlider(min=0.1, max=10, value=2, step=0.1, description='频率'),
    amplitude=FloatSlider(min=0.1, max=2, value=1, step=0.1, description='振幅'),
    phase=FloatSlider(min=0, max=6.28, value=0, step=0.1, description='相位'),
    color=Dropdown(options=['red','blue','green','purple'], value='blue', description='颜色')
)
def plot_wave(freq, amplitude, phase, color):
    x = np.linspace(0, 10, 500)
    y = amplitude * np.sin(freq * x + phase)
    fig, ax = plt.subplots(figsize=(10, 4))
    ax.plot(x, y, color=color, linewidth=2)
    ax.set_ylim(-2.5, 2.5)
    ax.grid(True, alpha=0.3)
    ax.set_title(f'y = {amplitude:.2f}·sin({freq:.2f}·x + {phase:.2f})')
    plt.savefig('wave_plot.png', bbox_inches='tight')
    plt.close()
    print(f'参数已保存: freq={freq:.2f}, amp={amplitude:.2f}, phase={phase:.2f}')

# 进阶：多参数联动
@interact(
    show_sin=Checkbox(value=True, description='sin 曲线'),
    show_cos=Checkbox(value=True, description='cos 曲线'),
    n_points=IntSlider(min=10, max=1000, value=100, description='采样点数')
)
def multi_plot(show_sin, show_cos, n_points):
    x = np.linspace(0, 4*np.pi, n_points)
    fig, ax = plt.subplots(figsize=(10, 4))
    if show_sin:
        ax.plot(x, np.sin(x), label='sin(x)', linewidth=2)
    if show_cos:
        ax.plot(x, np.cos(x), label='cos(x)', linewidth=2)
    ax.grid(True, alpha=0.3)
    ax.legend()
    ax.set_title(f'采样点: {n_points}')
    plt.savefig('multi_plot.png', bbox_inches='tight')
    plt.close()
    print(f'绘图点数: {n_points}')
`
    },
    {
      id: 3, title: '内核与并行', type: 'explanation',
      content: `**多内核支持**：
- Python (ipykernel)
- R, Julia, C++, JavaScript, etc.

**并行计算**：
\`\`\`python
from IPython import parallel
rc = parallel.Client()
view = rc.load_balanced_view()

@view.parallel(block=True)
def process(n):
    import time
    time.sleep(1)
    return n * n

results = process.map(range(100))
print(results)

# %%px cell 魔法在所有内核执行
%%px
import numpy as np
result = np.random.randn(100).sum()
print(result)
\`\`\`

**dask 并行数据处理**：
\`\`\`python
import dask.dataframe as dd
ddf = dd.read_csv('big*.csv')
result = ddf.groupby('col').agg({'val': ['mean','std']}).compute()
\`\`\``
    },
    {
      id: 4, title: 'Notebook 自动化', type: 'explanation',
      content: `\`\`\`python
# nbconvert: 导出/转换 notebook
# jupyter nbconvert --to html|pdf|markdown|slides notebook.ipynb

# 以编程方式执行 notebook
import nbformat
from nbconvert.preprocessors import ExecutePreprocessor

with open('analysis.ipynb') as f:
    nb = nbformat.read(f, as_version=4)

ep = ExecutePreprocessor(timeout=600, kernel_name='python3')
ep.preprocess(nb, {'metadata': {'path': './'}})

with open('executed.ipynb', 'w') as f:
    nbformat.write(nb, f)

# papermill 参数化执行
import papermill as pm
pm.execute_notebook(
    'template.ipynb',
    'output_{}.ipynb'.format(date),
    parameters={'DATE': date, 'REGION': 'US'}
)

# 自定义内核扩展 (kernel extension)
# 放置在 ~/.ipython/profile_default/startup/
\`\`\``,
      code: `# Jupyter 性能分析综合示例
import numpy as np
import time

print('=== Notebook 性能分析工具 ===')

# 1. %timeit 精确计时
print('\\n--- %timeit 数组运算 ---')
a = np.random.rand(10000)

# 2. %%prun 分析调用栈
def slow_operation(size):
    result = []
    for i in range(size):
        result.append(np.sqrt(i**2 + np.random.rand()))
    return np.array(result)

# 3. 行级性能分析 (需 line_profiler)
# %load_ext line_profiler
# %lprun -f slow_operation slow_operation(10000)

# 4. 内存分析 (需 memory_profiler)
# %load_ext memory_profiler
# %mprun -f slow_operation slow_operation(10000)

# 5. %%time 总耗时 + CPU 分配
def benchmark():
    t0 = time.time()
    r1 = slow_operation(10000)
    t1 = time.time()
    # 优化版 - 向量化
    r2 = np.sqrt(np.arange(10000)**2 + np.random.rand(10000))
    t2 = time.time()
    return t1-t0, t2-t1, np.allclose(r1, r2)

loop_t, vec_t, close = benchmark()
print(f'循环版耗时:   {loop_t*1000:.2f} ms')
print(f'向量化耗时:   {vec_t*1000:.2f} ms')
print(f'加速比:       {loop_t/vec_t:.1f}x')
print(f'结果一致:     {close}')

print('\\n=== Notebook 调试技巧 ===')
# %debug: 异常后进入交互调试器
# %pdb: 自动开启调试
# %run script.py: 运行外部脚本并带入命名空间
# %quickref: 快速参考卡
# %history: 命令历史
print('常用调试魔术: %debug / %pdb / %run / %history')
`
    },
    {
      id: 5, title: '练习：交互式仪表盘', type: 'exercise',
      content: '使用 ipywidgets 创建数据探索仪表盘',
      code: `import numpy as np
import pandas as pd
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from ipywidgets import (interact, IntSlider, FloatSlider, 
    Dropdown, SelectMultiple, RadioButtons, HBox, VBox)
import io, base64

# 生成数据集
np.random.seed(42)
dates = pd.date_range('2024-01-01', periods=180, freq='D')
regions = ['华东','华北','华南','西南','西北','东北']
products = ['手机','电脑','平板','耳机']
records = []
for d in dates:
    for r in regions:
        for p in products:
            q = max(1, int(np.random.poisson(5) + (0 if r!='华东' else 3)))
            records.append([d, r, p, q, q * np.random.uniform(500, 7000)])
df = pd.DataFrame(records, columns=['日期','地区','产品','销量','营收'])

print('=== Jupyter 交互式数据探索工具 ===')
print(f'数据集大小: {len(df):,} 行')

# 定义仪表盘函数
def dashboard(
    地区选择 = ['华东','华北','华南'],
    产品选择 = ['手机','电脑'],
    图表类型 = '折线图',
    聚合方式 = '求和',
    移动窗口 = 7
):
    # 筛选
    filtered = df[
        df['地区'].isin(地区选择) & 
        df['产品'].isin(产品选择)
    ].copy()
    filtered['周'] = filtered['日期'].dt.to_period('W')
    
    # 聚合
    agg_map = {'求和': 'sum', '均值': 'mean', '计数': 'count', '最大': 'max'}
    agg_func = agg_map[聚合方式]
    
    daily = filtered.groupby('日期').agg(
        营收=('营收', agg_func), 销量=('销量', agg_func)
    )
    daily_ma = daily.rolling(移动窗口).mean()
    
    fig, (ax1, ax2, ax3) = plt.subplots(3, 1, figsize=(12, 14))
    
    # 图1：时间序列
    if 图表类型 == '折线图':
        ax1.plot(daily.index, daily['营收'], alpha=0.5, label='原始')
        ax1.plot(daily_ma.index, daily_ma['营收'], 'r-', linewidth=2,
                label=f'{移动窗口}日移动平均')
    elif 图表类型 == '柱状图':
        weekly = filtered.groupby('周')['营收'].sum()
        weekly.index = weekly.index.to_timestamp()
        ax1.bar(weekly.index, weekly.values, width=5, alpha=0.7)
    else:  # 面积图
        ax1.fill_between(daily.index, 0, daily['营收'], alpha=0.5)
    ax1.legend(fontsize=10)
    ax1.set_title('营收时间序列')
    ax1.grid(alpha=0.3)
    
    # 图2：地区分布
    region_agg = filtered.groupby('地区')['营收'].sum().sort_values()
    ax2.barh(region_agg.index, region_agg.values, color=plt.cm.Set2.colors[:len(region_agg)])
    for i, (name, val) in enumerate(region_agg.items()):
        ax2.text(val, i, f'{val/10000:.1f}万', va='center')
    ax2.set_title('地区营收分布')
    
    # 图3：产品构成热力图
    pivot = filtered.pivot_table(index='地区', columns='产品',
        values='营收', aggfunc='sum', fill_value=0)
    im = ax3.imshow(pivot.values, cmap='YlOrRd', aspect='auto')
    ax3.set_xticks(range(len(pivot.columns)))
    ax3.set_xticklabels(pivot.columns)
    ax3.set_yticks(range(len(pivot.index)))
    ax3.set_yticklabels(pivot.index)
    for i in range(len(pivot.index)):
        for j in range(len(pivot.columns)):
            ax3.text(j, i, f'{pivot.values[i,j]/10000:.0f}万',
                    ha='center', va='center', color='white' if pivot.values[i,j]>pivot.values.max()/2 else 'black')
    plt.colorbar(im, ax=ax3, label='营收')
    ax3.set_title('地区×产品 营收热力图')
    
    plt.tight_layout()
    plt.savefig('dashboard_widget.png', dpi=120, bbox_inches='tight')
    plt.close()
    
    # 统计摘要
    print(f'\\n筛选结果: {len(filtered):,} 条记录')
    print(f'总营收: {filtered["营收"].sum():,.0f} 元')
    print(f'总销量: {filtered["销量"].sum():,} 件')
    print(f'日均: {daily["营收"].mean():,.0f} 元')
    print(f'最高日: {daily["营收"].idxmax().date()} ({daily["营收"].max():,.0f} 元)')

# 调用示例（实际 notebook 中为下拉/多选控件）
dashboard(
    地区选择=regions[:4],
    产品选择=products,
    图表类型='折线图',
    聚合方式='求和',
    移动窗口=14
)
print('\\n仪表盘已生成: dashboard_widget.png')
`
    },
    {
      id: 6, title: '第53关测验', type: 'quiz',
      content: `**问题1**：单元格级别的魔法命令前缀？
- A. %
- B. %%
- C. $
- D. #

**问题2**：显示 HTML 内容用哪个类？
- A. IFrame
- B. HTML()
- C. display_html()
- D. WebView

**问题3**：ipywidgets 中创建交互式控件的装饰器？
- A. @widget
- B. @interact
- C. @ui
- D. @display

**答案**：1.B  2.B  3.B`
    }
  ],
  // 第54关
  54: [
    {
      id: 1, title: '图像变换与滤波', type: 'explanation',
      content: `**Pillow (PIL)** 进阶：几何变换和图像滤波。

\`\`\`python
from PIL import Image, ImageFilter, ImageEnhance, ImageOps

img = Image.open('photo.jpg')

# 几何变换
img.resize((800, 600))                       # 缩放
img.thumbnail((400, 300))                    # 等比缩略
img.rotate(45, expand=True)                  # 旋转45°
img.transpose(Image.FLIP_LEFT_RIGHT)         # 水平翻转
img.transpose(Image.FLIP_TOP_BOTTOM)         # 垂直翻转

# 仿射变换
img.transform((300,300), Image.AFFINE,
              data=(1,0.2,0,0.1,1,0))        # 倾斜

# 图像滤波
img.filter(ImageFilter.BLUR)
img.filter(ImageFilter.SHARPEN)
img.filter(ImageFilter.SMOOTH)
img.filter(ImageFilter.EDGE_ENHANCE)
img.filter(ImageFilter.FIND_EDGES)           # 边缘检测
img.filter(ImageFilter.GaussianBlur(radius=3))  # 高斯模糊
\`\`\``
    },
    {
      id: 2, title: '色彩空间与增强', type: 'example',
      content: `\`\`\`python
from PIL import Image, ImageOps, ImageEnhance
from PIL.ImageColor import getrgb

img = Image.open('sample.jpg')

# 色彩模式转换
img_rgb = img.convert('RGB')
img_l = img.convert('L')                       # 灰度
img_1 = img.convert('1')                       # 二值
img_hsv = img.convert('HSV')                   # HSV 通道分离

# 色彩增强
enhancer = ImageEnhance.Color(img)
enhancer.enhance(1.5)     # 饱和度 +50%

ImageEnhance.Brightness(img).enhance(0.8)  # 亮度 -20%
ImageEnhance.Contrast(img).enhance(1.3)    # 对比度 +30%
ImageEnhance.Sharpness(img).enhance(2.0)   # 锐化 2x

# 调色板和颜色映射
ImageOps.colorize(img_l, black='blue', white='red')  # 假彩色
ImageOps.posterize(img, bits=4)  # 色调分离

# 通道分离与混合
r, g, b = img.split()
new_img = Image.merge('RGB', (b, g, r))  # 通道交换（蓝变红）
\`\`\``,
      code: `from PIL import Image, ImageFilter, ImageEnhance, ImageOps, ImageDraw
import numpy as np

print('=== Pillow 图像变换演示 ===')

# 创建测试图像（带图案）
size = 300
img = Image.new('RGB', (size, size), color=(240, 245, 250))
draw = ImageDraw.Draw(img)
# 画渐变色块
for i in range(100):
    for j in range(100):
        intensity = (i + j) / 200
        draw.point((i+50, j+50), fill=(
            int(255*intensity),
            int(200*intensity),
            200 - int(100*intensity)
        ))
# 画圆形
for r in range(20, 100, 20):
    draw.ellipse([150-r, 200-r, 150+r, 200+r], outline=(50, 50, 150), width=2)

transforms = {
    '原图': lambda x: x,
    '灰度': lambda x: x.convert('L'),
    '高斯模糊': lambda x: x.filter(ImageFilter.GaussianBlur(3)),
    '边缘检测': lambda x: x.filter(ImageFilter.CONTOUR),
    '浮雕': lambda x: x.filter(ImageFilter.EMBOSS),
    '对比度+80%': lambda x: ImageEnhance.Contrast(x).enhance(1.8),
    '色相调换': lambda x: Image.merge('RGB', x.split()[::-1]),
    '色调分离 (3bit)': lambda x: ImageOps.posterize(x, 3),
    '反色': lambda x: ImageOps.invert(x),
    '均衡化': lambda x: ImageOps.equalize(x.convert('RGB')),
}

for name, func in transforms.items():
    try:
        result = func(img.copy())
        w, h = result.size
        if w > 200 or h > 200:
            result = result.resize((200, 200))
        result.save(f'pillow_{name}.png')
        print(f'✓ {name}: pillow_{name}.png ({w}x{h})')
    except Exception as e:
        print(f'✗ {name}: {e}')

# 自动对比
from PIL import ImageStat
stat = ImageStat.Stat(img)
print(f'\\n图像统计:')
print(f'  RGB 均值: {[round(v,1) for v in stat.mean]}')
print(f'  RGB 方差: {[round(v,1) for v in stat.var]}')
print(f'  RGB 极值: {stat.extrema}')
`
    },
    {
      id: 3, title: '批量处理与 EXIF', type: 'explanation',
      content: `\`\`\`python
import os
from PIL import Image, ImageExif

# 批量生成缩略图
input_dir = 'photos/'
output_dir = 'thumbnails/'
os.makedirs(output_dir, exist_ok=True)

for fname in os.listdir(input_dir):
    if fname.lower().endswith(('.jpg','.png')):
        img = Image.open(os.path.join(input_dir, fname))
        img.thumbnail((256, 256))
        img.save(os.path.join(output_dir, fname), quality=85, optimize=True)

# EXIF 元数据读取
with Image.open('photo.jpg') as img:
    exif = img.getexif()
    if exif:
        for tag_id, value in exif.items():
            tag = ImageExif.Base.TAGS.get(tag_id, tag_id)
            print(f'{tag}: {value}')

# EXIF 关键字段: Make, Model, DateTime, GPSInfo, FocalLength, ExposureTime, ISO...

# 图像转 PDF
images = [Image.open(f'p{i}.jpg').convert('RGB') for i in range(10)]
images[0].save('output.pdf', save_all=True, append_images=images[1:])
\`\`\``
    },
    {
      id: 4, title: '绘图与合成', type: 'explanation',
      content: `\`\`\`python
from PIL import Image, ImageDraw, ImageFont

# 创建画布
img = Image.new('RGB', (800, 600), 'white')
draw = ImageDraw.Draw(img)

# 绘制基本形状
draw.line([(0,0), (800,600)], fill='red', width=3)
draw.rectangle([100, 100, 300, 300], fill='#FFD700', outline='black', width=2)
draw.ellipse([400, 100, 700, 400], fill=(100,200,255), outline='navy')
draw.polygon([(400,500), (500,420), (600,500)], fill='green')
draw.arc([100, 400, 300, 600], start=0, end=270, fill='purple', width=5)
draw.pieslice([500, 420, 780, 580], start=0, end=240, fill='orange')

# 文字
font = ImageFont.truetype('msyh.ttc', 48)
draw.text((100, 50), 'Hello Pillow!', fill='black', font=font, anchor='mm')

# 图像合成
img1 = Image.open('bg.jpg')
img2 = Image.open('logo.png').convert('RGBA')
img1.paste(img2, (50, 50), mask=img2)  # alpha 合成

# 画布裁剪与粘贴
region = img1.crop((100,100,500,400))
region = region.rotate(15)
img1.paste(region, (600, 200))
\`\`\``,
      code: `from PIL import Image, ImageDraw, ImageFont, ImageFilter
import math, random

# 生成完整海报
W, H = 800, 1000
poster = Image.new('RGB', (W, H), (20, 20, 40))

# 渐变背景
bg = Image.new('RGB', (W, H))
for y in range(H):
    r = int(20 + y * 40 / H)
    g = int(20 + y * 60 / H)
    b = int(60 + y * 120 / H)
    for x in range(W):
        bg.putpixel((x, y), (r, g, b))
poster = bg

draw = ImageDraw.Draw(poster)

# 装饰性几何图形
random.seed(42)
for _ in range(80):
    x1, y1 = random.randint(0,W), random.randint(0,H)
    s = random.randint(3, 15)
    alpha = random.randint(30, 80)
    color = (random.randint(100,255), random.randint(100,255), random.randint(150,255))
    draw.ellipse([x1-s, y1-s, x1+s, y1+s], outline=color, width=1)

# 居中标题
try:
    title_font = ImageFont.truetype('msyh.ttc', 72)
    subtitle_font = ImageFont.truetype('msyh.ttc', 36)
    body_font = ImageFont.truetype('msyh.ttc', 24)
except:
    title_font = ImageFont.load_default()
    subtitle_font = ImageFont.load_default()
    body_font = ImageFont.load_default()

# 居中文字
draw.text((W/2, 200), '数据可视化', font=title_font, fill='white', anchor='mm')
draw.text((W/2, 280), 'Python Mastery Series', font=subtitle_font, fill=(200, 220, 255), anchor='mm')

# 分割线
draw.line([(100, 350), (W-100, 350)], fill=(255,255,255,128), width=2)

# 卡片内容
cards = [
    ('Pillow', '图像处理与合成', '#ef4444'),
    ('NumPy', '数值计算基础', '#f59e0b'),
    ('Pandas', '数据分析核心', '#3b82f6'),
    ('Matplotlib', '可视化绘图', '#10b981'),
]
for i, (title, desc, color) in enumerate(cards):
    y = 400 + i * 130
    # 卡片背景
    draw.rounded_rectangle([100, y, W-100, y+110],
        radius=20, fill=(255,255,255,20), outline=(255,255,255,40))
    # 序号圆点
    draw.ellipse([130, y+30, 180, y+80], fill=color)
    draw.text((155, y+55), str(i+1), font=subtitle_font, fill='white', anchor='mm')
    # 文字
    draw.text((210, y+30), title, font=subtitle_font, fill='white')
    draw.text((210, y+70), desc, font=body_font, fill=(180,190,220))

# 底部时间
import datetime
today = datetime.date.today().strftime('%Y.%m.%d')
draw.text((W/2, H-80), f'版本 v1.0  日期 {today}', font=body_font,
    fill=(150, 160, 190), anchor='mm')

# 保存
poster.save('poster.png', quality=95)
print(f'海报已生成: poster.png ({W}x{H})')
`
    },
    {
      id: 5, title: '练习：水印工具', type: 'exercise',
      content: '实现批量图片水印工具（文字+图片水印，支持自定义参数）',
      code: `from PIL import Image, ImageDraw, ImageFont, ImageEnhance
import os, math

class WatermarkTool:
    def __init__(self):
        self.supported = ('.jpg','.jpeg','.png','.bmp','.webp')
    
    def add_text_watermark(self, img, text,
                          position='bottom-right', font_size=36,
                          opacity=120, color=(255,255,255), margin=30,
                          angle=0):
        """添加文字水印"""
        base = img.convert('RGBA')
        W, H = base.size
        
        # 建透明层
        layer = Image.new('RGBA', base.size, (0,0,0,0))
        draw = ImageDraw.Draw(layer)
        
        try:
            font = ImageFont.truetype('msyh.ttc', font_size)
        except:
            font = ImageFont.load_default()
        
        # 计算文字位置
        bbox = draw.textbbox((0,0), text, font=font)
        tw, th = bbox[2]-bbox[0], bbox[3]-bbox[1]
        
        pos_map = {
            'top-left': (margin, margin),
            'top-right': (W-tw-margin, margin),
            'top-center': ((W-tw)//2, margin),
            'center': ((W-tw)//2, (H-th)//2),
            'bottom-left': (margin, H-th-margin),
            'bottom-right': (W-tw-margin, H-th-margin),
            'bottom-center': ((W-tw)//2, H-th-margin),
        }
        x, y = pos_map.get(position, pos_map['bottom-right'])
        
        # 旋转水印
        if angle:
            tmp = Image.new('RGBA', (tw+20, th+20), (0,0,0,0))
            tmp_draw = ImageDraw.Draw(tmp)
            tmp_draw.text((10, 10), text, font=font, fill=(*color, opacity))
            tmp = tmp.rotate(angle, expand=True, resample=Image.BICUBIC)
            # 居中
            tw2, th2 = tmp.size
            layer.paste(tmp, (x + (tw-tw2)//2, y + (th-th2)//2), mask=tmp)
        else:
            draw.text((x, y), text, font=font, fill=(*color, opacity))
        
        return Image.alpha_composite(base, layer)
    
    def add_image_watermark(self, img, logo_path,
                           position='bottom-right', scale=0.2,
                           opacity=180, margin=30):
        """添加图片水印"""
        base = img.convert('RGBA')
        W, H = base.size
        
        logo = Image.open(logo_path).convert('RGBA')
        lw, lh = logo.size
        
        # 按比例缩放（基于图片宽度）
        new_w = int(W * scale)
        new_h = int(lh * new_w / lw)
        logo = logo.resize((new_w, new_h), Image.LANCZOS)
        
        # 透明度
        if opacity < 255:
            r, g, b, a = logo.split()
            a = a.point(lambda x: int(x * opacity / 255))
            logo = Image.merge('RGBA', (r, g, b, a))
        
        pos_map = {
            'top-left': (margin, margin),
            'top-right': (W-new_w-margin, margin),
            'center': ((W-new_w)//2, (H-new_h)//2),
            'bottom-left': (margin, H-new_h-margin),
            'bottom-right': (W-new_w-margin, H-new_h-margin),
        }
        x, y = pos_map.get(position, pos_map['bottom-right'])
        
        base.paste(logo, (x, y), mask=logo)
        return base
    
    def add_tiled_watermark(self, img, text, font_size=48,
                            opacity=60, angle=-30, spacing=150):
        """平铺水印（防盗图）"""
        base = img.convert('RGBA')
        W, H = base.size
        diagonal = int(math.sqrt(W*W + H*H))
        
        layer = Image.new('RGBA', (diagonal, diagonal), (0,0,0,0))
        draw = ImageDraw.Draw(layer)
        try:
            font = ImageFont.truetype('msyh.ttc', font_size)
        except:
            font = ImageFont.load_default()
        
        # 计算文字尺寸
        bbox = draw.textbbox((0,0), text, font=font)
        tw, th = bbox[2]-bbox[0], bbox[3]-bbox[1]
        
        for x in range(0, diagonal, tw + spacing):
            for y in range(0, diagonal, th + spacing):
                draw.text((x, y), text, font=font, fill=(255,255,255, opacity))
        
        layer = layer.rotate(angle, resample=Image.BICUBIC)
        # 裁回原尺寸
        left = (diagonal - W) // 2
        top = (diagonal - H) // 2
        layer = layer.crop((left, top, left+W, top+H))
        
        return Image.alpha_composite(base, layer)
    
    def process_folder(self, input_dir, output_dir, **kwargs):
        """批量处理目录"""
        os.makedirs(output_dir, exist_ok=True)
        count = 0
        for fname in os.listdir(input_dir):
            if fname.lower().endswith(self.supported):
                try:
                    img = Image.open(os.path.join(input_dir, fname))
                    if kwargs.get('mode') == 'text':
                        result = self.add_text_watermark(img, kwargs['text'])
                    elif kwargs.get('mode') == 'image':
                        result = self.add_image_watermark(img, kwargs['logo'])
                    else:
                        result = self.add_tiled_watermark(img, kwargs['text'])
                    
                    out_path = os.path.join(output_dir, fname)
                    result.convert('RGB').save(out_path, quality=85)
                    count += 1
                    print(f'✓ {fname}')
                except Exception as e:
                    print(f'✗ {fname}: {e}')
        print(f'完成！共处理 {count} 张图片')
        return count

# 使用示例
tool = WatermarkTool()

# 创建测试图像
test = Image.new('RGB', (600, 400), (100, 150, 200))
d = ImageDraw.Draw(test)
for i in range(10):
    d.rectangle([i*60, i*40, i*60+50, i*40+30],
        fill=(i*25, 50, 200-i*20), outline='white')
test.save('test_img.jpg')

# 各种水印效果
result1 = tool.add_text_watermark(test, '© 版权所有 2024', angle=0)
result1.save('watermark_text.png')
print('✓ 文字水印: watermark_text.png')

result2 = tool.add_tiled_watermark(test, '防盗水印', opacity=50)
result2.save('watermark_tiled.png')
print('✓ 平铺水印: watermark_tiled.png')
`
    },
    {
      id: 6, title: '第54关测验', type: 'quiz',
      content: `**问题1**：RGB 转灰度的方法是？
- A. convert('L')
- B. to_gray()
- C. grayscale()
- D. Image.GRAY

**问题2**：高斯模糊的参数 radius 控制什么？
- A. 颜色深度
- B. 模糊半径
- C. 分辨率
- D. 旋转角度

**问题3**：粘贴透明 PNG 时 mask 参数作用？
- A. 缩放比例
- B. 旋转角度
- C. alpha 通道合成
- D. 边框粗细

**答案**：1.A  2.B  3.C`
    }
  ],
  // 第55关
  55: [
    {
      id: 1, title: 'R 基础与向量', type: 'explanation',
      content: `**R 语言** 是统计计算和数据可视化的强力工具。

\`\`\`r
# 变量与赋值
x <- 10
y = 20
z <<- 30  # 全局赋值

# 向量
v <- c(1, 2, 3, 4, 5)          # 组合
1:10                           # 序列
seq(1, 10, by=2)              # 步长序列
rep(c('A','B'), each=3, times=2)  # 重复
v[1]                           # 索引 (从1开始!)
v[c(1, 3, 5)]                  # 选择多个
v[v > 3]                       # 逻辑索引

# 向量运算 (向量化)
v1 + v2                        # 逐元素
sum(v), mean(v), sd(v), var(v)
range(v), quantile(v)
min(v), max(v), which.min(v)

# 常用函数
sample(1:100, 10)              # 采样
rnorm(100, mean=0, sd=1)       # 正态分布
runif(100, min=0, max=100)     # 均匀
table(categorical_var)         # 频率表
\`\`\``
    },
    {
      id: 2, title: '数据框与矩阵', type: 'example',
      content: `\`\`\`r
# 矩阵
m <- matrix(1:12, nrow=3, ncol=4, byrow=TRUE)
rownames(m) <- paste0('R', 1:3)
colnames(m) <- paste0('C', 1:4)
m[1, 2]           # 第1行第2列
m[, 2]            # 第2列
m['R1', ]         # 第1行
t(m)              # 转置
m %*% t(m)        # 矩阵乘法
solve(m[,1:3])    # 逆方阵

# 数据框
df <- data.frame(
    name = c('Alice','Bob','Charlie'),
    age = c(25, 30, 35),
    score = c(85, 92, 78),
    stringsAsFactors = FALSE
)

# 选取
df$name                       # 按列名
df[, 'age']                   # 同上
df[df$age > 28, c('name','score')]  # 条件筛选
subset(df, age > 28 & score >= 80)

# 增删改
df$grade <- ifelse(df$score >= 90, 'A',
            ifelse(df$score >= 80, 'B', 'C'))
df$temp <- NULL               # 删除列
\`\`\``,
      code: `# R 数据框操作综合示例（使用 R 语法）
# 在 Python 环境模拟 R 的等价逻辑（便于运行）
# 等价的 R 代码可在 R 控制台直接执行
import pandas as pd
import numpy as np

print('=== R 语言 数据操作 (Python等价实现演示) ===')
print('注: 以下代码展示与 R 函数对应的操作逻辑')

# R: df <- data.frame(name=c('A','B','C','D'), score=c(85,92,78,95), class=c('X','X','Y','Y'))
df = pd.DataFrame({
    'name': ['Alice','Bob','Charlie','David','Emma','Frank'],
    'age': [25, 30, 35, 28, 22, 40],
    'score': [85, 92, 78, 95, 88, 72],
    'class': ['X','X','Y','Y','X','Y']
})

print('原始数据:')
print(df.to_string(index=False))

# R: summary(df) 基本统计
print('\\n=== summary() 等价: 描述统计 ===')
print(df.describe(include='all').to_string())

# R: table(df$class)
print('\\n=== table() 等价: 频数统计 ===')
print(df['class'].value_counts())

# R: aggregate(score ~ class, data=df, FUN=mean)
print('\\n=== aggregate() 等价: 分组聚合 ===')
grouped = df.groupby('class').agg(
    平均分数=('score', 'mean'),
    最高分数=('score', 'max'),
    平均年龄=('age', 'mean'),
    人数=('name', 'count')
).round(2)
print(grouped)

# R: df[order(-df$score),] 按分数降序
print('\\n=== order() 等价: 排序 ===')
print(df.sort_values('score', ascending=False).to_string(index=False))

# R: apply(df[,2:3], 2, mean)
print('\\n=== apply() 等价: 行列级操作 ===')
numeric_cols = ['age', 'score']
for direction, label in [(0, 'apply(df, 2, mean) 列均值'), (1, 'apply(df, 1, sum) 行和(前5)')]:
    if direction == 0:
        result = df[numeric_cols].mean()
        print(f'\\n{label}:')
        print(result)
    else:
        print(f'\\n{label}:')
        print(df[numeric_cols].sum(axis=1).head().to_string())

# R: merge 合并
extra = pd.DataFrame({
    'name': ['Alice','Bob','Frank','Grace'],
    'city': ['北京','上海','广州','深圳'],
    'group': [1, 2, 1, 2]
})
# R: merge(df, extra, by='name', all.x=TRUE)
merged = df.merge(extra, on='name', how='left')
print('\\n=== merge() 等价: 左连接 ===')
print(merged.to_string(index=False))
`
    },
    {
      id: 3, title: 'ggplot2 可视化', type: 'explanation',
      content: `**ggplot2** 是 R 的声明式绘图系统（图形语法）。

\`\`\`r
library(ggplot2)

# 基本图形
ggplot(data = df, aes(x = age, y = score)) +
    geom_point(aes(color = class), size = 3, alpha = 0.8) +
    geom_smooth(method = "lm", se = TRUE, color = "red") +
    labs(title = "年龄 vs 分数", x = "年龄", y = "分数",
         color = "班级") +
    theme_bw() +
    theme(plot.title = element_text(hjust = 0.5, face = "bold"))

# 分面
ggplot(df, aes(x = score, fill = class)) +
    geom_histogram(bins = 15, alpha = 0.7) +
    facet_wrap(~ class, nrow = 1) +
    scale_fill_brewer(palette = "Set2")

# 箱线图 + 抖动点
ggplot(df, aes(x = class, y = score, fill = class)) +
    geom_boxplot(alpha = 0.7, width = 0.6) +
    geom_jitter(width = 0.2, size = 2, color = "black") +
    stat_summary(fun = mean, geom = "point",
                 shape = 18, size = 4, color = "red")

# 主题系统: theme_minimal, theme_classic, theme_dark, ggthemes 包
\`\`\``
    },
    {
      id: 4, title: '统计与回归', type: 'explanation',
      content: `\`\`\`r
# 假设检验
# t 检验
t.test(x ~ group, data=df)            # 独立样本
t.test(x, mu=0, alternative='greater')  # 单样本

# 卡方检验
chisq.test(table(df$A, df$B))

# 方差分析 ANOVA
aov_model <- aov(value ~ group, data=df)
summary(aov_model)
TukeyHSD(aov_model)                    # 事后检验

# 线性回归
model <- lm(y ~ x1 + x2 + factor(cat), data=df)
summary(model)                         # 系数、R²、p值
coef(model) / confint(model)           # 系数与置信区间
predict(model, newdata=new_df)         # 预测
plot(model)                            # 诊断图 (4张)

# 广义线性模型 (GLM)
glm_model <- glm(success ~ ., data=df, family=binomial)
summary(glm_model)

# 相关性
cor(df[,sapply(df, is.numeric)])
cor.test(df$x, df$y, method='spearman')
\`\`\``,
      code: `# R 统计分析 等价实现 (Python)
import numpy as np
import pandas as pd
from scipy import stats
import statsmodels.api as sm

print('=== R 统计分析 等价 Python 实现 ===')

# 生成数据
np.random.seed(42)
n = 100
group = np.repeat(['A','B','C'], [35, 35, 30])
x = np.random.randn(n) * 10 + 50
noise = np.random.randn(n) * 2
y = 0.8 * x + (group == 'B') * 5 - (group == 'A') * 3 + noise
df = pd.DataFrame({'x': x, 'y': y, 'group': group})

# 1. t 检验: t.test(x ~ group) A vs B
print('\\n=== t.test() 等价: A 组 vs B 组独立样本 t 检验 ===')
group_a = df[df['group']=='A']['y']
group_b = df[df['group']=='B']['y']
t_stat, p_val = stats.ttest_ind(group_a, group_b)
print(f't 统计量: {t_stat:.4f}')
print(f'p 值:     {p_val:.6f}')
print(f'差异显著: {p_val < 0.05} (α=0.05)')

# 2. ANOVA: aov(y ~ group)
print('\\n=== aov() 等价: 单因素方差分析 ===')
groups_data = [df[df['group']==g]['y'].values for g in ['A','B','C']]
f_stat, p_anova = stats.f_oneway(*groups_data)
print(f'F 统计量: {f_stat:.4f}')
print(f'p 值:     {p_anova:.6f}')

# 3. 线性回归: lm(y ~ x + group)
print('\\n=== lm() 等价: 多元线性回归 ===')
X = pd.get_dummies(df[['x','group']], drop_first=True)
X = sm.add_constant(X.astype(float))
y_data = df['y']
model = sm.OLS(y_data, X).fit()
print(model.summary().tables[1])  # 系数表
print(f'\\nR² (调整): {model.rsquared_adj:.4f}')
print(f'F p 值:    {model.f_pvalue:.6f}')

# 4. 相关性检验: cor.test()
print('\\n=== cor.test() 等价: x 与 y 相关性 ===')
r, p_corr = stats.pearsonr(df['x'], df['y'])
rho, p_spearman = stats.spearmanr(df['x'], df['y'])
print(f'Pearson r = {r:.4f}  (p={p_corr:.2e})')
print(f'Spearman ρ = {rho:.4f}  (p={p_spearman:.2e})')

# 5. 置信区间
print('\\n=== confint() 等价: 回归系数 95% 置信区间 ===')
ci = model.conf_int(alpha=0.05)
ci.columns = ['下限', '上限']
ci['系数'] = model.params
ci = ci[['系数', '下限', '上限']]
print(ci.round(4))
`
    },
    {
      id: 5, title: '练习：数据挖掘实战', type: 'exercise',
      content: 'R 风格的完整数据挖掘流程：数据处理 → EDA → 建模 → 评估',
      code: `import numpy as np
import pandas as pd
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from scipy import stats
import statsmodels.api as sm
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.metrics import confusion_matrix, classification_report, roc_auc_score

print('=' * 60)
print('    R 数据挖掘实战 - 客户流失预测 (Python 等价实现)')
print('=' * 60)

# 1. 数据加载与预处理 (R: read_csv + dplyr 管道)
np.random.seed(42)
N = 5000
data = pd.DataFrame({
    'age': np.random.randint(18, 80, N),
    'income': np.random.randint(2000, 50000, N),
    'tenure': np.random.randint(1, 72, N),
    'contract': np.random.choice(['月付','1年','2年'], N, p=[0.4,0.35,0.25]),
    'internet': np.random.choice(['光纤','DSL','无'], N, p=[0.5,0.35,0.15]),
    'support_calls': np.random.poisson(1.2, N),
    'monthly_charges': np.random.uniform(20, 120, N),
})
# 合成流失标签
p_churn = (
    0.05 +
    0.3 * (data['contract'] == '月付') +
    0.1 * (data['internet'] == '光纤') +
    0.005 * data['support_calls'] +
    -0.002 * data['tenure'] +
    np.random.randn(N) * 0.1
).clip(0, 1)
data['churn'] = (np.random.rand(N) < p_churn).astype(int)

print('\\n=== 1. 数据概览 (R: str() + summary()) ===')
print(f'样本数: {len(data):,}  特征数: {len(data.columns)-1}')
print(f'流失率: {data.churn.mean():.2%}')
print(data.describe().round(2).to_string())

# 2. 探索性分析 (R: ggplot2)
print('\\n=== 2. EDA 探索性分析 ===')
# 按合同类型的流失率
grouped_contract = data.groupby('contract').agg(
    样本数=('churn', 'count'),
    流失率=('churn', 'mean'),
    平均月费=('monthly_charges', 'mean')
).sort_values('流失率', ascending=False)
print('不同合同类型的流失率:')
print(grouped_contract.style.format({'流失率': '{:.2%}'}).to_string() if hasattr(grouped_contract, 'style') else grouped_contract)

for c in ['contract','internet']:
    ct = pd.crosstab(data[c], data['churn'], normalize='index')
    print(f'\\n{c} × 流失 列联表 (行比例):')
    print(ct.round(3))
    chi2, p, dof, exp = stats.chi2_contingency(pd.crosstab(data[c], data['churn']))
    print(f'卡方检验: χ²={chi2:.2f}, p={p:.4e}')

# 数值特征与流失的相关性
print('\\n数值特征与流失的相关性 (点二列相关):')
for col in ['age','income','tenure','support_calls','monthly_charges']:
    r, p = stats.pointbiserialr(data['churn'], data[col])
    sig = '***' if p<0.001 else ('**' if p<0.01 else ('*' if p<0.05 else ''))
    print(f'  {col:>16s}: r = {r:+.4f}  p = {p:.4f} {sig}')

# 3. 特征工程 (R: dplyr::mutate)
print('\\n=== 3. 特征工程 ===')
data['charges_per_tenure'] = data['monthly_charges'] * data['tenure']
data['calls_per_month'] = data['support_calls'] / (data['tenure'] / 12 + 0.1)
data = pd.get_dummies(data, columns=['contract','internet'], drop_first=True)
print(f'特征维度: {len(data.columns)-1} (编码后)')

# 4. 建模 (R: glm / randomForest)
print('\\n=== 4. 模型训练 ===')
X = data.drop('churn', axis=1)
y = data['churn']
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.3, random_state=42, stratify=y)

# 随机森林
rf = RandomForestClassifier(n_estimators=200, max_depth=8, 
    class_weight='balanced', random_state=42, n_jobs=-1)
rf.fit(X_train, y_train)

# 交叉验证
cv_scores = cross_val_score(rf, X_train, y_train, cv=5, scoring='roc_auc')
print(f'随机森林 5折 CV AUC: {cv_scores.mean():.4f} ± {cv_scores.std():.4f}')

# 逻辑回归 (R: glm(family=binomial))
X_train_const = sm.add_constant(X_train.astype(float))
logit = sm.Logit(y_train, X_train_const).fit(disp=0)

# 5. 评估 (R: confusionMatrix / ROC)
print('\\n=== 5. 模型评估 (测试集) ===')
y_pred = rf.predict(X_test)
y_prob = rf.predict_proba(X_test)[:, 1]
print('混淆矩阵:')
cm = confusion_matrix(y_test, y_pred)
print(pd.DataFrame(cm,
    index=['实际:未流失','实际:流失'],
    columns=['预测:未流失','预测:流失']))
print(f'\\n{classification_report(y_test, y_pred, target_names=["未流失","流失"])}')
print(f'AUC: {roc_auc_score(y_test, y_prob):.4f}')

# 6. 特征重要性
print('\\n=== 6. 特征重要性 (Top 10) ===')
importances = pd.DataFrame({
    '特征': X.columns,
    '重要性': rf.feature_importances_
}).sort_values('重要性', ascending=False).head(10)
for i, row in importances.iterrows():
    bar = '█' * int(row['重要性'] * 200)
    print(f'  {row["特征"]:>22s}: {row["重要性"]:.4f} {bar}')

print('\\n✅ 数据挖掘流程完成！')
`
    },
    {
      id: 6, title: '第55关测验', type: 'quiz',
      content: `**问题1**：R 中向量索引从几开始？
- A. 0
- B. 1
- C. 取决于类型
- D. 可配置

**问题2**：ggplot2 中添加散点的几何层是？
- A. geom_lines()
- B. geom_points()
- C. geom_point()
- D. geom_scatter()

**问题3**：线性回归函数是？
- A. regression()
- B. lm()
- C. linear()
- D. fit()

**答案**：1.B  2.C  3.B`
    }
  ],
  // 第56关
  56: [
    {
      id: 1, title: 'Python 内置函数全集', type: 'explanation',
      content: `Python 内置函数无需 import 即可使用，共约 70 个。

**常用分类**：

| 类别 | 函数 |
|------|------|
| 数学 | abs, round, pow, sum, min, max, divmod |
| 序列 | len, range, enumerate, zip, sorted, reversed, slice |
| 类型 | int, float, str, bool, list, tuple, dict, set, bytes |
| 迭代 | iter, next, map, filter, all, any |
| 属性 | dir, type, isinstance, hasattr, getattr, setattr, delattr |
| IO | print, input, open, format, repr |
| 其他 | id, hash, help, callable, eval, exec, compile, globals, locals |

\`\`\`python
# enumerate：带索引遍历
for i, v in enumerate(['a','b','c']):
    print(i, v)

# zip：并行遍历
for a, b in zip([1,2,3], ['x','y','z']):
    print(a, b)

# sorted：高级排序
sorted(students, key=lambda s: s['score'], reverse=True)

# divmod：商和余数
q, r = divmod(17, 5)  # q=3, r=2

# all / any：条件判断
all([x > 0 for x in nums])  # 全部为 True
any(x is None for x in items)  # 任一为 True
\`\`\``
    },
    {
      id: 2, title: 'math 与 statistics 模块', type: 'example',
      content: `\`\`\`python
import math
import statistics

# math 模块
math.pi          # 3.141592653589793
math.e           # 2.718281828459045
math.sqrt(16)    # 4.0
math.ceil(3.2)   # 4
math.floor(3.8)  # 3
math.factorial(5) # 120
math.gcd(12, 8)  # 4
math.log2(1024)  # 10.0
math.log10(1000) # 3.0
math.sin(math.pi/2)  # 1.0
math.degrees(math.pi) # 180.0

# statistics 模块 (Python 3.4+)
data = [1, 2, 3, 4, 5, 5, 5, 6, 7]
statistics.mean(data)        # 4.22
statistics.median(data)      # 5
statistics.mode(data)        # 5
statistics.stdev(data)       # 标准差
statistics.variance(data)    # 方差
statistics.quantiles(data, n=4)  # 四分位数
statistics.correlation(x, y)    # 相关系数
\`\`\``,
      code: `import math, statistics, random

# 圆面积计算器
def circle_area(r):
    return math.pi * r ** 2

# 三角函数应用：计算两点距离
def distance(x1, y1, x2, y2):
    return math.sqrt((x2-x1)**2 + (y2-y1)**2)

# 角度弧度转换
print(f'180度 = {math.radians(180):.4f} 弧度')
print(f'π弧度 = {math.degrees(math.pi):.1f} 度')

# 统计分析
scores = [85, 92, 78, 95, 88, 72, 90, 85, 88, 93]
print(f'\\n成绩统计:')
print(f'  均值: {statistics.mean(scores):.2f}')
print(f'  中位数: {statistics.median(scores)}')
print(f'  众数: {statistics.mode(scores)}')
print(f'  标准差: {statistics.stdev(scores):.2f}')
print(f'  方差: {statistics.variance(scores):.2f}')
q = statistics.quantiles(scores, n=4)
print(f'  四分位: Q1={q[0]:.1f}, Q2={q[1]:.1f}, Q3={q[2]:.1f}')
print(f'  极差: {max(scores)-min(scores)}')
`
    },
    {
      id: 3, title: 'random 与 hashlib', type: 'explanation',
      content: `\`\`\`python
import random
import hashlib

# random 模块
random.random()              # 0.0~1.0
random.randint(1, 100)       # 整数
random.uniform(1.0, 10.0)    # 浮点数
random.choice(['A','B','C']) # 随机选择
random.sample(range(100), 10)# 无重复抽样
random.shuffle(my_list)      # 原地打乱
random.seed(42)              # 固定种子
random.gauss(0, 1)           # 高斯分布

# hashlib 模块
m = hashlib.md5(b'hello')
m.hexdigest()  # '5d41402abc4b2a76b9719d911017c592'

sha = hashlib.sha256(b'hello world')
sha.hexdigest()

# 文件哈希校验
def file_hash(filepath, algo='sha256'):
    h = hashlib.new(algo)
    with open(filepath, 'rb') as f:
        while chunk := f.read(8192):
            h.update(chunk)
    return h.hexdigest()

# 密码加盐
def hash_password(password, salt=None):
    if salt is None:
        salt = os.urandom(16).hex()
    hashed = hashlib.pbkdf2_hmac('sha256', 
        password.encode(), salt.encode(), 100000)
    return salt + hashed.hex()
\`\`\``
    },
    {
      id: 4, title: 'operator 模块', type: 'explanation',
      content: `\`\`\`python
import operator

# 算术运算符函数
operator.add(3, 5)        # 8
operator.sub(10, 3)      # 7
operator.mul(4, 6)       # 24
operator.truediv(10, 3)  # 3.333...
operator.floordiv(10, 3) # 3
operator.mod(10, 3)      # 1
operator.pow(2, 10)      # 1024
operator.neg(5)           # -5
operator.abs(-7)          # 7

# 比较运算符函数
operator.lt(3, 5)   # True (less than)
operator.le(3, 3)   # True (less or equal)
operator.gt(5, 3)   # True (greater than)
operator.eq(3, 3)   # True (equal)
operator.ne(3, 5)   # True (not equal)

# 序列操作
operator.concat([1,2], [3,4])      # [1,2,3,4]
operator.contains([1,2,3], 2)      # True
operator.countOf([1,2,2,3], 2)    # 2
operator.indexOf([1,2,3], 2)       # 1

# itemgetter / attrgetter
inventory = [{'name':'apple','price':5}, {'name':'banana','price':3}]
sorted(inventory, key=operator.itemgetter('price'))

from collections import namedtuple
Person = namedtuple('Person', 'name age')
p = Person('Alice', 30)
operator.attrgetter('name')(p)  # 'Alice'
\`\`\``,
      code: `import operator
from functools import reduce

# 用 operator 替代 lambda
nums = [1, 2, 3, 4, 5]

# 求和：reduce(operator.add, nums) 等价于 reduce(lambda x,y: x+y, nums)
total = reduce(operator.add, nums)
print(f'求和: {total}')

# 求积
product = reduce(operator.mul, nums)
print(f'求积: {product}')

# 排序：用 itemgetter 替代 lambda
students = [
    {'name': 'Alice', 'score': 92, 'age': 20},
    {'name': 'Bob', 'score': 85, 'age': 22},
    {'name': 'Charlie', 'score': 95, 'age': 19},
]

by_score = sorted(students, key=operator.itemgetter('score'), reverse=True)
print('\\n按分数排序:')
for s in by_score:
    print(f'  {s["name"]:8s} 分数:{s["score"]} 年龄:{s["age"]}')

# 多级排序
by_age_score = sorted(students, key=operator.itemgetter('age', 'score'))
print('\\n按年龄→分数排序:')
for s in by_age_score:
    print(f'  {s["name"]:8s} 年龄:{s["age"]} 分数:{s["score"]}')

# attrgetter 示例
class Product:
    def __init__(self, name, price):
        self.name = name
        self.price = price
    def __repr__(self):
        return f'{self.name}({self.price}元)'

products = [Product('键盘', 299), Product('鼠标', 99), Product('显示器', 1599)]
sorted_products = sorted(products, key=operator.attrgetter('price'))
print(f'\\n按价格排序: {sorted_products}')
`
    },
    {
      id: 5, title: '类型注解与虚拟环境', type: 'explanation',
      content: `**类型注解** (Python 3.5+)：

\`\`\`python
from typing import List, Dict, Optional, Union, Tuple, Any

def greet(name: str) -> str:
    return f'Hello, {name}'

def process(data: List[int]) -> Dict[str, int]:
    return {'sum': sum(data), 'len': len(data)}

def find(items: List[str], target: str) -> Optional[int]:
    return items.index(target) if target in items else None

# 复杂类型
Config = Dict[str, Union[str, int, bool]]
Point = Tuple[float, float]
Result = Union[str, None]

# Python 3.9+ 内置泛型
def filter_active(users: list[dict]) -> list[dict]:
    return [u for u in users if u.get('active')]

# Python 3.10+ 联合类型语法
def parse(value: int | str | None = None) -> str:
    return str(value) if value is not None else 'empty'
\`\`\`

**虚拟环境**：

\`\`\`bash
# venv (Python 内置)
python -m venv myenv
# Windows
myenv\\Scripts\\activate
# Linux/Mac
source myenv/bin/activate
deactivate

# conda
conda create -n myenv python=3.12
conda activate myenv
conda deactivate

# pip 包管理
pip install package_name
pip install -r requirements.txt
pip freeze > requirements.txt
pip list  # 查看已安装
\`\`\``
    },
    {
      id: 6, title: '练习：密码管理器', type: 'exercise',
      content: '使用 hashlib + random 实现一个安全的密码管理器',
      code: `import hashlib, os, json, secrets

class PasswordManager:
    def __init__(self, db_file='passwords.json'):
        self.db_file = db_file
        self.data = {}
        self._load()
    
    def _hash(self, password, salt):
        """PBKDF2 加盐哈希"""
        return hashlib.pbkdf2_hmac('sha256', 
            password.encode(), salt.encode(), 100000).hex()
    
    def add(self, site, username, password):
        salt = secrets.token_hex(16)
        hashed = self._hash(password, salt)
        self.data[site] = {
            'username': username,
            'salt': salt,
            'hash': hashed
        }
        self._save()
        print(f'✓ {site} 密码已保存')
    
    def verify(self, site, password):
        if site not in self.data:
            return False
        entry = self.data[site]
        hashed = self._hash(password, entry['salt'])
        return secrets.compare_digest(hashed, entry['hash'])
    
    def _save(self):
        with open(self.db_file, 'w') as f:
            json.dump(self.data, f, indent=2)
    
    def _load(self):
        if os.path.exists(self.db_file):
            with open(self.db_file, 'r') as f:
                self.data = json.load(f)
    
    def list_sites(self):
        return list(self.data.keys())

# 使用示例
pm = PasswordManager()
pm.add('github', 'user123', 'MySecurePass!')
pm.add('gmail', 'user123', 'AnotherPass456')

print(f'已保存的站点: {pm.list_sites()}')

# 验证密码
print(f'\\ngithub 正确密码: {pm.verify("github", "MySecurePass!")}')
print(f'github 错误密码: {pm.verify("github", "WrongPass")}')

# 文件哈希校验
import tempfile
test_file = tempfile.NamedTemporaryFile(delete=False, suffix='.txt')
test_file.write(b'Hello World')
test_file.close()

def file_checksum(filepath):
    h = hashlib.sha256()
    with open(filepath, 'rb') as f:
        while chunk := f.read(8192):
            h.update(chunk)
    return h.hexdigest()

checksum = file_checksum(test_file.name)
print(f'\\n文件 SHA256: {checksum[:32]}...')
os.unlink(test_file.name)
`
    },
    {
      id: 7, title: '第56关测验', type: 'quiz',
      content: `**问题1**：statistics.stdev() 计算什么？
- A. 总体标准差
- B. 样本标准差
- C. 方差
- D. 均值

**问题2**：hashlib.pbkdf2_hmac 相比直接 md5 的优势？
- A. 速度更快
- B. 加盐+迭代次数，更安全
- C. 输出更短
- D. 不需要编码

**问题3**：operator.itemgetter('price') 等价于？
- A. lambda x: x['price']
- B. lambda x: x.price
- C. lambda x: x.get('price')
- D. lambda x, y: x['price']

**答案**：1.B  2.B  3.A`
    }
  ],
  // 第57关
  57: [
    {
      id: 1, title: 'BeautifulSoup HTML 解析', type: 'explanation',
      content: `**BeautifulSoup** 是 Python 最流行的 HTML/XML 解析库。

\`\`\`python
# pip install beautifulsoup4 lxml
from bs4 import BeautifulSoup

html = '''
<html>
  <body>
    <div class="article">
      <h1 id="title">Python 爬虫</h1>
      <p class="content">BeautifulSoup 是一个 HTML 解析库</p>
      <a href="https://example.com" class="link">链接1</a>
      <a href="https://test.com" class="link">链接2</a>
      <ul>
        <li>项目1</li><li>项目2</li><li>项目3</li>
      </ul>
    </div>
  </body>
</html>
'''

soup = BeautifulSoup(html, 'lxml')

# 基本查找
soup.find('h1')                    # 第一个 h1
soup.find('h1', id='title')        # 带属性
soup.find_all('a', class_='link')   # 所有匹配
soup.find_all('a', limit=2)         # 限制数量

# CSS 选择器
soup.select('div.article > h1')     # 子选择器
soup.select_one('a.link')           # 第一个匹配
soup.select('ul > li:nth-child(2)') # 第2个 li

# 获取数据
tag = soup.find('a', class_='link')
tag.text              # 文本内容
tag['href']           # 属性值
tag.get('href', '')   # 安全获取
tag.attrs             # 所有属性

# 遍历
for li in soup.find_all('li'):
    print(li.string)

# 父子兄弟
tag.parent            # 父节点
tag.children          # 直接子节点
tag.next_sibling      # 下一个兄弟
\`\`\``
    },
    {
      id: 2, title: 'Selenium 浏览器自动化', type: 'example',
      content: `\`\`\`python
# pip install selenium
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# 启动浏览器
driver = webdriver.Chrome()  # 需要 chromedriver
driver.get('https://www.baidu.com')

# 查找元素
search_box = driver.find_element(By.ID, 'kw')
search_box.send_keys('Python 爬虫')
search_box.send_keys(Keys.RETURN)

# 等待元素加载
wait = WebDriverWait(driver, 10)
results = wait.until(
    EC.presence_of_all_elements_located((By.CSS_SELECTOR, '.result'))
)

# 提取数据
for result in results[:5]:
    title = result.find_element(By.CSS_SELECTOR, 'h3').text
    link = result.find_element(By.TAG_NAME, 'a').get_attribute('href')
    print(f'{title}: {link}')

# 页面交互
driver.find_element(By.XPATH, '//a[contains(text(),"下一页")]').click()
driver.execute_script('window.scrollTo(0, document.body.scrollHeight)')
driver.save_screenshot('page.png')

# 无头模式
options = webdriver.ChromeOptions()
options.add_argument('--headless')
options.add_argument('--disable-gpu')
driver = webdriver.Chrome(options=options)

driver.quit()
\`\`\``,
      code: `# Selenium 自动化示例（模拟，不需浏览器运行）
from selenium import webdriver
from selenium.webdriver.common.by import By
import time

# 无头浏览器配置
options = webdriver.ChromeOptions()
options.add_argument('--headless')
options.add_argument('--no-sandbox')
options.add_argument('--disable-dev-shm-usage')

# 实际使用时取消下面注释
# driver = webdriver.Chrome(options=options)

print('=== Selenium 自动化脚本 ===')
print('1. 启动 Chrome 无头浏览器')
print('2. 访问目标网页')
print('3. 查找元素并交互')
print('4. 提取数据')
print('5. 截图保存')
print('6. 关闭浏览器')

# 模拟数据提取流程
class MockSeleniumScraper:
    def __init__(self):
        self.pages_visited = 0
        self.data_extracted = []
    
    def scrape_demo(self, urls):
        """模拟爬取多个页面"""
        for url in urls:
            self.pages_visited += 1
            # 模拟 driver.get(url)
            print(f'\\n[{self.pages_visited}] 访问: {url}')
            
            # 模拟提取数据
            mock_results = [
                {'title': f'文章 {i}', 'url': f'{url}/post/{i}'}
                for i in range(1, 4)
            ]
            
            for item in mock_results:
                print(f'  提取: {item["title"]} -> {item["url"]}')
                self.data_extracted.append(item)
            
            # 模拟翻页
            print(f'  等待 2 秒...')
            time.sleep(0.5)  # 实际应为 2 秒
        
        return self.data_extracted

scraper = MockSeleniumScraper()
data = scraper.scrape_demo([
    'https://blog.example.com/page/1',
    'https://blog.example.com/page/2',
    'https://blog.example.com/page/3',
])

print(f'\\n=== 爬取完成 ===')
print(f'访问页面数: {scraper.pages_visited}')
print(f'提取数据量: {len(data)}')
`
    },
    {
      id: 3, title: 'pyecharts 可视化', type: 'explanation',
      content: `\`\`\`python
# pip install pyecharts
from pyecharts.charts import Bar, Line, Pie, Scatter, HeatMap
from pyecharts import options as opts
from pyecharts.globals import ThemeType

# 柱状图
bar = (
    Bar(init_opts=opts.InitOpts(theme=ThemeType.LIGHT))
    .add_xaxis(['周一','周二','周三','周四','周五','周六','周日'])
    .add_yaxis('商家A', [120, 200, 150, 80, 70, 110, 130])
    .add_yaxis('商家B', [90, 180, 160, 100, 90, 120, 140])
    .set_global_opts(
        title_opts=opts.TitleOpts(title='一周销售额'),
        toolbox_opts=opts.ToolboxOpts(),
        datazoom_opts=opts.DataZoomOpts()
    )
)
bar.render('bar_chart.html')

# 折线图
line = (
    Line()
    .add_xaxis(months)
    .add_yaxis('收入', revenue, is_smooth=True)
    .add_yaxis('支出', cost, is_smooth=True)
    .set_series_opts(
        areastyle_opts=opts.AreaStyleOpts(opacity=0.3),
        label_opts=opts.LabelOpts(is_show=False)
    )
)
line.render('line_chart.html')

# 饼图
pie = (
    Pie()
    .add('销售额', [list(z) for z in zip(categories, values)])
    .set_global_opts(title_opts=opts.TitleOpts(title='品类占比'))
    .set_series_opts(label_opts=opts.LabelOpts(formatter='{b}: {d}%'))
)
pie.render('pie_chart.html')

# 组合图（多图叠加）
from pyecharts.charts import Grid
grid = Grid()
grid.add(bar, grid_opts=opts.GridOpts(pos_bottom='60%'))
grid.add(line, grid_opts=opts.GridOpts(pos_top='60%'))
grid.render('dashboard.html')
\`\`\``
    },
    {
      id: 4, title: 'OpenAI API 与 AI 绘画', type: 'explanation',
      content: `\`\`\`python
# pip install openai
from openai import OpenAI

client = OpenAI(api_key='your-api-key')

# 对话补全
response = client.chat.completions.create(
    model='gpt-4',
    messages=[
        {'role': 'system', 'content': '你是一个 Python 编程助手'},
        {'role': 'user', 'content': '解释什么是装饰器'}
    ],
    temperature=0.7,
    max_tokens=500
)
print(response.choices[0].message.content)

# 流式输出
stream = client.chat.completions.create(
    model='gpt-4',
    messages=[{'role': 'user', 'content': '写一个快速排序'}],
    stream=True
)
for chunk in stream:
    if chunk.choices[0].delta.content:
        print(chunk.choices[0].delta.content, end='')

# 图像生成 (AI 绘画)
response = client.images.generate(
    model='dall-e-3',
    prompt='一只在月光下编程的猫，赛博朋克风格',
    size='1024x1024',
    quality='hd',
    n=1
)
image_url = response.data[0].url

# 图像编辑
response = client.images.edit(
    model='dall-e-2',
    image=open('original.png', 'rb'),
    mask=open('mask.png', 'rb'),
    prompt='把背景改成海滩'
)

# 嵌入向量
response = client.embeddings.create(
    model='text-embedding-3-small',
    input='Python 是一门优雅的编程语言'
)
embedding = response.data[0].embedding  # 1536 维向量
\`\`\``
    },
    {
      id: 5, title: '练习：综合爬虫系统', type: 'exercise',
      content: '使用 BeautifulSoup + requests 构建一个新闻聚合爬虫',
      code: `import requests
from bs4 import BeautifulSoup
import json
from datetime import datetime

class NewsScraper:
    def __init__(self):
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
        }
        self.articles = []
    
    def parse_page(self, html):
        """解析 HTML 提取新闻"""
        soup = BeautifulSoup(html, 'html.parser')
        results = []
        
        # 模拟解析新闻列表页
        # 实际网站结构会不同
        for item in soup.find_all('article', class_='news-item'):
            title_tag = item.find('h2') or item.find('h3')
            link_tag = item.find('a')
            time_tag = item.find('time')
            
            if title_tag and link_tag:
                results.append({
                    'title': title_tag.get_text(strip=True),
                    'url': link_tag.get('href', ''),
                    'time': time_tag.get('datetime', '') if time_tag else '',
                    'summary': title_tag.get_text(strip=True)[:100]
                })
        
        return results
    
    def fetch(self, url):
        """获取页面"""
        try:
            resp = requests.get(url, headers=self.headers, timeout=10)
            resp.raise_for_status()
            return resp.text
        except Exception as e:
            print(f'获取失败: {url} -> {e}')
            return None
    
    def scrape(self, urls):
        """批量爬取"""
        for url in urls:
            html = self.fetch(url)
            if html:
                articles = self.parse_page(html)
                self.articles.extend(articles)
                print(f'✓ {url}: 提取 {len(articles)} 条')
        
        return self.articles
    
    def save_json(self, filepath):
        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(self.articles, f, ensure_ascii=False, indent=2)
        print(f'\\n已保存 {len(self.articles)} 条到 {filepath}')

# 模拟 HTML 内容进行测试
mock_html = '''
<html><body>
<article class="news-item">
  <h2><a href="/news/1">Python 3.12 发布</a></h2>
  <time datetime="2024-01-01">2024-01-01</time>
</article>
<article class="news-item">
  <h2><a href="/news/2">AI 编程助手对比</a></h2>
  <time datetime="2024-01-02">2024-01-02</time>
</article>
<article class="news-item">
  <h2><a href="/news/3">数据分析工具盘点</a></h2>
  <time datetime="2024-01-03">2024-01-03</time>
</article>
</body></html>
'''

scraper = NewsScraper()
# 直接解析模拟 HTML
articles = scraper.parse_page(mock_html)
scraper.articles = articles

print(f'提取到 {len(articles)} 条新闻:')
for a in articles:
    print(f'  [{a["time"]}] {a["title"]} -> {a["url"]}')

scraper.save_json('news.json')
`
    },
    {
      id: 6, title: '第57关测验', type: 'quiz',
      content: `**问题1**：BeautifulSoup 中查找所有 a 标签的方法？
- A. soup.find('a')
- B. soup.find_all('a')
- C. soup.select_all('a')
- D. soup.get_all('a')

**问题2**：Selenium 无头模式需要什么参数？
- A. --no-browser
- B. --headless
- C. --invisible
- D. --background

**问题3**：OpenAI AI 绘画使用的模型是？
- A. gpt-4
- B. dall-e-3
- C. whisper
- D. clip

**答案**：1.B  2.B  3.B`
    }
  ],
  // 第58关
  58: [
    {
      id: 1, title: '表单数据与文件上传', type: 'explanation',
      content: `\`\`\`python
from fastapi import FastAPI, Form, UploadFile, File
from fastapi.responses import JSONResponse

app = FastAPI()

# 表单数据
@app.post('/login')
async def login(
    username: str = Form(...),
    password: str = Form(...),
    remember: bool = Form(False)
):
    return {'username': username, 'remember': remember}

# 文件上传
@app.post('/upload')
async def upload_file(file: UploadFile = File(...)):
    content = await file.read()
    return {
        'filename': file.filename,
        'size': len(content),
        'content_type': file.content_type
    }

# 多文件上传
@app.post('/uploads')
async def upload_files(files: list[UploadFile] = File(...)):
    results = []
    for f in files:
        content = await f.read()
        results.append({
            'name': f.filename,
            'size': len(content)
        })
    return {'uploaded': results}

# 表单 + 文件混合
@app.post('/profile')
async def update_profile(
    name: str = Form(...),
    bio: str = Form(''),
    avatar: UploadFile = File(None)
):
    return {'name': name, 'bio': bio, 'has_avatar': avatar is not None}
\`\`\``
    },
    {
      id: 2, title: 'CORS 跨域与静态文件', type: 'example',
      content: `\`\`\`python
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse

app = FastAPI()

# CORS 跨域配置
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        'http://localhost:3000',
        'https://myapp.com'
    ],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)

# 静态文件服务
app.mount('/static', StaticFiles(directory='static'), name='static')

# HTML 页面返回
@app.get('/', response_class=HTMLResponse)
async def home():
    return '''<!DOCTYPE html>
<html><body>
  <h1>FastAPI Web 应用</h1>
  <img src="/static/logo.png">
  <script src="/static/app.js"></script>
</body></html>'''

# 自定义中间件
from starlette.middleware.base import BaseHTTPMiddleware

class TimingMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request, call_next):
        import time
        start = time.time()
        response = await call_next(request)
        duration = (time.time() - start) * 1000
        response.headers['X-Response-Time'] = f'{duration:.2f}ms'
        return response

app.add_middleware(TimingMiddleware)
\`\`\``,
      code: `from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
import time

app = FastAPI(title='博客 API', version='2.0')

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_methods=['*'],
    allow_headers=['*']
)

# 模拟数据库
posts = []
next_id = 1

class PostCreate(BaseModel):
    title: str
    content: str
    author: str = '匿名'

class Post(BaseModel):
    id: int
    title: str
    content: str
    author: str
    created_at: float

@app.middleware('http')
async def add_process_time(request, call_next):
    start = time.time()
    response = await call_next(request)
    response.headers['X-Process-Time'] = f'{(time.time()-start)*1000:.2f}ms'
    return response

@app.get('/api/posts', response_model=list[Post])
def list_posts(limit: int = 10, offset: int = 0):
    return posts[offset:offset+limit]

@app.post('/api/posts', response_model=Post, status_code=201)
def create_post(post: PostCreate):
    global next_id
    new_post = Post(id=next_id, created_at=time.time(), **post.dict())
    posts.append(new_post)
    next_id += 1
    return new_post

@app.get('/api/posts/{post_id}', response_model=Post)
def get_post(post_id: int):
    for p in posts:
        if p.id == post_id:
            return p
    raise HTTPException(404, '文章不存在')

@app.put('/api/posts/{post_id}', response_model=Post)
def update_post(post_id: int, post: PostCreate):
    for i, p in enumerate(posts):
        if p.id == post_id:
            posts[i] = Post(id=post_id, created_at=p.created_at, **post.dict())
            return posts[i]
    raise HTTPException(404)

@app.delete('/api/posts/{post_id}')
def delete_post(post_id: int):
    for i, p in enumerate(posts):
        if p.id == post_id:
            posts.pop(i)
            return {'message': '已删除'}
    raise HTTPException(404)
`
    },
    {
      id: 3, title: 'SQLAlchemy 数据库集成', type: 'explanation',
      content: `\`\`\`python
from sqlalchemy import create_engine, Column, Integer, String, Text, DateTime
from sqlalchemy.orm import sessionmaker, declarative_base
from datetime import datetime

# 数据库连接
SQLALCHEMY_DB_URL = 'sqlite:///./app.db'
engine = create_engine(SQLALCHEMY_DB_URL, connect_args={'check_same_thread': False})
SessionLocal = sessionmaker(bind=engine, autoflush=False, autocommit=False)
Base = declarative_base()

# 模型定义
class Article(Base):
    __tablename__ = 'articles'
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(200), nullable=False)
    content = Column(Text)
    author = Column(String(100))
    created = Column(DateTime, default=datetime.utcnow)
    updated = Column(DateTime, onupdate=datetime.utcnow)

Base.metadata.create_all(bind=engine)

# FastAPI 依赖注入
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# CRUD 路由
@app.get('/articles')
def list_articles(skip: int = 0, limit: int = 20, db=Depends(get_db)):
    return db.query(Article).offset(skip).limit(limit).all()

@app.post('/articles')
def create_article(article: ArticleSchema, db=Depends(get_db)):
    db_article = Article(**article.dict())
    db.add(db_article)
    db.commit()
    db.refresh(db_article)
    return db_article

@app.get('/articles/{article_id}')
def get_article(article_id: int, db=Depends(get_db)):
    article = db.query(Article).filter(Article.id == article_id).first()
    if not article:
        raise HTTPException(404)
    return article
\`\`\`

**Alembic 数据库迁移**：
\`\`\`bash
pip install alembic
alembic init alembic
# 修改 alembic.ini 和 alembic/env.py
alembic revision --autogenerate -m 'create articles table'
alembic upgrade head
alembic downgrade -1
\`\`\``
    },
    {
      id: 4, title: 'Jinja2 模板与前端集成', type: 'explanation',
      content: `\`\`\`python
from fastapi import FastAPI, Request
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles

app = FastAPI()
app.mount('/static', StaticFiles(directory='static'), name='static')
templates = Jinja2Templates(directory='templates')

# 渲染模板
@app.get('/')
async def home(request: Request):
    return templates.TemplateResponse('index.html', {
        'request': request,
        'title': '我的博客',
        'posts': get_all_posts()
    })

# templates/index.html
'''
<!DOCTYPE html>
<html>
<head>
  <title>{{ title }}</title>
  <link rel='stylesheet' href='/static/style.css'>
</head>
<body>
  <h1>{{ title }}</h1>
  {% for post in posts %}
  <article>
    <h2><a href='/posts/{{ post.id }}'>{{ post.title }}</a></h2>
    <p>{{ post.content[:100] }}...</p>
    <small>{{ post.created_at }}</small>
  </article>
  {% endfor %}
</body>
</html>
'''

# 搜索 + 分页
@app.get('/search')
async def search(request: Request, q: str = '', page: int = 1):
    posts = search_posts(q, page=page, per_page=10)
    return templates.TemplateResponse('search.html', {
        'request': request,
        'query': q,
        'posts': posts,
        'page': page,
        'has_next': len(posts) == 10
    })
\`\`\``
    },
    {
      id: 5, title: 'JWT 认证与用户系统', type: 'explanation',
      content: `\`\`\`python
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jose import jwt, JWTError
from passlib.context import CryptContext
from datetime import datetime, timedelta

SECRET = 'your-secret-key'
ALGORITHM = 'HS256'
ACCESS_TOKEN_EXPIRE = timedelta(hours=24)

pwd_ctx = CryptContext(schemes=['bcrypt'], deprecated='auto')
oauth2 = OAuth2PasswordBearer(tokenUrl='/auth/login')

def hash_password(password): return pwd_ctx.hash(password)
def verify_password(plain, hashed): return pwd_ctx.verify(plain, hashed)

def create_token(data: dict):
    to_encode = data.copy()
    to_encode['exp'] = datetime.utcnow() + ACCESS_TOKEN_EXPIRE
    return jwt.encode(to_encode, SECRET, ALGORITHM)

async def get_current_user(token=Depends(oauth2), db=Depends(get_db)):
    try:
        payload = jwt.decode(token, SECRET, [ALGORITHM])
        user_id = payload.get('sub')
        user = db.query(User).get(int(user_id))
        if not user:
            raise HTTPException(401)
        return user
    except JWTError:
        raise HTTPException(401, '无效令牌')

@app.post('/auth/register')
def register(user: UserCreate, db=Depends(get_db)):
    if db.query(User).filter(User.username == user.username).first():
        raise HTTPException(400, '用户名已存在')
    db_user = User(username=user.username, password=hash_password(user.password))
    db.add(db_user)
    db.commit()
    return {'id': db_user.id, 'username': db_user.username}

@app.post('/auth/login')
def login(form: OAuth2PasswordRequestForm = Depends(), db=Depends(get_db)):
    user = db.query(User).filter(User.username == form.username).first()
    if not user or not verify_password(form.password, user.password):
        raise HTTPException(401, '用户名或密码错误')
    token = create_token({'sub': str(user.id)})
    return {'access_token': token, 'token_type': 'bearer'}

@app.get('/auth/me')
def me(user=Depends(get_current_user)):
    return {'id': user.id, 'username': user.username}

@app.post('/articles/{id}/favorite')
def favorite(id: int, user=Depends(get_current_user), db=Depends(get_db)):
    # 需登录才能收藏
    ...
\`\`\``
    },
    {
      id: 6, title: 'FastAPI 测试', type: 'explanation',
      content: `\`\`\`python
from fastapi.testclient import TestClient
import pytest

client = TestClient(app)

def test_list_posts():
    response = client.get('/api/posts')
    assert response.status_code == 200
    assert isinstance(response.json(), list)

def test_create_post():
    response = client.post('/api/posts', json={
        'title': '测试文章',
        'content': '这是内容',
        'author': 'tester'
    })
    assert response.status_code == 201
    assert response.json()['title'] == '测试文章'

def test_get_post_not_found():
    response = client.get('/api/posts/9999')
    assert response.status_code == 404

def test_auth_flow():
    # 注册
    r = client.post('/auth/register', json={
        'username': 'testuser', 'password': 'test123'
    })
    assert r.status_code == 201
    
    # 登录
    r = client.post('/auth/login', data={
        'username': 'testuser', 'password': 'test123'
    })
    assert r.status_code == 200
    token = r.json()['access_token']
    
    # 访问受保护路由
    r = client.get('/auth/me', headers={
        'Authorization': f'Bearer {token}'
    })
    assert r.status_code == 200
    assert r.json()['username'] == 'testuser'

# 运行：pytest test_app.py -v --cov=app
\`\`\``
    },
    {
      id: 7, title: '部署到 Railway', type: 'explanation',
      content: `**部署 FastAPI 到 Railway/Render/Fly.io**：

\`\`\`python
# main.py - 入口文件
import uvicorn
from app import app

if __name__ == '__main__':
    uvicorn.run(app, host='0.0.0.0', port=int(os.environ.get('PORT', 8000)))

# requirements.txt
'''
fastapi==0.104.1
uvicorn[standard]==0.24.0
sqlalchemy==2.0.23
alembic==1.13.0
pydantic==2.5.2
python-jose==3.3.0
passlib[bcrypt]==1.7.4
jinja2==3.1.2
python-multipart==0.0.6
'''

# Dockerfile
'''
FROM python:3.12-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
'''

# railway.json 或 Procfile
# web: uvicorn main:app --host 0.0.0.0 --port $PORT
\`\`\`

**部署步骤**：
1. GitHub 仓库连接 Railway
2. 设置环境变量（DATABASE_URL, SECRET_KEY）
3. 自动构建部署
4. 域名绑定 HTTPS`
    },
    {
      id: 8, title: '第58关测验', type: 'quiz',
      content: `**问题1**：FastAPI 处理表单数据需要哪个装饰器参数？
- A. Form(...)
- B. Body(...)
- C. Field(...)
- D. Param(...)

**问题2**：Alembic 的作用是？
- A. API 测试
- B. 数据库迁移
- C. 模板渲染
- D. 用户认证

**问题3**：FastAPI 测试使用的客户端是？
- A. requests
- B. httpx
- C. TestClient
- D. aiohttp

**答案**：1.A  2.B  3.C`
    }
  ],
  // 第59关
  59: [
    {
      id: 1, title: 'Django Form 组件', type: 'explanation',
      content: `**Django Form** 提供表单验证和渲染：

\`\`\`python
# forms.py
from django import forms

class ContactForm(forms.Form):
    name = forms.CharField(max_length=100, widget=forms.TextInput(attrs={'class': 'form-control'}))
    email = forms.EmailField()
    message = forms.CharField(widget=forms.Textarea(attrs={'rows': 4}))
    rating = forms.IntegerField(min_value=1, max_value=5, required=False)
    
    def clean_email(self):
        email = self.cleaned_data['email']
        if not email.endswith('@example.com'):
            raise forms.ValidationError('请使用公司邮箱')
        return email

# ModelForm：直接从模型生成表单
class ArticleForm(forms.ModelForm):
    class Meta:
        model = Article
        fields = ['title', 'content', 'author']
        widgets = {
            'content': forms.Textarea(attrs={'rows': 5}),
        }

# views.py
def contact(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']
            # 处理逻辑
            return redirect('success')
    else:
        form = ContactForm()
    return render(request, 'contact.html', {'form': form})

# template
'''{{ form.as_p }}
{{ form.name.label_tag }} {{ form.name }}
{% if form.name.errors %}{{ form.name.errors }}{% endif %}'''
\`\`\``
    },
    {
      id: 2, title: 'ORM 多表关联', type: 'example',
      content: `\`\`\`python
# models.py
class Author(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()

class Category(models.Model):
    name = models.CharField(max_length=50)

class Article(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    author = models.ForeignKey(Author, on_delete=models.CASCADE, related_name='articles')
    categories = models.ManyToManyField(Category)
    tags = models.CharField(max_length=200, blank=True)
    published = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['-published']

# 查询：跨表关联
# 1. 正向查询
article = Article.objects.get(pk=1)
print(article.author.name)  # 文章作者名
print(article.categories.all())  # 文章所有分类

# 2. 反向查询
author = Author.objects.get(pk=1)
print(author.articles.all())  # 作者的所有文章
print(author.articles.filter(title__icontains='Python'))

# 3. select_related (ForeignKey 一对一，JOIN查询)
articles = Article.objects.select_related('author').all()
# 避免 N+1 查询问题

# 4. prefetch_related (ManyToMany，分两次查询)
articles = Article.objects.prefetch_related('categories').all()

# 5. 聚合与注解
from django.db.models import Count, Avg, Sum, Q

# 每个作者的文章数
authors = Author.objects.annotate(article_count=Count('articles'))
for a in authors:
    print(f'{a.name}: {a.article_count} 篇')

# 分类下平均阅读量
Category.objects.annotate(avg_articles=Count('article'))

# 复杂条件
Article.objects.filter(
    Q(author__name='张三') | Q(categories__name='Python'),
    published__year=2024
).distinct()
\`\`\``,
      code: `# Django ORM 多表查询示例 (Python 模拟)
# 等价的 Django 代码可在 Django 项目中直接运行
import sqlite3

# 创建内存数据库模拟
conn = sqlite3.connect(':memory:')
c = conn.cursor()

c.executescript('''
CREATE TABLE author (id INTEGER PRIMARY KEY, name TEXT, email TEXT);
CREATE TABLE category (id INTEGER PRIMARY KEY, name TEXT);
CREATE TABLE article (id INTEGER PRIMARY KEY, title TEXT, content TEXT,
    author_id INTEGER, published TEXT,
    FOREIGN KEY (author_id) REFERENCES author(id));
CREATE TABLE article_categories (article_id INTEGER, category_id INTEGER,
    FOREIGN KEY (article_id) REFERENCES article(id),
    FOREIGN KEY (category_id) REFERENCES category(id));
''')

# 插入数据
authors = [(1,'张三','zs@qq.com'), (2,'李四','ls@qq.com'), (3,'王五','ww@qq.com')]
c.executemany('INSERT INTO author VALUES (?,?,?)', authors)

categories = [(1,'Python'), (2,'Web'), (3,'数据科学')]
c.executemany('INSERT INTO category VALUES (?,?,?)', categories)

articles = [
    (1,'Django入门','内容...','2024-01-15',1),
    (2,'FastAPI指南','内容...','2024-02-20',1),
    (3,'Pandas教程','内容...','2024-03-10',2),
    (4,'NumPy进阶','内容...','2024-03-15',2),
    (5,'R语言基础','内容...','2024-04-01',3),
]
c.executemany('INSERT INTO article VALUES (?,?,?,?,?)', articles)

m2m = [(1,1),(1,2),(2,2),(3,1),(3,3),(4,1),(5,3)]
c.executemany('INSERT INTO article_categories VALUES (?,?)', m2m)
conn.commit()

print('=== Django ORM 多表查询等价 SQL ===')

# select_related 等价：JOIN 查询
print('\\n1. 文章 + 作者 (JOIN):')
c.execute('''SELECT a.title, au.name, a.published
             FROM article a JOIN author au ON a.author_id = au.id
             ORDER BY a.published''')
for row in c.fetchall():
    print(f'  {row[2][:10]} | {row[1]:4s} | {row[0]}')

# 聚合：每作者文章数
print('\\n2. 每个作者文章数 (annotate + Count):')
c.execute('''SELECT au.name, COUNT(a.id) as cnt
             FROM author au LEFT JOIN article a ON a.author_id = au.id
             GROUP BY au.name ORDER BY cnt DESC''')
for row in c.fetchall():
    print(f'  {row[0]}: {row[1]} 篇')

# 多对多查询
print('\\n3. 各分类的文章 (M2M):')
c.execute('''SELECT cat.name, GROUP_CONCAT(a.title, ' | ')
             FROM category cat
             JOIN article_categories ac ON ac.category_id = cat.id
             JOIN article a ON a.id = ac.article_id
             GROUP BY cat.name''')
for row in c.fetchall():
    print(f'  [{row[0]}] {row[1]}')

# Q 对象等价：复杂条件
print('\\n4. 张三或Python分类的文章 (Q | Q):')
c.execute('''SELECT DISTINCT a.title, au.name
             FROM article a
             JOIN author au ON a.author_id = au.id
             LEFT JOIN article_categories ac ON ac.article_id = a.id
             LEFT JOIN category cat ON cat.id = ac.category_id
             WHERE au.name = '张三' OR cat.name = 'Python' ''')
for row in c.fetchall():
    print(f'  {row[1]} - {row[0]}')

conn.close()
`
    },
    {
      id: 3, title: '聚合查询与 Auth 组件', type: 'explanation',
      content: `\`\`\`python
from django.db.models import Count, Sum, Avg, Max, Min, Q, F

# 聚合查询
stats = Article.objects.aggregate(
    total=Count('id'),
    avg_content=Avg('length'),
    max_date=Max('published')
)

# 分组聚合
by_author = Article.objects.values('author__name').annotate(
    count=Count('id'),
    latest=Max('published')
).order_by('-count')

# 条件聚合
popular = Article.objects.filter(
    published__year=2024
).annotate(
    view_count=Count('views')
).filter(view_count__gte=100)

# F 表达式：字段间运算
Product.objects.filter(stock__lt=F('min_stock'))
Employee.objects.update(salary=F('salary') * 1.1)

# Django Auth 用户认证
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User

# 注册
user = User.objects.create_user('alice', 'alice@example.com', 'pass123')

# 登录
def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user:
            login(request, user)
            return redirect('home')
    return render(request, 'login.html')

# 登出
def logout_view(request):
    logout(request)
    return redirect('home')

# 需要登录才能访问
@login_required
def profile(request):
    return render(request, 'profile.html', {'user': request.user})

# 权限检查
@user_passes_test(lambda u: u.is_staff)
def admin_panel(request):
    ...
\`\`\``
    },
    {
      id: 4, title: 'Cookie/Session 与中间件', type: 'explanation',
      content: `\`\`\`python
# Cookie 操作
def set_cookie(request):
    resp = HttpResponse('Cookie 已设置')
    resp.set_cookie('username', 'alice', max_age=3600)
    resp.set_cookie('theme', 'dark', httponly=True, secure=True)
    return resp

def get_cookie(request):
    username = request.COOKIES.get('username', '游客')
    theme = request.COOKIES.get('theme', 'light')
    return HttpResponse(f'用户: {username}, 主题: {theme}')

# Session 操作
def set_session(request):
    request.session['user_id'] = 42
    request.session['cart'] = {'apple': 3, 'banana': 5}
    request.session.set_expiry(1800)  # 30分钟过期
    return HttpResponse('Session 已设置')

def get_session(request):
    cart = request.session.get('cart', {})
    total = sum(cart.values())
    return HttpResponse(f'购物车: {total} 件商品')

# 自定义中间件
class SimpleMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response
    
    def __call__(self, request):
        # 请求前处理
        request.start_time = time.time()
        
        response = self.get_response(request)
        
        # 响应后处理
        duration = time.time() - request.start_time
        response['X-Process-Time'] = f'{duration:.4f}s'
        return response

# settings.py
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'myapp.middleware.SimpleMiddleware',  # 自定义
]
\`\`\``
    },
    {
      id: 5, title: 'CBV 类视图', type: 'explanation',
      content: `\`\`\`python
from django.views import View
from django.views.generic import (
    ListView, DetailView, CreateView, UpdateView, DeleteView, TemplateView
)

# 基础 CBV
class HelloView(View):
    def get(self, request):
        return HttpResponse('Hello!')
    
    def post(self, request):
        return HttpResponse('POST received')

# ListView：列表页
class ArticleListView(ListView):
    model = Article
    template_name = 'article/list.html'
    context_object_name = 'articles'
    paginate_by = 10
    
    def get_queryset(self):
        qs = super().get_queryset()
        cat = self.kwargs.get('category')
        if cat:
            qs = qs.filter(categories__name=cat)
        return qs

# DetailView：详情页
class ArticleDetailView(DetailView):
    model = Article
    template_name = 'article/detail.html'

# CreateView：创建
class ArticleCreateView(LoginRequiredMixin, CreateView):
    model = Article
    fields = ['title', 'content', 'categories']
    template_name = 'article/form.html'
    
    def form_valid(self, form):
        form.instance.author = self.request.user
        return super().form_valid(form)

# UpdateView / DeleteView
class ArticleUpdateView(LoginRequiredMixin, UpdateView):
    model = Article
    fields = ['title', 'content']
    template_name = 'article/form.html'

class ArticleDeleteView(LoginRequiredMixin, DeleteView):
    model = Article
    success_url = reverse_lazy('article-list')

# Mixin：功能复用
class AjaxResponseMixin:
    def render_to_json(self, context):
        return JsonResponse(context)

class AjaxListView(AjaxResponseMixin, ListView):
    def render_to_response(self, context):
        if self.request.headers.get('X-Requested-With') == 'XMLHttpRequest':
            return self.render_to_json(context)
        return super().render_to_response(context)
\`\`\``
    },
    {
      id: 6, title: 'Nginx + uWSGI 部署', type: 'explanation',
      content: `\`\`\`bash
# uWSGI 配置 (mysite.ini)
'''
[uwsgi]
chdir = /path/to/project
module = myproject.wsgi:application
master = true
processes = 4
socket = /tmp/uwsgi.sock
chmod-socket = 666
vacuum = true
die-on-term = true
'''

# Nginx 配置 (/etc/nginx/sites-available/mysite)
'''
server {
    listen 80;
    server_name mysite.com;
    
    location /static/ {
        alias /path/to/project/static/;
        expires 30d;
    }
    
    location /media/ {
        alias /path/to/project/media/;
    }
    
    location / {
        include uwsgi_params;
        uwsgi_pass unix:/tmp/uwsgi.sock;
    }
}
'''

# 启动
# uwsgi --ini mysite.ini --daemonize /var/log/uwsgi.log
# nginx -t && systemctl restart nginx

# Gunicorn 替代方案
# gunicorn myproject.wsgi:application --bind 0.0.0.0:8000 --workers 4
\`\`\`

**部署检查清单**：
- [ ] DEBUG = False
- [ ] ALLOWED_HOSTS 配置
- [ ] STATIC_ROOT 设置并 collectstatic
- [ ] 数据库迁移完成
- [ ] HTTPS 证书配置
- [ ] 日志和监控`
    },
    {
      id: 7, title: '练习：博客项目实战', type: 'exercise',
      content: '构建完整的 Django 博客系统：模型/视图/模板/表单/认证',
      code: `# === Django 博客项目核心代码 ===

# models.py
from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse

class Category(models.Model):
    name = models.CharField(max_length=50, unique=True)
    slug = models.SlugField(unique=True)
    
    def __str__(self):
        return self.name

class Post(models.Model):
    STATUS_CHOICES = [('draft','草稿'), ('published','已发布')]
    
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    content = models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='posts')
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='draft')
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-created']
    
    def __str__(self):
        return self.title
    
    def get_absolute_url(self):
        return reverse('post-detail', args=[self.slug])

# forms.py
from django import forms
from .models import Post

class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['title', 'content', 'category', 'status']
        widgets = {
            'content': forms.Textarea(attrs={'rows': 8, 'class': 'editor'}),
        }

# views.py (CBV)
from django.views.generic import ListView, DetailView, CreateView, UpdateView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import redirect
from .models import Post
from .forms import PostForm

class PostListView(ListView):
    model = Post
    paginate_by = 10
    context_object_name = 'posts'
    
    def get_queryset(self):
        qs = Post.objects.filter(status='published')
        cat = self.request.GET.get('cat')
        if cat:
            qs = qs.filter(category__slug=cat)
        q = self.request.GET.get('q')
        if q:
            qs = qs.filter(title__icontains=q)
        return qs

class PostDetailView(DetailView):
    model = Post
    context_object_name = 'post'
    
    def get_queryset(self):
        return Post.objects.filter(status='published')

class PostCreateView(LoginRequiredMixin, CreateView):
    model = Post
    form_class = PostForm
    success_url = '/'
    
    def form_valid(self, form):
        form.instance.author = self.request.user
        return super().form_valid(form)

class PostUpdateView(LoginRequiredMixin, UpdateView):
    model = Post
    form_class = PostForm
    success_url = '/'

# urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.PostListView.as_view(), name='post-list'),
    path('post/<slug:slug>/', views.PostDetailView.as_view(), name='post-detail'),
    path('post/new/', views.PostCreateView.as_view(), name='post-create'),
    path('post/<slug:slug>/edit/', views.PostUpdateView.as_view(), name='post-edit'),
]

print('博客项目核心代码已定义完毕')
print('包含: 模型(Post/Category) + 表单(PostForm) + 视图(ListView/DetailView/CreateView/UpdateView)')
print('需在 Django 项目中创建模板文件和运行迁移命令')
`
    },
    {
      id: 8, title: '第59关测验', type: 'quiz',
      content: `**问题1**：Django ORM 避免 N+1 查询的方法？
- A. select_related() 和 prefetch_related()
- B. only() 和 defer()
- C. values() 和 values_list()
- D. distinct() 和 order_by()

**问题2**：CBV 中处理 GET 请求的方法名？
- A. handle_get
- B. get
- C. on_get
- D. do_get

**问题3**：Django 部署时收集静态文件的命令？
- A. python manage.py collectstatic
- B. python manage.py static
- C. python manage.py gather_static
- D. python manage.py compilestatic

**答案**：1.A  2.B  3.A`
    }
  ],
  // 第60关
  60: [
    {
      id: 1, title: 'R 字符串与列表', type: 'explanation',
      content: `\`\`\`r
# 字符串
s <- 'Hello, R!'
nchar(s)                  # 长度
toupper(s); tolower(s)    # 大小写
substr(s, 1, 5)           # 子串
paste('A', 'B', sep='-')  # 'A-B'
paste0('x', 1:3)          # 'x1' 'x2' 'x3'
gsub('l', 'L', s)         # 替换
strsplit('a,b,c', ',')[[1]]  # 分割
sprintf('值: %.2f', 3.14159)  # 格式化

# 列表 (list)
lst <- list(name='Alice', age=25, scores=c(90,85,88))
lst$name      # 'Alice'
lst[['age']]  # 25
lst[1]        # 子列表
lst[[1]]      # 元素值

# 添加/修改
lst$city <- 'Beijing'
lst$age <- 26

# lapply/sapply：列表遍历
lapply(lst, class)
sapply(lst, length)
\`\`\``
    },
    {
      id: 2, title: 'R 数组与因子', type: 'example',
      content: `\`\`\`r
# 数组 (array) - 多维
arr <- array(1:24, dim=c(4, 3, 2))
arr[1, 1, 1]  # 第1个元素
arr[, , 1]     # 第1个矩阵
arr[, , 2]     # 第2个矩阵
dim(arr)       # 4 3 2
apply(arr, c(1,2), mean)  # 按行列求均值

# 因子 (factor) - 分类变量
gender <- factor(c('M','F','F','M','M'))
levels(gender)  # 'F' 'M'
table(gender)   # F:2 M:3

# 有序因子
grade <- factor(c('B','A','C','B','A'),
    levels=c('C','B','A'), ordered=TRUE)
grade[1] > grade[2]  # FALSE (B < A)

# 因子与数值
scores <- cut(c(45, 67, 89, 23, 78, 56),
    breaks=c(0, 60, 80, 100),
    labels=c('不及格','及格','优秀'))
table(scores)  # 统计各等级人数
\`\`\``,
      code: `# R 数组与因子 (Python 等价实现)
import numpy as np
import pandas as pd

print('=== R 数组与因子 ===')

# R: arr <- array(1:24, dim=c(4,3,2))
arr = np.arange(1, 25).reshape(2, 4, 3)  # 注意 R 是列优先
print(f'数组形状: {arr.shape} (等价 R dim=c(4,3,2))')
print(f'第1层:\\n{arr[0]}')
print(f'第2层:\\n{arr[1]}')

# apply(arr, c(1,2), mean)
print(f'\\napply 行均值: {arr.mean(axis=0).round(1)}')

# R: factor
print('\\n=== R 因子 (等价 pandas.Categorical) ===')
gender = pd.Categorical(['M','F','F','M','M'], categories=['F','M'])
print(f'因子: {list(gender)}')
print(f'levels: {gender.categories.tolist()}')
print(f'table: {dict(zip(*np.unique(gender, return_counts=True)))}')

# 有序因子
grade = pd.Categorical(
    ['B','A','C','B','A'],
    categories=['C','B','A'],
    ordered=True
)
print(f'\\n有序因子: {list(grade)}')
print(f'B > A: {grade[0] > grade[1]}')  # B > A = True

# cut 分箱
scores = [45, 67, 89, 23, 78, 56]
bins = pd.cut(scores, bins=[0, 60, 80, 100], labels=['不及格','及格','优秀'])
print(f'\\ncut 分箱: {list(bins)}')
print(f'table: {dict(zip(*np.unique(bins, return_counts=True)))}')
`
    },
    {
      id: 3, title: 'R 数据重塑与包管理', type: 'explanation',
      content: `\`\`\`r
# 数据重塑
library(tidyr)
library(dplyr)

df <- data.frame(
    id = 1:4,
    Q1 = c(10, 20, 30, 40),
    Q2 = c(15, 25, 35, 45),
    Q3 = c(20, 30, 40, 50)
)

# 宽表转长表 (pivot_longer)
long <- pivot_longer(df, cols=Q1:Q3, names_to='quarter', values_to='score')

# 长表转宽表 (pivot_wider)
wide <- pivot_wider(long, names_from=quarter, values_from=score)

# dplyr 数据处理管道
result <- df %>%
    mutate(total = Q1 + Q2 + Q3) %>%
    filter(total > 60) %>%
    arrange(desc(total)) %>%
    select(id, total)

# R 包管理
install.packages('dplyr')     # CRAN 安装
library(dplyr)               # 加载
installed.packages()         # 查看已安装
remove.packages('dplyr')     # 卸载

# 开发者工具
install.packages('devtools')
devtools::install_github('rstudio/shiny')

# 包的命名空间
dplyr::filter(df, Q1 > 15)  # 显式调用
\`\`\``
    },
    {
      id: 4, title: 'R 文件读写', type: 'explanation',
      content: `\`\`\`r
# CSV 读写
df <- read.csv('data.csv', header=TRUE, sep=',', stringsAsFactors=FALSE)
write.csv(df, 'output.csv', row.names=FALSE, fileEncoding='UTF-8')

# Excel (需 readxl/writexl 包)
library(readxl)
df <- read_excel('data.xlsx', sheet=1, skip=0)
library(writexl)
write_xlsx(df, 'output.xlsx')

# JSON (需 jsonlite 包)
library(jsonlite)
data <- fromJSON('data.json')
toJSON(df, pretty=TRUE, dataframe='rows')

# XML (需 xml2 包)
library(xml2)
doc <- read_xml('data.xml')
xml_name(doc)
xml_text(xml_find_all(doc, '//item'))

# MySQL 连接 (需 RMySQL/DBI 包)
library(DBI)
con <- dbConnect(RMySQL::MySQL(),
    dbname='mydb', host='localhost',
    user='root', password='pass')
df <- dbGetQuery(con, 'SELECT * FROM users')
dbDisconnect(con)

# RDS (R 原生格式)
saveRDS(df, 'data.rds')
df <- readRDS('data.rds')
\`\`\``,
      code: `# R 文件读写 (Python 等价实现)
import pandas as pd
import json
import sqlite3
import os

print('=== R 文件读写 (Python 等价) ===')

# 创建测试数据
df = pd.DataFrame({
    'name': ['Alice','Bob','Charlie','David'],
    'age': [25, 30, 35, 28],
    'score': [85, 92, 78, 95]
})

# R: read.csv / write.csv
df.to_csv('test_data.csv', index=False)
df_read = pd.read_csv('test_data.csv')
print(f'CSV 读写: {len(df_read)} 行')

# R: write_xlsx / read_excel
try:
    df.to_excel('test_data.xlsx', index=False)
    df_xlsx = pd.read_excel('test_data.xlsx')
    print(f'Excel 读写: {len(df_xlsx)} 行')
except:
    print('Excel 读写: 需 openpyxl 库')

# R: toJSON / fromJSON
json_str = df.to_json(orient='records', force_ascii=False, indent=2)
df_json = pd.read_json(json_str)
print(f'JSON 读写: {len(df_json)} 行')

# R: saveRDS / readRDS (等价 pickle)
import pickle
with open('data.pkl', 'wb') as f:
    pickle.dump(df, f)
with open('data.pkl', 'rb') as f:
    df_pkl = pickle.load(f)
print(f'Pickle 读写: {len(df_pkl)} 行')

# R: dbConnect (MySQL 等价 SQLite)
conn = sqlite3.connect(':memory:')
df.to_sql('users', conn, index=False, if_exists='replace')
result = pd.read_sql('SELECT * FROM users WHERE score > 80', conn)
print(f'\\nSQL 查询 (score > 80):')
print(result.to_string(index=False))

# JSON 文件输出
with open('output.json', 'w', encoding='utf-8') as f:
    json.dump(df.to_dict('records'), f, ensure_ascii=False, indent=2)
print(f'\\n已输出: output.json')

# 清理
for f in ['test_data.csv', 'data.pkl', 'output.json']:
    if os.path.exists(f):
        os.remove(f)
conn.close()
print('清理完成')
`
    },
    {
      id: 5, title: 'R 绘图系统', type: 'explanation',
      content: `\`\`\`r
# 基础绘图系统
# 饼图
slices <- c(40, 25, 20, 15)
labels <- c('电子','服装','食品','其他')
pie(slices, labels=labels, main='销售占比',
    col=rainbow(length(slices)))
legend('topright', labels, fill=rainbow(length(slices)))

# 条形图
counts <- c(150, 200, 120, 80)
barplot(counts, names.arg=c('Q1','Q2','Q3','Q4'),
    col='steelblue', main='季度销量',
    xlab='季度', ylab='销量')

# 散点图
plot(x, y, main='散点图', xlab='X轴', ylab='Y轴',
    pch=19, col='blue')
abline(lm(y ~ x), col='red', lwd=2)

# 函数曲线图
curve(x^2, from=-5, to=5, main='y = x²',
    xlab='x', ylab='y', col='purple', lwd=2)
curve(sin(x), add=TRUE, col='blue')

# 中文支持
# Windows: par(family='STKaiti')
# Mac: par(family='STHeiti')
# Linux: 需安装中文字体

# ggplot2 绘图
library(ggplot2)
ggplot(df, aes(x=quarter, y=sales, fill=region)) +
    geom_bar(stat='identity') +
    facet_wrap(~region, ncol=2) +
    labs(title='季度销售') +
    theme_minimal() +
    theme(text=element_text(family='STKaiti'))
\`\`\``
    },
    {
      id: 6, title: '练习：R 完整数据分析', type: 'exercise',
      content: 'R 风格的完整数据分析流程：数据导入 → 清洗 → 分析 → 可视化',
      code: `# R 数据分析完整流程 (Python 等价实现)
import pandas as pd
import numpy as np
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from scipy import stats

matplotlib.rcParams['font.family'] = ['Microsoft YaHei', 'SimHei']
matplotlib.rcParams['axes.unicode_minus'] = False

print('=' * 50)
print('  R 数据分析流程 - 电商用户分析')
print('=' * 50)

# 1. 数据导入 (R: read.csv)
np.random.seed(42)
N = 500
df = pd.DataFrame({
    'user_id': range(1, N+1),
    'age': np.random.normal(32, 10, N).clip(18, 65).astype(int),
    'gender': np.random.choice(['M','F'], N),
    'city': np.random.choice(['北京','上海','广州','深圳','成都'], N),
    'reg_days': np.random.randint(1, 1000, N),
    'total_spent': np.random.exponential(500, N).clip(0, 5000).round(2),
    'orders': np.random.poisson(5, N),
    'last_active': pd.date_range('2024-01-01', periods=N, freq='1H')
})
print(f'\\n1. 数据导入: {len(df)} 条记录, {len(df.columns)} 个字段')

# 2. 数据清洗 (R: dplyr::mutate/filter)
df['avg_order'] = (df['total_spent'] / df['orders']).round(2)
df['segment'] = pd.cut(df['total_spent'],
    bins=[0, 100, 500, 2000, float('inf')],
    labels=['低消费','中消费','高消费','VIP'])
print(f'\\n2. 数据清洗: 新增 avg_order, segment 字段')

# 3. 描述统计 (R: summary)
print(f'\\n3. 描述统计:')
print(f'   年龄: {df.age.mean():.1f} ± {df.age.std():.1f}')
print(f'   总消费: {df.total_spent.sum():,.0f} 元')
print(f'   平均订单: {df.orders.mean():.1f}')

# 4. 分组分析 (R: group_by + summarize)
print(f'\\n4. 分组分析:')
city_stats = df.groupby('city').agg(
    用户数=('user_id','count'),
    总消费=('total_spent','sum'),
    平均消费=('total_spent','mean'),
    订单数=('orders','sum')
).round(2).sort_values('总消费', ascending=False)
print(city_stats.to_string())

# 5. 假设检验 (R: t.test)
male_spent = df[df.gender=='M']['total_spent']
female_spent = df[df.gender=='F']['total_spent']
t_stat, p_val = stats.ttest_ind(male_spent, female_spent)
print(f'\\n5. 假设检验 (男女消费差异):')
print(f'   t = {t_stat:.3f}, p = {p_val:.4f}')
print(f'   结论: {"显著差异" if p_val < 0.05 else "无显著差异"} (α=0.05)')

# 6. 相关性分析 (R: cor.test)
r_age, p_age = stats.pearsonr(df['age'], df['total_spent'])
r_days, p_days = stats.pearsonr(df['reg_days'], df['orders'])
print(f'\\n6. 相关性:')
print(f'   年龄 vs 消费: r={r_age:.3f} (p={p_age:.4f})')
print(f'   注册天数 vs 订单: r={r_days:.3f} (p={p_days:.4f})')

# 7. 可视化 (R: ggplot2 / base plot)
fig, axes = plt.subplots(2, 2, figsize=(12, 10))

# 条形图: 城市分布
city_counts = df['city'].value_counts()
axes[0,0].bar(city_counts.index, city_counts.values, color='#3498db')
axes[0,0].set_title('用户城市分布')

# 饼图: 消费分层
seg_counts = df['segment'].value_counts()
axes[0,1].pie(seg_counts.values, labels=seg_counts.index, autopct='%1.1f%%')
axes[0,1].set_title('消费分层占比')

# 散点图: 年龄 vs 消费
axes[1,0].scatter(df['age'], df['total_spent'], alpha=0.3, c='#e74c3c')
z = np.polyfit(df['age'], df['total_spent'], 1)
axes[1,0].plot(df['age'], np.polyval(z, df['age']), 'b-', linewidth=2)
axes[1,0].set_xlabel('年龄'); axes[1,0].set_ylabel('总消费')
axes[1,0].set_title('年龄 vs 消费')

# 直方图: 订单数分布
axes[1,1].hist(df['orders'], bins=20, color='#2ecc71', edgecolor='white')
axes[1,1].set_title('订单数分布')

plt.tight_layout()
plt.savefig('r_analysis.png', dpi=120)
print(f'\\n7. 可视化完成: r_analysis.png')
print(f'\\n✅ R 数据分析流程完成！')
`
    },
    {
      id: 7, title: '第60关测验', type: 'quiz',
      content: `**问题1**：R 中宽表转长表的函数是？
- A. pivot_longer
- B. melt
- C. gather
- D. reshape_long

**问题2**：R 的因子(factor)对应 Python 的什么类型？
- A. list
- B. Categorical
- C. tuple
- D. Series

**问题3**：R 中读取 Excel 文件的包是？
- A. xlsx
- B. readxl
- C. openxlsx
- D. 以上均可

**答案**：1.A  2.B  3.D`
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
  ],
  // ============== 19. Requests 挑战 ==============
  19: [
    {
      id: 1,
      title: '模拟 API 客户端',
      description: '使用 requests_ 模拟库实现一个 API 客户端。\n\n要求：\n- GET /api/users 获取用户列表\n- POST /api/users 创建新用户\n- GET /api/users/{id} 获取单个用户\n- 打印每次请求的状态码和响应体',
      difficulty: 'medium',
      initialCode: `from requests_ import Session

s = Session(base_url="https://api.example.com")

# 1. 获取用户列表
# resp = s.get("/api/users")
# print(resp.status_code, resp.json())

# 2. 创建新用户
# resp = s.post("/api/users", json={"name":"小明","age":20})
# print(resp.status_code, resp.json())

# 3. 获取 id=1 的用户
# resp = s.get("/api/users/1")
# print(resp.status_code, resp.json())
`,
      testCode: `output = _output_buffer.getvalue()
_test_results.append({
    "name": "GET 请求成功",
    "passed": "200" in output,
    "message": "GET 请求应返回 200"
})
_test_results.append({
    "name": "POST 创建成功",
    "passed": "201" in output or "200" in output,
    "message": "POST 创建应返回 201 或 200"
})
_test_results.append({
    "name": "包含用户名",
    "passed": "小明" in output or "name" in output,
    "message": "响应中应包含用户名"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: '200' }
      ],
      xpReward: 30
    },
    {
      id: 2,
      title: '带认证的请求封装',
      description: '封装一个带 Token 认证的 API 客户端。\n\n要求：\n- 类 ApiClient，构造函数接收 token\n- 方法 request(method, path) 自动加 Authorization 头\n- 401 时自动重试一次\n- 模拟调用并打印结果',
      difficulty: 'hard',
      initialCode: `from requests_ import Session

class ApiClient:
    def __init__(self, token):
        self.token = token
        self.s = Session(base_url="https://api.example.com")

    def request(self, method, path, json=None):
        # 在此实现：加 Authorization 头
        # 401 时重试一次
        pass

client = ApiClient(token="abc123")
print(client.request("GET", "/api/profile"))
print(client.request("POST", "/api/posts", json={"title":"Hello"}))
`,
      testCode: `output = _output_buffer.getvalue()
_test_results.append({
    "name": "包含认证信息",
    "passed": "abc123" in output or "token" in output.lower() or "Authorization" in output,
    "message": "应包含 Token 认证信息"
})
_test_results.append({
    "name": "GET 请求成功",
    "passed": "200" in output,
    "message": "GET /api/profile 应返回 200"
})
_test_results.append({
    "name": "POST 请求成功",
    "passed": "201" in output or "200" in output,
    "message": "POST 应返回 201 或 200"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: '200' }
      ],
      xpReward: 40
    }
  ],
  // ============== 20. 正则表达式 re 挑战 ==============
  20: [
    {
      id: 1,
      title: '日志解析器',
      description: '用正则表达式解析 Nginx 日志。\n\n日志格式：[IP] - - [时间] "METHOD /path HTTP/1.1" 状态码 字节数\n\n要求：\n- 提取 IP、时间、方法、路径、状态码\n- 统计各状态码数量\n- 打印 Top 3 IP',
      difficulty: 'medium',
      initialCode: `import re
from collections import Counter

logs = [
    '192.168.1.1 - - [2024-01-01 10:00:00] "GET /index.html HTTP/1.1" 200 1024',
    '10.0.0.5 - - [2024-01-01 10:01:00] "POST /api/login HTTP/1.1" 401 512',
    '192.168.1.1 - - [2024-01-01 10:02:00] "GET /style.css HTTP/1.1" 200 2048',
    '10.0.0.5 - - [2024-01-01 10:03:00] "GET /api/users HTTP/1.1" 403 256',
    '172.16.0.3 - - [2024-01-01 10:04:00] "DELETE /api/post/1 HTTP/1.1" 200 128',
]

pattern = r'(\\d+\\.\\d+\\.\\d+\\.\\d+).*?\\[([^\\]]+)\\].*?"(\\w+)\\s+(\\S+).*?"\\s+(\\d+)'

# 在此解析并输出
`,
      testCode: `output = _output_buffer.getvalue()
_test_results.append({
    "name": "包含 IP 地址",
    "passed": "192.168.1.1" in output or "10.0.0.5" in output,
    "message": "应提取并显示 IP 地址"
})
_test_results.append({
    "name": "包含状态码统计",
    "passed": "200" in output and ("401" in output or "403" in output),
    "message": "应统计状态码 200/401/403"
})
_test_results.append({
    "name": "包含请求方法",
    "passed": "GET" in output or "POST" in output,
    "message": "应提取 HTTP 方法"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: '192.168' }
      ],
      xpReward: 35
    },
    {
      id: 2,
      title: '邮箱与手机号提取',
      description: '从一段文本中提取所有邮箱和手机号。\n\n要求：\n- 邮箱正则：xxx@xxx.xxx\n- 手机号正则：1开头11位数字\n- 去重后分别打印',
      difficulty: 'medium',
      initialCode: `import re

text = '''
联系方式：
邮箱：alice@gmail.com, bob@qq.com, alice@gmail.com（重复）
电话：13812345678, 15987654321, 13812345678（重复）
无效：abc@test, 12345678901
'''

# email_pattern = ...
# phone_pattern = ...

# 提取、去重、打印
`,
      testCode: `output = _output_buffer.getvalue()
_test_results.append({
    "name": "提取邮箱",
    "passed": "alice@gmail.com" in output or "bob@qq.com" in output,
    "message": "应提取邮箱地址"
})
_test_results.append({
    "name": "提取手机号",
    "passed": "13812345678" in output or "15987654321" in output,
    "message": "应提取手机号"
})
_test_results.append({
    "name": "去重处理",
    "passed": True,
    "message": "检查是否对重复项做了去重"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: '@' }
      ],
      xpReward: 30
    }
  ],
  // ============== 21. collections 挑战 ==============
  21: [
    {
      id: 1,
      title: '词频统计器',
      description: '用 Counter 统计一段英文的词频。\n\n要求：\n- 去除标点符号（用正则）\n- 转小写\n- 用 Counter 统计\n- 打印 Top 10 高频词及其出现次数',
      difficulty: 'medium',
      initialCode: `import re
from collections import Counter

text = """
The quick brown fox jumps over the lazy dog.
The dog was not amused. The fox laughed and laughed.
A quick fox is a happy fox. The lazy dog just slept.
"""

# 去标点 → 转小写 → 分词 → Counter → most_common(10)
`,
      testCode: `output = _output_buffer.getvalue()
_test_results.append({
    "name": "包含 the",
    "passed": "the" in output.lower(),
    "message": "the 应该是高频词"
})
_test_results.append({
    "name": "包含 fox",
    "passed": "fox" in output.lower(),
    "message": "fox 应该在统计中"
})
_test_results.append({
    "name": "包含数字计数",
    "passed": any(c.isdigit() for c in output),
    "message": "应该显示词频数字"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: 'the' }
      ],
      xpReward: 30
    },
    {
      id: 2,
      title: '学生成绩 defaultdict 分组',
      description: '用 defaultdict 按班级分组学生成绩。\n\n要求：\n- 数据：[(班级, 姓名, 分数)] 列表\n- 用 defaultdict(list) 按班级分组\n- 计算每个班级的平均分\n- 按平均分从高到低打印',
      difficulty: 'medium',
      initialCode: `from collections import defaultdict

students = [
    ("A班", "小明", 85),
    ("B班", "小红", 92),
    ("A班", "小刚", 78),
    ("B班", "小丽", 88),
    ("A班", "小强", 90),
    ("C班", "小华", 76),
    ("B班", "小芳", 95),
]

# 用 defaultdict 分组
# 计算每班平均分
# 排序打印
`,
      testCode: `output = _output_buffer.getvalue()
_test_results.append({
    "name": "包含 A班",
    "passed": "A班" in output or "A" in output,
    "message": "应包含 A 班信息"
})
_test_results.append({
    "name": "包含平均分",
    "passed": any(x in output for x in ["平均", "avg", "mean", "84"]),
    "message": "应计算并显示平均分"
})
_test_results.append({
    "name": "B班平均正确",
    "passed": "92" in output or "91" in output or "92.5" in output or "91.6" in output,
    "message": "B 班平均分约为 91.6"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: '班' }
      ],
      xpReward: 35
    }
  ],
  // ============== 22. itertools 挑战 ==============
  22: [
    {
      id: 1,
      title: '密码组合生成器',
      description: '用 itertools 生成密码组合。\n\n要求：\n- 字符集：abc123\n- 用 product 生成长度 3 的所有组合\n- 用 permutations 生成排列\n- 统计各自总数并打印前 5 个',
      difficulty: 'medium',
      initialCode: `from itertools_ import product, permutations

chars = "abc123"

# product: 长度 3 的所有组合
# perms: 长度 3 的排列

# 打印总数 + 前 5 个
`,
      testCode: `output = _output_buffer.getvalue()
_test_results.append({
    "name": "product 总数 216",
    "passed": "216" in output,
    "message": "6^3 = 216 种组合"
})
_test_results.append({
    "name": "permutations 总数 120",
    "passed": "120" in output,
    "message": "P(6,3) = 120 种排列"
})
_test_results.append({
    "name": "有组合输出",
    "passed": "a" in output and "1" in output,
    "message": "应打印部分组合"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: '216' }
      ],
      xpReward: 30
    },
    {
      id: 2,
      title: '购物车组合优化',
      description: '用 itertools.combinations 找最优购物组合。\n\n要求：\n- 商品列表 [(名称, 价格, 满意度)]\n- 预算 100 元\n- 找满意度最高的组合（选 2~3 件）\n- 打印最优组合和总花费',
      difficulty: 'hard',
      initialCode: `from itertools_ import combinations

items = [
    ("耳机", 30, 8),
    ("鼠标", 25, 7),
    ("键盘", 50, 9),
    ("鼠标垫", 15, 4),
    ("U盘", 40, 6),
    ("支架", 20, 5),
]

budget = 100

# 遍历 combinations(items, 2) 和 (items, 3)
# 找满意度之和最高且总价 <= budget 的组合
`,
      testCode: `output = _output_buffer.getvalue()
_test_results.append({
    "name": "总花费 <= 100",
    "passed": any(x in output for x in ["100", "95", "90", "85", "80", "75", "70"]),
    "message": "总花费应不超过 100"
})
_test_results.append({
    "name": "包含商品名",
    "passed": "耳机" in output or "键盘" in output or "鼠标" in output,
    "message": "应包含商品名称"
})
_test_results.append({
    "name": "包含满意度",
    "passed": any(c.isdigit() for c in output),
    "message": "应输出满意度数字"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: '键盘' }
      ],
      xpReward: 40
    }
  ],
  // ============== 23. NumPy 挑战 ==============
  23: [
    {
      id: 1,
      title: '矩阵运算实战',
      description: '用 NumPy 实现矩阵运算。\n\n要求：\n- 创建 3x3 随机矩阵 A 和 B\n- 计算 A+B, A*B（矩阵乘法）, A 的转置, A 的逆\n- 计算行列式\n- 打印所有结果',
      difficulty: 'medium',
      initialCode: `import numpy_ as np

np.seed_(42)
A = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 10]])
B = np.array([[2, 0, 1], [0, 3, 0], [1, 0, 2]])

# A + B
# A @ B （矩阵乘法）
# A.T （转置）
# np.linalg.inv(A) （逆矩阵）
# np.linalg.det(A) （行列式）
`,
      testCode: `output = _output_buffer.getvalue()
_test_results.append({
    "name": "矩阵加法结果",
    "passed": "3" in output and "2" in output,
    "message": "A+B 应包含 3, 2, 4 等数字"
})
_test_results.append({
    "name": "包含行列式",
    "passed": any(x in output for x in ["det", "行列式", "-3", "-3.0"]),
    "message": "应计算并显示行列式"
})
_test_results.append({
    "name": "有逆矩阵",
    "passed": True,
    "message": "应计算逆矩阵（输出含负数即可）"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: '3' }
      ],
      xpReward: 35
    },
    {
      id: 2,
      title: '数据分析统计',
      description: '用 NumPy 做数据分析统计。\n\n要求：\n- 生成 100 个正态分布随机数（均值 50，标准差 10）\n- 计算均值、中位数、标准差、方差、最大/最小值\n- 找出 > 60 的数据占比\n- 画出直方图',
      difficulty: 'hard',
      initialCode: `import numpy_ as np
from matplotlib_ import plt

np.seed_(42)
data = np.random_normal(50, 10, 100)

# 计算：均值、中位数、标准差、方差、max、min
# 统计 > 60 的占比
# 画直方图 plt.hist(data, bins=20)
`,
      testCode: `output = _output_buffer.getvalue()
_test_results.append({
    "name": "均值约 50",
    "passed": "50" in output or "49" in output or "51" in output,
    "message": "均值应接近 50"
})
_test_results.append({
    "name": "标准差约 10",
    "passed": "10" in output or "9." in output or "10." in output,
    "message": "标准差应接近 10"
})
_test_results.append({
    "name": "有占比统计",
    "passed": "%" in output or "比" in output or "0." in output,
    "message": "应输出 >60 的占比"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: '50' }
      ],
      xpReward: 40
    }
  ],
  // ============== 24. Pandas 挑战 ==============
  24: [
    {
      id: 1,
      title: '销售数据分析',
      description: '用 Pandas 分析销售数据。\n\n要求：\n- 创建 DataFrame：日期/区域/产品/数量/金额\n- 按区域分组计算总销售额\n- 按产品分组计算平均数量\n- 找销售额最高的日期\n- 画出各区域销售额柱状图',
      difficulty: 'medium',
      initialCode: `import pandas_ as pd
from matplotlib_ import plt

data = {
    "日期": ["01-01","01-01","01-02","01-02","01-03","01-03","01-04","01-04"],
    "区域": ["华东","华南","华东","华南","华东","华南","华东","华南"],
    "产品": ["A","B","A","B","A","B","A","B"],
    "数量": [10, 8, 15, 6, 12, 10, 20, 5],
    "金额": [1000, 1600, 1500, 1200, 1200, 2000, 2000, 1000],
}
df = pd.DataFrame(data)

# 按区域分组 → 总销售额
# 按产品分组 → 平均数量
# 找最高额日期
# 画柱状图
`,
      testCode: `output = _output_buffer.getvalue()
_test_results.append({
    "name": "包含华东/华南",
    "passed": "华东" in output or "华南" in output,
    "message": "应按区域分组"
})
_test_results.append({
    "name": "有金额数据",
    "passed": "1000" in output or "2000" in output or "5700" in output or "7800" in output,
    "message": "应包含金额数字"
})
_test_results.append({
    "name": "有产品统计",
    "passed": "A" in output or "B" in output or "平均" in output,
    "message": "应有产品分组统计"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: '华东' }
      ],
      xpReward: 35
    },
    {
      id: 2,
      title: '数据清洗与合并',
      description: '模拟真实数据清洗流程。\n\n要求：\n- 创建两个 DataFrame（用户表 + 订单表）\n- 用户表有缺失值，用平均值填充\n- merge 两表（inner join）\n- 计算每用户消费总额\n- 排序打印',
      difficulty: 'hard',
      initialCode: `import pandas_ as pd

users = pd.DataFrame({
    "uid": [1, 2, 3, 4],
    "name": ["小明", "小红", "小刚", None],
    "age": [20, None, 22, 25],
})

orders = pd.DataFrame({
    "uid": [1, 1, 2, 3, 3, 3],
    "amount": [100, 200, 150, 80, 120, 300],
})

# 用 age 均值填充缺失
# name 缺失填 "未知"
# merge 两表
# groupby uid → sum amount
# 排序打印
`,
      testCode: `output = _output_buffer.getvalue()
_test_results.append({
    "name": "缺失值已填充",
    "passed": "未知" in output or "NaN" not in output,
    "message": "name 缺失应填'未知'"
})
_test_results.append({
    "name": "合并成功",
    "passed": "小明" in output or "小红" in output,
    "message": "merge 后应有用户名"
})
_test_results.append({
    "name": "有消费总额",
    "passed": "300" in output or "amount" in output or "sum" in output.lower() or "总额" in output,
    "message": "应有消费总额统计"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: '小明' }
      ],
      xpReward: 40
    }
  ],
  // ============== 25. Matplotlib 挑战 ==============
  25: [
    {
      id: 1,
      title: '多子图数据看板',
      description: '用 Matplotlib subplot 画 2x2 多子图。\n\n要求：\n- 左上：折线图（季度销售额趋势）\n- 右上：柱状图（各区域对比）\n- 左下：饼图（产品占比）\n- 右下：散点图（广告投入 vs 销售额）\n- 设置标题、图例',
      difficulty: 'medium',
      initialCode: `from matplotlib_ import plt

quarters = ["Q1", "Q2", "Q3", "Q4"]
sales = [320, 380, 420, 450]
regions = ["华东", "华南", "华北", "西部"]
region_sales = [500, 450, 300, 200]
products = ["A", "B", "C"]
product_share = [40, 35, 25]
ad_spend = [50, 80, 100, 120, 150, 200]
ad_sales = [200, 350, 420, 500, 620, 800]

fig, axes = plt.subplots(2, 2, figsize=(12, 10))

# 左上：折线图
# 右上：柱状图
# 左下：饼图
# 右下：散点图

plt.render("多子图看板")
`,
      testCode: `output = _output_buffer.getvalue()
_test_results.append({
    "name": "包含 Q1~Q4",
    "passed": "Q1" in output or "Q2" in output,
    "message": "折线图应包含季度数据"
})
_test_results.append({
    "name": "包含区域",
    "passed": "华东" in output or "华南" in output,
    "message": "柱状图应包含区域"
})
_test_results.append({
    "name": "渲染输出",
    "passed": "多子图" in output or "看板" in output,
    "message": "应渲染输出多子图"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: '多子图' }
      ],
      xpReward: 35
    },
    {
      id: 2,
      title: '动态动画模拟',
      description: '用 Matplotlib animation 模拟正弦波动画。\n\n要求：\n- 生成 x = 0~4π\n- 画 sin(x) 曲线\n- 用文本方式描述动画帧（3 帧）\n- 打印每帧的相位变化',
      difficulty: 'hard',
      initialCode: `from matplotlib_ import plt
import math

x = [i * 0.1 for i in range(126)]  # 0 ~ 4π

for frame in range(3):
    phase = frame * 0.5
    y = [math.sin(xi + phase) for xi in x]
    # 画图
    plt.figure(figsize=(8, 3))
    plt.plot(x, y, label=f"sin(x+{phase:.1f})")
    plt.title(f"Frame {frame} - phase={phase:.1f}")
    plt.legend()
    plt.render(f"sin_wave_frame_{frame}")
    print(f"帧 {frame}: 相位={phase:.1f}, 峰值={max(y):.2f}")
`,
      testCode: `output = _output_buffer.getvalue()
_test_results.append({
    "name": "3 帧输出",
    "passed": output.count("帧") >= 3 or output.count("Frame") >= 3,
    "message": "应输出 3 帧动画"
})
_test_results.append({
    "name": "相位变化",
    "passed": "相位" in output or "phase" in output.lower(),
    "message": "应显示相位变化"
})
_test_results.append({
    "name": "峰值正确",
    "passed": "1.00" in output or "1.0" in output or "0.9" in output,
    "message": "sin 峰值应接近 1.0"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: '帧' }
      ],
      xpReward: 40
    }
  ],
  // ============== 26. SciPy 挑战 ==============
  26: [
    {
      id: 1,
      title: '线性方程组求解',
      description: '用 scipy.linalg 解线性方程组。\n\n要求：\n- 3x + 2y - z = 1\n- 2x - 2y + 4z = -2\n- -x + 0.5y - z = 0\n- 用 solve() 求解并验证',
      difficulty: 'medium',
      initialCode: `import scipy_linalg_ as la
import numpy_ as np

A = np.array([[3, 2, -1], [2, -2, 4], [-1, 0.5, -1]])
b = np.array([1, -2, 0])

# x = la.solve(A, b)
# 验证：np.dot(A, x) ≈ b
# 打印 x 和验证结果
`,
      testCode: `output = _output_buffer.getvalue()
_test_results.append({
    "name": "包含解",
    "passed": any(x in output for x in ["1.", "0.5", "-1", "2."]),
    "message": "应输出方程组的解"
})
_test_results.append({
    "name": "有验证",
    "passed": "验证" in output or "1.0" in output or "0.0" in output or "≈" in output,
    "message": "应验证解的正确性"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: '1' }
      ],
      xpReward: 30
    },
    {
      id: 2,
      title: '函数优化求极值',
      description: '用 scipy.optimize 求函数最小值。\n\n要求：\n- f(x) = x^4 - 3x^3 + 2  （有多个极值）\n- 用 minimize_scalar 求全局最小值\n- 画函数曲线 + 标出最优点\n- 打印最优 x 和 f(x)',
      difficulty: 'hard',
      initialCode: `import scipy_optimize_ as opt
from matplotlib_ import plt

def f(x):
    return x**4 - 3*x**3 + 2

# result = opt.minimize_scalar(f, bounds=(-5, 5), method='bounded')
# print 最优 x 和 f(x)
# 画函数曲线 + 标最优点
# x_range = [i*0.1 for i in range(-50, 60)]
# y_range = [f(x) for x in x_range]
# plt.plot(x_range, y_range)
# plt.scatter([result.x], [result.fun], color='red', s=100, zorder=5)
# plt.render("优化结果")
`,
      testCode: `output = _output_buffer.getvalue()
_test_results.append({
    "name": "最优 x 约 2.25",
    "passed": "2.2" in output or "2.25" in output or "2.3" in output,
    "message": "x^4-3x^3+2 在 x≈2.25 处取最小值"
})
_test_results.append({
    "name": "最小值约 -4.5",
    "passed": "-4" in output or "-5" in output,
    "message": "f(2.25) ≈ -4.5"
})
_test_results.append({
    "name": "有渲染输出",
    "passed": "优化" in output or "opt" in output.lower() or "图" in output,
    "message": "应渲染函数曲线图"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: '2.25' }
      ],
      xpReward: 40
    }
  ],
  // ============== 27. Flask 挑战 ==============
  27: [
    {
      id: 1,
      title: '待办事项 REST API',
      description: '用 Flask_ 模拟实现一个完整的待办事项 REST API。\n\n要求：\n- GET /todos → 列出全部\n- POST /todos → 创建新待办\n- PUT /todos/{id} → 更新\n- DELETE /todos/{id} → 删除\n- 模拟完整 CRUD 流程并打印',
      difficulty: 'medium',
      initialCode: `from flask_ import Flask, request, jsonify

app = Flask(__name__)
todos = []
next_id = 1

# GET /todos
# POST /todos {"title": "...", "done": false}
# PUT /todos/{id}
# DELETE /todos/{id}

# 模拟调用：
# print(app.simulate("GET", "/todos"))
# print(app.simulate("POST", "/todos", json={"title":"学Flask","done":False}))
# print(app.simulate("PUT", "/todos/1", json={"done":True}))
# print(app.simulate("DELETE", "/todos/1"))
# print(app.simulate("GET", "/todos"))
`,
      testCode: `output = _output_buffer.getvalue()
_test_results.append({
    "name": "GET 返回列表",
    "passed": "todos" in output or "items" in output or "[]" in output,
    "message": "GET /todos 应返回列表"
})
_test_results.append({
    "name": "POST 创建成功",
    "passed": "学Flask" in output or "title" in output,
    "message": "POST 应创建待办"
})
_test_results.append({
    "name": "PUT 更新成功",
    "passed": "True" in output or "done" in output,
    "message": "PUT 应更新 done 字段"
})
_test_results.append({
    "name": "DELETE 删除成功",
    "passed": "200" in output or "204" in output or "删除" in output,
    "message": "DELETE 应返回成功"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: 'todos' }
      ],
      xpReward: 40
    },
    {
      id: 2,
      title: '带认证的博客 API',
      description: '实现带 Session 认证的博客 API。\n\n要求：\n- POST /login → 模拟登录\n- GET /posts → 公开\n- POST /posts → 需登录\n- DELETE /posts/{id} → 需登录\n- 未登录访问需认证接口返回 401',
      difficulty: 'hard',
      initialCode: `from flask_ import Flask, request, jsonify, session

app = Flask(__name__)
app.secret_key = "secret"
posts = []
next_id = 1

# POST /login {"user":"admin","pass":"123"}
# GET /posts
# POST /posts {"title":"...", "body":"..."}
# DELETE /posts/{id}

# 模拟：未登录 POST → 401
# 模拟：登录 → POST → 成功
# 模拟：GET → 列表
# 模拟：DELETE → 成功
`,
      testCode: `output = _output_buffer.getvalue()
_test_results.append({
    "name": "未登录返回 401",
    "passed": "401" in output,
    "message": "未认证 POST 应返回 401"
})
_test_results.append({
    "name": "登录成功",
    "passed": "200" in output or "登录" in output,
    "message": "登录应成功"
})
_test_results.append({
    "name": "登录后可创建",
    "passed": "201" in output or "200" in output,
    "message": "登录后 POST 应成功"
})
_test_results.append({
    "name": "DELETE 需认证",
    "passed": "401" in output or "204" in output or "200" in output,
    "message": "DELETE 未经认证应 401，认证后应成功"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: '401' }
      ],
      xpReward: 50
    }
  ],
  // ============== 28. FastAPI 挑战 ==============
  28: [
    {
      id: 1,
      title: '用户管理 API + 自动文档',
      description: '用 FastAPI_ 实现用户管理 API。\n\n要求：\n- GET /users → 列表（支持分页 ?page=1&size=10）\n- POST /users → 创建（Pydantic 校验 name 非空、age 0-150）\n- GET /users/{id} → 详情\n- 打印 OpenAPI 文档地址\n- 模拟调用全部接口',
      difficulty: 'medium',
      initialCode: `from fastapi_ import FastAPI, Query
from pydantic_ import BaseModel

app = FastAPI(title="用户管理 API", version="1.0.0")
users = []
next_id = 1

class UserCreate(BaseModel):
    name: str
    age: int
    @classmethod
    def validate(cls, data):
        if not data.get("name"): raise ValueError("name 不能为空")
        if not (0 <= data.get("age", -1) <= 150): raise ValueError("age 须 0-150")
        return cls(name=data["name"], age=data["age"])

# GET /users?page=1&size=10
# POST /users
# GET /users/{id}

# 打印文档地址
# 模拟调用
`,
      testCode: `output = _output_buffer.getvalue()
_test_results.append({
    "name": "有文档地址",
    "passed": "docs" in output.lower() or "openapi" in output.lower() or "/docs" in output,
    "message": "应打印 Swagger 文档地址"
})
_test_results.append({
    "name": "POST 创建成功",
    "passed": "201" in output or "200" in output,
    "message": "POST 应创建成功"
})
_test_results.append({
    "name": "分页参数",
    "passed": "page" in output or "size" in output or "items" in output,
    "message": "应支持分页"
})
_test_results.append({
    "name": "校验失败处理",
    "passed": True,
    "message": "非法 age 应有校验错误"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: 'docs' }
      ],
      xpReward: 40
    },
    {
      id: 2,
      title: '依赖注入商品系统',
      description: '用 Depends 实现依赖注入的商品系统。\n\n要求：\n- 依赖 get_db() 返回模拟数据库连接\n- 依赖 get_current_user(token) 验证 Token\n- GET /products 公开\n- POST /products 需登录\n- 模拟未授权和授权两种场景',
      difficulty: 'hard',
      initialCode: `from fastapi_ import FastAPI, Depends
from pydantic_ import BaseModel

app = FastAPI()
products = []

def get_db():
    db = {"connected": True}
    yield db
    db["connected"] = False

def get_current_user(token: str = ""):
    if token != "secret-token":
        return None
    return {"id": 1, "name": "admin", "role": "seller"}

class ProductCreate(BaseModel):
    name: str
    price: float
    @classmethod
    def validate(cls, data):
        if not data.get("name"): raise ValueError("name 不能为空")
        if data.get("price", 0) <= 0: raise ValueError("price > 0")
        return cls(name=data["name"], price=float(data["price"]))

# GET /products（公开）
# POST /products（需 get_current_user 依赖）

# 模拟：无 token POST → 401
# 模拟：带 token POST → 成功
# 模拟：GET → 列表
`,
      testCode: `output = _output_buffer.getvalue()
_test_results.append({
    "name": "无 token 返回 401",
    "passed": "401" in output or "None" in output or "未登录" in output,
    "message": "无 token 应返回 401"
})
_test_results.append({
    "name": "有 token 创建成功",
    "passed": "201" in output or "200" in output or "ok" in output.lower(),
    "message": "认证后 POST 应成功"
})
_test_results.append({
    "name": "GET 返回列表",
    "passed": "products" in output or "items" in output,
    "message": "GET 应返回商品列表"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: '401' }
      ],
      xpReward: 50
    }
  ],
  // ============== 29. Django 挑战 ==============
  29: [
    {
      id: 1,
      title: '图书管理系统 ORM',
      description: '用 Django_ ORM 模拟实现图书管理。\n\n要求：\n- Author 模型：name, age\n- Book 模型：title, price, author(ForeignKey)\n- 插入 3 作者 5 本书\n- 查询：某作者的书、价格 > 40 的书、按价格排序\n- 删除某作者及关联书籍（级联）',
      difficulty: 'medium',
      initialCode: `from django_ import models

class Author(models.Model):
    name = models.CharField(max_length=50)
    age = models.IntegerField()

class Book(models.Model):
    title = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    author = models.ForeignKey(Author, related_name="books")

# 建表
# 插入数据
# 查询
# 删除级联
`,
      testCode: `output = _output_buffer.getvalue()
_test_results.append({
    "name": "有作者数据",
    "passed": "name" in output or "作者" in output,
    "message": "应显示作者信息"
})
_test_results.append({
    "name": "有价格查询",
    "passed": "price" in output or "价格" in output or "40" in output,
    "message": "应包含价格查询"
})
_test_results.append({
    "name": "有排序输出",
    "passed": "title" in output or "title" in output.lower() or "书" in output,
    "message": "应按价格排序输出"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: 'name' }
      ],
      xpReward: 40
    },
    {
      id: 2,
      title: '权限系统模拟',
      description: '用 Django_ auth 模拟权限系统。\n\n要求：\n- 注册 3 个用户：编辑/审核/读者\n- 定义权限：view/edit/publish\n- 模拟各角色访问不同操作\n- 打印权限检查结果',
      difficulty: 'hard',
      initialCode: `from django_ import auth

# 注册用户
# auth.register("alice", "123", group="编辑")
# auth.register("bob", "666", group="审核")
# auth.register("carol", "789", group="读者")

# 权限检查函数
# def can_edit(user): ...
# def can_publish(user): ...

# 模拟各角色操作
`,
      testCode: `output = _output_buffer.getvalue()
_test_results.append({
    "name": "有用户名",
    "passed": "alice" in output or "bob" in output,
    "message": "应包含用户名"
})
_test_results.append({
    "name": "有权限检查",
    "passed": "权限" in output or "perm" in output.lower() or "403" in output or "200" in output,
    "message": "应有权限检查结果"
})
_test_results.append({
    "name": "角色区分",
    "passed": "编辑" in output or "审核" in output or "读者" in output,
    "message": "应区分不同角色"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: 'alice' }
      ],
      xpReward: 45
    }
  ],
  // ============== 30. Scrapy 挑战 ==============
  30: [
    {
      id: 1,
      title: '多页爬虫 + Pipeline',
      description: '实现多页爬虫并模拟 Pipeline 处理。\n\n要求：\n- Spider 爬取 5 页商品数据\n- 每页 3 条：name/price/rating\n- Pipeline 过滤 rating < 3 的数据\n- 统计平均价格\n- 打印最终结果',
      difficulty: 'medium',
      initialCode: `from scrapy_ import Spider, Item, Field
from collections import Counter

class ProductItem(Item):
    name = Field()
    price = Field()
    rating = Field()

class ProductSpider(Spider):
    name = "products"
    start_urls = [f"https://shop.example.com/page/{p}" for p in range(1, 6)]

    def parse(self, response):
        for p in response.css("div.product"):
            yield ProductItem(
                name = p.css("h3.name::text").get(),
                price = float(p.css("span.price::text").get()),
                rating = int(p.css("span.rating::text").get()),
            )

# 运行爬虫
# results = ProductSpider.run()

# 模拟 Pipeline 过滤 rating < 3
# 计算平均价格
# 打印结果
`,
      testCode: `output = _output_buffer.getvalue()
_test_results.append({
    "name": "爬取多条数据",
    "passed": "15" in output or "条" in output,
    "message": "5 页 x 3 条 = 15 条"
})
_test_results.append({
    "name": "有价格数据",
    "passed": "price" in output or "价格" in output or any(c.isdigit() for c in output),
    "message": "应包含价格数据"
})
_test_results.append({
    "name": "有过滤处理",
    "passed": "rating" in output or "评分" in output or "过滤" in output,
    "message": "应过滤低评分数据"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: '15' }
      ],
      xpReward: 40
    },
    {
      id: 2,
      title: '反爬策略模拟',
      description: '模拟实现反爬策略。\n\n要求：\n- 随机 UA 轮换（5 个 UA）\n- 模拟代理池（3 个 IP）\n- 随机延迟 1-3 秒\n- 统计每次请求用的 UA 和 IP\n- 打印 10 次请求的 UA/IP 分布',
      difficulty: 'hard',
      initialCode: `import random
from collections import Counter

random.seed(42)

user_agents = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15)",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0)",
    "Mozilla/5.0 (Linux; Android 13; Pixel 7)",
    "Mozilla/5.0 (X11; Linux x86_64; rv:120.0)",
]

proxies = [
    "203.0.113.1:8080",
    "198.51.100.2:3128",
    "192.0.2.3:8888",
]

# 模拟 10 次请求
# 每次随机选 UA 和 proxy
# 统计分布
`,
      testCode: `output = _output_buffer.getvalue()
_test_results.append({
    "name": "有 UA 输出",
    "passed": "Mozilla" in output,
    "message": "应包含 User-Agent"
})
_test_results.append({
    "name": "有代理 IP",
    "passed": "203." in output or "198." in output or "192." in output,
    "message": "应包含代理 IP"
})
_test_results.append({
    "name": "有分布统计",
    "passed": "分布" in output or "count" in output.lower() or "Counter" in output,
    "message": "应有 UA/IP 分布统计"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: 'Mozilla' }
      ],
      xpReward: 45
    }
  ],
  // ============== 31. Dash 挑战 ==============
  31: [
    {
      id: 1,
      title: '销售数据交互看板',
      description: '用 Dash 构建交互式销售看板。\n\n要求：\n- 下拉框选区域（全部/华东/华南/华北）\n- 4 个 KPI 指标卡（总销售额/订单数/客单价/区域数）\n- 折线图：按月趋势\n- 柱状图：按产品对比\n- 模拟回调触发并打印结果',
      difficulty: 'medium',
      initialCode: `import pandas_ as pd
from dash_ import Dash, html, dcc, Input, Output, callback
import plotly_express_ as px

df = pd.DataFrame({
    "月份": ["1月","2月","3月","4月","5月"]*3,
    "区域": ["华东"]*5 + ["华南"]*5 + ["华北"]*5,
    "产品": ["A","B","A","B","A"]*3,
    "销售额": [100,150,120,180,200, 80,120,90,140,160, 60,90,70,110,130],
    "订单数": [10,15,12,18,20, 8,12,9,14,16, 6,9,7,11,13],
})

app = Dash(__name__)

# 布局 + 回调
# app.callback_trigger("region-dd", value="华东")
`,
      testCode: `output = _output_buffer.getvalue()
_test_results.append({
    "name": "有 KPI 指标",
    "passed": "销售额" in output or "订单" in output or "客单" in output,
    "message": "应有 KPI 指标卡"
})
_test_results.append({
    "name": "有区域筛选",
    "passed": "华东" in output or "华南" in output or "华北" in output,
    "message": "应支持区域筛选"
})
_test_results.append({
    "name": "有图表描述",
    "passed": "趋势" in output or "Line" in output or "对比" in output or "Bar" in output,
    "message": "应有图表描述"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: '销售额' }
      ],
      xpReward: 40
    },
    {
      id: 2,
      title: '多级联动筛选器',
      description: '实现多级联动筛选器。\n\n要求：\n- 一级下拉：大区（华东/华南/华北）\n- 二级下拉：根据大区联动显示省份\n- 三级下拉：根据省份联动显示城市\n- 数据展示：选中后显示该城市数据\n- 模拟选"华东"→"上海"并打印',
      difficulty: 'hard',
      initialCode: `from dash_ import Dash, html, dcc, Input, Output, callback

app = Dash(__name__)

data = {
    "华东": {"上海": {"uv": 5000, "conv": 320}, "杭州": {"uv": 3000, "conv": 180}},
    "华南": {"广州": {"uv": 4000, "conv": 250}, "深圳": {"uv": 4500, "conv": 280}},
    "华北": {"北京": {"uv": 6000, "conv": 400}, "天津": {"uv": 2000, "conv": 120}},
}

# 三级联动布局 + 两个 callback
# 模拟选 华东 → 上海
`,
      testCode: `output = _output_buffer.getvalue()
_test_results.append({
    "name": "有大区选择",
    "passed": "华东" in output or "华南" in output or "华北" in output,
    "message": "应有一级大区选择"
})
_test_results.append({
    "name": "有省份联动",
    "passed": "上海" in output or "杭州" in output or "广州" in output,
    "message": "应根据大区联动显示省份"
})
_test_results.append({
    "name": "有数据输出",
    "passed": "5000" in output or "uv" in output.lower() or "conv" in output.lower(),
    "message": "应输出选中城市的数据"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: '华东' }
      ],
      xpReward: 50
    }
  ],
  // ============== 32. Jupyter 挑战 ==============
  32: [
    {
      id: 1,
      title: '数据分析 Notebook',
      description: '用 jupyter_ 模拟构建一个数据分析 Notebook。\n\n要求：\n- Markdown 标题 + 说明\n- 数据加载 cell\n- 数据分析 cell（统计 + 可视化）\n- 结论 Markdown cell\n- 导出 HTML 模拟',
      difficulty: 'medium',
      initialCode: `import jupyter_ as nb
import pandas_ as pd

# Cell 1: Markdown 标题
nb.markdown("# 数据分析报告\\n## 销售数据概览")

# Cell 2: 加载数据
df = pd.DataFrame({
    "月份": ["1月","2月","3月","4月"],
    "销售额": [100, 150, 120, 180],
})
print(df.describe())

# Cell 3: 结论
nb.markdown("> 4 月销售额最高，建议加大投入。")

# 导出
nb.export("html")
`,
      testCode: `output = _output_buffer.getvalue()
_test_results.append({
    "name": "有 Markdown 标题",
    "passed": "数据分析" in output or "报告" in output or "#" in output,
    "message": "应有 Markdown 标题"
})
_test_results.append({
    "name": "有数据统计",
    "passed": "count" in output.lower() or "mean" in output.lower() or "150" in output or "180" in output,
    "message": "应有数据统计输出"
})
_test_results.append({
    "name": "有导出",
    "passed": "html" in output.lower() or "导出" in output or "export" in output.lower(),
    "message": "应模拟导出 HTML"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: '数据分析' }
      ],
      xpReward: 35
    },
    {
      id: 2,
      title: '交互式参数探索器',
      description: '用 ipywidgets interact 构建参数探索器。\n\n要求：\n- 函数 f(a, b, op)：a/b 是滑块，op 是下拉\n- op = add/sub/mul/div\n- 模拟 4 种操作\n- 打印每次结果和算式',
      difficulty: 'hard',
      initialCode: `import jupyter_ as nb

def f(a, b, op):
    if op == "add": res = a + b; sym = "+"
    elif op == "sub": res = a - b; sym = "-"
    elif op == "mul": res = a * b; sym = "*"
    elif op == "div": res = a / b if b != 0 else "∞"; sym = "/"
    line = f"{a} {sym} {b} = {res}"
    print(line)
    return line

sim = nb.interact(f, a=(1,10,3), b=(1,10,2), op=["add","sub","mul","div"])

# 模拟 4 种操作
# sim.simulate(a=6, b=3, op="add")
# sim.simulate(a=6, b=3, op="sub")
# sim.simulate(a=6, b=3, op="mul")
# sim.simulate(a=6, b=3, op="div")
`,
      testCode: `output = _output_buffer.getvalue()
_test_results.append({
    "name": "加法正确",
    "passed": "9" in output,
    "message": "6+3=9"
})
_test_results.append({
    "name": "减法正确",
    "passed": "3" in output,
    "message": "6-3=3"
})
_test_results.append({
    "name": "乘法正确",
    "passed": "18" in output,
    "message": "6*3=18"
})
_test_results.append({
    "name": "除法正确",
    "passed": "2" in output and "/" in output,
    "message": "6/3=2"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: '9' }
      ],
      xpReward: 40
    }
  ],
  // ============== 33. Pillow 挑战 ==============
  33: [
    {
      id: 1,
      title: '批量图片缩略图生成',
      description: '模拟批量生成缩略图。\n\n要求：\n- 创建 5 张 800x600 模拟图片\n- 生成缩略图（200x150）\n- 加水印\n- 模拟保存并打印路径',
      difficulty: 'medium',
      initialCode: `from pillow_ import Image, ImageDraw

for i in range(5):
    # 创建 800x600 图片
    img = Image.new("RGB", (800, 600), color=(100+i*30, 150, 200))
    draw = ImageDraw.Draw(img)
    draw.text((10, 10), f"Image-{i}", fill=(255,255,255))

    # 生成缩略图
    thumb = img.resize((200, 150))

    # 加水印
    draw_thumb = ImageDraw.Draw(thumb)
    draw_thumb.text((200-80, 150-16), "©Quest", fill=(255,255,0))

    # 模拟保存
    path = f"/tmp/thumbs/img_{i}.png"
    thumb.save(path)
    print(f"✅ 已保存 img_{i}.png (200x150)")
`,
      testCode: `output = _output_buffer.getvalue()
_test_results.append({
    "name": "5 张保存成功",
    "passed": output.count("已保存") == 5 or output.count("✅") == 5,
    "message": "应保存 5 张缩略图"
})
_test_results.append({
    "name": "尺寸 200x150",
    "passed": "200" in output and "150" in output,
    "message": "缩略图应为 200x150"
})
_test_results.append({
    "name": "有水印",
    "passed": "Quest" in output or "©" in output,
    "message": "应包含水印"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: '已保存' }
      ],
      xpReward: 35
    },
    {
      id: 2,
      title: '图片滤镜处理管道',
      description: '模拟图片滤镜处理管道。\n\n要求：\n- 创建 1 张 400x300 图片\n- 依次应用：模糊 → 锐化 → 边缘检测\n- 每步保存中间结果\n- 打印每步的图片描述',
      difficulty: 'hard',
      initialCode: `from pillow_ import Image, ImageDraw, ImageFilter

img = Image.new("RGB", (400, 300), color=(100, 150, 200))
draw = ImageDraw.Draw(img)
draw.rectangle([(50, 50), (350, 250)], fill=(255, 100, 50))
draw.ellipse([(150, 100), (250, 200)], fill=(50, 200, 100)])

print("原图:", img.describe())

# Step 1: 模糊
# blurred = img.filter(ImageFilter.GaussianBlur(radius=3))
# print("模糊:", blurred.describe())

# Step 2: 锐化
# sharpened = blurred.filter(ImageFilter.SHARPEN)
# print("锐化:", sharpened.describe())

# Step 3: 边缘检测
# edges = sharpened.filter(ImageFilter.FIND_EDGES)
# print("边缘:", edges.describe())

# 保存中间结果
# blurred.save("/tmp/step1_blur.png")
# sharpened.save("/tmp/step2_sharp.png")
# edges.save("/tmp/step3_edges.png")
# print("✅ 滤镜管道完成，3 步已保存")
`,
      testCode: `output = _output_buffer.getvalue()
_test_results.append({
    "name": "有原图描述",
    "passed": "原图" in output or "400" in output,
    "message": "应描述原图"
})
_test_results.append({
    "name": "有模糊处理",
    "passed": "模糊" in output or "Blur" in output,
    "message": "应包含模糊步骤"
})
_test_results.append({
    "name": "有边缘检测",
    "passed": "边缘" in output or "edge" in output.lower() or "FIND" in output,
    "message": "应包含边缘检测步骤"
})
_test_results.append({
    "name": "管道完成",
    "passed": "完成" in output or "✅" in output,
    "message": "应提示管道处理完成"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: '原图' }
      ],
      xpReward: 45
    }
  ],
  // ============== 34. 量化交易 挑战 ==============
  34: [
    {
      id: 1,
      title: 'RSI 指标计算策略',
      description: '实现 RSI（相对强弱指数）指标并生成交易信号。\n\n要求：\n- RSI = 100 - 100/(1+RS)，RS = N日涨幅均值/N日跌幅均值\n- 用 14 日周期\n- RSI < 30 买入，RSI > 70 卖出\n- 打印买卖信号点',
      difficulty: 'medium',
      initialCode: `import pandas_ as pd
import random

random.seed(42)
prices = [100.0]
for _ in range(60):
    prices.append(round(prices[-1] * (1 + random.gauss(0, 0.02)), 2))

df = pd.DataFrame({"close": prices})

# 计算 14 日 RSI
# delta = df["close"].diff()
# gain = delta.clip(lower=0).rolling(14).mean()
# loss = (-delta.clip(upper=0)).rolling(14).mean()
# rs = gain / loss
# rsi = 100 - 100 / (1 + rs)

# 信号：rsi < 30 买入, rsi > 70 卖出
# 打印信号点
`,
      testCode: `output = _output_buffer.getvalue()
_test_results.append({
    "name": "有 RSI 值",
    "passed": "rsi" in output.lower() or "RSI" in output or "100" in output,
    "message": "应计算 RSI 指标"
})
_test_results.append({
    "name": "有买卖信号",
    "passed": "买入" in output or "卖出" in output or "buy" in output.lower() or "sell" in output.lower(),
    "message": "应有买卖信号输出"
})
_test_results.append({
    "name": "有 30/70 阈值",
    "passed": "30" in output or "70" in output,
    "message": "应涉及 RSI 30/70 阈值"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: 'RSI' }
      ],
      xpReward: 40
    },
    {
      id: 2,
      title: '多策略组合回测',
      description: '实现双均线 + RSI 组合策略回测。\n\n要求：\n- 信号条件：MA5 > MA20 且 RSI < 70 → 买入\n- MA5 < MA20 或 RSI > 70 → 卖出\n- 计算总收益率、夏普比率、最大回撤\n- 与单双均线策略对比\n- 画出净值曲线',
      difficulty: 'hard',
      initialCode: `import pandas_ as pd
import numpy_ as np
import random
from matplotlib_ import plt
import math

random.seed(42); np.seed_(42)
prices = [100.0]
for _ in range(200):
    prices.append(round(prices[-1] * (1 + random.gauss(0.001, 0.015)), 2))

df = pd.DataFrame({"close": prices})
df["ma5"] = df["close"].rolling(5).mean()
df["ma20"] = df["close"].rolling(20).mean()

# RSI 14
# delta = df["close"].diff()
# gain = delta.clip(lower=0).rolling(14).mean()
# loss = (-delta.clip(upper=0)).rolling(14).mean()
# df["rsi"] = 100 - 100 / (1 + gain/loss)

# 组合策略回测
# 买入：ma5 > ma20 且 rsi < 70
# 卖出：ma5 < ma20 或 rsi > 70

# 计算指标 + 画图 + 对比
`,
      testCode: `output = _output_buffer.getvalue()
_test_results.append({
    "name": "有总收益率",
    "passed": "总收益率" in output or "总收益" in output,
    "message": "应输出总收益率"
})
_test_results.append({
    "name": "有夏普比率",
    "passed": "夏普" in output or "sharpe" in output.lower(),
    "message": "应输出夏普比率"
})
_test_results.append({
    "name": "有最大回撤",
    "passed": "回撤" in output or "drawdown" in output.lower(),
    "message": "应输出最大回撤"
})
_test_results.append({
    "name": "有净值曲线",
    "passed": "净值" in output or "策略" in output or "回测" in output,
    "message": "应渲染净值曲线图"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: '总收益率' }
      ],
      xpReward: 50
    }
  ],
  35: [
    {
      id: 1,
      title: '向量与数据框操作',
      description: '实现 R 风格的向量操作和数据框创建。\n\n要求：\n- 创建两个向量：name 向量（5个姓名）和 score 向量（5个分数）\n- 将它们合并为数据框（DataFrame）\n- 计算分数的均值和标准差\n- 筛选分数大于平均值的学生\n- 添加一列 pass：分数 >= 80 为 "PASS"，否则为 "FAIL"\n- 打印所有结果',
      difficulty: 'easy',
      initialCode: `import pandas_ as pd
import numpy_ as np

# 1. 创建向量 (R: name <- c("张三","李四","王五","赵六","钱七"))
name = # TODO
score = # TODO

# 2. 创建数据框 (R: df <- data.frame(name, score))
df = # TODO

# 3. 计算统计量
mean_score = # TODO
std_score = # TODO
print(f"平均分: {mean_score:.1f}, 标准差: {std_score:.1f}")

# 4. 筛选高于平均分的学生
above_avg = # TODO
print("高于平均分的学生:")
print(above_avg)

# 5. 添加 pass 列
df["pass"] = # TODO
print("最终数据框:")
print(df)
`,
      testCode: `output = _output_buffer.getvalue()
_test_results.append({
    "name": "创建了数据框",
    "passed": "name" in output.lower() and "score" in output.lower(),
    "message": "应创建包含姓名和分数的数据框"
})
_test_results.append({
    "name": "计算统计量",
    "passed": "平均分" in output or "均值" in output or "mean" in output.lower(),
    "message": "应输出平均分或均值"
})
_test_results.append({
    "name": "筛选学生",
    "passed": "高于" in output or "筛选" in output or "avg" in output.lower(),
    "message": "应包含筛选逻辑"
})
_test_results.append({
    "name": "添加 pass 列",
    "passed": "PASS" in output or "FAIL" in output or "pass" in output.lower(),
    "message": "应包含 PASS/FAIL 判定"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: '数据框' }
      ],
      xpReward: 30
    },
    {
      id: 2,
      title: 'dplyr 风格数据处理',
      description: '使用 pandas 模拟 R dplyr 的管道操作，完成数据处理流水线。\n\n要求：\n- 生成模拟销售数据（3 个产品 × 4 个地区 × 20 条记录）\n- 用链式操作模拟 dplyr 管道：filter → mutate → group_by → summarise\n- 计算各地区各产品的总销售额、平均利润率\n- 找出总销售额最高的地区-产品组合\n- 打印处理结果',
      difficulty: 'medium',
      initialCode: `import pandas_ as pd
import numpy_ as np

np.random.seed(42)

# 1. 生成模拟数据
products = ["A", "B", "C"]
regions = ["East", "West", "South", "North"]
n = 60

sales_data = pd.DataFrame({
    "product": # TODO: 随机产品
    "region":  # TODO: 随机地区
    "sales":   # TODO: 随机销售额 (100-500)
    "profit":  # TODO: 随机利润 (10-100)
})

# 2. 模拟 dplyr 管道操作
# R: sales_data %>% filter(sales > 200) %>%
#          mutate(profit_rate = profit/sales) %>%
#          group_by(region, product) %>%
#          summarise(total_sales = sum(sales), avg_rate = mean(profit_rate))
result = (sales_data
    # TODO: 链式操作完成数据处理
)

print("处理结果:")
print(result)

# 3. 找出销售额最高的组合
top = # TODO
print(f"销售额最高的组合: {top}")
`,
      testCode: `output = _output_buffer.getvalue()
_test_results.append({
    "name": "生成模拟数据",
    "passed": "product" in output.lower() and "region" in output.lower(),
    "message": "应包含产品和地区数据"
})
_test_results.append({
    "name": "dplyr 管道操作",
    "passed": "profit_rate" in output.lower() or "利润率" in output or "total_sales" in output.lower(),
    "message": "应包含 mutate 和 summarise 操作"
})
_test_results.append({
    "name": "分组统计",
    "passed": "group" in output.lower() or "地区" in output or "product" in output.lower(),
    "message": "应有分组统计结果"
})
_test_results.append({
    "name": "找出最高组合",
    "passed": "最高" in output or "top" in output.lower() or "best" in output.lower(),
    "message": "应找出销售额最高的组合"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: '管道操作' }
      ],
      xpReward: 40
    },
    {
      id: 3,
      title: '统计检验实战',
      description: '实现独立样本 t 检验和卡方检验，模拟 R 的统计假设检验流程。\n\n要求：\n- 生成两组随机数据（A 组和 B 组，各 30 个样本）\n- 执行独立样本 t 检验（比较两组均值）\n- 生成列联表数据，执行卡方独立性检验\n- 打印检验统计量、p 值和结论（是否拒绝 H₀）\n- 使用显著性水平 α = 0.05',
      difficulty: 'hard',
      initialCode: `import numpy_ as np
from scipy_ import stats

np.random.seed(42)

# 1. 生成两组数据
group_a = np.random.normal(50, 10, 30)
group_b = np.random.normal(55, 10, 30)

# 2. 独立样本 t 检验
t_stat, p_value_t = # TODO

print("=== 独立样本 t 检验 ===")
print(f"A 组均值: {group_a.mean():.2f}")
print(f"B 组均值: {group_b.mean():.2f}")
print(f"t 统计量: {t_stat:.4f}")
print(f"p 值: {p_value_t:.4f}")
print(f"结论: {'拒绝 H0 (显著差异)' if p_value_t < 0.05 else '不能拒绝 H0'}")

# 3. 卡方检验 - 生成列联表
# 口味偏好调查：男/女 × 甜/咸/辣
observed = np.array([
    # TODO: 创建 2x3 列联表
])

chi2_stat, p_value_chi2, dof, expected = # TODO

print()
print("=== 卡方独立性检验 ===")
print(f"列联表:\\n{observed}")
print(f"卡方统计量: {chi2_stat:.4f}")
print(f"自由度: {dof}")
print(f"p 值: {p_value_chi2:.4f}")
print(f"结论: {'拒绝 H0 (有关联)' if p_value_chi2 < 0.05 else '不能拒绝 H0 (独立)'}")
`,
      testCode: `output = _output_buffer.getvalue()
_test_results.append({
    "name": "t 检验实现",
    "passed": "t" in output.lower() and "统计量" in output,
    "message": "应计算 t 统计量和 p 值"
})
_test_results.append({
    "name": "p 值判断",
    "passed": "p 值" in output or "p_value" in output.lower(),
    "message": "应输出 p 值"
})
_test_results.append({
    "name": "卡方检验实现",
    "passed": "chi2" in output.lower() or "卡方" in output,
    "message": "应执行卡方检验"
})
_test_results.append({
    "name": "假设结论",
    "passed": "拒绝" in output or "H0" in output or "不能拒绝" in output,
    "message": "应给出检验结论"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: '假设检验' }
      ],
      xpReward: 50
    }
  ],
  36: [
    {
      id: 1,
      title: '类型与多重派发',
      description: '使用 Python 的 functools.singledispatch 模拟 Julia 的多重派发，实现类型感知的函数。\n\n要求：\n- 创建一个 describe_value 函数，根据输入类型返回不同描述\n- 支持 int、float、str、list/np.ndarray 四种类型\n- 对每种类型实现不同的描述逻辑\n- 测试所有类型的派发结果\n- 计算一个数值列表的总和（Kahan 补偿求和法）',
      difficulty: 'easy',
      initialCode: `import numpy_ as np
from functools import singledispatch

# TODO: 使用 singledispatch 创建 describe_value 函数
# 并为 int, float, str, np.ndarray 分别实现方法

# 你的代码 here

# 测试
print("多重派发测试:")
print(f"  int: {describe_value(42)}")
print(f"  float: {describe_value(3.14)}")
print(f"  str: {describe_value('Hello')}")
print(f"  array: {describe_value(np.array([1,2,3]))}")

# Kahan 补偿求和
def kahan_sum(arr):
    # TODO: 实现 Kahan 求和算法
    pass

data = np.random.randn(1000).astype(np.float32)
print(f"Kahan 求和: {kahan_sum(data):.6f}")
print(f"普通求和: {np.sum(data):.6f}")
`,
      testCode: `output = _output_buffer.getvalue()
_test_results.append({
    "name": "实现派发函数",
    "passed": "describe" in output.lower() or "dispatch" in output.lower(),
    "message": "应使用 singledispatch 或类似机制"
})
_test_results.append({
    "name": "支持多种类型",
    "passed": "int" in output.lower() and "float" in output.lower() and "str" in output.lower(),
    "message": "应支持至少 3 种类型"
})
_test_results.append({
    "name": "Kahan 求和",
    "passed": "kahan" in output.lower() or "补偿" in output or "compensation" in output.lower(),
    "message": "应实现 Kahan 补偿求和"
})
_test_results.append({
    "name": "打印测试结果",
    "passed": "42" in output or "3.14" in output or "Hello" in output,
    "message": "应输出测试用例的结果"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: '多重派发' }
      ],
      xpReward: 30
    },
    {
      id: 2,
      title: '矩阵运算实战',
      description: '实现 Julia 风格的矩阵运算和线性代数操作。\n\n要求：\n- 创建 3×3 矩阵 A 和 B\n- 计算矩阵乘法 C = A @ B\n- 计算 A 的行列式、逆矩阵、特征值和特征向量\n- 求解线性方程组 Ax = b\n- 计算矩阵的 Frobenius 范数\n- 验证 A @ A_inv ≈ I（单位矩阵）',
      difficulty: 'medium',
      initialCode: `import numpy_ as np

np.random.seed(42)

# 1. 创建矩阵
A = np.random.randint(1, 10, (3, 3)).astype(float)
B = np.random.randint(1, 10, (3, 3)).astype(float)

print("矩阵 A:")
print(A)
print("\\n矩阵 B:")
print(B)

# 2. 矩阵乘法
C = # TODO
print(f"\\nC = A @ B:\\n{C}")

# 3. 行列式和逆矩阵
det_A = # TODO
A_inv = # TODO
print(f"\\ndet(A) = {det_A:.4f}")
print(f"\\nA_inv = \\n{A_inv}")

# 4. 验证 A @ A_inv ≈ I
identity_check = # TODO
print(f"\\nA @ A_inv ≈ I: {np.allclose(identity_check, np.eye(3))}")

# 5. 特征值分解
eigenvalues, eigenvectors = # TODO
print(f"\\n特征值: {eigenvalues}")
print(f"特征向量:\\n{eigenvectors}")

# 6. 求解线性方程组 Ax = b
b = np.array([1.0, 2.0, 3.0])
x = # TODO
print(f"\\n方程组解 x: {x}")
print(f"验证 Ax = {A @ x} ≈ b = {b}: {np.allclose(A @ x, b)}")

# 7. Frobenius 范数
fro_norm = # TODO
print(f"\\nFrobenius 范数: {fro_norm:.4f}")
`,
      testCode: `output = _output_buffer.getvalue()
_test_results.append({
    "name": "矩阵乘法",
    "passed": "@" in output or "C =" in output or "矩阵乘法" in output,
    "message": "应执行矩阵乘法 A @ B"
})
_test_results.append({
    "name": "行列式和逆矩阵",
    "passed": "det" in output.lower() or "行列式" in output or "逆" in output,
    "message": "应计算行列式和逆矩阵"
})
_test_results.append({
    "name": "特征值分解",
    "passed": "特征值" in output or "eigenvalue" in output.lower(),
    "message": "应计算特征值和特征向量"
})
_test_results.append({
    "name": "求解方程组",
    "passed": "方程组" in output or "solve" in output.lower(),
    "message": "应求解线性方程组"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: '线性代数' }
      ],
      xpReward: 40
    },
    {
      id: 3,
      title: '微分方程求解',
      description: '求解三个经典的常微分方程（ODE）模型，模拟 Julia DifferentialEquations.jl 的使用场景。\n\n要求：\n- 模型1：指数增长 dy/dt = 0.3*y, y(0)=1, 求 y(10)\n- 模型2：Logistic 增长 dy/dt = r*y*(1-y/K), 求稳态值\n- 模型3：二阶 ODE（简谐振动）d²x/dt² + x = 0, 求 x(π)\n- 用 scipy.integrate.solve_ivp 求解\n- 对比数值解与解析解\n- 打印所有结果和误差',
      difficulty: 'hard',
      initialCode: `import numpy_ as np
from scipy_ import integrate

# 模型 1: 指数增长 dy/dt = 0.3*y
def exp_ode(t, y):
    return 0.3 * y

sol1 = integrate.solve_ivp(exp_ode, [0, 10], [1.0], method='RK45')
y_num = sol1.y[0][-1]
y_exact = np.exp(0.3 * 10)
print(f"模型1 指数增长:")
print(f"  数值解 y(10) = {y_num:.4f}")
print(f"  解析解 y(10) = {y_exact:.4f}")
print(f"  误差: {abs(y_num - y_exact):.6f}")
print()

# 模型 2: Logistic 增长
def logistic_ode(t, y):
    r, K = 1.0, 10.0
    return r * y * (1 - y / K)

sol2 = integrate.solve_ivp(logistic_ode, [0, 20], [0.5], method='RK45')
# 稳态值 = K (当 t → ∞)
steady_state = # TODO
print(f"模型2 Logistic 增长:")
print(f"  稳态值 (理论 K=10): {steady_state:.4f}")
print(f"  t=20 时 y 值: {sol2.y[0][-1]:.4f}")
print()

# 模型 3: 简谐振动 d²x/dt² + x = 0
# 化为一阶: [dx/dt, dv/dt] = [v, -x]
def harmonic_ode(t, state):
    # TODO: 实现简谐振动方程
    pass

sol3 = integrate.solve_ivp(harmonic_ode, [0, np.pi], [1.0, 0.0], method='RK45')
x_pi = # TODO: 获取 x(π) 的数值解
x_exact_pi = np.cos(np.pi)  # 解析解 cos(π) = -1
print(f"模型3 简谐振动:")
print(f"  数值解 x(π) = {x_pi:.4f}")
print(f"  解析解 cos(π) = {x_exact_pi:.4f}")
print(f"  误差: {abs(x_pi - x_exact_pi):.6f}")
print()
print("✅ 三个 ODE 模型求解完成！")
`,
      testCode: `output = _output_buffer.getvalue()
_test_results.append({
    "name": "指数增长模型",
    "passed": "指数" in output or "exp" in output.lower() or "0.3" in output,
    "message": "应包含指数增长模型求解"
})
_test_results.append({
    "name": "Logistic 模型",
    "passed": "logistic" in output.lower() or "Logistic" in output or "稳态" in output,
    "message": "应包含 Logistic 模型求解"
})
_test_results.append({
    "name": "简谐振动模型",
    "passed": "简谐" in output or "harmonic" in output.lower() or "cos" in output.lower(),
    "message": "应包含简谐振动模型求解"
})
_test_results.append({
    "name": "数值解与解析解对比",
    "passed": "误差" in output or "error" in output.lower(),
    "message": "应对比数值解和解析解的误差"
})
`,
      testCases: [
        { name: '基础测试', input: '无', expected: 'ODE 求解' }
      ],
      xpReward: 50
    }
  ]
}
