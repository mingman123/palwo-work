function TGDialogS(e) {
	// ����milo������dialog���
	need("biz.dialog", function(Dialog) {
		Dialog.show({
			id: e,
			bgcolor: '#000', //���������֡�����ɫ����ʽΪ"#FF6600"�����޸ģ�Ĭ��Ϊ"#fff"
			opacity: 50 //���������֡���͸���ȣ���ʽΪ��10-100������ѡ
		});
	});
}

function closeDialog() {
	// ����milo������dialog���
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
