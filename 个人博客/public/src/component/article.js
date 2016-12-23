import React from 'react'
import {Link} from 'react-router'
import Comment from './comment.js'
import InputArea from './inputArea.js'

export default class Article extends React.Component{
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.refs.content.innerHTML=this.props.data.content
	}
	render(){

		return (
			<article className="post">
				<Link to={"/post/"+this.props.data._id}>
					<h2 className="post-head">
						{this.props.data.title}
					</h2>
				</Link>
				<div className="createTime">{this.props.data.updateTime}<Link to={"/del/"+this.props.data._id}><button className="manager-btn">删除</button></Link><Link to={"/updatePost/"+this.props.data._id}><button className="manager-btn">修改</button></Link></div>
				<Link to={"/post/"+this.props.data._id}>
					<div className="content" ref="content">
					{/*markdown内容需要插入innerHTML中*/}
					</div>
				</Link>
				<div className="comments-list">
					<span>{this.props.data.good.length}赞</span>&nbsp;<span>15评论 </span>
				</div>
				{this.props.children}
				<Comment/>
			</article>
			)
	}
}