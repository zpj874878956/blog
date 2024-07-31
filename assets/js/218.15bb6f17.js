(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{571:function(a,s,t){"use strict";t.r(s);var e=t(0),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h3",{attrs:{id:"o-参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#o-参数"}},[a._v("#")]),a._v(" "),s("code",[a._v("-o")]),a._v(" 参数")]),a._v(" "),s("p",[s("code",[a._v("-o")]),a._v(" 参数用于只输出匹配的部分，而不是整行。这对于提取特定的模式或子字符串非常有用。")]),a._v(" "),s("h3",{attrs:{id:"p-参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#p-参数"}},[a._v("#")]),a._v(" "),s("code",[a._v("-P")]),a._v(" 参数")]),a._v(" "),s("p",[s("code",[a._v("-P")]),a._v(" 参数用于启用 Perl 兼容的正则表达式（PCRE）。这使得 "),s("code",[a._v("grep")]),a._v(" 能够使用更强大的正则表达式语法和功能。")]),a._v(" "),s("h3",{attrs:{id:"组合使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组合使用"}},[a._v("#")]),a._v(" 组合使用")]),a._v(" "),s("p",[a._v("当这两个参数组合使用时，"),s("code",[a._v("grep")]),a._v(" 会只输出符合 Perl 兼容正则表达式的匹配部分，而不是整行。")]),a._v(" "),s("h3",{attrs:{id:"示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[a._v("#")]),a._v(" 示例")]),a._v(" "),s("p",[a._v("假设你有以下日志行：")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("T20192NLP34431157"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("000000"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("0000"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("T2249"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("out\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("你只想提取 "),s("code",[a._v("T20192NLP34431157")]),a._v(" 和 "),s("code",[a._v("T2249")]),a._v("。你可以使用以下命令：")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"T20192NLP34431157|000000|0000|T2249|out"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-oP")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'T20192NLP34431157|T2249'")]),a._v("\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("这个命令的解释如下：")]),a._v(" "),s("ul",[s("li",[s("code",[a._v('echo "T20192NLP34431157|000000|0000|T2249|out"')]),a._v("：将日志行输出到标准输出。")]),a._v(" "),s("li",[s("code",[a._v("|")]),a._v("：将前一个命令的输出传递给下一个命令。")]),a._v(" "),s("li",[s("code",[a._v("grep -oP 'T20192NLP34431157|T2249'")]),a._v("：只输出匹配到的 "),s("code",[a._v("T20192NLP34431157")]),a._v(" 和 "),s("code",[a._v("T2249")]),a._v("。")])]),a._v(" "),s("p",[a._v("输出将是：")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("T20192NLP34431157\nT2249\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("这样，你可以使用 "),s("code",[a._v("grep -oP")]),a._v(" 来提取日志中的特定模式。")]),a._v(" "),s("h3",{attrs:{id:"e-参数-扩展正则表达式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#e-参数-扩展正则表达式"}},[a._v("#")]),a._v(" "),s("code",[a._v("-E")]),a._v(" 参数（扩展正则表达式）")]),a._v(" "),s("p",[s("code",[a._v("-E")]),a._v(" 启用扩展正则表达式（Extended Regular Expressions, ERE）。扩展正则表达式提供了更丰富的语法，支持更复杂的模式匹配，且相对于基本正则表达式（BRE）更为简洁。")]),a._v(" "),s("p",[s("strong",[a._v("特点：")])]),a._v(" "),s("ul",[s("li",[a._v("支持使用括号 "),s("code",[a._v("()")]),a._v(" 进行分组")]),a._v(" "),s("li",[a._v("支持使用竖线 "),s("code",[a._v("|")]),a._v(" 进行或运算")]),a._v(" "),s("li",[a._v("支持使用加号 "),s("code",[a._v("+")]),a._v(" 进行一次或多次匹配")]),a._v(" "),s("li",[a._v("支持问号 "),s("code",[a._v("?")]),a._v(" 表示前一个字符零次或一次")]),a._v(" "),s("li",[a._v("支持花括号 "),s("code",[a._v("{}")]),a._v(" 指定匹配的次数")])]),a._v(" "),s("p",[s("strong",[a._v("示例：")])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-E")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"error (warn|info)"')]),a._v(" file.txt\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v('匹配包含 "error warn" 或 "error info" 的行。')]),a._v(" "),s("h3",{attrs:{id:"i-忽略大小写参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#i-忽略大小写参数"}},[a._v("#")]),a._v(" "),s("strong",[s("code",[a._v("-i")])]),a._v("：忽略大小写参数")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"pattern"')]),a._v(" file.txt\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"v-反向匹配-显示不包含模式的行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-反向匹配-显示不包含模式的行"}},[a._v("#")]),a._v(" "),s("strong",[s("code",[a._v("-v")])]),a._v("：反向匹配（显示不包含模式的行）")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"pattern"')]),a._v(" file.txt\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h3",{attrs:{id:"r-递归搜索目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#r-递归搜索目录"}},[a._v("#")]),a._v(" "),s("strong",[s("code",[a._v("-r")])]),a._v("：递归搜索目录")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-r")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"pattern"')]),a._v(" /path/to/directory\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h3",{attrs:{id:"l-只列出匹配的文件名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#l-只列出匹配的文件名"}},[a._v("#")]),a._v(" "),s("strong",[s("code",[a._v("-l")])]),a._v("：只列出匹配的文件名")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-l")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"pattern"')]),a._v(" *.txt\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h3",{attrs:{id:"c-计数匹配的行数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#c-计数匹配的行数"}},[a._v("#")]),a._v(" "),s("strong",[s("code",[a._v("-c")])]),a._v("：计数匹配的行数")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"pattern"')]),a._v(" file.txt\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h3",{attrs:{id:"n-显示匹配行的行号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#n-显示匹配行的行号"}},[a._v("#")]),a._v(" "),s("strong",[s("code",[a._v("-n")])]),a._v("：显示匹配行的行号")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"pattern"')]),a._v(" file.txt\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h3",{attrs:{id:"h-显示匹配的文件名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#h-显示匹配的文件名"}},[a._v("#")]),a._v(" "),s("strong",[s("code",[a._v("-H")])]),a._v("：显示匹配的文件名")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-H")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"pattern"')]),a._v(" file.txt\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"a-num-显示匹配行及其后面-num-行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#a-num-显示匹配行及其后面-num-行"}},[a._v("#")]),a._v(" "),s("strong",[s("code",[a._v("-A num")])]),a._v("：显示匹配行及其后面 "),s("code",[a._v("num")]),a._v(" 行")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"pattern"')]),a._v(" file.txt\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h3",{attrs:{id:"b-num-显示匹配行及其前面-num-行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#b-num-显示匹配行及其前面-num-行"}},[a._v("#")]),a._v(" "),s("strong",[s("code",[a._v("-B num")])]),a._v("：显示匹配行及其前面 "),s("code",[a._v("num")]),a._v(" 行")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-B")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"pattern"')]),a._v(" file.txt\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h3",{attrs:{id:"c-num-显示匹配行及其前后-num-行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#c-num-显示匹配行及其前后-num-行"}},[a._v("#")]),a._v(" "),s("strong",[s("code",[a._v("-C num")])]),a._v("：显示匹配行及其前后 "),s("code",[a._v("num")]),a._v(" 行")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-C")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"pattern"')]),a._v(" file.txt\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h3",{attrs:{id:"e-pattern-指定多个匹配模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#e-pattern-指定多个匹配模式"}},[a._v("#")]),a._v(" "),s("strong",[s("code",[a._v("-e pattern")])]),a._v("：指定多个匹配模式")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"pattern1"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"pattern2"')]),a._v(" file.txt\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h3",{attrs:{id:"f-file-从文件读取匹配模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#f-file-从文件读取匹配模式"}},[a._v("#")]),a._v(" "),s("strong",[s("code",[a._v("-f file")])]),a._v("：从文件读取匹配模式")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" patterns.txt file.txt\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h3",{attrs:{id:"w-匹配整个单词"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#w-匹配整个单词"}},[a._v("#")]),a._v(" "),s("strong",[s("code",[a._v("-w")])]),a._v("：匹配整个单词")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-w")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"word"')]),a._v(" file.txt\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h3",{attrs:{id:"x-匹配整行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#x-匹配整行"}},[a._v("#")]),a._v(" "),s("strong",[s("code",[a._v("-x")])]),a._v("：匹配整行")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-x")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"exact line"')]),a._v(" file.txt\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h3",{attrs:{id:"color-高亮显示匹配部分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#color-高亮显示匹配部分"}},[a._v("#")]),a._v(" "),s("strong",[s("code",[a._v("--color")])]),a._v("：高亮显示匹配部分")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--color")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"pattern"')]),a._v(" file.txt\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);