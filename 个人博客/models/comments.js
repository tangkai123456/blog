var Comment=require("../mongo/mongo.js").Comment

module.exports={
	create:function(comment){
		return Comment
			.create(comment)
			.exec()
	},
	/*通过用户名和评论id删除评论*/
	delCommentByIdAndName:function (commentId,name){
		return Comment
			.remove({name:name,_id:commentId})
			.exec()
	},
	/*通过评论id删除评论*/
	delCommentById:function(commentId){
		return Comment
			.remove({_id:commentId})
			.exec()
	},
	/*通过文章id删除所有评论*/
	delCommentsByPostId:function(postId){
		return Comment
			.remove({postId:postId})
			.exec()
	},
	/*通过文章id获取所有评论*/
	getComments:function(postId){
		return Comment
			.find({postId:postId})
			.sort({_id:-1})
			.addCreatedAt()
			.exec()
	},
	/*获取评论数*/
	getCommentsCount:function(postId){
		return Comment
			.count({postId:postId})
			.exec()
	}
}