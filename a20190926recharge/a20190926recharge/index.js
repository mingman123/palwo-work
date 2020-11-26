//查询是否绑定的配置
amsCfg_562261={
	type : "query",
	iQueryFlowID:562261,
	service:"fifa" ,
	success : function(bindedInfo){
		//已绑定时的扩展处理
		amsSubmit(222473,562266);
	},
	failure : function(){
		//未绑定时的扩展处理
		amsSubmit(222473,562266);
	}
};

//提交绑定的配置
amsCfg_562260={
	type : "comit",
	needPopupRole:true,//是否弹默认角色框选角色
	roleInfo:null,//如果needPopupRole为false，需要自定义传入角色信息，roleInfo需要传角色信息对象
	iQueryFlowID:562261,
	service:"fifa" ,
	success : function(bindedInfo){
		//已绑定时的扩展处理
		amsSubmit(222473,562266);
	},
	failure : function(){
		//未绑定时的扩展处理
		amsSubmit(222473,562266);
	}
};

// 抽奖领取主功能初始化
amsCfg_562262 = {
	'iAMSActivityId' : '222473', // AMS活动号
	'activityId' : '242354', // 模块实例号
	'onBeginGetGiftEvent' : function(){
		return 0; // 抽奖前事件，返回0表示成功
	},
	'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
		LotteryManager.alert(callbackObj.sMsg);
		$('.btn-get').eq(0).attr("href","javascript:void(0)");
        $('.btn-get').eq(0).addClass('btn-geted');
	}
};

// 抽奖领取主功能初始化
amsCfg_562264 = {
	'iAMSActivityId' : '222473', // AMS活动号
	'activityId' : '242354', // 模块实例号
	'onBeginGetGiftEvent' : function(){
		return 0; // 抽奖前事件，返回0表示成功
	},
	'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
		LotteryManager.alert(callbackObj.sMsg);
		$('.btn-get').eq(1).attr("href","javascript:void(0)");
        $('.btn-get').eq(1).addClass('btn-geted');
	}
};

// 抽奖领取主功能初始化
amsCfg_562265 = {
	'iAMSActivityId' : '222473', // AMS活动号
	'activityId' : '242354', // 模块实例号
	'onBeginGetGiftEvent' : function(){
		return 0; // 抽奖前事件，返回0表示成功
	},
	'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
		LotteryManager.alert(callbackObj.sMsg);
		$('.btn-get').eq(2).attr("href","javascript:void(0)");
        $('.btn-get').eq(2).addClass('btn-geted');
	}
};

// 抽奖领取主功能初始化
amsCfg_562267 = {
	'iAMSActivityId' : '222473', // AMS活动号
	'activityId' : '242354', // 模块实例号
	'onBeginGetGiftEvent' : function(){
		return 0; // 抽奖前事件，返回0表示成功
	},
	'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
		LotteryManager.alert(callbackObj.sMsg);
		$('.btn-get').eq(3).attr("href","javascript:void(0)");
        $('.btn-get').eq(3).addClass('btn-geted');
	}
};

// 抽奖领取主功能初始化
amsCfg_562269 = {
	'iAMSActivityId' : '222473', // AMS活动号
	'activityId' : '242354', // 模块实例号
	'onBeginGetGiftEvent' : function(){
		return 0; // 抽奖前事件，返回0表示成功
	},
	'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
		LotteryManager.alert(callbackObj.sMsg);
		$('.btn-get').eq(4).attr("href","javascript:void(0)");
        $('.btn-get').eq(4).addClass('btn-geted');
	}
};

//提交请求至AME
amsCfg_562266 = {
	"iActivityId": 222473, //活动id	
	"iFlowId":    562266, //流程id
	"sNeedSubmitPopDiv":  false , // 是否开启loading层
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
		//失败会走到这个函数
		//条件不满足，ame返回大于0是后走到这里
		alert(res.sMsg);
	}
};

