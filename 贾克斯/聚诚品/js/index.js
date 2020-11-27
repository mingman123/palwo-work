function indexjs() {
  // 弹窗功能
  window.TGDialogS = function(e) {
    // 利用milo库引入dialog组件
    need('biz.dialog', function (Dialog) {
      Dialog.show({
        id: e,
        bgcolor: '#000', //弹出“遮罩”的颜色，格式为"#FF6600"，可修改，默认为"#fff"
        opacity: 50, //弹出“遮罩”的透明度，格式为｛10-100｝，可选
      })
    })
  }
  window.closeDialog = function() {
    // 利用milo库引入dialog组件
    need('biz.dialog', function (Dialog) {
      Dialog.hide()
    })
  }

  if (!lolCommon.isPC()) {
    need("daoju.mo", function(mo) {
      var _share = {
        "title":"九周年限定武神降临，接招吧",
        "desc":"九周年限定武神降临，买即赠专属头像，做自己的武神！",
        "icon": "https://game.gtimg.cn/images/zbdaoju/act/a20200818godjax/share.jpg",
        "link": window.location.href
      };
      if (typeof HostApp != "undefined" || milo.cookie.get("djc_appVersion") != null) {
        setTimeout(function () {
          var option = {
            "title": _share.title,
            "pic": _share.icon,
            "content": _share.desc,
            "share_url": _share.link,
            type: '1,2,3,4,5,6',
          }
          HostApp._registerShareInfo = $.param(option);
        }, 1000)
      }else{
        mo.setShare(_share);
      }
    });
  }
  
  // 预加载图片
  var imgs = [
    '//game.gtimg.cn/images/zbdaoju/act/a20200818godjax/header-btn1-on.png',
    '//game.gtimg.cn/images/zbdaoju/act/a20200818godjax/header-btn2-on.png',
    '//game.gtimg.cn/images/zbdaoju/act/a20200818godjax/header-btn3-on.png',
  ]
  imgs.forEach((img) => {
    var el = new Image()
    el.src = img
  })

  // 轮播图
  var swiper1 = new Swiper('.section1__swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination1',
    },
    autoplay:true,
  })
  var swiper2 = new Swiper('.section4__swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination2',
    },
  })

  var swiper3 = new Swiper('.section1__plain__swiper', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    navigation: {
      nextEl: '.section1__plain__swiper__btn-next',
      prevEl: '.section1__plain__swiper__btn-prev',
    },
    autoplay:true,
  })

  // 侧导航
  $('.nav .nav__btn').click(function () {
    $('.nav .nav__btn').removeClass('on')
    $(this).addClass('on')
  })
  $(document).on('scroll', function() {
    var navPoints = [3321, 4135, 4676, 6044]
    var scrollTop = document.documentElement.scrollTop
    navPoints.push(scrollTop)
    var index = navPoints.sort((a, b) => a - b).indexOf(scrollTop)
    if (index < 0) return
    $('.nav .nav__btn').removeClass('on')
    $('.nav .nav__btn').eq(index).addClass('on')
  })

  // 视频
  function playVideo() {
    var player = new Txplayer({
      containerId: 'video-container',
      vid: 'u3137sxfwyn',
      width: '100%',
      height: '100%',
      autoplay: true,
    })
  }
  $('.header__video__btn-play').click(function() {
    // alert('敬请期待！')
    TGDialogS('dialog-video')
    playVideo()
  })
  $(".dialog__btn-close").click(function(){
    $(".video-container").html('');
    player.mute();
  })

  // 自适应链接
  $('.alink').click(function(e) {
    e.preventDefault();
    if ($(this).hasClass('runout') || $(this).hasClass('preparing')) {
      return false
    }
    if (lolCommon.isPC()) {
      if (isOfficial) {
        // 官方pc
        if ($(this).hasClass('pintuan')) {
          TGDialogS('dialog-qr')
        } else if (this.dataset.linkId) {
          window.open('https://lolriotmall.qq.com/detail.shtml?id=' + this.dataset.linkId)
        } else if (this.dataset.linkLolPc) {
          window.open(this.dataset.linkLolPc)
        } else if (this.href && this.href !== 'javascript:;') {
          window.open(this.href)
        } else {
          alert('无效地址！')
        }
      } else {
        // 聚诚品pc
        if ($(this).hasClass('pintuan')) {
          TGDialogS('dialog-qr')
        } else if (this.dataset.linkId) {
          window.open('https://mall.qq.com/lol/detail.shtml?id=' + this.dataset.linkId)
        } else if (this.dataset.linkQqPc) {
          window.open(this.dataset.linkQqPc)
        } else if (this.href && this.href !== 'javascript:;') {
          window.open(this.href)
        } else {
          alert('无效地址！')
        }
      }
    } else {
      if (isOfficial) {
        // 官方移动
        if (this.dataset.linkId) {
          if (isMP) {
            // 小程序
            wx.miniProgram.navigateTo({url: '/pages/detail/detail?id=' + this.dataset.linkId})
          } else {
            if ($(this).hasClass('pintuan')) {
              window.location.href = 'https://lolriotmall-wx.qq.com/pintuan.shtml?id=' + this.dataset.linkId
            } else {
              window.location.href = 'https://lolriotmall-wx.qq.com/detail.shtml?id=' + this.dataset.linkId
            }
          }
        } else if (this.dataset.linkLolM) {
          window.location.href = this.dataset.linkLolM
        } else if (this.href && this.href !== 'javascript:;') {
          window.location.href = this.href
        } else {
          alert('无效地址！')
        }
      } else {
        // 聚诚品移动
        if (this.dataset.linkId) {
          if ($(this).hasClass('pintuan')) {
            window.location.href = 'https://m.mall.qq.com/lol/pintuan/' + this.dataset.linkId + '?bizcode=lol'
          } else {
            window.location.href = 'https://m.mall.qq.com/lol/detail/' + this.dataset.linkId
          }
        } else if (this.dataset.linkQqM) {
          window.location.href = this.dataset.linkQqM
        } else if (this.href && this.href !== 'javascript:;') {
          window.location.href = this.href
        } else {
          alert('无效地址！')
        }
      }
    }
    return false;
  });

  var b = new Date ();
  var n = new Date ();
  b.setHours(20);
  b.setMinutes(0);
  var date1 = Date.parse(new Date('2020-08-18'.replace(/-/g, '/')));
  var date2 = Date.parse(new Date('2020-08-25'.replace(/-/g, '/')));
  var time = Date.parse(n);
  if (time>date1 && time<date2 && (n.getTime () - b.getTime () >= 0)) {
    //时间满足
    //神龙烈焰金克丝
    need(['daoju.zb.model.goods'],function(goodsModel) {
      goodsModel.getLimitInfo({
        biz: 'lol',
        iActionId: '0',
        propid: 1171
      }, function(jsonLimit) {
        console.log(jsonLimit);
        if (jsonLimit.ret==0){
          if (jsonLimit.left>0){
            $(".jinkesi").removeClass("runout");
            $(".jinkesi").removeClass("preparing");
            // $(".jinkesi").attr("href","//mall.qq.com/lol/detail.shtml?id=1171");
          }else{
            $(".jinkesi").removeClass("preparing");
            $(".jinkesi").addClass("runout");
          }
        }
      });
    });
    //星之守护者
    need(['daoju.zb.model.goods'],function(goodsModel) {
      goodsModel.getLimitInfo({
        biz: 'lol',
        iActionId: '0',
        propid: 1775
      }, function(jsonLimit) {
        console.log(jsonLimit);
        if (jsonLimit.ret==0){
          if (jsonLimit.left>0){
            $(".shouhuzhe").removeClass("runout");
            $(".shouhuzhe").removeClass("preparing");
            // $(".shouhuzhe").attr("href","//mall.qq.com/lol/detail.shtml?id=1775");
          }else{
            $(".shouhuzhe").removeClass("preparing");
            $(".shouhuzhe").addClass("runout");
          }
        }
      });
    });
    //电玩迷你
    need(['daoju.zb.model.goods'],function(goodsModel) {
      goodsModel.getLimitInfo({
        biz: 'lol',
        iActionId: '0',
        propid: 5844
      }, function(jsonLimit) {
        console.log(jsonLimit);
        if (jsonLimit.ret==0){
          if (jsonLimit.left>0){
            $(".dianwan").removeClass("runout");
            $(".dianwan").removeClass("preparing");
            // $(".dianwan").attr("href","//mall.qq.com/lol/detail.shtml?id=5844");
          }else{
            $(".dianwan").removeClass("preparing");
            $(".dianwan").addClass("runout");
          }
        }
      });
    });
    //DJ娑娜
    need(['daoju.zb.model.goods'],function(goodsModel) {
      goodsModel.getLimitInfo({
        biz: 'lol',
        iActionId: '0',
        propid: 9919
      }, function(jsonLimit) {
        console.log(jsonLimit);
        if (jsonLimit.ret==0){
          if (jsonLimit.left>0){
            $(".djsn").removeClass("runout");
            $(".djsn").removeClass("preparing");
            // $(".djsn").attr("href","//mall.qq.com/lol/detail.shtml?id=9919");
          }else{
            $(".djsn").removeClass("preparing");
            $(".djsn").addClass("runout");
          }
        }
      });
    });
  }else{
    $(".section4__purchase__btn").addClass("preparing");
  }
}
