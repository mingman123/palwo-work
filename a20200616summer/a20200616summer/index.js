var swiper1 = new Swiper('.swiper-container1', {
	slidesPerView: 'auto',
	spaceBetween : 10,
	autoplay: {
    delay: 1000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
    },
//	loop : true,
})
var swiper1 = new Swiper('.swiper-container2', {
	slidesPerView: 'auto',
	spaceBetween : 10,
	autoplay: {
    delay: 1000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
    },
//	loop : true,
})



milo.ready(function () {
	     need("biz.login",function(LoginManager){
	         //QQ��¼
	         milo.addEvent(g('btn_qqlogin'),'click',function(e){
	             LoginManager.login();
	         });
	
	         //ע��
	         milo.addEvent(g("btn_logout"),"click",function(){
	             LoginManager.logout();
	         })
	
	         var chkLoginFunc=function(str){
	             LoginManager.checkLogin(function(){
	                 console.log("�ѵ�¼: "+str);
	             },function(){
	                 console.log("δ��¼: "+str);
	             })
	         }
	         //ִ����֤��½����
	         LoginManager.checkLogin(function(userinfo){
	             //�˴������û��Ļ�����Ϣ
	             console.log("�ѵ�¼��\n",userinfo);
	             //�����½������qq��ʹ��LoginManager.getUserFace����ȥ��ȡͷ��
	             if (userinfo.logtype=="qq"){
	                 LoginManager.getUserFace(function(data){
	                     $("#ams_user_headimg").html("<img src=\""+data.userFace+"\"> ");
	                 });
	             }else if(userinfo.logtype=="wx"){
	                 //�����½������wx΢�ţ���ֱ�ӻ�ȡ������Ϣ���ͷ��
	                 $("#ams_user_headimg").html("<img src=\""+userinfo.headimgurl+"/64\"> ");
	             }
	
	         },function(){
	             console.log("δ��¼");
	             //LoginManager.init();
	         });
	     });
	 });