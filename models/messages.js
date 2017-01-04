var Message=require("../mongo/mongo.js").Message

Message.plugin("sliceTo50",{
	afterFind:function(messages){
		var len=messages.length;
		return messages.slice(len-30,len)
	}
})

module.exports={
	create:function(message){
		return Message
			.create(message)
			.exec()
	},
	getPartMessages:function(){
		return Message
			.find()
			.addCreatedAt()
			.sliceTo50()
			.exec()
	},
	getAllMessages:function(){
		return Message
			.find()
			.addCreatedAt()
			.exec()
	}
}