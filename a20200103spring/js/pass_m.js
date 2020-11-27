// 移动登录
milo.ready(function () {
	need("biz.login", function (LoginManager) {
		LoginManager.init();

		//QQ登录
		milo.addEvent(g('ptLoginBtn'), 'click', function (e) {
			LoginManager.login();
		});

		//注销
		milo.addEvent(g("ptLogoutBtn"),"click",function(){
			LoginManager.logout({
				logoutCallback:function(){}
			});
		});

		//检查登录态
		LoginManager.checkLogin(function(userInfo){
			console.log("已登录：\n",userInfo);
			amsInit(266697, 617865);
		},function(){
			console.log("未登录");
		});
	});
});		

// 移动分享		
init_ZMApp({
	'title': '春节活动好友加速站',
	'summery': '春节活动好友加速站',
	'subtitle': '春节活动好友加速站',
	'img': 'https:ossweb-img/share.jpg',
	'url': location.href.split('?')[0],
	'WXtrigger': function(res) {
		//微信动作回调
	},
	'WXsuccess': function(res) {
		//微信成功回调
		if (!res) return;
		if (res.errMsg == 'sendAppMessage:ok') {
			//微信分享个人
			PTTSendClick('btn', 'sharewx1', '分享给好友');
		} else if (res.errMsg == 'shareTimeline:ok') {
			//微信分享朋友圈
			PTTSendClick('btn', 'sharewx2', '分享到朋友圈');
		} else if (res.errMsg == 'shareQQ:ok') {
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

// 关掉side
$('.not-login .btn-close').click(function(){
	$('.not-login').hide();
});

