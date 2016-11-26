var componentRadar=function (name,cfg) {
	var component=new componentBase(name,cfg);
	var w=cfg.width;
	var h=cfg.height;
	//加入网格线背景画布
	var cns=document.createElement("canvas");
	var ctx=cns.getContext("2d");
	cns.width=ctx.width=w;
	cns.height=ctx.height=h;
	/*画圆*/
	var r=w/2;
	var step=cfg.data.length;

	/*计算圆上的点的坐标，rad=(2*Math.PI)/(360/step)*i, x=a+Math.sin(rad)*r,y=b+Math.cos(rad)*r*/
	/*画伞格*/
	var isBlue=false;
	for(var s=10;s>0;s--){
		ctx.beginPath();
		for(var i=0;i<step;i++){
			var rad=(2*Math.PI)/step*i;
			x=r+Math.sin(rad)*r*(s/10);
			y=r+Math.cos(rad)*r*(s/10);
			ctx.lineTo(x,y);
		}
		ctx.fillStyle=(isBlue=!isBlue)?"skyblue":"white";
		ctx.closePath();
		ctx.fill();
	}
	/*画伞骨*/
	ctx.beginPath();
	for(var i=0;i<step;i++){
		var rad=(2*Math.PI)/step*i;
		ctx.moveTo(r,r);
		x=r+Math.sin(rad)*r;
		y=r+Math.cos(rad)*r;
		ctx.lineTo(x,y);
		//输出项目文字
		var text=$("<div class='text'>");
		text.text(cfg.data[i][0]);
		text.css({"color":cfg.data[i][2],"transition":"opacity .5s "+i*.1+"s"});
		if(x>w/2){
			text.css("left",x/2);
		}else{
			text.css("right",(w-x)/2);
		}
		if(y>h/2){
			text.css("top",y/2)
		}else{
			text.css("bottom",(h-y)/2);
		}
		component.append(text);
	}
	ctx.strokeStyle="gray"
	ctx.stroke();

	component.append(cns);
	/*绘制折线*/
	var cns=document.createElement("canvas");
	var ctx=cns.getContext("2d");
	cns.width=ctx.width=w;
	cns.height=ctx.height=h;
	ctx.strokeStyle="red";
	/*为了动画而创造的函数*/
	function draw (per) {
		if(per>=1){
			component.find(".text").css("opacity",1);
		}else{
			component.find(".text").css("opacity",0);

		}
		ctx.clearRect(0,0,w,h);
		ctx.beginPath();
		for(var i=0;i<step;i++){
			var rad=(2*Math.PI)/step*i;
			var rate=cfg.data[i][1]*per;
			x=r+Math.sin(rad)*r*rate;
			y=r+Math.cos(rad)*r*rate;
			ctx.lineTo(x,y);
			ctx.arc(x,y,2,0,2*Math.PI);
		}
		ctx.closePath();
		ctx.lineWidth=3;
		ctx.fillStyle="rgba(255,136,120,.2)";
		ctx.fill();
		ctx.stroke();
	}
	component.append(cns);

	component.on("afterLoad",function () {
		var s=0;
		for(var i=0;i<100;i++){
			setTimeout(function () {//
				s+=.01;
				draw(s);
			},i*10+500);
		};
	});
	component.on("onLeave",function () {
		var s=1;
		for(var i=0;i<100;i++){
			setTimeout(function () {
				s-=.01;
				draw(s);
				ctx.clearRect(0,0,w,h);
			},i*10);
		}
	})

	return component;
} 