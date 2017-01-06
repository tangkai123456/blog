import React,{PropTypes} from 'react'
import $ from 'jquery'
import {connect} from 'react-redux'
import * as actions from '../../action/index.js'
import {hashHistory} from 'react-router'
import ajaxReturn from '../../js/ajaxReturn.js'
import Alert from 'react-s-alert'
import QueueAnim from 'rc-queue-anim'

class InputArea extends React.Component{
	constructor(props) {
		super(props);
		this.submit=this.submit.bind(this);
	}
	submit(e){
		e.preventDefault();
		var url="";
		var data={};
		if(this.props.defaultData){//修改文章
			data={content:this.refs.content.value,title:this.refs.title.value}
			this.props.getData("posts/updatePost/"+this.props.defaultData._id,data,"post",true)
			hashHistory.push("/")
		}else{//发表文章
			if(this.props.isPost){
				data={content:this.refs.content.value,title:this.refs.title.value}
				this.props.getData("posts/writePost",data,"post",true)
				hashHistory.push("/")
			}else{//发表评论
				data={content:this.refs.content.value,loginState:this.props.loginState};
				this.props.getData("comments/writeComment/"+this.props.postId,data,"post",true)
				if(this.props.loginState){
					if(this.refs.title){
				 		this.refs.title.value=""
					}
					this.refs.content.value=""
				}
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
				<form className="input-area" onSubmit={this.submit} key="a">
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
