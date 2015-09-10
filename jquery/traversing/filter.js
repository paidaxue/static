

/**
 * 过滤方法
 * first()
 * last()
 * eq()
 * filter()
 * not()
 * 
 */

$(document).ready(function(){
	
	//寻找同样元素中的第一个
	/*$("div p").first().css({
		"background-color":"red"
	});
	
	$("div p").last().css({
		"background-color":"green"
	});
	
	//eq传入的值是0,影响的是div1
	$("div p").eq(0).css({
		"background-color":"green"
	});*/
	
	//div下面的p元素中,所有p元素都会影响
	$("div p").filter("p").css({
		"background-color":"green"
	});
	
	//刚好跟filter相反
	$("div p").not("p").css({
		"background-color":"green"
	});
	
});