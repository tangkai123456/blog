import React from 'react'
import Content from './content.js'
import Aside from './aside.js'
import Page from './page.js'
import $ from 'jquery'
/**
 * 主页组件
 */
export default class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		}
	}
	componentDidMount() {
		$.ajax({
			url: "http://localhost:3000/getAll",
			method: "get",
			dataType: "json",
			success: function(res) {
				this.setState({
					data: res
				})
			}.bind(this)
		})
	}
	render() {
		return (
			<section className="container main">
				<div className="row">
					<div className="col-sm-8 col-xs-12">
						{this.state.data.map(function(item,i){
							return <Content key={i} data={item} index={i}/>
						})}
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