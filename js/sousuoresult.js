$(document).ready(function(){
	contact();
	// 搜索地图显示
	makeMap();
});
function contact(){
	$.ajax(
	{		
		url:"../json/return.json",
		type:"GET",
		dataType:"json",
		success:function(data){
			
			// // 结果地图显示
			// var resultmap=data.data.resultmap;
			// makeResultMap(resultmap);
			// 结果商铺显示
			var resultshangpu=data.data.resultshangpu;
			makeResultList(resultshangpu);
			
		},
		error:function(error){
			console.log(error);
			alert("false");
		}
	}
	);
}
function makeResultMap(resultmap){
	var strHtml='<div class="title-text">地图导览</div>'
	+'<div class="dingwei"><span class="dingwei-text">您的位置: '
	+'<img src="../resource/fonts/dingwei/dingweilogo.png"></span>'
	+'</div>'	
	+'<div class="mapshow"><img src='+resultmap+'></div>'
	var ditudaolan=$('.ditudaolan');
	ditudaolan.html(strHtml);
}
function makeMap(){
	var mapDiv=document.querySelector("#mapshow");
	var options={movex:56.485,movey:42.098,fontColor:"blue",publicColor:"green"};
	var map = new Vmap(mapDiv,"E9F6A2DE-EADC-45AF-A42E-C7458A401339","Floor3", options);
	var p1 = new VPoint(72.568,13.089,"Floor3");
	var p2 = new VPoint(46.485,23.098,"Floor3");
	var p3 = new VPoint(48.699,42.443,"Floor3");
	var dingwei=document.querySelector("#dingwei");
	dingwei.onclick=function(){
		//定义三个点对象的实例
	
	//定义marker
	var marker1 = new VMarker(p1,"../resource/img/LocatingPoint.gif");
	var marker2 = new VMarker(p2,"../resource/img/marker.png");
	var marker3 = new VMarker(p3,"../resource/img/tap.png");
	options={movex:46.485,movey:42.098,fontColor:"blue",publicColor:"green"};
	map = new Vmap(mapDiv,"E9F6A2DE-EADC-45AF-A42E-C7458A401339","Floor3", options);		
	//加载到地图浮层
	map.addOverlay(marker1);
	map.addOverlay(marker2);
	map.addOverlay(marker3);
};
	
}
// 一行显示
function makeResultList(resultshangpu){
	var strHtml = "";
	// console.log(resultshangpu.length);
	for(var i=0;i<resultshangpu.length;i++){
		strHtml=strHtml+'<div class="item border-line"><div class="tupian"><img src=' + resultshangpu[i].tupian + '></div><div class="content"><p class="decoration">' +
        resultshangpu[i].decoration + '</p><a class="pure-button button-chakan " href="../page/shangpuye.html">查看</a></div></div>';
	}	
	$('div.sousuo-result .body').html(strHtml);
}
