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
		this.props.getData("comments/delComment/"+this.props.postId+"/"+this.props.data._id,{loginState:this.props.loginState},"post",true)
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