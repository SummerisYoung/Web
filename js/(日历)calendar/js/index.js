window.onload = function(){
	//1.创建日期对象
	var date = new Date();
	
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var week = date.getDay();
	var weeks = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
	
	//2.赋值
	$('box_top').innerText = year + '年' + month + '月' + day + '日 ' + weeks[week];
	$('box_bottom').innerText = day;
}

function $(id){
	return typeof id === "string" ? document.getElementById(id) : null;
}