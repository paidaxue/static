

/**
 * 同级遍历
 * sibings()
 * next()
 * nextAll()
 * nextUntil()
 * prev()
 * preAll()
 * preUntil()
 */

$(document).ready(function(){
	
	//将同级的其他元素,边框都修改为红色,自己h4不修改
	/*$("h4").siblings().css({
		border:"3px solid #ff0000"
	});*/
	
	//修改下一个元素,本例是h5
	/*$("h4").next().css({
		border:"3px solid #ff0000"
	});*/
	
	//修改h4之后的同级所有元素
	/*$("h4").nextAll().css({
		border:"3px solid #ff0000"
	});*/
	
	//向下,修改h4和h6之间的所有元素
	/*$("h4").nextUntil("h6").css({
		border:"3px solid #ff0000"
	});*/
	
	//prev刚好跟next三个的方向相反
	
});