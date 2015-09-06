

$(document).ready(function(){
	
	$("#in").on("click",function(){
		
		//淡入
		$("#div1").fadeIn(1000);
		$("#div2").fadeIn(1000);
		$("#div3").fadeIn(1000);
		
	});
	
	$("#out").on("click",function(){
		
		//淡出
		$("#div1").fadeOut(1000);
		$("#div2").fadeOut(1000);
		$("#div3").fadeOut(1000);
		
	});
	
	$("#toggle").on("click",function(){
		
		//淡入淡出
		$("#div1").fadeToggle(1000);
		$("#div2").fadeToggle(1000);
		$("#div3").fadeToggle(1000);
		
	});
	
	$("#to").on("click",function(){
		
		//透明度,1000是时间,0.5是透明度,0 - 1
		$("#div1").fadeTo(1000,0.5);
		$("#div2").fadeTo(1000,0.7);
		$("#div3").fadeTo(1000,0.3);
		
	});
	
	
});
