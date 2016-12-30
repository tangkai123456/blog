var express=require("express")
var router=express.Router()
var postModel=require("../models/posts.js")
var commentModel=require("../models/comments.js")
var getCookie=require("../public/src/js/getCookie.js")
var moment=require("moment")
var Promise=require("promise")
/*获取所有文章*/
router.get("/getAllPosts",function(req,res,next){
	postModel.getAllPosts()
		.then(function(posts){
			res.send(JSON.stringify({state:200,info:"get all posts success",data:posts}))
		})
		.catch(function(e){
			res.send(JSON.stringify({state:400,info:"朋友，你的网络出现问题了"}))
		})
})
/*写文章*/
router.post("/writePost",function(req,res){
	if(getCookie(req.headers.cookie,"name")!=="tangkai"){
		return res.send(JSON.stringify({state:300,info:"你没有权限"}))
	}
	var title=req.body.title;
	var content=req.body.content;
	var post={
		title:title,
		content:content,
		good:[],
		updateTime:moment().format("YYYY-MM-DD HH:mm"),
		pv:0
	}
	postModel.create(post)
		.then(function(result){
			res.send(JSON.stringify({state:200,info:"发表成功"}))
		})
		.catch(function(){
			res.send(JSON.stringify({state:400,info:"朋友，你的网络出现问题了"}))
		})
})
/*获取一篇文章*/
router.get("/getOnePost/:postId",function(req,res,next){
	var postId=req.params.postId;
	Promise.all([
		postModel.getPostById(postId),
		commentModel.getComments(postId),
		req.query.flash?postModel.incPv(postId):null
		])
		.then(function(result){
			var post=result[0];
			post.comments=result[1];
			res.send(JSON.stringify({state:200,info:"get post success",data:[post]}))
		})
		.catch(function(){
			res.send(JSON.stringify({state:400,info:"朋友，你的网络出现问题了"}))
		})
})
/*获取一篇文章的初始内容，没有marked的*/
router.get("/getRawPost/:postId",function(req,res,next){
	var postId=req.params.postId;
	postModel.getRawPostById(postId)
		.then(function(result){
			res.send(JSON.stringify({state:200,info:"get post success",data:[result]}))
		})
		.catch(function(){
			res.send(JSON.stringify({state:400,info:"朋友，你的网络出现问题了"}))
		})
})
/*删除一篇文章*/
router.post("/deletePost/:postId",function(req,res,next){
	if(getCookie(req.headers.cookie,"name")!=="tangkai"){
		return res.send(JSON.stringify({state:300,info:"你没有权限"}))
	}
	var postId=req.params.postId;
	postModel.delPostById(postId)
		.then(function(){
			postModel.getAllPosts()
				.then(function(posts){
					res.send(JSON.stringify({state:200,info:"删除成功",data:posts}))
				})
		})
		.catch(function(){
			res.send(JSON.stringify({state:400,info:"朋友，你的网络出现问题了"}))
		})
})
/*修改文章*/
router.post("/updatePost/:postId",function(req,res,next){
	if(getCookie(req.headers.cookie,"name")!=="tangkai"){
		return res.send(JSON.stringify({state:300,info:"你没有权限"}))
	}
	var postId=req.params.postId,
		title=req.body.title,
		content=req.body.content;
	var post={
		title:title,
		content:content,
		updateTime:moment().format("YYYY-MM-DD HH:mm")
	}
	postModel.updatePostById(postId,post)
		.then(function(){
			res.end(JSON.stringify({state:200,info:"修改成功"}))
		})
		.catch(function(){
			res.send(JSON.stringify({state:400,info:"朋友，你的网络出现问题了"}))
		})
})
/*点赞,isMain参数表示是不是主页传来的请求，因为要根据不同的页面返回不同的数据*/
router.post("/clickGood/:postId/:isMain",function(req,res,next){
	var name=getCookie(req.headers.cookie,"name"),
		postId=req.params.postId;
	if(!name){
		return res.end(JSON.stringify({state:300,info:"请登录"}))
	}
	postModel.getRawPostById(postId)
		.then(function(result){
			var isFound=false;
			for(var i=0,len=result.good.length;i<len;i++){
				if(result.good[i]==name){
					result.good.splice(i,1)
					isFound=true
				}
			}
			if(!isFound){
				result.good.push(name)
			}
			postModel.updatePostById(postId,result)
				.then(function(){
					console.log(req.params.isMain)
					if(req.params.isMain==="1"){
						postModel.getAllPosts()
							.then(function(posts){
								res.send(JSON.stringify({state:200,info:isFound?"已取消赞":"点赞成功",data:posts}))
							})
					}else{
						Promise.all([
							postModel.getPostById(postId),
							commentModel.getComments(postId),
							])
							.then(function(result){
								var post=result[0];
								post.comments=result[1];
								res.send(JSON.stringify({state:200,info:isFound?"已取消赞":"点赞成功",data:[post]}))
							})
					}
				})
		})
})

module.exports=router