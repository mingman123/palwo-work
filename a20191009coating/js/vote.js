// 全部作品
$('.tab-all').on('click', function () {
  $('.rank-tabs').addClass('rank-tabs1').removeClass('rank-tabs2');
  $('.rank-all').css('display', 'block');
  $('.rank-top50').css('display', 'none');
});

// top50作品
$('.tab-top50').on('click', function () {
  $('.rank-tabs').addClass('rank-tabs2').removeClass('rank-tabs1');
  $('.rank-top50').css('display', 'block');
  $('.rank-all').css('display', 'none');
});

$(function(){
	$(".btns .btn-my").click(function(){
		$(".cont1").hide();
		$(".cont2").show();
	})
	$(".btns .btn-prev1").click(function(){
		$(".cont1").show();
		$(".cont2").hide();
	})
	$(".btns .btn-back").click(function(){
		$(".c-rank").children(".search-before").show();
		$(".c-rank").children(".search-after").hide();
		$(".cont2").hide();
	})
	$(".btn-vote").click(function(){
		TGDialogS('dia3');
	})
	$(".btn-votedd").click(function(){
		TGDialogS('dia4');
	})
})





