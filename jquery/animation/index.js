

$(document).ready(function(){
	
	$("#hide").click(function(){
		
		//$("p").hide();
		
		//一秒隐藏
		$("p").hide(1000);
	});
	
	$("#show").click(function(){
		
		//$("p").show();
		
		//一秒显示
		$("p").show(1000);
	});	
	
	$("#toggle").click(function(){
		
		//$("p").show();
		
		//显示/隐藏切换
		$("p").toggle(1000);
	});
	
	//hide,show,toggle更多属性参考api
	
	
	
});
