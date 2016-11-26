window.onload=function(){
	var circle=document.getElementsByClassName("nav-circle");
	var width=circle[0].offsetWidth;
	for(var i=0,len=circle.length;i<len;i++){
		circle[i].style.height=width+"px";
		circle[i].style.lineHeight=width+"px";
	}
}

var my=angular.module("my",["ngRoute"]);
my.config(["$routeProvider",function($routeProvider){
	$routeProvider
	.when("/",{templateUrl:"page1.html"})
	.when("/page1",{templateUrl:"page1.html"})
	.when("/page2",{templateUrl:"page2.html"})
	.when("/page3",{templateUrl:"page3.html"})
	.when("/page4",{templateUrl:"page4.html"})
	.when("/page5",{templateUrl:"page5.html"})
	.otherwise({redirectTo:"/"})
}]);

my.controller("Ctrl",function ($scope) {
	$scope.page1=[]
})