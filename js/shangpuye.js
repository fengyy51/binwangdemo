﻿var i=1;//控制点赞效果  i,j%2 -1是真正的效果图片索引  因为每次最后都进行了+1
var j=1;//控制差评效果
var k=1;//收藏效果
$(document).ready(function(){
	contact();
	makeShouCang();
	// console.log(document.getElementsByTagName("*"));
});
function contact(){
	$.ajax(
	{		
		url:"../json/return.json",
		type:"GET",
		dataType:"json",
		success:function(data){
			var shangpu=data.data.shangpu;
			// 商铺名称
			var mingcheng=shangpu.mingcheng;
			makeMingCheng(mingcheng);
			// 主营业务
			var yewu=shangpu.yewu;
			makeYeWu(yewu);
			// 联系方式
			var name=shangpu.name;
			var telephone=shangpu.telephone;
			var weixin=shangpu.weixin;
			makeLianXi(name,telephone,weixin);
			// 商铺位置
			// var weizhi=shangpu.weizhi;
			// // console.log(weizhi);
			// makeWeiZhi(weizhi);
			var shangpumap=shangpu.weizhi;
			makeMap(shangpumap);
			// 评价
			makePingJia();
		
			
		},
		error:function(error){
			console.log(error);
			alert("false");
		}
	}
	);
}
function makeMingCheng(mingcheng){
	var $mingcheng=$('.mingcheng .body');
	var strHtml='<h2>'+mingcheng+'</h2>';
	$mingcheng.html(strHtml);
}
function makeYeWu(yewu){
	var $yewu=$('.yewu .body');
	var strHtml='<p class="left-duiqi">'+yewu+'</p>';
	$yewu.html(strHtml);
}
function makeLianXi(name,telephone,weixin){
	var $lianxi=$('.lianxi .body');
	var strHtml='<span class="name left-duiqi">'+name+'</span>'
	+'<span class="telephone"><img src="../resource/fonts/lianxi/telephone.png">'+telephone+'</span>'
	+'<span class="weixin"><img src="../resource/fonts/lianxi/weixin.png">'+weixin+'</span>';
	$lianxi.html(strHtml);
}
function makeWeiZhi(weizhi){
	var $weizhi=$('.weizhi .body');
	var strHtml='<div class="mapshow"><img src='+weizhi+'></div>';
	$weizhi.html(strHtml);
}
function makeMap(shangpumap){
	var strHtml='<div class="title-text">地图导览'
	// +'<button id="dingwei" class="pure-button button-dingwei">定位</button>'
	+'<span class="dingwei" ><span class="dingwei-text" >您的位置: <span class="red">'
	+shangpumap.floorid+'</span><img src="../resource/fonts/dingwei/dingweilogo.png">'
	+'</span></span></div>';
	var ditudaolan=$('.ditudaolan');
	ditudaolan.html(strHtml);
	var mapDiv=document.querySelector("#mapshow");
	var xpos=0.6,ypos=0.7,floor="";
	xpos=shangpumap.xpos;
	ypos=shangpumap.ypos;
	floor=shangpumap.floorid;
	// console.log(xpos);
	// console.log(ypos);
	var options={movex:shangpumap.movex,movey:shangpumap.movey,fontColor:"blue",publicColor:"green"};
	var map = new Vmap(mapDiv,shangpumap.mallid,shangpumap.floorid, options);
	// setTimeout(function() {
	// 	$('.dengdai').hide();
	// }, 3000);
	
	// var p1 = new VPoint(72.568,13.089,"Floor3");
	// var p2 = new VPoint(46.485,23.098,"Floor3");
	var p2 = new VPoint(xpos,ypos,floor);
	// var p3 = new VPoint(48.699,42.443,"Floor3");
	var dingwei=document.querySelector("#dingwei");
	map.onFloorChange = function( ) {
		//定义三个点对象的实例
	
	//定义marker
	// var marker1 = new VMarker(p1,"../resource/img/LocatingPoint.gif");
	var marker2 = new VMarker(p2,"../resource/img/marker.png");
	// var marker3 = new VMarker(p3,"./resource/img/tap.png");
	// options={movex:46.485,movey:42.098,fontColor:"blue",publicColor:"green"};
	// map = new Vmap(mapDiv,"E9F6A2DE-EADC-45AF-A42E-C7458A401339","Floor3", options);		
	//加载到地图浮层
	// map.addOverlay(marker1);
	map.addOverlay(marker2);
	$('.dengdai').hide();
// 	map.addOverlay(marker3);
};
	
}
function makePingJia(){
	
	// 点赞效果 点击后进行颜色数字切换
	var dianzan=$('.pingjia .dianzan img');
	var dianzan_num=$('.pingjia .dianzan .num');
	var img_dianzan=["../resource/fonts/pingjia/dianzan.png","../resource/fonts/pingjia/dianzanhong.png"];
	var chaping=$('.pingjia .chaping img');
	var chaping_num=$('.pingjia .chaping .num');
	var img_chaping=["./resource/fonts/pingjia/chaping.png","../resource/fonts/pingjia/chapinghong.png"];
	// chaping.attr("src","../resource/fonts/pingjia/chapinghong.png");
	dianzan.click(function(){
		this.src=img_dianzan[i%2];
		if(i%2==1)
		{
			
			
			chaping.attr("src","../resource/fonts/pingjia/chaping.png");
			chaping_num.html('');
			j=1;
			dianzan_num.append('+1');
		}
		
		else
		dianzan_num.html('');
		i++;
	});
	// 差评效果 点击后进行颜色数字切换
	
	chaping.click(function(){
		this.src=img_chaping[j%2];
		if(j%2==1)
		{
			
			dianzan.attr('src','../resource/fonts/pingjia/dianzan.png');
			dianzan_num.html('');
			i=1;
			chaping_num.append('-1');
		}		
		else
		chaping_num.html('');
		j++;
	});
}
function makeShouCang(){
	
	// 点赞效果 点击后进行颜色数字切换
	var shoucang=$('.shoucang-click  img');
	var shoucang_text=$('.shoucang-text');
	var img_shoucang=["../resource/fonts/shoucang/shoucang.png","../resource/fonts/shoucang/shoucanghong.png"];
	
	shoucang.click(function(){
		this.src=img_shoucang[k%2];
		if(k%2==1)
		{
			
			shoucang_text.html('已收藏');
			
		// 	// chaping.attr("src","./resource/fonts/pingjia/chaping.png");
		// 	// chaping_num.html('');
		// 	// j=1;
		// 	dianzan_num.append('+1');
		}
		
		else
		shoucang_text.html('收藏本页面');
		k++;
	});
	// 差评效果 点击后进行颜色数字切换
	
	// chaping.click(function(){
	// 	this.src=img_chaping[j%2];
	// 	if(j%2==1)
	// 	{
			
	// 		dianzan.attr('src','./resource/fonts/pingjia/dianzan.png');
	// 		dianzan_num.html('');
	// 		i=1;
	// 		chaping_num.append('-1');
	// 	}		
	// 	else
	// 	chaping_num.html('');
	// 	j++;
	// });
}