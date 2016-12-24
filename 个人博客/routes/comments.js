var express=require("express")
var router=express.Router()
var postModel=require("../models/posts.js")
var commentModel=require("../models/comments.js")
var getCookie=require("../public/src/js/getCookie.js")
var moment=require("moment")
var Promise=require("promise")
/*通过文章id获取所有评论*/
// router.get("/getAllComments/:postId",function(req,res,next){
// 	var postId=req.params.postId;
// 	commentModel.getComments(postId)
// 		.then(function(comments){
// 			res.end(JSON.stringify({state:200,info:"get comments success",data:comments}))
// 		})
// 		.catch(next)
// })
router.get("/delComment/:postId/:commentId",function(req,res,next){
	var commentId=req.params.commentId;
	var postId=req.params.postId;
	var name=getCookie(req.headers.cookie,"name");
	if(!name){
		return res.end(JSON.stringify({state:300,info:"别闹"}))
	}
	commentModel.delCommentById(commentId,name)
		.then(function(){
			res.end(JSON.stringify({state:200,info:"del comment success"}))
		})
		.catch(next)
})
router.post("/writeComment/:postId",function(req,res,next){
	var postId=req.params.postId,
		content=req.body.content,
		name=getCookie(req.headers.cookie,"name");
	if(!name){
		return res.end(JSON.stringify({state:300,info:"别闹"}))
	}
	var comment={
		name:name,
		content:content,
		postId:postId,
		good:[]
	}
	commentModel.create(comment)
		.then(function(){
			res.end(JSON.stringify({state:200,info:"comment success"}))
		})
		.catch(next)
})

module.exports=router