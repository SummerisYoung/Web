window.onload = function(){
	//1.获取标签
	var box = document.getElementById('box');
	var small = box.children[0];
	var big = box.children[1];
	var mask = small.children[1];
	var big_img = big.children[0];
	var list_img = document.getElementById('list').children;
	
	//2.鼠标进入
	small.onmouseover = function(){
		//2.1显示隐藏内容
		mask.style.display = 'block';
		big.style.display = 'block';
		
		//2.2鼠标移动
		small.onmousemove = function(event){
			var event = event || window.event;
			
			//2.3鼠标坐标
			var pointX = event.clientX - small.offsetParent.offsetLeft - mask.offsetWidth * 0.5;
			var pointY = event.clientY - small.offsetParent.offsetTop - mask.offsetHeight * 0.5;
			
			//2.4边界检测
			if(pointX < 0){
				pointX = 0;
			}else if(pointX >= small.offsetWidth - mask.offsetWidth){
				pointX = small.offsetWidth - mask.offsetWidth;
			}
			
			if(pointY < 0){
				pointY = 0;
			}else if(pointY >= small.offsetHeight - mask.offsetHeight){
				pointY = small.offsetHeight - mask.offsetHeight;
			}
			
			//2.5放大镜移动
			mask.style.left = pointX + 'px';
			mask.style.top = pointY + 'px';
			
			//2.6大图移动
			big_img.style.left = -pointX / (small.offsetWidth / big.offsetWidth) + 'px';
			big_img.style.top = -pointY / (small.offsetHeight / big.offsetHeight) + 'px';
		}
	};
	
	//3.鼠标离开
	small.onmouseout = function(){
		//2.1显示隐藏内容
		mask.style.display = 'none';
		big.style.display = 'none';
	};
	
	//4.遍历列表图片
	for(var i = 0;i < list_img.length;i++){
		(function (i){
			var img = list_img[i];
			img.onmouseover = function(){
				small.children[0].src = "img/pic00" + (i + 1) + ".jpg";
				big.children[0].src = "img/pic0" + (i + 1) + ".jpg";
			}
		})(i);
	}
}