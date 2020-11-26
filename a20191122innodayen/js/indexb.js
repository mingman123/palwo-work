var scrollTop = $(window).scrollTop();
function isBook() {
	$(function () {
        window.requestAnimationFrame(handleScroll);
         act1();
        act2();
        act3();
        act4();
        changeOpacity();
    });
    // 滚动事件
    function handleScroll() {
        var oldScrollTop = scrollTop;
        scrollTop = $(window).scrollTop();
        if (oldScrollTop !== scrollTop) {
//          console.log(scrollTop);
            act1();
            act2();
            act3();
            act4();
            changeOpacity();
        }
        window.requestAnimationFrame(handleScroll);
    }
	
	
	
	
	
	function act1 () {
		var top = $(window).scrollTop();
		var actTop = 700;	// 开始执行动画
		var endTop = 1300;	// 动画结束
		var actY = 100;		// 总共要偏移的值
		var meanY = actY / (endTop - actTop);	// 每滚动一px的时候偏移的值（平均值）
		var num = top - actTop;	// 开始执行动画的滚动值
		var y = num * meanY;	// 实际偏移值    0.6
		if(top<actTop){
			$(".bg-pic1").css({
				'transform': 'translate3d(-50%, 0, 0)',
			});
		}
		if(top>=actTop&&top<endTop){
			$(".bg-pic1").css({
				'transform': 'translate3d(-50%, '+ y +'px, 0)',
			});
		}
		if(top>=endTop){
			$(".bg-pic1").css({
				'transform': 'translate3d(-50%, 100PX, 0)',
			});
		}
		
	}
	function act2 () {
		var actY = $(window).height() - $(".cont2 .title-box").height()*3/2;		// 总共要偏移的值
		var tops = [1860, 2744, 3628, 4512, 5396,6280, 7164,8048,8932];
		var _num = $(window).height() - 969;
		for ( var k = 0; k < tops.length; k++) {
			tops[k] = tops[k] + _num+580;
		}
		
		if(scrollTop<tops[0]){
			$(".pic1").fadeIn().siblings().fadeOut();
		}
		if(scrollTop>=tops[0]&&scrollTop<tops[1]){
			$(".pic2").fadeIn().siblings().fadeOut();
		}
		if(scrollTop>=tops[1]&&scrollTop<tops[2]){
			$(".pic3").fadeIn().siblings().fadeOut();
		}
		if(scrollTop>=tops[2]&&scrollTop<tops[3]){
			$(".pic4").fadeIn().siblings().fadeOut();
		}
		if(scrollTop>=tops[3]&&scrollTop<tops[4]){
			$(".pic5").fadeIn().siblings().fadeOut();
		}
		if(scrollTop>=tops[4]&&scrollTop<tops[5]){
			$(".pic6").fadeIn().siblings().fadeOut();
		}
		if(scrollTop>=tops[5]&&scrollTop<tops[6]){
			$(".pic7").fadeIn().siblings().fadeOut();
		}
		if(scrollTop>=tops[6]){
			$(".pic8").fadeIn().siblings().fadeOut();
		}

	}
	
	
	function act3 () {
		var top = $(window).scrollTop();
		var tops = 8048;
		var _num = $(window).height() - 969;
		var tops7=tops+_num;
		var actTop = tops7+400;	// 开始执行动画
		var endTop = actTop+500;	// 动画结束
		var actY = 100;		// 总共要偏移的值
		var meanY = actY / (endTop - actTop);	// 每滚动一px的时候偏移的值（平均值）
		var num = top - actTop;	// 开始执行动画的滚动值
		var y = num * meanY;	// 实际偏移值    0.6
		if(top>=actTop){
			$(".bg-pic2").css({
				'transform': 'translate3d(-50%, '+ actY +'px, 0)',
			});
		}
		if(top>=actTop&&top<endTop){
			$(".bg-pic2").css({
				'transform': 'translate3d(-50%, '+ y +'px, 0)',
			});
		}
		if(top>=endTop){
			$(".bg-pic2").css({
				'transform': 'translate3d(-50%, 100px, 0)',
			});
		}
		
	}
	
	function changeOpacity(){
		var top = $(window).scrollTop();
		var meanOpacity = 1/250;
		var tops = [1860, 2744, 3628, 4512, 5396,6280, 7164,8048,8932];
		var _num = $(window).height() - 969;
		for ( var k = 0; k < tops.length; k++) {
			tops[k] = tops[k] + _num;
		}
		var top2= top-2400
		if(top<tops[0]){
			$(".wrap2").css({
				'transform': 'translate3d(0, '+ -top +'px, 0)',
			});
		}
		if(top>tops[7]){
			$(".wrap2").css({
				'transform': 'translate3d(0, '+ -top2 +'px, 0)',
			});
		}
		for (var i = 0; i < tops.length-1; i++) {
			var _top = tops[i];
			var num = 300;
			var y;
			if (top>=_top + num+100) {
				var opacity = 1 - meanOpacity * (top - _top - num-100);
				$('.int-box').eq(i).css('opacity', opacity);
			}
			if(top>=_top + num+250){
				$('.int-box').eq(i).css('opacity', '.4');
			}
			if(top<=_top + num+100){
				$('.int-box').eq(i).css('opacity', '1');
			}
			if(top>=_top & top < _top + num) {
				y = _top - num *i
			}
			if(top>=_top + num & top < tops[i+1]) {
				y = top - num *(i+1)
				
			}
			$(".wrap2").css({
				'transform': 'translate3d(0, '+ -y +'px, 0)',
			});
		}
	}
	
	
	$(function(){
		$("body").css("height",$(".wrap1").height()+$(".wrap2").height()+$(".wrap3").height()+$(".wrap4").height()+2400);
	})
	
	function act4(){
		var top = $(window).scrollTop();
		var actY =610+$(window).height() - $(".cont2 .title-box").height();		// 总共要偏移的值
		var tops = 8048;
		var _num = $(window).height() - 969;
		var tops7=tops+_num;
		var topY=top-tops7+actY-300;
//		var actY4 =$(window).height()+510;
//		var topY4=top-4940;
//		console.log(actY,actY4);
		if(top>=0){
			$(".wrap1").css({
				'transform': 'translate3d(0, '+ -top +'px, 0)',
			});
		}
//		if(top>=0){
//			$(".wrap2").css({
//				'transform': 'translate3d(0, '+ -top +'px, 0)',
//			});
//		}
		if(top<=actY){
			$(".wrap3").css({
				'transform': 'translate3d(0,  '+ -top +'px, 0)',
			});
		}
		if(top>=actY&&top<=tops7+300){
			$(".wrap3").css({
				'transform': 'translate3d(0,  '+ -actY +'px, 0)',
			});
		}
		if(top>=tops7+300){
			$(".wrap3").css({
				'transform': 'translate3d(0, '+ -topY +'px, 0)',
			});
		}
		if(top<=actY){
			$(".wrap4").css({
				'transform': 'translate3d(0,  '+ -top +'px, 0)',
			});
		}
		if(top>=actY&&top<=tops7+300){
			$(".wrap4").css({
				'transform': 'translate3d(0,  '+ -actY +'px, 0)',
			});
		}
		if(top>=tops7+300){
			$(".wrap4").css({
				'transform': 'translate3d(0, '+ -topY +'px, 0)',
			});
		}
	}
}