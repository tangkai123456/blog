var Message=require("../mongo/mongo.js").Message

module.exports={
	create:function(message){
		return Message
			.create(comment)
			.exec()
	},
	getAllMessages:function(){
		return Message
			.find()
			.sort({_id:-1})
			.exec()
	}
}