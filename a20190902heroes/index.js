 //点击开始抽奖 通知js flash->js

//开始抽奖lottery->js
function callJsToStart() {
    lottery.disable();
    calllotteryToRoll(5);
}
//开发获得抽奖结果 通知lottery开始播放效果 js->lottery
function calllotteryToRoll(id) {
    if (lottery) lottery.stopRoll(id);
}
//动画完成通知js lottery->js        
function callJsToComplete() {
    alert('恭喜你获得大奖哟！！');
}

//初始化抽奖的 可以不知道内部
var lottery = new Lottery({
    'lighturl': 'ossweb-img/letteryon.png',//外部光圈png 不填写就用默认的效果
    'starturl': '//ossweb-img.qq.com/images/js/delottery/blankstartbtn.png', //外部按钮png 不填写就用默认的按钮效果
    'width': 728,//lottery 宽度
    'height': 728,//lottery 高度
    'total': 8,//抽奖产品的总数
    'sbtnx': 246,// 开始抽奖按钮的位置x坐标
    'sbtny': 246,// 开始抽奖按钮的位置y坐标
    'sbtnw': 235,// 开始抽奖按钮的宽度
    'sbtnh': 235,// 开始抽奖按钮的高度
    'boxw': 236,// 奖品光效的宽度
    'boxh': 236,//奖品光效的高度 
    'position': "10_10,246_10,480_10,481_246,480_481,246_481,10_481,10_246",
    //奖品光效的位置，对应奖品图片的布局，填入每个奖品的位置以及角度用逗号分割 x_y 例如19_20或者19_20_0 表示第一个奖品的位置 x坐标为19px y坐标为20px 角度为0。）
    'contentId': 'lotterycontent',//嵌入lottery 的div层的 id 
    'onClickRollEvent': callJsToStart,//对应上面接口
    'onCompleteRollEvent': callJsToComplete //对应上面接口
});
    
//地址dia8
//礼品dia7
    
    
    
 //swiper   
var mySwiper = new Swiper('.swiper-container',{
    pagination: '.pagination',
    loop:true,
    grabCursor: true,
    paginationClickable: true,
//			    slidesPerView: 3
  })
  $('.arrow-left').on('click', function(e){
    e.preventDefault()
    mySwiper.swipePrev()
  })
  $('.arrow-right').on('click', function(e){
    e.preventDefault()
    mySwiper.swipeNext()
  })
   




//侧边导航start
var isShow = true;	
$(document).ready(function() {
  $(window).scroll(function() {
//获取文档滚动高度
//当页面滚动到一定高度时，侧边导航灵活切换类
    var top = $(document).scrollTop();
	function scrollNav(num1,num2,index){
		if(num1 <= top && top <=num2){
			$(".dh a").removeClass('on').eq(index).addClass('on');
		}
	}
	scrollNav(1002,1520,0);
	scrollNav(1520,2350,1);
	scrollNav(2350,3172,2);
	scrollNav(3172,4698,3);
	scrollNav(4698,5520,4);
	scrollNav(5520,6342,5);
	scrollNav(6342,7176,6);
	});
});
//锚点到达目标位置慢慢滑过
$('.dh a').click(function() {
   $("html, body").animate({scrollTop: $($(this).attr("href")).offset().top + "px"}, {duration: 1000,easing: "linear"
	 });
return false;
});
//侧边导航end




//弹窗start
function TGDialogS(e){
    // 利用milo库引入dialog组件
need("biz.dialog",function(Dialog){
Dialog.show({
    id:e,
    bgcolor:'#000', //弹出“遮罩”的颜色，格式为"#FF6600"，可修改，默认为"#fff"
    opacity:60 //弹出“遮罩”的透明度，格式为｛10-100｝，可选
            
        });
    });
}
function closeDialog(){
  // 利用milo库引入dialog组件
  need("biz.dialog",function(Dialog){
          Dialog.hide();
      });
  }
//弹窗end


// 视频弹窗
	var player
	function showVideoDia(vid) {
			 player = new Txplayer({
			containerId: 'video-play',
			vid: vid,
			width: '800',
			height: '600',
			autoplay: true
		});
		TGDialogS('dia6');
	}
	$('.dia-close').click(function(){
		$('#video-play').html('');
		player.mute();
	})


$(function(){
	$(".check1 a").click(function(){
		$(".check1 a").removeClass("on");
		$(this).addClass("on");
	})
	$(".check2 a").click(function(){
		$(".check2 a").removeClass("on");
		$(this).addClass("on");
	})
	$(".check3 a").click(function(){
		$(".check3 a").removeClass("on");
		$(this).addClass("on");
	})
	$(".check4 a").click(function(){
		$(".check4 a").removeClass("on");
		$(this).addClass("on");
	})
	
	$(".box1 .gif").mouseleave(function(){
		$(".box1 .gif1").addClass("on");
	})
	$(".box1 .gif").mouseover(function(){
		$(".box1 .gif1").removeClass("on");
	})
	$(".box2 .gif").mouseleave(function(){
		$(".box2 .gif2").addClass("on");
	})
	$(".box2 .gif").mouseover(function(){
		$(".box2 .gif2").removeClass("on");
	})
	
		
	$('.btn-check').click(function () {
		$('html,body').animate({
		scrollTop: '1040px'}, 800);
		return false;
	});

	$('.btn-get').click(function () {
		TGDialogS('dia9');
	});
	$('.links .btn-order').click(function () {
		TGDialogS('dia1');
	});
	

})




