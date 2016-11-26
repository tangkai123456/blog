var componentPolyline=function (name,cfg) {
	var component=new componentBase(name,cfg);
	/*绘制网格线*/
	var w=cfg.width;
	var h=cfg.height;
	//加入网格线背景画布
	var cns=document.createElement("canvas");
	var ctx=cns.getContext("2d");
	cns.width=ctx.width=w;
	cns.height=ctx.height=h;
	//水平网格线，分10份
	var step=10;
	ctx.beginPath();
	ctx.lineWidth=1;
	ctx.strokeStyle="gray";
	for(var i=0;i<step+1;i++){
		var y=(h/step)*i;
		/*水平线*/
		ctx.moveTo(0,y);
		ctx.lineTo(w,y);
	}
	step=cfg.data.length+1;//5个数据，需要有5个交点，所以个数加1
	var text_w=w/step >>0;
	for(var i=0;i<step+1;i++){
		var x=(w/step)*i;
		/*竖直线*/
		ctx.moveTo(x,0);
		ctx.lineTo(x,h);
		/*添加文字DIV*/
		var text=$("<div class='text'>");
		if(cfg.data[i]){
			text.text(cfg.data[i][0]);
			text.css({"width":text_w/2,"left":x/2+text_w/4});
			component.append(text);
		}
	}
	ctx.stroke()
	component.append(cns);
	/*绘制折线*/
	var cns=document.createElement("canvas");
	var ctx=cns.getContext("2d");
	cns.width=ctx.width=w;
	cns.height=ctx.height=h;
	/*为了动画而创造的函数*/
	function draw (per) {
		/*清空画布*/
		ctx.clearRect(0,0,w,h);

		ctx.beginPath();
		ctx.lineWidth=3;
		ctx.strokeStyle="red";
		var lastX;
		cfg.data.forEach( function(element, index) {
			ctx.moveTo(x*per,y);

			var x=(w/(cfg.data.length+1))*(index+1);
			var y=h*(1-element[1]*per);
			/*画线*/
			ctx.lineTo(x,y);
			/*画圆*/
			ctx.arc(x,y,2,0,2*Math.PI);
			/*填充文字*/
			ctx.fillStyle=element[2]?element[2]:"red";
			ctx.font="16px MicroSoft YaHei";
			ctx.fillText((~~(element[1]*100)+"%"),x-10,y-10);
			lastX=x;
		});
		ctx.stroke();
		ctx.fillStyle="rgba(255,136,120,.2)";
		ctx.lineTo(lastX,h);
		ctx.lineTo(w/(cfg.data.length+1),h);
		ctx.fill();
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
			},i*10);
		}
	})
	return component;
} 