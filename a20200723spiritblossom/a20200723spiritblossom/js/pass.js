function TGDialogS(e) {
	// 利用milo库引入dialog组件
	need("biz.dialog", function(Dialog) {
		Dialog.show({
			id: e,
			bgcolor: '#000', //弹出“遮罩”的颜色，格式为"#FF6600"，可修改，默认为"#fff"
			opacity: 70 //弹出“遮罩”的透明度，格式为｛10-100｝，可选
		});
	});
}

function closeDialog() {
	// 利用milo库引入dialog组件
	need("biz.dialog", function(Dialog) {
		Dialog.hide();
	});
}

var player

function showVideoDia(vid) {
	player = new Txplayer({
		containerId: 'container1',
		vid: vid,
		width: '100%',
		height: '100%',
		autoplay: true
	});
	TGDialogS('dia3');
}
$(".dia-close").click(function() {
	$(".dia3 .video-box").html('');
	player.mute();

})

var swiper = new Swiper('.swiper-container', {
//	spaceBetween: 10,
	effect : 'fade',
	loop: true,
	pagination: {
        el: '.swiper-pagination',
    },
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

$(".main1-2 .swiper-button-prev").on('click',function(){
	var idx1=swiper.realIndex;
	PTTSendClick('btn','button-prev-'+idx1,'轮播图'+swiper.activeIndex);
})
$(".main1-2 .swiper-button-next").on('click',function(){
	var idx2=swiper.realIndex;
	PTTSendClick('btn','button-next-'+idx2,'轮播图'+swiper.activeIndex);
})


if(/(iPhone|iPad|iPod|iOS|Android|Windows Phone|BlackBerry|SymbianOS)/i.test(navigator.userAgent)) {

} else {
	$('.video').html('<source src="'+mediaURLData[6620]+'" type="video/mp4" >')
	$(".sid-nav").on('click', function() {
		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top + "px"
		}, {
			duration: 600,
			easing: "linear"
		});
		return false;
	})
	$(".sid-nav6").on('click', function() {
		$('html,body').animate({
			scrollTop: '0px'
		}, {
			duration: 800,
			easing: "linear"
		});
	})
	$(window).scroll(function() {
		var top = $('html,body').scrollTop();
//		console.log(top)
		var sTop = [1325, 2640, 3978, 4876, 5821, 10000];
		for(var i = 0; i < sTop.length-1; i++) {
			if(sTop[i] <= top && top < sTop[i+1]) {
				$(".sid a").removeClass("on").eq(i).addClass("on");
			}
		}
		if(top > 800) {
			$(".sid").fadeIn();
		} else {
			$(".sid").fadeOut();
		}
	})
}