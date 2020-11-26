 var swiper = new Swiper('.swiper-container', {
      loop:true,
      slidesPerView: 4,
      spaceBetween: 30,
      slidesPerGroup: 4,
      navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			pagination: {
        el: '.swiper-pagination',
         clickable: true
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

var arr=[
'ossweb-img/tc-prop1.jpg','ossweb-img/tc-prop2.jpg','ossweb-img/tc-prop3.jpg','ossweb-img/tc-prop4.jpg',
'ossweb-img/tc-prop5.jpg','ossweb-img/tc-prop6.jpg','ossweb-img/box5-prop1.png','ossweb-img/box5-prop1.png',
'ossweb-img/box5-prop1.png','ossweb-img/box5-prop1.png','ossweb-img/box5-prop1.png','ossweb-img/box5-prop1.png',
'ossweb-img/box5-prop1.png','ossweb-img/box5-prop1.png','ossweb-img/box5-prop1.png','ossweb-img/box5-prop1.png',
'ossweb-img/box5-prop1.png'
]
$(function(){
	$(".cont5 li").click(function(){
		var idx=$(this).attr('data-swiper-slide-index');
		$(".dia1 img").attr("src",arr[idx]);
		TGDialogS('dia1');
	})
//var arr=[
//'ossweb-img/box2-prop1.png','ossweb-img/box2-prop1.png','ossweb-img/box5-prop1.png','ossweb-img/box5-prop1.png',
//'ossweb-img/box5-prop1.png','ossweb-img/box5-prop1.png','ossweb-img/box5-prop1.png','ossweb-img/box5-prop1.png',
//'ossweb-img/box5-prop1.png','ossweb-img/box5-prop1.png','ossweb-img/box5-prop1.png','ossweb-img/box5-prop1.png',
//'ossweb-img/box5-prop1.png','ossweb-img/box5-prop1.png','ossweb-img/box5-prop1.png','ossweb-img/box5-prop1.png',
//'ossweb-img/box5-prop1.png','ossweb-img/box5-prop1.png','ossweb-img/box5-prop1.png','ossweb-img/box5-prop1.png'
//]
//$(function(){
//	$(".plan").click(function(){
//		var img=$(this).attr("src");
//		$(".dia1 img").attr("src",img);
//		TGDialogS('dia1');
//	})


	function asd(){
		$(".say").animate({'scrollTop':$(".say")[0].scrollHeight},40000,function(){
			$(".say").css({'scrollTop':0});
			asd();
		})
	}
		$(function(){	
		asd();
		$(".say").mouseover(function () {
		   $(".say").stop();
		}).mouseout(function () {
			 asd();
		});
	});
	
	
	
	$(window).scroll(function (){
	    var scrollTop = $('html,body').scrollTop();
	    if(scrollTop > 300){
	    	$('.cont1 ul').addClass('active')
	    }
	    if(scrollTop > 800){
	    	$('.cont2 ul').addClass('active')
	    }
	    if(scrollTop > 1300){
	    	$('.cont3 ul').addClass('active')
	    }
	    if(scrollTop > 1800){
	    	$('.cont4 .say-box').addClass('active')
	    }
	    if(scrollTop > 2600){
	    	$('.cont5 .device').addClass('active')
	    }
	    if(scrollTop > 3400){
	    	$('.cont6 ul').addClass('active')
	    }
	    if(scrollTop > 4100){
	    	$('.cont7 ul').addClass('active')
	    }
	    if(scrollTop > 4400){
	    	$('.cont8 a').addClass('active')
	    }
	});
	
})


	



