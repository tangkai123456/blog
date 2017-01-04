var express=require("express")
var path=require("path")
var routes=require("./routes/index.js")
var bodyParser=require("body-parser")
var cookieParser=require("cookie-parser")
var compression=require("compression")
var http=require("http").Server(app)
var io=require("socket.io")(http)
var messageModel=require("./models/messages.js")
var Promise=require("promise")
var getCookie=require("./public/src/js/getCookie.js")

var app=express()
app.use(compression())
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
/*聊天室*/
io.listen("3001").on('connection', function (socket) {
    /*连接成功是发送一次数据*/
    messageModel.getPartMessages()
            .then(function(result){
                var messages=result;
                socket.emit('message',{state:200,info:"获取成功",data:messages});
            })
    socket.on('message', function (msg) {
        if(msg.getAll){
            messageModel.getAllMessages()
                .then(function(results){
                    socket.emit("message",{state:200,info:"获取所有数据成功",data:results})
                })
        }else{
            if(!msg.name){
                socket.on("message",{state:300,info:"请登录"})
            }
            Promise.all([
                messageModel.create(msg),
                messageModel.getPartMessages()
                ])
                .then(function(results){
                    var messages=results[1];
                    io.emit('message',{state:200,info:"获取成功",data:messages,for:"everyone"});
                })
        }
    });
});

app.listen("80")
console.log("open at 80")