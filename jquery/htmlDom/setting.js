



$(document).ready(function(){
	
	$("#btn1").click(function(){		
		//设置元素
		$("#p1").text("p1的内容被修改了");
	});
	
	$("#btn2").click(function(){		
		//设置元素
		$("#p2").html("<b>更改了内容</b>");
	});
	
	$("#btn3").click(function(){		
		//设置元素
		$("#i3").val("hello world被修改了");
	});

	
	$("#btn4").click(function(){		
		//设置元素
		$("#aid").attr("href","http://www.sina.com");
	});	
	
	$("#btn4").click(function(){		
		//设置元素
		$("#aid").attr("href","http://www.sina.com");
	});	
	
	
	$("#btn5").click(function(){		
		//设置多个属性
		$("#aid2").attr({
			"href":"http://www.sina.com",
			"title":"hello"
		});
	});	
	
	
	$("#btn6").click(function(){		
		//回调
		$("#p5").text(function(i,ot){
			return "old:"+ot+"   new:这是新的内容"+(i);
		})
	});	

});