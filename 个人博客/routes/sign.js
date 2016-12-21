var express=require("express")
var router=express.Router()
var sha1=require("sha1")
var cookieParser=require("cookie-parser")

var userModel=require("../models/users.js")
/*登录*/
router.post("/in",function(req,res,next){
	var name=req.body.name
	userModel.getUserByName(name)
		.then(function(result){
			if(result){
				/*如果用户存在，且密码与输入的密码相同，则成功*/
				if(result.password===sha1(req.body.password)){
					return res.send(JSON.stringify({state:200,info:"signin success",user:result.name}))
				}
			}
			return res.send(JSON.stringify({state:300,info:"messages error"}))
		})
})
/*注册用户*/
router.post("/up",function(req,res,next){
	var name=req.body.name;
	/*查询用户名是否重复*/
	userModel.getUserByName(name)
		.then(function(result){
			console.log(result)
			/*如果已经存在则返回repeat*/
			if(result){
				return res.send(JSON.stringify({state:300,info:"repeat"}))
			}else{
				var user={
					name:req.body.name,
					password:sha1(req.body.password),
					avatar:req.body.avatar,
					sex:req.body.sex,
					summary:req.body.summary
				}
				userModel.create(user)
					.then(function(result){
						console.log(result)
						res.send(JSON.stringify({state:200,info:"signin success",user:result.ops[0].name}))
					})
					.catch(function(e){
						res.send(JSON.stringify({state:400,info:e}))
					})
			}
		})
		.catch(function(e){
			res.send(JSON.stringify({state:400,info:e}))
		})
})
/*退出*/
router.get("/out",function(req,res,next){
	res.send(JSON.stringify({state:200,info:"signout success"}))
})

module.exports=router