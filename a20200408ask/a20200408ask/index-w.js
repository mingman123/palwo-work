$(".btn-ask-quiz").click(function(){
	$(".tc-fc").show();
	$(".tc-reply").show();
})
$(".nav a").click(function(){
	$(this).addClass("on").siblings().removeClass("on");
	$(".cont").hide();
	$(".cont").eq($(this).index()).show();
})