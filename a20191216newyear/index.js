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
