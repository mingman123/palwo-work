$('.cont2 li').mouseover(function() {
	$(this).children('.name').css('display', 'block');
})
$('.cont2 li').mouseout(function() {
	$('.name').css('display', 'none');
})
$('.cont1 ul').mouseover(function() {
	$(this).parent().children('.name').css('display', 'block');
})
$('.cont1 ul').mouseout(function() {
	$('.name').css('display', 'none');
})
milo.ready(function() {
	need("biz.login", function(LoginManager) {
		//QQ��¼
		milo.addEvent(g('btn_qqlogin'), 'click', function(e) {
			LoginManager.login();
		});

		//ע��
		milo.addEvent(g("btn_logout"), "click", function() {
			LoginManager.logout();
		})

		//ִ����֤��½����
		LoginManager.checkLogin(function(userinfo) {
			//�˴������û��Ļ�����Ϣ
			amsInit(304638, 664738);
		}, function() {
			console.log("δ��¼");
			//LoginManager.init();
		});
	});
});