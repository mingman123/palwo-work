var scrollTop = $(window).scrollTop();
function isM() {
	$(function () {
		window.requestAnimationFrame(handleScroll);
		act1();
		act2();
		act3();
		act4();
		act5();
		act6();
		act7();
		changeOpacity();
		var tops = [];
		var stopTime = 400;
		var h2 = $('.wrap1').height() + $('.wrap4').height()/5;
		for (var j = 0; j < $('.int-box').length + 1; j++) {
			tops[j] = h2 + ($('.int-box').height() + stopTime) * j;
		}
	});
	// 滚动事件
	function handleScroll() {
		var oldScrollTop = scrollTop;
		scrollTop = $(window).scrollTop();
		if (oldScrollTop !== scrollTop) {
			act1();
			act2();
			act3();
			act4();
			act5();
			act6();
			act7();
			changeOpacity();
		}
		window.requestAnimationFrame(handleScroll);
	}


		var tops = [];
			var stopTime = 400;
			var h2 = $('.wrap1').height() + $('.wrap4').height()/5;
		for (var j = 0; j < $('.int-box').length + 1; j++) {
			tops[j] = h2 + ($('.int-box').height() + stopTime) * j;
		}
		function changeOpacity() {
			var h = $('.wrap1').height() + $('.wrap4').height();
			$('.int-boxs').css('top', h);
			var top = $(window).scrollTop();
			$('.cont22').height(tops[7]-$('.int-box2').height()/4);
			if (top < tops[0]) {
				$(".int-boxs").css({
					'transform': 'translate3d(-50%, ' + -top + 'px, 0)',
				});
			}
			if (top > tops[8]) {
				var _y = top  - stopTime * (8);
				$(".int-boxs").css({
					'transform': 'translate3d(-50%, ' + -_y + 'px, 0)',
				});
			}
			for (var i = 0; i < tops.length -1; i++) {
				var _top = tops[i];
				var y;
				if (top >= _top && top < _top + stopTime) {
					y = _top  - stopTime * i;
				}
				if (top >= _top + stopTime && top < tops[i + 1]) {
					y = top  - stopTime * (i + 1);
				}
				$(".int-boxs").css({
					'transform': 'translate3d(-50%, ' + -y + 'px, 0)',
				});
			}
		}


	function act1() {
		var top = $(window).scrollTop();
		var actTop = $(".cont1").height()-$(window).height()/5+ $(".cont21").height()/1.2;	// 开始执行动画
		var endTop = window.innerHeight*1.1 - $(".cont21").height()*3/2 + actTop;	// 动画结束
		//		var actY=window.innerHeight - ((window.innerHeight - $('.bg-pic1').height()) / 2);// 总共要偏移的值
		var actY = window.innerHeight + 4 - $(".cont21").height()*8/7+$(window).height()/5;// 方法二
		var meanY = actY / (endTop - actTop);	// 每滚动一px的时候偏移的值（平均值）
		var num = top - actTop;	// 开始执行动画的滚动值
		var y = num * meanY;	// 实际偏移值    0.6
		//		var endTop2=endTop+200

		if (top >= 0 && top < endTop) {
			$(".bg-pic1").css({
				'transform': 'translate3d(-50%, ' + -y + 'px, 0)',
			});
		}
		if (top >= endTop) {
			$(".bg-pic1").css({
				'transform': 'translate3d(-50%, ' + -actY + 'px, 0)',
			});
		}
	}

	function act2() {
		var scrollTop = $(window).scrollTop();
		var actY = window.innerHeight - $(".cont21").height()+$(window).height()/5;// 方法二
    var endTop = tops[7] + stopTime;
		var y = endTop - actY - scrollTop+$(".cont21 .subtitle").height()/4.2;
	  for ( var i = 1; i < tops.length-1; i++) {
			if (scrollTop >= tops[i]-((window.innerHeight-$(".bg-pic").height()-$(".cont21").height())/3)) {
				$('.pic' + (i+1)).fadeIn();
			} else {
				$('.pic' + (i+1)).fadeOut();
			}
		}
		if (scrollTop >= endTop) {
			$(".bg-pic1").css({
				'transform': 'translate3d(-50%, ' + y + 'px, 0)',
			});
		}
	}


	function act3() {
		var top = $(window).scrollTop();
		var actTop = $(".cont1").height() + $(".cont21").height() + $(".cont22").height() + $(".cont3").height() *2/5;	// 开始执行动画
		var endTop = $(".cont1").height() + $(".cont21").height() + $(".cont22").height() + $(".cont3").height();	// 动画结束
		var actY = $(".cont3 .subtitle").height();		// 总共要偏移的值
		var meanY = actY / (endTop - actTop);	// 每滚动一px的时候偏移的值（平均值）
		var num = top - actTop;	// 开始执行动画的滚动值
		var y = num * meanY;	// 实际偏移值    0.6
		if (top < actTop) {
			$(".bg-pic2").css({
				'transform': 'translate3d(-50%, 0, 0)',
			});
		}
		if (top >= actTop && top < endTop) {
			$(".bg-pic2").css({
				'transform': 'translate3d(-50%, ' + y + 'px, 0)',
			});
		}
		if (top >= endTop) {
			$(".bg-pic2").css({
				'transform': 'translate3d(-50%, ' + actY + 'px, 0)',
			});
		}

	}

	function act4() {
		var top = $(window).scrollTop();
		var actTop = 0;
		var endTop = 100;
		var actY = $(".nav-box").height();
		var meanY = actY / (endTop - actTop);
		var num = top - actTop;
		var y = num * meanY;
		//		console.log(y);
		if (actTop <= top && top <= endTop) {
			$(".nav-box").css({
				'transform': 'translate3d(0, ' + -y + 'px, 0)',
			})
		}
		//			if(top<=actTop){
		//			$(".nav-box").css({
		//				'transform': 'translate3d(0,  0, 0)',
		//			})
		//		}
		if (top >= endTop) {
			$(".nav-box").css({
				'transform': 'translate3d(0,  ' + -actY + 'px, 0)',
			})
		}

	}
	function act5() {
		var top = $(window).scrollTop();
		var actTop = 0;
		var endTop = window.innerHeight;
		var actY = (window.innerHeight - $(".head-title-box").height()) / 2 + $(".head-title-box").height()*1.1;
		var meanY = actY / (endTop - actTop);
		var num = top - actTop;
		var y = num * meanY;

		if (actTop <= top && top <= endTop) {
			$(".head-title-box").css({
				'transform': 'translate3d(0, ' + -y + 'px, 0)',
			})

		}
		if (top >= endTop) {
			$(".head-title-box").css({
				'transform': 'translate3d(0, ' + -actY + 'px, 0)',
			})

		}

	}

	function act6() {
		var top = $(window).scrollTop();
		var actTop = 0;// 开始执行动画
		var endTop = window.innerHeight + $(".cont1-box").height() + 230;
		var actY = window.innerHeight + $(".cont1-box").height()+ 150;
		var meanY = actY / (endTop - actTop);
		var num = top - actTop;
		var y = num * meanY;
		if (y > actY) {
			y = actY;
		}
		if (actTop <= top && top <= endTop) {
			$(".cont1-box").css({
				'transform': 'translate3d(0, ' + -y + 'px, 0)',
			})
		}
	}
	function act7() {
		var top = $(window).scrollTop();
		var actTop = $(".cont1").height()-$(window).height()/8;// 开始执行动画
		var endTop = window.innerHeight*1.1- $(".cont21").height()+actTop;
		
		var endTop2 = tops[7] + stopTime;
		var actY = window.innerHeight + $(".cont21").height()/8+$(window).height()/5;// 方法二      
		var meanY = actY / (endTop - actTop);
		var num = top - actTop;
		var y = num * meanY;
		//		var y = endTop - actY - scrollTop;
		var y2 = endTop2 - actY - scrollTop;
		//		if(y > actY) {
		//			y = actY;
		//		}
		if (top <= actTop) {
			$(".cont21").css({
				'transform': 'translate3d(-50%, 0, 0)',
			})
		}
		if (actTop <= top && top <= endTop) {
			$(".cont21").css({
				'transform': 'translate3d(-50%, ' + -y + 'px, 0)',
			})
		}
		if (endTop <= top && top <= endTop2) {
			$(".cont21").css({
				'transform': 'translate3d(-50%, ' + -actY + 'px, 0)',
			})
		}
		if (top >= endTop2) {
			$(".cont21").css({
				'transform': 'translate3d(-50%,' + y2 + 'px, 0)',
			})
		}
	}

	$(function () {
		$(".btn").click(function () {
			if ($(this).hasClass('on')) {
				$(this).removeClass("on");
				$(".nav-box").removeClass("on");
				$(".nav-box").css('background', 'none');
			} else {
				$(this).addClass("on");
				$(".nav-box").addClass("on");
				$(".nav-box").css('background', '#000000');
			}

		})
	})
}