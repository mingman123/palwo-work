//登录start
milo.addEvent(g("dologin"), "click", function() {
	need("biz.login", function(LoginManager){
        LoginManager.init({
            needReloadPage : true
        });
      	LoginManager.login();
	});
	return false;
});
milo.addEvent(g("dologout"), "click", function() {
	need("biz.login", function(LoginManager){
     	LoginManager.logout();
	});
   	return false;
});
   milo.ready(function() {
	need("biz.login", function(LoginManager){
        LoginManager.checkLogin(function(){
            g("login_qq_span").innerText=LoginManager.getUserUin();//获取QQ号
                amsInit(178183, 525639);
        });
    });
});
//登录end


//点击开始抽奖 通知js flash->js

//开始抽奖lottery->js
function callJsToStart() {
    lottery.disable();
    calllotteryToRoll(4);
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
    'width': 604,//lottery 宽度
    'height': 604,//lottery 高度
    'total': 8,//抽奖产品的总数
    'sbtnx': 164,// 开始抽奖按钮的位置x坐标
    'sbtny': 164,// 开始抽奖按钮的位置y坐标
    'sbtnw': 158,// 开始抽奖按钮的宽度
    'sbtnh': 158,// 开始抽奖按钮的高度
    'boxw': 152,// 奖品光效的宽度
    'boxh': 153,//奖品光效的高度 
    'position': "10_9,167_9,324_9,324_167,324_322,167_322,10_322,10_167",
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
			width: '100%',
			height: '100%',
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
	
//	$(".box1 .gif").mouseleave(function(){
//		$(".box1 .gif1").addClass("on");
//	})
//	$(".box1 .gif").mouseover(function(){
//		$(".box1 .gif1").removeClass("on");
//	})
//	$(".box2 .gif").mouseleave(function(){
//		$(".box2 .gif2").addClass("on");
//	})
//	$(".box2 .gif").mouseover(function(){
//		$(".box2 .gif2").removeClass("on");
//	})
	
		
	$('.btn-check').click(function () {
		$("html, body").animate({scrollTop: $($(this).attr("href")).offset().top + "px"}, {duration: 800,easing: "linear"
	 });
return false;
//		$('html,body').animate({
//		scrollTop: '1370px'}, 800);
//		return false;
	});

	$('.btn-get').click(function () {
		TGDialogS('dia9');
	});
	$('.links .btn-order').click(function () {
		TGDialogS('dia1');
	});
	

})
   