import React from 'react'

export default class Talk extends React.Component{
	constructor(props) {
		super(props);
	}
	componentDidUpdate(prevProps, prevState) {
		this.refs.messageBox.scrollTop = this.refs.messageBox.scrollHeight
	}
	render(){
		return (
			<section className="talkroom">
				<div className="message-box" ref="messageBox">
					<div className="message self">
						<div className="message-head"><span className="message-name">tangkai</span>&nbsp;<span className="message-time">1991-10-10 10:10:10</span></div>
						<div className="message-content"> consequatur aut repellendus aperiam, iusto ea laboriosam provident! Aperiam corporis, provident aliquam sed corrupti?</div>
					</div>
					<div className="message">
						<div className="message-head"><span className="message-name">tangkai</span>&nbsp;<span className="message-time">1991-10-10 10:10:10</span></div>
						<div className="message-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad tempore illo debitis tenetur, illum, maxime laborum, consequatur aut repellendus aperiam, iusto ea laboriosam provident! Aperiam corporis, provident aliquam sed corrupti?</div>
					</div>
					<div className="message ">
						<div className="message-head"><span className="message-name">tangkai</span>&nbsp;<span className="message-time">1991-10-10 10:10:10</span></div>
						<div className="message-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad tempore illo debitis tenetur, illum, maxime laborum, consequatur aut repellendus aperiam, iusto ea laboriosam provident! Aperiam corporis, provident aliquam sed corrupti?</div>
					</div>
					<div className="message">
						<div className="message-head"><span className="message-name">tangkai</span>&nbsp;<span className="message-time">1991-10-10 10:10:10</span></div>
						<div className="message-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad tempore illo debitis tenetur, illum, maxime laborum, consequatur aut repellendus aperiam, iusto ea laboriosam provident! Aperiam corporis, provident aliquam sed corrupti?</div>
					</div>
					<div className="message">
						<div className="message-head"><span className="message-name">tangkai</span>&nbsp;<span className="message-time">1991-10-10 10:10:10</span></div>
						<div className="message-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad tempore illo debitis tenetur, illum, maxime laborum, consequatur aut repellendus aperiam, iusto ea laboriosam provident! Aperiam corporis, provident aliquam sed corrupti?</div>
					</div>
					<div className="message">
						<div className="message-head"><span className="message-name">tangkai</span>&nbsp;<span className="message-time">1991-10-10 10:10:10</span></div>
						<div className="message-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad tempore illo debitis tenetur, illum, maxime laborum, consequatur aut repellendus aperiam, iusto ea laboriosam provident! Aperiam corporis, provident aliquam sed corrupti?</div>
					</div>
					<div className="message">
						<div className="message-head"><span className="message-name">tangkai</span>&nbsp;<span className="message-time">1991-10-10 10:10:10</span></div>
						<div className="message-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad tempore illo debitis tenetur, illum, maxime laborum, consequatur aut repellendus aperiam, iusto ea laboriosam provident! Aperiam corporis, provident aliquam sed corrupti?</div>
					</div>
					<div className="message">
						<div className="message-head"><span className="message-name">tangkai</span>&nbsp;<span className="message-time">1991-10-10 10:10:10</span></div>
						<div className="message-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad tempore illo debitis tenetur, illum, maxime laborum, consequatur aut repellendus aperiam, iusto ea laboriosam provident! Aperiam corporis, provident aliquam sed corrupti?</div>
					</div>
				</div>
				<div className="talk-input-group">
					<textarea rows="1" maxLength="200"></textarea>
					<button className="talk-submit">发送</button>
				</div>
			</section>
			)
	}
}