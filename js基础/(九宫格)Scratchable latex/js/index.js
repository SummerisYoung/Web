window.onload = function(){
	//1.获取需要的标签
	var btns = document.getElementById("top").children;
	var bottom = document.getElementById("bottom");
	
	//2.监听按钮的点击
	btns[0].onclick = function(){
		Scratchable(3,bottom);
	}
	btns[1].onclick = function(){
		Scratchable(4,bottom);
	}
	btns[2].onclick = function(){
		Scratchable(5,bottom);
	}
	
	//3.核心算法封装
	function Scratchable(allCols,parentNode){
		//3.1 定义变量(盒宽，盒高，间距，总列数)
		var boxW = 220,boxH = 375,marginXY = 15;
		
		//3.2 遍历
		for(var i = 0;i < parentNode.children.length;i++){
			//2.2.1 求出当前盒子所在的行(相除)和列(求模)
			var row = parseInt(i / allCols);
			var col = parseInt(i % allCols);
			
			//2.2.2 盒子的定位
			var currentBox = parentNode.children[i];
			currentBox.style.position = 'absolute'; //孩子相对于父亲要绝对定位
			currentBox.style.left = col * (boxW + marginXY) + 'px';
			currentBox.style.top = row * (boxH + marginXY) + 'px';
		}
	}
}