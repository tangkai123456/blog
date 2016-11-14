var reg=angular.module("reg",[]);
reg.controller("regCtrl",function($scope,$location){
	$scope.user;
	$scope.pwd;
	$scope.phone;
	$scope.pwd1;
	$scope.yanzheng=function(){
		if($scope.pwd==$scope.pwd1){
			return false
		}else{return true}
	}
	$scope.register=function(){
		$.ajax({
			url: 'http://192.168.1.254/PhalApi/Public/CodeShare/',
			type: 'post',
			data: {service: 'User.Register',
			phone:$scope.phone,
			password:$scope.pwd,
			verificationCode:"1111"
		},
		success:function(res){
			
			if(res.ret==200){
				alert('成功');
				location.href="login.html";
			}else{
				alert('失败');
			}
		}
	})
		
	}
})