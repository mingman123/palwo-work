function TGDialogS(e) {
	// 利用milo库引入dialog组件
	need("biz.dialog", function(Dialog) {
		Dialog.show({
			id: e,
			bgcolor: '#000', //弹出“遮罩”的颜色，格式为"#FF6600"，可修改，默认为"#fff"
			opacity: 70 //弹出“遮罩”的透明度，格式为｛10-100｝，可选
		});
	});
}

function closeDialog() {
	// 利用milo库引入dialog组件
	need("biz.dialog", function(Dialog) {
		Dialog.hide();
	});
}

//swiper.update()
var swiper = new Swiper('.swiper-container', {
	effect: 'coverflow',
//	loop:true,
   	initialSlide :1,
	grabCursor: true,
	spaceBetween: 30,
	centeredSlides: true,
	slidesPerView: 'auto',
	coverflowEffect: {
	    rotate: 0,
	    stretch: 0,
	    depth: 100,
	    modifier: 1,
	    slideShadows : false,
	},
	observer: true,
    observeParents: true,
// 	touchRatio: 1,                   
//  longSwipesRatio:0.1,
//  threshold: 10,                   
//  followFinger:false, 
	on: {
    	touchEnd: function(event){
	    	TR=this.translate;
	    	var w=($(".swiper-slide").width()+30)*($('.swiper-slide').length-1);
	     	if(TR<-w){
	       		this.setTranslate(TR);
				$(".swiper-container .swiper-wrapper").addClass("on");
				$(".nothing").addClass("on");
	      	}else{
	      		$(".swiper-container .swiper-wrapper").removeClass("on");
	      		$(".nothing").removeClass("on");
	      	}
	      	
	    }
	}
});

//把内容弄成图片
function saveImg(){
	html2canvas($("#tc-share")[0], {
		scale: 2,
		logging: false,
		useCORS: true
	}).then((canvas) => {
		this.pics = canvas.toDataURL("image/png");
		$("#screenshotimg").attr("src",this.pics);
	})		
};


//  function saveImg() {
//      var w = $(".tc-share").width();
//      var h = $(".tc-share").height();
//      var scaleBy = getDpr();
//      //要将 canvas 的宽高设置成容器宽高的 2 倍
//      var canvas = document.createElement("canvas");
//      canvas.width = w * scaleBy;
//      canvas.height = h * scaleBy;
//      canvas.style.width = w + "px";
//      canvas.style.height = h + "px";
//      var context = canvas.getContext("2d");
//      //然后将画布缩放，将图像放大两倍画到画布上
//      context.scale(scaleBy, scaleBy);
////      console.log('scale' + getDpr())
//      html2canvas(document.querySelector(".tc-share"), {
////          background: "#fff",
//          allowTaint: true,
//          width: w,
//          height: h,
//          canvas: canvas,
//          scale: scaleBy,
//      }).then(function(canvas){
//          context.mozImageSmoothingEnabled = false;
//          context.webkitImageSmoothingEnabled = false;
//          context.msImageSmoothingEnabled = false;
//          context.imageSmoothingEnabled = false;
//          var url = canvas.toDataURL("image/png", 1); // base64数据
//          document.querySelector(".tc-pic1").src = url
//      });
// 
//  }
//function getDpr() {
//      if (window.devicePixelRatio && window.devicePixelRatio > 1) {
//          return window.devicePixelRatio;
//      }
//      return 1;
//}




$(function(){
	$(".btn-dislike").click(function(){
		var idx=$(this).parents(".swiper-slide").index();
		console.log(idx)
		if ($(".tc-dislike").hasClass("on")) {
			$(this).parents(".swiper-slide").addClass("move-right")
			setTimeout(function(){
				swiper.removeSlide(idx);
			},400);
			$(".tc-dislike").removeClass("on")
		} else{
			$(".tc-dislike").addClass("on");
			setTimeout(function(){
				$(".tc-dislike").removeClass("on");
			},1500);
		}
	})
	
	//生成截图
	$(".btn-fximg").click(function(){
		$(".tc-cover").show();
		$(".dia10").addClass("on");
		saveImg();
//		setTimeout(function(){
//			$(".tc-share2").addClass("on")
//		}, 1000);
//		setTimeout(function(){
//			$(".tc-share").css("opacity","0");
//		}, 1000);
	})
	$(".dia10 .dia-close").click(function(){
		$(".tc-cover").hide();
		$(".dia10").removeClass("on");
//		$(".tc-share").show();
	})
	//分享的三种方式
	$(".btn-share").click(function(){
		$(".pop-share").show();
	})
	$(".pop-share .btn-qx").click(function(){
		$(".pop-share").hide();
	})
	//生成分享图片按钮
	$(".share-pbox a").click(function(){
		$(".pop-share").hide();
	})
	//微信好友
	$(".share-pbox .btn-wxhy").click(function(){
		$(".s4_share").show();
	})
	//朋友圈
	$(".share-pbox .btn-pyq").click(function(){
		$(".s4_share").show();
	})
	//隐藏分享弹窗
	$(".s4_share").click(function(){
		$(this).hide();
	})
	//点击收藏
	$(".btn-like").click(function(){
		if ($(this).hasClass("on")) {
			$(this).removeClass("on");
			$(".pop-ibox3").show();
			setTimeout(function(){
				$(".pop-ibox3").hide();
			},800);
		} else{
			$(this).addClass("on");
			$(".pop-ibox2").show();
			setTimeout(function(){
				$(".pop-ibox2").hide();
			},800);
		}
		
	})
	
	
})








