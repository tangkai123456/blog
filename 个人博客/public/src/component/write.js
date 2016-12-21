import React from 'react'
import InputArea from './inputArea.js'

export default class Write extends React.Component{
	render(){
		return (
			<div className="post">
				<InputArea isPost={true}/>
			</div>
			)
	}
}