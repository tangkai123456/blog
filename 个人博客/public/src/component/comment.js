import React from 'react'

export default class Comment extends React.Component{
	render(){
		return (
				<div className="aComment">
					<span className="comment-user">zhangyu:</span>&nbsp;<span className="comment-content">this is a comment</span>
				</div>
			)
	}
}