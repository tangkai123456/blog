var common={
}
function loading(){
	var arr=[
	"images/hero.png",
	"images/sun.png",
	"images/cloud5.png",
	"images/cloud6.png",
	"images/cloud2.png",
	"images/cloud3.png",
	"images/bg_pedicabs.jpg",
	"images/pedicab_rt_side.png",
	"images/tangkai.jpg",
	"images/bg_routes.jpg",
	"images/pedicab.png",
	"images/web1.png",
	"images/web2.png",
	"images/web3.png",
	"images/web4.png",
	];
	var len=arr.length;
	var rate=document.getElementById("rate");
	if(common.loaded===undefined){
		common.loaded=0;
		arr.forEach(function(item,i){
			var img=new Image;
			img.src=item;
			img.onload=function(){
				loading();
			}
		});
	}else{
		common.loaded++;
		rate.innerHTML=(((common.loaded/len)*100)>>0)+"%"+"<br>加载中，请耐心等待";
		if(common.loaded>=len){
			console.log(1)
			document.getElementsByClassName("loading")[0].style.display="none";
		}
	}
}
loading();
