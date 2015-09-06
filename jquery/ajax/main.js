

$(document).ready(function(){
	$("body").text("正在加载数据...");
	
	//数据在加载过程中,不希望用户做其他操作,就可以先用下面对话框将用户操作挡住
	alert("hello");
	$("body").load("box.htm",function(a,status,c){
		
		console.log(status);
		
		if(status=="error"){
			$("body").text("片段加载失败");
		}
		
	});
	
	//box1.htm不存在,所以会显示错误
	$("body").load("box1.htm",function(a,status,c){
		
		console.log(status);
		
		if(status=="error"){
			$("body").text("片段加载失败");
		}
		
	});
	
	//加载HelloJS.js文件,使用sayHello方法
	$.getScript("HelloJS.js").complete(function(){
		sayHello();
	});
	
});
