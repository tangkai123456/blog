module.exports=function(app){
	app.use("/sign",require("./sign.js"))
	app.use("/posts",require("./posts.js"))
	app.use("/comments",require("./comments.js"))
}