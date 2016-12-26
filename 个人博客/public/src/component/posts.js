import React from 'react'
import Article from './article.js'
import $ from 'jquery'
import {connect} from 'react-redux'
import * as actions from '../action/index.js'

class Posts extends React.Component{
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.getData("posts/getAllPosts")
	}
	render(){
		return (
			<div className="posts-list">
				{this.props.Posts.map(function(item,i){
					return <Article key={i} data={item} />
				})}
			</div>
			)
	}
}

export default connect(
	state=>({Posts:state.getData}),
	actions
)(Posts)

