// ����
TGMobileShare({
    shareTitle: '��ˬʮ���飬һֱ��һֱˬ��', //�����û�����Ϊ��ʱ��ҳ����title�����ȡtitle
    shareDesc: 'switch�������������ã��ۼƳ齱�����ص�ϡ�ж��Ƴ���Ӱ����Ӵ~', //�����û�����Ϊ��ʱ��ҳ����Description�����ȡDescription
    shareImgUrl: 'https//game.gtimg.cn/images/wepop/cp/a201901014party/share.jpg', //����ͼƬ�ߴ�200*200������д����·��
    shareLink: '', //��������Ҫ����ǰҳ��ͬ����(��Q���������Ҫ��) ,�����û�����Ϊ��ʱ��Ĭ�ϵ�ȡ��ǰURL
    actName: 'a20191014party' //���������������ͳ�Ʒ�������ר��һ�����Ŀ¼������a20151029demo
});



 function TGDialogS(e){
    // ����milo������dialog���
    need("biz.dialog",function(Dialog){
        Dialog.show({
            id:e,
            bgcolor:'#000', //���������֡�����ɫ����ʽΪ"#FF6600"�����޸ģ�Ĭ��Ϊ"#fff"
            opacity:50 //���������֡���͸���ȣ���ʽΪ��10-100������ѡ
        });
    });
}
function closeDialog(){
    // ����milo������dialog���
    need("biz.dialog",function(Dialog){
        Dialog.hide();
    });
}



    //�����ʼ�齱 ֪ͨjs flash->js

    //��ʼ�齱lottery->js
    function callJsToStart() {
        lottery.disable();
        calllotteryToRoll(4);
    }
    //������ó齱��� ֪ͨlottery��ʼ����Ч�� js->lottery
    function calllotteryToRoll(id) {
        if (lottery) lottery.stopRoll(id);
    }
    //�������֪ͨjs lottery->js        
    function callJsToComplete() {
//      alert('��ϲ���ô�Ӵ����');
        TGDialogS('dia7');
    }

    //��ʼ���齱�� ���Բ�֪���ڲ�
    var lottery = new Lottery({
        'lighturl': '//game.gtimg.cn/images/wepop/cp/a201901014party/lotteryon.png',//�ⲿ��Ȧpng ����д����Ĭ�ϵ�Ч��
        'starturl': '//game.gtimg.cn/images/wepop/cp/a201901014party/btn.gif', //�ⲿ��ťpng ����д����Ĭ�ϵİ�ťЧ��
        'width': 648,//lottery ���
        'height': 404,//lottery �߶�
        'total': 12,//�齱��Ʒ������
        'sbtnx': 144,// ��ʼ�齱��ť��λ��x����
        'sbtny': 132,// ��ʼ�齱��ť��λ��y����
        'sbtnw': 318,// ��ʼ�齱��ť�Ŀ��
        'sbtnh': 108,// ��ʼ�齱��ť�ĸ߶�
        'boxw': 118,// ��Ʒ��Ч�Ŀ��
        'boxh': 118,//��Ʒ��Ч�ĸ߶� 
        'position': "10_10,128_10,246_10,364_10,478_10,478_128,478_246,364_246,246_246,128_246,10_246,10_128,",
        //��Ʒ��Ч��λ�ã���Ӧ��ƷͼƬ�Ĳ��֣�����ÿ����Ʒ��λ���Լ��Ƕ��ö��ŷָ� x_y ����19_20����19_20_0 ��ʾ��һ����Ʒ��λ�� x����Ϊ19px y����Ϊ20px �Ƕ�Ϊ0����
        'contentId': 'lotterycontent',//Ƕ��lottery ��div��� id 
        'onClickRollEvent': callJsToStart,//��Ӧ����ӿ�
        'onCompleteRollEvent': callJsToComplete //��Ӧ����ӿ�
    });
    

var speed = 0, infoWidth=0;
    //�����ƶ�
	function barrageAnimate(){
		$("#barrageInfo>div").css("right",'-'+infoWidth+'px');  
		$("#barrageInfo>div").animate({
			right:'300px',
		},speed,'linear')
	}
	//���ֻ�ȡ��ѭ������
	function getBarrage(){
		speed = 800*document.body.clientWidth/80;	
		infoWidth = $("#barrageInfo span").width();
        barrageAnimate();
		setInterval(barrageAnimate,speed+300);
	}
	getBarrage()
