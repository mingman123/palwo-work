function TGDialogS(e) {
	// ����milo������dialog���
	need("biz.dialog", function(Dialog) {
		Dialog.show({
			id: e,
			bgcolor: '#000', //���������֡�����ɫ����ʽΪ"#FF6600"�����޸ģ�Ĭ��Ϊ"#fff"
			opacity: 80 //���������֡���͸���ȣ���ʽΪ��10-100������ѡ
		});
	});
}

function closeDialog() {
	// ����milo������dialog���
	need("biz.dialog", function(Dialog) {
		Dialog.hide();
	});
}

var swiper = new Swiper('.swiper-container', {
	spaceBetween: 20,
	//	loop:true,
	pagination: {
		el: '.swiper-pagination',
		type: 'fraction',
		renderFraction: function(currentClass, totalClass) {
			return '<span class="zero">0</span>' +
				'<span class="' + currentClass + '"></span>' +
				' / ' +
				'<span>0</span>' +
				'<span class="' + totalClass + '"></span>';
		},
	},
	navigation: {
		nextEl: '.button-next1',
		prevEl: '.button-prev1',
	},
});

var swiper2 = new Swiper('.swiper-container2', {
	//	loop:true,
	navigation: {
		nextEl: '.button-next2',
		prevEl: '.button-prev2',
	},
});
window.onload = function() {
	if($(".cont3 .box").hasClass("on")) {
		$(".cont3 .box .swiper-container").addClass("swiper-no-swiping")
	}
}

function init() {
	if(/(iPhone|iPad|iPod|iOS|Android|Windows Phone|BlackBerry|SymbianOS)/i.test(navigator.userAgent)) {

	} else {
		//��ֹ����������
		//		function unScroll() {
		//			var top = $(document).scrollTop();
		//			$(document).on('scroll.unable', function(e) {
		//				$(document).scrollTop(top);
		//				console.log(top);
		//			})
		//		}
		//�Ƴ���ֹ����������
		//		function removeUnScroll() {
		//			$(document).unbind("scroll.unable");
		//		}
		$(".tc-dia").click(function() {
			$("body").addClass("shadow");
			$(".sid").addClass("on");
			//			unScroll();
		})
		$(".dia-close").click(function() {
			//			removeUnScroll();
			setTimeout(function() {
				$("body").removeClass("shadow");
				$(".sid").removeClass("on");

			}, 200)
			
		})
	}

}