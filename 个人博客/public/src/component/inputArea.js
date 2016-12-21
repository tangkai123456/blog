import React from 'react'

export default class InputArea extends React.Component{
	render(){
		return (
			<form className="input-area">
			{
				this.props.isPost?(	<div className="content-head">
											<label htmlFor="head">主题：</label>
											<input type="text" id="head" placeholder="this is head"/>
										</div>):""
			}
				
				<div className="content-body">
					<textarea name="" id="" cols="30" rows="10" placeholder="this is content"></textarea>
				</div>
				<button type="submit">提交</button>
			</form>
			)
	}
}