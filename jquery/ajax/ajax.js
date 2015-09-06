

$(document).ready(function(){
	
	$("#btn").on("click",function(){
		
		$.get("Server.php",{name:$("#namevalue").val()},function(data){
			$("#result").text(data);
		});
		
	});
	
	$("#btn2").on("click",function(){
		
		//加载时的提示:
		$("#result").text("请求数据中...");
		
		$.post("Server.php",{name2:$("#namevalue").val()},function(data){
			//用来看上面加载的效果
			alert("hello");
			
			$("#result").text(data);
		}).error(function(){
			$("#result").text("通讯有问题");
		});
		
	});
	
});
