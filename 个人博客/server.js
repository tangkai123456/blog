var express=require("express")
var path=require("path")
var routes=require("./routes/index.js")
var bodyParser=require("body-parser")
var cookieParser=require("cookie-parser")

var app=express()
/*静态路径*/
app.use(express.static(path.join(__dirname,"public")))
/*设置允许跨域*/
app.use(function(req,res,next){
	res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
	res.setHeader("Access-Control-Allow-Credentials", "true");
	next()
})
/*解析cookie*/
app.use(cookieParser())
/*解析req中的body*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

routes(app);

app.listen("3000")