// �ƶ���¼
milo.ready(function () {
	need("biz.login", function (LoginManager) {
		LoginManager.init({
			appConfig: {
				"QQBrowserAppId": "106",
				"WxAppId": "wxb574fcc7b3813a37",
				"AppName": "Ӣ�����˵羺����",
				"sServiceType":'lole',
				"scope":"snsapi_userinfo",   //Ĭ���� snsapi_base ��Ĭ��Ȩ�������Ϸ�޾�ĬȨ�ޣ�����Ҫ�ֶ��ĳ� snsapi_userinfo
			}
		});

		//QQ��¼
		milo.addEvent(g('btn_qqlogin'), 'click', function (e) {
			LoginManager.login();
		});

		//΢�ŵ�¼
		milo.addEvent(g('btn_wxlogin'), 'click', function (e) {
			if(CheckApp.Is_Plat == "WX") {
				LoginManager.loginByWX();
			} else {
				var url = "https://game.weixin.qq.com/cgi-bin/comm/openlink?noticeid=90232845&appid=wx835b40dcca529a84&url=https%3A%2F%2Flole.qq.com%2Fact%2Fa20190910egamebook%2Findex.html";
				window.location.href=url;
			}
		});

		//ע��
		milo.addEvent(g("btn_logout"),"click",function(){
			LoginManager.logout({
				logoutCallback:function(){
					// alert("��ע��");
				}
			});
		});

		//����¼̬
		LoginManager.checkLogin(function(userInfo){
			EAS.SendClick({'e_c': 'egameorder.login-init','c_t':4});
			console.log("�ѵ�¼��\n",userInfo);
			$("#userinfo").html(LoginManager.getUserUin());//��ȡQQ��
			PageInit();
			SwitchWxStatus(userInfo)
		},function(){
			EAS.SendClick({'e_c': 'egameorder.unlogin-init','c_t':4});
			if(CheckApp.Is_Plat == 'WX'){
				LoginManager.loginByWX();
			} else if (CheckApp.Is_Plat == 'QQ'){
				LoginManager.login();
			} else {
				console.log("δ��¼");
				PageInit();
			}
			SwitchWxStatus()
		});
	});
});


init_ZMApp({
   'title':'������ǰ����վ��Ӯȡ�ײ⼤����',
   'summery':'��Ӣ�����˵羺����������������',
   'subtitle' : '������ǰ����վ��Ӯȡ�ײ⼤����',
   'img':'https://game.gtimg.cn/images/lole/act/a20191101arcade/share.png',
   'url':location.href.split('?')[0],
   'WXtrigger':function(res){
        //΢�Ŷ����ص�
    },
    'WXsuccess':function(res){
        //΢�ųɹ��ص�
        if(!res) return;
        if(res.errMsg == 'sendAppMessage:ok') {
            //΢�ŷ������
            PTTSendClick('btn','sharewx1','���������');
        } else if(res.errMsg == 'shareTimeline:ok') {
            //΢�ŷ�������Ȧ
            PTTSendClick('btn','sharewx2','��������Ȧ');
        }else if(res.errMsg == 'shareQQ:ok'){
            //΢�ŷ�����QQ
            PTTSendClick('btn','shareqq','����QQ');  
        }
    },
    'WXcancel':function(res){
        //΢�ŷ���ȡ�������ص�
        PTTSendClick('btn','sharewx_cancel','����ȡ��');
    },
    'WXfail':function(res){
        //΢�ŷ���ʧ�ܶ����ص�
        PTTSendClick('btn','sharewx_fail','����ʧ��');
    },
    'QQtrigger':function(res){
        //QQ�����ص�

    },
    'QQcallback':function(res){
        //QQ����ɹ�
        PTTSendClick('btn','shareqq_succ','QQ����ɹ�');
    },
    'LOL_APPsuccess' : function(res){
        //���˷���ɹ�
        PTTSendClick('btn','sharezm_succ','���˷���ɹ�');
     }
});


function TGDialogS(e){
// ����milo������dialog���
need("biz.dialog",function(Dialog){
    Dialog.show({
        id:e,
        bgcolor:'#000', //���������֡�����ɫ����ʽΪ"#FF6600"�����޸ģ�Ĭ��Ϊ"#fff"
        opacity:50 //���������֡���͸���ȣ���ʽΪ��10-100������ѡ
        });
    });
}
function closeDialog(){
    // ����milo������dialog���
need("biz.dialog",function(Dialog){
        Dialog.hide();
    });
}


$(function(){
	var display =$('.cont3 .more').css('display');
	if(display == 'none'){
		$(".btn-more").attr("data-type","1");
		$(".btn-more").html("���ཱƷ��������...");
	}else{
		$(".btn-more").attr("data-type","0");
		$(".btn-more").html("����<i></i>");
	}
	$(".btn-more").click(function(){
		if($(this).data("type")==1){
			 $(this).attr("data-type","0");
			$(this).html("����<i></i>");
			$(".cont3 .more").show();
		}else{
			$(this).attr("data-type","1");
			$(this).html("���ཱƷ��������...");
			$(".cont3 .more").hide()
		}
	})
})




