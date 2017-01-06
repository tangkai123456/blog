import React,{PropTypes} from 'react'
import InputArea from './inputArea.js'
import Article from './article.js'
import {connect} from 'react-redux'
import * as actions from '../../action/index.js'
import QueueAnim from 'rc-queue-anim'
var Loader = require('halogen/ClipLoader');

class Post extends React.Component{
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.getData("posts/getOnePost/"+this.props.params.id,{flash:true})
	}
	render(){
		if(this.props.data.length){
			if(this.props.data[0].comments){
				return (
					<QueueAnim animConfig={[{ opacity: [1, 0]},{ opacity: [1, 0]}]}>
						<Article data={this.props.data[0]} key="a">
							<InputArea postId={this.props.data[0]._id}/>
						</Article>
					</QueueAnim>
				)
			}else{
				return <Loader color="#654321" size="50px" margin="4px" className="loading-icon"/>
			}
			
		}else{
			return <div></div>
		}
	}
}

Post.PropTypes={
	data:PropTypes.array.isRequired,
	getData:PropTypes.func.isRequired
}

export default connect(
	(state)=>({data:state.getData}),
	actions
)(Post)