import React,{PropTypes} from 'react'
import {render} from 'react-dom'
import {Router,Route,hashHistory,IndexRoute} from 'react-router'
import Nav from './component/nav.js'
import Posts from './component/posts.js'
import Post from './component/post.js'
import Write from './component/write.js'
import SignInput from './component/signInput.js'
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import reducer from "./reducer/index.js"
import thunk from 'redux-thunk'
import PlaseWait from './component/pleaseWait.js'
import '../css/index.css'
import 'babel-polyfill'

const store=createStore(reducer,applyMiddleware(thunk))
render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={Nav}>
				<IndexRoute component={Posts}/>
				<Route path="/post/:id" component={Post}/>
				<Route path="/write" component={Write}/>
				<Route path="/sign/:type" component={SignInput}/>
				<Route path="/updatePost/:id" component={Write}/>
				<Route path="/talk" component={PlaseWait}/>
				<Route path="/about" component={PlaseWait}/>
			</Route>
		</Router>
	</Provider>
	,
	document.getElementById("main")
	)
