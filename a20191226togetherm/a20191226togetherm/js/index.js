TGMobileShare({
    shareTitle:'������1������Ӫ�������', //�����û�����Ϊ��ʱ��ҳ����title�����ȡtitle
    shareDesc:'�¹��������Ϸ֡�ר��ͷ���������졣�������飬һ������', //�����û�����Ϊ��ʱ��ҳ����Description�����ȡDescription
    shareImgUrl:'https://game.gtimg.cn/images/yxzj/cp/a20191226togetherm/share.jpg', //����ͼƬ�ߴ�200*200������д����·��
    shareLink:'', //��������Ҫ����ǰҳ��ͬ����(��Q���������Ҫ��) ,�����û�����Ϊ��ʱ��Ĭ�ϵ�ȡ��ǰURL
    actName:'a20191226togetherm' //���������������ͳ�Ʒ�������ר��һ�����Ŀ¼������a20151029demo
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
    // ����milo������dialog���
    need("biz.dialog",function(Dialog){
        Dialog.show({
            id:e,
            bgcolor:'#000', //���������֡�����ɫ����ʽΪ"#FF6600"�����޸ģ�Ĭ��Ϊ"#fff"
            opacity:50 //���������֡���͸���ȣ���ʽΪ��10-100������ѡ
        });
    });
}
function closeDialog(){
    // ����milo������dialog���
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
	var u = navigator.userAgent, app = navigator.appVersion;
	var isAndroid =  u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android�ն�
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios�ն�
	var url = 'https://pvp.qq.com/cp/a20191219celebrate/index_wq.html';
	if (/gamehelper/i.test(ua)) {
		url = 'https://pvp.qq.com/cp/a20191219celebrate/index_c.html';
	} else if (ua.match(/msdk/i)) {
		url = 'https://pvp.qq.com/cp/a20191219celebrate/index_g.html';
	}
	if (isiOS && (typeof(GameHelper) !== 'undefined')) {
		GameHelper.openNewPageWithSwitch(url, 0, false);
	} else {
		location.href = url;
	}
}


function terrace2() {
	var u = navigator.userAgent, app = navigator.appVersion;
	var isAndroid =  u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android�ն�
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios�ն�
	var url2 = 'https://pvp.qq.com/cp/a20191217okami/index_wqg.html';
	
	if (isiOS && (typeof(GameHelper) !== 'undefined')) {
		GameHelper.openNewPageWithSwitch(url2, 0, false);
	} else {
		location.href = url2;
	}
}

window.onload = function(){
	$(".main2-btn").click(function(){
		terrace(); 
	});
	$(".main1-btn").click(function(){
		terrace2(); 
	});
}


//function terrace2() {
//	var u = navigator.userAgent, app = navigator.appVersion;
//	var isAndroid =  u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android�ն�
//	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios�ն�
//	var url = 'https://pvp.qq.com/cp/a20191219celebrate/index2_wq.html';
//	if (isiOS && (typeof(GameHelper) !== 'undefined')) {
//		GameHelper.openNewPageWithSwitch(url, 0, false);
//	} else {
//		location.href = url;
//	}
//}


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
        // ������ҳ����ΪĬ�ϴ�С
        WeixinJSBridge.invoke('setFontSizeCallback', {
            'fontSize': 0
        });
        // ��д������ҳ�����С���¼�
        WeixinJSBridge.on('menu:setfont', function() {
            WeixinJSBridge.invoke('setFontSizeCallback', {
                'fontSize': 0
            });
        });
    }
})();