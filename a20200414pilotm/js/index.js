function TGDialogS(e) {
	// ����milo������dialog���
	need("biz.dialog", function(Dialog) {
		Dialog.show({
			id: e,
			bgcolor: '#000', //���������֡�����ɫ����ʽΪ"#FF6600"�����޸ģ�Ĭ��Ϊ"#fff"
			opacity: 70 //���������֡���͸���ȣ���ʽΪ��10-100������ѡ
		});
	});
}

function closeDialog() {
	// ����milo������dialog���
	need("biz.dialog", function(Dialog) {
		Dialog.hide();
	});
}

var swiper1 = new Swiper('.swiper-container1', {
	slidesPerView: 'auto',
	spaceBetween : 14,
	autoplay: true,
	loop : true,
})

var swiper2 = new Swiper('.swiper-container2', {
	slidesPerView: 'auto',
	spaceBetween : 18,
	autoplay: true,
	loop : true,
})


// swiper
var slideLen = $('.swiper-container3 .swiper-slide').length;
if (slideLen>1) {
	var mySwiper = new Swiper('.swiper-container3',{                
		autoplay: true,
//      pagination: {
//          el: '.swiper-pagination',
//	    },
        loop : true,
    });
    if ($(".swiper-container3").hasClass("swiper-no-swiping")) {
    	$(".swiper-container3").removeClass("swiper-no-swiping")
    }
	
} else{
	var mySwiper = new Swiper('.swiper-container3',{                
		autoplay: false,
       	loop : false,
    });
    $(".swiper-container3").addClass("swiper-no-swiping")
}

var imgArr=['ossweb-img/tc-code1.png','ossweb-img/tc-code2.png','ossweb-img/tc-code3.png','ossweb-img/tc-code4.png']
$(".swiper-container2 li a").click(function(){
	var idx=$(this).parent().attr('data-swiper-slide-index');
	console.log(idx);
	$(".dia1 img").attr("src",imgArr[idx]);
	TGDialogS('dia1');
})



$('.nav-box .nav3').click(function () {
	var top=$(".head").height()+$(".cont1").height()+$(".cont2").height();
	$('html,body').animate({
		scrollTop:top}, 800);
});


$(".s4_share").click(function(){
	$(this).hide();
})
$(".pop-ity").click(function(){
	$(this).hide();
})
$(".btn-find").click(function(){
	$(".hope").show();
})
