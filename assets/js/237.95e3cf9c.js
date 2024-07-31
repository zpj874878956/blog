(window.webpackJsonp=window.webpackJsonp||[]).push([[237],{588:function(s,n,a){"use strict";a.r(n);var t=a(0),e=Object(t.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("blockquote",[n("p",[s._v("很多时候，服务器管理不是一个人在管理，不知道你是否也曾遇到过被同事或者好友执行"),n("code",[s._v("sudo rm -rf /")]),s._v("那种痛苦的感觉无言以对，其实这都是可以避免的，有 "),n("a",{attrs:{href:"https://www.myfreax.com/safe-rm/#",target:"_blank",rel:"noopener noreferrer"}},[s._v("软件"),n("OutboundLink")],1),s._v("可以为我们解决这种问题，我们只需要把禁止删除的文件或者目录即可，下面介绍一下这个 "),n("a",{attrs:{href:"https://www.myfreax.com/safe-rm/#",target:"_blank",rel:"noopener noreferrer"}},[s._v("软件"),n("OutboundLink")],1)])]),s._v(" "),n("h2",{attrs:{id:"安装-safe-rm-工具"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装-safe-rm-工具"}},[s._v("#")]),s._v(" 安装 safe-rm 工具")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载文件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# wget https://launchpadlibrarian.net/188958703/safe-rm-0.12.tar.gz")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解压文件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tar -xvf safe-rm-0.12.tar.gz")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拷贝可执行文件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd safe-rm")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cp safe-rm /usr/local/bin/")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 建立软链接")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ln -s /usr/local/bin/safe-rm /usr/local/bin/rm")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("h2",{attrs:{id:"配置-path-环境变量-按需配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置-path-环境变量-按需配置"}},[s._v("#")]),s._v(" 配置 PATH 环境变量（按需配置）")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 确保PATH环境变量中，存在/usr/local/bin路径，且/usr/local/bin路径排在/usr/bin路径前面")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 一些脚本中使用完全路径/bin/rm或者/usr/bin/rm则不会受safe-rm影响")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# echo $PATH")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(" /usr/local/bin:/usr/local/sbin:/usr/bin "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果PATH环境变量不符合上面说的要求，则手动配置PATH环境变量")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vim /etc/profile")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/bin:/usr/local/sbin:/usr/bin:"),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果修改了PATH环境变量，执行命令使修改生效")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# source /etc/profile")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h2",{attrs:{id:"创建-safe-rm-配置文件-添加保护名单"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建-safe-rm-配置文件-添加保护名单"}},[s._v("#")]),s._v(" 创建 safe-rm 配置文件，添加保护名单")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认的safe-rm配置文件有以下两个，需要自行创建")]),s._v("\n\n全局配置：/etc/safe-rm.conf\n用户配置：~/.safe-rm\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建全局配置文件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# touch /etc/safe-rm.conf")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加保护名单")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vim /etc/safe-rm.conf")]),s._v("\n/\n/bin\n/boot\n/dev\n/etc\n/home\n/initrd\n/lib\n/lib32\n/lib64\n/proc\n/root\n/sbin\n/sys\n/usr\n/usr/bin\n/usr/include\n/usr/lib\n/usr/local\n/usr/local/bin\n/usr/local/include\n/usr/local/sbin\n/usr/local/share\n/usr/sbin\n/usr/share\n/usr/src\n/var\n/etc/safe-rm.conf\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br")])]),n("h2",{attrs:{id:"测试-save-rm-是否生效"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#测试-save-rm-是否生效"}},[s._v("#")]),s._v(" 测试 save-rm 是否生效")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建测试文件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# touch /home/test.txt")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 追加需要保护的文件路径到配置文件中")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vim /etc/safe-rm.conf")]),s._v("\n/home/test.txt\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 测试删除受保护的文件路径，如果输出skipping日志代表safe-rm生效")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rm /home/test.txt")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rm -rf /home/test.txt")]),s._v("\nsafe-rm: skipping /home/test.txt\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注意：")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 配置文件里面的/etc只能保证执行"rm -rf /etc"命令的时候不能删除，但是如果执行"rm -rf /etc/app"，还是可以删除app文件的')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果想保证某个目录下面的所有文件都不被删除，则配置文件里可以写成/etc/*，但使用通配符的方式无法避免/etc目录下链接文件被删除")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 例如/lib或/lib64这种目录，下面会有很多库文件对应的链接文件，使用safe-rm并不能保护链接文件被删除")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 建议将/etc/safe-rm.conf加入到保护名单中，防止/etc/safe-rm.conf被删后配置失效")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("h2",{attrs:{id:"使用系统默认的删除命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用系统默认的删除命令"}},[s._v("#")]),s._v(" 使用系统默认的删除命令")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);