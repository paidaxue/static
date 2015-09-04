

$(document).ready(function(){
	
	
	
	//事件冒泡
	$("body").bind("click",bodyHandler);
	
	$("div").bind("click",divHandler);
});

function bodyHandler(event){
	//点击页面后,会输出大量事件信息
	//target是body
	conlog("body");
	conlog(event);
}


function divHandler(event){
	//点击页面后,会输出大量事件信息
	//target是div
	conlog("div");
	conlog(event);
	
	//阻止事件冒泡
	//event.stopPropagation();
	//event.stopImmediatePropagation()
}

//不是所有的浏览器都支持console
function conlog(event){
	//如果出现错误,直接注释掉下面这一行,所有的上面conlog输出就不会报错
	console.log(event);
}

