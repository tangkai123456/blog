var express=require("express")
var router=express.Router()
var sha1=require("sha1")
var cookieParser=require("cookie-parser")

var userModel=require("../models/users.js")
/*使用cookie登录*/
router.post("/flashIn",function(req,res,next){
	var name=req.body.name
	userModel.getUserByName(name)
		.then(function(result){
			if(result){
				/*如果用户存在，且密码与输入的密码相同，则成功*/
				if(result.password===req.body.password){
					var loginState=1;
					if(name==="tangkai"){
						loginState=2
					}
					res.cookie("name",name,{maxAge:1000*60*60*24*10});
					res.cookie("password",result.password,{maxAge:1000*60*60*24*10});
					return res.send(JSON.stringify({state:200,info:"登录成功",loginState:loginState}))
				}
			}
			return res.send(JSON.stringify({state:300,info:"用户名或密码错误",loginState:0}))
		})
})
/*登录*/
router.post("/in",function(req,res,next){
	var name=req.body.name
	userModel.getUserByName(name)
		.then(function(result){
			if(result){
				/*如果用户存在，且密码与输入的密码相同，则成功*/
				if(result.password===sha1(req.body.password)){
					res.cookie("name",name,{maxAge:1000*60*60*24*10});
					res.cookie("password",result.password,{maxAge:1000*60*60*24*10});
					var loginState=1;
					if(name==="tangkai"){
						loginState=2
					}
					return res.send(JSON.stringify({state:200,info:"登录成功",loginState:loginState}))
				}
			}
			return res.send(JSON.stringify({state:300,info:"用户名或密码错误",loginState:0}))
		})
})
/*注册用户*/
router.post("/up",function(req,res,next){
	var name=req.body.name,
		password=req.body.password;
	/*注册信息验证*/
	if(name.match(" ")||name.match(" ")){
		return res.end(JSON.stringify({state:300,info:"用户名或密码中存在空格"}))
	}else if(name.length<6||name.length>20||password.length<6||password.length>20){
		return res.end(JSON.stringify({state:300,info:"用户名或密码长度不正确"}))
	}
	/*查询用户名是否重复*/
	userModel.getUserByName(name)
		.then(function(result){
			/*如果已经存在则返回repeat*/
			if(result){
				return res.end(JSON.stringify({state:300,info:"用户名已存在"}))
			}else{
				var user={
					name:req.body.name,
					password:sha1(req.body.password),
				}
				userModel.create(user)
					.then(function(result){
						res.cookie("name",name,{maxAge:1000*60*60*24*10});
						res.cookie("password",result.password,{maxAge:1000*60*60*24*10});
						res.send(JSON.stringify({state:200,info:"登录成功",loginState:1}))
					})
					.catch(function(e){
						res.send(JSON.stringify({state:400,info:"朋友，你的网络出现问题了"}))
					})
			}
		})
		.catch(function(e){
			res.send(JSON.stringify({state:400,info:"朋友，你的网络出现问题了"}))
		})
})
/*退出*/
router.post("/out",function(req,res,next){
	res.clearCookie("name")
	res.clearCookie("password")
	res.send(JSON.stringify({state:200,info:"退出成功",loginState:0}))
})

module.exports=router