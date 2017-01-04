import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../action/index.js'
import QueueAnim from 'rc-queue-anim'
import Alert from 'react-s-alert'
var getCookie=require("../js/getCookie.js")
var Loader = require('halogen/ClipLoader');

class Talk extends React.Component{
	constructor(props) {
		super(props);
		this.sendMessage=this.sendMessage.bind(this)
		this.showAll=this.showAll.bind(this)
	}
	componentDidMount() {
		window.socket = io.connect('http://localhost:3001/');
		socket.on("connect", function (msg) {
		 	console.log("connect success")
            });
		socket.on("message",function(msg){
			this.props.getMessages(msg)
		}.bind(this))
	}
	componentDidUpdate(prevProps, prevState) {
		this.refs.messageBox.scrollTop = this.refs.messageBox.scrollHeight
	}
	sendMessage(e){
		e.preventDefault();
		var name=getCookie(document.cookie,"name"),
			content=this.refs.input.value;
		if(!name){
			Alert.warning("请登录",{
			    effect:"slide",
			    timeout:2000
			   })
			return
		}
		socket.send({name:getCookie(document.cookie,"name"),content:this.refs.input.value})
		this.refs.input.value=""
	}
	showAll(){
		socket.send({getAll:true})
	}
	render(){
		var name=getCookie(document.cookie,"name")
		return (
			<section className="talkroom">
				<div className="message-box" ref="messageBox">
				<a onClick={this.showAll} className="showAll">显示全部</a>
				{this.props.data?
					(
					this.props.data.map(function(item,i){
						return (
							<div key={i} className={"message "+(name==item.name&&this.props.loginState?"self":"")}>
								<div className="message-head"><span className="message-name">{item.name}</span>&nbsp;<span className="message-time">{item.created_at}</span></div>
								<div className="message-content">{item.content}</div>
							</div>
							)
						}.bind(this))
					):(
						<Loader color="#654321" size="50px" margin="4px" className="loading-icon"></Loader>
					)}
				</div>
				<form className="talk-input-group" onSubmit={this.sendMessage}>
					<input maxLength="200" ref="input" className="talk-input" required></input>
					<button className="talk-submit" type="submit">发送</button>
				</form>
			</section>
			)
	}
}

export default connect(
	state=>({loginState:state.loginState,data:state.getMessages}),
	actions
)(Talk)