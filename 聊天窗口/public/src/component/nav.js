import React from 'react'
import $ from 'jquery'

export default class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			isLogin: false
		}
	}
	login() {
		var data = {
			username: this.refs.loginUser.value,
			password: this.refs.loginPwd.value
		}
		$.ajax({
			url: "http://localhost:3000/login",
			data: data,
			dataType: "json",
			type: "get",
			success: function(res) {
				if (res.info == "success") {
					alert("登陆成功");
					localStorage.username = res.username;
					location.reload();
				} else if (res.info == "fail") {
					alert("账号或密码错误")
				}
			}
		})
	}
	register() {
		var data = {
			username: this.refs.regUser.value,
			password: this.refs.regPwd.value
		}
		console.log(data)
		$.ajax({
			url: "http://localhost:3000/register",
			data: data,
			dataType: "json",
			type: "post",
			success: function(res) {
				if (res.info == "repeat") {
					alert("用户名重复")
				} else if (res.info == "success") {
					alert("注册成功，已自动登录");
					localStorage.username = res.username;
					location.reload();
				} else {
					alert("注册失败")
				}
			}
		})
	}
	exit() {
		localStorage.username = "";
		location.reload();
	}
	componentDidMount() {
		if (localStorage.username) {
			this.setState({
				username: localStorage.username,
				isLogin: true
			})
		}

	}
	render() {
		return (
			<nav className="container">
				<div className="row">
					<div className="pull-left" ref="welcome">{this.state.isLogin?"欢迎"+this.state.username:"请登录"}</div>
					<div className="pull-right">
						<button className={"btn btn-info "+(this.state.isLogin?"hidden":"")} data-toggle="modal" data-target="#login">登录</button>
						<button className={"btn btn-primary "+(this.state.isLogin?"hidden":"")} data-toggle="modal" data-target="#reg">注册</button>
						<button className={"btn btn-danger "+(this.state.isLogin?"":"hidden")} onClick={this.exit}>退出</button>
					</div>
				</div>
				<div className="modal fade" id="login" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
				  <div className="modal-dialog">
				    <div className="modal-content">
				      <div className="modal-header">
				        <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
				        <h4 className="modal-title" id="myModalLabel">登录</h4>
				      </div>
				      <div className="modal-body">
						<div role="form" ref="form1">
						  <div className="form-group">
						    <label htmlFor="user1">账号</label>
						    <input type="text" className="form-control" id="user1" placeholder="请输入账号" required ref="loginUser"/>
						  </div>
						  <div className="form-group">
						    <label htmlFor="pwd1">密码</label>
						    <input type="password" className="form-control" id="pwd1" placeholder="请输入密码" required ref="loginPwd"/>
						  </div>
						  <button type="submit" className="btn btn-default" onClick={this.login.bind(this)}>登录</button>
						</div>
				      </div>
				    </div>
				  </div>
				</div>
				<div className="modal fade" id="reg" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
				  <div className="modal-dialog">
				    <div className="modal-content">
				      <div className="modal-header">
				        <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
				        <h4 className="modal-title" id="myModalLabel">注册</h4>
				      </div>
				      <div className="modal-body">
						<div role="form" ref="form2">
						  <div className="form-group">
						    <label htmlFor="user2">账号</label>
						    <input type="text" className="form-control" id="user2" placeholder="请输入账号" required ref="regUser"/>
						  </div>
						  <div className="form-group">
						    <label htmlFor="pwd2">密码</label>
						    <input type="password" className="form-control" id="pwd2" placeholder="请输入密码" required ref="regPwd"/>
						  </div>
						  <button type="submit" className="btn btn-default" onClick={this.register.bind(this)}>注册</button>
						</div>
				      </div>
				    </div>
				  </div>
				</div>
			</nav>
		)
	}
}