$('.tabbox a').on('click', function() {
	var idx = $(this).index()
	$('.tabbox a').removeClass('on').eq(idx).addClass('on');
	// $('.heroskill b').removeClass('on').eq(idx).addClass('on');
	if(idx != 0) {
		$('.wrapbg-box i').css({
			"background": "url(ossweb-img/hero/mc-hero3.png) no-repeat",
			"background-size": "100% auto"
		});
		$('.wrapbg-box img').css({
			"filter": "blur(3px)"
		});
	} else {
		$('.wrapbg-box i').css({
			"background": "url(ossweb-img/hero/bg-mc-img.png) no-repeat",
			"background-size": "100% auto"
		});
		$('.wrapbg-box img').css({
			"filter": "blur(0px)"
		});
	}
	$('.heros').hide().eq(idx).fadeIn()

})
$('.heroskill b').on('click', function() {
	var idx = $(this).index()
	$('.heroskill b').removeClass('on').eq(idx).addClass('on');
})
for(let i = 0; i < $('.hero2 ul li img').length; i++) {
	$('.hero2 ul li img').eq(i).on("mouseenter", function() {
		$(this).siblings().show();
	})
}
for(let i = 0; i < $('.hero2 ul li img').length; i++) {
	$('.hero2 ul li img').eq(i).on("mouseleave", function() {
		$(this).siblings().hide();
	})
}
//for(let i = 0; i < $('.hero3 .skill-img-box img').length; i++) {
//	$('.hero3 .skill-img-box img').eq(i).on("mouseenter", function() {
//		$(this).siblings().show();
//	})
//}
//for(let i = 0; i < $('.hero3 .skill-img-box img').length; i++) {
//	$('.hero3 .skill-img-box img').eq(i).on("mouseleave", function() {
//		$(this).siblings().hide();
//	})
//}
$(".hero3 .skill-img-box").mouseover (function(){
		$(this).children(".skill-bubble").css({"display": "block"});
	})
	$(".hero3 .skill-img-box").mouseout(function(){
		$(this).children(".skill-bubble").css({"display": "none"});
	})


function TGDialogS(e) {
	// ����milo������dialog���
	need("biz.dialog", function(Dialog) {
		Dialog.show({
			id: e,
			bgcolor: '#000', //���������֡�����ɫ����ʽΪ"#FF6600"�����޸ģ�Ĭ��Ϊ"#fff"
			opacity: 50 //���������֡���͸���ȣ���ʽΪ��10-100������ѡ
		});
	});
}

function closeDialog() {
	// ����milo������dialog���
	need("biz.dialog", function(Dialog) {
		Dialog.hide();
	});
}

$('.hero1 .btn-hero1-play').click(function() {

	RClientWindowMessenger.sendMessage({
		messageType: 'rcp-fe-lol-home-open-full-page-modal',
		data: {
			url: 'https://lol.qq.com/client/lcu/page/video.html?vid=z3031bawfwa' // vid Ϊ��Ѷ��Ƶvid
		}
	});

})