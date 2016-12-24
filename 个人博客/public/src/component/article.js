import React from 'react'
import {Link} from 'react-router'
import Comment from './comment.js'
import InputArea from './inputArea.js'
import {connect} from 'react-redux'
import * as actions from '../action/index.js'
import $ from 'jquery'
import {hashHistory} from 'react-router'

class Article extends React.Component{
	constructor(props) {
		super(props);
		this.del=this.del.bind(this)
		this.clickGood=this.clickGood.bind(this)
	}
	del(){
		$.ajax({
			url:"http://localhost:3000/posts/deletePost/"+this.props.data._id,
			type:"get",
			dataType:"json",
			xhrFields: {
			    withCredentials: true
		    },
			success:function(res){
				if(res.state===200){
					/*由于不知名的原因，状态改变后视图却不会变化*/
					this.props.data.comments?this.props.getData("posts/getOnePost/"+this.props.data._id):hashHistory.push("/")
				}
			}.bind(this)
		})
	}
	clickGood(){
		$.ajax({
			url:"http://localhost:3000/posts/clickGood/"+this.props.data._id,
			type:"get",
			xhrFields: {
		        withCredentials: true
		    },
		    dataType:"json",
			success:function(res){
				if(res.state==200){
					/*主页的时候，获取所有数据，单个文章页获取一页数据*/
					this.props.data.comments?this.props.getData("posts/getOnePost/"+this.props.data._id):this.props.getData("posts/getAllPosts")
				}
			}.bind(this)
		})
	}
	render(){
		return (
			<article className="post">
				<Link to={"/post/"+this.props.data._id}>
					<h2 className="post-head">
						{this.props.data.title}
					</h2>
				</Link>
				<div className="createTime">{this.props.data.updateTime}
				{this.props.loginState==2?(<span>
					<button className="manager-btn" onClick={this.del}>删除</button>
					<Link to={"/updatePost/"+this.props.data._id}><button className="manager-btn">修改</button></Link>
					</span>):""
				}
				</div>
				<Link to={"/post/"+this.props.data._id}>
					<div className="content" ref="content" dangerouslySetInnerHTML={{__html:this.props.data.content}}>
					{/*后台返回的是html字符串，需要用dangerouslySetInnerHTML放置到div中，不然会出错，试过字符串放到div.innerHTML中，修改文章后会出错*/}
					</div>
				</Link>
				<div className="comments-list">
					<span onClick={this.clickGood}>{this.props.data.good.length}赞</span>&nbsp;<span>{this.props.data.commentsCount}评论<span>{this.props.data.pv}浏览</span> </span>
				</div>
				{this.props.children}
				{this.props.data.comments?this.props.data.comments.map(function(item,i){
					return <Comment data={item} key={i} postId={this.props.data._id}/>
				}.bind(this)):""}
			</article>
			)
	}
}

export default connect(
	(state)=>({loginState:state.loginState}),
	actions
)(Article)