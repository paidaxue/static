



$(document).ready(function(){
	
$("#btn1").click(function(){	
		//点击按钮,获得id为text的内容
		alert("获得的文本:"+$("#text").text());
		//输出:
		//this is my html_dom这是一个a标签
	});

	
	

	$("#btn1").click(function(){	
		//点击按钮,获得id为text的内容
		alert("获得的文本:"+$("#text").html());
		//输出:
		//this is my html_dom<a>这是一个a标签</a>
		//区别:html()可以获得子标签,text()只能获得内容
	});

	
	
	//点击按钮,获得输入框里面的内容
	$("#btn1").click(function(){		
		alert("获得的文本:"+$("#it").val());
	});
	
	//获得元素属性
	$("#btn2").click(function(){		
		//获得id为aid,href这个属性的内容
		alert("获得的元素属性:"+$("#aid").attr("href"));
	});
	
});