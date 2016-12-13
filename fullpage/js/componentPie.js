var componentPie=function (name,cfg) {
	var component=new componentBase(name,cfg);
	var w=cfg.width,
	h=cfg.height;
	var cns=document.createElement("canvas");
	var ctx=cns.getContext("2d");
	var r=w/2;
	var step=cfg.data.length;
	ctx.width=cns.width=w;
	ctx.height=cns.height=h;
	// 加入文字
	function addText (XY,i) {
		var text=$("<div class='text'>");
		text.text(cfg.data[i][0]);
		var per=$("<div class='per'>");
		per.text(cfg.data[i][1]*100+"%");
		text.append(per);
		text.css("color",cfg.data[i][2]?cfg.data[i][2]:"skyblue");
		if(XY.stopX>r){
			text.css("left",XY.stopX/2);
		}else{
			text.css("right",(w-XY.stopX)/2);
		}
		if(XY.stopY>r){
			text.css("top",XY.stopY/2);
		}else{
			text.css("bottom",(h-XY.stopY)/2);
		}


		component.append(text);
	}
	draw(1,addText);
	// 画图
	function draw (per,addText) {
		ctx.clearRect(0,0,w,h);
		var startRad=-.5*Math.PI,
		stopRad=-.5*Math.PI;
		for(var i=0;i<step;i++){
			ctx.beginPath();
			startRad=stopRad;
			stopRad=startRad+2*Math.PI*cfg.data[i][1]*per;
			/*获取边缘两个点的坐标*/
			var XY=getXY(startRad,stopRad);

			ctx.moveTo(XY.startX,XY.startY);
			ctx.lineTo(r,r);
			ctx.lineTo(XY.stopX,XY.stopY);
			ctx.arc(r,r,r,startRad,stopRad);
			ctx.closePath();
			ctx.fillStyle=cfg.data[i][2]?cfg.data[i][2]:"skyblue";
			ctx.fill();
			if(typeof addText=="function"){
				addText(XY,i);
				ctx.clearRect(0,0,w,h);
			}
		}
	}
	// 获取坐标
	function getXY(startRad,stopRad){
		var XY={};
		/*获取边缘两个点的坐标*/
		XY.startX=r+Math.cos(startRad)*r;
		XY.startY=r+Math.sin(startRad)*r;
		XY.stopX=r+Math.cos(stopRad)*r;
		XY.stopY=r+Math.sin(stopRad)*r;
		return XY
	}
	component.on("afterLoad",function () {
		for(var i=0;i<100;i++){
			var s=0;
			setTimeout(function () {
				s+=.01;
				draw(s);
			},i*10)
		}
	});
	component.on("onLeave",function () {
		for(var i=0;i<100;i++){
			var s=1;
			setTimeout(function () {
				s-=.01;
				draw(s);
			},i*10)
		}
	})

	component.append(cns);

	return component;
} 