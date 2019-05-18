window.onload = function(){
	//1.获取标签
	var allLis = document.getElementsByTagName('li');
	var allImages = document.getElementsByTagName('img');
	
	var loop = 0;
	
	//2.定时器
	setInterval(function(){
		//2.1索引++
		loop += 1;
		loop %= 10;
		console.log(loop);
		//2.2排他
		for(var i = 0;i < allLis.length;i++){
			allLis[i].className = '';
			allImages[i].style.display = 'none';
		}
		
		//2.3选中
		allLis[loop].className = 'current';
		allImages[loop].style.display = 'block';
	},1000);
}