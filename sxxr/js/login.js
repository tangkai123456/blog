var login=angular.module("login",[]);
login.controller("loginCtrl",function($scope,$location){
	$scope.user=localStorage.user||null;
	$scope.pwd=localStorage.pwd||null;
	$scope.login=function(){
		if(document.getElementsByClassName("reminder")[0].checked){
			localStorage.user=$scope.user;
			localStorage.pwd=$scope.pwd;
		}else{
			delete localStorage.user;
			delete localStorage.pwd;
		}
		$.ajax({
			url: 'http://192.168.1.254/PhalApi/Public/CodeShare/',
			type: 'post',
			data: 
				{
					service:'User.Login',
					phone: $scope.user,
					password:$scope.pwd
				},

			success:function(res){
				alert(res.ret);
			}
		})				
	}
	$scope.register=function(){
		window.open("register.html");
	}
})