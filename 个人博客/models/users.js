var User=require("../mongo/mongo.js").User
/*为用户模型添加方法*/
module.exports={
	create:function(user){
		return  User.create(user).exec()
	},
	getUserByName:function(name){
		return User
			.findOne({name:name})
			.addCreatedAt()
			.exec()
	}
}