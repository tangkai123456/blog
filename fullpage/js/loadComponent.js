var h5 = new H5();
// 所有页面加载时，都添加右下角“滑动观看”组件
h5.whenAddPage = function() {
	this
		.addComponent("slide_up_right", {
			bg: "images/footer.png",
			width: 640,
			height: 39,
			css: {
				left: 0,
				bottom: -20,
				zIndex: 110,
				opacity: 0
			},
			animateIn: {
				opacity: 1,
				bottom: 7
			},
			animateOut: {
				opacity: 0,
				bottom: -20
			},
			delay: 500
		})
};
//加载页面所以有组件
h5
//第一页
	.addPage("face")

.addComponent("topic", {
	center: true,
	width: 395,
	height: 130,
	bg: "images/face_logo.png",
	css: {
		opacity: 0
	},
	animateIn: {
		top: 100,
		opacity: 1
	},
	animateOut: {
		top: 0,
		opacity: 0
	}
})

.addComponent("welcome", {
		width: 500,
		height: 30,
		center: true,
		text: "welcome",
		css: {
			opacity: 0,
			top: 180,
			textAlign: "center",
			color: "white",
			fontSize: "40px"
		},
		animateOut: {
			opacity: 0
		}
	})
	.addComponent("slogan", {
		center: true,
		width: 365,
		height: 99,
		bg: "images/face_slogan.png",
		css: {
			opacity: 0,
			top: 180
		},
		animateIn: {
			left: "50%",
			opacity: 1
		},
		animateOut: {
			left: 0,
			opacity: 0
		},
		delay: 500
	})
	.addComponent("face_img_left", {
		width: 370,
		height: 493,
		bg: "images/face_img_left.png",
		css: {
			opacity: 0,
			left: -50,
			bottom: -50,
		},
		animateIn: {
			opacity: 1,
			left: 0,
			bottom: 0
		},
		animateOut: {
			opacity: 0,
			left: -50,
			bottom: -50
		},
		delay: 1000
	})

.addComponent("face_img_right", {
		width: 276,
		height: 449,
		bg: "images/face_img_right.png",
		css: {
			opacity: 0,
			right: -50,
			bottom: -50,
		},
		animateIn: {
			opacity: 1,
			right: 0,
			bottom: 0
		},
		animateOut: {
			opacity: 0,
			right: -50,
			bottom: -50
		},
		delay: 1000
	})
	//第二页
	.addPage("second")

.addComponent("caption", {
	text: "核心理念",
})

.addComponent("text", {
	width: 500,
	height: 30,
	center: true,
	text: "只学有用的",
	css: {
		opacity: 0,
		top: 120,
		textAlign: "center",
		color: "red",
		fontSize: "26px"
	},
	animateOut: {
		opacity: 0
	}
})

.addComponent("description", {
	width: 481,
	height: 295,
	center: true,
	bg: "images/description_bg.gif",
	css: {
		opacity: 0,
		padding: "15px 10px 10px",
		color: "white",
		fontSize: "15px",
		lineHeight: "18px",
		textAlign: "justify",
		top: 240
	},
	text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam officia, aspernatur, ad quaerat ipsum nihil quod iste asperiores doloribus dolorum possimus eum beatae, ",
	animateIn: {
		opacity: 1,
		top: 160
	},
	animateOut: {
		opacity: 0,
		top: 240
	},
	delay: 500
})

.addComponent("people", {
		center: true,
		width: 515,
		height: 305,
		bg: "images/p1_people.png",
		css: {
			opacity: 0,
			bottom: 40
		},
		animateOut: {
			opacity: 0
		}
	})
	//第三页
	.addPage()
	//polyline
	.addComponent("caption", {
		text: "课程分布方向"
	})

.addComponent("polyline", {
	type: "polyline",
	data: [
		["Javascript", .4, "green"],
		["HTML", .5, "yellow"],
		["css3", .1, "red"],
		["jq", .3, "red"],
		["bootstrap", .7],
	],
	width: 530,
	css: {
		top: 20,
		opacity: 0
	},
	height: 400,
	center: true,
	animateIn: {
		top: "30%",
		opacity: 1,
	},
	animateOut: {
		top: 0,
		opacity: 0,
	}
})

.addComponent("msg", {
		text: "前端开发课程占到40%",
		css: {
			opacity: 0,
			top: 140,
			textAlign: "center",
			width: "100%",
			color: "#ff7676"
		},
		animateIn: {
			opacity: 1
		},
		animateOut: {
			opacity: 0
		},
		delay: 1000
	})
	//第三页
	.addPage()
	//pie
	.addComponent("caption", {
		text: "移动开发课程资源"
	})

.addComponent("pie", {
		type: "pie",
		data: [
			["Javascript", .4, "green"],
			["jq", .3, "blue"],
			["angular", .2],
			["css3", .1, "red"],
		],
		height: 400,
		width: 400,
		css: {
			top: "40%",
			opacity: 0
		},
		center: true,
		animateIn: {
			opacity: 1,
		},
		animateOut: {
			opacity: 0,
		}
	})
	//第四页
	.addPage()
	//bar
	.addComponent("caption", {
		text: "前端开发课程资源"
	})

.addComponent("bar", {
		type: "bar",
		data: [
			["Javascript", .4, "green"],
			["HTML", .3, "yellow"],
			["css3", .2, "red"],
			["jq", .1, "red"],
			["bootstrap", .05],
		],
		width: 530,
		height: 600,
		css: {
			top: "0",
			opacity: 0
		},
		center: true,
		animateIn: {
			top: "40%",
			opacity: 1,
		},
		animateOut: {
			top: 0,
			opacity: 0,
		}
	})
	//第五页
	.addPage()
	//radar
	.addComponent("caption", {
		text: "后端开发课程资源"
	})

.addComponent("radar", {
		type: "radar",
		data: [
			["java", .7, "green"],
			["php", .5, "yellow"],
			["c、c++", .2, "red"],
			["nodejs", .1, "red"],
			[".Net", .3],
		],
		height: 400,
		width: 400,
		css: {
			top: 20,
			opacity: 0
		},
		center: true,
		animateIn: {
			top: "40%",
			opacity: 1,
		},
		animateOut: {
			top: 0,
			opacity: 0,
		}
	})
	//第六页
	.addPage()
	//point
	.addComponent("caption", {
		text: "课程难度分布"
	})

.addComponent("point", {
		type: "point",
		data: [
			["大数据", .4, "green"],
			["java", .2, "yellow", 0, "-60%"],
			["HTML", .2, "red", 0, "120%"]
		],
		width: 300,
		height: 300,
		css: {
			top: "20%",
			opacity: 0
		},
		center: true,
		animateIn: {
			top: "40%",
			opacity: 1,
		},
		animateOut: {
			top: "20%",
			opacity: 0,
		}
	})
	//第七页
	.addPage("tail")

.addComponent("logo", {
	center: true,
	width: 359,
	bg: "images/tail_logo.png",
	css: {
		height: "310px",
		top: 0,
		opacity: 0
	},
	animateIn: {
		opacity: 1,
		top: 100
	},
	animateOut: {
		opacity: 0,
		top: 0
	}
})

.addComponent("slogan", {
	center: true,
	width: 314,
	height: 46,
	bg: "images/tail_slogan.png",
	css: {
		opacity: 0,
		top: 200,
		left: 0
	},
	animateIn: {
		left: "50%",
		opacity: 1
	},
	animateOut: {
		left: 0,
		opacity: 0
	},
	delay: 500
})

.addComponent("share", {
	width: 128,
	height: 120,
	bg: "images/tail_share.png",
	css: {
		opacity: 0,
		top: 110
	},
	animateIn: {
		top: 10,
		opacity: 1,
		right: 10
	},
	animateOut: {
		top: 110,
		opacity: 0,
		right: 110
	},
	delay: 1000
})

.addComponent("back", {
		center: true,
		width: 52,
		height: 50,
		bg: "images/tail_back.png",
		css: {
			opacity: 0
		},
		animateIn: {
			opacity: 1
		},
		animateOut: {
			opacity: 0
		},
		onclick: function() {
			$.fn.fullpage.moveTo(1)
		}
	})
	//设置fullpage全屏滚动插件
	.loader(["images/weix.jpg", "images/tail_slogan.png", "images/tail_share.png", "images/tail_back.png"]);