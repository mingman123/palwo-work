amsCfg_630596 = {
    'iAMSActivityId' : iActivityId, // AMS���
    'activityId' : iLotteryId, // ģ��ʵ����
    
    'onBeginGetGiftEvent' : function(){
        return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
    },
    'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
        // �Զ���ص�
        if (typeof lbCallBackOfAmsSubmit == 'function') {
            lbCallBackOfAmsSubmit('failed', 630596 , callbackObj);
        }
        alert(callbackObj.sMsg);
    },
    'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
        // �Զ���ص�
        if (typeof lbCallBackOfAmsSubmit == 'function') {
            lbCallBackOfAmsSubmit('success', 630596 , callbackObj);
        }
        //ǩ���ص�
        if(false && typeof window.iSighQueryFlow != "undefined" && window.iSighQueryFlow != 0 ){
            amsInit(iActivityId, iSighQueryFlow);
        }
        var packageLen = callbackObj.iPackageId ? callbackObj.iPackageId.split(',') : '';
        if(packageLen && packageLen.length > 1){ // ��������ݴ���Ĳ�����
            qOnlyJF();qDsFunc();
            alert(callbackObj.sMsg);
            return;
        }

        //1��ʵ��
        if((callbackObj.sPackageOtherInfo && callbackObj.sPackageOtherInfo == "RealGood") || callbackObj.sPackageRealFlag == 1){
            var str = callbackObj.sPackageName;
            qOnlyJF();qDsFunc();
            if(str.indexOf('лл') != -1) {
                alert(callbackObj.sPackageName);
            } else {
                alert("��ϲ������� " + callbackObj.sPackageName + " ! ����׼ȷ��д������Ϣ���ٷ����й�����Ա��ϵ����");
            }
            return;
        }
        //2��cdkey
        if(callbackObj.sPackageOtherInfo || callbackObj.sPackageCDkey){
            // �µĴ���
            qOnlyJF();qDsFunc();
            if(callbackObj.sPackageCDkey){
                alert('����õ�cdkeyΪ��' + callbackObj.sPackageCDkey + '<input type="button" value="����" onclick="ExplorerManager.clipDataToBoard(\''+callbackObj.sPackageCDkey+'\'); alert(\'���Ƴɹ���\');">');
                return;
            }else{
                alert('����õ�cdkeyΪ��' + callbackObj.sPackageOtherInfo + '<input type="button" value="����" onclick="ExplorerManager.clipDataToBoard(\''+callbackObj.sPackageOtherInfo+'\'); alert(\'���Ƴɹ���\');">');
                return;
            }

        }
		qOnlyJF();qDsFunc();
		alert(callbackObj.sMsg + boxModuleSuffixTips(callbackObj.iPackageId));
    }
};




amsCfg_630859 = {
    'iAMSActivityId' : iActivityId, // AMS���
    'activityId' : iLotteryId, // ģ��ʵ����
    
    'onBeginGetGiftEvent' : function(){
        return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
    },
    'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
        // �Զ���ص�
        if (typeof lbCallBackOfAmsSubmit == 'function') {
            lbCallBackOfAmsSubmit('failed', 630859 , callbackObj);
        }
        alert(callbackObj.sMsg);
    },
    'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
        // �Զ���ص�
        if (typeof lbCallBackOfAmsSubmit == 'function') {
            lbCallBackOfAmsSubmit('success', 630859 , callbackObj);
        }
        //ǩ���ص�
        if(false && typeof window.iSighQueryFlow != "undefined" && window.iSighQueryFlow != 0 ){
            amsInit(iActivityId, iSighQueryFlow);
        }
        var packageLen = callbackObj.iPackageId ? callbackObj.iPackageId.split(',') : '';
        if(packageLen && packageLen.length > 1){ // ��������ݴ���Ĳ�����
            qOnlyJF();qDsFunc();
            alert(callbackObj.sMsg);
            return;
        }

        //1��ʵ��
        if((callbackObj.sPackageOtherInfo && callbackObj.sPackageOtherInfo == "RealGood") || callbackObj.sPackageRealFlag == 1){
            var str = callbackObj.sPackageName;
            qOnlyJF();qDsFunc();
            if(str.indexOf('лл') != -1) {
                alert(callbackObj.sPackageName);
            } else {
                alert("��ϲ������� " + callbackObj.sPackageName + " ! ����׼ȷ��д������Ϣ���ٷ����й�����Ա��ϵ����");
            }
            return;
        }
        //2��cdkey
        if(callbackObj.sPackageOtherInfo || callbackObj.sPackageCDkey){
            // �µĴ���
            qOnlyJF();qDsFunc();
            if(callbackObj.sPackageCDkey){
                alert('����õ�cdkeyΪ��' + callbackObj.sPackageCDkey + '<input type="button" value="����" onclick="ExplorerManager.clipDataToBoard(\''+callbackObj.sPackageCDkey+'\'); alert(\'���Ƴɹ���\');">');
                return;
            }else{
                alert('����õ�cdkeyΪ��' + callbackObj.sPackageOtherInfo + '<input type="button" value="����" onclick="ExplorerManager.clipDataToBoard(\''+callbackObj.sPackageOtherInfo+'\'); alert(\'���Ƴɹ���\');">');
                return;
            }

        }
		qOnlyJF();qDsFunc();
		alert(callbackObj.sMsg + boxModuleSuffixTips(callbackObj.iPackageId));
    }
};




amsCfg_630860 = {
    'iAMSActivityId' : iActivityId, // AMS���
    'activityId' : iLotteryId, // ģ��ʵ����
    
    'onBeginGetGiftEvent' : function(){
        return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
    },
    'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
        // �Զ���ص�
        if (typeof lbCallBackOfAmsSubmit == 'function') {
            lbCallBackOfAmsSubmit('failed', 630860 , callbackObj);
        }
        alert(callbackObj.sMsg);
    },
    'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
        // �Զ���ص�
        if (typeof lbCallBackOfAmsSubmit == 'function') {
            lbCallBackOfAmsSubmit('success', 630860 , callbackObj);
        }
        //ǩ���ص�
        if(false && typeof window.iSighQueryFlow != "undefined" && window.iSighQueryFlow != 0 ){
            amsInit(iActivityId, iSighQueryFlow);
        }
        var packageLen = callbackObj.iPackageId ? callbackObj.iPackageId.split(',') : '';
        if(packageLen && packageLen.length > 1){ // ��������ݴ���Ĳ�����
            qOnlyJF();qDsFunc();
            alert(callbackObj.sMsg);
            return;
        }

        //1��ʵ��
        if((callbackObj.sPackageOtherInfo && callbackObj.sPackageOtherInfo == "RealGood") || callbackObj.sPackageRealFlag == 1){
            var str = callbackObj.sPackageName;
            qOnlyJF();qDsFunc();
            if(str.indexOf('лл') != -1) {
                alert(callbackObj.sPackageName);
            } else {
                alert("��ϲ������� " + callbackObj.sPackageName + " ! ����׼ȷ��д������Ϣ���ٷ����й�����Ա��ϵ����");
            }
            return;
        }
        //2��cdkey
        if(callbackObj.sPackageOtherInfo || callbackObj.sPackageCDkey){
            // �µĴ���
            qOnlyJF();qDsFunc();
            if(callbackObj.sPackageCDkey){
                alert('����õ�cdkeyΪ��' + callbackObj.sPackageCDkey + '<input type="button" value="����" onclick="ExplorerManager.clipDataToBoard(\''+callbackObj.sPackageCDkey+'\'); alert(\'���Ƴɹ���\');">');
                return;
            }else{
                alert('����õ�cdkeyΪ��' + callbackObj.sPackageOtherInfo + '<input type="button" value="����" onclick="ExplorerManager.clipDataToBoard(\''+callbackObj.sPackageOtherInfo+'\'); alert(\'���Ƴɹ���\');">');
                return;
            }

        }
		qOnlyJF();qDsFunc();
		alert(callbackObj.sMsg + boxModuleSuffixTips(callbackObj.iPackageId));
    }
};




amsCfg_630861 = {
    'iAMSActivityId' : iActivityId, // AMS���
    'activityId' : iLotteryId, // ģ��ʵ����
    
    'onBeginGetGiftEvent' : function(){
        return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
    },
    'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
        // �Զ���ص�
        if (typeof lbCallBackOfAmsSubmit == 'function') {
            lbCallBackOfAmsSubmit('failed', 630861 , callbackObj);
        }
        alert(callbackObj.sMsg);
    },
    'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
        // �Զ���ص�
        if (typeof lbCallBackOfAmsSubmit == 'function') {
            lbCallBackOfAmsSubmit('success', 630861 , callbackObj);
        }
        //ǩ���ص�
        if(false && typeof window.iSighQueryFlow != "undefined" && window.iSighQueryFlow != 0 ){
            amsInit(iActivityId, iSighQueryFlow);
        }
        var packageLen = callbackObj.iPackageId ? callbackObj.iPackageId.split(',') : '';
        if(packageLen && packageLen.length > 1){ // ��������ݴ���Ĳ�����
            qOnlyJF();qDsFunc();
            alert(callbackObj.sMsg);
            return;
        }

        //1��ʵ��
        if((callbackObj.sPackageOtherInfo && callbackObj.sPackageOtherInfo == "RealGood") || callbackObj.sPackageRealFlag == 1){
            var str = callbackObj.sPackageName;
            qOnlyJF();qDsFunc();
            if(str.indexOf('лл') != -1) {
                alert(callbackObj.sPackageName);
            } else {
                alert("��ϲ������� " + callbackObj.sPackageName + " ! ����׼ȷ��д������Ϣ���ٷ����й�����Ա��ϵ����");
            }
            return;
        }
        //2��cdkey
        if(callbackObj.sPackageOtherInfo || callbackObj.sPackageCDkey){
            // �µĴ���
            qOnlyJF();qDsFunc();
            if(callbackObj.sPackageCDkey){
                alert('����õ�cdkeyΪ��' + callbackObj.sPackageCDkey + '<input type="button" value="����" onclick="ExplorerManager.clipDataToBoard(\''+callbackObj.sPackageCDkey+'\'); alert(\'���Ƴɹ���\');">');
                return;
            }else{
                alert('����õ�cdkeyΪ��' + callbackObj.sPackageOtherInfo + '<input type="button" value="����" onclick="ExplorerManager.clipDataToBoard(\''+callbackObj.sPackageOtherInfo+'\'); alert(\'���Ƴɹ���\');">');
                return;
            }

        }
		qOnlyJF();qDsFunc();
		alert(callbackObj.sMsg + boxModuleSuffixTips(callbackObj.iPackageId));
    }
};




var message1 = '';
var packageList1 = {
1685943:0,//��ʿ������
1685945:1,//������ﱦ�䣨�����
1685954:2,//�񻰸���װ��ǿ������*5
1685948:3,//Lv5ע��ʯ���䣨��ѡ��
1685949:4,//���ı��䣨��ѡ��
1685950:5,//ϡ�к�ˮ��*3
1685955:6,//�ر�ǿ��ʯ����(1��)*3
1685956:7,//[����װ��]����ǿ��������˿
1685951:8,//����ǿ����˿��+9~+16װ��ר�ã�
1685957:9,//[Lv66~70]ǿ��ʯ���˺Ű󶨣�*500
1686548:10,//888Q��
1686882:11//������Ʒ��30�죩
};
var packageId_1 = '';
amsCfg_630862 = {
    'iAMSActivityId' : iActivityId, // AMS���
    'activityId' : iLotteryId, // ģ��ʵ����
    'onBeginGetGiftEvent' : function(){
        return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
    },
    'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
        // �Զ���ص�
        if (typeof lbCallBackOfAmsSubmit == 'function') {
            lbCallBackOfAmsSubmit('failed', 630862 , callbackObj);
        }
        alert(callbackObj.sMsg);
        SWFOBJ1.enable();
    },
    'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
        // �Զ���ص�
        if (typeof lbCallBackOfAmsSubmit == 'function') {
            lbCallBackOfAmsSubmit('success', 630862 , callbackObj);
        }
        var myids = callbackObj.iPackageId.split(',');
        if(myids && myids.length > 1){ //������ ��ת�� �鵽��ͬ�� 
            alert(callbackObj.sMsg);
            SWFOBJ1.enable();
            qZigeFunc();qOnlyJF();
            return;
        }
        // �鵽��ͬ��
        var sameIds = callbackObj.iPackageId.split(':'); 
        if(sameIds && sameIds.length > 1){ 
            alert(callbackObj.sMsg);
            SWFOBJ1.enable();
            qZigeFunc();qOnlyJF();
            return;
        }
        message1 = callbackObj.sMsg;
        var item = packageList1[myids[0]];
        if(typeof item != "undefined"){
        	SWFOBJ1.stopRoll(item, message1);
        }
        packageId_1 = callbackObj.iPackageId;
        if(typeof item == "undefined"){
        	PTTSendClick('lottery','complete','�齱���');
            SWFOBJ1.enable();
    			alert(message1);
        }
        qZigeFunc();qOnlyJF();
    }
};
function callJsToStart1(){
    need("biz.login",function(LoginManager){
		LoginManager.checkLogin(function(user){
			amsSubmit(iActivityId,630862);
		},function(){
            SWFOBJ1.enable();
            amsSubmit(iActivityId,630862);
		});
    });        
}
SWFOBJ1.onStart = callJsToStart1;
function callJsToComplete1(){
    PTTSendClick('lottery','complete','�齱���');
    alert(message1 + boxModuleSuffixTips(packageId_1));
    SWFOBJ1.enable();
}
SWFOBJ1.callback = callJsToComplete1;

var jfIdMap = {"148":"696","149":"697"};
var flowIdMap = {"7476":"630596","7478":"630859","7479":"630860","7480":"630861","7481":"630862","7522":"630863","7523":"630864"};
var flowIdValid = ["630596","630859","630860","630861","630862"];
// ��ѯ�ʸ�����
	amsCfg_630863 = {
		"iActivityId": iActivityId, //�id	
		"iFlowId":    630863, //����id
		"sData":{//�Զ��崫��
		},
		"sNeedSubmitPopDiv":  false , // �Ƿ���loading��
		"fFlowSubmitEnd": function(res){
			// �Զ���ص�
            if (typeof lbCallBackOfAmsSubmit == 'function') {
                lbCallBackOfAmsSubmit('success', 630863 , res);
            }	
			var sOutValue1 = res.sOutValue1;
			sOutValue1 = replaceAll(sOutValue1,"#",'"');
			sOutValue1 = JSON.parse(sOutValue1);
			var flow_list = sOutValue1;
			if(typeof flow_list != 'undefined'){
				$("[id^=Hold_]").each(function(){
					var spanId = $(this).attr('id');
					var parts = spanId.split('_');
					if(parts.length == 2){
						var iFlowId = parts[1];
						if(iFlowId > 0){
							if(typeof flowIdMap[iFlowId]!='undefined'){
								iFlowId = flowIdMap[iFlowId];
							}
							if(flowIdValid.indexOf(iFlowId) == -1) {
								return;
							}
							var aFlowInfo = flow_list[iFlowId];
							if(typeof aFlowInfo == 'undefined') { 
								return;
							}
							var ruleQual = aFlowInfo['ruleQual'];
							if (typeof ruleQual == 'undefined') {
								console.log('��ǰ�����ʸ񲻿ɲ�ѯ�����ܲ��ڿ���ʱ���');
								return;
							}
							var ruleCond = aFlowInfo['ruleCond'];
							var pubQualTotal = aFlowInfo['pubQualTotal']; 
							var pubQualLeftNum = aFlowInfo['pubQualLeftNum'];
							var rulesId = aFlowInfo['rules'];
							var rulesAllLeft = 0;
							var rulesAllLeftWithoutCond = 0;
							for(var m = 0; m < rulesId.length; m ++){
								var aRuleId = rulesId[m];
								var aRuleQual = ruleQual[aRuleId];
								var aRuleLeft = aRuleQual['iLeftNum'];
								if(( typeof ruleCond == 'undefined' || typeof ruleCond[aRuleId] == 'undefined') || (typeof ruleCond[aRuleId] != 'undefined' && ruleCond[aRuleId]['bRuleRet'] == 'true')){
									rulesAllLeft += parseInt(aRuleLeft);
									rulesAllLeftWithoutCond += parseInt(aRuleLeft);
								}
								if(typeof ruleCond != 'undefined' && typeof ruleCond[aRuleId] != 'undefined' && ruleCond[aRuleId]['bRuleRet'] == 'false'){
									rulesAllLeftWithoutCond += parseInt(aRuleLeft);
								}
							}
							//���빫���ʸ�ȡ��Сֵ
							var targetQualleft = 0;
							var targetQualleftWithoutCond = 0;
							if(typeof pubQualLeftNum != 'undefined'){
								targetQualleft = rulesAllLeft;//Math.min(pubQualLeftNum,rulesAllLeft);
								targetQualleftWithoutCond = rulesAllLeftWithoutCond;//Math.min(pubQualLeftNum,rulesAllLeftWithoutCond);
							}else {
								targetQualleft = rulesAllLeft;
								targetQualleftWithoutCond = rulesAllLeftWithoutCond;
							}

							if($(this).is("a") ){
								if(iBtnGraySwitch == 1){
									if( targetQualleftWithoutCond == 0 ){
										$(this).addClass("btn-zhih");
									}else {
										$(this).removeClass("btn-zhih");
									}
								}
							}else {
								$(this).text(targetQualleft);
							}
							console.log($(this),$(this).attr('id'),targetQualleft);
						}
					}
				});
			}
			return;
		},
		"fFlowSubmitFailed":function(res){
			// �Զ���ص�
            if (typeof lbCallBackOfAmsSubmit == 'function') {
                lbCallBackOfAmsSubmit('failed', 630863 , res);
            }	
			//ʧ�ܻ��ߵ��������
			//���������㣬ame���ش���0�Ǻ��ߵ�����
			alert(res.sMsg);
		}
	};
// ��ѯ��������
	amsCfg_630864 = {
		"iActivityId": iActivityId, //�id	
		"iFlowId":    630864, //����id
		"sData":{//�Զ��崫��
		},
		"sNeedSubmitPopDiv":  false , // �Ƿ���loading��
		"fFlowSubmitEnd": function(res){
            // �Զ���ص�
            if (typeof lbCallBackOfAmsSubmit == 'function') {
                lbCallBackOfAmsSubmit('success', 630864 , res);
            }			
			//console.log(res);
			var sOutValue1 = res.sOutValue1;
			//511989:11:0|514717:11:0|515529:11:0
			var aParts = sOutValue1.split("|");
			var lng = aParts.length;
			for(i = 0 ; i < lng ;i ++){
				var bParts = aParts[i].split(":");
				if(bParts.length == 3){
					var jfId = jfIdMap[bParts[0]];
					var tot = bParts[1];
					var ticket = bParts[2];
					$('[id=Jf_'+jfId+'_1]').text(ticket);
					$('[id=Jf_'+jfId+'_2]').text(tot);
				}
			}
			return;
		},
		"fFlowSubmitFailed":function(res){
            // �Զ���ص�
            if (typeof lbCallBackOfAmsSubmit == 'function') {
                lbCallBackOfAmsSubmit('failed', 630864 , res);
            }			
			//ʧ�ܻ��ߵ��������
			//���������㣬ame���ش���0�Ǻ��ߵ�����
			alert(res.sMsg);
		}
	};
/*�ʸ� ���� ��������չʾ beg*/
function replaceAll(str, oldStr, newStr) {
    var retStr = '';
    if (str !== null) {
        retStr = str.replace(new RegExp(oldStr, 'gm'), newStr)
    }
    return retStr
}
window.qZigeFunc = function (){
    if(typeof window.qZigeFlow != "undefined" && window.qZigeFlow != 0 && (typeof window.iBtnGraySwitch != "undefined" && window.iBtnGraySwitch != 0||
    typeof window.willQHoldFlow != "undefined" && window.willQHoldFlow == 1)){
     amsSubmit(iActivityId, qZigeFlow,"zige");
    }
}
window.qJFFunc = function (){
        if(typeof window.qJfFlow != "undefined" && window.qJfFlow != 0){
        amsSubmit(iActivityId, qJfFlow,'jf');
    }
}
//����ֵ���
window.qDsFunc = function (){
    qZigeFunc();
    if(typeof window.qDsFlow != "undefined" && window.qDsFlow != 0){
    amsSubmit(iActivityId, qDsFlow,'ds'); 
}
}
//�ʸ�����ֲ�ѯ�ص� ����djc�������ӳ�2000ms�����
window.qOnlyJF = function (isDjc){
        
        if(typeof isDjc != 'undefined' && isDjc == 1){
            setTimeout(function(){
                qJFFunc(); 
            }  , 2000);
        }else {
            qJFFunc();
        }
}
/*�ʸ� ���� ��������չʾ end*/
//�ݴ���鿴
amsCfg_0 = {
  'iAMSActivityId' : iActivityId, // AMS���
  'iLotteryFlowId' : '0', //  ��ѯ���ֲ������̺�
  'activityId' : iLotteryId , // ģ��ʵ����
  'pageSize' : 8,
  '_everyRead': true,
  'isForce': true,
  'contentId' : 'getGiftContent_0', //����ID
  'templateId' : 'getGiftTemplate_0', //ģ��ID
  'contentPageId' : 'getGiftPageContent_0',	//��ҳ����ID
  'showContentId' : 'showMyGiftContent_0' //������ID
};
amsCfg_0 = {
  'iAMSActivityId' : '204987', // AMS���
  'activityId' : '261746', // ģ��ʵ����
  'sData': {
      'tmpTypeId': 1,
      'tmpSeqId': 0,
      'tmpPackageId': 0,
      'xhr':true
  },
  '_everyRead': true,
  'onBeginGetGiftEvent' : function(){
      return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
  },
  'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
      alert(callbackObj.sMsg);
  },
  'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�

      LotteryManager.alert(callbackObj.sMsg);
  }
};
//����
var doBoxUserGet = function( id, iPackageId, packageName, iPackageGroupId){
  amsCfg_0.sData["tmpSeqId"] = id;
  amsCfg_0.sData["tmpPackageId"] = iPackageId;
  var targetZone = typeof window.biFareaName == 'undefined'?"��Ϸ��":"[" +window.biFareaName +"]";  
  $("#lbConfirmDlgText").html('ȷ�Ͻ�<span >'+packageName+'</span>���ŵ�'+ targetZone +'ô��');
  setTimeout(function(){ TGDialogS('lbConfirmDlg');},300);
};

var allLubanBoxPkgIds = [];

var allLubanFlashObj = [1];
