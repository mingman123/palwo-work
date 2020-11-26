function init() {
	
	$(window).resize(function(){
	 	setHeight()
	});
	function setHeight(){
		$(".header").css("height",$("#video1").height());
	}
    function TGDialogS(e) {
        // 利用milo库引入dialog组件
        need("biz.dialog", function (Dialog) {
            Dialog.show({
                id: e,
                bgcolor: '#000', // 弹出“遮罩”的颜色，格式为"#FF6600"，可修改，默认为"#fff"
                opacity: 50 // 弹出“遮罩”的透明度，格式为｛10-100｝，可选
            });
        });
    }
    function closeDialog() {
        // 利用milo库引入dialog组件
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
        // 移动端
        milo.ready(function () {
            need("biz.login", function (LoginManager) {
                LoginManager.init(); // 初始化登录控件
                LoginManager.checkLogin(function () {
                    // 检查是否登录，如果已登录，执行该方法
                    LoginManager.init();
                    // g("userinfo").innerHTML = LoginManager.getUin();
                }, function () {
                    // 如果未登录，跳转登录页面
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


