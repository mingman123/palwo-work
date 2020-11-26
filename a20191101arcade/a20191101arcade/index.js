// 移动登录
milo.ready(function () {
	need("biz.login", function (LoginManager) {
		LoginManager.init({
			appConfig: {
				"QQBrowserAppId": "106",
				"WxAppId": "wxb574fcc7b3813a37",
				"AppName": "英雄联盟电竞经理",
				"sServiceType":'lole',
				"scope":"snsapi_userinfo",   //默认是 snsapi_base 静默授权，如果游戏无静默权限，就需要手动改成 snsapi_userinfo
			}
		});

		//QQ登录
		milo.addEvent(g('btn_qqlogin'), 'click', function (e) {
			LoginManager.login();
		});

		//微信登录
		milo.addEvent(g('btn_wxlogin'), 'click', function (e) {
			if(CheckApp.Is_Plat == "WX") {
				LoginManager.loginByWX();
			} else {
				var url = "https://game.weixin.qq.com/cgi-bin/comm/openlink?noticeid=90232845&appid=wx835b40dcca529a84&url=https%3A%2F%2Flole.qq.com%2Fact%2Fa20190910egamebook%2Findex.html";
				window.location.href=url;
			}
		});

		//注销
		milo.addEvent(g("btn_logout"),"click",function(){
			LoginManager.logout({
				logoutCallback:function(){
					// alert("已注销");
				}
			});
		});

		//检查登录态
		LoginManager.checkLogin(function(userInfo){
			EAS.SendClick({'e_c': 'egameorder.login-init','c_t':4});
			console.log("已登录：\n",userInfo);
			$("#userinfo").html(LoginManager.getUserUin());//获取QQ号
			PageInit();
			SwitchWxStatus(userInfo)
		},function(){
			EAS.SendClick({'e_c': 'egameorder.unlogin-init','c_t':4});
			if(CheckApp.Is_Plat == 'WX'){
				LoginManager.loginByWX();
			} else if (CheckApp.Is_Plat == 'QQ'){
				LoginManager.login();
			} else {
				console.log("未登录");
				PageInit();
			}
			SwitchWxStatus()
		});
	});
});


init_ZMApp({
   'title':'加入赛前充能站，赢取首测激活码',
   'summery':'《英雄联盟电竞经理》积分任务开启！',
   'subtitle' : '加入赛前充能站，赢取首测激活码',
   'img':'https://game.gtimg.cn/images/lole/act/a20191101arcade/share.png',
   'url':location.href.split('?')[0],
   'WXtrigger':function(res){
        //微信动作回调
    },
    'WXsuccess':function(res){
        //微信成功回调
        if(!res) return;
        if(res.errMsg == 'sendAppMessage:ok') {
            //微信分享个人
            PTTSendClick('btn','sharewx1','分享给好友');
        } else if(res.errMsg == 'shareTimeline:ok') {
            //微信分享朋友圈
            PTTSendClick('btn','sharewx2','分享到朋友圈');
        }else if(res.errMsg == 'shareQQ:ok'){
            //微信分享至QQ
            PTTSendClick('btn','shareqq','分享到QQ');  
        }
    },
    'WXcancel':function(res){
        //微信分享取消动作回调
        PTTSendClick('btn','sharewx_cancel','分享取消');
    },
    'WXfail':function(res){
        //微信分享失败动作回调
        PTTSendClick('btn','sharewx_fail','分享失败');
    },
    'QQtrigger':function(res){
        //QQ动作回调

    },
    'QQcallback':function(res){
        //QQ分享成功
        PTTSendClick('btn','shareqq_succ','QQ分享成功');
    },
    'LOL_APPsuccess' : function(res){
        //掌盟分享成功
        PTTSendClick('btn','sharezm_succ','掌盟分享成功');
     }
});


function TGDialogS(e){
// 利用milo库引入dialog组件
need("biz.dialog",function(Dialog){
    Dialog.show({
        id:e,
        bgcolor:'#000', //弹出“遮罩”的颜色，格式为"#FF6600"，可修改，默认为"#fff"
        opacity:50 //弹出“遮罩”的透明度，格式为｛10-100｝，可选
        });
    });
}
function closeDialog(){
    // 利用milo库引入dialog组件
need("biz.dialog",function(Dialog){
        Dialog.hide();
    });
}


$(function(){
	var display =$('.cont3 .more').css('display');
	if(display == 'none'){
		$(".btn-more").attr("data-type","1");
		$(".btn-more").html("更多奖品即将更新...");
	}else{
		$(".btn-more").attr("data-type","0");
		$(".btn-more").html("收起<i></i>");
	}
	$(".btn-more").click(function(){
		if($(this).data("type")==1){
			 $(this).attr("data-type","0");
			$(this).html("收起<i></i>");
			$(".cont3 .more").show();
		}else{
			$(this).attr("data-type","1");
			$(this).html("更多奖品即将更新...");
			$(".cont3 .more").hide()
		}
	})
})




