import React from 'react'
import {
	Link
} from 'react-router'

export default class Nav extends React.Component {
	render() {
		return (
			<div>
				<nav className="container-fluid nav-header">
					<div className="container">
						<div className="row">
							<div className="pull-left nav-left">
								<Link to="/main" className="hidden-xs"><img src="../../images/logo.png" alt=""/></Link>
								<Link to="/main" className="visible-xs xs-logo"><img src="../../images/logo-new.png" alt=""/></Link>
								<ul className="hidden-xs">
									<li>
										<Link to="/main">热门</Link>
									</li>
									<li>
										<Link to="/main">24小时</Link>
									</li>
									<li>
										<Link to="/main">热图</Link>
									</li>
									<li>
										<Link to="/main">文字</Link>
									</li>
									<li>
										<Link to="/main">穿越</Link>
									</li>
									<li>
										<Link to="/main">糗图</Link>
									</li>
									<li>
										<Link to="/main">新鲜</Link>
									</li>
									<li>
										<Link to="/main">投稿</Link>
									</li>
								</ul>
							</div>
							<div className="pull-right nav-right hidden-xs">
								<a href="#"><img src="../../images/missing.png" alt="" className="img-responsive"/></a>
								<Link to="/ctrl">赐我一个名字吧</Link>
							</div>
							<div className="visible-xs xs-ctrl pull-right">
								<span href="#"></span>
								<span href="#">
									<div className="user-ctrl">
										<div><Link to="/ctrl">个人中心</Link></div>
										<div>退出</div>
									</div>
								</span>
							</div>
							<div className="clear"></div>
							<div className="visible-xs xs-nav">
								<ul>
									<li>
										<a href="#">热门</a>
									</li>
									<li>
										<a href="#">24小时</a>
									</li>
									<li>
										<a href="#">热图</a>
									</li>
									<li>
										<a href="#">纯文</a>
									</li>
									<li className="noLine">
										<a href="#">穿越</a>
									</li>
									<li>
										<a href="#">图片</a>
									</li>
									<li>
										<a href="#">gif动图</a>
									</li>
									<li>
										<a href="#">美女</a>
									</li>
									<li>
										<a href="#">视频</a>
									</li>
									<li className="noLine">
										<a href="#">游戏</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</nav>
				{this.props.children}
			</div>
		)
	}
}