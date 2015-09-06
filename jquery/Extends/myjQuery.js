
//不常见
$.myjq = function(){
	alert("调用自定义的jquery的实现");
}

//常见
$.fn.myjq2 = function(){
	$(this).text("$.fn.myjq2 方法被调用");
}