//登录
milo.addEvent(g("dologin"), "click", function() {
    need("biz.login", function(LoginManager){
        LoginManager.init({
          	needReloadPage : true
        });
        LoginManager.login();
    });
    return false;
});
milo.addEvent(g("dologout"), "click", function() {
    need("biz.login", function(LoginManager){
        LoginManager.logout();
    });
    return false;
});
milo.ready(function() {
    need("biz.login", function(LoginManager){
        LoginManager.checkLogin(function(){
            g("login_qq_span").innerText=LoginManager.getUserUin();//获取QQ号
            amsInit(178183, 525639);
        });
    });
});



//弹窗
function TGDialogS(e){
    // 利用milo库引入dialog组件
    need("biz.dialog",function(Dialog){
        Dialog.show({
            id:e,
            bgcolor:'#000', //弹出“遮罩”的颜色，格式为"#FF6600"，可修改，默认为"#fff"
            opacity:50 //弹出“遮罩”的透明度，格式为｛10-100｝，可选
        });
    });
}
function closeDialog(){
    // 利用milo库引入dialog组件
    need("biz.dialog",function(Dialog){
        Dialog.hide();
    });
}



//交互
$(function(){
	$(".box3 .left a").click(function(){
		$(this).addClass("on").siblings().removeClass("on");
		$(".box3 .right ul").hide().eq($(".box3 .left a").index(this)).show();
	})
	
	$(".head .btn-lq").click(function(){
		TGDialogS(dia2)
	})
})

		    
//侧边导航start
	var isShow = true;	
	$(document).ready(function() {
 	 	$(window).scroll(function() {
			//获取文档滚动高度
			//当页面滚动到一定高度时，侧边导航灵活切换类
		    var top = $(document).scrollTop();
			function scrollNav(num1,num2,index){
				if(num1 <= top && top <=num2){
					$(".nav a").removeClass('on').eq(index).addClass('on');
				}
			}
			scrollNav(1082,2028,0);
			scrollNav(2025,2960,1);
			scrollNav(2960,3858,2);
			scrollNav(3858,4520,3);
			scrollNav(4520,5388,4);
			if((top <500)){
				$('.nav').hide();
			} else {
				$('.nav').fadeIn();
				}	
		});
	});
//锚点到达目标位置慢慢滑过
$('.nav a').click(function() {
   $("html, body").animate({scrollTop: $($(this).attr("href")).offset().top + "px"}, {duration: 1000,easing: "linear"
	 });
return false;
});
//侧边导航end
		    