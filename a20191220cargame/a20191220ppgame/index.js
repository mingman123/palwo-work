milo.ready(function () {
    need("biz.login", function (LoginManager) {
        LoginManager.init({
            appConfig: {
                "avoidConflict": "false",//Ĭ��ֵΪ�գ��ж��Ƿ���ҪУ��΢�ŵ�¼̬���ţ���Ϊtrue��Ϊ����У�飬��Ϊfalse��Ϊ��У�飬Ĭ��ֵ""��ʾ��΢�Ż�����У�飬����app�����²�У��
                "QQBrowserAppId": "xxx",  //��QQ������������APPID����ϵ�ڲ�ͬѧ
                "WxAppId": "xxxxxxxxxxx",  //��Ҫ��΢������openLinkȨ�ޣ���ϵ�ڲ�ͬѧ
                "AppName": "ҵ�����������",  //ҵ�����������
                "scope": "snsapi_base",   //Ĭ���� snsapi_base ��Ĭ��Ȩ�������Ϸ�޾�ĬȨ�ޣ�����Ҫ�ֶ��ĳ� snsapi_userinfo
                "LogoUrl": "//ossweb-img.qq.com/images/feiji/web201507/logo.png"   //ҵ������Ȩʱ��Ҫ��ʾ�������α�׼Logo��ͼƬҪ�󣺳ߴ磺100x100px
            }
        });

        //QQ��¼
        milo.addEvent(g('ptLoginBtn'), 'click', function (e) {
            LoginManager.login();
        });

        //΢�ŵ�¼
        milo.addEvent(g('wxloginBtn'), 'click', function (e) {
            LoginManager.loginByWX();
        });

        //����¼̬
        LoginManager.checkLogin(function (userInfo) {
            console.log("�ѵ�¼");
            console.log("��¼��Ϣ��", userInfo);
        }, function () {
            console.log("δ��¼");
        });

        //ע��
        milo.addEvent(g("ptLogoutBtn"), "click", function () {
            LoginManager.logout(
                {
                    logoutCallback: function () {
                        alert("��ע��");
                    }
                }
            );
        })
    });
});


// ����
TGMobileShare({
    shareTitle: '��������|�����ö��Ҷ���', //�����û�����Ϊ��ʱ��ҳ����title�����ȡtitle
    shareDesc: '�´�������װ�������峵�ơ���Ӱ�����Ƚ��������죡', //�����û�����Ϊ��ʱ��ҳ����Description�����ȡDescription
    shareImgUrl: 'https://game.gtimg.cn/images/wepop/cp/a20191220ppgame/share.jpg', //����ͼƬ�ߴ�200*200������д����·��
    shareLink: '', //��������Ҫ����ǰҳ��ͬ����(��Q���������Ҫ��) ,�����û�����Ϊ��ʱ��Ĭ�ϵ�ȡ��ǰURL
    actName: 'a20191220ppgame' //���������������ͳ�Ʒ�������ר��һ�����Ŀ¼������a20151029demo
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


//����ʱ
var startTime = new Date("2019/12/26");
  setInterval(function () {
    var nowTime = new Date();
    var time = startTime - nowTime;
    var day = parseInt(time / 1000 / 60 / 60 / 24);
    var hour = parseInt(time / 1000 / 60 / 60 % 24);
    var minute = parseInt(time / 1000 / 60 % 60);
    var seconds = parseInt(time / 1000 % 60);
    if(time>0){
    	$('.timespan').html(day + "��" + hour + "Сʱ" + minute + "����");
  }else{
  			$('.timespan').html('0��0Сʱ0����');
  		};
	}, 1000);


