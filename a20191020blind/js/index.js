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
//����
function TGDialogS(e){
    // ����milo������dialog���
    need("biz.dialog",function(Dialog){
        Dialog.show({
            id:e,
            bgcolor:'#000', //���������֡�����ɫ����ʽΪ"#FF6600"�����޸ģ�Ĭ��Ϊ"#fff"
            opacity:70 //���������֡���͸���ȣ���ʽΪ��10-100������ѡ
        });
    });
}
function closeDialog(){
    // ����milo������dialog���
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