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
	         //QQ登录
	         milo.addEvent(g('btn_qqlogin'),'click',function(e){
	             LoginManager.login();
	         });
	
	         //注销
	         milo.addEvent(g("btn_logout"),"click",function(){
	             LoginManager.logout();
	         })
	
	         var chkLoginFunc=function(str){
	             LoginManager.checkLogin(function(){
	                 console.log("已登录: "+str);
	             },function(){
	                 console.log("未登录: "+str);
	             })
	         }
	         //执行验证登陆操作
	         LoginManager.checkLogin(function(userinfo){
	             //此处返回用户的基本信息
	             console.log("已登录：\n",userinfo);
	             //如果登陆类型是qq，使用LoginManager.getUserFace方法去获取头像
	             if (userinfo.logtype=="qq"){
	                 LoginManager.getUserFace(function(data){
	                     $("#ams_user_headimg").html("<img src=\""+data.userFace+"\"> ");
	                 });
	             }else if(userinfo.logtype=="wx"){
	                 //如果登陆类型是wx微信，就直接获取基本信息里的头像
	                 $("#ams_user_headimg").html("<img src=\""+userinfo.headimgurl+"/64\"> ");
	             }
	
	         },function(){
	             console.log("未登录");
	             //LoginManager.init();
	         });
	     });
	 });