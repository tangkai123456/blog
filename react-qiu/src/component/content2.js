import React from 'react'

export default class Content2 extends React.Component {
	render() {
		return (
			<div className="home-one">
				<div className="time hidden-xs"><span className="month">05</span><span className="gang">/</span><span className="date">13</span></div>
				<div className="home-right">
					<p><span className="username">赐我一个名字ba</span> 发表了糗事</p>
					<p><a href="#" className="home-content">每天骑车去驾校，路上风吹的头发一秒一个发型，遂买了个帽子，哥哥不哥，室友看到了，跟另一个室友说，这是xxx买的装b帽，然后他就戴头上了</a></p>
					<p><span>111</span>好笑 · <span>2</span>评论 · 发表于<a href="#" className="showtime">2014-05-13</a></p>
				</div>
				<div className="clear"></div>
				{this.props.children}
			</div>
		)
	}
}