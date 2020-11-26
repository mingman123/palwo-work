function TGDialogS(e){
// 利用milo库引入dialog组件
	need("biz.dialog",function(Dialog){
    Dialog.show({
        id:e,
        bgcolor:'#000', //弹出“遮罩”的颜色，格式为"#FF6600"，可修改，默认为"#fff"
        opacity:50 //弹出“遮罩”的透明度，格式为｛10-100｝，可选
        });
    });
}
function closeDialog(){
    // 利用milo库引入dialog组件
	need("biz.dialog",function(Dialog){
        Dialog.hide();
    });
}


$(function(){
	$(".btns a").click(function(){
		$(this).addClass("on").siblings().removeClass("on");
		$(".cont").hide().eq($(this).index()).show();
	})
//	$(".btn-check1").click(function(){
//		$(".tc-title").css("backgroundImage","url(ossweb-img/tc-title1.png)");
//	})
	
})





