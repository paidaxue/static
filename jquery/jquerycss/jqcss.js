



$(document).ready(function(){
	
	//写法1
	/*$("div").css("width","100px");
	$("div").css("height","100px");
	$("div").css("background","#eeeeee");*/
	
	//写法2
	/*$("#div1").css({
		width:"100px",
		height:"100px",
		backgroundColor:"#00ff00"
	});*/
	
	//加载css文件中的style2这个class
	$("#div1").addClass("style2");
	
	$("#div1").click(function(){
		$(this).addClass("style3");
	});
	

	$("#div2").addClass("style2");
	//移除样式
	$("#div2").click(function(){
		$(this).removeClass("style2");
	});
	
	$("#div3").addClass("style3");
	$("#div3").click(function(){
		$(this).toggleClass("style2");
	});
	
	
});