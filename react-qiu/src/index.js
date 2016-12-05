import React from 'react'
import {
	render
} from 'react-dom'
import Nav from './component/nav.js'
import Main from './component/main.js'
import Foot from './component/foot.js'

class Qiu extends React.Component {
	render() {
		return (
			<div>
				<Nav/>
				<Main/>
				<Foot/>
			</div>
		)
	}
}

render(
	<Qiu/>,
	document.getElementById("main")
)