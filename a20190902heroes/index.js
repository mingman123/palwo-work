 //�����ʼ�齱 ֪ͨjs flash->js

//��ʼ�齱lottery->js
function callJsToStart() {
    lottery.disable();
    calllotteryToRoll(5);
}
//������ó齱��� ֪ͨlottery��ʼ����Ч�� js->lottery
function calllotteryToRoll(id) {
    if (lottery) lottery.stopRoll(id);
}
//�������֪ͨjs lottery->js        
function callJsToComplete() {
    alert('��ϲ���ô�Ӵ����');
}

//��ʼ���齱�� ���Բ�֪���ڲ�
var lottery = new Lottery({
    'lighturl': 'ossweb-img/letteryon.png',//�ⲿ��Ȧpng ����д����Ĭ�ϵ�Ч��
    'starturl': '//ossweb-img.qq.com/images/js/delottery/blankstartbtn.png', //�ⲿ��ťpng ����д����Ĭ�ϵİ�ťЧ��
    'width': 728,//lottery ���
    'height': 728,//lottery �߶�
    'total': 8,//�齱��Ʒ������
    'sbtnx': 246,// ��ʼ�齱��ť��λ��x����
    'sbtny': 246,// ��ʼ�齱��ť��λ��y����
    'sbtnw': 235,// ��ʼ�齱��ť�Ŀ��
    'sbtnh': 235,// ��ʼ�齱��ť�ĸ߶�
    'boxw': 236,// ��Ʒ��Ч�Ŀ��
    'boxh': 236,//��Ʒ��Ч�ĸ߶� 
    'position': "10_10,246_10,480_10,481_246,480_481,246_481,10_481,10_246",
    //��Ʒ��Ч��λ�ã���Ӧ��ƷͼƬ�Ĳ��֣�����ÿ����Ʒ��λ���Լ��Ƕ��ö��ŷָ� x_y ����19_20����19_20_0 ��ʾ��һ����Ʒ��λ�� x����Ϊ19px y����Ϊ20px �Ƕ�Ϊ0����
    'contentId': 'lotterycontent',//Ƕ��lottery ��div��� id 
    'onClickRollEvent': callJsToStart,//��Ӧ����ӿ�
    'onCompleteRollEvent': callJsToComplete //��Ӧ����ӿ�
});
    
//��ַdia8
//��Ʒdia7
    
    
    
 //swiper   
var mySwiper = new Swiper('.swiper-container',{
    pagination: '.pagination',
    loop:true,
    grabCursor: true,
    paginationClickable: true,
//			    slidesPerView: 3
  })
  $('.arrow-left').on('click', function(e){
    e.preventDefault()
    mySwiper.swipePrev()
  })
  $('.arrow-right').on('click', function(e){
    e.preventDefault()
    mySwiper.swipeNext()
  })
   




//��ߵ���start
var isShow = true;	
$(document).ready(function() {
  $(window).scroll(function() {
//��ȡ�ĵ������߶�
//��ҳ�������һ���߶�ʱ����ߵ�������л���
    var top = $(document).scrollTop();
	function scrollNav(num1,num2,index){
		if(num1 <= top && top <=num2){
			$(".dh a").removeClass('on').eq(index).addClass('on');
		}
	}
	scrollNav(1002,1520,0);
	scrollNav(1520,2350,1);
	scrollNav(2350,3172,2);
	scrollNav(3172,4698,3);
	scrollNav(4698,5520,4);
	scrollNav(5520,6342,5);
	scrollNav(6342,7176,6);
	});
});
//ê�㵽��Ŀ��λ����������
$('.dh a').click(function() {
   $("html, body").animate({scrollTop: $($(this).attr("href")).offset().top + "px"}, {duration: 1000,easing: "linear"
	 });
return false;
});
//��ߵ���end




//����start
function TGDialogS(e){
    // ����milo������dialog���
need("biz.dialog",function(Dialog){
Dialog.show({
    id:e,
    bgcolor:'#000', //���������֡�����ɫ����ʽΪ"#FF6600"�����޸ģ�Ĭ��Ϊ"#fff"
    opacity:60 //���������֡���͸���ȣ���ʽΪ��10-100������ѡ
            
        });
    });
}
function closeDialog(){
  // ����milo������dialog���
  need("biz.dialog",function(Dialog){
          Dialog.hide();
      });
  }
//����end


// ��Ƶ����
	var player
	function showVideoDia(vid) {
			 player = new Txplayer({
			containerId: 'video-play',
			vid: vid,
			width: '800',
			height: '600',
			autoplay: true
		});
		TGDialogS('dia6');
	}
	$('.dia-close').click(function(){
		$('#video-play').html('');
		player.mute();
	})


$(function(){
	$(".check1 a").click(function(){
		$(".check1 a").removeClass("on");
		$(this).addClass("on");
	})
	$(".check2 a").click(function(){
		$(".check2 a").removeClass("on");
		$(this).addClass("on");
	})
	$(".check3 a").click(function(){
		$(".check3 a").removeClass("on");
		$(this).addClass("on");
	})
	$(".check4 a").click(function(){
		$(".check4 a").removeClass("on");
		$(this).addClass("on");
	})
	
	$(".box1 .gif").mouseleave(function(){
		$(".box1 .gif1").addClass("on");
	})
	$(".box1 .gif").mouseover(function(){
		$(".box1 .gif1").removeClass("on");
	})
	$(".box2 .gif").mouseleave(function(){
		$(".box2 .gif2").addClass("on");
	})
	$(".box2 .gif").mouseover(function(){
		$(".box2 .gif2").removeClass("on");
	})
	
		
	$('.btn-check').click(function () {
		$('html,body').animate({
		scrollTop: '1040px'}, 800);
		return false;
	});

	$('.btn-get').click(function () {
		TGDialogS('dia9');
	});
	$('.links .btn-order').click(function () {
		TGDialogS('dia1');
	});
	

})




