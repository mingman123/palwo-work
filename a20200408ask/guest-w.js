$(".btn-reply").click(function(){
	$(".tc-fc").show();
	$(".tc-reply").show();
})
$(".btn-alter-reply").click(function(){
	$(".tc-fc").show();
	$(".tc-reply").show();
})
$(".guest1").click(function(){
	$(this).addClass("on").siblings().removeClass("on");
	$(".guest3").show();
	$(".cont").hide();
	$(".cont1").show();
})
$(".guest2").click(function(){
	$(this).addClass("on").siblings().removeClass("on");
	$(".guest3").hide();
	$(".cont").hide();
	$(".cont2").show();
})

$(".guest-sf").click(function(){
	if ($(".textarea").hasClass("on")) {
		$(".textarea").removeClass("on");
	} else{
		$(".textarea").addClass("on");
	}
	
})