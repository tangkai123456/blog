var componentBar=function (name,cfg) {
	var component=new componentBase(name,cfg);
	$.each(cfg.data,function (i,item) {
		var line=$("<div class='line'></div>");
		var name=$("<div class='name'></div>");
		var rate=$("<div class='rate'><div class='bg'></div></div>");
		var per=$("<div class='per'></div>");
		var width=item[1]*100+"%";

		name.text(item[0]);
		name.width(80);
		line.append(name);

		rate.css("width",width);
		rate.find(".bg").css("background",item[2]?item[2]:"lightgray");
		line.append(rate)

		per.text(width);
		line.append(per);

		component.append(line);
	})

	return component;
}