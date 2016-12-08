import React from 'react'
import CtrlContent from './ctrlContent.js'
import Tip from './tip.js'
import {
	removeClass,
	addClass
} from '../../js/changeClass.js'
/**
 * 用户中心组件
 */
export default class Ctrl extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			"show": 0
		};

	}
	componentDidMount() {
		var btnA = this.refs.ctrlNav.getElementsByTagName("a");
		for (let i = 0, len = btnA.length; i < len; i++) {
			btnA[i].addEventListener("click", function() {
				for (let j = 0; j < len; j++) {
					removeClass(btnA[j])
				}
				this.setState({
					show: i
				})
				addClass(btnA[this.state.show], "nav-active")
			}.bind(this))
		}
	}
	render() {
		return (
			<section className="container ctrl-container">
				<div className="ctrl-user-header">
					<img src="../../images/missing (1).png" className="pull-left user-icon hidden-xs" alt=""/>
					<figure className="visible-xs">
						<div className="xs-icon">
							<img src="../../images/missing (1).png" alt="missing"/>
						</div>
						<figcaption>
							<h4 className="xs-username">赐我一个名字ba</h4>
						</figcaption>
					</figure>
					<div>
						<h2 className="username hidden-xs">赐我一个名字ba</h2>
						<ul className="user-nav" ref="ctrlNav">
							<li>
								<a className="nav-active">主页</a>
							</li>
							<li>
								<a href="javascript:voie(0)">糗事</a>
							</li>
							<li>
								<a href="javascript:void(0)">评论</a>
							</li>
							<li className="hidden-xs">
								<a href="javascript:void(0)">设置</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="pull-left ctrl-left">
					<Tip>
						<h3>糗百指数</h3>
						<ul>
							<li>粉丝数：<span>0</span></li>
							<li>关注数：<span>0</span></li>
							<li>糗事：<span>1</span></li>
							<li>评论：<span>1</span></li>
							<li>笑脸：<span>111</span></li>
							<li className="hidden-xs">糗事精选：<span>0</span></li>
						</ul>
					</Tip>
					<Tip>
						<h3>个人资料</h3>
						<ul>
							<li>婚姻：<span></span></li>
							<li>星座：<span></span></li>
							<li>职业：<span></span></li>
							<li>故乡：<span></span></li>
							<li>糗龄：<span></span></li>
							<li className="hidden-xs">糗事精选：<span>1120天</span></li>
						</ul>
					</Tip>
					<Tip cName="hidden-xs">
						<h3>隐私提示</h3>
						<ul>
							<li>如果您不希望在互联网上公开自己的糗百动态，请在糗百web或下载app登陆设置为关闭。</li>
						</ul>
					</Tip>
				</div>
				<div className="pull-right ctrl-right">
					<CtrlContent show={this.state.show}/>
				</div>
			</section>
		)
	}
}