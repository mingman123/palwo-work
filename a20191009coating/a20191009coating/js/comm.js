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
    shareTitle: '����ɽ���׽�����Ϳװ�����𱬽����У�', //�����û�����Ϊ��ʱ��ҳ����title�����ȡtitle
    shareDesc: 'Ư��Ҫ�죬ͿװҪ˧~С����ǿ����μ�Ϳװ����~', //�����û�����Ϊ��ʱ��ҳ����Description�����ȡDescription
    shareImgUrl: 'https://game.gtimg.cn/images/wepop/cp/a20191009coating/share.jpg', //����ͼƬ�ߴ�200*200������д����·��
    shareLink: '', //��������Ҫ����ǰҳ��ͬ����(��Q���������Ҫ��) ,�����û�����Ϊ��ʱ��Ĭ�ϵ�ȡ��ǰURL
    actName: 'a20191009coating' //���������������ͳ�Ʒ�������ר��һ�����Ŀ¼������a20151029demo
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
  $(".dia1 select").on("click",function(){
    $(this).addClass("on").siblings().removeClass("on");
  });
});



var workBtnClicking = false;
// ��һ��ͼƬ
$('.btn-work-prev').on('click', function () {
  if (workBtnClicking == true) return;
  workBtnClicking = true;
  var $scrollBox = $(this).siblings('.work-pic-scroll');
  var idx = Number($scrollBox.attr('data-idx'));
  var len = $scrollBox.find('img').length - 1;
  if (idx == 0) {
    idx = len;
  } else {
    idx = idx - 1;
  }
  var _left = -(idx * 67) / 10 + 'rem';
  $scrollBox.css('left', _left);
  $scrollBox.attr('data-idx', idx);
  setTimeout(function () {
    workBtnClicking = false;
  }, 300);
});

// ��һ��ͼƬ
$('.btn-work-next').on('click', function () {
  if (workBtnClicking == true) return;
  workBtnClicking = true;
  var $scrollBox = $(this).siblings('.work-pic-scroll');
  var idx = Number($scrollBox.attr('data-idx'));
  var len = $scrollBox.find('img').length - 1;
  if (idx == len) {
    idx = 0;
  } else {
    idx = idx + 1;
  }
  var _left = -(idx * 67) / 10 + 'rem';
  $scrollBox.css('left', _left);
  $scrollBox.attr('data-idx', idx);
  setTimeout(function () {
    workBtnClicking = false;
  }, 300);
});


$(function(){
	$(".btns .btn-rule").click(function(){
		window.location.href="index.html";
	})
})