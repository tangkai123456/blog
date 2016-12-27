## 项目简介
使用react搭建的个人博客。

## 功能
- 首页列表，加载所有的文章，预览文章的部分内容，同时显示赞、评论、浏览的数量。
- 文章发布。
- 文章页，能查看详细文章内容，点赞数以及评论。
- 用户的登录与注册。
- 文章的点赞功能。
- 用户能进行评论并管理自己的评论

## 运用的技术主要有:
- 采用react技术栈，所有状态均由redux进行管理，通过Router来设置页面路由
- 使用express+mongolass进行后台数据的管理与操作。
- 前后端分离，使用jquery的ajax携带cookie进行数据交互。
- 使用`react-s-alert`插件弹出提示消息
- 使用babel转译、webpack打包代码。

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
    getData：//首页时存储所有文章信息，单文章页存储一篇文章的信息，但两种情况数据类型都为数组，但文章页时数组长度为1
            {
                ...postConent,//文章信息
                comment:[]//文章的评论
            },
        ]
    }
```
异步ajax使用了thunk中间件，thunk允许action的创建函数返回一个函数，满足条件的情况下才dispatch。

使用三个action进行标记，actionCreator形式为：
    1.发起请求时dispatch("GET_DATA")
    2.请求成功并且获取数据时dispatch("GET_DATA_SUCCESS")
    3.请求失败时dispatch("GET_DATA_ERROR")
    
项目中存在许多不返回文章相关数据的ajax请求，例如用户点赞、评论，这类ajax请求不改变state，所有在组件中实现，请求成功会再次获取所有数据。

##mongoDB数据结构
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

## 待完成增加的功能
- react-router过渡动画
- 加速首屏加载速度
- `聊一聊`
- `关于`




