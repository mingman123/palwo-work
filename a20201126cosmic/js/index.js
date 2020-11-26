
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

if(/(iPhone|iPad|iPod|iOS|Android|Windows Phone|BlackBerry|SymbianOS)/i.test(navigator.userAgent)) {

} else {
	
	$('.nav li a').on('click', function() {
		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top + "px"
		}, {
			duration: 600,
			easing: "linear"
		});
		return false;
	})
//	$(".sid-nav6").on('click', function() {
//		$('html,body').animate({
//			scrollTop: '0px'
//		}, {
//			duration: 800,
//			easing: "linear"
//		});
//	})
	$(window).scroll(function() {
		var top = $('html,body').scrollTop();
		var w = document.body.clientWidth;
		var sTop = [
			$('#main1').offset().top,
			$('#main2').offset().top,
			$('#main3').offset().top,
			$('#main4').offset().top,
			$('#main5').offset().top,
			$('#main6').offset().top,
			$('#main7').offset().top,
			$('#main8').offset().top,
			$('#main9').offset().top,
			$(document).height()
		];
		
		for(var i = 0; i < sTop.length-1; i++) {
			if(sTop[i] <= top && top < sTop[i+1]) {
				$(".nav li a").removeClass("on").eq(i).addClass("on");
			}
		}
		if(w<1400||top<800){
            $('.nav').fadeOut();
        } else{
            $(".nav").fadeIn();
		}
	})
}