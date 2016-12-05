import React from 'react'

export default class Content3 extends React.Component {
	render() {
		return (
			<div className="home-one" style={{background:this.props.background}}>
				<div>
					<div className="pull-left qiu-user">
						<img src="../../images/missing (1).png" alt="missing"/>
						<span className="username">赐我一个名字ba</span>
					</div>
					<div className="pull-right" style={{display:this.props.isQuote?"none":"block"}}>
						<div>审核通过</div>
						<button className="pull-right qiushi-delete">删除</button>
					</div>
					<div className="clear"></div>
					<p><a href="#" className="home-content">每天骑车去驾校，路上风吹的头发一秒一个发型，遂买了个帽子，哥哥不哥，室友看到了，跟另一个室友说，这是xxx买的装b帽，然后他就戴头上了</a></p>
					<p><span>111</span>好笑 · <span>2</span>评论 · 发表于<a href="#" className="showtime">2014-05-13</a></p>
					{this.props.children}
				</div>
			</div>
		)
	}
}