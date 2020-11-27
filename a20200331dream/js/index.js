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
    PTTSendClick('link','logout','�˳�');
    LoginManager.logout(function () {
        ulink.Dialog.showLoading();
        setTimeout(function () {
            ulink.Dialog.hideLoading();
            window.location.reload();
        },500)
    });
});
shareOptions.WXsuccess = function (res) { // ΢�ŷ����ص�
    sharePoint();
}
shareOptions.QQcallback = function (res) { // ΢�ŷ����ص�
    sharePoint();
}
ulink.share.init(shareOptions);
if(typeof LoginManager === "undefined"){
    var LoginManager = ulink.LoginManager;
    LoginManager.init({
        //֧�ַ�΢�Ż�������΢��APP��OpenLink����
        openLinkUrl: actOption.wxOpenLink
    });
    //��¼�ж�
    LoginManager.checkLogin(function (userInfo) {
        showUserInfo(userInfo)
    }, function () {
        noLoginAct()
    });
}else{
    LoginManager.init({
        //֧�ַ�΢�Ż�������΢��APP��OpenLink����
        openLinkUrl: actOption.wxOpenLink
    });
}


/**
 * ��¼����
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
    //��¼����
    requestPostFun('Profile/loginLog', {'avatar': actOption.headimgurl, 'nickName': actOption.nickName}, function () {
    }, true);
    actOption.afterLoginFun();
}

//δ��¼����
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

//qq��¼����
function loginByQQ() {
    LoginManager.login();
}

//΢�ŵ�¼����
function loginByWx() {
    LoginManager.loginByWx();
}