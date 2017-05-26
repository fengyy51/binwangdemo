$(document).ready(function(){
	
	contact();
	
});
function contact(){
	$.ajax(
	{		
		url:"./json/return.json",
		type:"GET",
		dataType:"json",
		success:function(data){
			// 判断输入文字进行跳转
			sousuoaction();
			// 快捷搜索
			var dataReceive=data.data.sousuo;
			makeKuaiJieSouSuo(dataReceive);			
			// 搜索地图显示
			var sousuomap=data.data.sousuomap;
			console.log(sousuomap);
			makeMap(sousuomap);
			
			
			// makeSouSuoMap(sousuomap);
			// 分类索引
			var fenlei=data.data.fenlei;
			makeFenLei(fenlei);
			actionFenLei();

		},
		error:function(error){
			console.log(error);
			alert("false");
		}
	}
	);
}
function sousuoaction(){
	var sousuoinput=$(".pure-input-rounded");
	var sousuobutton=$('a.button-sousuo');
	var form=$(".pure-form");
	// console.log(sousuoinput.value)
	sousuobutton.click(function(){
		window.localStorage.setItem("sousuotext",sousuoinput.val());
		var value=sousuoinput.val();
		if(value!="undefined"&&value!=null&&value!=""){
			window.location.href="./page/sousuoresult.html";
			// var strHtml='';
			// form.html(strHtml);
			//  strHtml='<input type="text" id="sousuoinput" class="pure-input-rounded" placeholder="  商铺,商品,基础设施搜索">'
			// +'<a class=" pure-button button-sousuo" href="">搜索</a>';
			console.log(value);
			// form.html(strHtml);
		}
	});	
	
	var valuestorage=window.localStorage.getItem("sousuotext");
	// console.log(valuestorage);
		// var strHtml='<input type="text" id="sousuoinput" class="pure-input-rounded" placeholder="  商铺,商品,基础设施搜索">'
		// +'<a class=" pure-button button-sousuo" href="#####" onclick="javascript:return false;">搜索</a>';
		// console.log(value);
		// form.html(strHtml);
		
		// else{
		
		// }

	
}
function makeKuaiJieSouSuo(dataReceive){
	var strHtml="";
	for(var i=0;i<dataReceive.length;i++){
		strHtml=strHtml+'<a href="./page/sousuoresult.html"name="a"><li class="item">'+dataReceive[i]+'</li></a>';
	}
	var Html='<div class="title-text ">快捷搜索</div><div class="item-list"><ul class="item-container",id="item-container">'+strHtml+'</ul></div></div>'
	var Html=Html+'<div class="sheshi"><a href="./page/sousuoresult.html"name="a"><img src="./resource/fonts/sheshi/cesuo.png"></a>'
	+'<a href="./page/sousuoresult.html"name="a"><img src="./resource/fonts/sheshi/churukou.png"></a>'
	+'<a href="./page/sousuoresult.html"name="a"><img src="./resource/fonts/sheshi/dianti.png"></a>'
	+'<a href="./page/sousuoresult.html"name="a"><img src="./resource/fonts/sheshi/miehuoqi.png"></a></div>'
	var $kuaijie=$('.kuaijiesousuo');
	$kuaijie.html(Html);	
}

function makeSouSuoMap(sousuomap){
	
	+'<div class="dingwei"><span class="dingwei-text">您的位置: '
	+'<img src="./resource/fonts/dingwei/dingweilogo.png"></span>'
	+ sousuomap[0]+'</div>'	
	+'<div class="mapshow"><img src='+sousuomap[1]+'></div>'
	var ditudaolan=$('.ditudaolan');
	ditudaolan.html(strHtml);
}
function makeMap(sousuomap){
	var strHtml='<div class="title-text">地图导览'
	// +'<button id="dingwei" class="pure-button button-dingwei">定位</button>'
	+'<span class="dingwei" ><span class="dingwei-text" >您的位置: <span class="red">'
	+sousuomap.floorid+'</span><img src="./resource/fonts/dingwei/dingweilogo.png">'
	+'</span></span></div>';
	var ditudaolan=$('.ditudaolan');
	ditudaolan.html(strHtml);	
	var mapDiv=document.querySelector("#mapshow");
	var xpos=0.6,ypos=0.7,floor="";
	xpos=sousuomap.xpos;
	ypos=sousuomap.ypos;
	floor=sousuomap.floorid;
	console.log(xpos);
	console.log(ypos);
	var options={movex:sousuomap.movex,movey:sousuomap.movey,fontColor:"blue",publicColor:"green"};
	var map = new Vmap(mapDiv,sousuomap.mallid,sousuomap.floorid, options);
	// setTimeout(function() {$('.dengdai').hide();}, 3000);
	// var p1 = new VPoint(72.568,13.089,"Floor3");
	// var p2 = new VPoint(46.485,23.098,"Floor3");
	var p2 = new VPoint(xpos,ypos,floor);
	// var p3 = new VPoint(48.699,42.443,"Floor3");
	var dingwei=document.querySelector("#dingwei");
	map.onFloorChange = function( ) {
		//定义三个点对象的实例
	
	//定义marker
	// var marker1 = new VMarker(p1,"../resource/img/LocatingPoint.gif");
	var marker2 = new VMarker(p2,"./resource/img/marker.png");
	// var marker3 = new VMarker(p3,"../resource/img/tap.png");
	// options={movex:46.485,movey:42.098,fontColor:"blue",publicColor:"green"};
	// map = new Vmap(mapDiv,"E9F6A2DE-EADC-45AF-A42E-C7458A401339","Floor3", options);		
	//加载到地图浮层
	// map.addOverlay(marker1);
	map.addOverlay(marker2);
	$('.dengdai').hide();
	// map.addOverlay(marker3);
};
	
}
// 分类索引
function makeFenLei(fenlei){
	var strHtml='<div class="title-text ">分类索引</div>'+
	'<div class="fenleiitemshow">';
	for(var i=0;i<fenlei.length;i++){
		strHtml=strHtml+'<div class="fenlei-item border-line"><span class="fenlei-item-floor red">'
		+fenlei[i].floor+'</span>';
		strHtml=strHtml+'<span class="fenlei-item-text-list">';
		for(var j=0;j<fenlei[i].item.length;j++){
			strHtml=strHtml+'<a href="./page/sousuoresult.html"name="a"><span class="fenlei-item-text" name="fenlei-item-text">'
			+fenlei[i].item[j]+'</a></span>';
		}
		strHtml=strHtml+'</span></div>';
	}		
	strHtml=strHtml+'</div>';
	var fenleisuoyin=$('.fenleisuoyin');
	fenleisuoyin.html(strHtml);
}
function actionFenLei(){
	var fenlei_item_text=document.getElementsByName("fenlei-item-text");
	// console.log(fenlei_item_text);
	for(var i=0;i<fenlei_item_text.length;i++){
		fenlei_item_text[i].addEventListener("touch",function(){
			// console.log(fenlei_item_text[i]);
			$(fenlei_item_text[i]).css("color","#FA505D");
		})
	}
	

}