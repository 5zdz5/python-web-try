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
      correctAnswer: 1
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
      correctAnswer: 0
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
      correctAnswer: 0
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
  ]
}
