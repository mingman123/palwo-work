//查询是否绑定的配置
amsCfg_662167={
	type : "query",
	iQueryFlowID:662167,
	service:"fifa" ,
	success : function(bindedInfo){
		//已绑定时的扩展处理
		amsSubmit(302550,662216);
		amsInit(302550,662165);
	},
	failure : function(){
		//未绑定时的扩展处理
		amsSubmit(302550,662216);
		amsInit(302550,662165);
	}
};

//提交绑定的配置
amsCfg_662166={
	type : "comit",
	needPopupRole:true,//是否弹默认角色框选角色
	roleInfo:null,//如果needPopupRole为false，需要自定义传入角色信息，roleInfo需要传角色信息对象
	iQueryFlowID:662167,
	service:"fifa" ,
	success : function(bindedInfo){
		//已绑定时的扩展处理
		amsSubmit(302550,662216);
	},
	failure : function(){
		//未绑定时的扩展处理
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

// 抽奖领取主功能初始化
amsCfg_662180 = {
	'iAMSActivityId' : '302550', // AMS活动号
	'activityId' : '343421', // 模块实例号
	'onBeginGetGiftEvent' : function(){
		return 0; // 抽奖前事件，返回0表示成功
	},
	'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
		LotteryManager.alert(callbackObj.sMsg);
		$('.btn-get').eq(0).attr("href","javascript:alert('您已经领过该礼包了');");
	}
};

// 抽奖领取主功能初始化
amsCfg_662187 = {
	'iAMSActivityId' : '302550', // AMS活动号
	'activityId' : '343421', // 模块实例号
	'onBeginGetGiftEvent' : function(){
		return 0; // 抽奖前事件，返回0表示成功
	},
	'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
		LotteryManager.alert(callbackObj.sMsg);
		$('.btn-get').eq(1).attr("href","javascript:alert('您已经领过该礼包了');");
	}
};

// 抽奖领取主功能初始化
amsCfg_662206 = {
	'iAMSActivityId' : '302550', // AMS活动号
	'activityId' : '343421', // 模块实例号
	'onBeginGetGiftEvent' : function(){
		return 0; // 抽奖前事件，返回0表示成功
	},
	'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
		LotteryManager.alert(callbackObj.sMsg);
		$('.btn-get').eq(2).attr("href","javascript:alert('您已经领过该礼包了');");
	}
};

// 抽奖领取主功能初始化
amsCfg_662208 = {
	'iAMSActivityId' : '302550', // AMS活动号
	'activityId' : '343421', // 模块实例号
	'onBeginGetGiftEvent' : function(){
		return 0; // 抽奖前事件，返回0表示成功
	},
	'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
		LotteryManager.alert(callbackObj.sMsg);
		$('.btn-get').eq(3).attr("href","javascript:alert('您已经领过该礼包了');");
	}
};

// 抽奖领取主功能初始化
amsCfg_662209 = {
	'iAMSActivityId' : '302550', // AMS活动号
	'activityId' : '343421', // 模块实例号
	'onBeginGetGiftEvent' : function(){
		return 0; // 抽奖前事件，返回0表示成功
	},
	'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
		LotteryManager.alert(callbackObj.sMsg);
		$('.btn-get').eq(4).attr("href","javascript:alert('您已经领过该礼包了');");
	}
};

// 抽奖领取主功能初始化
amsCfg_662211 = {
	'iAMSActivityId' : '302550', // AMS活动号
	'activityId' : '343421', // 模块实例号
	'onBeginGetGiftEvent' : function(){
		return 0; // 抽奖前事件，返回0表示成功
	},
	'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
		LotteryManager.alert(callbackObj.sMsg);
		$('.btn-get').eq(5).attr("href","javascript:alert('您已经领过该礼包了');");
	}
};

//提交请求至AME
amsCfg_662216 = {
	"iActivityId": 302550, //活动id	
	"iFlowId":    662216, //流程id
	"sNeedSubmitPopDiv":  false , // 是否开启loading层
	"fFlowSubmitEnd": function(res){		
		 if (res.iRet==0) {
            for(var i=0; i<res.jData.length; i++){
                if(res.jData[i].iUsedNum>=1){
					$('.btn-get').eq(i).attr("href","javascript:alert('您已经领过该礼包了');");
                }
            }
        };
        return;
	},
	"fFlowSubmitFailed":function(res){
		//失败会走到这个函数
		alert(res.sMsg);
	}
};
milo.ready(function () {
    need("biz.login",function(LoginManager){
      LoginManager.checkLogin(function(){
        g("login_qq_span").innerText= LoginManager.getUserUin();//获取QQ号
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
