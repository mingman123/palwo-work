   // 分享
   TGMobileShare({
       shareTitle: '繁荣山丘首届赛车涂装大赛结果公示', //不设置或设置为空时，页面有title，则调取title
       shareDesc: '漂移要快，涂装要帅~车友们快来一起瞻仰获奖作品吧~', //不设置或设置为空时，页面有Description，则调取Description
       shareImgUrl: 'https://game.gtimg.cn/images/wepop/cp/a20191128coating/share.jpg', //分享图片尺寸200*200，且填写绝对路径
       shareLink: '', //分享链接要跟当前页面同域名(手Q分享有这个要求) ,不设置或设置为空时，默认调取当前URL
       actName: 'a20191128coating' //点击流命名，用于统计分享量，专题一般采用目录名称如a20151029demo
   });

var swiper = new Swiper('.swiper-container', {
//	loop:true,
	  cssMode: true,
	  navigation: {
	    nextEl: '.btn-next',
	    prevEl: '.btn-prev',
	  },
  pagination: {
//  el: '.swiper-pagination'
     el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          	return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
  },
  mousewheel: true,
  keyboard: true,
});
$(function(){
	$(".btn-swiper").click(function(){
		$(this).addClass("on").siblings().removeClass("on");
	})
	$(".swiper-pagination-bullet").css('opacity','1');
})


