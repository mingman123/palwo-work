function TGDialogS(e) {
	// ����milo������dialog���
	need("biz.dialog", function(Dialog) {
		Dialog.show({
			id: e,
			bgcolor: '#000', //���������֡�����ɫ����ʽΪ"#FF6600"�����޸ģ�Ĭ��Ϊ"#fff"
			opacity: 80 //���������֡���͸���ȣ���ʽΪ��10-100������ѡ
		});
	});
}
//�رյ���
function closeDialog() {
	// ����milo������dialog���
	need("biz.dialog", function(Dialog) {
		Dialog.hide();
	});
}
window.onload = function(){
	TGDialogS("dia6");
}

$(function() {
	$(".nav-cont1").click(function() {
		$(".nav-box").removeClass("on");
		$(".main2").hide();
		$(".main1").show();
	})
	$(".nav-cont2").click(function() {
		$(".nav-box").addClass("on");
		$(".main1").hide();
		$(".main2").show();
	})
//	$(".box3 .btn-get6").click(function() {
//		$(".dia-share1").show();
//	})
//	$(".box3 .btn-get7").click(function() {
//		$(".dia-share2").show();
//	})
//	$(".dia-share").click(function() {
//		$(this).hide();
//	})
	$(".dia4 .card-com li.on").click(function() {
		$(".dia4 .card-com li.on").children("span").hide()
		$(this).children("span").show();
	})


	$('.foot-nav a').click(function() {
		//		$(this).addClass('on').siblings().removeClass('on');
		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top + "px"
		}, {
			duration: 300,
			easing: "linear"
		});
		return false;
	});
	window.onscroll = function() {
		var top = $(window).scrollTop();
		var num1 = $($('.foot-nav1').attr("href")).offset().top;
		var num2 = $($('.foot-nav2').attr("href")).offset().top - 20;
		var num3 = $($('.foot-nav3').attr("href")).offset().top - 20;
		if(top < num2) {
			$(".foot-nav1").addClass('on').siblings().removeClass('on');
		} else if(top > num3) {
			$(".foot-nav3").addClass('on').siblings().removeClass('on');
		} else {
			$(".foot-nav2").addClass('on').siblings().removeClass('on');
		}

	}
})

// �ƶ���¼
milo.ready(function() {
	need("biz.login", function(LoginManager) {
		LoginManager.init();

		//QQ��¼
		milo.addEvent(g('ptLoginBtn'), 'click', function(e) {
			LoginManager.login();
		});

		//ע��
		milo.addEvent(g("ptLogoutBtn"), "click", function() {
			LoginManager.logout({
				logoutCallback: function() {}
			});
		});

		//����¼̬
		LoginManager.checkLogin(function(userInfo) {
			console.log("�ѵ�¼��\n", userInfo);
			amsInit(266697, 617865);
			$("#login_qq_span").html(LoginManager.getUserUin()); //��ȡQQ��
		}, function() {
			console.log("δ��¼");
		});
	});
});

init_ZMApp({
	'title': 'ƻ�������ס�����Ƥ��������ʵ۵�����Ӯ',
	'summery': '���ྪϲ�������ˡ�����һ�ġ��',
	'subtitle': 'ƻ�������ס�����Ƥ��������ʵ۵�����Ӯ',
	'img': 'https://game.gtimg.cn/images/lol/act/a20200616summer/m/share.jpg',
	'url': location.href.split('?')[0],
	'WXtrigger': function(res) {
		//΢�Ŷ����ص�
	},
	'WXsuccess': function(res) {
		//΢�ųɹ��ص�
		if(!res) return;
		if(res.errMsg == 'sendAppMessage:ok') {
			//΢�ŷ������
			PTTSendClick('btn', 'sharewx1', '���������');
		} else if(res.errMsg == 'shareTimeline:ok') {
			//΢�ŷ�������Ȧ
			PTTSendClick('btn', 'sharewx2', '��������Ȧ');
		} else if(res.errMsg == 'shareQQ:ok') {
			//΢�ŷ�����QQ
			PTTSendClick('btn', 'shareqq', '����QQ');
		}
	},
	'WXcancel': function(res) {
		//΢�ŷ���ȡ�������ص�
		PTTSendClick('btn', 'sharewx_cancel', '����ȡ��');
	},
	'WXfail': function(res) {
		//΢�ŷ���ʧ�ܶ����ص�
		PTTSendClick('btn', 'sharewx_fail', '����ʧ��');
	},
	'QQtrigger': function(res) {
		//QQ�����ص�

	},
	'QQcallback': function(res) {
		//QQ����ɹ�
		PTTSendClick('btn', 'shareqq_succ', 'QQ����ɹ�');
	},
	'LOL_APPsuccess': function(res) {
		//���˷���ɹ�
		PTTSendClick('btn', 'sharezm_succ', '���˷���ɹ�');
	}
});