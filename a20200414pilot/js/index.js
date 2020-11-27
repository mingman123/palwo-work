function TGDialogS(e) {
	// 利用milo库引入dialog组件
	need("biz.dialog", function(Dialog) {
		Dialog.show({
			id: e,
			bgcolor: '#000', //弹出“遮罩”的颜色，格式为"#FF6600"，可修改，默认为"#fff"
			opacity: 50 //弹出“遮罩”的透明度，格式为｛10-100｝，可选
		});
	});
}

function closeDialog() {
	// 利用milo库引入dialog组件
	need("biz.dialog", function(Dialog) {
		Dialog.hide();
	});
}

$(".cont2 li").mouseover(function(){
  $(this).children('.class-intro').addClass("on");
});
$(".cont2 li").mouseout(function(){
	$(this).children('.class-intro').removeClass("on");
});

// swiper
var slideLen = $('.swiper-container1 .swiper-slide').length;
if (slideLen>1) {
	var mySwiper = new Swiper('.swiper-container1',{                
		autoplay: true,
        pagination: {
            el: '.swiper-pagination',
	    },
        loop : true,
    });
    if ($(".swiper-container1").hasClass("swiper-no-swiping")) {
    	$(".swiper-container1").removeClass("swiper-no-swiping")
    }
	
} else{
	var mySwiper = new Swiper('.swiper-container1',{                
		autoplay: false,
       	loop : false,
    });
    $(".swiper-container1").addClass("swiper-no-swiping")
}


var imgArr=['ossweb-img/tc-code1.png','ossweb-img/tc-code2.png','ossweb-img/tc-code3.png','ossweb-img/tc-code4.png']
$(".cont3 li a").click(function(){
	var idx=$(this).parent().index();
	$(".dia1 img").attr("src",imgArr[idx]);
	TGDialogS('dia1');
})
