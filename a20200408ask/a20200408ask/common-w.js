init_ZMApp({
	'title': '#��������#������������',
	'summery': 'LPL�ٷ�֪����˵������ս��������ӿ�������˽���Щս������˲�䣬�������ʰɣ�',
	'subtitle': '#��������#������������',
	'img': 'https://game.gtimg.cn/images/lol/act/a20200108guest/share.jpg',
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

//����΢������Ŵ�
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
		// ������ҳ����ΪĬ�ϴ�С
		WeixinJSBridge.invoke('setFontSizeCallback', {
			'fontSize': 0
		});
		// ��д������ҳ�����С���¼�
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