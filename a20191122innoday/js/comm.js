//var scrollTop = $(window).scrollTop();
// console.log(fsNum);
//window.onresize = function () {
//  window.location.reload();
//}
window.onload = function(){
	setTimeout(function () {
    	$(window).scrollTop(0);
	}, 400)
}

if (/(iPhone|iPad|iPod|iOS|Android|mi |Windows Phone|BlackBerry|SymbianOS)/i.test(navigator.userAgent)) {
    // 移动端
    isM();
    $('#css-pc').attr('href', 'css/index-m.css');
    $('#css-b').attr('href', 'css/index-m.css');
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('mqqbrowser') > -1 && ua.indexOf(" qq") < 0) {
        // qq浏览器
        var w = $('.yd').width();	// 7.5rem
        var cw = $('.inner').width();		// 100%
        if (w > cw) {
            var dw = document.documentElement.clientWidth;
            var fz = 100 * (dw / 750);
            var newFz = cw / w * fz;
            $('html').css('font-size', newFz + 'px');
        }
    }
} else {
	window.onresize = function () {
		if($('.dialog').css('display') == 'none'){
	    	window.location.reload();
		}
	}
    $('#css-m').attr('href', 'css/index.css');
    if ($(window).width() > 1200) {
        // PC
        isPc();
    } else {
        // 笔记本
        isBook();
    }
}
$(function(){
	var shtml='';
		shtml+="<div class ='video-contain'>"+
		"<video src='//dsfs.oppo.com/hd/innoday-2019/innoday-cn.mp4' autoplay='autoplay' width='100%' loop ='loop' class ='video-play' controls='controls' webkit-playsinline='true' playsinline='true' x5-video-player-type='h5' x5-video-player-fullscreen='true' x-webkit-airplay='allow' x5-video-orientation='portraint'>"+
		"</video>"+
		"<div class ='dialog-close'>×"+
		"</div>"+
		"</div>";
		
		var shtml2='';
		shtml2+="<div class ='video-contain2'>"+
		"<video src='img/video2.mp4' autoplay='autoplay' width='100%' loop ='loop' class ='video-play' controls='controls' webkit-playsinline='true' playsinline='true' x5-video-player-type='h5' x5-video-player-fullscreen='true' x-webkit-airplay='allow' x5-video-orientation='portraint'>"+
		"</video>"+
		"<div class ='dialog-close'>×"+
		"</div>"+
		"</div>";
		
	$(".btn-video").click(function(){
		$(".dialog").animate({height:"100%"},500).show();
		$(".video-box").html(shtml);
	})
	$(".btn-video2").click(function(){
		$(".dialog").animate({height:"100%"},500).show();
		$(".video-box").html(shtml2);
	})
	$('.dialog').on('click', '.dialog-close', function () {
		$(".dialog").animate({height:"0"},500),
		setTimeout(function(){
			$(".video-box").html("");
//			$(".video-contain2").html("");
			$(".dialog").css('display','none');
		},500);
	})	
	var pTxt='\u004f\u0050\u0050\u004f\u0020\u672a\u6765\u79d1\u6280\u5927\u4f1a\u662f\u0020\u004f\u0050\u0050\u004f\u0020\u4e00\u5e74\u4e00\u5ea6\u9762\u5411\u5168\u7403\u7684\u79d1\u6280\u76db\u4f1a\uff0c\u65e8\u5728\u5448\u73b0\u0020\u004f\u0050\u0050\u004f\u0020\u5bf9\u4e2a\u4eba\u672a\u6765\u79d1\u6280\u7684\u6700\u65b0\u601d\u8003\u548c\u6210\u679c\uff0c\u5206\u4eab\u79d1\u6280\u601d\u60f3\u3001\u6280\u672f\u6d1e\u5bdf\u548c\u521b\u65b0\u53d1\u73b0\uff0c\u6fc0\u53d1\u4eba\u4eec\u5bf9\u672a\u6765\u79d1\u6280\u751f\u6d3b\u7684\u5411\u5f80\u548c\u63a2\u7d22\u3002';
	$(".cont1-box").find("p").html(pTxt);
})





var url = window.location.href;
var title = '\u004f\u0050\u0050\u004f\u0020\u672a\u6765\u79d1\u6280\u5927\u4f1a\u0020\u0032\u0030\u0031\u0039'; // OPPO 未来科技大会 2019
var desc = '\u004f\u0050\u0050\u004f\u672a\u6765\u79d1\u6280\u5927\u4f1a\u2014\u2014\u4e07\u7269\u4e92\u878d\uff0c\u672a\u6765\u65e0\u754c'; // OPPO未来科技大会——万物互融，未来无界
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