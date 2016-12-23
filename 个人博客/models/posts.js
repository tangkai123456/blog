var Post=require("../mongo/mongo.js").Post
var marked=require("marked")
var Promise=require("promise")

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
			.contentToHtml()
			.exec()
	},
	/*获取所有文章*/
	getAllPosts:function(){
		return Post
			.find()
			.sort({_id:-1})
			.addCreatedAt()
			.contentToHtml()
			.exec()
	},
	/*更新文章*/
	updatePostById:function(post){
		return Post
			.update({_id:postId})
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

				}
			})
	}
}