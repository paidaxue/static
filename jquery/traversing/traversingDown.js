

/**
 * 向下遍历:
 * children
 * find
 */

$(document).ready(function(){
	
	//写法1
	$("#div1").children().css({
		border:"3px solid #ff0000"
	});
	
	//写法2
	$("#div2").children("#p1").css({
		border:"3px solid #ff4444"
	});
	
	//children可以替换成find,children只向下遍历1级,find可以隔级遍历
	
});