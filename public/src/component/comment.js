import React,{PropTypes} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import * as actions from '../action/index.js'
import {hashHistory} from 'react-router'
import $ from 'jquery'
import ajaxReturn from '../js/ajaxReturn.js'
import Alert from 'react-s-alert'

var getCookie=require("../js/getCookie.js")

class Comment extends React.Component{
	constructor(props) {
		super(props);
		this.delComment=this.delComment.bind(this)
	}
	delComment(){
		$.ajax({
			url:"http://tangkai123456.xyz/comments/delComment/"+this.props.postId+"/"+this.props.data._id,
			type:"post",
			data:{loginState:this.props.loginState},
			dataType:"json",
			xhrFields: {
			    withCredentials: true
		    },
			success:function(res){
				if(res.state===200){
					/*由于不知名的原因，状态改变后视图却不会变化*/
					this.props.getData("posts/getOnePost/"+this.props.postId)
					Alert.success(res.info,{
						effect:"slide",
						timeout:2000
					})
				}
				ajaxReturn(res)
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
				<div className="aComment">
					<span className="comment-user">{this.props.data.name}:</span>&nbsp;<span className="comment-content">{this.props.data.content}</span>
					{((getCookie(document.cookie,"name")===this.props.data.name)&&(this.props.loginState===1))||(this.props.loginState===2)?
						<button onClick={this.delComment}>删除</button>:""
					}
				</div>
			)
	}
}

Comment.PropTypes={
	loginState:PropTypes.string.isRequired,
	data:PropTypes.object.isRequired,
	getData:PropTypes.func.isRequired
}

export default connect(
	(state)=>({loginState:state.loginState}),
	actions
)(Comment)