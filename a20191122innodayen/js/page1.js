var pictureName = [
    'OPPO创始人兼首席执行官陈明永发表《共创万物互融新生态》主题演讲',
    'OPPO创始人兼首席执行官陈明永宣布未来三年投入500万研发预算',
    'OPPO创始人兼首席执行官陈明永在OPPO未来科技大会演讲',
    'OPPO副总裁、研究院院长刘畅介绍OPPO AR眼镜',
    'OPPO副总裁、研究院院长刘畅现场展示OPPO AR眼镜应用',
    'OPPO副总裁、研究院院长刘畅现场介绍OPPO面向个人场景的核心入口布局',
    'IHS Markit执行总监Tom Morrod介绍《智能互融：5G、AI、云技术开启全交互时代机遇》白皮书',
    'IHS Markit执行总监Tom Morrod手机在智能互融时代的价值',
    '北京大学博雅特聘教授、前沿计算研究中心执行主任陈宝权参加主题论坛',
    'IHS Markit执行总监Tom Morrod参加主题论坛',
    'OPPO首席5G科学家唐海参加主题论坛',
    '微软（中国）首席技术官韦青参加主题论坛',
    '场景实验室创始人吴声参加主题论坛',
    '著名财经作家，杭州巴九灵、蓝狮子财经出版创始人吴晓波参加主题论坛',
    '嘉宾合影',
    '点亮春笋',
    '观众入场',
    'OPPO未来科技大会场地装饰',
    'OPPO未来科技大会发布会空境',
    '全球媒体参加OPPO未来科技大会'
];

var sceneName = [
    '创新专利展区',
    '观众体验视频超级防抖',
    '观众体验全焦段AI夜景',
    '极暗夜景',
    '5G未来生态展区',
    'OPPO 5G CPE实现的IoT智能家居',
    'OPPO 5G CPE',
    '观众体验OPPO 5G CPE支持的云游戏',
    '观众体验IoT智能家居',
    'Breeno',
    'AR展区',
    'AR眼镜',
    '用户体验AR眼镜',
    '游戏优化展区',
    '观众体验游戏优化技术',
    '屏下摄像头技术',
    '观众体验屏下摄像头技术',
    '30W无线VOOC闪充',
    '观众体验VOOC闪充',
    '展区空境'
];

if (/(iPhone|iPad|iPod|iOS|Android|mi |Windows Phone|BlackBerry|SymbianOS)/i.test(navigator.userAgent)) {
    // 移动端
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('mqqbrowser') > -1 && ua.indexOf(" qq") < 0) {
        // qq浏览器
        var w = $('.yd').width();	// 7.5rem
        var cw = $('.content').width();		// 100%
        if (w > cw) {
            var dw = document.documentElement.clientWidth;
            var fz = 100 * (dw / 750);
            var newFz = cw / w * fz;
            $('html').css('font-size', newFz + 'px');
        }
    }
} else {
    // if ($(window).width() > 1200) {
    //     // PC
    //     // isPc();
    // } else {
    //     // 笔记本
    //     // isBook();
    // }
}
// 活动照片
for ( var i = 0; i < pictureName.length; i++) {
//  var src = 'p-pic' + (i+1) + '.jpg';
//  var href = 'p-pic' + (i+1) + '.jpg';
    var src = 'p-pic1.jpg';
    var href = 'p-pic1.jpg';
    var name = pictureName[i];
    var pictureItem = 
        '<div class="picture-item">'+
            '<img src="img/' + src + '" alt="' + name + '">'+
            '<div class="download-mc">'+
                '<a href="img/' + href + '" download="' + name + '" title="' + name + '" class="btn-download"></a>'+
            '</div>'+
        '</div>';
    $('.picture .slide-box').append(pictureItem);
}
// 展区图片
for ( var i = 0; i < sceneName.length; i++) {
//  var src = 'p-scene' + (i+1) + '.jpg';
//  var href = 'p-scene' + (i+1) + '.jpg';
    var src = 'p-scene1.jpg';
    var href = 'p-scene1.jpg';
    var name = sceneName[i];
    var sceneItem = 
        '<div class="scene-item">'+
            '<img src="img/' + src + '" alt="' + name + '">'+
            '<div class="download-mc">'+
                '<a href="img/' + href + '" download="' + name + '" title="' + name + '" class="btn-download"></a>'+
            '</div>'+
        '</div>';
    $('.scene .slide-box').append(sceneItem);
}
var swiper = new Swiper('.swiper-container', {
    autoHeight: true, // enable auto height
    initialSlide: 0,
    on: {
        slideChangeTransitionStart: function () {
            var idx = this.activeIndex;
            $('.nav').eq(idx).addClass('on').siblings().removeClass('on');
            var w = $('.nav').eq(idx).width();
            var left = $('.nav').eq(idx)[0].offsetLeft;
            $('.nav-icon').css({
                'left': left,
                'width': w
            });
        },
    },
});
// PC和笔记本通用
$('.nav').on('click', function () {
    $(this).addClass('on').siblings().removeClass('on');
    var w = $(this).width();
    var left = $(this)[0].offsetLeft;
    var idx = $(this).index();
    $('.nav-icon').css({
        'left': left,
        'width': w
    });
    swiper.slideTo(idx, 300, false);
});


// $(function () {
//     setTimeout(function () {
//         $('.nav').eq(0).click(); // 初始化
//     }, 1000)
// })
window.onload = function () {
    setTimeout(function () {
        var idx = $('.nav.on').index();
        var w = $('.nav').eq(idx).width();
        var left = $('.nav').eq(idx)[0].offsetLeft;
        $('.nav-icon').css({
            'left': left,
            'width': w
        });
    }, 1000);
}

$(function(){
	$(".btn").click(function(){
		if($(this).hasClass('on')){
			$(this).removeClass("on");
			$(".nav-inner").removeClass("on");
			
		}else{
			$(this).addClass("on");
			$(".nav-inner").addClass("on");
			
		}
		
	})
})


var url = window.location.href;
var title = 'OPPO INNO DAY 2019 Newsroom'; // OPPO 未来科技大会 媒体中心
var desc = 'Media Kit for OPPO INNO DAY 2019'; // OPPO未来科技大会媒体中心资料下载
var icon = window.location.protocol + '//dsfs.oppo.com/product/2019/science_tech/img/share.jpg';
$.ajax({
    url: '//test.1pix.cn/backend/wechat/jssdk',
    dataType: 'json',
    type: 'GET',
    data: {url: window.location.href}, // 这里一定要用window.location.href，不然会二次分享无自定义分享，签名的url一定要与当前页面一致，包括query参数，二次分享会自动加上参数
    success: function (data) {
        wx.config({
            appId: data.appId,
            timestamp: data.timestamp,
            nonceStr: data.nonceStr,
            signature: data.signature,
            jsApiList: [
                'checkJsApi',
                'updateAppMessageShareData', // 1.4版本
                'updateTimelineShareData', // 1.4版本
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'hideMenuItems'
            ]
        });
        wx.ready(function () {
            wx.hideMenuItems({
                menuList: [
                    'menuItem:share:weiboApp',
                    'menuItem:share:email'
                ],
                success: function (res) {
                },
                fail: function (res) {
                }
            });
            wx.updateAppMessageShareData({
                title: title,
                desc: desc,
                link: url,
                imgUrl: icon,
                success: function () {
                    console.log('updateAppMessageShareData success');
                }
            });
            wx.updateTimelineShareData({
                title: desc,
                link: url,
                imgUrl: icon,
                success: function () {
                    console.log('updateTimelineShareData success');
                }
            });
            wx.onMenuShareAppMessage({
                link: url,
                title: title,
                desc: desc,
                imgUrl: icon,
                success: function (res) {
                    console.log('share to friend success');
                }
            });
            wx.onMenuShareTimeline({
                link: url,
                title: desc,
                desc: desc,
                imgUrl: icon,
                success: function (res) {
                    console.log('share to timeline success');
                }
            });
        });
    },
    error: function (err) {
        console.log(err);
    }
});