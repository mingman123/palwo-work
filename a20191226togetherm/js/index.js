TGMobileShare({
    shareTitle:'王者营地周年狂欢', //不设置或设置为空时，页面有title，则调取title
    shareDesc:'王者营地一周年庆，呼朋引伴共领福利。聚在1起，邀你一同来庆生！', //不设置或设置为空时，页面有Description，则调取Description
    shareImgUrl:'https://game.gtimg.cn/images/yxzj/cp/a20191226togetherm/share.jpg', //分享图片尺寸200*200，且填写绝对路径
    shareLink:'', //分享链接要跟当前页面同域名(手Q分享有这个要求) ,不设置或设置为空时，默认调取当前URL
    actName:'a20191226togetherm' //点击流命名，用于统计分享量，专题一般采用目录名称如a20151029demo
 });


var swiper = new Swiper('.swiper-container', {
    loop:true,
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows : true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
  });


  var swiper = new Swiper('.swiper-container2', {
    loop:true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
   
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

var player
function showVideoDia(vid) {
	player = new Txplayer({
		containerId: 'container',
		vid: vid,
		width: '100%',
		height: '100%',
		autoplay: true
    });
	TGDialogS('dia1');
}
$(".dia-close").click(function(){
	$(".video-box").html('');
	player.mute();
})




$(window).scroll(function(){
    var top=$(window).scrollTop();
    h=$(".header").height()+$(".main1").height()+$(".main2").height()-$(window).height()-$(".main2-cont2").height()/1.6;
    // console.log(h);
    if(top>=h){
       var len = $(".speed").length;
        var i = 1;
        var t=setInterval(function(){
        if(i < len+1){
        setInterval(t);
        }
        $(".speed"+i).addClass('on');
        i++;
        }, 500);
    };
});




var ua = window.navigator.userAgent.toLowerCase();
function terrace() {
    if (/gamehelper/i.test(ua)) {   // 营地
        $(".main2-btn").attr("href","//pvp.qq.com/cp/a20191219celebrate/index_c.html");
    } else if (ua.match(/msdk/i)) { // 游戏
        $(".main2-btn").attr("href","//pvp.qq.com/cp/a20191219celebrate/index_g.html");
    } else { //其他
        $(".main2-btn").attr("href","//pvp.qq.com/cp/a20191219celebrate/index_wq.html");
    }

}
window.onload = function(){
    terrace(); 
}
(function() {
    if(typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
        handleFontSize();
    } else {
        if(document.addEventListener) {
            document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
        } else if(document.attachEvent) {
            document.attachEvent("WeixinJSBridgeReady", handleFontSize);
            document.attachEvent("onWeixinJSBridgeReady", handleFontSize);
        }
    }

    function handleFontSize() {
        // 设置网页字体为默认大小
        WeixinJSBridge.invoke('setFontSizeCallback', {
            'fontSize': 0
        });
        // 重写设置网页字体大小的事件
        WeixinJSBridge.on('menu:setfont', function() {
            WeixinJSBridge.invoke('setFontSizeCallback', {
                'fontSize': 0
            });
        });
    }
})();