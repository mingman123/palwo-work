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

window.onload = function() {
	if($(".video-bg").hasClass("on")) {
		$(".anchor li").click(function() {
			$(".btn-play").css('display','none');
			var idx = $(this).index();
			$(this).addClass("on").siblings().removeClass("on");
			$(".describe li").removeClass("on").eq(idx).addClass("on");
			var vidArr = ['n3100gj8ttp', 'a3035c2zaqx', 'k3035ycch0z', 'u30354hdaf5', 'r3035y9y6hp'];
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
		$('.btn-play').click(function(){
			$(this).css('display','none');
				player = new Txplayer({
		        containerId: 'container',
		        vid: 'n3100gj8ttp',
		       	width: '100%',
				height: '100%',
		        autoplay: true
		    });
		});

		
	}else{
		$(".anchor li").click(function() {
			var idx = $(this).index();
			$(this).addClass("on").siblings().removeClass("on");
			$(".describe li").removeClass("on").eq(idx).addClass("on");
		})
	}
}
$(function(){
	$(".foot-nav1").click(function(){
		window.location.href ="index.html#chest"
	})
})


init_ZMApp({
	'title': '苹果三件套、至臻皮肤、斗鱼皇帝等你来赢',
	'summery': '更多惊喜就在掌盟“鱼乐一夏”活动',
	'subtitle': '苹果三件套、至臻皮肤、斗鱼皇帝等你来赢', //不设置默认拉取title
	'img': 'https://game.gtimg.cn/images/lol/act/a20200415skinselling/share.jpg',
	'url': location.href.split('?')[0],
	'act': 'a20200415skinselling', //点击流命名，用于统计分享量
	'WXtrigger': function(res) {
		//微信动作回调，捕捉动作
	},
	'WXsuccess': function(res) {
		//微信成功回调
		if(!res) return;
		if(res.errMsg == 'sendAppMessage:ok') {
			//微信分享个人
			PTTSendClick('btn', 'share-wxgr', '微信分享个人');
		} else if(res.errMsg == 'shareTimeline:ok') {
			//微信分享朋友圈
			PTTSendClick('btn', 'share-wxpyq', '微信分享朋友圈');
		} else if(res.errMsg == 'shareQQ:ok') {
			//微信分享至QQ
			PTTSendClick('btn', 'share-wxtqq', '微信分享至QQ');
		}
	},
	'WXcancel': function(res) {
		//微信分享取消动作回调
		PTTSendClick('btn', 'share-wx-cancel', '微信分享取消动作回调');
	},
	'WXfail': function(res) {
		//微信分享失败动作回调
		PTTSendClick('btn', 'share-wx-fail', '微信分享失败动作回调');
	},
	'QQtrigger': function(res) {
		//QQ动作回调
	},
	'QQcallback': function(res) {
		//QQ分享成功
		PTTSendClick('btn', 'share-qq-success', 'QQ分享成功');
	}
});