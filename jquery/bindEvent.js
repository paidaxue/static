

$(document).ready(function(){
	
	//这样实现的缺点:当事件特别多,文档特别大,书写的代码过于庞大的时候,很占用内存
	//可以使用绑定和解除绑定来优化
	/*$("#clickMeBtn").click(function(){
		alert("hello");
	})*/
	
	//$("#clickMeBtn").bind("click",clickHandler1);
	//可以同时触发两个事件
	//$("#clickMeBtn").bind("click",clickHandler2);
	
	//解除绑定,上面的clickHandler2不会输出log
	//第二个参数clickHandler2不填写,将所有的log都不会输出
	//$("#clickMeBtn").unbind("click",clickHandler2);
	
	
	
	//jquery1.7之后,可以用on和off 来代替bind和unbind
	$("#clickMeBtn").on("click",clickHandler1);
	$("#clickMeBtn").on("click",clickHandler2);
	$("#clickMeBtn").off("click",clickHandler2);
	
	
	
	$("#clickMeBtn").unbind("click",clickHandler2);
	
	function clickHandler1(e){
		console.log("触发事件clickHandler1");
		alert("使用绑定事件触发的");
	}
	
	function clickHandler2(e){
		console.log("触发事件clickHandler2");
		
	}
	
	
	
});