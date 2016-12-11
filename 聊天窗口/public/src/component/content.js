import React from 'react'

export default React.createClass({
	clickGood: function() {
		if (localStorage.username) {
			this.props.clickGood({
				id: this.props.content._id,
				username: localStorage.username
			})
		} else {
			alert("请登录")
		}

	},
	render: function() {
		var self = false;
		if (localStorage.username == this.props.content.username) {
			self = true
		}
		return (
			<div className="row message">
					<a href="#" className={"good "+(self?"pull-right":"pull-left")} onClick={this.clickGood}><span>{this.props.content.good.length}</span>赞</a>
					<div className={"say "+(self?"pull-right":"pull-left")}>
						<div className={"user "+(self?"text-right":"")}><span>{this.props.content.username}</span><span>{this.props.content.date}</span></div>
						<div className={"content "+(self?"text-right":"")}>{this.props.content.content}</div>
					</div>
				</div>

		)
	}
})