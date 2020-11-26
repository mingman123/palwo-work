$(".input-zpmc").on('input', function() {
	var len = $('.input-zpmc').val().length;
	if(len > 15){
		$(".input-zpmc").addClass("on");
		$(".zpmc-desc").show();
	}else{
		$(".input-zpmc").removeClass("on");
		$(".zpmc-desc").hide();
	}
		
})


$(".zpjs-text").on('input propertychange', function() {
	var num = $('.zpjs-text').val().length;
//	if(num > 100){
//		$(".zpjs-text").addClass("on");
//	}else{
//		$(".zpjs-text").removeClass("on");
		$(".zpjj-num").find('span').html(num);
		
//	}
		
})

$(function(){
	$(".btns .btn-go").click(function(){
		$(".cont").hide();
		$(".cont4").show();
	})
	$(".btns .btn-check").click(function(){
		$(".cont").hide();
		$(".cont2").show();
	})
	$(".btns .btn-back").click(function(){
		$(".cont").hide();
		$(".cont1").show();
	})
	$(".btns .btn-prev").click(function(){
		$(".cont").hide();
		$(".cont2").show();
	})
	
	$(".cont2 .work-list").click(function(){
		PTTSendClick('btn', 'work-list', '×÷Æ·')
		$(".cont").hide();
		$(".cont3").show();
	})
	$(".cont4 .zp .photo").click(function(){
		$(this).parent(".zp").children(".bg").hide();
		$(this).parent(".zp").children(".pic").show();
	})
	$(".cont4 .zp .btn-del").click(function(){
		$(this).parent(".zp").children(".bg").show();
		$(this).parent(".zp").children(".pic").hide();
	})
	
})

