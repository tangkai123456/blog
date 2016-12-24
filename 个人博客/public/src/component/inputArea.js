import React from 'react'
import $ from 'jquery'
import {connect} from 'react-redux'
import * as actions from '../action/index.js'
import {hashHistory} from 'react-router'

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
					url:"http://localhost:3000/posts/updatePost/"+this.props.defaultData._id,
					data:data,
					type:"post",
					dataType:"json",
					xhrFields: {
				        withCredentials: true
				    },
					success:function(res){
						if(res.state===200){
							hashHistory.push("/")
						}
					}
				})
		}else{
			if(this.props.isPost){
				data={content:this.refs.content.value,title:this.refs.title.value}
				$.ajax({
					url:"http://localhost:3000/posts/writePost",
					data:data,
					type:"post",
					dataType:"json",
					xhrFields: {
				        withCredentials: true
				    },
					success:function(res){
						if(res.state===200){
							hashHistory.push("/")
						}
					}
				})
			}else{
				data={content:this.refs.content.value};
				$.ajax({
					url:"http://localhost:3000/comments/writeComment/"+this.props.postId,
					data:data,
					type:"post",
					dataType:"json",
					xhrFields: {
				        withCredentials: true
				    },
					success:function(res){
						if(res.state===200){
							/*由于不知名的原因，状态改变后视图却不会变化*/
							this.props.getData("posts/getOnePost/"+this.props.postId)
						}
					}.bind(this)
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
											<input type="text" id="head" placeholder="this is head" ref="title" required/>
										</div>):""
			}
				
				<div className="content-body">
					<textarea name="" id="" cols="30" rows="10" placeholder="this is content" ref="content" required></textarea>
				</div>
				<button type="submit">提交</button>
			</form>
			)
	}
}

export default connect(
	()=>({}),
	actions
)(InputArea)
