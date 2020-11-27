$(".btn-ask-quiz").click(function(){
	$(".tc-fc").show();
	$(".tc-reply").show();
})
$(".nav a").click(function(){
	$(this).addClass("on").siblings().removeClass("on");
	$(".cont").hide();
	$(".cont").eq($(this).index()).show();
})

	var beginText = $('#introduction').text();
    var sliceText = $('#introduction').text().slice(0, 75)
    if (beginText.length > 78) {
        $('.collect-txt a').addClass('show');
        $('#introduction').text(sliceText + '...');
        //$('.intr2 .show').on('click', function(){
        $('.collect-txt').on('click', function(){
            if ($('.collect-txt .show').hasClass('off')) {
                $('.collect-txt .show').removeClass('off').addClass('on').text('展开');
                $('.collect-txt').css('max-height', '142px');
                $('#introduction').text(sliceText + '...');
            } else {
                $('.collect-txt .show').removeClass('on').addClass('off').text('收起');
                $('.collect-txt').css('max-height', '999px');
                $('#introduction').text(beginText);
            }
        });
    }

/*
* param str 要截取的字符串
* param L 要截取的字节长度，注意是字节不是字符，一个汉字两个字节
* return 截取后的字符串
*/
//function cutStr(str,L){
//var result = '',
//strlen = str.length, // 字符串长度
//chrlen = str.replace(/[^\x00-\xff]/g,'**').length; // 字节长度
//
//if(chrlen<=L){return str;}
//
//for(var i=0,j=0;i<strlen;i++){
//var chr = str.charAt(i);
//if(/[\x00-\xff]/.test(chr)){
//j++; // ascii码为0-255，一个字符就是一个字节的长度
//}else{
//j+=2; // ascii码为0-255以外，一个字符就是两个字节的长度
//}
//if(j<=L){ // 当加上当前字符以后，如果总字节长度小于等于L，则将当前字符真实的+在result后
//result += chr;
//}else{ // 反之则说明result已经是不拆分字符的情况下最接近L的值了，直接返回
//return result;
//}
//}
//}
//var beginText = $('#introduction').text();
//if (beginText.replace(/[^\x00-\xff]/g,'**').length > 96) {
//      $('.collect-txt a').addClass('show');
//      $('#introduction').text(cutStr(beginText,96) + '...');
//      //$('.intr2 .show').on('click', function(){
//      $('.collect-txt').on('click', function(){
//          if ($('.collect-txt .show').hasClass('off')) {
//              $('.collect-txt .show').removeClass('off').addClass('on').text('展开');
//              $('.collect-txt').css('max-height', '98px');
//              $('#introduction').text(cutStr(beginText,96) + '...');
//          } else {
//              $('.collect-txt .show').removeClass('on').addClass('off').text('收起');
//              $('.collect-txt').css('max-height', '999px');
//              $('#introduction').text(beginText);
//          }
//      });
//  }


// 用例
//alert(cutStr("测试1字符串哈哈哈哈",10));
//alert(cutStr("Danielakkanhsnd",10));