// PC/移动公共
function doAfterLoaded() {
    lolSellCommon.loadScripts([
        "//ossweb-img.qq.com/images/js/jquery/jquery-1.11.3.min.js"
    ],function(){
        // 跳转灵魂羁绊
        $('.btn-ip-description').on('click',function() {$('html,body').animate({'scrollTop':$('#anchor-8').offset().top},500);});
    });
    // 原画点击
    $('.fsn-1 + .fetter-skin-img').on('click',function() {
        $('#dia-image').attr('src',$(this).find('img').attr('src'));
        TGDialogS('dia-picture');
    });
}

// 移动
function doInMobile() {
    // 加载灵魂羁绊
    $('.fetter-box-1').fadeIn();
    // 灵魂羁绊切换1
    $('.fetter-box-1 .bch-l').on('click',function() {
        var curr = $('.fetter-img-list .fetter-img.on').index();
        changePage1(curr-1<0? 4: curr-1);
    });
    $('.fetter-box-1 .bch-r').on('click',function() {
        var curr = $('.fetter-img-list .fetter-img.on').index();
        changePage1(curr+1>4? 0: curr+1);
    });
    function changePage1(idx) {
        $('.fetter-img-list .fetter-img').eq(idx).addClass('on').siblings().removeClass('on');
        $('.fetter-buy-box-list .fetter-buy-box').eq(idx).addClass('on').siblings().removeClass('on');
    }
    // 查看详情
    $('.fetter-buy-box-list').on('click','.fetter-detail',function() {
        $('.cont-7').addClass('show2');
        $('.fetter-box-2').fadeIn();
        setTimeout(() => { $('.fetter-box-1').hide(); }, 500);
        var idx = $('.fetter-buy-box-list .fetter-detail').index(this);
        $('.fetter-side-bar .fetter-side-item').eq(idx).addClass('on').siblings().removeClass('on');
        $('.fetter-side-line .fsl').eq(idx).addClass('on').siblings().removeClass('on');
        $('.fetter-description').eq(idx).addClass('on').siblings().removeClass('on');
    });
    // 灵魂羁绊切换2
    $('.fetter-box-2 .bch-l').on('click',function() {
        var curr = $('.fetter-desc-list .fetter-description.on').index();
        changePage2(curr-1<0? 4: curr-1);
    });
    $('.fetter-box-2 .bch-r').on('click',function() {
        var curr = $('.fetter-desc-list .fetter-description.on').index();
        changePage2(curr+1>4? 0: curr+1);
    });
    function changePage2(idx) {
        $('.fetter-desc-list .fetter-description').eq(idx).addClass('on').siblings().removeClass('on');
    }
    zeroCheckh5();
}

// PC
function doInPC() {
    // 自动变换导航
    testScrollTop();
    $(window).on('scroll',function(){testScrollTop();});
    // 侧导航点击
    $('#side-bar .side-li').on('click',function(){
        if ($(this).attr('data-anchor') == '9') window.open("https://lol.qq.com/act/a20200723spiritblossom/pass.html");
        else scrollById('anchor-'+$(this).attr('data-anchor'));
    });
    // 返回顶部
    $('#side-bar .btn-back-top').on('click',function(){$('html,body').animate({'scrollTop':0},500);});
    // 点击查看大礼包
    $('.btn-skin-go-giftbag').on('click',function(){$('html,body').animate({'scrollTop':$('#anchor-6').offset().top},500);});
    // 灵魂羁绊事件
    bindFetter();
    zeroCheck();
}
/**
 * 页面滚动处理
 */
function testScrollTop() {
    var currOn = $('#side-bar .side-li.on').index('#side-bar .side-li'),
    allAnchorTop = [
        $('#anchor-1').offset().top,
        $('#anchor-2').offset().top,
        $('#anchor-3').offset().top,
        $('#anchor-4').offset().top,
        $('#anchor-5').offset().top,
        $('#anchor-6').offset().top,
        $('#anchor-7').offset().top,
        $('#anchor-8').offset().top,
        $(document).height()
    ],
    scroT = $(window).scrollTop();
    // 隐藏导航
    if ($('.title.title-1')[0].getBoundingClientRect().top>0 || scroT>=allAnchorTop[7]) $('#side-bar').fadeOut();
    else $('#side-bar').fadeIn();
    // 切换导航
    for (var i in allAnchorTop) {
        if (scroT < allAnchorTop[i]) {
            if(currOn != (i-1<0 ? 0 : i-1)) $('#side-bar .side-li').eq(i-1<0 ? 0 : i-1).addClass('on').siblings().removeClass('on');
            break;
        }
    }
    // 加载视频
    if (!$('#skin-video-ahri').html()) $('#skin-video-ahri').html('<video autoplay loop muted><source src="'+'//game.gtimg.cn/images/lol/act/a20200807spiritblossom/video-op-ahri.mp4'+'" type="video/mp4"></video>');
    if (scroT>=allAnchorTop[0] && scroT<allAnchorTop[1] && !$('#skin-video-yongen').html()) $('#skin-video-yongen').html('<video autoplay loop muted><source src="'+'//game.gtimg.cn/images/lol/act/a20200807spiritblossom/video-op-yongen.mp4'+'" type="video/mp4"></video>');
    else if (scroT>=allAnchorTop[1] && scroT<allAnchorTop[2] && !$('#skin-video-kindred').html()) $('#skin-video-kindred').html('<video autoplay loop muted><source src="'+'//game.gtimg.cn/images/lol/act/a20200807spiritblossom/video-op-kindred.mp4'+'" type="video/mp4"></video>');
    else if (scroT>=allAnchorTop[2] && scroT<allAnchorTop[3] && !$('#skin-video-riven').html()) $('#skin-video-riven').html('<video autoplay loop muted><source src="'+'//game.gtimg.cn/images/lol/act/a20200807spiritblossom/video-op-riven.mp4'+'" type="video/mp4"></video>');
    else if (scroT>=allAnchorTop[3] && scroT<allAnchorTop[4] && !$('#skin-video-cassiopeia').html()) $('#skin-video-cassiopeia').html('<video autoplay loop muted><source src="'+'//game.gtimg.cn/images/lol/act/a20200807spiritblossom/video-op-cassiopeia.mp4'+'" type="video/mp4"></video>');
    // 加载ip图片
    if (scroT>=allAnchorTop[6] && !$('#anchor-8').hasClass('load')) $('#anchor-8').addClass('load');
    // 压暗
    if (($('#anchor-8')[0].getBoundingClientRect().bottom<($(window).height()+100)) && !$('.fetter-box-1').hasClass('showed')){
        $('.fetter-box-1').fadeIn();
        setTimeout(() => { $('.fetter-box-0').hide(); }, 500);
    }
}
/**
 * 基于JQuery的页面滚动
 * @param {String} id 想要滚动到的id
 */
function scrollById(id){$('html,body').animate({'scrollTop':$('#'+id).offset().top},500);}

var fetterVideoSrc = {
//  ahri: [
//      '//game.gtimg.cn/images/lol/act/a20200723spiritblossom/video-fetter-ahri-1.mp4',
//      '//game.gtimg.cn/images/lol/act/a20200723spiritblossom/video-fetter-ahri-2.mp4'
//  ],
	ahri:'//game.gtimg.cn/images/lol/act/a20200807spiritblossom/video-fetter-ahri.mp4',
    yongen: '//game.gtimg.cn/images/lol/act/a20200807spiritblossom/video-fetter-yongen.mp4',
    kindred: '//game.gtimg.cn/images/lol/act/a20200807spiritblossom/video-fetter-kindred.mp4',
    riven: '//game.gtimg.cn/images/lol/act/a20200807spiritblossom/video-fetter-riven.mp4',
    cassiopeia: '//game.gtimg.cn/images/lol/act/a20200807spiritblossom/video-fetter-cassiopeia.mp4',
};

function bindFetter(){
    // 亮起
    $('.fetter-img-hover').on('click','.btn-fetter',function() {
        $(this).addClass('on').siblings().removeClass('on');
        $('.fetter-img-list .fetter-img').eq($(this).index()).addClass('on').siblings().removeClass('on');
        $('.fetter-buy-box-list .fetter-buy-box').eq($(this).index()).addClass('on').siblings().removeClass('on');
    });
    // 查看详情
    $('.fetter-buy-box-list').on('click','.fetter-detail',function() {
        $('.fetter-box-2').fadeIn();
        setTimeout(() => { $('.fetter-box-1').hide(); }, 500);
        changeFetter($(this).index('.fetter-buy-box-list .fetter-detail'));
    });
    // 形态切换
    $('.form-switch').on('click','.form-swit-item',function() {
        $(this).parent().removeClass('fs-1 fs-2').addClass('fs-'+($(this).index()+1));
        $(this).addClass('on').siblings().removeClass('on');
        $('#fetter-video-dom').attr('src',fetterVideoSrc.ahri[$(this).index()]);
    });
    // 导航切换
    $('.fetter-side-bar').on('click','.fetter-side-item',function() {
        changeFetter($(this).index());
    });
    // 切换跳转页
    function changeFetter(idx) {
        $('.fetter-side-bar .fetter-side-item').eq(idx).addClass('on').siblings().removeClass('on');
        $('.fetter-side-line .fsl').eq(idx).addClass('on').siblings().removeClass('on');
        $('.fetter-description').eq(idx).addClass('on').siblings().removeClass('on');
        switch (idx) {
            case 0:
//              $('#fetter-video-dom').attr('src',fetterVideoSrc.ahri[$('.form-switch .form-swit-item.on').index()]);
                 $('#fetter-video-dom').attr('src',fetterVideoSrc.ahri);
                $('.form-switch').fadeIn();
//              $(".fetter-video").addClass("bg-1");
//              $(".fetter-video").removeClass("bg-2 bg-3 bg-4 bg-5");
                
                break;
            case 1:
                $('#fetter-video-dom').attr('src',fetterVideoSrc.yongen);
                $('.form-switch').fadeOut();
//              $(".fetter-video").addClass("bg-2");
//              $(".fetter-video").removeClass("bg-1 bg-3 bg-4 bg-5");
               break;
            case 2:
                $('#fetter-video-dom').attr('src',fetterVideoSrc.kindred);
                $('.form-switch').fadeOut();
//              $(".fetter-video").addClass("bg-3");
//              $(".fetter-video").removeClass("bg-1 bg-2 bg-4 bg-5");
                break;
            case 3:
                $('#fetter-video-dom').attr('src',fetterVideoSrc.riven);
                $('.form-switch').fadeOut();
//               $(".fetter-video").addClass("bg-4");
//              $(".fetter-video").removeClass("bg-1 bg-2 bg-3 bg-5");
                break;
            case 4:
                $('#fetter-video-dom').attr('src',fetterVideoSrc.cassiopeia);
                $('.form-switch').fadeOut();
//               $(".fetter-video").addClass("bg-5");
//              $(".fetter-video").removeClass("bg-1 bg-2 bg-3 bg-4");
                break;
            default:
                break;
        }
    }
    // 返回亮起
    $('.back-box1').on('click',function() {
        $('.fetter-box-1').show();
        setTimeout(() => { $('.fetter-box-2').fadeOut(); }, 100);
    });
}
function zeroCheck(){
	$(".cont-8 .zero-lists .btn-check").on('click',function(){
		var idx=$(this).parent().index();
		$(".cont-8 .zero-list").removeClass("on bright night").eq(idx).addClass("on")
		$(".check").hide().eq(idx).show();
	})
	$(".cont-8 .zero-lists .btn-bright").on('click',function(){
		$(".cont-8 .zero-lists .btn-night").parents(".zero-list").removeClass("bright night on");
		$(this).parents(".zero-list").addClass("bright");
	})
	$(".cont-8 .zero-lists .btn-night").on('click',function(){
		$(".cont-8 .zero-lists .btn-night").parents(".zero-list").removeClass("bright night on");
		$(this).parents(".zero-list").addClass("night");
	})
}




function zeroCheckh5(){
//	获取每个li元素的宽度
// var liW = $(".box_wheel li").width()
//			获取li元素的长度(个数)
	var len = $(".zero-checks div").length
//			计算ul的总宽度
	// var ulW = len*liW
//			设置ul的宽度
	// $(".box_wheel").css("width",ulW)
	var indexx = 1 
	$(".btn-prev").click(()=>{
		indexx --  //索引自加
		if(indexx == -1){//判断如果索引为-1了，就让它为最后一个li元素的索引
			indexx = len - 1
		}
		showLi(indexx)
	})
	$(".btn-nex").click(()=>{
		indexx ++  //索引自减
		if(indexx == len){//判断如果索引超过长度了，就让它为第一个li元素的索引
			indexx = 0
		}
		showLi(indexx)
	})
	
	function showLi(indexx){
        console.log(indexx)
		switch (indexx) {
		    case 0:
		        $('.zero-lists li').css('display','none');
		        $('.zero-lists .zero-list1').css('display','block');
		        $('.zero-checks div').css('display','none');
		        $('.zero-checks .check1').css('display','block');
		        $('.zero-list div a.btn-night').removeClass("on");
		        $('.zero-list1 div a.btn-night').addClass("on");
		
		        break;
		        case 1:
		            $('.zero-lists li').css('display','none');
		            $('.zero-lists .zero-list2').css('display','block');
		            $('.zero-checks div').css('display','none');
		            $('.zero-checks .check2').css('display','block');
		             $('.zero-list div a.btn-night').removeClass("on");
		            $('.zero-list2 div a.btn-night').addClass("on");
		        break;
		        case 2:
		            $('.zero-lists li').css('display','none');
		            $('.zero-lists .zero-list3').css('display','block');
		            $('.zero-checks div').css('display','none');
		            $('.zero-checks .check3').css('display','block');
		             $('.zero-list div a.btn-night').removeClass("on");
		            $('.zero-list3 div a.btn-night').addClass("on");
		        break;
		
		    default:
		        break;
		}
	}



	$(".zero-list1 div a").click(function(){
	    // console.log($(this).index())
	    switch ($(this).index()) {
	        case 0:
	            $('.zero-list1 i').attr("class", "img-mlm2")
	            break;
	        case 1:
	            $('.zero-list1 i').attr("class", "img-mlm1")
	            
	            break;
	       
	        default:
	            break;
	    }
	});

	$(".zero-list2 div a").click(function(){
	    // console.log($(this).index())
	    switch ($(this).index()) {
	        case 0:
	            $('.zero-list2 i').attr("class", "img-qe2")
	            break;
	        case 1:
	            $('.zero-list2 i').attr("class", "img-qe1")
	           
	            break;
	      
	
	        default:
	            break;
	    }
	});

	$(".zero-list3 div a").click(function(){
	    // console.log($(this).index())
	    switch ($(this).index()) {
	        case 0:
	            $('.zero-list3 i').attr("class", "img-jw2")
	            break;
	        case 1:
	            $('.zero-list3 i').attr("class", "img-jw1")
	          
	            break;
	      
	
	        default:
	            break;
	    }
	});
	$(".zero-list div a").click(function(){
	    $(this).addClass("on").siblings().removeClass("on")
	});
}


// 弹窗事件
function TGDialogS(e){
    // 利用milo库引入dialog组件
    need("biz.dialog",function(Dialog){
        Dialog.show({
            id:e,
            bgcolor:'#000', //弹出“遮罩”的颜色，格式为"#FF6600"，可修改，默认为"#fff"
            opacity:50, //弹出“遮罩”的透明度，格式为｛10-100｝，可选
            onCloseCallback: function() {
                // 暂停视频
                if (typeof diaPlayer != 'undefined') diaPlayer.pause();
            }
        });
    });
}
function closeDialog(){
    // 利用milo库引入dialog组件
    need("biz.dialog",function(Dialog){
        Dialog.hide();
    });
}

// 视频弹窗播放
function playDialogVideo(vid) {
    TGDialogS('dia-playvideo');
    window.diaPlayer = new Txplayer({
        containerId: 'dia-videocont',
        vid: vid,
        width: '1000',
        height: '564',
        autoplay: true
    });
}/* #t6Hl8#C99E57BE62FC63DB4D6049B3C0EAE5A0 */