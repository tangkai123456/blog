var componentPoint=function (name,cfg) {
	var component=new componentBase(name,cfg);

	var base=cfg.data[0][1];//以第一个数据比例为100%
	$.each(cfg.data,function (i,item) {
		var point=$("<div class='point point_"+i+"'>");
		//point.text(item[0]);
		var name=$("<div class='name'>"+item[0]+"</div>")
		var rate=$("<div class='per'>"+(item[1]*100)+"%</div>")

		var per=(item[1]/base*100)+"%";
		point.width(per).height(per);
		if(item[2]){
			point.css("background",item[2])
		}
		if(item[3]!==undefined&&item[4]){
			point.css("left",item[3]).css("top",item[4]);
		}
		point.append(name);
		name.append(rate);
		component.append(point);
	})

	return component;
} 