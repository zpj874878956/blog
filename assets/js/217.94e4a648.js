(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{570:function(s,a,t){"use strict";t.r(a);var e=t(0),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"日志排序高级操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志排序高级操作"}},[s._v("#")]),s._v(" 日志排序高级操作")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print $NF, $0}'")]),s._v(" logfile.log "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" -d"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("' '")]),s._v(" -f2-\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("解释：")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("awk '{print $NF, $0}' logfile.log")]),s._v("：使用"),a("code",[s._v("awk")]),s._v("将最后一列附加到每行的开头。")]),s._v(" "),a("li",[a("code",[s._v("sort -n")]),s._v("：按数值对附加的列进行排序。")]),s._v(" "),a("li",[a("code",[s._v("cut -d' ' -f2-")]),s._v("：移除附加的列，只保留原始行")])]),s._v(" "),a("h1",{attrs:{id:"对日志时间进行排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对日志时间进行排序"}},[s._v("#")]),s._v(" 对日志时间进行排序")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'|'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-k")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5,5")]),s._v(" logfile.log\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#默认是以空格排序")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("解释：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("sort")]),s._v("：这是排序命令。")]),s._v(" "),a("li",[a("code",[s._v("-t '|'")]),s._v("：指定管道符号 "),a("code",[s._v("|")]),s._v(" 作为字段分隔符。")]),s._v(" "),a("li",[a("code",[s._v("-k 5,5")]),s._v("：指定按第五个字段（最后一列）进行排序。")])])])}),[],!1,null,null,null);a.default=r.exports}}]);