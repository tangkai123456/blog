var componentBase=function (name,cfg) {
	var cfg=cfg||{};
	var id=Math.random();
	var cls="h5_component_"+cfg.type;
	var component=$("<div class='h5_component h5_component_name_"+name+" "+cls+"' id='"+id+"'>");

	cfg.text&&component.text(cfg.text);
	cfg.width&&component.width(cfg.width/2);
	cfg.height&&component.height(cfg.height/2);
	cfg.css&&component.css(cfg.css);
	cfg.bg&&component.css("background","url('"+cfg.bg+"')");

	if(cfg.center===true){
		component.css({
			marginLeft:(cfg.width/4*-1)+"px",
			left:"50%"
		})
	}

	if(typeof cfg.onclick==="function"){
		component.on("click",cfg.onclick);
	}

	component.on("afterLoad",function () {
		setTimeout(function(){
			component.addClass(cls+"_load").removeClass(cls+"_leave");
			cfg.animateIn&&component.animate(cfg.animateIn);
			return false;
		},cfg.delay||0)
	});
	component.on("onLeave",function () {
		component.addClass(cls+"_leave").removeClass(cls+"_load");
		cfg.animateOut&&component.animate(cfg.animateOut);
	});

	return component;
}