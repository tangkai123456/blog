var express=require("express")
var router=express.Router()
var postModel=require("../models/posts.js")
var getCookie=require("../public/src/js/getCookie.js")
var moment=require("moment")
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
		updateTime:moment().format("YYYY-MM-DD HH:mm")
	}
	postModel.create(post)
		.then(function(result){
			res.send(JSON.stringify({state:200,info:"write success"}))
		})
})
/*获取一篇文章*/
router.get("/getOnePost/:postId",function(req,res,next){
	var postId=req.params.postId;
	postModel.getPostById(postId)
		.then(function(post){
			console.log(post)
			res.send(JSON.stringify({state:200,info:"get post success",data:[post]}))
		})
		.catch(next)
})
/*删除一篇文章*/
router.get("/deletePost",function(req,res){
	res.end("delete one")
})
/*修改文章*/
router.post("/updatePost",function(req,res){
	res.end("update one");
})

module.exports=router