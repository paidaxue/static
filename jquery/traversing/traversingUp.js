

/**
 * 向上遍历
 * parent()		只能寻找直接父类,只能一层
 * parents()		全部层级父类都会遍历到
 * parentUntil()	在两个类层级之间遍历
 */

$(document).ready(function(){
	
	$("a").parent().css({
		border:"3px solid #ff0000"
	});
	
	$("a").parentsUntil("#div1").css({
		border:"3px solid #ff0000"
	});
	
	
});