//��ѯ�Ƿ�󶨵�����
amsCfg_662167={
	type : "query",
	iQueryFlowID:662167,
	service:"fifa" ,
	success : function(bindedInfo){
		//�Ѱ�ʱ����չ����
		amsSubmit(302550,662216);
		amsInit(302550,662165);
	},
	failure : function(){
		//δ��ʱ����չ����
		amsSubmit(302550,662216);
		amsInit(302550,662165);
	}
};

//�ύ�󶨵�����
amsCfg_662166={
	type : "comit",
	needPopupRole:true,//�Ƿ�Ĭ�Ͻ�ɫ��ѡ��ɫ
	roleInfo:null,//���needPopupRoleΪfalse����Ҫ�Զ��崫���ɫ��Ϣ��roleInfo��Ҫ����ɫ��Ϣ����
	iQueryFlowID:662167,
	service:"fifa" ,
	success : function(bindedInfo){
		//�Ѱ�ʱ����չ����
		amsSubmit(302550,662216);
	},
	failure : function(){
		//δ��ʱ����չ����
		amsSubmit(302550,662216);
	}
};

amsCfg_662165={
	iAMSActivityId :302550,
	iFlowId : 662165,
	iModuleId:5446,
	sData : {},
	useDefaultTpl:true,
	showFloatBtn:true,
	onSubmitDataSuccess:function(modRet){},
	onSubmitDataFailed:function(flowRet){},
	onGetDataSuccess:function(modRet){},
	onGetDataFailed:function(flowRet){},
	onGetSettings:function(settings){},
	actionType : "query",
}

// �齱��ȡ�����ܳ�ʼ��
amsCfg_662180 = {
	'iAMSActivityId' : '302550', // AMS���
	'activityId' : '343421', // ģ��ʵ����
	'onBeginGetGiftEvent' : function(){
		return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
	},
	'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
		LotteryManager.alert(callbackObj.sMsg);
		$('.btn-get').eq(0).attr("href","javascript:alert('���Ѿ�����������');");
	}
};

// �齱��ȡ�����ܳ�ʼ��
amsCfg_662187 = {
	'iAMSActivityId' : '302550', // AMS���
	'activityId' : '343421', // ģ��ʵ����
	'onBeginGetGiftEvent' : function(){
		return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
	},
	'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
		LotteryManager.alert(callbackObj.sMsg);
		$('.btn-get').eq(1).attr("href","javascript:alert('���Ѿ�����������');");
	}
};

// �齱��ȡ�����ܳ�ʼ��
amsCfg_662206 = {
	'iAMSActivityId' : '302550', // AMS���
	'activityId' : '343421', // ģ��ʵ����
	'onBeginGetGiftEvent' : function(){
		return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
	},
	'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
		LotteryManager.alert(callbackObj.sMsg);
		$('.btn-get').eq(2).attr("href","javascript:alert('���Ѿ�����������');");
	}
};

// �齱��ȡ�����ܳ�ʼ��
amsCfg_662208 = {
	'iAMSActivityId' : '302550', // AMS���
	'activityId' : '343421', // ģ��ʵ����
	'onBeginGetGiftEvent' : function(){
		return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
	},
	'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
		LotteryManager.alert(callbackObj.sMsg);
		$('.btn-get').eq(3).attr("href","javascript:alert('���Ѿ�����������');");
	}
};

// �齱��ȡ�����ܳ�ʼ��
amsCfg_662209 = {
	'iAMSActivityId' : '302550', // AMS���
	'activityId' : '343421', // ģ��ʵ����
	'onBeginGetGiftEvent' : function(){
		return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
	},
	'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
		LotteryManager.alert(callbackObj.sMsg);
		$('.btn-get').eq(4).attr("href","javascript:alert('���Ѿ�����������');");
	}
};

// �齱��ȡ�����ܳ�ʼ��
amsCfg_662211 = {
	'iAMSActivityId' : '302550', // AMS���
	'activityId' : '343421', // ģ��ʵ����
	'onBeginGetGiftEvent' : function(){
		return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
	},
	'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
		LotteryManager.alert(callbackObj.sMsg);
		$('.btn-get').eq(5).attr("href","javascript:alert('���Ѿ�����������');");
	}
};

//�ύ������AME
amsCfg_662216 = {
	"iActivityId": 302550, //�id	
	"iFlowId":    662216, //����id
	"sNeedSubmitPopDiv":  false , // �Ƿ���loading��
	"fFlowSubmitEnd": function(res){		
		 if (res.iRet==0) {
            for(var i=0; i<res.jData.length; i++){
                if(res.jData[i].iUsedNum>=1){
					$('.btn-get').eq(i).attr("href","javascript:alert('���Ѿ�����������');");
                }
            }
        };
        return;
	},
	"fFlowSubmitFailed":function(res){
		//ʧ�ܻ��ߵ��������
		alert(res.sMsg);
	}
};
milo.ready(function () {
    need("biz.login",function(LoginManager){
      LoginManager.checkLogin(function(){
        g("login_qq_span").innerText= LoginManager.getUserUin();//��ȡQQ��
        amsInit(302550, 662167);
      });
      milo.addEvent(g("dologin"),"click",function(){
        LoginManager.login();
      });
      milo.addEvent(g("dologout"),"click",function(){
        LoginManager.logout();
      });
    });
});
