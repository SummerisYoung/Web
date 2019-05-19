window.onload = function(){
	//1.获取标签
	var progress =document.getElementById('progress');
	var bar = progress.children[0];
	var fg = bar.children[0];
	var mask = bar.children[1];
	var value = progress.children[1];
	
	//2.鼠标按下
	mask.onmousedown = function(event){
		var e = event || window.event;
		
		//2.1获取初始位置
		var offsetLeft = event.clientX - mask.offsetLeft;
		
		//2.2鼠标移动
		document.onmousemove = function(event){
			var e = event || window.event;
			
			//2.3移动位置
			var x = e.clientX - offsetLeft;
			
			//边界
			if(x < 0){
				x = 0;
			}else if(x >= bar.offsetWidth - mask.offsetWidth){
				x = bar.offsetWidth - mask.offsetWidth;
			}
			
			//2.4移动
			mask.style.left = x + 'px';
			fg.style.width = x + 'px';
			value.innerHTML = parseInt(x / (bar.offsetWidth - mask.offsetWidth) * 100) + '%';
			
			return false;
		}
		
		//2.5鼠标抬起
		document.onmouseup = function(){
			document.onmousemove = null;
		}
	}
}