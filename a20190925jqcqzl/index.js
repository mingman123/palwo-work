//��¼
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



//����
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



//����
$(function(){
	$(".box3 .left a").click(function(){
		$(this).addClass("on").siblings().removeClass("on");
		$(".box3 .right ul").hide().eq($(".box3 .left a").index(this)).show();
	})
	
	$(".head .btn-lq").click(function(){
		TGDialogS(dia2)
	})
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
					$(".nav a").removeClass('on').eq(index).addClass('on');
				}
			}
			scrollNav(1082,2028,0);
			scrollNav(2025,2960,1);
			scrollNav(2960,3858,2);
			scrollNav(3858,4520,3);
			scrollNav(4520,5388,4);
			if((top <500)){
				$('.nav').hide();
			} else {
				$('.nav').fadeIn();
				}	
		});
	});
//ê�㵽��Ŀ��λ����������
$('.nav a').click(function() {
   $("html, body").animate({scrollTop: $($(this).attr("href")).offset().top + "px"}, {duration: 1000,easing: "linear"
	 });
return false;
});
//��ߵ���end
		    