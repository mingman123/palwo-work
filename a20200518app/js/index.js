$(function(){
	$(".navs li").on('click',function(){
		var idx = $(this).index()
		$(this).addClass('on').siblings().removeClass('on');
		if (idx == 0) {
			$(".nav1-tab").show();
		}else if(idx == 1) {
			$(".cont").hide();
			$(".cont1").show();
			$(".nav1-tab").hide();
		}else if(idx == 2) {
			$(".cont").hide();
			$(".cont2").show();
			$(".nav1-tab").hide();
		}else if(idx == 3) {
			$(".cont").hide();
			$(".cont3").show();
			$(".nav1-tab").hide();
		}
	})
	$(".finalis-tabs a").on('click',function(){
		$(this).addClass('on').siblings().removeClass('on');
		if ($(this).index()==0) {
			$(".finalis-box").css("left","0");
		}else{
			$(".finalis-box").css("left","-7.5rem");
		}
	})
	$(".nav1-tab li").on('click',function(){
		var idx = $(this).index();
		if (idx==0&& $(this).hasClass('on')) {
			$(".nav1-tab li").removeClass("on");
			// console.log(111);
		}else if(idx==0&& !$(this).hasClass('on')){
			$(".nav1-tab li").addClass("on");
			// console.log(222);
		}else if ($(this).hasClass('on')) {
			allSelect();
			$(this).removeClass("on");
			console.log(333);
		}else{
			allSelect();
			$(this).addClass('on');
			console.log(444);
		}
	})
	
	function allSelect(){
		for(i=1;i<$(".nav1-tab li").length;i++){
			if ($(this).hasClass('on')) {
				$(".nav1-tab li").eq(0).addClass("on");
				console.log(66);
			}else{
				$(".nav1-tab li").eq(0).removeClass("on");
				console.log(777);
				continue;
			}
			
			}
			
	}


// 	function setMenuEvenType() {
//     $('.nav1-tab').off('click');
//     $('.nav1-tab').on('click', 'li', function() {
//         var index = $(this).index();
//         if (index === 0 && !$(this).hasClass('on')) {
//             $('.nav1-tab li').addClass('on');
//         } else if (index === 0 && $(this).hasClass('on')) {
//             $('.nav1-tab li').removeClass('on');
//         } else if ($(this).hasClass('on')) {
//             $(this).removeClass('on');
//             setSelectAll();
//         } else {
//             $(this).addClass('on');
//             setSelectAll();
//         }
//     })
// }

// /**
//  * 检测是否全部选中
//  */
// function setSelectAll() {
//     var state = true
//     $('.nav1-tab li').each(function(i) {
//         if (i !== 0 && !$(this).hasClass('on')) {
//             state = false;
//             return false;
//         }
//         if (i !== 0 && $(this).hasClass('on')) {
//             state = true;
//         }
//     });
//     if (state) {
//         $('.nav1-tab li').eq(0).addClass('on');
//     } else {
//         $('.nav1-tab li').eq(0).removeClass('on');
//     }
// }
// setMenuEvenType();

function match(){
	$.ajax({
		type:"GET",   //请求方式
		url:"https://lpl.qq.com/web201612/data/LOL_SGameList_Info.js",    //请求的url地址
		dataType:"json",   //返回格式为json
		success: function(data) {
				//请求成功时处理
			console.log(data);
			
		},
	});
};
match();

})
