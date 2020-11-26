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
//弹窗
function TGDialogS(e){
    // 利用milo库引入dialog组件
    need("biz.dialog",function(Dialog){
        Dialog.show({
            id:e,
            bgcolor:'#000', //弹出“遮罩”的颜色，格式为"#FF6600"，可修改，默认为"#fff"
            opacity:70 //弹出“遮罩”的透明度，格式为｛10-100｝，可选
        });
    });
}
function closeDialog(){
    // 利用milo库引入dialog组件
    need("biz.dialog",function(Dialog){
        Dialog.hide();
    });
}


//$('.box3').hover(
//	function(){
// 		$(this).addClass('stop');
//	}
//);

$('.blind-box1 a').hover(function(){
 	$('.blind-box1 .box3').addClass('stop');
});
$('.blind-box2 a').hover(function(){
 	$('.blind-box2 .box3').addClass('stop');
});
$('.blind-box3 a').hover(function(){
 	$('.blind-box3 .box3').addClass('stop');
});
$('.blind-box4 a').hover(function(){
 	$('.blind-box4 .box3').addClass('stop');
});