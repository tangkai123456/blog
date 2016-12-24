import React from 'react'
import {Link} from 'react-router'
import $ from 'jquery'
import * as actions from '../action/index.js'
import {connect} from 'react-redux'

var getCookie=require("../js/getCookie.js")

class Nav extends React.Component{
	constructor(props) {
		super(props);
		this.signout=this.signout.bind(this)
	}
	signout(){
		this.props.signActions("sign/out",{},true)
		location.reload()
	}
	componentDidMount() {
		this.props.signActions("sign/flashIn",{name:getCookie(document.cookie,"name"),password:getCookie(document.cookie,"password")},true)
	}
	render(){
		/*取出cookie中的name*/
		let name=getCookie(document.cookie,"name");
		return  (
			<div className="main">
				<nav className="nav">
					<ul className="nav-list">
						<Link to="/">
							<li>
								个人博客
							</li>
						</Link>
						<Link to="/talk">
							<li>
								聊一聊
							</li>
						</Link>
						<Link to="/about">
							<li>
								关于
							</li>
						</Link>
					</ul>
					<ul className="nav-list-bottom">
						<Link to="/write">
							<li>
								发表
							</li>
						</Link>
					</ul>
				</nav>
				{this.props.loginState?(
					<div className="sign-button-group">
						welcome{name}
						<a><button className="signout" onClick={this.signout}>退出</button></a>
					</div>
					):(
					<div className="sign-button-group">
						<Link to="/sign/signin"><button className="signin">登录</button></Link>
						<Link to="/sign/signup"><button className="signup">注册</button></Link>
					</div>
					)}
				<section className="main-right">
					<div className="container">
						{this.props.children}
					</div>
				</section>
			</div>
			)
	}
}

export default connect(
	state=>({loginState:state.loginState}),
	actions
)(Nav)