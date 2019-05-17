window.onload = function(){
	var timer = setInterval(function(){
		$("time").innerText -= 1;
		
		//判断
		if($("time").innerText === "0"){
			//清除定时器
			clearInterval(timer);
			//隐藏时间 
			$("time").style.display = "none";
			$("pic").style.display = "block";
		}
	},1000);
}

function $(id){
	return typeof id === "string" ? document.getElementById(id) : null;
}