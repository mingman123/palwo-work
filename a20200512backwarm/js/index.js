function TGDialogS(e) {
	// 利用milo库引入dialog组件
	need("biz.dialog", function(Dialog) {
		Dialog.show({
			id: e,
			bgcolor: '#000', //弹出“遮罩”的颜色，格式为"#FF6600"，可修改，默认为"#fff"
			opacity: 80 //弹出“遮罩”的透明度，格式为｛10-100｝，可选
		});
	});
}

function closeDialog() {
	// 利用milo库引入dialog组件
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
			return '<span class="' + currentClass + '"></span>' +
				' / ' +
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
var swiper3 = new Swiper('.swiper-container3', {
	//	loop:true,
	effect : 'fade',
	  fadeEffect: {
		    crossFade: true,
		}
});

window.onload = function() {
	if($(".cont3 .box").hasClass("on")) {
		$(".cont3 .box .swiper-container").addClass("swiper-no-swiping")
	}
}

function init() {
	swiper.controller.control = swiper3;
	if(/(iPhone|iPad|iPod|iOS|Android|Windows Phone|BlackBerry|SymbianOS)/i.test(navigator.userAgent)) {

	} else {
		//禁止滚动条滚动
		//		function unScroll() {
		//			var top = $(document).scrollTop();
		//			$(document).on('scroll.unable', function(e) {
		//				$(document).scrollTop(top);
		//				console.log(top);
		//			})
		//		}
		//移除禁止滚动条滚动
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
		
		function set(){
			var widthX=$(document.body).width();
			var x=widthX/1920;
			if(x>1){
				$("body").css('transform','scale('+ x +')');
			}
		}

		window.onload = function(){
			set();
		}
		
		
		
		

	}
}