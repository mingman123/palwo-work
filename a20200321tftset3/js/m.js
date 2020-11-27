 init_ZMApp({
           'title':'新赛季全新玩法',
           'summery':'云顶之弈 银河战争 现已正式上线， 完成一把对局， 即可免费解锁最新星系棋盘皮肤，火速前往查看>>>',
           'subtitle' : '新赛季全新玩法',
           'img':'https://game.gtimg.cn/images/lol/act/a20200321tftset3/m/share.jpg',
           'url':location.href.split('?')[0],
           'WXtrigger':function(res){
                //微信动作回调
            },
            'WXsuccess':function(res){
                //微信成功回调
                if(!res) return;
                if(res.errMsg == 'sendAppMessage:ok') {
                    //微信分享个人
                    PTTSendClick('btn','sharewx1','分享给好友');
                } else if(res.errMsg == 'shareTimeline:ok') {
                    //微信分享朋友圈
                    PTTSendClick('btn','sharewx2','分享到朋友圈');
                }else if(res.errMsg == 'shareQQ:ok'){
                    //微信分享至QQ
                    PTTSendClick('btn','shareqq','分享到QQ');  
                }
            },
            'WXcancel':function(res){
                //微信分享取消动作回调
                PTTSendClick('btn','sharewx_cancel','分享取消');
            },
            'WXfail':function(res){
                //微信分享失败动作回调
                PTTSendClick('btn','sharewx_fail','分享失败');
            },
            'QQtrigger':function(res){
                //QQ动作回调

            },
            'QQcallback':function(res){
                //QQ分享成功
                PTTSendClick('btn','shareqq_succ','QQ分享成功');
            },
            'LOL_APPsuccess' : function(res){
                //掌盟分享成功
                PTTSendClick('btn','sharezm_succ','掌盟分享成功');
             }
});

// head
// var swiper1 = new Swiper('.head-sw', {
//     autoplay:true,
//     pagination: {
//         el: '.swiper-pagination',
//     },
// });


$('.cont2 .btn').each(function(idx) {
    $(this).click(function() {
        $('.cont2 .btn.on').removeClass('on')
        $(this).addClass('on')
        $('.cont2 .point').removeClass('on')
        $('.cont2 .point').eq(idx).addClass('on')
        swiper4.slideTo(idx)
    })
})
var swiper4 = new Swiper('.swiper-champions', {
    direction: 'horizontal',
    on: {
        slideChange: () => {
            $('.cont2 .btn.on').removeClass('on')
            $('.cont2 .btn').eq(swiper4.activeIndex).addClass('on')
            $('.cont2 .point').removeClass('on')
            $('.cont2 .point').eq(swiper4.activeIndex).addClass('on')
        }
    }
});

//cont3
var swiper2 = new Swiper('.cont3sw', {
    slidesPerView: 2.4,
    spaceBetween: 20,
});


// cont4
var swiper3 = new Swiper('.cont4sw', {
    effect : 'coverflow',
    slidesPerView: 'auto',
    centeredSlides: true,
    coverflowEffect: {
    rotate: 0,
    stretch: 625 / 750 * document.documentElement.clientWidth,
    depth: 250 / 750 * document.documentElement.clientWidth,
    modifier: 1,
    slideShadows: false,
},
on:{
    slideChange: function() {
        $('.cont4box .swbox1 .tab').removeClass('on')
        $('.cont4box .swbox1 .tab').eq(swiper3.activeIndex).addClass('on')
    },
},
});

function TGDialogS(e){
    // 利用milo库引入dialog组件
    need("biz.dialog",function(Dialog){
        Dialog.show({
            id:e,
            bgcolor:'#000', //弹出“遮罩”的颜色，格式为"#FF6600"，可修改，默认为"#fff"
            opacity:50 //弹出“遮罩”的透明度，格式为｛10-100｝，可选
        });
    });
}
function closeDialog(){
    // 利用milo库引入dialog组件
    need("biz.dialog",function(Dialog){
        Dialog.hide();
    });
}



var player
$('.play-video').click(function() {
    TGDialogS('dia-video')
    player = new Txplayer({
        containerId: 'pop-video',
        vid: this.dataset.vid,
        width: '100%',
        height: '100%',
        autoplay: true
    });
})
$('.dialog .btn-close').click(() => {
    player.pause()
    closeDialog()
})
 
 /* #t6Hl8#195300FE370A487D0B3142365989559E *//* #t6Hl8#9C5A6BF95E5F7B11591DFD93E73BA859 *//* #t6Hl8#2344F03A71121220B2C0F1E4E06607CE *//* #t6Hl8#23EEE6EB816B446A5C20580ED50AE1CB */