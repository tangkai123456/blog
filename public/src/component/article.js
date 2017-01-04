import React,{PropTypes} from 'react'
import {Link} from 'react-router'
import Comment from './comment.js'
import InputArea from './inputArea.js'
import {connect} from 'react-redux'
import * as actions from '../action/index.js'
import $ from 'jquery'
import {hashHistory} from 'react-router'
import Alert from 'react-s-alert'
import ajaxReturn from '../js/ajaxReturn.js'
import QueueAnim from 'rc-queue-anim'

class Article extends React.Component{
	constructor(props) {
		super(props);
		this.del=this.del.bind(this)
		this.clickGood=this.clickGood.bind(this)
	}
	del(){
		this.props.getData("posts/deletePost/"+this.props.data._id,{},"post",true)
		hashHistory.push("/")
	}
	clickGood(){
		this.props.getData("posts/clickGood/"+this.props.data._id+"/"+(this.props.data.comments?0:1),{},"post",true)
	}
	render(){
		return (
				<article className="post">
					<Link to={"/post/"+this.props.data._id} className="post-list">
						<h2 className="post-head" dangerouslySetInnerHTML={{__html:this.props.data.title}}>
							{/*{this.props.data.title}*/}
						</h2>
					</Link>
					<div className="createTime">发布时间：{this.props.data.created_at}&nbsp;最后一次修改：{this.props.data.updateTime}
					{this.props.loginState==2?(<span>
						<button className="manager-btn" onClick={this.del}>删除</button>
						<Link to={"/updatePost/"+this.props.data._id}><button className="manager-btn">修改</button></Link>
						</span>):""
					}
					</div>
					{
						this.props.data.comments?(
					<div className="post-list">
					<QueueAnim type="right" className="post-content">
						<div className="content" ref="content" key="a" dangerouslySetInnerHTML={{__html:this.props.data.content}}>

						{/*后台返回的是html字符串，需要用dangerouslySetInnerHTML放置到div中，防止script注入*/}
						</div>
					</QueueAnim>
					</div>
							):(
					<Link to={"/post/"+this.props.data._id} className="post-list">
						<div className="content" ref="content" dangerouslySetInnerHTML={{__html:this.props.data.content}}>
						{/*后台返回的是html字符串，需要用dangerouslySetInnerHTML放置到div中，防止script注入*/}
						</div>
					</Link>
							)
					}
					<div className="comments-list">
						<span className="clickGood" onClick={this.clickGood}>{this.props.data.good.length}赞</span>&nbsp;<span>{this.props.data.commentsCount}评论&nbsp;<span>{this.props.data.pv}浏览</span> </span>
					</div>
					{this.props.children}
					<QueueAnim type="top">
					{this.props.data.comments?this.props.data.comments.map(function(item,i){
						return <Comment data={item} key={this.props.data._id+i} postId={this.props.data._id}/>
					}.bind(this)):""}
					</QueueAnim>
				</article>
			)
	}
}

Article.PropTypes={
	loginState:PropTypes.string.isRequired,
	data:PropTypes.object.isRequired,
	getData:PropTypes.func.isRequired
}

export default connect(
	(state)=>({loginState:state.loginState}),
	actions
)(Article)