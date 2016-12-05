import React from 'react'
import Content from './content.js'
import Aside from './aside.js'
import Page from './page.js'

export default class Main extends React.Component {
	render() {
		return (
			<section className="container main">
				<div className="row">
					<div className="col-sm-8 col-xs-12">
						<Content/>
						<Content/>
						<Content/>
						<Content/>
						<Page/>
					</div>
					<div className="col-sm-4 hidden-xs">
						<Aside/>
					</div>
				</div>
			</section>
		)
	}
}