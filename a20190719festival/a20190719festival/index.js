//视频start
function showVideoDia(vid) {
	var player = new Txplayer({
		containerId: 'dia-con',
		vid: vid,
		width: '100%',
		height: '100%',
		autoplay: true
	});
	TGDialogS('dia5');
}
$(".dia-close5").click(function(){
	$(".dia-con").html('');
	$(".dia5").fadeOut(800);
	$("#_overlay_").fadeOut(800);
})
//视频end
//淡入淡出
$(document).ready(function(){
	$('.screenshots1').click(function(){
	    $(".dia1").fadeIn(800);
	});
	$('.screenshots2').click(function(){
	    $(".dia2").fadeIn(800);
	});
	$('.screenshots3').click(function(){
	    $(".dia3").fadeIn(800);
	});
	$('.screenshots4').click(function(){
	    $(".dia4").fadeIn(800);
	});
	
	
	$(".video").click(function(){
	    $(".dia5").fadeIn(800);
	});
	$(".dia-close").click(function(){
		$(".dialog").hide();
	    $(".dialog").fadeOut(800);
	    $("#_overlay_").fadeOut(800);
	    
	});
});

//弹窗start
function TGDialogS(e){
    // 利用milo库引入dialog组件
    need("biz.dialog",function(Dialog){
        Dialog.show({
            id:e,
            bgcolor:'#000', //弹出“遮罩”的颜色，格式为"#FF6600"，可修改，默认为"#fff"
            opacity:60 //弹出“遮罩”的透明度，格式为｛10-100｝，可选
            
        });
    });
}
//function closeDialog(){
//  // 利用milo库引入dialog组件
//  need("biz.dialog",function(Dialog){
//          Dialog.hide();
//      });
//  }
//弹窗end


//音乐 start
window.onload = function(){
	var player = document.getElementById('player');
if (player.paused){ /*如果已经暂停*/
   $(".link").addClass("on");
   console.log(1)
}else {
   $(".link").removeClass("on");
   console.log(2)
}
$(".music").click(function(){
    if (player.paused){ /*如果已经暂停*/
        player.play(); /*播放*/
       $(".link").removeClass("on");
    }else {
        player.pause();/*暂停*/
       $(".link").addClass("on");
        }
    });
}
//音乐 end
//男女切换start
$(function(){
	$(".switch .boy").hover(function(){
	$(".people").addClass("man")
})
$(".switch .girl").hover(function(){
	$(".people").removeClass("man")
	})
})
//男女切换end
//侧导航start	
var side = {
    href: ['people', 'wrap1', 'wrap2', 'wrap3','wrap4','wrap5','wrap6','top'],// 内容板块class
    sideBox: 'fixed-nav',   // 浮动的导航盒子类名
    sides: 'nav', // 导航类名
    cls: 'on', // 导航选中的类名
    setTop: [], // 导航盒子相对顶部的值
    scrolling: false,   // 滚动中
    topHide: true,     // 页面顶部隐藏导航
    init: function () {
        var cls = side.cls;
        var $sidebox = $('.' + side.sideBox);  // 导航盒子对象
        var $sideitem = $('.' + side.sideBox + ' .' + side.sides);  // 导航对象
        // 获取高度
        for (var i = 0; i < side.href.length; i++) {
            var _href = side.href[i];
            var _top;
            if (_href == 'top') {
                _top = 0;
            } else {
                _top = $('.' + _href).offset().top;
            }
            side.setTop.push(_top);
        }
        // 绑定事件
        $sideitem.on('click', function () {
            // event.preventDefault();
            side.scrolling = true;
            $(this).addClass(cls).siblings().removeClass(cls);  // 添加选中类名
            var idx = $sideitem.index(this);    // 获取索引
            var _top = side.setTop[idx] + 1;    // 获取高度
            $('body,html').stop().animate({ scrollTop: _top }, 500);
            setTimeout(function () {
                side.scrolling = false;
            }, 500);
        });
        // 监听滑动
        $(document).on('scroll', function () {
            var scrollTop = $(document).scrollTop();
            if (scrollTop < side.setTop[0]) {
                $('.nav').removeClass(cls);
                if (side.topHide) {
                    $sidebox.fadeOut();
                }
            	console.log(2)
            } else {
            	if (side.scrolling) return;
            	console.log(1)
                $sidebox.fadeIn();
                for (var j = 0; j < side.setTop.length; j++) {
                    if (scrollTop > side.setTop[j] && side.setTop[j] !== 0) {
                        $('.nav').eq(j).addClass(cls).siblings().removeClass(cls);
                    }
                }
            }
        });
    }
}
side.init();
//侧导航end


$(function(){
	$(".preview").mouseover (function(){
		$(".preview-box").removeClass("show");
		$(this).next().addClass("show");
	})
	$(".preview").mouseout(function(){
		$(".preview-box").removeClass("show");
	})
})
	