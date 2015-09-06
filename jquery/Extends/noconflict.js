
//消除$作为jQuery的做些,定义myjq来缩写,这样就不用担心$被其他框架使用的问题
var myjq = $.noConflict();

//不定义myjq,可以直接写jQuery.eg.  jQuery.(document).ready(function(){

myjq(document).ready(function(){
	
	myjq("#btn").on("click",function(){
		
		myjq("div").text("new hello");
		
	});
	
});