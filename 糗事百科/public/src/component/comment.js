import React from 'react'
/**
 * 评论组件
 */
export default class Comment extends React.Component {
	render() {
		return (
			<div className="oneComment">
				<img src={this.props.data.userhead} alt="" className="user-head"/>
				<div className="comment-right">
					<div className="article-author">
						<a href="javascriot:void(0)" className="user-name">{this.props.data.username.split(" ")[0]}</a>
						<span className="user-sex-icon">{this.props.data.userage}</span>
						<a href="javascriot:void(0)" className="pull-right like-sum"><img src="../../images/like@1.5.png" alt="" className={"like-img "+this.props.isGen?"hidden":""}/>{this.props.data.sum}</a>
					</div>
					<div className="comment-content">{this.props.data.comment}</div>
				</div>
			</div>
		)
	}
}