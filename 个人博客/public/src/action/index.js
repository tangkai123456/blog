import $ from 'jquery'
import getCookie from '../js/getCookie.js'
import {hashHistory} from 'react-router'

/*修改登录状态*/
export const CHANGE_LOGIN_STATE="CHANGE_LOGIN_STATE"
export function signActions(url,data){
	return (dispatch,getState)=>{
		dispatch({type:CHANGE_LOGIN_STATE,userType:0})
		$.ajax({
			url:url,
			type:"post",
			data:data,
			xhrFields: {
		        withCredentials: true
		    },
		    dataType:"json",
		    success:function(res){
				var cookieName=getCookie(document.cookie,"name");
				if(cookieName){
					if(cookieName==="tangkai"){
						dispatch({type:CHANGE_LOGIN_STATE,userType:2})
					}else{
						dispatch({type:CHANGE_LOGIN_STATE,userType:1})
					}
					hashHistory.push("/");
				}else{
					dispatch({type:CHANGE_LOGIN_STATE,userType:0})
				}
			},
			error:function(){
				dispatch({type:CHANGE_LOGIN_STATE,userType:0})
			}
		})
	}
}
/*页面刷新判断登录*/
export const IS_LOGIN="IS_LOGIN"
export function judgeIsLogin(){
	/*页面刷新时判断是否登录，以及是不是本王在登录，可能有安全问题，以后在解决。。*/
	return (dispatch)=>{
		var cookieName=getCookie(document.cookie,"name");
		if(cookieName){
			if(cookieName==="tangkai"){
				dispatch({type:CHANGE_LOGIN_STATE,userType:2})
			}else{
				dispatch({type:CHANGE_LOGIN_STATE,userType:1})
			}
		}else{
			dispatch({type:CHANGE_LOGIN_STATE,userType:0})
		}
	}
}
/*ajax获取数据相关*/
export const GET_DATA="GET_DATA"
export const GET_DATA_SUCCESS="GET_DATA_SUCCESS"
export const GET_DATA_ERROR="GET_DATA_ERROR"
export function getData(url){
	return (dispatch,getState)=>{
		dispatch({
			type:GET_DATA,
		})
		$.ajax({
			url:"http://localhost:3000/"+url,
			type:"get",
			dataType:"json",
			success:function(res){
				dispatch({type:GET_DATA_SUCCESS,data:res.data})
			}.bind(this),
			error:function(res){
				dispatch({type:GET_DATA_ERROR,error:res})
			}
		})
	}
}