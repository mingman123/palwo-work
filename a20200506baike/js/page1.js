function TGDialogS(e) {
	// ����milo������dialog���
	need("biz.dialog", function(Dialog) {
		Dialog.show({
			id: e,
			bgcolor: '#000', //���������֡�����ɫ����ʽΪ"#FF6600"�����޸ģ�Ĭ��Ϊ"#fff"
			opacity: 50 //���������֡���͸���ȣ���ʽΪ��10-100������ѡ
		});
	});
}

function closeDialog() {
	// ����milo������dialog���
	need("biz.dialog", function(Dialog) {
		Dialog.hide();
	});
}

function showShare() {
	$('.s4_share').fadeIn();
	$('.pop-share').hide();
}

$('.s4_share').on('click', function() {
	$(this).fadeOut();
})

$('.btn-collect').on('click', function() {
	if($('.btn-collect').hasClass('on')) {
		$(this).removeClass('on')
	} else {
		$(this).addClass('on')
	}
})
$('.btn-share').on('click', function() {
	$('.pop-share').show();
})
$('.btn-qx').on('click', function() {
	$('.pop-share').hide();
})
//������Ū��ͼƬ
function saveImg() {
//	ulink.Dialog.showLoading();
	$('#screenshot').css('opacity', 1);
	html2canvas($("#screenshot")[0], {
		scale: 2,
		dpi: window.devicePixelRatio * 2,
		useCORS: true,
		logging: true,
	}).then(function(canvas) {
		this.pics = canvas.toDataURL("image/jpeg");
		$("#pop-sbox .pop-simg img").attr("src", this.pics).show();
		$(".pop-share").hide();
		$('#screenshot').css('opacity', 0);
//		vm.shareSuccess(vm.artId);
//		ulink.Dialog.hideLoading();
		$("#pop-sbox").css("opacity", 1).css("z-index", 9999);
	});
}

$('.btn-fximg').on('click', function() {
	saveImg();
});





$('.btn-comment').on('click', function(e) {
	$('.cur-input').fadeIn();

})

$('.btn-send').on('click', function() {
	$('.cur-input').fadeOut();
})