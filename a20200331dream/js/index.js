 var swiper = new Swiper('.swiper-container1', {
	pagination: {
	    el: '.swiper-pagination',
	},
});







ulink.$('#login_qq').on('click', function () {
    loginByQQ();
});
ulink.$('#login_wx').on('click', function () {
    loginByWx();
});
ulink.$('#logout_btn,.logout_btn,#btn_logout').on('click', function () {
    PTTSendClick('link','logout','退出');
    LoginManager.logout(function () {
        ulink.Dialog.showLoading();
        setTimeout(function () {
            ulink.Dialog.hideLoading();
            window.location.reload();
        },500)
    });
});
shareOptions.WXsuccess = function (res) { // 微信分享后回调
    sharePoint();
}
shareOptions.QQcallback = function (res) { // 微信分享后回调
    sharePoint();
}
ulink.share.init(shareOptions);
if(typeof LoginManager === "undefined"){
    var LoginManager = ulink.LoginManager;
    LoginManager.init({
        //支持非微信环境拉起微信APP的OpenLink链接
        openLinkUrl: actOption.wxOpenLink
    });
    //登录判断
    LoginManager.checkLogin(function (userInfo) {
        showUserInfo(userInfo)
    }, function () {
        noLoginAct()
    });
}else{
    LoginManager.init({
        //支持非微信环境拉起微信APP的OpenLink链接
        openLinkUrl: actOption.wxOpenLink
    });
}


/**
 * 登录处理
 */
function showUserInfo(userInfo) {
    console.log(userInfo)
    if (userInfo.loginType == 'wx') {
        actOption.actType = 'wx';
    } else {
        actOption.actType = 'qq';
    }
    actOption.headimgurl = userInfo.headimgurl;
    actOption.nickName = delHtmlTag(userInfo.nickName);
    ulink.$('#unlogin,.unlogin').hide();
    ulink.$('.login_nickName').text(actOption.nickName)
    ulink.$('.headImgurl').attr('src', actOption.headimgurl)
    ulink.$('#logined').show();
    if (ulink.isQQApp() || ulink.isWxApp()) {
        $('.logout_btn').hide();
    }
    //登录处理
    requestPostFun('Profile/loginLog', {'avatar': actOption.headimgurl, 'nickName': actOption.nickName}, function () {
    }, true);
    actOption.afterLoginFun();
}

//未登录处理
function noLoginAct() {
    ulink.$('#unlogin').show();
    ulink.$('#logined').hide();
    if (ulink.isQQApp()) {
        loginByQQ()
    } else if (ulink.isWxApp()) {
        loginByWx()
    } else {
        showLoginDialog();
    }
}

//qq登录方法
function loginByQQ() {
    LoginManager.login();
}

//微信登录方法
function loginByWx() {
    LoginManager.loginByWx();
}