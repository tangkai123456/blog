var express=require("express")
var router=express.Router()
var postModel=require("../models/posts.js")
var commentModel=require("../models/comments.js")
var getCookie=require("../public/src/js/getCookie.js")
var moment=require("moment")
var Promise=require("promise")
/*删除评论*/
router.post("/delComment/:postId/:commentId",function(req,res,next){
	var commentId=req.params.commentId,
		postId=req.params.postId,
		name=getCookie(req.headers.cookie,"name"),
		loginState=req.body.loginState;
	if(!name&&!loginState){
		return res.end(JSON.stringify({state:300,info:"请登录"}))
	}
	if(loginState==="2"){
		commentModel.delCommentById(commentId)
			.then(function(){
				res.end(JSON.stringify({state:200,info:"删除成功"}))
			})
			.catch(function(e){
				res.send(JSON.stringify({state:400,info:"朋友，你的网络出现问题了"}))
			})
		}else if(loginState==="1"){
			commentModel.delCommentByIdAndName(commentId,name)
				.then(function(){
					res.end(JSON.stringify({state:200,info:"删除成功"}))
				})
				.catch(function(e){
					res.send(JSON.stringify({state:400,info:"朋友，你的网络出现问题了"}))
				})
		}
})
/*写评论*/
router.post("/writeComment/:postId",function(req,res,next){
	var postId=req.params.postId,
		content=req.body.content,
		name=getCookie(req.headers.cookie,"name"),
		loginState=req.body.loginState;
	if(!name||!loginState){
		return res.end(JSON.stringify({state:300,info:"请登录"}))
	}
	var comment={
		name:name,
		content:content,
		postId:postId,
	}
	commentModel.create(comment)
		.then(function(){
			res.end(JSON.stringify({state:200,info:"评论成功"}))
		})
		.catch(function(e){
			res.send(JSON.stringify({state:400,info:"朋友，你的网络出现问题了"}))
		})
})

module.exports=router