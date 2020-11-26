// 分享
TGMobileShare({
    shareTitle: '暴爽十连抽，一直抽一直爽！', //不设置或设置为空时，页面有title，则调取title
    shareDesc: 'switch、京东卡等你拿，累计抽奖次数必得稀有定制车赤影威龙哟~', //不设置或设置为空时，页面有Description，则调取Description
    shareImgUrl: 'https//game.gtimg.cn/images/wepop/cp/a201901014party/share.jpg', //分享图片尺寸200*200，且填写绝对路径
    shareLink: '', //分享链接要跟当前页面同域名(手Q分享有这个要求) ,不设置或设置为空时，默认调取当前URL
    actName: 'a20191014party' //点击流命名，用于统计分享量，专题一般采用目录名称如a20151029demo
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



    //点击开始抽奖 通知js flash->js

    //开始抽奖lottery->js
    function callJsToStart() {
        lottery.disable();
        calllotteryToRoll(4);
    }
    //开发获得抽奖结果 通知lottery开始播放效果 js->lottery
    function calllotteryToRoll(id) {
        if (lottery) lottery.stopRoll(id);
    }
    //动画完成通知js lottery->js        
    function callJsToComplete() {
//      alert('恭喜你获得大奖哟！！');
        TGDialogS('dia7');
    }

    //初始化抽奖的 可以不知道内部
    var lottery = new Lottery({
        'lighturl': '//game.gtimg.cn/images/wepop/cp/a201901014party/lotteryon.png',//外部光圈png 不填写就用默认的效果
        'starturl': '//game.gtimg.cn/images/wepop/cp/a201901014party/btn.gif', //外部按钮png 不填写就用默认的按钮效果
        'width': 648,//lottery 宽度
        'height': 404,//lottery 高度
        'total': 12,//抽奖产品的总数
        'sbtnx': 144,// 开始抽奖按钮的位置x坐标
        'sbtny': 132,// 开始抽奖按钮的位置y坐标
        'sbtnw': 318,// 开始抽奖按钮的宽度
        'sbtnh': 108,// 开始抽奖按钮的高度
        'boxw': 118,// 奖品光效的宽度
        'boxh': 118,//奖品光效的高度 
        'position': "10_10,128_10,246_10,364_10,478_10,478_128,478_246,364_246,246_246,128_246,10_246,10_128,",
        //奖品光效的位置，对应奖品图片的布局，填入每个奖品的位置以及角度用逗号分割 x_y 例如19_20或者19_20_0 表示第一个奖品的位置 x坐标为19px y坐标为20px 角度为0。）
        'contentId': 'lotterycontent',//嵌入lottery 的div层的 id 
        'onClickRollEvent': callJsToStart,//对应上面接口
        'onCompleteRollEvent': callJsToComplete //对应上面接口
    });
    

var speed = 0, infoWidth=0;
    //文字移动
	function barrageAnimate(){
		$("#barrageInfo>div").css("right",'-'+infoWidth+'px');  
		$("#barrageInfo>div").animate({
			right:'300px',
		},speed,'linear')
	}
	//文字获取饼循环滚动
	function getBarrage(){
		speed = 800*document.body.clientWidth/80;	
		infoWidth = $("#barrageInfo span").width();
        barrageAnimate();
		setInterval(barrageAnimate,speed+300);
	}
	getBarrage()
