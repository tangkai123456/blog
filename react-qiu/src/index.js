import React from 'react'
import {
	render
} from 'react-dom'
import Nav from './component/nav.js'
import Main from './component/main.js'
import Foot from './component/foot.js'
import {
	Router,
	Route,
	hashHistory,
	IndexRoute
} from 'react-router'
import Ctrl from './component/ctrl.js'

class Qiu extends React.Component {
	render() {
		return (
			<div>
				<Router history={hashHistory}>
					<Route path="/" component={Nav}>
						<IndexRoute component={Main}/>
						<Route path="/main" component={Main}/>
						<Route path="/ctrl" component={Ctrl}/>
					</Route>
				</Router>
				<Foot/>
			</div>
		)
	}
}

render(
	<Qiu/>,
	document.getElementById("main")
)