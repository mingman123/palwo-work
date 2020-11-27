var swiper1 = new Swiper('.swiper-container1', {
	slidesPerView: 'auto',
	spaceBetween: 10,
	autoplay: {
		delay: 0,
		stopOnLastSlide: false,
		disableOnInteraction: true,
	},
	freeMode : true,
		loop : true,
		speed:1000,
})
var swiper2 = new Swiper('.swiper-container2', {
	slidesPerView: 'auto',
	spaceBetween: 10,
	autoplay: {
		delay: 0,
		stopOnLastSlide: false,
		disableOnInteraction: true,
	},
		loop : true,
		speed:1000,
})
var swiper3 = new Swiper('.swiper-container3', {
	slidesPerView: 'auto',
	spaceBetween: 18,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	init: false,
	//	loop : true,
})

window.onload = function() {
	if($(".video-bg").hasClass("on")) {
		$(".anchor li").click(function() {
			$(".btn-play").css('display', 'none');
			var idx = $(this).index();
			$(this).addClass("on").siblings().removeClass("on");
			$(".describe li").removeClass("on").eq(idx).addClass("on");
			var vidArr = ['n3100gj8ttp', 'a3035c2zaqx', 'k3035ycch0z', 'u30354hdaf5', 'r3035y9y6hp', 'a3035c2zaqx'];
			var vid = vidArr[$(this).index()];
			console.log(vid);
			var player = new Txplayer({
				containerId: 'container',
				vid: vid,
				width: '100%',
				height: '100%',
				autoplay: true
			});
		})
		$('.btn-play').click(function() {
			$(this).css('display', 'none');
			player = new Txplayer({
				containerId: 'container',
				vid: 'n3100gj8ttp',
				width: '100%',
				height: '100%',
				autoplay: true
			});
		});

	} else {
		$(".anchor li").click(function() {
			var idx = $(this).index();
			$(this).addClass("on").siblings().removeClass("on");
			$(".describe li").removeClass("on").eq(idx).addClass("on");
		})
	}
}
$(function() {
	$(window).scroll(function() {
		var top = $(window).scrollTop();
		if(top < 1030) {
			$(".navs").removeClass("on");

		} else {
			$(".navs").addClass("on");
		}
		if($(".cont1").hasClass("on")) {
			if(top < 1730) {
				$(".nav1").addClass('on').siblings().removeClass('on');
			} else if(top > 2700) {
				$(".nav3").addClass('on').siblings().removeClass('on');
			} else {
				$(".nav2").addClass('on').siblings().removeClass('on');
			}
		} else {
			$(".nav").removeClass("on");
			
		}

	})
	$('.navs .nav4').click(function() {
		$(".cont").removeClass("on");
		$(".cont2").addClass("on");
		swiper3.init();
		$(this).addClass("on").siblings().removeClass("on");
		 $("html,body").animate({scrollTop:"1030px"},'300');
	})
	$('.navs a:lt(3)').click(function() {
		swiper1.init();
		swiper2.init();
		$(".cont").removeClass("on");
		$(".cont1").addClass("on");
		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top - 72 + "px"
		}, {
			duration: 300,
			easing: "linear"
		});
		return false;
	});

})

milo.ready(function() {
	need("biz.login", function(LoginManager) {
		//QQ��¼
		milo.addEvent(g('btn_qqlogin'), 'click', function(e) {
			LoginManager.login();
		});

		//ע��
		milo.addEvent(g("btn_logout"), "click", function() {
			LoginManager.logout();
		})

		var chkLoginFunc = function(str) {
			LoginManager.checkLogin(function() {
				console.log("�ѵ�¼: " + str);
			}, function() {
				console.log("δ��¼: " + str);
			})
		}
		//ִ����֤��½����
		LoginManager.checkLogin(function(userinfo) {
			//�˴������û��Ļ�����Ϣ
			console.log("�ѵ�¼��\n", userinfo);
			//�����½������qq��ʹ��LoginManager.getUserFace����ȥ��ȡͷ��
			if(userinfo.logtype == "qq") {
				LoginManager.getUserFace(function(data) {
					$("#ams_user_headimg").html("<img src=\"" + data.userFace + "\"> ");
				});
			} else if(userinfo.logtype == "wx") {
				//�����½������wx΢�ţ���ֱ�ӻ�ȡ������Ϣ���ͷ��
				$("#ams_user_headimg").html("<img src=\"" + userinfo.headimgurl + "/64\"> ");
			}

		}, function() {
			console.log("δ��¼");
			//LoginManager.init();
		});
	});
});