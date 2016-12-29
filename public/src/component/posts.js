import React,{PropTypes} from 'react'
import Article from './article.js'
import $ from 'jquery'
import {connect} from 'react-redux'
import * as actions from '../action/index.js'
import QueueAnim from 'rc-queue-anim'
var Loader = require('halogen/ClipLoader');


class Posts extends React.Component{
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.getData("posts/getAllPosts")
	}
	render(){
		/*posts文章页的数据长度大于1时，才显示内容，是因为在单文章页切换回来时，
		加载数据会因为网速原因造成Article组件的内容闪烁。
		所以为了妥协，设置了一个有瑕疵的判断，这个判断会造成只有一篇文章时不显示。*/
		if(this.props.Posts.length>1){
			return (
				<div className="posts-list">
					<QueueAnim animConfig={[{ opacity: [1, 0], translateY: [0, 50] },{ opacity: [1, 0], translateY: [0, -50] }]}>
					{this.props.Posts.map(function(item,i){
						return <Article key={i} data={item} />
					})}
					</QueueAnim>
				</div>
				)	
		}else{
			return <Loader color="#654321" size="50px" margin="4px" className="loading-icon"/>
		}
	}
}

Posts.PropTypes={
	Posts:PropTypes.array.isRequired,
	getData:PropTypes.func.isRequired
}

export default connect(
	state=>({Posts:state.getData}),
	actions
)(Posts)

