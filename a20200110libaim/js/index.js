
//音乐
	var ap = new APlayer({
    element: document.getElementById('player'),                      
    narrow: false,                                                     
    autoplay:true,                                                   
    showlrc: 1,                                                        
    mutex: true,                                                      
    theme: '#ffffff',                                                  
    mode: 'single',                                                    
    preload: 'auto',                                               
    listmaxheight: '420px',                                             
    music: {
	    title: '王者意志',
	    author: '无限王者团',
	    subtitle: '2019年王者荣耀冬季冠军杯主题曲',
	    duration: '3:25',
	    url: '//mdup.apdcdn.tc.qq.com/vcloud1022.tc.qq.com/1022_48444ee33034473892e1616d13a31e4d.f0.mp3?vkey=EDC4A8314F6C7F8CAF09F604011FFEE2E6945BCFE8088DBC1B7AAE9A3D1E24714DC487A6A851B55948C4CD61B94A83427694F792176A1DAD9C1FB4380B3D051768C9F1A2BD4BA23B4F8155F41B9F198DA96000420B2ED140&sha=0',
	    pic: 'img/lrc-img.png',
	    // Optional, music picture
	    thumb: 'img/lrc-img.png',
	    // Optional, music thumb
	    lrc: '[00:00.93]作曲：Ping/Drew Ryan Scott\n[00:01.07]作词：冥凰/钟智驹/Sweecret/刘文策/Ping/Drew Ryan Scott\n[00:01.23]编曲：Ping/StarLand\n[00:01.52]OP：NUMBER K COMPANY\n[00:01.69]SP：北京梦织音传媒有限公司\n[00:01.84]主创：亮\n[00:02.01]制作人：StarLand\n[00:02.24]混音&母带：StarLand\n[00:02.40]监唱&和声：StarLand\n[00:02.56]出品：腾讯游戏天美L1工作室&天美音频中心\n[00:02.60]（亮）\n[00:02.67]Yo It’s time to keep it up\n[00:07.06]And take it down\n[00:09.70]（亮）\n[00:09.74]从来我都无惧 质疑的声音\n[00:12.19]前方道路 漫长我自己闯\n[00:14.60]那些纠缠迷惑的声音\n[00:16.77]只会让人迷茫不知 该向东向西\n[00:19.17]无数个不眠之夜和失败痛苦交战\n[00:21.41]一次次冲破束缚来到了崭新的极限 \n[00:23.95]拼尽全力 决不言败 Ya\n[00:26.27]We live it up 战斗无处不在 Fire "\n[00:28.30]（守约）\n[00:28.39]不 畏惧前方 荆棘锋芒\n[00:33.70]只为见证心中那道光\n[00:36.80]（云）\n[00:36.86]没有 天生力量 只带着渴望\n[00:42.50]（亮+信）\n[00:42.55]用意志抵达荣耀赛场\n[00:44.00]（云）\n[00:44.04]势不可挡\n[00:48.10]（合）\n[00:48.14]We will\n[00:49.20]你终将无所惧畏\n[00:51.37]原石般坚不可摧\n[00:53.72]用意志凯旋而归\n[00:55.78]（追逐强者的荣耀）\n[00:57.55]（We will be）\n[00:58.61]你终将无所惧畏\n[01:00.54]原石般坚不可摧\n[01:02.82]用意志凯旋而归\n[01:05.10]（白）\n[01:05.16]（We will begin now）\n[01:07.65]（信）\n[01:07.68]困难阻挡 都不值得一提\n[01:10.21]披荆斩棘 我逆风而行\n[01:12.87]谢谢残酷的试炼\n[01:14.51]丢开所有的假设 无视讥讽和非议\n[01:17.03]磨砺 然后更加闪耀\n[01:19.02]直到成为那万众瞩目的骄傲\n[01:21.06]Get it\n[01:22.92]Let me finish\n[01:24.00]用意志力坚持到底\n[01:25.02]I‘ve got to make It\n[01:26.20]（云）\n[01:26.23]骄傲\n[01:28.20]（守约）\n[01:28.25]谁 都是英雄 从不甘平庸\n[01:33.59]没有什么能让我屈从\n[01:36.94]（云）\n[01:36.96]没有 天生力量 只带着渴望\n[01:42.80]（亮+信）\n[01:42.84]用意志抵达荣耀赛场\n[01:44.20]（云）\n[01:44.23]势不可挡\n[01:48.09]（合）\n[01:48.11]We will\n[01:49.47]你终将无所惧畏\n[01:51.72]原石般坚不可摧\n[01:53.74]用意志凯旋而归\n[01:56.02]（追逐强者的荣耀）\n[01:57.60]（We will be）\n[01:59.13]你终将无所惧畏\n[02:00.84]原石般坚不可摧\n[02:02.96]用意志凯旋而归\n[02:05.25]（白）\n[02:05.30]（We will begin now）\n[02:08.10]（亮+信）\n[02:08.12]Ay ya ya ya ya (Do it)\n[02:09.60]Oh Ay ya ya ya ya (For the glory)\n[02:12.06]Ay ya ya ya ya（We will we will )\n[02:16.75]Ay ya ya ya ya (Do it)\n[02:20.62]Oh Ay ya ya ya ya (For the glory)\n[02:23.22]Ay ya ya ya ya（We will we will）\n[02:26.25]（白）\n[02:26.30]就算迟迟得不到 命运给你的颁奖\n[02:31.34]满身的伤跌跌撞撞\n[02:33.45]（亮+信）\n[02:33.49]（也不要停止 超越自我的步伐）\n[02:35.75]（白）\n[02:35.79]I am never going down\n[02:38.15]（守约）\n[02:38.18]We’re gonna make it sound \n[02:40.40]（亮+信）\n[02:40.43]（We will be We will be）\n[02:42.70]（云）\n[02:42.73]It’s time for you\n[02:46.20]（合）\n[02:46.22]We will\n[02:47.44]你终将无所惧畏\n[02:49.28]原石般坚不可摧\n[02:51.12]用意志凯旋而归\n[02:53.52]（追逐强者的荣耀）\n[02:54.75]（We will be）\n[02:56.15]你终将无所惧畏\n[02:58.62]原石般坚不可摧\n[03:00.92]用意志凯旋而归[03:02.80]（白）\n[03:02.84]（We will begin now）\n[03:05.00]（亮+信）\n[03:05.01]Ay ya ya ya ya (Do it)\n[03:07.00]Oh Ay ya ya ya ya (For the glory)\n[03:09.59]Ay ya ya ya ya (We will we will)\n[03:14.29]Ay ya ya ya ya (Do it)\n[03:16.72]Oh Ay ya ya ya ya (For the glory)\n[03:19.28]Ay ya ya ya ya (We will we will)\n[03:23.40]（白）\n[03:23.44]And we will keep it that way\n'// Optional, lrc, see: ###With lrc
		}
});
ap.play();
$(function(){
	ap.play();
	ap.on('loadstart', function () {
		if (ap.audio.paused) {
			$(".left span").removeClass('play');
			$(".btn-play").addClass('pause');
			
		} else{
			$(".left span").addClass('play');
			$(".btn-play").removeClass('pause');
			
		}
	});
})
$(window).on('load', function(){
  ap.play();
})
$(".btn-play").on("click",function(){
  if(!$(".left span").hasClass('play')){
    ap.play();
    $(".left span").addClass('play');
    $(this).removeClass('pause');
  }else{
    ap.pause();
    $(".left span").removeClass('play');
    $(this).addClass('pause');
  }

})
//$('body').one("click",function(){
//	ap.play();
//})



// 提示
function orient() {
if (window.orientation == 90 || window.orientation == -90) {
$('.mask').show();
return false;
}
else if (window.orientation == 0 || window.orientation == 180) {
 $('.mask').hide();
return false;
}
}
//页面加载时调用
$(function(){
orient();
});
//用户变化屏幕方向时调用
$(window).bind( 'orientationchange', function(e){
orient();
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
  
  
TGMobileShare({
    shareTitle:'万象更新 峡谷第一测', //不设置或设置为空时，页面有title，则调取title
    shareDesc:'来看看你的2020峡谷运势', //不设置或设置为空时，页面有Description，则调取Description
    shareImgUrl:'https://game.gtimg.cn/images/yxzj/cp/a20200110libaim/share.jpg', //分享图片尺寸200*200，且填写绝对路径
    shareLink:'', //分享链接要跟当前页面同域名(手Q分享有这个要求) ,不设置或设置为空时，默认调取当前URL
    actName:'a20200110libaim' //点击流命名，用于统计分享量，专题一般采用目录名称如a20151029demo
});