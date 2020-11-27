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
                // 竖屏显示
                $('.logo').removeClass('on');
                $('.login').removeClass('on');
                html.style.fontSize = w / this.width * 100 + "px";
                $wrap.css({ "width": "100%", "height": "100%", "webkitTransform": "none", "transform": "none" });
            } else {
                // 横屏显示
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
	title:"王者荣耀内容精选",//不设置或设置为空时，页面有title，则调取title
	desc:"",//不设置时，页面有Description，则调取Description
	url:"",//分享链接要跟当前页面同域名(手Q分享有这个要求) ,不设置或设置为空时，默认调取当前URL
	imgUrl:"https://share.jpg",//分享图片尺寸200*200，大小控制在10k左右，且填写绝对路径以https://开头
	actName:"a20200108selected"//点击流命名，用于统计分享量，专题一般采用目录名称如a20151029demo,不设置或设置为空时,调取setSite.siteType
})

$('.top-btn').on('click',function(){
    var time=set
})


// 弹窗
function TGDialogS(e) {
    // 利用milo库引入dialog组件
    need("biz.dialog", function (Dialog) {
        Dialog.show({
            id: e,
            bgcolor: '#000' //弹出“遮罩”的颜色，格式为"#FF6600"，可修改，默认为"#fff" opacity: 80 //弹出“遮罩”的透明度，格式为｛10-100｝，可选
        });
    },5000);
}
function closeDialog() {
    // 利用milo库引入dialog组件
    need("biz.dialog", function (Dialog) {
        Dialog.hide();
    });
}






