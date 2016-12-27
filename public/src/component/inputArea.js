import React,{PropTypes} from 'react'
import $ from 'jquery'
import {connect} from 'react-redux'
import * as actions from '../action/index.js'
import {hashHistory} from 'react-router'
import ajaxReturn from '../js/ajaxReturn.js'
import Alert from 'react-s-alert'

class InputArea extends React.Component{
	constructor(props) {
		super(props);
		this.submit=this.submit.bind(this);
	}
	submit(e){
		e.preventDefault();
		var url="";
		var data={};
		if(this.props.defaultData){
			data={content:this.refs.content.value,title:this.refs.title.value}
				$.ajax({
					url:"http://tangkai123456.xyz/posts/updatePost/"+this.props.defaultData._id,
					data:data,
					type:"post",
					dataType:"json",
					xhrFields: {
				        withCredentials: true
				    },
					success:function(res){
						if(res.state===200){
							hashHistory.push("/")
							Alert.success(res.info,{
								effect:"slide",
								timeout:2000
							})
						}
						ajaxReturn(res)
					},
					error:function(){
						Alert.error("朋友，你的网络出现问题了",{
					    	effect:"slide",
					    	timeout:2000
					    })
					}
				})
		}else{
			if(this.props.isPost){
				data={content:this.refs.content.value,title:this.refs.title.value}
				$.ajax({
					url:"http://tangkai123456.xyz/posts/writePost",
					data:data,
					type:"post",
					dataType:"json",
					xhrFields: {
				        withCredentials: true
				    },
					success:function(res){
						if(res.state===200){
							hashHistory.push("/")
							Alert.success(res.info,{
								effect:"slide",
								timeout:2000
							})
						}
						ajaxReturn(res)
					},
					error:function(){
						Alert.error("朋友，你的网络出现问题了",{
					    	effect:"slide",
					    	timeout:2000
					    })
					}
				})
			}else{
				data={content:this.refs.content.value,loginState:this.props.loginState};
				$.ajax({
					url:"http://tangkai123456.xyz/comments/writeComment/"+this.props.postId,
					data:data,
					type:"post",
					dataType:"json",
					xhrFields: {
				        withCredentials: true
				    },
					success:function(res){
						if(res.state===200){
							if(this.refs.title){
								this.refs.title.value=""
							}
							this.refs.content.value=""
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
		}
	}
	componentDidUpdate() {
		/*从修改页跳到发表页，会有数据留下来，所以要清空一次*/
		if(this.props.defaultData){
			this.refs.title.value=this.props.defaultData?this.props.defaultData.title:"";
			this.refs.content.value=this.props.defaultData?this.props.defaultData.content:"";
		}else{
			if(this.refs.title){
				this.refs.title.value=""
			}
			this.refs.content.value=""
		}
	}
	render(){
		return (
			<form className="input-area" onSubmit={this.submit}>

			{
				this.props.isPost?(	<div className="content-head">
											<label htmlFor="head">主题：</label>
											<input type="text" id="head" placeholder="this is head" ref="title" required maxLength="140"/>
										</div>):""
			}
				
				<div className="content-body">
					<textarea rows={this.props.isPost?"":"3"} placeholder={this.props.isPost?"输入内容":"评论一下"} ref="content" required maxLength={this.props.isPost?"":"200"}></textarea>
				</div>
				<button type="submit" >提交</button>
			</form>
			)
	}
}

InputArea.PropTypes={
	loginState:PropTypes.string.isRequired,
	isPost:PropTypes.bool.isRequired,
	defaultValue:PropTypes.object.isRequired,
	getData:PropTypes.func.isRequired
}

export default connect(
	(state)=>({loginState:state.loginState}),
	actions
)(InputArea)
