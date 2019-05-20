var timer = null, num = 0;

window.onload = function(){
	//1.获取标签
	var box = document.getElementById('box');
	var pic = document.getElementById('pic');
	var to_top = document.getElementById('to_top');
	var to_bottom = document.getElementById('to_bottom');
	
	//2.监听鼠标事件
	to_bottom.onmouseover = function(){
		move(-5);
	}
	
	to_top.onmouseover = function(){
		move(5);
	}

	box.onmouseout = function(){
		//清除定时器
		clearInterval(timer);
	}
}

function move(length){
	//1清除定时器
	clearInterval(timer);
	
	//2设置定时器
	timer = setInterval(function(){
		//步长
		num += length;
		
		//判断
		if(num >= -800 && 0 >= num){
			pic.style.top = num + 'px';
		}else{
			clearInterval(timer);
		}
		
	},20);
}