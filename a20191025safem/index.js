var swiper = new Swiper('.swiper-container', {
	effect: 'coverflow',
	loop:true,
	grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 400,
    modifier: 1,
    slideShadows : false,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
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
// ����ť����
sharepop = document.getElementById('s4Share');
function share() {
	sharepop.style.display = "block";
}
sharepop.onclick = function() {
	sharepop.style.display = "none";
};

var arr=[
'ossweb-img/tc-prop1.jpg','ossweb-img/tc-prop2.jpg','ossweb-img/tc-prop3.jpg','ossweb-img/tc-prop4.jpg',
'ossweb-img/tc-prop5.jpg','ossweb-img/tc-prop6.jpg','ossweb-img/box5-prop1.png','ossweb-img/box5-prop1.png',
'ossweb-img/box5-prop1.png','ossweb-img/box5-prop1.png','ossweb-img/box5-prop1.png','ossweb-img/box5-prop1.png',
'ossweb-img/box5-prop1.png','ossweb-img/box5-prop1.png','ossweb-img/box5-prop1.png','ossweb-img/box5-prop1.png',
'ossweb-img/box5-prop1.png','ossweb-img/box5-prop1.png','ossweb-img/box5-prop1.png','ossweb-img/box5-prop1.png',
]
$(function(){
	$(".cont5 li").click(function(){
		var idx=swiper.realIndex;
		$(".plan-box img").attr("src",arr[idx]);
		share();
//		TGDialogS('dia1');
	})
	
	
//	function asd(){
//		$(".say").animate({'scrollTop':$(".say")[0].scrollHeight},40000,function(){
//			$(".say").css({'scrollTop':0});
//			asd();
//		})
//	}
//		$(function(){	
//		asd();
//		$(".say").mouseover(function () {
//		   $(".say").stop();
//		}).mouseout(function () {
//			 asd();
//		});
//	});

})


