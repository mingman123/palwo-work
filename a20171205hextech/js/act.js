var G_AREA=0
var C_AREA=0
var G_TYPE=0
//ͨ�ô�����
//��ѯ�Ƿ�󶨵�����
amsCfg_530258={
    type : "query",
    iQueryFlowID:530258,
    service:"lol" ,
    success : function(bindedInfo){
        //�Ѱ�ʱ����չ����
        G_AREA=bindedInfo.jData.data.Farea;
        $('.areas').html(LOLServerSelect.zoneToName(G_AREA));
        if(C_AREA>0){
            TGDialogS('get-skin');
            C_AREA=0;
        }
    },
    failure : function(){
        //δ��ʱ����չ����
    }
};
//�ύ�󶨵�����
amsCfg_530257={
    type : "comit",
    needPopupRole:true,//�Ƿ�Ĭ�Ͻ�ɫ��ѡ��ɫ
    roleInfo:null,//���needPopupRoleΪfalse����Ҫ�Զ��崫���ɫ��Ϣ��roleInfo��Ҫ����ɫ��Ϣ����
    iQueryFlowID:530258,
    service:"lol" ,
    success : function(bindedInfo){
        //�Ѱ�ʱ����չ����
        G_AREA=bindedInfo.jData.data.Farea;
        $('.areas').html(LOLServerSelect.zoneToName(G_AREA));
        if(C_AREA>0){
            TGDialogS('get-skin');
            C_AREA=0;
        }
    },
    failure : function(){
        //δ��ʱ����չ����
    }
};

//����25��ɫ��ʯ�齱
amsCfg_530259 = {
    'iAMSActivityId' : '185650', // AMS���
    'activityId' : '242752', // ģ��ʵ����
    'onBeginGetGiftEvent' : function(){
        return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
    },
    'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
        if(callbackObj.sMsg.indexOf('��ʯ�۳�ʧ��')>-1){
            TGDialogS('tc-tips');
        }else{
            showSysMsg(callbackObj.sMsg)
        }
    },
    'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
        var skinId=callbackObj.all_item_list[0].iItemCode;
        var item={};
        item['sExtend3']=skinId;
        item['sItemType']=2;
        item['id']=callbackObj.iDbPackageAutoIncId;
        showSkin(item);
    }
};

function showSkin(item) {
    $("#skinImg").attr('src','');
    $("#skinName").html('');

    $("#skinImg").attr('src','//ossweb-img.qq.com/images/lol/appskin/'+item['sExtend3']+'.jpg');
    $("#skinName").html(RALFSHEN_LOLHeroAndSkin[item['sExtend3']]);
    $("#skinCheck").attr('href',"javascript:checkItem("+item['sItemType']+","+item['sExtend3']+");");
    $("#skinGet").attr('href',"javascript:receiveSkin("+item['id']+");");
    TGDialogS('get-skin');
}

function showPackageSkin(sExtend3,sItemType,id){
    myGiftList_530812.close();
    $("#skinImg").attr('src','');
    $("#skinName").html('');

    $("#skinImg").attr('src','//ossweb-img.qq.com/images/lol/appskin/'+sExtend3+'.jpg');
    $("#skinName").html(RALFSHEN_LOLHeroAndSkin[sExtend3]);
    $("#skinCheck").attr('href',"javascript:checkItem("+sItemType+","+sExtend3+");");
    $("#skinGet").attr('href',"javascript:receiveSkin("+id+");");
    TGDialogS('get-skin');
}


// �齱��ȡ�����ܳ�ʼ��
amsCfg_530277 = {
    'iAMSActivityId' : '185650', // AMS���
    'activityId' : '242752', // ģ��ʵ����
    'sData':{},
    'onBeginGetGiftEvent' : function(){
        return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
    },
    'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
        showSysMsg(callbackObj.sMsg);
    },
    'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
        showSysMsg('��ȡ�ɹ�����Ʒ����24Сʱ�ڵ���');
    }
};

// ���˻񽱼�¼��ʼ��
amsCfg_530812 = {
    'iAMSActivityId' : '185650', // AMS���
    'iLotteryFlowId' : '530812', //  ��ѯ���ֲ������̺�
    'activityId' : '242752', // ģ��ʵ����
    'contentId' : 'getGiftContent_530812', //����ID
    'templateId' : 'getGiftTemplate_530812', //ģ��ID
    'contentPageId' : 'getGiftPageContent_530812',	//��ҳ����ID
    'showContentId' : 'showMyGiftContent_530812', //������ID
    'isForce' : true
};
function UnloginFunc() {
    need("biz.login", function(LoginManager) {
        LoginManager.login();
    });
}

function checkItem(itemType, itemCode) {
    if (G_AREA == 0) {
        amsInit(185650, 530258);
        return;
    }
    var _Model = "";
    switch (itemType) {
        case 1:
            _Model = "LOLHero";
            break;
        case 2:
            _Model = "LOLSkin";
            break;
        case 6:
            _Model = "LOLIcon";
            break;
        case 8:
            _Model = "LOLEmote";
            break;
        case 19:
            _Model = "LOLWard";
            break;
        default:
            showSysMsg("�õ��߲�֧�ּ���Ƿ�ӵ��");
            return;
    }
    CallCheckItem(_Model, 'areaid=' + G_AREA, 'GetUserGame', itemCode);
}


function CallCheckItem(m, param, control, vID) {
    need("biz.login", function(LoginManager) {
        LoginFunc = function() {
            var goUrl = "//lol.ams.game.qq.com/lol/Go/dollclip/" + control + "?actid=12&SearchType=" + m + "&" + param + "&rid=" + Math.random();
            $.getScript(goUrl, function() {
                if (typeof (window["J_" + control]) != "undefined" && window["J_" + control] != null) {
                    var iRet = parseInt(window["J_" + control]["iRet"], 10);
                    if (iRet == 0) {
                        var ParamArray = m.split(",");
                        for (var i = 0; i < ParamArray.length; i++) {
                            if (ParamArray[i] == "")
                                continue;
                            var _Func = control + "_" + ParamArray[i];
                            if (typeof (window["J_" + control][ParamArray[i]]) != "undefined" && window["J_" + control][ParamArray[i]] != null) {
                                if (typeof (window[_Func]) == "function") {
                                    window[_Func](window["J_" + control][ParamArray[i]], vID);
                                }
                            }
                        }
                    } else {
                        alert(window["J_" + control]["sMsg"]);
                    }
                }
            });
        };
        LoginManager.checkLogin(LoginFunc, UnloginFunc);
    });
}


function GetUserGame_LOLHero(vData, vID) {
    var iRet = parseInt(vData["result"], 10);
    if (iRet == 0) {
        if (typeof (vData["list"]) != "undefined" && vData["list"] != null && vData["list"] != "") {
            var _tmpArr = vData["list"].split("|");
            for (var i = 1; i < _tmpArr.length; i++) {
                var _tmpItem = _tmpArr[i].split(" ");
                if (_tmpItem[2] == "null" || parseInt(_tmpItem[2], 10) < parseInt(_tmpItem[1], 10)) {
                    if (_tmpItem[0] == vID) {
                        alert("��ӵ��");
                        return;
                    }
                }
            }
        }
        alert("δӵ��");
    } else if (iRet == 1) {
        alert("δӵ��");
    } else {
        alert("��ѯʧ�ܣ����Ժ�����");
    }
}
function GetUserGame_LOLSkin(vData, vID) {
    var iRet = parseInt(vData["result"], 10);
    if (iRet == 0) {
        if (typeof (vData["list"]) != "undefined" && vData["list"] != null && vData["list"] != "") {
            var _tmpArr = vData["list"].split("|");
            for (var i = 1; i < _tmpArr.length; i++) {
                var _tmpItem = _tmpArr[i].split(" ");
                if (_tmpItem[2] == "null" || parseInt(_tmpItem[2], 10) < parseInt(_tmpItem[1], 10)) {
                    if (_tmpItem[0] == vID) {
                        alert("��ӵ��");
                        return;
                    }
                }
            }
        }
        alert("δӵ��");
    } else if (iRet == 1) {
        alert("δӵ��");
    } else {
        alert("��ѯʧ�ܣ����Ժ�����");
    }
}

function GetUserGame_LOLIcon(vData, vID) {
    var iRet = parseInt(vData["result"], 10);
    if (iRet == 0) {
        if (typeof (vData["icon_json"]) != "undefined" && vData["icon_json"] != null && vData["icon_json"] != "") {
            var _tmpArr = eval(vData["icon_json"]);
            for (var i = 0; i < _tmpArr.length; i++) {
                if (_tmpArr[i]["id"] == vID) {
                    alert("��ӵ��");
                    return;
                }
            }
        }
        alert("δӵ��");
    } else if (iRet == 1) {
        alert("δӵ��");
    } else {
        alert("��ѯʧ�ܣ����Ժ�����");
    }
}

function GetUserGame_LOLWard(vData, vID) {
    var iRet = parseInt(vData["result"], 10);
    if (iRet == 0) {
        if (typeof (vData["num"]) != "undefined" && vData["num"] != null && vData["num"] != "") {
            var _tmpArr = vData["num"].split("|");
            for (var i = 1; i < _tmpArr.length; i++) {
                var _tmpItem = _tmpArr[i].split(" ");
                if (_tmpItem[1] == vID) {
                    alert("��ӵ��");
                    return;
                }
            }
        }
        alert("δӵ��");
    } else if (iRet == 1) {
        alert("δӵ��");
    } else {
        alert("��ѯʧ�ܣ����Ժ�����");
    }
}

function GetUserGame_LOLEmote(vData, vID) {
    var iRet = parseInt(vData["result"], 10);
    if (iRet == 0) {
        if (typeof (vData["list"]) != "undefined" && vData["list"] != null && vData["list"] != "") {
            var _tmpArr = vData["list"].split("|");
            for (var i = 1; i < _tmpArr.length; i++) {
                var _tmpItem = _tmpArr[i].split(" ");
                if (_tmpItem[0] == vID) {
                    alert("��ӵ��");
                    return;
                }
            }
        }
        alert("δӵ��");
    } else if (iRet == 1) {
        alert("δӵ��");
    } else {
        alert("��ѯʧ�ܣ����Ժ�����");
    }
}

function showSysMsg(msg){
    $("#sys_info").html(msg);
    TGDialogS('sys');
}

function changeArea() {
    C_AREA=1;
    amsInit(185650, 530257);
}

function receiveSkin(packageId) {
    amsCfg_530277.sData.id=packageId;
    amsSubmit(185650,530277);
}


function showGift(type){
    if(type>0){
        //������¼
        G_TYPE=1;
        $("#showMyGiftContent_530812").attr('class','dialog5-4');
        $("#showMyGiftContent_530812 h3").attr('class','tit-tc4');
        $("#trShow").attr('class','op-l');
        $("#trShow dt span").eq(2).hide();
        $("#trShow dt span").eq(3).hide();
        amsSubmit(185650,530812);
    }else{
        //��ȡ��¼
        G_TYPE=0;
        $("#showMyGiftContent_530812").attr('class','dialog5-5');
        $("#showMyGiftContent_530812 h3").attr('class','tit-tc5');
        $("#trShow").attr('class','gt-l');
        $("#trShow dt span").eq(2).show();
        $("#trShow dt span").eq(3).show();
        amsSubmit(185650,530812);
    }
}

function openLottery() {
    closeDialog();
    amsSubmit(185650,530259)
}
