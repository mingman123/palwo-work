//��ѯ�Ƿ�󶨵�����
amsCfg_528261={
	type : "query",
	iQueryFlowID:528261,
	service:"fo4" ,
	success : function(bindedInfo){
		//�Ѱ�ʱ����չ����
		amsSubmit(183534,528267);
	},
	failure : function(){
		//δ��ʱ����չ����
		amsSubmit(183534,528267);
	}
};

//�ύ�󶨵�����
amsCfg_528260={
	type : "comit",
	needPopupRole:true,//�Ƿ�Ĭ�Ͻ�ɫ��ѡ��ɫ
	roleInfo:null,//���needPopupRoleΪfalse����Ҫ�Զ��崫���ɫ��Ϣ��roleInfo��Ҫ����ɫ��Ϣ����
	iQueryFlowID:528261,
	service:"fo4" ,
	success : function(bindedInfo){
		//�Ѱ�ʱ����չ����
		amsSubmit(183534,528267);
	},
	failure : function(){
		//δ��ʱ����չ����
		amsSubmit(183534,528267);
	}
};

//���ã���ѯ�Ƿ��Ѿ���
milo.ready(function(){
		amsInit(183534, 528261);
	}
);

$('#first').click(function(){
	amsSubmit(183534,528262);
});

$('#second').click(function(){
	amsSubmit(183534,528265);
});

$('#third').click(function(){
	amsSubmit(183534,528266);
});

$('#four').click(function(){
	amsSubmit(183534,528383);
});

$('#five').click(function(){
	amsSubmit(183534,528384);
});
// �齱��ȡ�����ܳ�ʼ��
amsCfg_528262 = {
	'iAMSActivityId' : '183534', // AMS���
	'activityId' : '223141', // ģ��ʵ����
	'onBeginGetGiftEvent' : function(){
		return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
	},
	'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
		LotteryManager.alert(callbackObj.sMsg);
		$("#first").addClass('btn-got').attr("href","javascript:void(0)");
	}
};

// �齱��ȡ�����ܳ�ʼ��
amsCfg_528265 = {
	'iAMSActivityId' : '183534', // AMS���
	'activityId' : '223141', // ģ��ʵ����
	'onBeginGetGiftEvent' : function(){
		return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
	},
	'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
		LotteryManager.alert(callbackObj.sMsg);
		$("#second").addClass('btn-got').attr("href","javascript:void(0)");
	}
};

// �齱��ȡ�����ܳ�ʼ��
amsCfg_528266 = {
	'iAMSActivityId' : '183534', // AMS���
	'activityId' : '223141', // ģ��ʵ����
	'onBeginGetGiftEvent' : function(){
		return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
	},
	'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
		LotteryManager.alert(callbackObj.sMsg);
		$("#third").addClass('btn-got').attr("href","javascript:void(0)");
	}
};

// �齱��ȡ�����ܳ�ʼ��
amsCfg_528383 = {
	'iAMSActivityId' : '183534', // AMS���
	'activityId' : '223141', // ģ��ʵ����
	'onBeginGetGiftEvent' : function(){
		return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
	},
	'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
		LotteryManager.alert(callbackObj.sMsg);
		$("#four").addClass('btn-got').attr("href","javascript:void(0)");
	}
};

// �齱��ȡ�����ܳ�ʼ��
amsCfg_528384 = {
	'iAMSActivityId' : '183534', // AMS���
	'activityId' : '223141', // ģ��ʵ����
	'onBeginGetGiftEvent' : function(){
		return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
	},
	'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
		LotteryManager.alert(callbackObj.sMsg);
		$("#five").addClass('btn-got').attr("href","javascript:void(0)");
	}
};

//�ύ������AME
amsCfg_528267 = {
	"iActivityId": 183534, //�id	
	"iFlowId":    528267, //����id
	"sNeedSubmitPopDiv":  false , // �Ƿ���loading��
	"fFlowSubmitEnd": function(res){
		 if(res.jData[0].iUsedNum>0){
			$("#first").addClass('btn-got').attr("href","javascript:void(0)");
		 }
		 if(res.jData[1].iUsedNum>0){
			$("#second").addClass('btn-got').attr("href","javascript:void(0)");
		 }
		 if(res.jData[2].iUsedNum>0){
			$("#third").addClass('btn-got').attr("href","javascript:void(0)");
		 }
		 if(res.jData[3].iUsedNum>0){
			$("#four").addClass('btn-got').attr("href","javascript:void(0)");
		 }
		 if(res.jData[4].iUsedNum>0){
			$("#five").addClass('btn-got').attr("href","javascript:void(0)");
		 }
	},
	"fFlowSubmitFailed":function(res){
		//ʧ�ܻ��ߵ��������
		//���������㣬ame���ش���0�Ǻ��ߵ�����
		alert(res.sMsg);
	}
};
