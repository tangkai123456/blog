import React from 'react'
import $ from 'jquery'
import {hashHistory} from 'react-router'
import {connect} from 'react-redux'
import * as actions from '../action/index.js'
var getCookie=require("../js/getCookie.js")
/**
 * 登录与注册的表单，通过判断属性返回不同的结构和进行不同的js
 */
class SignInput extends React.Component{
	constructor(props) {
		super(props);
		this.submit=this.submit.bind(this);
	}
	submit(e){
		/*提交表单，阻止默认事件，判断是注册还是登录拼接不一样的url和data*/
		e.preventDefault();
		var url="",
			data={};
			/*注册事件*/
		if(this.props.params.type=="signup"){
			url="http://localhost:3000/sign/up";
			data={
				name:this.refs.username.value,
				password:this.refs.password.value,
				avatar:"abc.png",
				sex:"m",
				summary:"this is summary"
			}
			/*登录事件*/
		}else if(this.props.params.type=="signin"){
			url="http://localhost:3000/sign/in";
			data={
				name:this.refs.username.value,
				password:this.refs.password.value
			}
		}
		if(url&&data){
			this.props.signActions(url,data)
		}
	}
	render(){
		return (
			<form className="signInput" onSubmit={this.submit}>
				<div className="username">
					<label htmlFor="username">用户名</label>
					<input id="username" type="text" placeholder="请输入用户名" ref="username" required/>
				</div>
				<div className="password">
					<label htmlFor="password">密码</label>
					<input id="password" type="text" placeholder="请输入密码" ref="password" required/>
				</div>
			{/*如果是注册，则显示确认密码*/}
				{this.props.params.type=="signup"?(
					<div className="rePassword">
						<label htmlFor="rePassword">确认密码</label>
						<input id="rePassword" type="text" placeholder="请再次输入密码"/>
					</div>
					):""}
				<button type="submit">提交</button>
			</form>
			)
	}
}

export default connect(
	state=>({loginState:state.loginState}),
	actions
)(SignInput)