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
		.catch(next)
})
/*写文章*/
router.post("/writePost",function(req,res){
	if(getCookie(req.headers.cookie,"name")!=="tangkai"){
		return res.send(JSON.stringify({state:300,info:"别闹"}))
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
			res.send(JSON.stringify({state:200,info:"write success"}))
		})
})
/*获取一篇文章*/
router.get("/getOnePost/:postId",function(req,res,next){
	var postId=req.params.postId;
	if(req.query.flash){
		postModel.incPv(postId)
	}
	Promise.all([
		postModel.getPostById(postId),
		commentModel.getComments(postId),
		])
		.then(function(result){
			var post=result[0];
			post.comments=result[1]
			res.send(JSON.stringify({state:200,info:"get post success",data:[post]}))
		})
		.catch(next)
})
/*获取一篇文章的初始内容，没有marked的*/
router.get("/getRawPost/:postId",function(req,res,next){
	var postId=req.params.postId;
	postModel.getRawPostById(postId)
		.then(function(result){
			res.send(JSON.stringify({state:200,info:"get post success",data:[result]}))
		})
		.catch(next)
})
/*删除一篇文章*/
router.get("/deletePost/:postId",function(req,res,next){
	if(getCookie(req.headers.cookie,"name")!=="tangkai"){
		return res.send(JSON.stringify({state:300,info:"别闹"}))
	}
	var postId=req.params.postId;
	postModel.delPostById(postId)
		.then(function(){
			postModel.getAllPosts()
				.then(function(posts){
					res.send(JSON.stringify({state:200,info:"get all posts success",data:posts}))
				})
		})
		.catch(next)
})
/*修改文章*/
router.post("/updatePost/:postId",function(req,res,next){
	if(getCookie(req.headers.cookie,"name")!=="tangkai"){
		return res.send(JSON.stringify({state:300,info:"别闹"}))
	}
	var postId=req.params.postId,
		title=req.body.title,
		content=req.body.content;
	var post={
		title:title,
		content:content
	}
	postModel.updatePostById(postId,post)
		.then(function(){
			res.end(JSON.stringify({state:200,info:"update success"}))
		})
		.catch(next)
})
/*点赞*/
router.get("/clickGood/:postId",function(req,res,next){
	var name=getCookie(req.headers.cookie,"name"),
		postId=req.params.postId;
	if(!name){
		return res.end(JSON.stringify({state:300,info:"别闹"}))
	}
	postModel.getRawPostById(postId)
		.then(function(result){
			var isFound=false
			for(var i=0,len=result.good.length;i<len;i++){
				console.log(result.good[i],name)
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
					res.end(JSON.stringify({state:200,info:"update success"}))
				})
		})
})

module.exports=router