# 焦糖工作室官网

## 技术栈

vue2+vue-router+muse-ui

## 目录结构

``` tree
├── CNAME
├── README.md
├── build
│   ├── build.js
│   ├── check-versions.js
│   ├── dev-client.js
│   ├── dev-server.js
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config
│   ├── dev.env.js
│   ├── index.js
│   └── prod.env.js
├── favicon.ico
├── index.html
├── jotang.png
├── package.json
├── src
│   ├── App.vue
│   ├── assets // 静态资源目录
│   │   ├── jotang.less // 自定义主题
│   │   └── party.png
│   ├── components // 页面内组件
│   │   ├── logo.vue
│   │   ├── photos.vue
│   │   └── time.vue
│   ├── main.js
│   ├── pages // 主要页面
│   │   ├── Hello.vue
│   │   └── Intro.vue
│   └── router
│       └── index.js //路由配置
├── static
│   └── images // 存放图片
├── text.png
└── yarn.lock
```

## 说明

- 建议使用yarn，兼容npm。
- 使用jotang.less来替换muse-ui的dark主题

## 进度

- [x] 继承首屏旋转logo
- [x] 导航栏自适应
- [ ] 过渡页设计
- [ ] 自定义主题设定
- [ ] 添加内容
- [ ] CI