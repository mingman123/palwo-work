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
                $('.collect-txt .show').removeClass('off').addClass('on').text('չ��');
                $('.collect-txt').css('max-height', '142px');
                $('#introduction').text(sliceText + '...');
            } else {
                $('.collect-txt .show').removeClass('on').addClass('off').text('����');
                $('.collect-txt').css('max-height', '999px');
                $('#introduction').text(beginText);
            }
        });
    }

/*
* param str Ҫ��ȡ���ַ���
* param L Ҫ��ȡ���ֽڳ��ȣ�ע�����ֽڲ����ַ���һ�����������ֽ�
* return ��ȡ����ַ���
*/
//function cutStr(str,L){
//var result = '',
//strlen = str.length, // �ַ�������
//chrlen = str.replace(/[^\x00-\xff]/g,'**').length; // �ֽڳ���
//
//if(chrlen<=L){return str;}
//
//for(var i=0,j=0;i<strlen;i++){
//var chr = str.charAt(i);
//if(/[\x00-\xff]/.test(chr)){
//j++; // ascii��Ϊ0-255��һ���ַ�����һ���ֽڵĳ���
//}else{
//j+=2; // ascii��Ϊ0-255���⣬һ���ַ����������ֽڵĳ���
//}
//if(j<=L){ // �����ϵ�ǰ�ַ��Ժ�������ֽڳ���С�ڵ���L���򽫵�ǰ�ַ���ʵ��+��result��
//result += chr;
//}else{ // ��֮��˵��result�Ѿ��ǲ�����ַ����������ӽ�L��ֵ�ˣ�ֱ�ӷ���
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
//              $('.collect-txt .show').removeClass('off').addClass('on').text('չ��');
//              $('.collect-txt').css('max-height', '98px');
//              $('#introduction').text(cutStr(beginText,96) + '...');
//          } else {
//              $('.collect-txt .show').removeClass('on').addClass('off').text('����');
//              $('.collect-txt').css('max-height', '999px');
//              $('#introduction').text(beginText);
//          }
//      });
//  }


// ����
//alert(cutStr("����1�ַ�����������",10));
//alert(cutStr("Danielakkanhsnd",10));