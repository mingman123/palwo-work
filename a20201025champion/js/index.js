var nowDialogId = false;
var reopenDialogId = false;
function TGDialogS(e){
	nowDialogId = e;
    // ����milo������dialog���
    need("biz.dialog",function(Dialog){
    	if(e == reopenDialogId){
    		reopenDialogId = false;
    	}
        Dialog.show({
            id:e,
            bgcolor:'#000', //���������֡�����ɫ����ʽΪ"#FF6600"�����޸ģ�Ĭ��Ϊ"#fff"
            opacity:90 //���������֡���͸���ȣ���ʽΪ��10-100������ѡ
        });
    });
}
function closeDialog(){
    // ����milo������dialog���
    need("biz.dialog",function(Dialog){
        Dialog.hide();
        if(reopenDialogId){
        	TGDialogS(reopenDialogId);
        }
    });
}

$('.tc1 .selbox .selcomm').click(function(){
	var switchFlag = true;
	var item = $('.tc1 .selbox .selcomm');
	for(var i = 0;i < item.length;i++){
		if($(item[i]).hasClass('disable')){
			switchFlag = false;
		}
	}
	if(switchFlag){
		var idx = $(this).index();	
		if($('.tc1 .selbox .selcomm').eq(idx).hasClass('selon')){
			$('.tc1 .selbox .selcomm').removeClass('selon');
		}else{
			$('.tc1 .selbox .selcomm').removeClass('selon').eq(idx).addClass('selon');
		}
	}
})

$('.tc2 .selbox .selcomm').click(function(){
	var switchFlag = true;
	var item = $('.tc2 .selbox .selcomm');
	for(var i = 0;i < item.length;i++){
		if($(item[i]).hasClass('disable')){
			switchFlag = false;
		}
	}
	if(switchFlag){
		var idx =$(this).index();		
		if($('.tc2 .selbox .selcomm').eq(idx).hasClass('selon')){
			$('.tc2 .selbox .selcomm').removeClass('selon');
		}else{
			$('.tc2 .selbox .selcomm').removeClass('selon').eq(idx).addClass('selon');
		}
	}
})


// Ƥ���б�
$('.look-skin').click(function(){
	addHtml();
	TGDialogS('skin-tc');
})
// ͼ���б�
$('.look-icon').click(function(){
	addHtml2();
	TGDialogS('icon-tc');
})
// ȫ��Ƥ���б�
$('.btn-look').click(function(){
	addHtml3();
	TGDialogS('tc18');
})

/* #t6Hl8#CC7214F402F4F6B5751421011C6271A0 */