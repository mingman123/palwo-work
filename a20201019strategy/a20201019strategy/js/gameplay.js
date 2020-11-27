$('.tabbox a').on('click',function(){
    var idx = $(this).index();
    $('.tabbox a').removeClass('on').eq(idx).addClass('on');
	$('.gameplay-box').hide().eq(idx).fadeIn();
	if(idx != 1){
    	 $('.wrap').css({"background":"url(//game.gtimg.cn/images/lol/act/a20201019strategy/gameplay/bg.jpg) no-repeat left top","background-size":"100% auto"});
    }else{
    	$('.wrap').css({"background":"url(//game.gtimg.cn/images/lol/act/a20201019strategy/gameplay/bg2.jpg) no-repeat left top","background-size":"100% auto"});
    }
})
$('.hero-type li').on('click',function(){
    var idx = $(this).index()
   
    $(this).addClass("on").siblings().removeClass("on");
})

$('.ranking-grade li').on('click',function(){
    var idx = $(this).index()
  
    $(this).addClass("on").siblings().removeClass("on");
})

$('.nav li').on('click',function(){
    var idx = $(this).index()
   
    $(this).addClass("active").siblings().removeClass("active");
})

function remoFun(){
    $('.ranking p').removeClass("bg")
    $('.ranking p a').removeClass('on')
}
$('.third .asc-order').on("click",function(){
    remoFun();
    $('.third').addClass("bg")
    $(this).addClass('on').siblings().removeClass("on");
  
})
$('.third .desc-order').on("click",function(){
    remoFun();
    $('.third').addClass("bg")
    $(this).addClass('on').siblings().removeClass("on");
   
})
$('.fourth .asc-order').on("click",function(){
    remoFun();
    $('.fourth').addClass("bg")
    $(this).addClass('on').siblings().removeClass("on");
    
})
$('.fourth .desc-order').on("click",function(){
    remoFun();
    $('.fourth').addClass("bg")
    $(this).addClass('on').siblings().removeClass("on");
    
})
$('.fifth .asc-order').on("click",function(){
    remoFun();
    $('.fifth').addClass("bg")
    $(this).addClass('on').siblings().removeClass("on");
    
})
$('.fifth .desc-order').on("click",function(){
    remoFun();
    $('.fifth').addClass("bg")
    $(this).addClass('on').siblings().removeClass("on");
    
})
$('.sixth .asc-order').on("click",function(){
    remoFun();
    $('.sixth').addClass("bg")
    $(this).addClass('on').siblings().removeClass("on");
    
})
$('.sixth .desc-order').on("click",function(){
    remoFun();
    $('.sixth').addClass("bg")
    $(this).addClass('on').siblings().removeClass("on");
    
})


function TGDialogS(e){
  // 利用milo库引入dialog组件
  need("biz.dialog",function(Dialog){
      Dialog.show({
          id:e,
          bgcolor:'#000', //弹出“遮罩”的颜色，格式为"#FF6600"，可修改，默认为"#fff"
          opacity:50 //弹出“遮罩”的透明度，格式为｛10-100｝，可选
      });
  });
}
function closeDialog(){
  // 利用milo库引入dialog组件
  need("biz.dialog",function(Dialog){
      Dialog.hide();
  });
}
$('.btn-gameplay2-video').click(function() {

	RClientWindowMessenger.sendMessage({
		messageType: 'rcp-fe-lol-home-open-full-page-modal',
		data: {
			url: 'https://lol.qq.com/client/lcu/page/video.html?vid=z3031bawfwa' // vid 为腾讯视频vid
		}
	});

})
