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
			var weizhi=shangpu.weizhi;
			console.log(weizhi);
			makeWeiZhi(weizhi);
			
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