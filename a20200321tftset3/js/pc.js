 $(window).scroll(function () {
    var top = $(window).scrollTop();
    var width= document.body.scrollWidth;
    if(width>1600){
    	if(top<900){
    		$('.nav').fadeOut();
    	}
    	if(top>900){
    		 $('.nav').fadeIn();
    		 $('.nav a').removeClass('on').eq(0).addClass('on');
    	}
    	if(top>2200){
    		$('.nav a').removeClass('on').eq(1).addClass('on');
    	}
    	if(top>3521){
    		$('.nav a').removeClass('on').eq(2).addClass('on');
    	}
		if(top>4620){
    		$('.nav a').removeClass('on').eq(3).addClass('on');
    	}
		if(top>4620){
    		$('.nav a').removeClass('on').eq(3).addClass('on');
    	}
		if(top>6220){
    		$('.nav a').removeClass('on').eq(4).addClass('on');
    	}

    }else{
    	$('.nav').hide();
    }
 })
window.onresize = function() {
    // 浏览器窗口变化后需要做的事情
    var winWidth = document.body.clientWidth || document.documentElement.clientWidth;
    if(winWidth<1600){
    	$('.nav').hide();
    }
} 
$('.btn-top').on('click',function(){
	$('html,body').animate({scrollTop: '0px'}, 800);
})
$('.nav .navbtn').on('click',function(){
	var idx = $(this).index();
	console.log(idx);
	if(idx == 0){
		$('html,body').animate({scrollTop: '1400px'}, 800);
	}
	if(idx == 1){
		$('html,body').animate({scrollTop: '2500px'}, 800);
	}
	if(idx == 2){
		$('html,body').animate({scrollTop: '3900px'}, 800);
	}
	if(idx == 3){
		$('html,body').animate({scrollTop: '4900px'}, 800);
	}
	if(idx == 4){
		$('html,body').animate({scrollTop: '6400px'}, 800);
	}
})

var player2;
function cont2Video(vid,staus){
 window.player2 = new Txplayer({
    containerId: 'container2',
    vid: vid,
    width: '100%',
    height: '100%',
    autoplay: staus,
    poster:'//game.gtimg.cn/images/lol/act/a20200321tftset3/cont1videopic.png',
    
 }); 
 
}

var random1= Math.floor(Math.random()*4);
$('.card-box').eq(random1).show();
if(random1 == 0){
	cont2Video('t0938z1t5r0',false);
}else if(random1 == 1){
	cont2Video('d0938z4xhhy',false);
}else if(random1 == 2){
	cont2Video('u0938auixww',false);
}else if(random1 == 3){
	cont2Video('h0938jiufx9',false);
}else if(random1 == 4){
	cont2Video('l0938opb5ph',false);
}

$('.btn-refresh').on('click',function(){
//	$('.card-box').hide();
//	var num = random2;
//	random2 = Math.floor(Math.random()*5)
//	if(num == random2){
//		random2 = Math.floor(Math.random()*5);
//		$('.card-box').eq(random2).fadeIn();
//		 
//	}else{
//		$('.card-box').eq(random2).fadeIn();
//	}
	random1++;
	if(random1>4){
		random1=0;	 
	}
	if(random1 == 0){
		cont2Video('t0938z1t5r0',true);
	}else if(random1 == 1){
		cont2Video('d0938z4xhhy',true);
	}else if(random1 == 2){
		cont2Video('u0938auixww',true);
	}else if(random1 == 3){
		cont2Video('h0938jiufx9',true);
	}else if(random1 == 4){
		cont2Video('l0938opb5ph',true);
	}
	$('.card-box').hide();
    $('.card-box').eq(random1).fadeIn();
 	player1.pause();
	swcont1.pause();

})

player2.on('playStateChange',function(){
	if(this.getPlayerState()===1){
		 player1.pause();
		 swcont1.pause();
	}
})




var player1 = new Txplayer({
	containerId: 'container',
    vid: 't0931ddh4zf',
    width: '100%',
    height: '100%',
    autoplay: false,
    poster:'//game.gtimg.cn/images/lol/act/a20200321tftset3/cont1videopic.png',
    
});
player1.on('playStateChange',function(){
	if(this.getPlayerState()===1){
		 player2.pause();
		 swcont1.pause();
	}
})

// swiper
var swcont1,swcont2,swcont3,
 swcont1 = new Txplayer({
    containerId: 'swcontainer1',
	vid: 'e093834aaij',
	width: '100%',
	height: '100%',
    autoplay: false,
    poster:'//game.gtimg.cn/images/lol/act/a20200321tftset3/cont1videopic.png',
    
});
swcont1.on('playStateChange',function(){
	if(this.getPlayerState()===1){
		 player1.pause();
		 player2.pause();	 
	}
})
function swvideo(id,vid){
	swcont1 = new Txplayer({
	    containerId: id,
		vid: vid,
		width: '100%',
		height: '100%',
	    autoplay: true,
	   
	});
}
 
var swiper = new Swiper('.swbox3', {
  effect : 'fade',
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },
   pagination: {
        el: '.swiper-pagination',
        clickable :true,
   },
   on: {
   	slideChangeTransitionStart:function(){
   		 var nowIndex = this.activeIndex;
   		 player1.pause();
   		 player2.pause();
   		 $('.swcontainer').html(' ');
   	     if(nowIndex == 0){
   	     	$('.sw-txt').hide().eq(0).show();
   	     	swvideo('swcontainer1','e093834aaij');
   	     }else if( nowIndex == 1){
   	     	$('.sw-txt').hide().eq(1).show();
   	     	swvideo('swcontainer2','a0938apnaiu');
   	     }else if( nowIndex == 2){
   	     	$('.sw-txt').hide().eq(2).show();
   	     	swvideo('swcontainer3','c0938jpzqpn');
   	     }
   	     
   	     
   	}
   }
});



$('.selbox .sel').on('click',function(){
	 var idx = $(this).index();
	 $('.selbox .sel').removeClass('on').eq(idx).addClass('on');
	 $('.herobox').hide().eq(idx).show();
})


// 视频弹窗
	var tcplayer
	function showVideoDia(vid) {
		tcplayer = new Txplayer({
			containerId: 'tc-container',
			vid: vid,
			width: '100%',
			height: '100%',
			autoplay: true,
			
    
			});
		TGDialogS('tc4');
	}
	$('.btn-close').click(function(){
		$('#tc-container').html('');
		player.mute();
	})


//var tcplayer;
//
// tcplayer= new Txplayer({
//  containerId: 'tc-container',
//  vid: vid,
//  width: '100%',
//  height: '100%',
//  autoplay: staus,
//  poster:'//game.gtimg.cn/images/lol/act/a20200321tftset3/cont1videopic.png',
//  
// }); 
 

/* #t6Hl8#4419771BAF5C967E959A1A5DE72DC11A *//* #t6Hl8#09F4A59F6E30A07BA0D979BC262DD874 *//* #t6Hl8#01A3975C44448C03CF84070036EC4EB8 */