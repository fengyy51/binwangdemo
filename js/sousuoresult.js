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
			
			// 结果地图显示
			var resultmap=data.data.resultmap;
			makeResultMap(resultmap);
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
// 一行显示
function makeResultList(resultshangpu){
	var strHtml = "";
	// console.log(resultshangpu.length);
	for(var i=0;i<resultshangpu.length;i++){
		strHtml=strHtml+'<div class="item border-line"><div class="tupian"><img src=' + resultshangpu[i].tupian + '></div><div class="content"><p class="decoration">' +
        resultshangpu[i].decoration + '</p><input type="button" name="chakan" value="查看"></div></div>';
	}	
	$('div.sousuo-result .body').html(strHtml);
}
