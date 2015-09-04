

var clickMeBtn;

$(document).ready(function(){
	
	//注意这种写法比较方便,下面都可以使用clickMeBtn来替代 $("#clickMeBtn")
	clickMeBtn = $("#clickMeBtn");
	
	clickMeBtn.click(function(){
		
		var e = jQuery.Event("MyEvent");
		clickMeBtn.trigger(e);
		
	});
	
	clickMeBtn.bind("MyEvent",function(event){
		
		//输出中
		//type: "MyEvent"
		//是一个全新的事件
		console.log(event);
	})
	
});