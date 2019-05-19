window.onload = function(){
	//1.获取标签
	var nav = $("nav");
	var t_mall = nav.children[0];
	var ul = nav.children[1];
	var allLis = ul.children;
	//记录鼠标点击的位置
	var beginX = 0;
	
	//2.遍历
	for(var i = 0;i < allLis.length;i++){
		var li = allLis[i];
		
		//2.1监听鼠标进入
		li.onmouseover = function(){
			end = this.offsetLeft;
			
		}
		
		//2.2监听鼠标按下
		li.onmousedown = function(){
			beginX = this.offsetLeft;
		}
		
		//2.3监听鼠标离开
		li.onmouseout = function(){
			end = beginX;
		}
	}
	
	//3.缓动动画
	var begin = 0, end = 0;
	setInterval(function(){
		begin += (end - begin) * 0.1;
		t_mall.style.left = begin + 'px';
	}, 10);
}
function $(id){
	return typeof id === "string" ? document.getElementById(id) : null;
}