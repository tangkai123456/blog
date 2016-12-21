import React from 'react'
import Article from './article.js'

export default class Posts extends React.Component{
	render(){
		return (
			<div>
				<Article/>
				<Article/>
				<Article/>
			</div>
			)
	}
}