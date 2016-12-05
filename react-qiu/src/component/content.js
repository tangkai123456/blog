import React from 'react'

export default class Content extends React.Component {

	render() {

		return (
			<section className="content-left">
				<div className="container-fluid article">
					<div className="article-author">
						<a href="#" className="user-header"><img src="../../images/user1.jpg" className="img-responsive" alt=""/></a>
						<a href="#" className="user-name">尘世美好丶</a>
						<span className="user-sex-icon">22</span>
					</div>
					<a href="#" className="atricle-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora sapiente amet natus, nisi temporibus voluptatibus deleniti illo quod. Quos ad, quasi natus odio modi, quis illum quibusdam aliquam perspiciatis laborum!</a>
					<div className="comment-sum">
						<span>3844</span>好笑 · <a href="#"><span>93</span>评论</a>
					</div>
					<div className="comment-and-share">
						<div className="pull-left comment-icon">
							<a href="#"></a>
							<a href="#"></a>
							<a href="#"></a>
						</div>
						<div className="pull-right share-icon hidden-xs">
							<a href="#"></a>
							<figure className="wechat-tips">
									<img src="../../images/qrcode.png" alt="wechat-tips"/>
									<figcaption>
										使用微信“扫一扫”，点击手机屏幕右上角“...”分享
									</figcaption>
								</figure>
							<a href="#"></a>
							<a href="#"></a>
							<a href="#"></a>
						</div>
					</div>
					<div className="clear"></div>
					<a href="#" className="god-comment hidden-xs">
						<img src="../../images/cmt-god.png" alt="神" className="god"/>
						<span className="user-name">蘑菇的小鸡呢</span> : 
						<span className="user-comment">学霸的泡妞方法，楼上的那群人想到又有何用</span>
						<img src="../../images/like@1.5.png" alt="good" className="good"/>
						<span>109</span>
					</a>
				</div>
			</section>
		)
	}
}