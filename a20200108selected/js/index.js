var tapstr = tcssObj.system == "pc" ? "click" : "tap",
startstr = tcssObj.system == "pc" ? "click" : "touchstart";
var playState = false;
 var $wrap = $("#wrap");
 var voices = document.getElementById("voices");
 var screenchange = {
    width: 750,
    height: 1624,
    resize: function () {
        var html = document.documentElement;
        var w = html.clientWidth, h = html.clientHeight;
        // if (this.w != w || this.h != h) {
            if (h > w) {
                // ������ʾ
                $('.logo').removeClass('on');
                $('.login').removeClass('on');
                html.style.fontSize = w / this.width * 100 + "px";
                $wrap.css({ "width": "100%", "height": "100%", "webkitTransform": "none", "transform": "none" });
            } else {
                // ������ʾ
                $('.logo').addClass('on');
                $('.login').addClass('on');
                html.style.fontSize = h / this.width * 100 + "px";
                $wrap.css({ "width": h, "height": w, "transform": "rotate(-90deg) translate("+-h+"px,0)" });
            }
        // }
    },
    set: null,
    fn: function () {
        var self = screenchange;
        clearTimeout(self.set);
        self.resize();
        // self.set = setTimeout(function () {
        //     self.resize();
        // }, 300);
    },
    init: function () {
        this.fn();
        window.addEventListener("resize", this.fn, false);
        if ("onorientationchange" in window) window.addEventListener("orientationchange", this.fn, false);
    }
}
screenchange.init();

mobileCommonShare.init({
	title:"������ҫ���ݾ�ѡ",//�����û�����Ϊ��ʱ��ҳ����title�����ȡtitle
	desc:"",//������ʱ��ҳ����Description�����ȡDescription
	url:"",//��������Ҫ����ǰҳ��ͬ����(��Q���������Ҫ��) ,�����û�����Ϊ��ʱ��Ĭ�ϵ�ȡ��ǰURL
	imgUrl:"https://share.jpg",//����ͼƬ�ߴ�200*200����С������10k���ң�����д����·����https://��ͷ
	actName:"a20200108selected"//���������������ͳ�Ʒ�������ר��һ�����Ŀ¼������a20151029demo,�����û�����Ϊ��ʱ,��ȡsetSite.siteType
})

$('.top-btn').on('click',function(){
    var time=set
})


// ����
function TGDialogS(e) {
    // ����milo������dialog���
    need("biz.dialog", function (Dialog) {
        Dialog.show({
            id: e,
            bgcolor: '#000' //���������֡�����ɫ����ʽΪ"#FF6600"�����޸ģ�Ĭ��Ϊ"#fff" opacity: 80 //���������֡���͸���ȣ���ʽΪ��10-100������ѡ
        });
    },5000);
}
function closeDialog() {
    // ����milo������dialog���
    need("biz.dialog", function (Dialog) {
        Dialog.hide();
    });
}






