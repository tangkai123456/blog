import React from 'react'
/**
 * 用户中心小贴士样式组件
 */
export default class Tip extends React.Component {
	render() {
		return (
			<div className={this.props.cName+" ctrl-tip"}>
				{this.props.children}
			</div>
		)
	}
}