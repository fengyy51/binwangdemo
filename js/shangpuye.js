var i=1;//控制点赞效果
var j=1;//控制差评效果
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
			// console.log(weizhi);
			makeWeiZhi(weizhi);
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
function makePingJia(){
	
	// 点赞效果 点击后进行颜色数字切换
	var dianzan=$('.pingjia .dianzan img');
	var dianzan_num=$('.pingjia .dianzan .num');
	var img_dianzan=["../resource/fonts/pingjia/dianzan.png","../resource/fonts/pingjia/dianzanhong.png"];
	var chaping=$('.pingjia .chaping img');
	var chaping_num=$('.pingjia .chaping .num');
	var img_chaping=["../resource/fonts/pingjia/chaping.png","../resource/fonts/pingjia/chapinghong.png"];
	// chaping.attr("src","../resource/fonts/pingjia/chapinghong.png");
	dianzan.click(function(){
		this.src=img_dianzan[i%2];
		if(i%2==1)
		{
			
			
			chaping.attr("src","../resource/fonts/pingjia/chaping.png");
			console.log(chaping.attr('src'));
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
			console.log(dianzan.attr('src'));
			dianzan_num.html('');
			i=1;
			chaping_num.append('-1');
		}		
		else
		chaping_num.html('');
		j++;
	});
}
