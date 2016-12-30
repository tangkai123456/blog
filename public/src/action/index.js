import $ from 'jquery'
import getCookie from '../js/getCookie.js'
import {hashHistory} from 'react-router'
import Alert from 'react-s-alert'

/*修改登录状态*/
export const CHANGE_LOGIN_STATE="CHANGE_LOGIN_STATE"
/**
 * 登录相关的ajax操作
 * @param  {string} url       后台接口url
 * @param  {object} data      传送到后台的数据
 * @param  {bool} noFlash   表示操作后是否跳转页面
 * @param  {bool} showAlert 表示是否弹出提示框
 * @return {[type]}           [description]
 */
export function signActions(url,data,noFlash,showAlert){
	return (dispatch,getState)=>{
		dispatch({type:CHANGE_LOGIN_STATE,userType:0})
		$.ajax({
			url:"http://localhost/"+url,
			type:"post",
			data:data,
			dataType:"json",
			xhrFields: {
		        withCredentials: true
		    },
		    success:function(res){
		    	if(res.loginState){
					dispatch({type:CHANGE_LOGIN_STATE,userType:res.loginState})
					if(!noFlash){
						hashHistory.push("/");
					}
		    	}
		    	if(showAlert){
		    		if(res.state===200){
		    			Alert.success(res.info,{
			    			effect:"slide",
			    			timeout:2000
			    		})
		    		}else if(res.state===300){
		    			Alert.warning(res.info,{
			    			effect:"slide",
			    			timeout:2000
			    		})
		    		}else if(res.state===400){
		    			Alert.error(res.info,{
			    			effect:"slide",
			    			timeout:2000
			    		})
		    		}
		    	}
			},
			error:function(){
				dispatch({type:CHANGE_LOGIN_STATE,userType:0});
		    	Alert.error("朋友，你的网络出现问题了",{
			    	effect:"slide",
			    	timeout:2000
			    })
			},
			failed:function(){
				dispatch({type:CHANGE_LOGIN_STATE,userType:0});
		    	Alert.error("朋友，你的网络出现问题了",{
			    	effect:"slide",
			    	timeout:2000
			    })
			}
		})
	}
}

/*ajax相关，需要有返回值的*/
export const GET_DATA="GET_DATA"
export const GET_DATA_SUCCESS="GET_DATA_SUCCESS"
export const GET_DATA_ERROR="GET_DATA_ERROR"
/**
 * 所有获取数据的ajax请求
 * @param  {string} url   请求数据的后台接口
 * @param  {object} data  传送到后台的数据
 * @param  {string} type  ajax种类
 * @param  {bool} alert 是否弹出提示信息
 * @return {[type]}       [description]
 */
export function getData(url,data,type="get",alert){
	return (dispatch,getState)=>{
		dispatch({
			type:GET_DATA,
		})
		$.ajax({
			url:"http://localhost/"+url,
			type:type,
			data:data,
			xhrFields: {
		        withCredentials: true
		    },
			dataType:"json",
			success:function(res){
				if(res.data){
					dispatch({type:GET_DATA_SUCCESS,data:res.data})
				}
				if(alert){
					switch (res.state){
						case 200:
							Alert.success(res.info,{
								effect:"slide",
								timeout:2000
							});
							break;
						case 300:
							Alert.warning(res.info,{
								effect:"slide",
								timeout:2000
							});
							break;
						case 400:
							Alert.error(res.info,{
								effect:"slide",
								timeout:2000
							})
					}
				}
			}.bind(this),
			error:function(res){
				dispatch({type:GET_DATA_ERROR,error:res})
				Alert.error("朋友，你的网络出现问题了",{
						effect:"slide",
						timeout:2000
					})
			},
			failed:function(){
		    	Alert.error("朋友，你的网络出现问题了",{
			    	effect:"slide",
			    	timeout:2000
			    })
			}
		})
	}
}

