globalNav.initNav(0, false);

// PC登录
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
		
// 侧边栏展开
$('.is-login .p3').on('click', function(){
	$('.side').css('width', '555px');
	$('.open').addClass('show');
	$('.is-login').addClass('hide');
});

// 侧边栏收起
$('.open .close').on('click', function(){
	$('.side').css('width', '196px');
	$('.open').removeClass('show');
	$('.is-login').removeClass('hide');
});