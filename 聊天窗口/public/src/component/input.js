import React from 'react'

export default React.createClass({
	getInitialState: function() {
		return {
			input: ""
		}
	},
	changeInput: function(e) {
		this.setState({
			input: e.target.value
		})
	},
	submit: function() {
		if (localStorage.username) {
			if (this.state.input) {
				var date = new Date();
				var year = date.getFullYear();
				var month = date.getMonth() + 1;
				var day = date.getDate();
				var hour = date.getHours();
				var minute = date.getMinutes();
				var second = date.getSeconds();
				this.props.submit({
					username: localStorage.username,
					content: this.state.input,
					date: year + '年' + month + '月' + day + '日 ' + hour + ':' + minute + ':' + second,
					good: []
				});
				this.setState({
					input: ""
				})
			}
		} else {
			alert("请登录")
		}
	},
	render: function() {
		return (
			<div className="container-fluid inputBottom">
				<div className="container">
					<div className="form-inline" role="form">
					  <div className="form-group input">
					    <input type="text" className="form-control" id="inputMessage" placeholder="Message" value={this.state.input} onChange={this.changeInput}/>
					  </div>
					  <button type="submit" className="btn btn-default" onClick={this.submit}><a href="#bottom">发送</a></button>
					</div>
				</div>
			</div>
		)
	}
})