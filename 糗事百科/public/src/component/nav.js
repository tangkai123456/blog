import React from 'react'
import {
	Link
} from 'react-router'
/**
 * 导航组件
 */
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
										<a href="javascript:void(0)"><del>24小时</del></a>
									</li>
									<li>
										<a href="javascript:void(0)"><del>热图</del></a>
									</li>
									<li>
										<a href="javascript:void(0)"><del>文字</del></a>
									</li>
									<li>
										<a href="javascript:void(0)"><del>穿越</del></a>
									</li>
									<li>
										<a href="javascript:void(0)"><del>糗图</del></a>
									</li>
									<li>
										<a href="javascript:void(0)"><del>新鲜</del></a>
									</li>
									<li>
										<Link to="/write">投稿</Link>
									</li>
								</ul>
							</div>
							<div className="pull-right nav-right hidden-xs">
								<a href="javascript:void(0)"><img src="../../images/missing.png" alt="" className="img-responsive"/></a>
								<Link to="/ctrl">赐我一个名字吧</Link>
							</div>
							<div className="visible-xs xs-ctrl pull-right">
								<Link to="/write"><span className="add"></span></Link>
								<span>
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
										<a href="javascript:void(0)">热门</a>
									</li>
									<li>
										<a href="javascript:void(0)">24小时</a>
									</li>
									<li>
										<a href="javascript:void(0)">热图</a>
									</li>
									<li>
										<a href="javascript:void(0)">纯文</a>
									</li>
									<li className="noLine">
										<a href="javascript:void(0)">穿越</a>
									</li>
									<li>
										<a href="javascript:void(0)">图片</a>
									</li>
									<li>
										<a href="javascript:void(0)">gif动图</a>
									</li>
									<li>
										<a href="javascript:void(0)">美女</a>
									</li>
									<li>
										<a href="javascript:void(0)">视频</a>
									</li>
									<li className="noLine">
										<a href="javascript:void(0)">游戏</a>
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