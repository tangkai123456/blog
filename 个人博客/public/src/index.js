import React from 'react'
import {render} from 'react-dom'
import {Router,Route,hashHistory,IndexRoute} from 'react-router'
import Nav from './component/nav.js'
import Posts from './component/posts.js'
import Post from './component/post.js'
import Write from './component/write.js'
import SignInput from './component/signInput.js'


render(
	<Router history={hashHistory}>
		<Route path="/" component={Nav}>
			<IndexRoute component={Posts}/>
			<Route path="/post" component={Post}/>
			<Route path="/write" component={Write}/>
			<Route path="/sign/:type" component={SignInput}/>
		</Route>
	</Router>,
	document.getElementById("main")
	)
