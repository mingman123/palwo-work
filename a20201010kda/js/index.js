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
$(function() {
	$(".cont1 .btn_open").on('click', function() {
		if($(this).hasClass('on')) {
			$(this).html('展开');
			$(this).removeClass('on');
			$(".music_box2").hide();
			$(".music_box1").show();
		} else {
			$(this).addClass('on');
			$(this).html('收起');
			$(".music_box1").hide();
			$(".music_box2").show();
		}
  })
  $(".cont6 .btn_change b").on('click', function() {
    $(this).addClass("on").siblings().removeClass("on");
  })
  $(".cont6 .swiper-slide a").on('click', function() {
    TGDialogS("dia1")
  })
  $(".cont8 .rank a").on('click', function() {
    $(this).addClass("on").siblings().removeClass("on");
  })
  $('body').on('click', '#_overlay_', function (e){
      closeDialog();
    })
    $(".cont7 .introduce .popularity").on('click', function() {
      if ($(this).parent(".introduce").hasClass("on")) {
        $(this).parent(".introduce").removeClass("on")
      } else {
        $(this).parent(".introduce").addClass("on")
      }
    })
    $(".cont4 .data .assist").on('click', function() {
      if ($(this).hasClass("on")) {
        $(this).removeClass("on")
      } else {
        $(this).addClass("on")
      }
    })

  
	var swiper1 = new Swiper('.swiper-container1', {
		slidesPerView: 'auto',
		spaceBetween: 10,
	});
	var swiper2 = new Swiper('.swiper-container2', {
		pagination: {
			el: '.swiper-pagination2',
    },
    autoplay: true,
    loop:true,
    
	});
	var swiper3 = new Swiper('.swiper-container3', {
		slidesPerView: 'auto',
		spaceBetween: 10,
	});
	var swiper4 = new Swiper('.swiper-container4', {
		pagination: {
			el: '.swiper-pagination4',
    },
    autoplay: true,
    loop:true,
  });
   if (CheckApp.Is_App && milo.iphone()) {
    $(window).scroll(function(){
      var top=$(window).scrollTop();
      var cH=$(document.body).height()-$(window).height();
      var data=0;
//    console.log(top)
      if (top==cH&&data==0) {
        $(".music_fix").css("bottom","0.74rem");
        data=1;
      }
    })
     
    }
  $(window).scroll(function(){
    var top=$(window).scrollTop();
    var cHcont2=$('#cont2').offset().top;
    if (top>cHcont2) {
      $(".music_fix").addClass("on");
    } else {
      $(".music_fix").removeClass("on");
    }
  })
  $(".head .btn_penhold").on('click', function() {
    var cHcont5=$('#cont5').offset().top;
    $('html,body').animate({
      scrollTop: cHcont5}, 800);
  })
  
})

