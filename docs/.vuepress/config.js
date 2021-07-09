const private = require('./private/private')

module.exports = {
  "base": "/docs/",
  "title": "LiangSir",
  "description": "前端入门到入坟",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/logo.jpg"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",

  "themeConfig": {
    // 评论功能配置
    valineConfig: {
      appId: private.appId,
      appKey: private.appKey,
      recordId: true,
      placeholder: '填写邮箱地址可以及时收到回复哦...',
      visitor: true
    },
    // 导航栏配置
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        text: "工具箱",
        icon: "iconfont icon-tools",
        items: [
          { text: "在线PS", link: "https://ps.gaoding.com/#/" },
          { text: "奶牛快传", link: "https://cowtransfer.com/" },
          { text: "编程语言排行榜", link: "https://www.tiobe.com/tiobe-index/" },
        ]
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "留言板",
        "link": "../docs/message/message.md"


      },
      {
        "text": "关于",
        "icon": "reco-message",
        "items": [
          {
            "text": "关于我",
            "link": "/view/about-me/about-me.md",
            "icon": "reco-account"
          }, {
            text: "CSDN",
            link: "https://blog.csdn.net",
            icon: "reco-csdn",
          },
          {
            text: "GitHub",
            link: "https://github.com",
            icon: "reco-github",
          },
          {
            text: "Gitee",
            link: "https://gitee.com",
            icon: "reco-mayun",
          },
        ]
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    // 博客配置
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.jpg",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "LiangSir",
    "authorAvatar": "/tx.jpg",
    "record": "xxxx",
    "startYear": "2017"
  },
  "markdown": {
    "lineNumbers": true
  },
  // 插件
  "plugins": [
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ["miku"],
        clean: false,
        messages: {
          welcome: '我是lookroot欢迎你的关注 ',
          home: '心里的花，我想要带你回家。',
          theme: '好吧，希望你能喜欢我的其他小伙伴。',
          close: '再见哦'
        }
      }
    ],
    ["vuepress-plugin-boxx"],
    ["cursor-effects", {
      size: 3,                    // size of the particle, default: 2
      shape: ['circle'],  // shape of the particle, default: 'star'
      zIndex: 999999999           // z-index property of the canvas, default: 999999999
    }],
    [
      "vuepress-reco/vuepress-plugin-bgm-player",
      // 本地文件示例
      {
        name: '장가갈 수 있을까',
        artist: '咖啡少年',
        url: '/bgm/1.mp3',
        cover: '/bgm/1.jpg'
      },
      // 网络文件示例
      {
        name: '강남역 4번 출구',
        artist: 'Plastic / Fallin` Dild',
        url: 'https://assets.smallsunnyfox.com/music/2.mp3',
        cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
      },
      {
        name: '用胳膊当枕头',
        artist: '최낙타',
        url: 'https://assets.smallsunnyfox.com/music/3.mp3',
        cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
      }
    ]



  ],

}