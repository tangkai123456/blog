//H5对象用于加载组件
var H5=function(){
	this.id=("h5_"+Math.random()).replace(".","_")
	this.el=$("<div class='h5'> id='"+this.id+"'").hide();
	this.page=[];
	$("body").append(this.el);

	this.addPage=function (name,text) {
		var page=$("<div class='h5_page section'>");
		if(name!=undefined){
			page.addClass("h5_page_"+name);
		}
		if(text!=undefined){
			page.text(text);
		}
		this.el.append(page);
		this.page.push(page);
		if(typeof this.whenAddPage=="function"){
			this.whenAddPage();
		}
		return this
	}

	this.addComponent=function (name,cfg) {
		var cfg=cfg||{};
		cfg=$.extend({
			type:"base"
		},cfg);
		var component;
		var page= this.page[this.page.length-1];
		switch (cfg.type) {
			case "base":
				component=new componentBase(name,cfg);
			break;
			case "polyline":
				component=new componentPolyline(name,cfg);
			break;
			case "pie":
				component=new componentPie(name,cfg);
			break;
			case "bar":
				component=new componentBar(name,cfg);
			break;
			case "radar":
				component=new componentRadar(name,cfg);
			break;
			case "point":
				component=new componentPoint(name,cfg);
			break;
			default:
				component=new componentBase(name,cfg);
			break;
		}
		page.append(component);
		return this
	}

	this.loader=function (firstPage) {
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
	}
	this.loader=typeof loading=="function"?loading:this.loader;
	return this;
}