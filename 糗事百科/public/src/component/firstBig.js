import React from 'react'
/**
 * 第一个字大写的组件
 */
export default class FirstBig extends React.Component {
	render() {
		if (!this.props.imgUrl) {
			return (
				<div className="firstBig">
				<span>这</span>个是真事  今天看到糗百里有人问   看到小偷偷东西要不要制止  看了看好多人说不会怕惹麻烦   但是我一定会的  
…
			</div>
			)
		} else {
			return (
				<div className="firstBig">
					<img src="../../images/app117768971.jpg" alt=""/>
					<div className="hasImg">姑凉，你秋衣穿反了</div>
				</div>
			)
		}
	}
}