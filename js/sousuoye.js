$(document).ready(function(){
	contact();
	
});
function contact(){
	$.ajax(
	{		
		url:"../json/return.json",
		type:"GET",
		dataType:"json",
		success:function(data){
			// 快捷搜索
			var dataReceive=data.data.sousuo;
			makeKuaiJieSouSuo(dataReceive);			
			sousuoaction();
			// 搜索地图显示
			var sousuomap=data.data.sousuomap;
			makeSouSuoMap(sousuomap);
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
function makeKuaiJieSouSuo(dataReceive){
	var strHtml="";
	for(var i=0;i<dataReceive.length;i++){
		strHtml=strHtml+'<a href="../page/sousuoresult.html"name="a"><li class="item">'+dataReceive[i]+'</li></a>';
	}
	var Html='<div class="title-text ">快捷搜索</div><div class="item-list"><ul class="item-container",id="item-container">'+strHtml+'</ul></div></div>'
	var Html=Html+'<div class="sheshi"><a href="../page/sousuoresult.html"name="a"><img src="../resource/fonts/sheshi/cesuo.png"></a>'
	+'<a href="../page/sousuoresult.html"name="a"><img src="../resource/fonts/sheshi/churukou.png"></a>'
	+'<a href="../page/sousuoresult.html"name="a"><img src="../resource/fonts/sheshi/dianti.png"></a>'
	+'<a href="../page/sousuoresult.html"name="a"><img src="../resource/fonts/sheshi/miehuoqi.png"></a></div>'
	var $kuaijie=$('.kuaijiesousuo');
	$kuaijie.html(Html);	
}
function sousuoaction(){
	var $item_list=$(".item-list")[0];
	var $item_container=$(".item-container")[0];
	$item_list.addEventListener("touch",function(){
		$item_container.scrollLeft-10;
	})
}
function makeSouSuoMap(sousuomap){
	var strHtml='<div class="title-text">地图导览</div>'
	+'<div class="dingwei"><span class="dingwei-text">您的位置: '
	+'<img src="../resource/fonts/dingwei/dingweilogo.png"></span>'
	+ sousuomap[0]+'</div>'	
	+'<div class="mapshow"><img src='+sousuomap[1]+'></div>'
	var ditudaolan=$('.ditudaolan');
	ditudaolan.html(strHtml);
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
			strHtml=strHtml+'<a href="../page/sousuoresult.html"name="a"><span class="fenlei-item-text" name="fenlei-item-text">'
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