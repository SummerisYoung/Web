window.onload = function(){
	//1.获取时间标签
	var time = document.getElementById('time');
	
	//2.自定义将来时间
	var nextDate = new Date('2020/03/01 08:17:35');
	
	//3.开启定时器
	setInterval(function(){
		//4.获取现在时间
		var currentDate = new Date();
		
		//5.获取时间戳
		var currentTime = currentDate.getTime();
		var nextTime = nextDate.getTime();
		
		//6.剩下的时间戳
		var allTime = nextTime - currentTime;
		
		//7.时间转化
		var allSecond = size(parseInt(allTime / 1000));
		var d = size(parseInt(allSecond / 3600 / 24));
		var h = size(parseInt(allSecond / 3600 % 24));
		var m = size(parseInt(allSecond / 60 % 60));
		var s = size(parseInt(allSecond % 60));
		
		//8.拼接时间
		time.innerText = "距离放假还有" + d + "天" + h + "小时" + m + "分钟" + s + "秒"; 
	},1000);
}

function size(num){
	return num >= 10 ? num : '0' + num;
}