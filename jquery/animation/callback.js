

$(document).ready(function(){
	
	$("#btn1").click(function(){
		
		$("p").hide(1000,function(){
			alert("动画结束,这个方法被回调callback");
		});
	});
	
	$("#btn2").click(function(){
		$("p").css("color","red").slideUp(1000).slideDown(1000);
	});
	
});
