import React from 'react'
import InputArea from './inputArea.js'
import Article from './article.js'
import {connect} from 'react-redux'
import * as actions from '../action/index.js'

class Post extends React.Component{
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.getData("posts/getOnePost/"+this.props.params.id,{flash:true})
	}
	render(){
		if(this.props.data.length){
			return (
				<Article data={this.props.data[0]}>
					<InputArea postId={this.props.data[0]._id}/>
				</Article>
			)
		}else{
			return <div></div>
		}
	}
}

export default connect(
	(state)=>({data:state.getData}),
	actions
)(Post)