milo.ready(function () {
    need("biz.login", function (LoginManager) {
        LoginManager.init({
            appConfig: {
                "avoidConflict": "false",//默认值为空，判断是否需要校验微信登录态串号，设为true，为必须校验，设为false，为不校验，默认值""表示在微信环境下校验，其它app环境下不校验
                "QQBrowserAppId": "xxx",  //在QQ浏览器端申请的APPID，联系内部同学
                "WxAppId": "xxxxxxxxxxx",  //需要在微信申请openLink权限，联系内部同学
                "AppName": "业务的中文名称",  //业务的中文名称
                "scope": "snsapi_base",   //默认是 snsapi_base 静默授权，如果游戏无静默权限，就需要手动改成 snsapi_userinfo
                "LogoUrl": "//ossweb-img.qq.com/images/feiji/web201507/logo.png"   //业务在授权时需要显示的正方形标准Logo，图片要求：尺寸：100x100px
            }
        });

        //QQ登录
        milo.addEvent(g('ptLoginBtn'), 'click', function (e) {
            LoginManager.login();
        });

        //微信登录
        milo.addEvent(g('wxloginBtn'), 'click', function (e) {
            LoginManager.loginByWX();
        });

        //检查登录态
        LoginManager.checkLogin(function (userInfo) {
            console.log("已登录");
            console.log("登录信息：", userInfo);
        }, function () {
            console.log("未登录");
        });

        //注销
        milo.addEvent(g("ptLogoutBtn"), "click", function () {
            LoginManager.logout(
                {
                    logoutCallback: function () {
                        alert("已注销");
                    }
                }
            );
        })
    });
});

// 分享
TGMobileShare({
    shareTitle: '繁荣山丘首届赛车涂装大赛火爆进行中！', //不设置或设置为空时，页面有title，则调取title
    shareDesc: '漂移要快，涂装要帅~小伙伴们快来参加涂装大赛~', //不设置或设置为空时，页面有Description，则调取Description
    shareImgUrl: 'https://game.gtimg.cn/images/wepop/cp/a20191009coating/share.jpg', //分享图片尺寸200*200，且填写绝对路径
    shareLink: '', //分享链接要跟当前页面同域名(手Q分享有这个要求) ,不设置或设置为空时，默认调取当前URL
    actName: 'a20191009coating' //点击流命名，用于统计分享量，专题一般采用目录名称如a20151029demo
});



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

$(function(){
  $(".dia1 select").on("click",function(){
    $(this).addClass("on").siblings().removeClass("on");
  });
});



var workBtnClicking = false;
// 上一张图片
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

// 下一张图片
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