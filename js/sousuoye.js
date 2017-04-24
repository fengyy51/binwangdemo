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
			var dataReceive=data.data.sousuo;
			console.log("m");
			makeKuaiJieSouSuo(dataReceive);
			
			sousuoaction();
			
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
		strHtml=strHtml+'<li class="item">'+dataReceive[i]+'</li>';
	}
	var Html='<div class="title-text ">快捷搜索</div><div class="item-list"><ul class="item-container",id="item-container">'+strHtml+'</ul></div></div>'
	var Html=Html+'<div class="sheshi"><img src="../resource/fonts/sheshi/cesuo.png"><img src="../resource/fonts/sheshi/churukou.png"><img src="../resource/fonts/sheshi/dianti.png"><img src="../resource/fonts/sheshi/miehuoqi.png"></div>'
	var $kuaijie=$('.kuaijiesousuo');
	$kuaijie.html(Html);

	
}
function sousuoaction(){
	// alert("d");
	var $item_list=$(".item-list")[0];
	var $item_container=$(".item-container")[0];
	console.log($item_container);

	$item_list.addEventListener("touch",function(){
		$item_container.scrollLeft-10;
	})
}