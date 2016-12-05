import React from 'react'

export default class Page extends React.Component {
	render() {
		return (
			<div className="page">
				<span className="visible-xs">第</span>
				<button className="hidden-xs">&lt;</button>
				<button>1</button>
				<button>2</button>
				<button>3</button>
				<button>4</button>
				<button>5</button>
				<span className="visible-xs">页</span>
				<span className="hidden-xs">...</span>
				<button className="hidden-xs">35</button>
				<button className="activeBtn next">下一页 »</button>
			</div>
		)
	}
}