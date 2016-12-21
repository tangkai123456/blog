module.exports=function(req,res,next){
		if(!req.cookie.user){
			res.end("notLogin")
		}else{
			res.end("login")
		}
	}
}