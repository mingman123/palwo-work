//��¼start
milo.addEvent(g("dologin"), "click", function() {
	need("biz.login", function(LoginManager){
        LoginManager.init({
            needReloadPage : true
        });
      	LoginManager.login();
	});
	return false;
});
milo.addEvent(g("dologout"), "click", function() {
	need("biz.login", function(LoginManager){
     	LoginManager.logout();
	});
   	return false;
});
   milo.ready(function() {
	need("biz.login", function(LoginManager){
        LoginManager.checkLogin(function(){
            g("login_qq_span").innerText=LoginManager.getUserUin();//��ȡQQ��
                amsInit(178183, 525639);
        });
    });
});
//��¼end


//�����ʼ�齱 ֪ͨjs flash->js

//��ʼ�齱lottery->js
function callJsToStart() {
    lottery.disable();
    calllotteryToRoll(4);
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
    'width': 604,//lottery ���
    'height': 604,//lottery �߶�
    'total': 8,//�齱��Ʒ������
    'sbtnx': 164,// ��ʼ�齱��ť��λ��x����
    'sbtny': 164,// ��ʼ�齱��ť��λ��y����
    'sbtnw': 158,// ��ʼ�齱��ť�Ŀ��
    'sbtnh': 158,// ��ʼ�齱��ť�ĸ߶�
    'boxw': 152,// ��Ʒ��Ч�Ŀ��
    'boxh': 153,//��Ʒ��Ч�ĸ߶� 
    'position': "10_9,167_9,324_9,324_167,324_322,167_322,10_322,10_167",
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
			width: '100%',
			height: '100%',
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
	
//	$(".box1 .gif").mouseleave(function(){
//		$(".box1 .gif1").addClass("on");
//	})
//	$(".box1 .gif").mouseover(function(){
//		$(".box1 .gif1").removeClass("on");
//	})
//	$(".box2 .gif").mouseleave(function(){
//		$(".box2 .gif2").addClass("on");
//	})
//	$(".box2 .gif").mouseover(function(){
//		$(".box2 .gif2").removeClass("on");
//	})
	
		
	$('.btn-check').click(function () {
		$("html, body").animate({scrollTop: $($(this).attr("href")).offset().top + "px"}, {duration: 800,easing: "linear"
	 });
return false;
//		$('html,body').animate({
//		scrollTop: '1370px'}, 800);
//		return false;
	});

	$('.btn-get').click(function () {
		TGDialogS('dia9');
	});
	$('.links .btn-order').click(function () {
		TGDialogS('dia1');
	});
	

})
   