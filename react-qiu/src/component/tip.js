import React from 'react'

export default class Tip extends React.Component {
	render() {
		return (
			<div className={this.props.cName+" ctrl-tip"}>
				{this.props.children}
			</div>
		)
	}
}