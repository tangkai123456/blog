var express=require("express")
var router=express.Router();
var messageModel=require("../models/messages.js")
var getCookie=require("../public/src/js/getCookie.js")

router.post("/getAllMessages",function(req,res,next){
	messageModel.getAllMessages()
		.then(function(results){
			res.end(JSON.stringify({state:200,info:"get message success",data:results}))
		})
		.catch()
})


module.exports=router