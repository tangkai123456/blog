import React from 'react'
import Nav from './nav.js'
import Content from './content.js'
import Input from './input.js'

export default React.createClass({
	getInitialState: function() {
		return {
			messages: []
		}
	},
	componentDidMount: function() {
		this.getAll();
		setInterval(function() {
			localStorage.scroll = this.refs.communite.scrollTop;
			this.getAll();
		}.bind(this), 5000)
	},
	componentDidUpdate(prevProps, prevState) {
		if (localStorage.scroll) {
			this.refs.communite.scrollTop = localStorage.scroll;
			delete localStorage.scroll
		} else {
			this.refs.communite.scrollTop = this.refs.communite.scrollHeight; //加载后滚动条滚动到底部
		}
	},
	getAll: function() {

		$.ajax({
			url: "http://localhost:3000/getAllMessage",
			dataType: "json",
			type: "get",
			cache: false,
			success: function(res) {
				this.setState({
					messages: res ? res : []
				})
			}.bind(this)
		})
	},
	submit: function(content) {
		$.ajax({
			url: "http://localhost:3000/postMessage",
			data: content,
			type: "post",
			dataType: "json",
			success: function(res) {
				this.setState({
					messages: res ? res : []
				})
			}.bind(this)
		})
	},
	clickGood: function(checkInfo) {
		localStorage.scroll = this.refs.communite.scrollTop;
		$.ajax({
			url: "http://localhost:3000/clickGood",
			data: checkInfo,
			type: "get",
			dataType: "json",
			success: function(res) {
				this.setState({
					messages: res ? res : []
				})
			}.bind(this)
		})
	},
	render: function() {
		return (
			<div className="container-fluid">
				<Nav/>
				<article className="container">
					<div className="row">
						<section className="col-md-12 communite" ref="communite">
						{this.state.messages.map(function(item,i){
							return <Content content={item} key={i} clickGood={this.clickGood}/>
						}.bind(this))}
						</section>
					</div>
				</article>
				<Input submit={this.submit}/>
			</div>
		)
	}
})