import $ from 'jquery'
import getCookie from '../js/getCookie.js'
import {hashHistory} from 'react-router'

/*修改登录状态*/
export const CHANGE_LOGIN_STATE="CHANGE_LOGIN_STATE"
export function signActions(url,data,noFlash){
	return (dispatch,getState)=>{
		dispatch({type:CHANGE_LOGIN_STATE,userType:0})
		$.ajax({
			url:"http://localhost:3000/"+url,
			type:"post",
			data:data,
			xhrFields: {
		        withCredentials: true
		    },
		    dataType:"json",
		    success:function(res){
				dispatch({type:CHANGE_LOGIN_STATE,userType:res.loginState})
				if(!noFlash){
					hashHistory.push("/");
				}
			},
			error:function(){
				dispatch({type:CHANGE_LOGIN_STATE,userType:0})
			}
		})
	}
}

/*ajax相关，需要有返回值的*/
export const GET_DATA="GET_DATA"
export const GET_DATA_SUCCESS="GET_DATA_SUCCESS"
export const GET_DATA_ERROR="GET_DATA_ERROR"
export function getData(url,data,type="get"){
	return (dispatch,getState)=>{
		dispatch({
			type:GET_DATA,
		})
		$.ajax({
			url:"http://localhost:3000/"+url,
			type:type,
			data:data,
			xhrFields: {
		        withCredentials: true
		    },
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

