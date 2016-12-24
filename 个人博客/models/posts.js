var Post=require("../mongo/mongo.js").Post
var marked=require("marked")
var Promise=require("promise")
var commentModel=require("./comments.js")

/*内容加载时marked转化*/
Post.plugin("contentToHtml",{
	afterFind:function(posts){
		return posts.map(function(post){
			post.content=marked(post.content);
			return post
		})
	},
	afterFindOne:function(post){
		if(post){
			post.content=marked(post.content);
		}
		return post
	}
})
/*添加留言数*/
Post.plugin("addCommentsCount",{
	afterFind:function(posts){
		return Promise.all(posts.map(function(post){
			return commentModel.getCommentsCount(post._id)
				.then(function(commentsCount){
					post.commentsCount=commentsCount;
					return post
				})
		}))
	},
	afterFindOne:function(post){
		if(post){
			return commentModel.getCommentsCount(post._id)
				.then(function(count){
					post.commentsCount=count;
					return post
				})
		}
		return post
	}
})

module.exports={
	/*创建文章*/
	create:function(post){
		return Post
			.create(post)
			.exec();
	},
	/*通过文章id获取文章*/
	getPostById:function(postId){
		return Post
			.findOne({_id:postId})
			.addCreatedAt()
			.addCommentsCount()
			.contentToHtml()
			.exec()
	},
	/*获取所有文章*/
	getAllPosts:function(){
		return Post
			.find()
			.sort({_id:-1})
			.addCreatedAt()
			.addCommentsCount()
			.contentToHtml()
			.exec()
	},
	/*更新文章*/
	updatePostById:function(postId,data){
		return Post
			.update({_id:postId},{$set:data})
			.exec()
	},
	/*删除文章*/
	delPostById:function(postId){
		return Post
			.remove({_id:postId})
			.exec()
			/*删除文章同时删除评论*/
			.then(function(res){
				if(res.result.ok&&res.result.n>0){
					return commentModel.delCommentsByPostId(postId)
				}
			})
	},
	/*通过文章id给pv加1*/
	incPv:function incPv(postId){
		return Post
			.update({_id:postId},{$inc:{pv:1}})
			.exec()
	},
	getRawPostById:function(postId){
		return Post
			.findOne({_id:postId})
			.exec()
	}
}