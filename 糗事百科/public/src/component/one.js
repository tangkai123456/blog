import React from 'react'
import Aside from './aside.js'
import Content from './content.js'
import Comment from './comment.js'
import FirstBig from './firstBig.js'
import $ from 'jquery'
import {
	Link
} from 'react-router'
/**
 * 页面显示一条段子的组件
 */


export default class One extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {
				content: {
					comment: {

					}
				}
			},
			godComments: [],
			comments: [],
		}
	}
	componentDidMount() {
		$.ajax({
			url: "http://localhost:3000/getOne?userid=" + this.props.params.userid,
			method: "get",
			dataType: "json",
			success: function(res) {
				this.setState({
					data: res
				})
			}.bind(this)
		})
		$.ajax({
			url: "http://localhost:3000/comment?index=" + this.props.params.index,
			method: "get",
			dataType: "json",
			success: function(res) {
				this.setState({
					godComments: res.hot,
					comments: res.gen
				})
			}.bind(this)
		})
	}
	render() {
		if (this.state.godComments.length != 0 && this.state.comments.length != 0) {
			return (
				<section className="container main">
				<div className="row">
					<div className="col-sm-8 col-xs-12">
						<Content isHidden={true} data={this.state.data}>
							<div className="nextOrLast">
								<button className="last">上一条</button>
								<button className="next">下一条，你懂的</button>
								<button className="savePage">收藏本页面</button>
							</div>
						</Content>
						<div className="Comment">
							<div className="godComment-head">
								<img src="../../images/cmt-god.png" alt="神"/>神评论
							</div>
							{this.state.godComments.map(function(item,i){
								return <Comment key={i} data={item}/>
							})}
						</div>
						<div className="firstBig-block hidden-xs">
							<FirstBig/>
							<FirstBig/>
							<FirstBig/>
							<FirstBig/>
							<FirstBig/>
							<FirstBig/>
						</div>
						<div className="Comment general-comment">
							<div>
								评论（156）
							</div>
							{this.state.comments.map(function(item,i){
								return <Comment key={i} data={item} isGen={true}/>
							})}
						</div>
						<div className="oneComment-footer hidden-xs">
							<h5>你可能喜欢的图片笑话</h5>
							<div className="firstBig-block">
								<FirstBig/>
								<FirstBig/>
								<FirstBig/>
								<FirstBig/>
								<FirstBig/>
								<FirstBig/>
							</div>
							<h5>最受欢迎的爆笑笑话</h5>
							<div className="firstBig-block">
								<FirstBig/>
								<FirstBig/>
								<FirstBig imgUrl="../../images/app117768971.jpg"/>
								<FirstBig/>
								<FirstBig/>
								<FirstBig/>
							</div>
						</div>
					</div>
					<div className="col-sm-4 hidden-xs">
						<Aside/>
					</div>
				</div>
			</section>
			)
		} else {
			return <div></div>
		}

	}
}