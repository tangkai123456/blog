import React from 'react'
/**
 * 投稿组件
 */
export default class Write extends React.Component {
	render() {
		return (
			<section className="container write">
				<div className="write-input pull-left">
					<textarea rows="15" placeholder="分享一件新鲜事..."></textarea>
					<div className="write-file">
						<div className="pull-left">照片：<input type="file"/></div>
						<div className="pull-right"><input type="checkbox"/> 匿名投稿</div>
						<div className="clear"></div>
					</div>
					<div className="clear"></div>
					<div className="write-submit">
						<button className="pull-left">投递</button>
						<span className="pull-right"><span>260</span>字</span>
					</div>
				</div>
				<div className="write-tips pull-right hidden-xs">
					<h4>投稿须知</h4>
					<ol>
						<li>自己的或朋友的糗事，真实有笑点，不含政治、色情、广告、诽谤、歧视等内容。</li>
						<li>糗事经过审核后发表。</li>
						<li>转载请注明出处。</li>
						<li>我已阅读并同意糗事百科的<a href="javascript:void(0)" className="hoverColor">《用户协议》</a>以及<a href="javascript:void(0)" className="hoverColor">《隐私政策》</a></li>
					</ol>
				</div>
			</section>
		)
	}
}