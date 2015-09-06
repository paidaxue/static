

$(document).ready(function(){
	
	$("#flipshow").click(function(){
		
		$("#content").slideDown(1000);
		
	});
	
	$("#fliphide").click(function(){
		
		$("#content").slideUp(1000);
		
	});
	
	$("#fliptoggle").click(function(){
		
		$("#content").slideToggle(1000);
		
	});
	
});
