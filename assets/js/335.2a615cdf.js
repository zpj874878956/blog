(window.webpackJsonp=window.webpackJsonp||[]).push([[335],{689:function(t,e,r){"use strict";r.r(e);var s=r(0),a=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h3",{attrs:{id:"http-server简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-server简介"}},[t._v("#")]),t._v(" http-server简介")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("http-server")]),t._v(" 是一个简单的零配置的命令行")]),t._v(" "),e("li",[e("strong",[t._v("http服务器")]),t._v("，它足够强大便于生产和使用，用于本地测试和开发。")])]),t._v(" "),e("h3",{attrs:{id:"_1、安装nodejs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、安装nodejs"}},[t._v("#")]),t._v(" 1、安装nodejs")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网地址"),e("OutboundLink")],1),t._v(" 下载官网推荐版本，并安装。 在命令行输入命令"),e("code",[t._v("node -v")]),t._v("以及"),e("code",[t._v("npm -v")]),t._v("检查版本")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("node")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v("\nv16.18.1\n\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("h3",{attrs:{id:"_2、http-server下载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、http-server下载"}},[t._v("#")]),t._v(" 2、http-server下载")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/http-party/http-server",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网地址"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("安装")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--global")]),t._v(" http-server\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h3",{attrs:{id:"_3、开启服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、开启服务"}},[t._v("#")]),t._v(" 3、开启服务")]),t._v(" "),e("blockquote",[e("p",[t._v("命令行中进入目标文件夹（也就是需要启动服务的文件夹），输入如下命令：")])]),t._v(" "),e("blockquote",[e("p",[t._v("http-server")])]),t._v(" "),e("ul",[e("li",[t._v("本地服务器就启动起来了，默认端口为"),e("code",[t._v("8080")]),t._v("。")])]),t._v(" "),e("h3",{attrs:{id:"_4、其它参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、其它参数"}},[t._v("#")]),t._v(" 4、其它参数")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("作用")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("-p 或者 --port")]),t._v(" "),e("td",[t._v("端口设置，默认是 8080")])]),t._v(" "),e("tr",[e("td",[t._v("-a")]),t._v(" "),e("td",[t._v("监听地址设置默认是 0.0.0.0")])]),t._v(" "),e("tr",[e("td",[t._v("-d")]),t._v(" "),e("td",[t._v("是否显示文件列表 默认true")])]),t._v(" "),e("tr",[e("td",[t._v("-i")]),t._v(" "),e("td",[t._v("显示自动索引 默认true")])]),t._v(" "),e("tr",[e("td",[t._v("-g 或者 --gzip")]),t._v(" "),e("td",[t._v("默认false，当文件的gzip版本存在且请求接受gzip编码时，它将服务于./public/some-file.js.gz，而不是./public/some-file.js")])]),t._v(" "),e("tr",[e("td",[t._v("-e 或者 --ext")]),t._v(" "),e("td",[t._v("如果没有提供默认文件扩展名(默认为html)")])]),t._v(" "),e("tr",[e("td",[t._v("-s 或者 --silent")]),t._v(" "),e("td",[t._v("禁止控制台日志信息输出")])]),t._v(" "),e("tr",[e("td",[t._v("–cors")]),t._v(" "),e("td",[t._v("允许跨域资源共享")])]),t._v(" "),e("tr",[e("td",[t._v("-o")]),t._v(" "),e("td",[t._v("设置缓存cache-control max-age heade存留时间（以秒为单位），示例：-c10是10秒，默认是3600秒，如果要禁用缓存就使用-c-1")])]),t._v(" "),e("tr",[e("td",[t._v("-c")]),t._v(" "),e("td",[t._v("设置缓存cache-control max-age heade存留时间（以秒为单位），示例：-c10是10秒，默认是3600秒，如果要禁用缓存就使用-c-1")])]),t._v(" "),e("tr",[e("td",[t._v("-S 或者 --ssl")]),t._v(" "),e("td",[t._v("使用https协议")])])])]),t._v(" "),e("hr"),t._v(" "),e("p",[e("a",{attrs:{href:"https://juejin.cn/post/6844903946444603400",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文链接"),e("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=a.exports}}]);