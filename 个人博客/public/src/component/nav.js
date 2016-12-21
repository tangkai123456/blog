import React from 'react'
import {Link} from 'react-router'
import $ from 'jquery'

export default class Nav extends React.Component{
	signout(){
		document.cookie="name=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
		location.reload();
	}
	render(){
		/*取出cookie中的name*/
		let name=""
		try{
			name=document.cookie.split("name=")[1].split(";")[0];
		}catch(e){
		}
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
				{name?(
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