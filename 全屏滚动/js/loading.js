var loading=function (images,firstPage) {
	var id=this.id;
	if(this._images===undefined){
		//第一次进入
		this._images=(images||[]).length;
		this._loaded=0;
		window[id]=this;//把当前对象存储到全局对象中.用来进行某个图片加载完成之后的回调

		for(var i=0,len=images.length;i<len;i++){
			var item=images[i];
			var img=new Image;
			img.onload=function(){
				window[id].loader();
			};
			img.src=item;
		}
		$("#rate").text("0%");
		return this;
	}else{
		this._loaded++;
		var text=(((this._loaded/this._images)*100)>>0)+"%";
		console.log(text);
		$("#rate").text(text);
		if(this._loaded<this._images){
			return this;
		}
	}
	this.el.fullpage({
		afterLoad:function(anchorLink,index) {
			$(this).find(".h5_component").trigger("afterLoad");

		},
		onLeave:function(index) {
			$(this).find(".h5_component").trigger("onLeave");
		}
	});
		this.page[0].find(".h5_component").trigger("afterLoad");//页面加载时进行事件
		this.el.show();
		//立刻切换到某一页
		if(firstPage){
			$.fn.fullpage.moveTo(firstPage);
		}
		return this
	}