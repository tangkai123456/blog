Zepto(function($) {
	console.log($)
	$(".h5_component_name_slogan").swipeDown(function() {
		$(this).animate({
			top: "250px"
		})
		$(".h5_component_name_welcome").animate({
			opacity: 1,
			left: "50%"
		}).swipeRight(function() {
			$(this).animate({
				left: "500px",
				opacity: 0
			});
			$(".h5_component_name_slogan").animate({
				top: "200px"
			})
		}).swipeLeft(function() {
			$(this).animate({
				right: "500px",
				opacity: 0
			});
			$(".h5_component_name_slogan").animate({
				top: "200px"
			})
		})
	})
	$(".h5_component_name_description").swipeLeft(function() {
		$(this).animate({
			transform: "rotateY(-360deg)"
		}, 1500)
	})
	$(".h5_component_name_description").swipeRight(function() {
		$(this).animate({
			transform: "rotateY(360deg)"
		}, 1500)
	})
	$(".h5_component_name_description").singleTap(function() {
		var text = $(".h5_component_name_text");
		var o = text.css("opacity")
		o = (o == 0 ? 1 : 0);
		$(".h5_component_name_text").animate({
			opacity: o
		})
		$(".h5_component_name_people").animate({
			opacity: 1
		})
	})
	$(".h5_component_name_polyline").swipeLeft(function() {
		$(this).trigger("onLeave");
		$(this).parent().swipeRight(function() {
			$(".h5_component_name_polyline").trigger("afterLoad");
		})
	})
	$(".h5_component_name_pie").swipeLeft(function() {
		$(this).trigger("onLeave");
		$(this).parent().swipeRight(function() {
			$(".h5_component_name_pie").trigger("afterLoad");
		})
	})
	$(".h5_component_name_bar").swipeLeft(function() {
		$(this).trigger("onLeave");
		$(this).parent().swipeRight(function() {
			$(".h5_component_name_bar").trigger("afterLoad");
		})
	})
	$(".h5_component_name_radar").swipeLeft(function() {
		$(this).trigger("onLeave");
		$(this).parent().swipeRight(function() {
			$(".h5_component_name_radar").trigger("afterLoad");
		})
	})
	$(".h5_component_name_point").swipeLeft(function() {
		$(this).trigger("onLeave");
		$(this).parent().swipeRight(function() {
			$(".h5_component_name_point").trigger("afterLoad");
		})
	})

})