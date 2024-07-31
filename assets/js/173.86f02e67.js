(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{525:function(s,t,a){"use strict";a.r(t);var n=a(0),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h3",{attrs:{id:"简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),t("p",[s._v("在现在的互联网时代，数据显得尤为重要，我们的服务器中也有一些重要数据，如果服务器被攻击或者过期忘记取回数据，那造成的后果难以想象，所以要做好定时备份的习惯，但是人又懒怎么办呢，今天给出一个 Aligo 定时备份文件的解决方案。")]),s._v(" "),t("h3",{attrs:{id:"源码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#源码"}},[s._v("#")]),s._v(" 源码")]),s._v(" "),t("p",[s._v("使用 python3.8 压缩备份文件，使用第三方库 aligo 来上传到阿里云盘")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" aligo "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Aligo\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" time \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" datetime\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" gzip\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" os\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" zipfile\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" shutil\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 备份目录路径数组")]),s._v("\nbackup_dir_list "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/www/lskypro/storage/app/uploads'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/www/shinie.top'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/www/bot'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/www/bimg.cc'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 压缩包路径")]),s._v("\ncompress_dir "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/www/aligo/backup'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 压缩包文件名数组，可添加文件夹")]),s._v("\ncompress_name_list "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'lskypro.zip'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'shinie.top.zip'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bot.zip'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bimg.cc.zip'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 阿里云盘上传路径upload_dir = '服务器数据备份'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 压缩包保存多少天")]),s._v("\nday"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 接收登录二维码邮件")]),s._v("\nemail"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1982989137@qq.com'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 防伪字符串")]),s._v("\nsecurity_str"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'backup-server-file'")]),s._v("\n\nt"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("time"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("strftime"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%Y-%m-%d"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("time"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("localtime"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" __name__ "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'__main__'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    ali "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Aligo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("email"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1982989137@qq.com'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'haivhisaofwu1920u90du90w'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 遍历备份目录")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("range")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("len")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("backup_dir_list"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        remote_folder "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ali"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get_folder_by_path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("upload_dir"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 遍历压缩目录")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" zip_file "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" os"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("listdir"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("compress_dir"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            t_be"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("zip_file"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n            start "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" datetime"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("datetime"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("strptime"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("t_be"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%Y-%m-%d"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            end "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" datetime"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("datetime"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("strptime"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%Y-%m-%d"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            days "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("end"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("start"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("days "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#计算天数差")]),s._v("\n            old_zip_file"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("compress_dir"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("t_be\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除过期文件")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" days"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("day"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"旧文件："')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("old_zip_file"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"已过期"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"即将删除本地压缩文件："')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("old_zip_file"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" os"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exists"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("old_zip_file"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                    shutil"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rmtree"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("old_zip_file"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        \n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建压缩包完整目录 /www/backup/2022-11-11/")]),s._v("\n        compress_pull_dir"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("compress_dir"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("t"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),s._v(" \n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" os"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exists"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("compress_pull_dir"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"创建压缩包完整目录："')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("compress_pull_dir"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            os"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("makedirs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("compress_pull_dir"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 压缩")]),s._v("\n        zip_file"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("compress_pull_dir"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("compress_name_list"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("zip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" zipfile"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ZipFile"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("zip_file"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'w'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" zipfile"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ZIP_DEFLATED"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("dirs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("files "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" os"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("walk"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("backup_dir_list"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#遍历统计")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" each "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" files"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" os"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exists"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("root"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("each"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"压缩："')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("root"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("each"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("zip")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("write"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("root"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("each"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("zip")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("close"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 同步文件夹（以本地文件为主）")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"同步文件夹……"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        ali"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sync_folder"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("local_folder"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("compress_dir"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" remote_folder"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("remote_folder"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("file_id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("flag"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("follow_delete"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br"),t("span",{staticClass:"line-number"},[s._v("64")]),t("br"),t("span",{staticClass:"line-number"},[s._v("65")]),t("br"),t("span",{staticClass:"line-number"},[s._v("66")]),t("br"),t("span",{staticClass:"line-number"},[s._v("67")]),t("br"),t("span",{staticClass:"line-number"},[s._v("68")]),t("br"),t("span",{staticClass:"line-number"},[s._v("69")]),t("br"),t("span",{staticClass:"line-number"},[s._v("70")]),t("br"),t("span",{staticClass:"line-number"},[s._v("71")]),t("br"),t("span",{staticClass:"line-number"},[s._v("72")]),t("br"),t("span",{staticClass:"line-number"},[s._v("73")]),t("br"),t("span",{staticClass:"line-number"},[s._v("74")]),t("br"),t("span",{staticClass:"line-number"},[s._v("75")]),t("br")])]),t("p",[s._v("参数解释：")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("参数")]),s._v(" "),t("th",[s._v("解释")]),s._v(" "),t("th",[s._v("参考值")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("backup_dir_list")]),s._v(" "),t("td",[s._v("备份目录路径数组，可选择备份服务器的文件路径（必要）")]),s._v(" "),t("td",[s._v("[‘/www/lskypro/storage/app/uploads’,’/www/shinie.top’]")])]),s._v(" "),t("tr",[t("td",[s._v("compress_dir")]),s._v(" "),t("td",[s._v("压缩包存放的目录，可与备份路径不一样（必要）")]),s._v(" "),t("td",[s._v("‘/www/aligo/backup’")])]),s._v(" "),t("tr",[t("td",[s._v("compress_name_list")]),s._v(" "),t("td",[s._v("压缩包文件名数组，需和 backup_dir_list 长度一致，且一一对应（必要）")]),s._v(" "),t("td",[s._v("[ ‘lskypro.zip’, ‘shinie.top.zip’]")])]),s._v(" "),t("tr",[t("td",[s._v("upload_dir")]),s._v(" "),t("td",[s._v("阿里云盘上传路径（必要）")]),s._v(" "),t("td",[s._v("‘AList / 服务器数据备份’")])]),s._v(" "),t("tr",[t("td",[s._v("day")]),s._v(" "),t("td",[s._v("压缩包保存天数（必要）")]),s._v(" "),t("td",[s._v("7")])]),s._v(" "),t("tr",[t("td",[s._v("email")]),s._v(" "),t("td",[s._v("接收登录二维码邮件（必要）")]),s._v(" "),t("td",[s._v("‘1982989137@qq.com‘")])]),s._v(" "),t("tr",[t("td",[s._v("security_str")]),s._v(" "),t("td",[s._v("防伪字符串")]),s._v(" "),t("td",[s._v("‘backup-server-file’")])])])]),s._v(" "),t("p",[s._v("先运行一遍（记得改邮箱）登录阿里云盘，获取 token")]),s._v(" "),t("p",[s._v("编辑 /etc/crontab：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" * * * root /www/python3.8.6/bin/python3.8 /www/aligo/upload.py\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("hr"),s._v(" "),t("p",[s._v("[原文链接]("),t("a",{attrs:{href:"https://blog.aqcoder.cn/posts/cbb5481/#%E6%BA%90%E7%A0%81",target:"_blank",rel:"noopener noreferrer"}},[s._v("使用Aligo定时备份服务器文件 | 枫叶"),t("OutboundLink")],1),s._v(")")])])}),[],!1,null,null,null);t.default=r.exports}}]);