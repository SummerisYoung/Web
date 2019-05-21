window.onload = function(){
	//1.实现瀑布流布局
	waterfull("main","box");
	var timer = null;
	//2.动态加载图片
	window.onscroll = function(){
		clearInterval(timer);
		timer = setInterval(function(){
			if(checkWillLoadImage()){
				//2.1造数据
				var dataArr = [
					{"src" : "img01.jpg"},
					{"src" : "img02.jpg"},
					{"src" : "img03.jpg"},
					{"src" : "img04.jpg"},
					{"src" : "img05.jpg"},
					{"src" : "img06.jpg"},
					{"src" : "img07.jpg"},
					{"src" : "img08.jpg"},
					{"src" : "img09.jpg"},
					{"src" : "img10.jpg"},
					{"src" : "img11.jpg"},
					{"src" : "img12.jpg"},
					{"src" : "img13.jpg"},
					{"src" : "img14.jpg"},
					{"src" : "img15.jpg"},
					{"src" : "img16.jpg"},
					{"src" : "img17.jpg"},
					{"src" : "img18.jpg"},
					{"src" : "img19.jpg"},
					{"src" : "img20.jpg"},
					{"src" : "img21.jpg"},
					{"src" : "img22.jpg"},
					{"src" : "img23.jpg"},
					{"src" : "img24.jpg"},
					{"src" : "img25.jpg"},
					{"src" : "img26.jpg"},
					{"src" : "img27.jpg"},
					{"src" : "img28.jpg"},
					{"src" : "img29.jpg"},
					{"src" : "img30.jpg"},
					{"src" : "img31.jpg"},
					{"src" : "img32.jpg"},
					{"src" : "img33.jpg"},
					{"src" : "img34.jpg"},
					{"src" : "img35.jpg"},
					{"src" : "img36.jpg"},
					{"src" : "img37.jpg"},
					{"src" : "img38.jpg"},
					{"src" : "img39.jpg"},
					{"src" : "img40.jpg"},
				];
				
				//2.2创建元素
				for(var i = 0;i < dataArr.length;i++){
					var newBox = document.createElement("div");
					newBox.className = "box";
					$("main").appendChild(newBox);
					
					var newPic = document.createElement("div");
					newPic.className = "pic";
					newBox.appendChild(newPic);
					
					var newImg = document.createElement("img");
					newImg.src = "img/" + dataArr[i].src;
					newPic.appendChild(newImg);
				}
				
				//2.3重新布局
				waterfull("main","box");
			}
		},500);
	}
	
	//3.窗口的大小发生改变
	var time = null;
	window.onresize = function(){
		clearTimeout(time);
		//节流
		time = setTimeout(function(){
			waterfull('main', 'box');
		},200);
	}
};
/* 实现瀑布流布局 */
function waterfull(parent, child){
	//1.父盒子居中
	//1.1获取所有的盒子
	var allBox = $(parent).getElementsByClassName(child);
	//1.2获取子盒子的宽度
	var boxWidth = allBox[0].offsetWidth;
	//1.3获取屏幕宽度
	var screenW = document.documentElement.clientWidth;
	//1.4求出列数
	var cols = parseInt(screenW / boxWidth);
	//1.5父盒子居中
	$(parent).style.width = cols * boxWidth + 'px';
	$(parent).style.margin = "0 auto";
	
	//2.子盒子定位
	//2.1定义高度数组
	var heightArr = [], boxHeight, minBoxHeight = 0, minBoxIndex = 0;
	//2.2遍历子盒子
	for(var i = 0;i < allBox.length;i++){
		//2.2.1求出每一个子盒子的高度
		boxHeight = allBox[i].offsetHeight;
		//2.2.2取出第一行盒子的高度放入高度数组
		if(i < cols){//第一行
			heightArr.push(boxHeight);
			allBox[i].style = ''; 
		}else{//剩余行
			//1.求出最矮的盒子高度
			minBoxHeight = _.min(heightArr);
			//2.求出最矮盒子对应的索引
			minBoxIndex = getMinBoxIndex(heightArr, minBoxHeight);
			//3.子盒子定位
			allBox[i].style.position = "absolute";
			allBox[i].style.left = minBoxIndex * boxWidth + 'px';
			allBox[i].style.top = minBoxHeight + 'px';
			//4.更新数组中的高度
			heightArr[minBoxIndex] += boxHeight;
		}
	}
}
/* 获取数组中最矮盒子高度的索引 */
function getMinBoxIndex(arr, v){
	for(var i = 0;i < arr.length;i++){
		if(arr[i] == v){
			return i;
		}
	}
}

function $(id){
	return typeof id === "string" ? document.getElementById(id) : null;
}
/* 判断是否具备加载图片的条件 */
function checkWillLoadImage(){
	//1.获取最后一个盒子
	var allBox = document.getElementsByClassName("box");
	var lastBox = allBox[allBox.length - 1];
	
	//2.求出最后一个盒子自身高度的一半 + offsetTop
	var lastBoxDis = lastBox.offsetHeight * 0.5 + lastBox.offsetTop;
	
	//3.求出屏幕的高度
	var screenW = document.body.clientHeight || document.documentElement.clientHeight;
	
	//4.求出页面偏离浏览器的高度
	var scrollTop = scroll().top;
	
	return lastBoxDis <= screenW + scrollTop;
}