import React from 'react'
import {Link} from 'react-router'

export default class Article extends React.Component{
	render(){
		return (
			<article className="post">
				<Link to="/post">
					<h2 className="post-head">
						this is post head
					</h2>
				</Link>
				<div className="createTime">2011-11-11 05:15</div>
				<Link to="/post">
					<div className="content">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, corporis, eveniet. Nihil excepturi qui illo hic magnam laborum, non esse fugit maxime similique corporis, deserunt nesciunt cum ducimus, maiores voluptatem.
					</div>
				</Link>
				<div className="comments-list">
					<span>15赞</span><span>15评论</span>
				</div>
				<div className="aComment">
					<span className="comment-user">zhangyu:</span>&nbsp;<span className="comment-content">this is a comment</span>
				</div>
			</article>
			)
	}
}