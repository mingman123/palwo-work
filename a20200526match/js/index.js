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

var mySwiper1 = new Swiper('.swiper-container1', {
//	loop: true, // ѭ��ģʽѡ��
	slidesPerView: 3,
	//	speed: 300,
//	autoplay: true,
	//   �����Ҫǰ�����˰�ť
	navigation: {
		nextEl: '.swiper-button-next1',
		prevEl: '.swiper-button-prev1',
	},
	 

})

var mySwiper2 = new Swiper('.swiper-container2', {
//	loop: true, // ѭ��ģʽѡ��
	slidesPerView: 3,
	//	speed: 300,
//	autoplay: true,
	//   �����Ҫǰ�����˰�ť
	navigation: {
		nextEl: '.swiper-button-next2',
		prevEl: '.swiper-button-prev2',
	},
	 

})

var mySwiper3 = new Swiper('.swiper-container3', {
	loop: true, // ѭ��ģʽѡ��
//	slidesPerView: 3,
	//	speed: 300,
//	autoplay: true,
	//   �����Ҫǰ�����˰�ť
	navigation: {
		nextEl: '.swiper-button-next3',
		prevEl: '.swiper-button-prev3',
	},
	observer: true,
	observeParents: true,
	init: false,
	

})

var mySwiper4 = new Swiper('.swiper-container4', {
	loop: true, // ѭ��ģʽѡ��
//	slidesPerView: 3,
	//	speed: 300,
//	autoplay: true,
	//   �����Ҫǰ�����˰�ť
	navigation: {
		nextEl: '.swiper-button-next4',
		prevEl: '.swiper-button-prev4',
	},
	observer: true,
	observeParents: true,
	init: false,
	

})

//	ͼƬ����1
$('.main1 .swiper-container1 a').on('click', function() {
	mySwiper3.init();
//	var idx=parseInt($(this).parent().attr('data-swiper-slide-index'));
	var idx=$(this).parent().index();
//	console.log(idx);
	mySwiper3.slideToLoop(idx, 0, false);//�л�slide���ٶ�Ϊ0��
	TGDialogS('dia5');
//	setTimeout(function(){
//		TGDialogS('dia5');
//	 }, 100);
	
});

//	ͼƬ����2
$('.main2 .swiper-container2 a').on('click', function() {
	mySwiper4.init();
//	var idx=parseInt($(this).parent().attr('data-swiper-slide-index'));
	var idx=$(this).parents(".swiper-slide").index();
	console.log(idx);
	mySwiper4.slideToLoop(idx, 0, false);//�л�slide���ٶ�Ϊ0��
	TGDialogS('dia7');
//	setTimeout(function(){
//		TGDialogS('dia5');
//	 }, 100);
	
});


//	i��ʾ
$('.apply-i4').on('mouseover', function() {
	$('.pop-ibox1').css('display', 'block');
});
$('.apply-i4').on('mouseout', function() {
	$('.pop-ibox1').css('display', 'none');
});

//	����ղ�
$('.apply-btn1').on('click', function() {
	if(!$(this).hasClass('on')) {
		$('.apply-btn1').addClass('on').children('span').text('���ղ�');
	} else {
		$('.apply-btn1').removeClass('on').children('span').text('�ղ�');
	}
});

//	    ������
$('.apply-btn2').on('mouseover', function() {
	$('.share-fpop').css('display', 'block');
});
$('.apply-btn2').on('mouseout', function() {
	$('.share-fpop').css('display', 'none');
});
$('.share-fpop').on('mouseover', function() {
	$('.share-fpop').css('display', 'block');
});
$('.share-fpop').on('mouseout', function() {
	$('.share-fpop').css('display', 'none');
});

//	    ������
$('.sid-share').on('mouseover', function() {
	$('.share-fpop2').css('display', 'block');
});
$('.sid-share').on('mouseout', function() {
	$('.share-fpop2').css('display', 'none');
});
$('.share-fpop2').on('mouseover', function() {
	$('.share-fpop2').css('display', 'block');
});
$('.share-fpop2').on('mouseout', function() {
	$('.share-fpop2').css('display', 'none');
});

//  	�ύ�ɹ�
function tjsucc() {
	$('.pop-succ').css('display', 'block');
	closeDialog();
	setTimeout(function() {
		$('.pop-succ').css('display', 'none');
	}, 1000);
}

//��Ƶ����
var player
function showVideoDia(vid) {
	player = new Txplayer({
		containerId: 'container',
		vid: vid,
		width: '100%',
		height: '100%',
		autoplay: true
	});
	TGDialogS('dia4');
}
$('.dia4 .dia-close').click(function() {
	$('#container').html('');
	player.mute();
})

//���ض���
$('.sid .sid-top').click(function () {
	$('html,body').animate({
		scrollTop: '0'}, 800);
});

//��ѡ��һ����Ϊ��ѡ��Ʒ
$('.dia1 li a').click(function () {
	$(this).parent().addClass("on").siblings().removeClass("on");
});
$(".dia2 .txt1").on('input propertychange', function() {
	var num = $(this).val().length;
	var numb=200-num;
	$(".intr").find('span').html(numb);
})
$(".dia2 .txt2").on('input propertychange', function() {
	var num = $(this).val().length;
	var numb=200-num;
	$(".operation").find('span').html(numb);
})


//sid ��ʾ
$(window).scroll(function(){
	var top=$(window).scrollTop();
	if (top<600) {
		$(".sid").fadeOut(200);
	} else{
		$(".sid").fadeIn(200);
	}
})

//ͼƬhoverЧ��
$('.details  .btn-hover').on('mouseover', function() {
	$(this).parent().addClass("on");
});
$('.details  .btn-hover').on('mouseout', function() {
	$(this).parent().removeClass("on");
});
