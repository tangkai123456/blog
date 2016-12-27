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

class Article extends React.Component{
	constructor(props) {
		super(props);
		this.del=this.del.bind(this)
		this.clickGood=this.clickGood.bind(this)
	}
	del(){
		$.ajax({
			url:"http://tangkai123456.xyz/posts/deletePost/"+this.props.data._id,
			type:"post",
			dataType:"json",
			xhrFields: {
			    withCredentials: true
		    },
			success:function(res){
				if(res.state===200){
					/*由于不知名的原因，状态改变后视图却不会变化*/
					this.props.data.comments?this.props.getData("posts/getOnePost/"+this.props.data._id):this.props.getData("posts/getAllPosts")
					hashHistory.push("/")
					Alert.success(res.info,{
						effect:"slide",
						timeout:2000
					})
				}
				ajaxReturn(res);
			}.bind(this),
			error:function(){
				Alert.error("朋友，你的网络出现问题了",{
			    	effect:"slide",
			    	timeout:2000
			    })
			}
		})
	}
	clickGood(){
		$.ajax({
			url:"http://tangkai123456.xyz/posts/clickGood/"+this.props.data._id,
			type:"post",
			xhrFields: {
		        withCredentials: true
		    },
		    dataType:"json",
			success:function(res){
				if(res.state==200){
					/*主页的时候，获取所有数据，单个文章页获取一页数据*/
					this.props.data.comments?this.props.getData("posts/getOnePost/"+this.props.data._id):this.props.getData("posts/getAllPosts")
					Alert.success(res.info,{
						effect:"slide",
						timeout:2000
					})
				}
				ajaxReturn(res);
			}.bind(this),
			error:function(){
				Alert.error("朋友，你的网络出现问题了",{
			    	effect:"slide",
			    	timeout:2000
			    })
			}
		})
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
				<Link to={"/post/"+this.props.data._id} className="post-list">
					<div className="content" ref="content" dangerouslySetInnerHTML={{__html:this.props.data.content}}>
					{/*后台返回的是html字符串，需要用dangerouslySetInnerHTML放置到div中，防止script注入*/}
					</div>
				</Link>
				<div className="comments-list">
					<span className="clickGood" onClick={this.clickGood}>{this.props.data.good.length}赞</span>&nbsp;<span>{this.props.data.commentsCount}评论&nbsp;<span>{this.props.data.pv}浏览</span> </span>
				</div>
				{this.props.children}
				{this.props.data.comments?this.props.data.comments.map(function(item,i){
					return <Comment data={item} key={i} postId={this.props.data._id}/>
				}.bind(this)):""}
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