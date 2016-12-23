import React from 'react'
import $ from 'jquery'

export default class InputArea extends React.Component{
	constructor(props) {
		super(props);
		this.submit=this.submit.bind(this);
	}
	submit(e){
		e.preventDefault();
		var url="http://localhost:3000/posts/";
		var data={content:this.refs.content.value}
		if(this.props.isPost){
			url+="writePost";
			data.title=this.refs.title.value;
		}else{

		}
		$.ajax({
			url:url,
			type:"post",
			data:data,
			xhrFields: {
		        withCredentials: true
		    },
			success:function(res){
				console.log(res)
			}
		})
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