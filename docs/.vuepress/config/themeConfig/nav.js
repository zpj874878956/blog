// nav
module.exports = [
  { text: '首页', link: '/' },
  { text: '运维',link: '/ops/',
    items: [
      { text: 'linux', link: '/linux/'},
      { text: 'windows', link: '/windows/'},
      { text: '中间件', link: '/middleware/'},
      { text: '监控', link: '/monitor/'},
      { text: '网络', link: '/network/'},
      { text: '存储', link: '/storage/'},
      { text: '安全', link: '/safety/'},
      { text: '防火墙', link: '/firewalld/'},
      { text: '数据库', link: '/db/'},
      { text: '系统', link: '/sys/'},
      { text: 'docker', link: '/docker/'},
      { text: '运维工具', link: '/tool/'},
      { text: 'other', link: '/other/'},
    ]
  },
  { text: '专题',link: '/topic/',
    items: [
      { text: 'elk', link: '/elk/'},
      { text: 'K8S', link: '/k8s/'},
      { text: 'ansible', link: '/ansible/'},
      { text: 'Jenkins', link: '/jenkins/'},
      { text: 'GitLabCI_CD', link: '/GitLabCI_CD/'},
    ]
  },
  { text: '生活',link: '/life/',
    items: [
      { text: '随笔', link: '/suibi/'},
      { text: '面试', link: '/mianshi/'},
      { text: '工具', link: '/gongju/'},
      { text: '收藏夹', link: '/favorites/'},
    ]
  },
  { text: '编程',link: '/code/',
    items: [
      { text: 'Shell', link: '/shell/'},
      { text: 'python', link: '/python/'},
      { text: 'golang', link: '/go/'},
    ]
  },
  { text: '关于', link: '/about/' },
  { text: '友链', link: '/friends/' },
  { text: '索引', link: '/categories/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
  // {
    // text: '页面',
    // link: '/nav/',
    // items: [
      // {
      //   items: [
      //     { text: '分类', link: '/categories/' },
      //     { text: '标签', link: '/tags/' },
      //     { text: '归档', link: '/archives/' },
      //   ],
      // },
      // {
      //   items: [
      //     // { text: '开往', link: 'https://travellings.link' },
      //     // { text: '导航', link: '/nav/' },
      //     { text: '打赏', link: '/reward/' },
      //   ]
      // },
      // {
      //   items: [
      //     { text: 'json2go', link: 'http://public.eryajf.net/json2go' },
      //     { text: '微信MD编辑', link: 'http://public.eryajf.net/mdnice' },
      //     { text: '国内镜像', link: 'http://public.eryajf.net/mirror' },
      //     { text: '出口IP查询', link: 'http://ip.eryajf.net' },
      //     { text: '代码高亮工具', link: 'http://public.eryajf.net/highlight/' },
      //   ]
      // },
    //  {
    //     items: [
    //       { text: 'ldapdoc', link: 'http://ldapdoc.eryajf.net' },
    //       { text: 'HowToStartOpenSource', link: 'https://eryajf.github.io/HowToStartOpenSource' },
    //       { text: 'vdoing-template', link: 'https://eryajf.github.io/vdoing-template/' },
    //     ]
    //   }
    // ],
  // text: '打赏', link: '/reward/'
  // },
  {
    text: '页面',
    link: '/nav/',
    items: [
      {
        items: [
          { text: '首页', link: 'https://www.zzppjj.top' },
          { text: '图床', link: 'https://pic.zzppjj.top' },
          { text: '评论', link: 'https://artalk.zzppjj.top' },
          { text: '下载站点', link: 'https://www.zzppjj.top/download/light/' },
        ],
      },
    ],
  },  
  { text: '开往', link: 'https://www.travellings.cn/go.html' },
]