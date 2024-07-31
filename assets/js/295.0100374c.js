(window.webpackJsonp=window.webpackJsonp||[]).push([[295],{648:function(s,e,a){"use strict";a.r(e);var n=a(0),t=Object(n.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("ol",[e("li",[e("p",[s._v("下载Redis 5.0.13源代码包：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://download.redis.io/releases/redis-5.0.13.tar.gz\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("解压源代码包：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" xzf redis-5.0.13.tar.gz\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("进入解压后的目录：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" redis-5.0.13\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("编译和安装Redis：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("完成安装后，您可以在Redis的安装目录中找到可执行文件。默认情况下，Redis被安装在"),e("code",[s._v("/usr/local/bin")]),s._v("目录下。")])]),s._v(" "),e("li",[e("p",[s._v("配置Redis：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" redis.conf /etc/redis.conf\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("这将复制默认的Redis配置文件到"),e("code",[s._v("/etc/redis.conf")]),s._v("，您可以根据需要进行修改。")]),s._v(" "),e("p",[s._v("添加以下配置优化")]),s._v(" "),e("p",[s._v("maxmemory 4G"),e("br"),s._v("\nmaxmemory-policy allkeys-lru"),e("br"),s._v("\nbind 192.168.12.95 127.0.0.1"),e("br"),s._v("\ndaemonize yes"),e("br"),s._v("\nrequirepass JTSredi")])]),s._v(" "),e("li",[e("p",[s._v("启动Redis服务：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /etc/systemd/system/redis.service "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<-")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'EOF'\n[Unit]\nDescription=Redis\nAfter=network.target\n[Service]\nType=forking\nExecStart=/usr/local/redis/src/redis-server /etc/redis/6379.conf\nExecStop=/usr/local/redis/src/redis-cli -h 192.168.1.204 -p 6379 shutdown\nRestartSec=10\nRestart=always\n[Install]\nWantedBy=multi-user.target\nEOF")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])])])]),s._v(" "),e("p",[s._v("现在，您已经成功地通过源码编译安装了Redis 5.0.13。您可以使用Redis客户端连接到Redis服务器，并使用它来存储和检索数据。请注意，根据您的系统配置，可能需要以root用户或使用sudo命令执行某些步骤。")])])}),[],!1,null,null,null);e.default=t.exports}}]);