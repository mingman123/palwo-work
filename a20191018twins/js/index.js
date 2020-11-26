$(function(){
	var Media = document.getElementById("video-box");
//	$(".screen").on("touchmove",function(event){
//  event.preventDefault;
//}, false);
	$(".screen .btn-act").click(function(){
		Media.play(); //²¥·Å
		$(this).fadeOut(100);
		$(".screen>div").addClass("on");
//		$(".wrap").fadeIn(300);
//		$(".wrap").show();
//		$("#afooter").show();
//		$(".contents").addClass("on");
//		$(".screen").off("touchmove");
		if($(".screen>div").hasClass("on")){
		$(".screen").removeClass("cj");
		}
		
//		$(".bg-video").show();
		
		setTimeout(function () {
		  $(".screen").addClass("cj");
		 }, 900);
	})
	
	$(".btn-hop").click(function(){
		console.log(111)
		Media.pause();
		$(".bg-video").hide();
//		$(".contents").addClass("on");
		$(".wrap").show();
		$("#afooter").show();
	});
	  
// $(".cont1 .on a").click(function(){
//		TGDialogS('dia2');
//	});
//	$(".cont1 .award-box4.on .btn-red").click(function(){
//		TGDialogS('dia2');
//	});
})





