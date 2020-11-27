var swiper = new Swiper('.swiper-container', {
    loop:true,
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows : true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
  });


  var swiper = new Swiper('.swiper-container2', {
    loop:true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
   
});


/**
 * 侧导航
 */
var side = {
    init: function () {
        var tops = [];
        var $sides = $('.side');
        for (var i = 0; i < $sides.length; i++) {
            var _id = $sides.eq(i).attr('href');
            if (_id.indexOf('#') != -1) {
                var top = $(_id).offset().top - 400;
                tops.push(top);
            }
        }
        $(window).on('scroll', function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop < tops[0]) {
                $('.side').removeClass('on');
                $('.side-box').fadeOut();
                return;
            }
            $('.side-box').fadeIn();
            for (var k = 0; k < tops.length; k++) {
                if (scrollTop > tops[k]) {
                    $('.side').eq(k).addClass('on').siblings().removeClass('on');
                }
            }
        });
    }
}
side.init();



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

var player;
function showVideoDia(vid) {
	player = new Txplayer({
		containerId: 'container',
		vid: vid,
		width: '100%',
		height: '100%',
		autoplay: true
		});
	TGDialogS('dia1');
}
$(".dia-close").click(function(){
	$(".video-box").html('');
	player.mute();
})

$(window).scroll(function(){
    var top=$(window).scrollTop();
    h=$(".header").height()+$(".main1").height()+$(".main2").height()-$(window).height()-$(".main2-cont2").height()/1.6;
    // console.log(h);
    if(top>=h){
       var len = $(".speed").length;
        var i = 1;
        var t=setInterval(function(){
        if(i < len+1){
        setInterval(t);
        }
        $(".speed"+i).addClass('on');
        i++;
        }, 300);
    };
});

