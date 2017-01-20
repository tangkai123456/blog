## 项目简介
使用react技术栈搭建的个人博客,手机端显示为单页面应用。

[git](https://github.com/tangkai123456/blog)

## 功能
- 首页列表，加载所有的文章，预览文章的部分内容，同时显示赞、评论、浏览的数量。
- 文章发布。
- 文章页，能查看详细文章内容，点赞数以及评论。
- 文章的点赞功能。
- 用户的登录与注册。
- 用户能进行评论并管理自己的评论。
- 聊天

## 运用的技术主要有
- 采用`react`技术栈，所有状态均由`redux`进行管理，通过`react-router`来设置页面路由。
- 使用`express`+`mongolass`进行后台数据的管理与操作。
- 前后端分离，使用`jquery`的ajax携带cookie进行数据交互。
- 使用`react-s-alert`插件弹出提示消息。
- 使用`babel`转译、`webpack`打包代码。
- 使用`Ant Motion`动画框架实现页面切换动画。
- 响应式设计，在pc端、pad端、手机端体验良好。
- 使用`socket.io`完成聊一聊功能，聊天信息可以实时更新
- `react`等库文件引用自[BootCDN](http://www.bootcdn.cn/)，`webpack`打包忽略了库文件，`nodejs`开启gzip压缩，除库文件外首次加载js约60k。
- react-router结合webpack设置按需加载

## 预览
[博客](http://tangkai123456.xyz/)

## 运行项目
```
  git clone https://github.com/tangkai123456/blog.git
  cd blog
  npm install
  node server
```


## 状态树
本项目使用redux管理状态,状态树为:
```
state={
    loginState,//存储登录状态，管理员登录时为2，普通用户登陆时为1，未登录为0
    getData：[//首页时存储所有文章信息，单文章页存储一篇文章的信息，但两种情况数据类型都为数组，但文章页时数组长度为1
            {
                ...postContent,//文章信息
                comments:[]//文章的评论,首页时没有这个属性
            },
        ]
    }
```

## redux
异步ajax使用了thunk中间件，thunk允许action的创建函数返回一个函数，满足条件的情况下才dispatch。

使用三个action进行标记，获取文章相关数据的actionCreator形式为：
    1.发起请求时dispatch("GET_DATA")
    2.请求成功并且获取数据时dispatch("GET_DATA_SUCCESS")
    3.请求失败时dispatch("GET_DATA_ERROR")

项目中所有ajax数据请求都在action中，也只有ajax可以调用dispatch改变状态树，在组件中不直接调用dispatch，数据流清晰

## mongoDB数据结构
用户：
```
User={
    name:{type:"string"},
	password:{type:"string"},
}
```
文章:
```
Post={
    title:{type:"string"},
	content:{type:"string"},
	good:[{type:"string"}],//点赞数
	updateTime:{type:"string"},
	pv:{type:"number"}//浏览数
}
```
评论：
```
Comment={
    postId:{type:Mongolass.Types.ObjectId},
	name:{type:"string"},
	content:{type:"string"},
}
```

## 待完善的功能
- react-router过渡动画(已完成部分动画)
- 加速首屏加载速度(已增加后台gzip压缩；所有库文件采用cdn加载)
- `聊一聊`(已完成)
- `关于`(暂时用个人简历代替)
- bug记录本




