
/**
 * 一排设置了可以放6张图片
 * 第二排的第一张图片,应该放在第一排的高度最小的图片下面
 * 下一张图片依次放在总高度最小的一行的下方
 * 
 * 
 */

$(document).ready(function(){
	
	//监听winwow的load事件
	$(window).on("load",function(){
		imgLocation();
		
		//模拟网络获取的图片,形式为json
		var dataImg = {"data":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"}]};
		
		//监听鼠标滚动时间
		//判断:最后一张图片加载到一半时加载
		window.onscroll = function(){
			
			//满足条件的时候,加载图片
			if(scrollside()){
				
				//遍历dataImg,index是放的位置,value是具体的数值
				$.each(dataImg.data,function(index,value){
					
					//动态创建,先创建box对象,追加在<div id="container">中
					var box = $("<div>").addClass("box").appendTo($("#container"));
					
					//在box中创建对象,追加在<div class="box">中
					var content = $("<div>").addClass("content").appendTo(box);
					
					
					//console.log("./img/"+$(value).attr("src"));
					//在content中创建图片对象,追加在<div class="content">中
					$("<img>").attr("src","./img/"+$(value).attr("src")).appendTo(content);
				});
				//使添加的元素遵循imgLocation的排列规则
				imgLocation();
			}
		};
	});	
});

function scrollside(){
	//
	var box = $(".box");
	
	//得到最后一张图片的总体高度
	//box.last().get(0).offsetTop当前盒子顶端的高度 + 后面本盒子的高度
	var lastboxHeight = box.last().get(0).offsetTop+Math.floor(box.last().height()/2);
	
	//当前容器的高度
	var documentHeight  = $(document).width();
	
	//鼠标滚动的高度
	var scrollHeight = $(window).scrollTop();
	
	//当鼠标滚动的高度加上容器的高度,大于最后一张图片的高度这个边界时,返回true,允许加载接下来的图片
	return (lastboxHeight<scrollHeight+documentHeight)?true:false;
}


/**
 * 
 */
function imgLocation(){
	var box = $(".box");	//得到盒子对象
	
	//确定盒子宽度,通过eq获取第一张图片的高度,因为图片都是等宽的
	//所以获取哪一张图片的宽度都是一样的
	var boxWidth = box.eq(0).width();
	
	//确定一排能摆放多少个num,这里是6
	//获取window设备的宽度,除盒子的宽度,用Math.floor使得除了之后是整数
	var num =Math.floor($(window).width()/boxWidth);
	
	//定义数组,用来储存所有6列的高度,用来获取高度最小一列的盒子
	//以此来确定图片所要放置的位置
	var boxArr=[];
	
	//循环每一行,index确定是哪一行,value确定当前是哪一个元素
	box.each(function(index,value){
		
		
		//console.log(index+"--"+value);
		/**
		 * 0--[object HTMLDivElement]
1--[object HTMLDivElement]
2--[object HTMLDivElement]
3--[object HTMLDivElement]
4--[object HTMLDivElement]
5--[object HTMLDivElement]
6--[object HTMLDivElement]
7--[object HTMLDivElement]
8--[object HTMLDivElement]
		 */
		
		//获取每一个盒子的高度,每一个盒子的索引就是index
		var boxHeight = box.eq(index).height();
		
		//第一排的盒子,不需要判断,直接存储第一排的6个盒子的高度,放在数组中
		if(index<num){		//num在上面计算,是固定数值6
			boxArr[index] = boxHeight;
			//console.log(boxHeight);		//打印每一个盒子的高度
			
			
			
		}else{
			
			//index大于6,即index盒子不在第一排
			
			//获取最小盒子的高度
			var minboxHeight = Math.min.apply(null,boxArr);
			
			//console.log(minboxHeight);		//获取图片的最小高度
			
			//获取最小盒子高度所在的位置
			var minboxIndex = $.inArray(minboxHeight,boxArr);
			//console.log(minboxIndex);	//最小高度盒子的位置
			
			//console.log(value);	//其中value是一个个的div盒子
			
			//对每一个div的css进行设置
			$(value).css({
				"position":"absolute",		//绝对布局
				"top":minboxHeight,			//顶端的距离,就是最小盒子的高度
				"left":box.eq(minboxIndex).position().left	//左边位置
			});
			
			//重新记录当前列的高度
			boxArr[minboxIndex]+=box.eq(index).height();
			
			
		}
	});
}