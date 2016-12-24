var Mongolass=require("mongolass")
var moment=require("moment")
var objectIdToTimestamp=require("objectid-to-timestamp")
/*连接数据库*/
var mongolass=new Mongolass()
mongolass.connect("mongodb://localhost:27017/tang")
/*数据库插件,添加时间戳*/
mongolass.plugin("addCreatedAt",{
	afterFind:function(results){
		results.forEach(function(item){
			item.created_at=moment(objectIdToTimestamp(item._id)).format("YYYY-MM-DD HH:mm");
		})
		return results
	},
	afterFindOne:function(result){
		if(result){
			result.created_at=moment(objectIdToTimestamp(result._id)).format("YYYY-MM-DD HH:mm");
		}
		return result
	}
})
/*用户模型*/
exports.User=mongolass.model("User",{
	name:{type:"string"},
	password:{type:"string"},
	avatar:{type:"string"},//头像
	sex:{type:"string",enum:["m","f","x"]},
	summary:{type:"string"}//简介
})
exports.User.index({name:1},{unique:true}).exec()
/*文章模型*/
exports.Post=mongolass.model("Post",{
	title:{type:"string"},
	content:{type:"string"},
	good:[{type:"string"}],
	updateTime:{type:"string"},
	pv:{type:"number"}
})
/*评论模型*/
exports.Comment=mongolass.model("Comment",{
	postId:{type:Mongolass.Types.ObjectId},
	name:{type:"string"},
	content:{type:"string"},
	good:[{type:"string"}]
})
