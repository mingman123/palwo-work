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
	'title': 'ƻ�������ס�����Ƥ��������ʵ۵�����Ӯ',
	'summery': '���ྪϲ�������ˡ�����һ�ġ��',
	'subtitle': 'ƻ�������ס�����Ƥ��������ʵ۵�����Ӯ', //������Ĭ����ȡtitle
	'img': 'https://game.gtimg.cn/images/lol/act/a20200415skinselling/share.jpg',
	'url': location.href.split('?')[0],
	'act': 'a20200415skinselling', //���������������ͳ�Ʒ�����
	'WXtrigger': function(res) {
		//΢�Ŷ����ص�����׽����
	},
	'WXsuccess': function(res) {
		//΢�ųɹ��ص�
		if(!res) return;
		if(res.errMsg == 'sendAppMessage:ok') {
			//΢�ŷ������
			PTTSendClick('btn', 'share-wxgr', '΢�ŷ������');
		} else if(res.errMsg == 'shareTimeline:ok') {
			//΢�ŷ�������Ȧ
			PTTSendClick('btn', 'share-wxpyq', '΢�ŷ�������Ȧ');
		} else if(res.errMsg == 'shareQQ:ok') {
			//΢�ŷ�����QQ
			PTTSendClick('btn', 'share-wxtqq', '΢�ŷ�����QQ');
		}
	},
	'WXcancel': function(res) {
		//΢�ŷ���ȡ�������ص�
		PTTSendClick('btn', 'share-wx-cancel', '΢�ŷ���ȡ�������ص�');
	},
	'WXfail': function(res) {
		//΢�ŷ���ʧ�ܶ����ص�
		PTTSendClick('btn', 'share-wx-fail', '΢�ŷ���ʧ�ܶ����ص�');
	},
	'QQtrigger': function(res) {
		//QQ�����ص�
	},
	'QQcallback': function(res) {
		//QQ����ɹ�
		PTTSendClick('btn', 'share-qq-success', 'QQ����ɹ�');
	}
});