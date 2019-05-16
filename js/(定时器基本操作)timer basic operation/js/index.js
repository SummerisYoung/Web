window.onload = function(){
	//1.获取标签
	var btn1 = document.getElementById("btn1");
	var btn2 = document.getElementById("btn2");
	
	var height = 150,timer = null;
	
	//2.开启定时器
	btn1.onclick = function(){
		//2.1设置定时器
		timer = setInterval(function(){
			height += 1;
			console.log("定时器时间" + height);
		},1000);
	}
	
	//3.关闭定时器
	btn2.onclick = function(){
		clearInterval(timer);
		console.log("定时器已关闭");
	}
}