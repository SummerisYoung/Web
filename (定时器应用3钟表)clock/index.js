window.onload = function(){
	//1.获取标签
	var hour = document.getElementById('hour');
	var minute = document.getElementById('minute');
	var second = document.getElementById('second');
	
	//2.开启定时器
	setInterval(function(){
		//2.1获取当前时间戳
		var date = new Date();
		
		//2.2求出时间
		var millS = date.getMilliseconds();
		var s = date.getSeconds() + millS / 1000;
		var m = date.getMinutes() + s / 60;
		var h = date.getHours() % 12 + m /60;
		
		//2.3旋转
		hour.style.transform = 'scale(0.5) rotate(' + h * 30 + 'deg)';
		minute.style.transform = 'scale(0.6) rotate(' + m * 6 + 'deg)';
		second.style.transform = 'scale(0.7) rotate(' + s * 6 + 'deg)';
	},10);
}