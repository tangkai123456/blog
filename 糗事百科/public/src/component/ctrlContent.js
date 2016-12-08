import React from 'react'
import Content2 from './content2.js'
import Content3 from './content3.js'
import Tip from './tip.js'
/**
 * 用户中心内容可切换部分组件
 */
export default class CtrlContent extends React.Component {
	render() {

		return (
			<div>
				{
					this.props.show==0?(
							<div className="ctrl-home" ref="home">
								<Content2/>
							</div>
						):
					this.props.show==1?(
							<div className="ctrl-qiushi" ref="qiushi">
								<Content3/>
							</div>
						):
					this.props.show==2?(
							<div className="ctrl-comment" ref="comment">
							<div className="home-one">
								<div className="time hidden-xs"><span className="month">05</span><span className="gang">/</span><span className="date">13</span></div>
								<div className="comment-right">
									<div className="whos-comment">
										<div>
											<span className="username">赐我一个名字ba</span>评论了<span className="username">匿名用户</span>发表的糗事
										</div>
										<button className="pull-right qiushi-delete">删除</button>
									</div>
									<p>看上你闺蜜了</p>
									<Content3 background="#f7f7f7" isQuote="true">
										<div className="other-opinion">
											<a href="javascript:void(0)" className="hoverColor">光光光棍</a> , <a href="javascript:void(0)" className="hoverColor">大胡子很性感！</a>,和另外 <span>87</span> 人评论了这条糗事
										</div>
									</Content3>
								</div>
							</div>
							</div>
						):
					(
						<div className="ctrl-settings" ref="settings">
						<Tip cName="hidden-xs">
							<h3>更换头像</h3>
							<div className="setings-icon">
								<img src="../../images/missing.png" alt="missing"/>
							</div>
							<div>
								<input type="file" className="pull-left"/>
								<input type="button" className="pull-left" value="确定上传"/>
								<div className="clear"></div>
							</div>
							<div>图片支持JPG格式，尺寸小于200x200像素，文件容量2M以内。</div>
						</Tip>
						<Tip cName="hidden-xs">
							<h3>账号绑定</h3>
							<ul>
								<li className="bindOther">
									<a href="javascript:void(0)">绑定微信账号</a><a href="javascript:void(0)" className="hoverColor">解绑</a>
								</li>
								<li className="bindOther">
									<a href="javascript:void(0)">绑定微博账号</a><a href="javascript:void(0)" className="hoverColor">解绑</a>
								</li>
								<li className="bindOther">
									<a href="javascript:void(0)">绑定QQ账号</a><a href="javascript:void(0)" className="hoverColor">解绑</a>
								</li>
								<li className="bindOther">
									<a href="javascript:void(0)">绑定邮箱</a><a href="javascript:void(0)" className="hoverColor">解绑</a>
								</li>
							</ul>
						</Tip>
						<Tip cName="hidden-xs">
							<h3>修改密码</h3>
							<div>
								<div className="changePwd">
									<label htmlFor="previousPwd">当前密码</label>
									<input type="text" id="previousPwd" size="30" required/>
								</div>
								<div className="changePwd">
									<label htmlFor="newPwd">新密码</label>
									<input type="password" id="newPwd" size="30" required/>
								</div>
								<div className="changePwd">
									<label htmlFor="repeatPwd">重复新密码</label>
									<input type="password" id="repeatPwd" size="30" required/>
								</div>
								<button>确认修改</button>
							</div>
						</Tip>
						<Tip cName="hidden-xs">
							<h3>如果您不希望在互联网上公开自己的糗百动态，请设置为关闭</h3>
							<div><a href="javascript:void(0)" className="hoverColor">确认关闭</a></div>
						</Tip>
						<Tip cName="hidden-xs">
							<h3>帐号</h3>
							<div><a href="javascript:void(0)" className="hoverColor">退出登录</a></div>
						</Tip>
						<Tip cName="personal-tip visible-xs">
							<h3>隐私提示</h3>
							<div>如果您不希望在互联网上公开自己的糗百动态，请登陆糗百web版或下载app登陆设置为关闭</div>
						</Tip>
					</div>
						)
				}
			</div>
		)
	}
}