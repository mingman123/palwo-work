 init_ZMApp({
           'title':'������ȫ���淨',
           'summery':'�ƶ�֮�� ����ս�� ������ʽ���ߣ� ���һ�ѶԾ֣� ������ѽ���������ϵ����Ƥ��������ǰ���鿴>>>',
           'subtitle' : '������ȫ���淨',
           'img':'https://game.gtimg.cn/images/lol/act/a20200321tftset3/m/share.jpg',
           'url':location.href.split('?')[0],
           'WXtrigger':function(res){
                //΢�Ŷ����ص�
            },
            'WXsuccess':function(res){
                //΢�ųɹ��ص�
                if(!res) return;
                if(res.errMsg == 'sendAppMessage:ok') {
                    //΢�ŷ������
                    PTTSendClick('btn','sharewx1','���������');
                } else if(res.errMsg == 'shareTimeline:ok') {
                    //΢�ŷ�������Ȧ
                    PTTSendClick('btn','sharewx2','��������Ȧ');
                }else if(res.errMsg == 'shareQQ:ok'){
                    //΢�ŷ�����QQ
                    PTTSendClick('btn','shareqq','����QQ');  
                }
            },
            'WXcancel':function(res){
                //΢�ŷ���ȡ�������ص�
                PTTSendClick('btn','sharewx_cancel','����ȡ��');
            },
            'WXfail':function(res){
                //΢�ŷ���ʧ�ܶ����ص�
                PTTSendClick('btn','sharewx_fail','����ʧ��');
            },
            'QQtrigger':function(res){
                //QQ�����ص�

            },
            'QQcallback':function(res){
                //QQ����ɹ�
                PTTSendClick('btn','shareqq_succ','QQ����ɹ�');
            },
            'LOL_APPsuccess' : function(res){
                //���˷���ɹ�
                PTTSendClick('btn','sharezm_succ','���˷���ɹ�');
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