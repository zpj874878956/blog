(window.webpackJsonp=window.webpackJsonp||[]).push([[291],{643:function(t,a,s){"use strict";s.r(a);var e=s(0),p=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("我们主要学习数据库的一些基本操作，比如如何在数据库创建用户，授权，删除用户，回收权限，为用户加锁或者解锁等一些常用的操作。")]),t._v(" "),a("p",[t._v("首先，我们要知道数据库中创建用户的语句怎么写，看下面:")]),t._v(" "),a("h2",{attrs:{id:"_1-创建用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建用户"}},[t._v("#")]),t._v(" 1.创建用户")]),t._v(" "),a("div",{staticClass:"language-plsql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plsql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v("  user laowang "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("identified")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" laolu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n创建用户名为laowang"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("为laowang设置用户密码laolu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[a("img",{attrs:{src:"http://pic.zzppjj.top/LightPicture/2024/07/219f954894fa6a2e.jpg",alt:"219f954894fa6a2e.jpg"}})]),t._v(" "),a("p",[t._v("如上图所示，我们的老李用户就创建完成了，这里面我们还要说几个细节")]),t._v(" "),a("div",{staticClass:"language-plsql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plsql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" user 是创建用户的关键字\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("identified")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v("是设置用户密码的关键字\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("sql语句写完以后，还要按下F8执行一下。不要忘记。")]),t._v(" "),a("p",[t._v("但是创建后，我们使用laolu账号登陆是不成功的，因为这个账号是没有授权过的，")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://pic.zzppjj.top/LightPicture/2024/07/1f15e16909018b63.jpg",alt:"1f15e16909018b63.jpg"}})]),t._v(" "),a("p",[t._v("弹出报错信息：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://pic.zzppjj.top/LightPicture/2024/07/390c61fedced3eb4.jpg",alt:"390c61fedced3eb4.jpg"}})]),t._v(" "),a("p",[t._v("所以我们需要给laolu这个用户授权，让他登录")]),t._v(" "),a("p",[t._v("授权的语句是：")]),t._v(" "),a("div",{staticClass:"language-plsql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plsql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("grant")]),t._v(" coonect "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("resource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("dba "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" laolu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--connect   是链接数据库权限，可以对数据库进行增删改查")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--resource  资源使用权限，用来创建表格")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--dba  是数据库管理员权限")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("看下面完整的运行姿势。OK,创建完了用户，我们也给用户授权了，这回laolu可以登录系统了吧?别急，这里还要注意的是：创建用户、删除用户等权限只有数据库的管理员才有的哦，数据库的管理员一个是system,一个是dba。这个你需要记住哦！")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://pic.zzppjj.top/LightPicture/2024/07/5d6b30ffcaae1d63.jpg",alt:"5d6b30ffcaae1d63.jpg"}})]),t._v(" "),a("p",[t._v("再次输入laolu的用户名和密码，点击OK")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://pic.zzppjj.top/LightPicture/2024/07/b455fa399e835ac8.jpg",alt:"b455fa399e835ac8.jpg"}})]),t._v(" "),a("p",[t._v("发现成功登录了。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://pic.zzppjj.top/LightPicture/2024/07/48480e4bcb69b70c.jpg",alt:"48480e4bcb69b70c.jpg"}})]),t._v(" "),a("p",[t._v("有没有点小激动呢？")]),t._v(" "),a("h2",{attrs:{id:"_2-修改用户密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-修改用户密码"}},[t._v("#")]),t._v(" 2.修改用户密码")]),t._v(" "),a("p",[t._v("好了，那我们继续往下说，创建了一个用户，那么如何修改这个用户的密码呢？请看下面的表演姿势，修改密码的sql语句是：")]),t._v(" "),a("p",[t._v("alter user laolu identified by  laolu123;  其实就是在laolu的后面加了个123嘛 是不是很简单啊 修改后可以自己登录试试哦，别忘记按F8执行一次。")]),t._v(" "),a("h2",{attrs:{id:"_3-回收权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-回收权限"}},[t._v("#")]),t._v(" 3.回收权限")]),t._v(" "),a("p",[t._v("当有一天laolu这个用户从公司离职了，怎么办呢？我们是不是应该要把他的账号回收呢，请看回收laolu用户权限的正确姿势，sql语句是")]),t._v(" "),a("p",[t._v("revoke connect,resource from laolu;\nrevoke --回收\nconnect,rescource --创建以及查询等权限 from --从谁哪里回收")]),t._v(" "),a("p",[t._v("我们执行revoke connect,resource from laolu; 然后在看看laolu这个用户是不是又登录不了呢？")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://pic.zzppjj.top/LightPicture/2024/07/9eb9f4049eb6ad52.jpg",alt:"9eb9f4049eb6ad52.jpg"}})]),t._v(" "),a("h2",{attrs:{id:"_4-给用户加锁或者解锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-给用户加锁或者解锁"}},[t._v("#")]),t._v(" 4.给用户加锁或者解锁")]),t._v(" "),a("p",[t._v("我们可不可以给laolu这个用户加锁或者解锁呢？当热可以了，请往下看。")]),t._v(" "),a("div",{staticClass:"language-plsql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plsql"}},[a("code",[t._v("加锁：  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("alter")]),t._v("  user laolu account "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("lock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n解锁：  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("alter")]),t._v("  user laolu  account unlock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--alter user 是修改的关键字")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--account 是加锁或者解锁的关键字")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--lock      是给用户加锁")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--unlock  是给用户解锁")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("加锁以后，我们看下效果；先执行加锁的sql语句")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://pic.zzppjj.top/LightPicture/2024/07/315a5f7f7cb39e0e.jpg",alt:"315a5f7f7cb39e0e.jpg"}})]),t._v(" "),a("p",[t._v("在看登录的效果。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://pic.zzppjj.top/LightPicture/2024/07/700a9c76211ae93e.jpg",alt:"700a9c76211ae93e.jpg"}})]),t._v(" "),a("p",[t._v("同样的解锁也是一样的执行解锁的语句，然后就可以正确登录了。我就不给大家演示了。")]),t._v(" "),a("h2",{attrs:{id:"_5-删除用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-删除用户"}},[t._v("#")]),t._v(" 5.删除用户")]),t._v(" "),a("p",[t._v("我们接下来把laolu这个用户删除掉，请看sql的正确运行姿势。删除时请保证用户以及退出，不然无法删除哦。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://pic.zzppjj.top/LightPicture/2024/07/a8ec19c955a59a01.jpg",alt:"a8ec19c955a59a01.jpg"}})]),t._v(" "),a("p",[t._v("退出后，我们在次删除看效果。system登录后在执行删除的sql语句")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://pic.zzppjj.top/LightPicture/2024/07/56989a63fff8b1b7.jpg",alt:"56989a63fff8b1b7.jpg"}})]),t._v(" "),a("p",[t._v("在使用laolu的账号登陆时，又报错了。说明我们删除时成功。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://pic.zzppjj.top/LightPicture/2024/07/058650c5d1a933a1.jpg",alt:"058650c5d1a933a1.jpg"}})]),t._v(" "),a("p",[t._v("好了，关于数据库常用的创建用户，删除用户，修改用户密码，加锁，解锁，授权，回收授权，我们就说到这里。")])])}),[],!1,null,null,null);a.default=p.exports}}]);