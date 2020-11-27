init_ZMApp({
	'title': '#红人来了#米勒做客掌盟',
	'summery': 'LPL官方知名解说，坐看战场风起云涌，你想了解哪些战场精彩瞬间，快来提问吧！',
	'subtitle': '#红人来了#米勒做客掌盟',
	'img': 'https://game.gtimg.cn/images/lol/act/a20200108guest/share.jpg',
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

//限制微信字体放大
(function() {
	if(typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
		handleFontSize();
	} else {
		if(document.addEventListener) {
			document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
		} else if(document.attachEvent) {
			document.attachEvent("WeixinJSBridgeReady", handleFontSize);
			document.attachEvent("onWeixinJSBridgeReady", handleFontSize);
		}
	}

	function handleFontSize() {
		// 设置网页字体为默认大小
		WeixinJSBridge.invoke('setFontSizeCallback', {
			'fontSize': 0
		});
		// 重写设置网页字体大小的事件
		WeixinJSBridge.on('menu:setfont', function() {
			WeixinJSBridge.invoke('setFontSizeCallback', {
				'fontSize': 0
			});
		});
	}
})();


$(".tc-fc").click(function(){
	$(this).hide();
	$(".tc-reply").hide();
})