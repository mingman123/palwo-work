function TGDialogS(e) {
	// 利用milo库引入dialog组件
	need("biz.dialog", function(Dialog) {
		Dialog.show({
			id: e,
			bgcolor: '#000', //弹出“遮罩”的颜色，格式为"#FF6600"，可修改，默认为"#fff"
			opacity: 50 //弹出“遮罩”的透明度，格式为｛10-100｝，可选
		});
	});
}

function closeDialog() {
	// 利用milo库引入dialog组件
	need("biz.dialog", function(Dialog) {
		Dialog.hide();
	});
}

var swiper1 = new Swiper('.swiper-container1', {
	slidesPerView: 'auto',
	spaceBetween: 12,
	//	init: false,
	scrollbar: {
		el: '.swiper-scrollbar',
		hide: true,
	},
//	loop:true,
});

var swiper2 = new Swiper('.swiper-container2', {
	slidesPerView: 'auto',
	spaceBetween: 12,
	scrollbar: {
		el: '.swiper-scrollbar',
		hide: true,
	},
//		init: false,
});
//window.onload=function(){
//	swiper2.init();
//}

var mySwiper3 = new Swiper('.swiper-container3', {
	loop: true, // 循环模式选项
	navigation: {
		nextEl: '.swiper-button-next3',
		prevEl: '.swiper-button-prev3',
	},
	observer: true,
	observeParents: true,
	init: false,
})

var mySwiper4 = new Swiper('.swiper-container4', {
	loop: true, // 循环模式选项
	navigation: {
		nextEl: '.swiper-button-next4',
		prevEl: '.swiper-button-prev4',
	},
	observer: true,
	observeParents: true,
	init: false,
})

//i提示
$('.btn-ctips').on('click', function() {
	$('.pop-ibox1').css('display', 'block');
	setTimeout(function() {
		$('.pop-ibox1').css('display', 'none');
	}, 2000);
});

// 分享按钮方法
sharepop = document.getElementById('s4Share');

function shareS4() {
	sharepop.style.display = "block";
}
sharepop.onclick = function() {
	sharepop.style.display = "none";
};

//	    点击生成分享图
$('.btn-fximg').on('click', function() {
	$('.pop-sbox').css('display', 'block');
	//$('.pop-share').css('display','none');
});
$('.btn-close1').on('click', function() {
	$('.pop-sbox').css('display', 'none');
});

// 分享按钮方法
sharepop = document.getElementById('s4Share');

function shareS4() {
	sharepop.style.display = "block";
}
sharepop.onclick = function() {
	sharepop.style.display = "none";
};

//	点击收藏
$('.btn-collect').on('click', function() {
	if(!$(this).hasClass('on')) {
		$('.btn-collect').addClass('on');
		$('.pop-ibox2').css('display', 'block');
		var time2 = setTimeout(function() {
			$('.pop-ibox2').css('display', 'none');
		}, 1000);
		window.clearTimeout(time3);
	} else {
		$('.btn-collect').removeClass('on');
		window.clearTimeout(time2);
		$('.pop-ibox3').css('display', 'block');
		var time3 = setTimeout(function() {
			$('.pop-ibox3').css('display', 'none');
		}, 1000);
	}
});

//sid 显示
$(window).scroll(function(){
	var top=$(window).scrollTop();
	if (top<300) {
		$(".sid-lbox").fadeOut(200);
	} else{
		$(".sid-lbox").fadeIn(200);
	}
})

//返回顶部
$('.sid-lbox .btn-totop').click(function() {
	$('html,body').animate({
		scrollTop: '0'
	}, 800);
});

//	图片弹窗1
$('.swiper-container1 .swiper-slide').on('click', function() {
	mySwiper3.init();
	var idx = $(this).index();
	mySwiper3.slideToLoop(idx, 0, false); //切换slide，速度为0秒
	TGDialogS('dia2');
});
//	图片弹窗2
$('.swiper-container2 .swiper-slide').on('click', function() {
	mySwiper4.init();
	var idx = $(this).index();
	mySwiper4.slideToLoop(idx, 0, false); //切换slide，速度为0秒
	TGDialogS('dia3');
});

//获奖后 类型切换
$(document).on('click', '.awarded-tab a', function() {
	var idx = $(this).index();
	$('.awarded-tab a').removeClass('on').eq(idx).addClass('on');
	$('.awarded .slwork-list').hide().eq(idx).show();
})

//视频弹窗
var player

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
$('.dia1 .dia-close').click(function() {
	$('#container').html('');
	player.mute();
})

//	    点击弹出分享方式
$('.sid-lbox .btn-fxhd').on('click', function() {
	$('.pop-share').css('display', 'block');
});
$('.bottom-fix .btn-share').on('click', function() {
	$('.pop-share').css('display', 'block');
});
$('.pop-share a').on('click', function() {
	$('.pop-share').css('display', 'none');
});

function copyText() {
	var text = 'https://zhuimeng.qq.com/act/1187/4a3e7948d2ca6fb0/a20190625dream/actlist.shtml';
	var input = document.createElement('input');
	input.setAttribute('id', 'copyInput');
	input.setAttribute('value', text);
	document.getElementsByTagName('body')[0].appendChild(input);
	document.getElementById('copyInput').select();
	if(document.execCommand('copy')) {
		alert('复制成功');
	}
	document.getElementById('copyInput').remove();
}
$('.dia4 .btn-copy').on('click', function() {
	copyText();
});