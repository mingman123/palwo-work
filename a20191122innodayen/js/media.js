var pictureName = [
    'Tony Chen, OPPO Founder and CEO Delivering Keynote Speech',
    'Tony Chen, OPPO Founder and CEO Announcing $7bn on R&D in the Next Three Years ',
    'Tony Chen, OPPO Founder and CEO Delivering Speech during OPPO INNO DAY',
    'Levin Liu, OPPO Vice President and Head of OPPO Research Institute Introducing OPPO AR Glass',
    'Levin Liu, OPPO Vice President and Head of OPPO Research Institute Introducing User Application of OPPO AR Glass',
    "Levin Liu, OPPO Vice President and Head of OPPO Research Institute Introducing OPPO's Product Roadmap for Personal Scenarios",
    'Tom Morrod, Executive Director of IHS Markit Delivering Keynote Speech',
    'Tom Morrod, Executive Director of IHS Markit Delivering Keynote Speech Remarking Significance of Smartphone',
    'Baoquan Chen, Endowed Boya Professor, Executive Director, CFCS, Peking University Attending Panel Discussion',
    'IHS Markit Executive Director Tom Morrod Attending Panel Discussion',
    'Henry Tang, Chief 5G Scientist of OPPO Attending Panel Discussion',
    'Qing Wei, National Technology Officer, Microsoft(China) Attending Panel Discussion',
    'Sheng Wu, Founder of Context Lab Attending Panel Discussion',
    'Well-known Financial Writer Xiaobo Wu Attending Panel Discussion',
    'Group Photo of Guests',
    'INNO DAY Light Show',
    'OPPO INNO DAY Event Decoration',
    'OPPO INNO DAY Venue',
    'Audience Entering the Event Venue',
    'Global Media Attending OPPO INNO DAY'
];

var sceneName = [
    'Innovation Zone',
    'Audience Experiencing Ultra Steady Video',
    'Audience Experiencing AI Night Mode with Full Focal Length',
    'Ultra Dark Mode',
    '5G Ecosystem Zone',
    'IoT Smart Home via OPPO 5G CPE',
    'OPPO 5G CPE',
    'Audience Experiencing Cloud Gaming via OPPO 5G CPE',
    'Audience Experiencing IoT Smart Home',
    'Breeno',
    'AR Zone',
    'AR Glass',
    'Audience Experiencing AR Glass',
    'Optimized Gaming Technology Zone',
    'Audience Experiencing Optimized Gaming Technology Zone',
    'Under-screen Camera',
    'Audience Experiencing Under-screen Camera',
    '30W Wireless VOOC Flash Charge',
    'Audience Experiencing VOOC Flash Charge',
    'INNO SPACE '
];

if (/(iPhone|iPad|iPod|iOS|Android|mi |Windows Phone|BlackBerry|SymbianOS)/i.test(navigator.userAgent)) {
    $('#css-pc').attr('href', 'css/media-m.css');
    $('#css-b').attr('href', 'css/media-m.css');
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
    $(window).on('scroll', function(){
		var top = $(window).scrollTop();
		if(top > 80) {
			$(".nav-inner").css({
				'transform': 'translate3d(0,  -100%, 0)',
			})
		} else {
			$(".nav-inner").css({
				'transform': 'translate3d(0,  -0, 0)',
			})
		}
    });
} else {
    $('#css-m').attr('href', 'css/media-b.css');
    // if ($(window).width() > 1200) {
    //     // PC
    //     // isPc();
    // } else {
    //     // 笔记本
    //     // isBook();
    // }
}
// 活动照片
for (var i = 0; i < pictureName.length; i++) {
    var src = 'p-picm' + (i + 1) + '.jpg';
    var href = 'p-pic' + (i + 1) + '.jpg';
    var name = pictureName[i];
    var pictureItem =
        '<div class="picture-item">' +
        '<img src="img/' + src + '" alt="' + name + '">' +
        '<div class="download-mc">' +
        '<a href="img/' + href + '" download="' + name + '" title="' + name + '" class="btn-download"></a>' +
        '</div>' +
        '</div>';
    $('.picture .slide-box').append(pictureItem);
}
// 展区图片
for (var i = 0; i < sceneName.length; i++) {
     var src = 'p-scenem' + (i+1) + '.jpg';
     var href = 'p-scene' + (i+1) + '.jpg';
    var name = sceneName[i];
    var sceneItem =
        '<div class="scene-item">' +
        '<img src="img/' + src + '" alt="' + name + '">' +
        '<div class="download-mc">' +
        '<a href="img/' + href + '" download="' + name + '" title="' + name + '" class="btn-download"></a>' +
        '</div>' +
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

$(function () {
    $(".btn").click(function () {
        if ($(this).hasClass('on')) {
            $(this).removeClass("on");
            $(".nav-inner").removeClass("on");
            $(".nav-inner").css('background', 'none');

        } else {
            $(this).addClass("on");
            $(".nav-inner").addClass("on");
			$(".nav-inner").css('background', '#000000');
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
    data: { url: window.location.href }, // 这里一定要用window.location.href，不然会二次分享无自定义分享，签名的url一定要与当前页面一致，包括query参数，二次分享会自动加上参数
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