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
  // ����milo������dialog���
  need("biz.dialog",function(Dialog){
      Dialog.show({
          id:e,
          bgcolor:'#000', //���������֡�����ɫ����ʽΪ"#FF6600"�����޸ģ�Ĭ��Ϊ"#fff"
          opacity:50 //���������֡���͸���ȣ���ʽΪ��10-100������ѡ
      });
  });
}
function closeDialog(){
  // ����milo������dialog���
  need("biz.dialog",function(Dialog){
      Dialog.hide();
  });
}
$('.btn-gameplay2-video').click(function() {

	RClientWindowMessenger.sendMessage({
		messageType: 'rcp-fe-lol-home-open-full-page-modal',
		data: {
			url: 'https://lol.qq.com/client/lcu/page/video.html?vid=z3031bawfwa' // vid Ϊ��Ѷ��Ƶvid
		}
	});

})
