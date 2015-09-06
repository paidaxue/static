

$(document).ready(function(){
	
	$("#btn").on("click",function(){
		
		$.get("Server.php",{name:$("#namevalue").val()},function(data){
			$("#result").text(data);
		});
		
	});
	
	$("#btn2").on("click",function(){
		
		$.post("Server.php",{name2:$("#namevalue").val()},function(data){
			$("#result").text(data);
		});
		
	});
	
});
