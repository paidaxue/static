/**
 * append	在被选中元素结尾插入内容
 * prepend	在被选中元素开头插入内容
 * before	在被选中元素之前插入内容
 * after	在被选中元素之后插入内容
 */



$(document).ready(function(){
	
	/**原来内容
	 * <p id="p1">Hello World</p>
	 */
	
	$("#btn1").click(function(){		
		/**
		 * <p id="p1">Hello World这是append添加的内容</p>
		 */
		$("#p1").append("这是append添加的内容");		
		$("#p1").prepend("在元素之前添加的内容");
	});
	
	$("#btn2").click(function(){		
		
		$("#p2").before("before插入的内容");
		$("#p2").after("after插入的内容");
		
	});
	
});

/**
 * 追加新的元素
 */
function appendText(){
	/**
	 * html,jquery,dom
	 */
	
	var text1 = "<p>通过html添加元素</p>";
	var text2 = $("<p></p>").text("通过jquery添加元素");
	var text3 = document.createElement("p");
	text3.innerHTML = "通过dom添加元素";
	$("body").append(text1,text2,text3);
	
}