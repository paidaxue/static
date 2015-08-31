
/** 通过点击button对p元素修改 */
$(document).ready(function(){
	
	
	
	$("button").click(function(){
		
		//元素选择器:
		$("p").text("元素选择器:p元素的内容被修改成这个内容");
		
		//id选择器
		$("#pid").text("id选择器:通过id修改了这个内容");
		
		
		//类选择器
		$(".pclass").text("类选择器:通过类选择器修改这个内容");
		
		//更多选择器查询API
		
	});
	
	
});