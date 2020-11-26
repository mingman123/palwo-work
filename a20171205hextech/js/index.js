/* 侧导航 函数 S */
function slide(e){
	var offset = $(e).offset().top;
	$("html,body").animate({"scrollTop":offset});
}

var sideA = $('.side-ul a');
sideA.click(function() {
	var idx = sideA.index(this);
//	if(idx==4) return;
	sideA.removeClass('on');
	sideA.eq(idx).addClass('on');

});



$('.side-ul a').click(function() {
	pgvSendClick({hottag:'act.a20171205hextech.btn.sidebtn'});
});


// 弹窗组件
function TGDialogS(e){
	need("biz.dialog-min",function(Dialog){
		Dialog.show({
			id:e,
			bgcolor:'#000', //弹出“遮罩”的颜色，格式为"#FF6600"，可修改，默认为"#fff"
			opacity:50 //弹出“遮罩”的透明度，格式为｛10-100｝，可选
		});
	});
}
function closeDialog(){
	need("biz.dialog-min",function(Dialog){
		Dialog.hide();
	});
}

// 登录组件 S
function isPC() {
	var os = new Array("Android", "iPhone", "Windows Phone", "iPod", "BlackBerry", "MeeGo", "SymbianOS"); // 其他类型的移动操作系统类型，自行添加
	var info = navigator.userAgent;
	var len = os.length;
	for(var i = 0; i < len; i++) {
		if(info.indexOf(os[i]) > 0) {
			return false;
		}
	}
	return true;
}
if(isPC()) {
	$('.login-pc').show();
	$('.login-h5').hide();
	milo.addEvent(g("dologin"), "click", function() {
		need("biz.login-min",function(LoginManager){
		LoginManager.init({
				needReloadPage:true
			});
			LoginManager.login();
		});
		return false;
	});
	milo.addEvent(g("dologout"), "click", function() {
		need("biz.login-min",function(LoginManager){
			LoginManager.logout();
		});
		return false;
	});
	milo.ready(function() {
		need("biz.login-min",function(LoginManager){
			LoginManager.checkLogin(function(){
				CGA.iUin = LoginManager.getUserUin();
				var cookieKey = CGA.dCookieKey + LoginManager.getUserUin();
				var cookieValue = milo.cookie.get(cookieKey);
				if(cookieValue){
					amsInit(219461, 559989);
				}
			});
		});
	});
} else {
	$('.login-pc').hide();
	$('.login-h5').show();//QQ登录
	milo.addEvent(g("ptLoginBtn"), "click", function() {
		need("biz.login",function(LoginManager){
			LoginManager.login({"sData":{"pt_no_onekey":1}});
		});
		return false;
	});
	milo.addEvent(g("ptLogoutBtn"), "click", function() {
		need("biz.login",function(LoginManager){
			LoginManager.logout({logoutCallback:function(){
				$(".login-h5 #unlogin").attr("style", "display:block");
				$(".login-h5 #logined").attr("style", "display:none");
			}});
		});
		return false;
	});
	milo.ready(function() {
		need("biz.login",function(LoginManager){
			LoginManager.checkLogin(function(){
				LoginManager.init();
				g("userinfo").innerHTML = LoginManager.getUserUin();//获取QQ号
				$(".login-h5 #unlogin").attr("style", "display:none");
				$(".login-h5 #logined").attr("style", "display:block");
				CGA.iUin = LoginManager.getUserUin();           
				var cookieKey = CGA.dCookieKey + LoginManager.getUserUin();
				var cookieValue = milo.cookie.get(cookieKey);
				if(cookieValue){
					amsInit(219461, 559989);
				}
			});
		});
	});	
}

// 购买按钮
var priceStorage = 0;
$('#btn-buy1').click(function () {
	sell_id = 0;
	$('#dialog-buy').removeClass('dialog-buy1').removeClass('dialog-buy3').addClass('dialog-buy2');
	$('#dialog-buy .guard img')[0].src = '//game.gtimg.cn/images/lol/act/a20171205hextech/sbuy1.png';
	$('#dialog-buy .guard .name').html('魄罗守卫7天<br>（100Q币）');
	$('#dialog-buy .add1 img')[0].src = '//game.gtimg.cn/images/lol/act/a20171205hextech/nsgive4.png';
	$('#dialog-buy .add1 .name').html('紫色宝箱x11');
	$('#dialog-buy .add2 img')[0].src = '//game.gtimg.cn/images/lol/act/a20171205hextech/sgive1.png';
	$('#dialog-buy .add2 .name').html('钥匙x11');
	$('#dialog-buy .count').html('1');
	$('#dialog-buy .coins').html('100');
	priceStorage = 100;
	TGDialogS('dialog-buy');
});
$('#btn-buy2').click(function () {
	sell_id = 1;
	$('#dialog-buy').removeClass('dialog-buy2').removeClass('dialog-buy3').addClass('dialog-buy1');
	$('#dialog-buy .guard img')[0].src = '//game.gtimg.cn/images/lol/act/a20171205hextech/sbuy2.png';
	$('#dialog-buy .guard .name').html('阴森枯木守卫7天<br>（50Q币）');
	$('#dialog-buy .add1 img')[0].src = '//game.gtimg.cn/images/lol/act/a20171205hextech/nsgive4.png';
	$('#dialog-buy .add1 .name').html('紫色宝箱x5<br>钥匙x5');
	$('#dialog-buy .count').html('1');
	$('#dialog-buy .coins').html('50');
	priceStorage = 50;
	TGDialogS('dialog-buy');
});
$('#btn-buy3').click(function () {
	sell_id = 2;
	$('#dialog-buy').removeClass('dialog-buy2').removeClass('dialog-buy3').addClass('dialog-buy1');
	$('#dialog-buy .guard img')[0].src = '//game.gtimg.cn/images/lol/act/a20171205hextech/sbuy3.png';
	$('#dialog-buy .guard .name').html('美味姜饼守卫7天<br>（10Q币）');
	$('#dialog-buy .add1 img')[0].src = '//game.gtimg.cn/images/lol/act/a20171205hextech/nsgive4.png';
	$('#dialog-buy .add1 .name').html('紫色宝箱x1<br>钥匙x1');
	$('#dialog-buy .count').html('1');
	$('#dialog-buy .coins').html('10');
	priceStorage = 10;
	TGDialogS('dialog-buy');
});
$('#btn-buy4').click(function () {
	sell_id = 3;
	$('#dialog-buy').removeClass('dialog-buy2').removeClass('dialog-buy3').addClass('dialog-buy1');
	$('#dialog-buy .guard img')[0].src = '//game.gtimg.cn/images/lol/act/a20171205hextech/sbuy4.png';
	$('#dialog-buy .guard .name').html('马年铜锣守卫7天<br>（5.5Q币）');
	$('#dialog-buy .add1 img')[0].src = '//game.gtimg.cn/images/lol/act/a20171205hextech/nsgive4.png';
	$('#dialog-buy .add1 .name').html('紫色宝箱x1');
	$('#dialog-buy .count').html('1');
	$('#dialog-buy .coins').html('5.5');
	priceStorage = 5.5;
	TGDialogS('dialog-buy');
});
$('#btn-buy5').click(function () {
	sell_id = 4;
	$('#dialog-buy').removeClass('dialog-buy2').removeClass('dialog-buy3').addClass('dialog-buy1');
	$('#dialog-buy .guard img')[0].src = '//game.gtimg.cn/images/lol/act/a20171205hextech/sbuy5.png';
	$('#dialog-buy .guard .name').html('马到成功守卫7天<br>（5.5Q币）');
	$('#dialog-buy .add1 img')[0].src = '//game.gtimg.cn/images/lol/act/a20171205hextech/sgive1.png';
	$('#dialog-buy .add1 .name').html('钥匙x1');
	$('#dialog-buy .count').html('1');
	$('#dialog-buy .coins').html('5.5');
	priceStorage = 5.5;
	TGDialogS('dialog-buy');
});
$('#btn-buy6').click(function () {
	sell_id = 5;
	$('#dialog-buy').removeClass('dialog-buy1').removeClass('dialog-buy3').addClass('dialog-buy2');
	$('#dialog-buy .guard img')[0].src = '//game.gtimg.cn/images/lol/act/a20171205hextech/sbuy1.png';
	$('#dialog-buy .guard .name').html('魄罗守卫7天<br>（130Q币）');
	$('#dialog-buy .add1 img')[0].src = '//game.gtimg.cn/images/lol/act/a20171205hextech/sgive5.png';
	$('#dialog-buy .add1 .name').html('杰作宝箱 x11<br>钥匙 x11');
	$('#dialog-buy .add2 img')[0].src = '//game.gtimg.cn/images/lol/act/a20171205hextech/sgive6.png';
	$('#dialog-buy .add2 .name').html('至臻点 x13');
	$('#dialog-buy .count').html('1');
	$('#dialog-buy .coins').html('130');
	priceStorage = 130;
	TGDialogS('dialog-buy');
});
$('#btn-buy7').click(function () {
	sell_id = 6;
	$('#dialog-buy').removeClass('dialog-buy1').removeClass('dialog-buy2').addClass('dialog-buy3');
	$('#dialog-buy .guard img')[0].src = '//game.gtimg.cn/images/lol/act/a20171205hextech/sbuy2.png';
	$('#dialog-buy .guard .name').html('阴森枯木守卫7天<br>（65Q币）');
	$('#dialog-buy .add1 img')[0].src = '//game.gtimg.cn/images/lol/act/a20171205hextech/sgive5.png';
	$('#dialog-buy .add1 .name').html('杰作宝箱 x5<br>钥匙 x5');
	$('#dialog-buy .add2 img')[0].src = '//game.gtimg.cn/images/lol/act/a20171205hextech/sgive6.png';
	$('#dialog-buy .add2 .name').html('至臻点 x6');
	$('#dialog-buy .add3 img')[0].src = '//game.gtimg.cn/images/lol/act/a20171205hextech/sgive7.png';
	$('#dialog-buy .add3 .name').html('橙色精萃x50');
	$('#dialog-buy .count').html('1');
	$('#dialog-buy .coins').html('65');
	priceStorage = 65;
	TGDialogS('dialog-buy');
});
$('#btn-buy8').click(function () {
	sell_id = 7;
	$('#dialog-buy').removeClass('dialog-buy1').removeClass('dialog-buy3').addClass('dialog-buy2');
	$('#dialog-buy .guard img')[0].src = '//game.gtimg.cn/images/lol/act/a20171205hextech/sbuy3.png';
	$('#dialog-buy .guard .name').html('美味姜饼守卫7天<br>（13Q币））');
	$('#dialog-buy .add1 img')[0].src = '//game.gtimg.cn/images/lol/act/a20171205hextech/sgive5.png';
	$('#dialog-buy .add1 .name').html('杰作宝箱 x1<br>钥匙 x1');
	$('#dialog-buy .add2 img')[0].src = '//game.gtimg.cn/images/lol/act/a20171205hextech/sgive6.png';
	$('#dialog-buy .add2 .name').html('至臻点 x1');
	$('#dialog-buy .count').html('1');
	$('#dialog-buy .coins').html('13');
	priceStorage = 13;
	TGDialogS('dialog-buy');
});
$('#btn-buy9').click(function () {
	sell_id = 8;
	$('#dialog-buy').removeClass('dialog-buy2').removeClass('dialog-buy3').addClass('dialog-buy1');
	$('#dialog-buy .guard img')[0].src = '//game.gtimg.cn/images/lol/act/a20171205hextech/sbuy4.png';
	$('#dialog-buy .guard .name').html('美味姜饼守卫7天<br>（13Q币））');
	$('#dialog-buy .add1 img')[0].src = '//game.gtimg.cn/images/lol/act/a20171205hextech/sgive3.png';
	$('#dialog-buy .add1 .name').html('杰作宝箱 x1');
	$('#dialog-buy .count').html('1');
	$('#dialog-buy .coins').html('8.5');
	priceStorage = 8.5;
	TGDialogS('dialog-buy');
});
$('#dialog-buy .btn-add').click(function () {
	$('#dialog-buy .count').html(parseFloat($('#dialog-buy .count').html()) + 1);
	$('#dialog-buy .coins').html(parseFloat($('#dialog-buy .count').html()) * priceStorage);
});
$('#dialog-buy .btn-dec').click(function () {
	$('#dialog-buy .count').html(parseFloat($('#dialog-buy .count').html()) - 1 > 1 ? parseFloat($('#dialog-buy .count').html()) - 1 : 1);
	$('#dialog-buy .coins').html(parseFloat($('#dialog-buy .count').html()) * priceStorage);
});