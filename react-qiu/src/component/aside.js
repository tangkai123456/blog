import React from 'react'

export default class Aside extends React.Component {
	render() {
		return (
			<aside className="container-fluid content-aside">
				<div className="one-tip qiu-tip">
					<h3>
						糗百小提示
					</h3>
					<img src="../../images/ctrld.png" alt="ctrl+d" className="pull-left"/>
					<div className="pull-left">
						<p>按 Ctrl+D 键，</p>
						<p>把糗事百科加入收藏夹</p>
					</div>
				</div>
				<div className="clear"></div>
				<div className="one-tip">
					<h3>
						爆笑糗事精选
					</h3>
					<div className="qiu-hot">
						<a href="#">
							<figure>
								<span>
									<img src="../../images/app118104104.jpg" alt="hot"/>
								</span>
								<figcaption>
									这玩笑开大了
								</figcaption>
							</figure>
						</a>
						<a href="#">
							<figure>
								<span>
									<img src="../../images/app118104104.jpg" alt="hot"/>
								</span>
								<figcaption>
									这玩笑开大了
								</figcaption>
							</figure>
						</a>
					</div>
				</div>
				<div className="one-tip hot-talk">
					<h3>
						热门话题
					</h3>
					<div className="hot-talk-list">
						<a href="#">好看的搞笑综艺</a>
						<a href="#">全球幽默搞笑首榜</a>
						<a href="#">经典幽默搞笑语</a>
						<a href="#">搞笑幽默智力题</a>
						<a href="#">爸爸去哪儿搞笑改编</a>
						<a href="#">爸爸去哪儿搞笑版</a>
						<a href="#">出卖我的爱搞笑版</a>
						<a href="#">什么是爱 搞笑回答</a>
					</div>
				</div>
			</aside>
		)
	}
}