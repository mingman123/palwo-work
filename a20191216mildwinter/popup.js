window['no_webtips_flag'] = true;
//��ȡurl����
function getUrlParam(name, url) {
    //��������������urlΪ�����ӵ�ǰҳ���url��ȡ
    var u = arguments[1] || window.location.search,
        reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
        r = u.substr(u.indexOf("\?") + 1).match(reg);
    return r != null ? r[2] : "";
}
milo.ready(function() {
    //CP����
    if(!getUrlParam("debug")){
        initTemplateHtml();
        initTemplateEvent();
        setTimeout(function(){
            if (typeof initLotteryEvent == 'function') {
                initLotteryEvent();        
            }            
        },0);
    }else{
        setTimeout(function(){
            initTemplateHtml();
            initTemplateEvent();
            initLotteryEvent();
        },10)
    }
})

if(!getUrlParam("debug")){
    initCommonEvent();
}

//����json
function formatJson(str,data){
    var fn = !/\W/.test(str)?
        formatJson(document.getElementById(str).innerHTML) :
        new Function("obj",
            "var p=[],print=function(){p.push.apply(p,arguments);};" +
            "with(obj){p.push('" +str
                .replace(/[\r\t\n]/g, " ")
                .split("<%").join("\t")
                .replace(/((^|%>)[^\t]*)'/g, "$1\r")
                .replace(/\t=(.*?)%>/g, "',$1,'")
                .split("\t").join("');")
                .split("%>").join("p.push('")
                .split("\r").join("\\'") + "');}return p.join('');");
    return data ? fn( data ) : fn;
}

//��ʼ��ҳ��ĵ����Ľṹ
function initTemplateHtml() {
}
//��ʼ��ҳ����¼�
function initTemplateEvent(){
    if(!popup.isMobile()) {PTTSendClick('useragent','pc','PC����');}
    else{PTTSendClick('useragent','mobile','�ƶ��˷���');}
}
var userInfo = {
  nickName: "",
  isLogin: false,
};
//��ʼ�������¼�
function initCommonEvent() {
    // document.domain = "qq.com";
    // �����ҵ����
    if(typeof gLogCfg.iMyGiftBagSwitch != "undefined"  && gLogCfg.iMyGiftBagSwitch == 0) {
        $("#logined").find('a[href*="showMyGiftList"]').hide();
    }
    if(needAddress){
        $("#fillAddress").show();
        // �����ջ���ַ
        if(typeof gLogCfg.iMyAddressSwitch != "undefined"  && gLogCfg.iMyAddressSwitch == 0) {
            $("#fillAddress").hide();
        }
    }
    //��¼
    if(g("dologin")!=null)
    milo.addEvent(g("dologin"), "click", function() {
        need("biz.login",function(LoginManager){
            LoginManager.init({
                needReloadPage:true
            });
            LoginManager.login(function(){
                g("login_qq_span").innerHTML = LoginManager.getUserUin();//��ȡQQ��
                LoginManager.getNickName(function(res){ //��ȡ�ǳ�
                  userInfo.nickName = res.nickName;
                  userInfo.isLogin = true;//�Է��¼
                });
                //�����djc���¼��ˢ��ͷ������ĵ�¼
                var host = window.location.host;
                if(host == 'act.daoju.qq.com'){
                    var tunlogin = document.getElementById("tunlogin");
                    var tlogined = document.getElementById("tlogined");
                    if(tunlogin != null && tlogined != null){
                        tunlogin.style.display = "none";
                        tlogined.style.display = "block";
                        document.getElementById("tlogin_qq_span").innerHTML = LoginManager.getUserUin();
                    }
                }
                //djc end 
                loginCallBack(LoginManager);
            });
        });
        return false;
    });
		if(g("dologout")!=null)
    milo.addEvent(g("dologout"), "click", function() {
        need("biz.login",function(LoginManager){
            if(popup.isMobile()){
                LoginManager.logout();
                setTimeout(function(){ window.location.reload();},1000)
            }else{
                LoginManager.logout();
            }
        });
        return false;
    });
		if(g("dologout")!=null || window.iGameType == 1)
    milo.ready(function() {
        need("biz.login",function(LoginManager){
            LoginManager.checkLogin(function(){
              LoginManager.getNickName(function(res){ //��ȡ�ǳ�
                userInfo.nickName = res.nickName;
                userInfo.isLogin = true;//�Է��¼
              });
                if(g("login_qq_span")!=null){
                    g("login_qq_span").innerHTML = LoginManager.getUserUin();//��ȡQQ��
                }    
                if(document.getElementById('unlogin')!=null){
                    document.getElementById('unlogin').style.display="none";
                }
                if(document.getElementById('logined')!=null){
                    document.getElementById('logined').style.display="block";
                }

                loginCallBack(LoginManager);
            });
        });
    });

    // ����
    window.TGDialogS = function(e){
        need("biz.dialog",function(Dialog){
            Dialog.show({
                id:e,
                bgcolor:'#000', //���������֡�����ɫ����ʽΪ"#FF6600"�����޸ģ�Ĭ��Ϊ"#fff"
                opacity:70 //���������֡���͸���ȣ���ʽΪ��10-100������ѡ
            });
        });
    }

    window.closeDialog = function(){
        need("biz.dialog",function(Dialog){
            Dialog.hide();
        });
    }
    
    window.boxModuleSuffixTips = function(iPackageId){
        if(typeof allLubanBoxPkgIds != 'undefined' && allLubanBoxPkgIds.indexOf(parseInt(iPackageId)) != -1){
            return ",����ѷ��ŵ��ݴ���!";
        }else {
            return "";
        }
    } 
    if($('#showAlert').length > 0) {
        window.alert = function(s){
            if(s == 'undefined'){
                console.error('s is undefined!');
                return;
            }
            TGDialogS('showAlert');
        
            document.getElementById('showAlertContent').innerHTML = s;
            resetFlash()
        }
    }
    //��ҳ�������еĳ齱������
    window.resetFlash = function() {
        if (typeof allLubanFlashObj != 'undefined') {
            for (var index = 0; index < allLubanFlashObj.length; index++) {
                var aObj = window['SWFOBJ' + allLubanFlashObj[index]]; 
                if (typeof aObj.enable == 'function'){
                    aObj.enable();
                }
            }
        }
    }
    //�޸İ󶨴���ID����ӦAMS
    $("#spanNotBind").attr("id","spanNotBind_"+iInitAreaId);
    $("#spanBind").attr("id","spanBind_"+iInitAreaId);
    $("#area_info").attr("id","area_info_"+iInitAreaId);
    $("#role_info").attr("id","role_info_"+iInitAreaId);
		if(iBindAreaId == 0){
    	$("span[id^=spanBind]").remove();$("span[id^=spanNotBind]").remove();
    }
		//����iGiftArea�б��ҵ�������Ƿ���ʾ������
    if(iGiftArea == 0){
        $(".showGiftArea").remove();
    }

    //���������̰󶨵İ�ť�󶨷�������
    $("[href^='javascript:sharedNeiqian']").addClass("shareBtn");

    // ������Ϸ�ڷ�������
    if(typeof window.shouyouInfo !== 'undefined') {
        if(window.shouyouInfo.iDemandId){
            $(function() {
                //���÷����İ�
                var urlLink = location.href.split("?")[0];
                var sShareLink = formatUrl((shouyouInfo.sShareLink == "" || shouyouInfo.sShareLink == undefined)?(urlLink):shouyouInfo.sShareLink);
                var sShareImgUrl = formatUrl(shouyouInfo.sShareImgUrl == undefined?"":shouyouInfo.sShareImgUrl);
                var sShareDesc = shouyouInfo.sShareDesc;
                var sShareTitle = shouyouInfo.sShareTitle;
                var sharedata = {
                    title:sShareTitle
                    ,desc:sShareDesc
                    ,url:sShareLink
                    ,img:sShareImgUrl  //������ϷLOGO
                }
                //��ʼ��
                if (typeof igShare == 'undefined') return;
                window.ingameShare = new igShare({
                    shareData:sharedata,
                    tcss:"ingame.share"
                });
            })
        }
    }

    // a��ǩ����target = "_blank"
    $("a[href^='http']").attr("target",'_blank');
    $("a[href^='https']").attr("target",'_blank');
    $("a[href^='//']").attr("target","_blank");

                
    // ��¼��ص�  ��ѯ�󶨴���/��ѯ�û����� 
    function loginCallBack(LoginManager){
        // ��ʼ���󶨴���
        if(iBindAreaId > 0){
        amsInit(iActivityId, iInitAreaId);
      	}else if(iBindAreaId == 0){ //ָ������������ҵ��
            qOnlyJF();qDsFunc();
        }
        if(typeof window.iSighQueryFlow != "undefined" && window.iSighQueryFlow != 0){
        	 amsInit(iActivityId, iSighQueryFlow);
        }
        
        if(iDecryptFlow > 0){
          inviteLoginCall();
        }
        // �Զ����¼�ص�
        if (typeof lbCallBackAfterLogin == 'function') {
            lbCallBackAfterLogin(LoginManager)
        }
    }
    
		
    // �󶨴�������
    window.showSelectZone = function(){
        need("biz.login",function(LoginManager){
            LoginManager.checkLogin(function(){
            		if(iBindAreaId > 0){
                	amsInit(iActivityId, iBindAreaId);
                } 
            }, function(){
                LoginManager.init({
                    needReloadPage:false
                });
                LoginManager.login(function(){
                    g("login_qq_span").innerHTML = LoginManager.getUserUin();//��ȡQQ��
                     
                    loginCallBack(LoginManager);
                });        
            });
        });
    }

    //��ѯ�Ƿ�󶨵�����
    amsCfg_initArea={
        type : "query",
        iQueryFlowID:iInitAreaId,
        service:sService ,
        success : function(bindedInfo){
            // �Զ���ص�
            if (typeof lbCallBackOfAreaHandle == 'function') {
                lbCallBackOfAreaHandle('query_success', bindedInfo);
            }
            
            //�Ѱ�ʱ����չ����
            window.biFareaName = decodeURIComponent(bindedInfo.jData.data.FareaName);
            qOnlyJF();qDsFunc();    
            if(iDecryptFlow > 0 ){
              inviteBindCall();
            }
        },
        failure : function(){
            // �Զ���ص�
            if (typeof lbCallBackOfAreaHandle == 'function') {
                lbCallBackOfAreaHandle('query_failed', '');
            }
            if(typeof iQualType!= 'undefined' &&  iQualType == 1){
                qOnlyJF();    
            }
            //δ��ʱ����չ����
        }
    };

    var amsCfg_initArea_tmp = "amsCfg_"+iInitAreaId+"=amsCfg_initArea;"; // amsCfg_373024
    eval(amsCfg_initArea_tmp);

    //�ύ�󶨵�����
    amsCfg_bindArea={
        type : "comit",
        iQueryFlowID:iInitAreaId,
        service:sService ,
        success : function(bindedInfo){
            //�Ѱ�ʱ����չ����
            window.biFareaName = decodeURIComponent(bindedInfo.jData.data.FareaName);
            qOnlyJF();qDsFunc();
            if(iDecryptFlow > 0){
              inviteBindCall();
            }
            // �Զ���ص�
            if (typeof lbCallBackOfAreaHandle == 'function') {
                lbCallBackOfAreaHandle('comit_success', bindedInfo);
            }
            alert("��ϲ�������Ѿ��ɹ�����Ϸ������");
        },
        failure : function(){
            //δ��ʱ����չ����
            // �Զ���ص�
            if (typeof lbCallBackOfAreaHandle == 'function') {
                lbCallBackOfAreaHandle('comit_failed', '');
            }
        }
    };

    var amsCfg_bindArea_tmp = "amsCfg_"+iBindAreaId+"=amsCfg_bindArea;"; // amsCfg_373024
    eval(amsCfg_bindArea_tmp);

    // �ҵ�����رն���
    window.giftDialogHide = function(){
        need("biz.dialog",function(Dialog){
            Dialog.hide();
        });
    }
     
    // ���˻񽱼�¼��ʼ��
    amsCfg_myList = {
        sData:{},
        _everyRead:true,
        'iAMSActivityId' : iActivityId, // AMS���
        'iLotteryFlowId' : iMyListId, //  ��ѯ���ֲ������̺�
        'activityId' : iLotteryId, // ģ��ʵ����
        'isForce' : true,
        'contentId' : 'getGiftContent', //����ID
        'templateId' : 'getGiftTemplate', //ģ��ID
        'contentPageId' : 'getGiftPageContent', //��ҳ����ID
        'showContentId' : 'showMyGiftContent' //������ID
    };

    var amsCfg_myList_tmp = "amsCfg_"+iMyListId+"=amsCfg_myList;"; // amsCfg_373024
    eval(amsCfg_myList_tmp);

    window.showMyGiftList = function(){
        amsSubmit(iActivityId,iMyListId);
    }
	//���iMyListId = 0; �����ҵ������� 
	if(iMyListId == 0){
		$("a[href='javascript:showMyGiftList();']").hide();
	}
	//��дʵ���ַ
	 amsCfg_myAddress = {
         sData:{},
         _everyRead:true,
	 	'iActivityId' : iActivityId, // AMS���
	 	'iFlowId' : iMyAddressId, // ���̺�
	 	'_everyRead' : true,
	 	'fFlowSubmitEnd': function(res) {
	 		if(typeof res.jData == "object") { //�����Ѿ��ύ�����ݣ����ҳ��
	 			need(["biz.provincecityselector", "biz.dialog", "util.form"],function(pcs, Dialog, FormManager){
  
	 				Dialog.show({
	 					id: 'personInfoContent'
	 				});
  
	 				g('personInfoContentBtn').onclick = function(){
	 					var fillData = FormManager.getAllInputValue('personInfoContent');
	 					for(var i in fillData) {
	 						var _val = fillData[i];
	 						switch(i) {
	 							case 'sName': {
	 								if(!_val){alert("��������Ϊ��"); return;}
	 								if(milo.getByteLength(_val) > 30){alert("�������Ȳ��ܳ���30���ֽڡ�"); return;}
	 								break;
	 							}
	 							case 'sGender':{
	 								if(!_val){alert("�Ա����ѡ��"); return;}
	 								break;
	 							}
	 							case 'sIdentity':{
	 								if(!_val){alert("���֤���벻��Ϊ��"); return;}
	 								if(!milo.isIDCard(_val)){alert("���֤��������"); return;}
	 								break;
	 							}
	 							case 'sMobile':{
	 								if(!_val){alert("�ֻ����벻��Ϊ��"); return;}
	 								if(isNaN(_val) || _val.indexOf('.') >= 0){alert("�ֻ��������Ϊ���֡�"); return;}
	 								if(_val.length > 11){alert("�ֻ����벻�ó���11λ��"); return;}
	 								break;
	 							}
	 							case 'sAddress':{
	 								if(!_val){alert("��ϸ��ַ����Ϊ��"); return;}
	 								if(milo.getByteLength(_val) > 100){alert("��ϸ��ַ���ܳ���100���ֽڡ�"); return;}
	 								break;
	 							}
	 							case 'sPostCode':{
	 								if(!_val){alert("�������벻��Ϊ��"); return;}
	 								if(milo.getByteLength(_val) > 8){alert("�������벻�ܳ���8���ֽڡ�"); return;}
	 								if(isNaN(_val) || _val.indexOf('.') >= 0){alert("�����������Ϊ���֡�"); return;}
	 								break;
	 							}
	 							case 'sProvince':{
	 								if(!_val){alert("��ѡ��ʡ��"); return;}
	 								break;
	 							}
	 							case 'sCity':{
	 								if(!_val){alert("��ѡ�����"); return;}
	 								break;
	 							}
	 							default : {}
	 						}
	 					}
                        amsCfg_myAddress.sData = $.extend(amsCfg_myAddress.sData,fillData);
                        amsCfg_myAddress.sData.iShow = 0;
                        amsSubmit(iActivityId,iMyAddressId);
	 				}
	 				g("colseLayer").onclick = function(){
	 					Dialog.hide();
	 				}
  
	 				if(g("province").innerHTML != '') {
	 					g("province").innerHTML = '';
	 				}
	 				if(g("city").innerHTML != '') {
	 					g("city").innerHTML = '';
	 				}
	 				pcs.show({
	 					provinceId : "province",
	 					cityId : "city"
	 				});
  
	 				if(res.jData.sProvince != undefined) {
	 					g('province').value = res.jData.sProvince;
	 				}
	 				g('province').onchange();
	 				if(res.jData.sCity != undefined){
	 					g('city').value = res.jData.sCity;
	 				}
	 				//��������:
	 				if(res.jData.sExtend1){
	 					g('sExtend1').innerHTML=res.jData.sExtend1;
	 				}
	 				delete res.jData.sProvince;
	 				delete res.jData.sCity;
	 				FormManager.setAllInputValue (res.jData, 'personInfoContent');
	
	 				if(typeof res.jData.arrPackageInfo != 'undefined' && res.jData.arrPackageInfo.length > 0) {
	 					document.getElementById('tr_package').style.display = '';
	 					var package_id = document.getElementById('package');
	 					for(var i=0; i<res.jData.arrPackageInfo.length; ++i) {
	 						var iPackageId = res.jData.arrPackageInfo[i].iPackageId;
	 						var sPackageName = res.jData.arrPackageInfo[i].sPackageName;
	 						package_id.options[i] = new Option(sPackageName, iPackageId + '|' + sPackageName);
	 					}
	 				}
	 			});
	
	 		} else {
	 			alert(res.sMsg);
	 		}
	 	}
	 };

  amsCfg_myAddress.success =amsCfg_myAddress.fFlowSubmitEnd;
   var amsCfg_myAddress_tmp = "amsCfg_"+iMyAddressId+"=amsCfg_myAddress;";
   eval(amsCfg_myAddress_tmp);

  milo.ready(function(){
     if(g('fillAddress') != null)
     milo.addEvent(g('fillAddress'),'click',function(){
           need("biz.login",function(LoginManager){
                LoginManager.submitLogin(function(){
                    if(window.sService === 'cfm'){
                        amsCfg_myAddress.sData.iShow = 1;
                    }else{
                        amsCfg_myAddress.sData = { iShow: 1 };
                    }
                 amsSubmit(iActivityId,iMyAddressId);
             });
           })
     });
  });
}