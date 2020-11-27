function TGDialogS(e) {
	// 利用milo库引入dialog组件
	need("biz.dialog", function(Dialog) {
		Dialog.show({
			id: e,
			bgcolor: '#000', //弹出“遮罩”的颜色，格式为"#FF6600"，可修改，默认为"#fff"
			opacity: 80 //弹出“遮罩”的透明度，格式为｛10-100｝，可选
		});
	});
}
//关闭弹窗
function closeDialog() {
	// 利用milo库引入dialog组件
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

// 移动登录
milo.ready(function() {
	need("biz.login", function(LoginManager) {
		LoginManager.init();

		//QQ登录
		milo.addEvent(g('ptLoginBtn'), 'click', function(e) {
			LoginManager.login();
		});

		//注销
		milo.addEvent(g("ptLogoutBtn"), "click", function() {
			LoginManager.logout({
				logoutCallback: function() {}
			});
		});

		//检查登录态
		LoginManager.checkLogin(function(userInfo) {
			console.log("已登录：\n", userInfo);
			amsInit(266697, 617865);
			$("#login_qq_span").html(LoginManager.getUserUin()); //获取QQ号
		}, function() {
			console.log("未登录");
		});
	});
});

init_ZMApp({
	'title': '苹果三件套、至臻皮肤、斗鱼皇帝等你来赢',
	'summery': '更多惊喜就在掌盟“鱼乐一夏”活动',
	'subtitle': '苹果三件套、至臻皮肤、斗鱼皇帝等你来赢',
	'img': 'https://game.gtimg.cn/images/lol/act/a20200616summer/m/share.jpg',
	'url': location.href.split('?')[0],
	'WXtrigger': function(res) {
		//微信动作回调
	},
	'WXsuccess': function(res) {
		//微信成功回调
		if(!res) return;
		if(res.errMsg == 'sendAppMessage:ok') {
			//微信分享个人
			PTTSendClick('btn', 'sharewx1', '分享给好友');
		} else if(res.errMsg == 'shareTimeline:ok') {
			//微信分享朋友圈
			PTTSendClick('btn', 'sharewx2', '分享到朋友圈');
		} else if(res.errMsg == 'shareQQ:ok') {
			//微信分享至QQ
			PTTSendClick('btn', 'shareqq', '分享到QQ');
		}
	},
	'WXcancel': function(res) {
		//微信分享取消动作回调
		PTTSendClick('btn', 'sharewx_cancel', '分享取消');
	},
	'WXfail': function(res) {
		//微信分享失败动作回调
		PTTSendClick('btn', 'sharewx_fail', '分享失败');
	},
	'QQtrigger': function(res) {
		//QQ动作回调

	},
	'QQcallback': function(res) {
		//QQ分享成功
		PTTSendClick('btn', 'shareqq_succ', 'QQ分享成功');
	},
	'LOL_APPsuccess': function(res) {
		//掌盟分享成功
		PTTSendClick('btn', 'sharezm_succ', '掌盟分享成功');
	}
});