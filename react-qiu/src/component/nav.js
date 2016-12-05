import React from 'react'

export default class Nav extends React.Component {
	render() {
		return (
			<nav className="container-fluid nav-header">
					<div className="container">
						<div className="row">
							<div className="pull-left nav-left">
								<a href="#" className="hidden-xs"><img src="../../images/logo.png" alt=""/></a>
								<a href="#" className="visible-xs xs-logo"><img src="../../images/logo-new.png" alt=""/></a>
								<ul className="hidden-xs">
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
										<a href="#">文字</a>
									</li>
									<li>
										<a href="#">穿越</a>
									</li>
									<li>
										<a href="#">糗图</a>
									</li>
									<li>
										<a href="#">新鲜</a>
									</li>
									<li>
										<a href="#">投稿</a>
									</li>
								</ul>
							</div>
							<div className="pull-right nav-right hidden-xs">
								<a href="#"><img src="../../images/missing.png" alt="" className="img-responsive"/></a>
								<a href="#">赐我一个名字吧</a>
							</div>
							<div className="visible-xs xs-ctrl pull-right">
								<a href="#"></a>
								<a href="#">
									<div className="user-ctrl">
										<div>个人中心</div>
										<div>退出</div>
									</div>
								</a>
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
		)
	}
}