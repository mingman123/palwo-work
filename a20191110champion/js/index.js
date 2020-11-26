function init() {
	
	$(window).resize(function(){
	 	setHeight()
	});
	function setHeight(){
		$(".header").css("height",$("#video1").height());
	}
    function TGDialogS(e) {
        // ����milo������dialog���
        need("biz.dialog", function (Dialog) {
            Dialog.show({
                id: e,
                bgcolor: '#000', // ���������֡�����ɫ����ʽΪ"#FF6600"�����޸ģ�Ĭ��Ϊ"#fff"
                opacity: 50 // ���������֡���͸���ȣ���ʽΪ��10-100������ѡ
            });
        });
    }
    function closeDialog() {
        // ����milo������dialog���
        need("biz.dialog", function (Dialog) {
            Dialog.hide();
        });
    }
    $('.btn-play').on('click', function () {
        var player = new Txplayer({
            containerId: 'dia-video-cont',
            vid: '',
            width: '100%',
            height: '100%',
            autoplay: true
        });
        TGDialogS('dia-video');
    });
    $('.dia-close').on('click', function () {
        $('.video-cont').empty();
    });
    
    if (/(iPhone|iPad|iPod|iOS|Android|Windows Phone|BlackBerry|SymbianOS)/i.test(navigator.userAgent)) {
        // �ƶ���
        milo.ready(function () {
            need("biz.login", function (LoginManager) {
                LoginManager.init(); // ��ʼ����¼�ؼ�
                LoginManager.checkLogin(function () {
                    // ����Ƿ��¼������ѵ�¼��ִ�и÷���
                    LoginManager.init();
                    // g("userinfo").innerHTML = LoginManager.getUin();
                }, function () {
                    // ���δ��¼����ת��¼ҳ��
                    LoginManager.init();
                });
            });
        });
        $('#video1').remove();
    } else {
        // PC
        $('#video1').attr('src' , mediaURLData['5575'])
        window.onload = function(){
		var time = setTimeout(function(){
			setHeight();
		},100)
			
		}
    }
}


