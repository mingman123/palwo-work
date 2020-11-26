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
// 分享按钮方法
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


