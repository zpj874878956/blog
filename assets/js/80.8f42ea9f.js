(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{430:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h4",{attrs:{id:"优化的取消交换分区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化的取消交换分区"}},[s._v("#")]),s._v(" 优化的取消交换分区")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Remove swapfile from /etc/fstab\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("mount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{{ item }"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("fstype")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" swap\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("state")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" absent\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("with_items")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" swap\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" none\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" check swap\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /sbin/swapon "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("s\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("register")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" swapon\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("changed_when")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" no\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Disable swap\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /sbin/swapoff "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("a\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("when")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" swapon.stdout\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ignore_errors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" yes\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" shutdown  get the status of swap\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("shell")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" grep swap /etc/fstab l grep "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v('c "'),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("register")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" swap\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ignore errors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" yes\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tags")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" swap\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" shutdown  swapoff "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("a\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("shell")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" swapoff "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("a\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("when")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(' swap.stdout == "0"\n  '),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ignore errors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" yes\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tags")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" swap\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" shutdown "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),s._v(" 注释/etc/fstab/swap 那一行\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" dest=/etc/fstab regexp='(."),a("span",{pre:!0,attrs:{class:"token important"}},[s._v("*)")]),s._v(" swap(\\s+) swap' replace='f  swap\\2swap'\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("when")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(' swap.stdout == "0"\n  '),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ignore errors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" yes\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tags")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" swap\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);