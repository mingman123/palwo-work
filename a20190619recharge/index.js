//��ѯ�Ƿ�󶨵�����
amsCfg_562261={
	type : "query",
	iQueryFlowID:562261,
	service:"fifa" ,
	success : function(bindedInfo){
		//�Ѱ�ʱ����չ����
		amsSubmit(222473,562266);
	},
	failure : function(){
		//δ��ʱ����չ����
		amsSubmit(222473,562266);
	}
};

//�ύ�󶨵�����
amsCfg_562260={
	type : "comit",
	needPopupRole:true,//�Ƿ�Ĭ�Ͻ�ɫ��ѡ��ɫ
	roleInfo:null,//���needPopupRoleΪfalse����Ҫ�Զ��崫���ɫ��Ϣ��roleInfo��Ҫ����ɫ��Ϣ����
	iQueryFlowID:562261,
	service:"fifa" ,
	success : function(bindedInfo){
		//�Ѱ�ʱ����չ����
		amsSubmit(222473,562266);
	},
	failure : function(){
		//δ��ʱ����չ����
		amsSubmit(222473,562266);
	}
};

// �齱��ȡ�����ܳ�ʼ��
amsCfg_562262 = {
	'iAMSActivityId' : '222473', // AMS���
	'activityId' : '242354', // ģ��ʵ����
	'onBeginGetGiftEvent' : function(){
		return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
	},
	'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
		LotteryManager.alert(callbackObj.sMsg);
		$('.btn-get').eq(0).attr("href","javascript:void(0)");
        $('.btn-get').eq(0).addClass('btn-geted');
	}
};

// �齱��ȡ�����ܳ�ʼ��
amsCfg_562264 = {
	'iAMSActivityId' : '222473', // AMS���
	'activityId' : '242354', // ģ��ʵ����
	'onBeginGetGiftEvent' : function(){
		return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
	},
	'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
		LotteryManager.alert(callbackObj.sMsg);
		$('.btn-get').eq(1).attr("href","javascript:void(0)");
        $('.btn-get').eq(1).addClass('btn-geted');
	}
};

// �齱��ȡ�����ܳ�ʼ��
amsCfg_562265 = {
	'iAMSActivityId' : '222473', // AMS���
	'activityId' : '242354', // ģ��ʵ����
	'onBeginGetGiftEvent' : function(){
		return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
	},
	'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
		LotteryManager.alert(callbackObj.sMsg);
		$('.btn-get').eq(2).attr("href","javascript:void(0)");
        $('.btn-get').eq(2).addClass('btn-geted');
	}
};

// �齱��ȡ�����ܳ�ʼ��
amsCfg_562267 = {
	'iAMSActivityId' : '222473', // AMS���
	'activityId' : '242354', // ģ��ʵ����
	'onBeginGetGiftEvent' : function(){
		return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
	},
	'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
		LotteryManager.alert(callbackObj.sMsg);
		$('.btn-get').eq(3).attr("href","javascript:void(0)");
        $('.btn-get').eq(3).addClass('btn-geted');
	}
};

// �齱��ȡ�����ܳ�ʼ��
amsCfg_562269 = {
	'iAMSActivityId' : '222473', // AMS���
	'activityId' : '242354', // ģ��ʵ����
	'onBeginGetGiftEvent' : function(){
		return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
	},
	'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
		LotteryManager.alert(callbackObj.sMsg);
		$('.btn-get').eq(4).attr("href","javascript:void(0)");
        $('.btn-get').eq(4).addClass('btn-geted');
	}
};

//�ύ������AME
amsCfg_562266 = {
	"iActivityId": 222473, //�id	
	"iFlowId":    562266, //����id
	"sNeedSubmitPopDiv":  false , // �Ƿ���loading��
	"fFlowSubmitEnd": function(res){		
		 if (res.iRet==0) {
            for(var i=0; i<res.jData.length; i++){
                if(res.jData[i].iUsedNum>=1){
                    $('.btn-get').eq(i).attr("href","javascript:void(0)");
                    $('.btn-get').eq(i).addClass('btn-geted');
                }
            }
        };
        return;
	},
	"fFlowSubmitFailed":function(res){
		//ʧ�ܻ��ߵ��������
		//���������㣬ame���ش���0�Ǻ��ߵ�����
		alert(res.sMsg);
	}
};

