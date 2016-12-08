import React from 'react'
import {
	Link
} from 'react-router'
/**
 * 段子组件
 */
export default class Content extends React.Component {

	render() {
		if (this.props.data) {
			return (
				<section className="content-left">
				<div className="container-fluid article">
					<div className="article-author">
						<a href="javascript:void(0)" className="user-header"><img src={this.props.data.userhead} className="img-responsive" alt=""/></a>
						<a href="javascript:void(0)" className="user-name">{this.props.data.username}</a>
						<span className={"user-sex-icon "+this.props.data.usersex}>{this.props.data.userage}</span>
					</div>
					<Link to={"one/"+this.props.data.userid+"/"+(+this.props.index+1)} className="atricle-text">{this.props.data.content.content}</Link>
					{this.props.children}
					<div className="comment-sum">
						<span>{this.props.data.content.contentfuny}</span>好笑 · <a href="javascript:void(0)"><span>{this.props.data.content.contentcomment}</span>评论</a>
					</div>
					<div className="comment-and-share">
						<div className="pull-left comment-icon">
							<a href="javascript:void(0)"></a>
							<a href="javascript:void(0)"></a>
							<a href="javascript:void(0)"></a>
						</div>
						<div className="pull-right share-icon hidden-xs">
							<a href="javascript:void(0)"></a>
							<figure className="wechat-tips">
									<img src="../../images/qrcode.png" alt="wechat-tips"/>
									<figcaption>
										使用微信“扫一扫”，点击手机屏幕右上角“...”分享
									</figcaption>
								</figure>
							<a href="javascript:void(0)"></a>
							<a href="javascript:void(0)"></a>
							<a href="javascript:void(0)"></a>
						</div>
					</div>
					<div className="clear"></div>
					<a href="javascript:void(0)" className={"god-comment hidden-xs "+(this.props.isHidden===true?"hidden":"")}>
						<img src="../../images/cmt-god.png" alt="神" className="god"/>
						<span className="user-name">{this.props.data.content.comment.username}</span> : 
						<span className="user-comment">{this.props.data.content.comment.comment}</span>
						<img src="../../images/like@1.5.png" alt="good" className="good"/>
						<span>{this.props.data.content.comment.hotsum}</span>
					</a>
				</div>
			</section>
			)
		} else {
			return <div></div>
		}
	}
}