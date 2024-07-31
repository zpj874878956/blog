(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{482:function(t,a,i){"use strict";i.r(a);var v=i(0),_=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"gitlab-ci简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitlab-ci简介"}},[t._v("#")]),t._v(" gitlab CI简介")]),t._v(" "),a("p",[t._v("gitlab ci是在gitlab8.0之后自带的一个持续集成系统，中心思想是当每一次push到gitlab的时候，都会触发一次脚本执行，然后脚本的内容包括了测试、编译、部署等一系列自定义的内容。"),a("br"),t._v("\ngitlab ci的脚本执行，需要自定义安装对应的gitlab runner来执行，代码push之后，webhook检测到代码变化，就会触发gitlab ci，分配到各个runner来运行相应的脚本script。这些脚本有些是测试项目用的，有些是部署用的。")]),t._v(" "),a("h1",{attrs:{id:"gitlab-ci与jenkins对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitlab-ci与jenkins对比"}},[t._v("#")]),t._v(" Gitlab ci与Jenkins对比")]),t._v(" "),a("h2",{attrs:{id:"分支可配置性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分支可配置性"}},[t._v("#")]),t._v(" 分支可配置性")]),t._v(" "),a("ul",[a("li",[t._v("使用gitlab ci，新创建的分支无需任何进一步的配置即可立即使用CI管道中的已定义作业。")]),t._v(" "),a("li",[t._v("Jenkins基于gitlab的多分支流水线插件可以实现。相对配置来说，gitlab ci更加方便。")])]),t._v(" "),a("h2",{attrs:{id:"拉取请求支持"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拉取请求支持"}},[t._v("#")]),t._v(" 拉取请求支持")]),t._v(" "),a("p",[t._v("如果很好的集成了存储库管理器的CI/CD平台，可以看到请求的当前构建状态。使用这个功能，可以避免将代码合并到不起作用或者无法正确构建的主分支中。")]),t._v(" "),a("ul",[a("li",[t._v("Jenkins没有与源代码管理系统进一步集成，需要管理员自行写代码或者插件实现。")]),t._v(" "),a("li",[t._v("gitlab与其CI平台紧密集成，可以方便查看每个打开和关闭拉动请求的运行和完成管道。")])]),t._v(" "),a("h2",{attrs:{id:"权限管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#权限管理"}},[t._v("#")]),t._v(" 权限管理")]),t._v(" "),a("p",[t._v("从存储管理器继承的权限管理对于不想为每个服务分别设置每个用户的权限的大型开发人员或组织团体很有用。大多数情况下，两种情况下的权限都是相同的，因此默认情况下他们配置在一个位置。")]),t._v(" "),a("ul",[a("li",[t._v("由于gitlab与CI深度整合，权限可以统一管理。")]),t._v(" "),a("li",[t._v("由于Jenkins没有内置的存储库管理器，因此它无法直接在存储库管理器和CI/CD平台之间合并权限。")])]),t._v(" "),a("h2",{attrs:{id:"存储库交互"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#存储库交互"}},[t._v("#")]),t._v(" 存储库交互")]),t._v(" "),a("ul",[a("li",[t._v("gitlab ci是git存储库管理器gitlab的固定组件，因此在ci/cd流程和存储库直接提供了良好的交互。")]),t._v(" "),a("li",[t._v("Jenkins与存储库管理器都是松散耦合的，因此在选择版本控制系统时它非常灵活。此外，就像其前身一样，Jenkins强调了对插件的支持，以进一步扩展或改善软件的现有功能。")])]),t._v(" "),a("h2",{attrs:{id:"插件管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件管理"}},[t._v("#")]),t._v(" 插件管理")]),t._v(" "),a("ul",[a("li",[t._v("扩展Jenkins的本机功能是通过插件完成的，插件的维护，保护和成本很高。")]),t._v(" "),a("li",[t._v("gitlab是开放式的，任何人都可以直接向代码库贡献更改，一旦合并，它将自动测试并维护每个更改")])]),t._v(" "),a("h2",{attrs:{id:"对比总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对比总结"}},[t._v("#")]),t._v(" 对比总结")]),t._v(" "),a("h2",{attrs:{id:"gitlab-ci"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitlab-ci"}},[t._v("#")]),t._v(" gitlab ci")]),t._v(" "),a("ul",[a("li",[t._v("轻量级，不需要复杂的安装手段")]),t._v(" "),a("li",[t._v("配置简单，与gitlab可直接适配")]),t._v(" "),a("li",[t._v("实时构建日志十分清晰，UI交互体验很好")]),t._v(" "),a("li",[t._v("使用yaml进行配置，任何人都可以很方便的使用")]),t._v(" "),a("li",[t._v("没有统一的管理界面，无法统一管理所有的项目")]),t._v(" "),a("li",[t._v("配置依赖于代码仓库，耦合度没有Jenkins低")])]),t._v(" "),a("h2",{attrs:{id:"jenkins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jenkins"}},[t._v("#")]),t._v(" Jenkins")]),t._v(" "),a("ul",[a("li",[t._v("编译服务和代码仓库分离，耦合度低")]),t._v(" "),a("li",[t._v("插件丰富，支持语言众多")]),t._v(" "),a("li",[t._v("有统一的web管理页面")]),t._v(" "),a("li",[t._v("插件以及自身安装较为复杂")]),t._v(" "),a("li",[t._v("体量较大，不适合小型团队开发。")])]),t._v(" "),a("h1",{attrs:{id:"适用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#适用场景"}},[t._v("#")]),t._v(" 适用场景")]),t._v(" "),a("ul",[a("li",[t._v("gitlab ci有助于devops人员，例如敏捷开发中，开发人员与运维是同一个人，最便捷的开发方式")]),t._v(" "),a("li",[t._v("Jenkins适合在多角色团队中，职责分明，配置与代码分离，插件丰富。")])]),t._v(" "),a("hr"),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.cuiliangblog.cn/detail/section/122643037",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文链接"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=_.exports}}]);