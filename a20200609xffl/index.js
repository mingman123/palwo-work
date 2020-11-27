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
		//QQ登录
		milo.addEvent(g('btn_qqlogin'), 'click', function(e) {
			LoginManager.login();
		});

		//注销
		milo.addEvent(g("btn_logout"), "click", function() {
			LoginManager.logout();
		})

		//执行验证登陆操作
		LoginManager.checkLogin(function(userinfo) {
			//此处返回用户的基本信息
			amsInit(304638, 664738);
		}, function() {
			console.log("未登录");
			//LoginManager.init();
		});
	});
});