import React from 'react'
import InputArea from './inputArea.js'
import {connect} from 'react-redux'
import * as actions from '../action/index.js'

class Write extends React.Component{
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		if(this.props.params.id){
			this.props.getData("posts/getRawPost/"+this.props.params.id)
		}
	}
	render(){
		return (
			<div className="post write-post">
				<h3>{this.props.params.id?"修改":"发表"}</h3>
				<InputArea isPost={true} defaultData={this.props.params.id?this.props.data[0]:""}/>
			</div>
			)
	}
}
export default connect(
	(state)=>({data:state.getData}),
	actions
)(Write)