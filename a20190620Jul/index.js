//查询是否绑定的配置
amsCfg_528261={
	type : "query",
	iQueryFlowID:528261,
	service:"fo4" ,
	success : function(bindedInfo){
		//已绑定时的扩展处理
		amsSubmit(183534,528267);
	},
	failure : function(){
		//未绑定时的扩展处理
		amsSubmit(183534,528267);
	}
};

//提交绑定的配置
amsCfg_528260={
	type : "comit",
	needPopupRole:true,//是否弹默认角色框选角色
	roleInfo:null,//如果needPopupRole为false，需要自定义传入角色信息，roleInfo需要传角色信息对象
	iQueryFlowID:528261,
	service:"fo4" ,
	success : function(bindedInfo){
		//已绑定时的扩展处理
		amsSubmit(183534,528267);
	},
	failure : function(){
		//未绑定时的扩展处理
		amsSubmit(183534,528267);
	}
};

//调用，查询是否已经绑定
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
// 抽奖领取主功能初始化
amsCfg_528262 = {
	'iAMSActivityId' : '183534', // AMS活动号
	'activityId' : '223141', // 模块实例号
	'onBeginGetGiftEvent' : function(){
		return 0; // 抽奖前事件，返回0表示成功
	},
	'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
		LotteryManager.alert(callbackObj.sMsg);
		$("#first").addClass('btn-got').attr("href","javascript:void(0)");
	}
};

// 抽奖领取主功能初始化
amsCfg_528265 = {
	'iAMSActivityId' : '183534', // AMS活动号
	'activityId' : '223141', // 模块实例号
	'onBeginGetGiftEvent' : function(){
		return 0; // 抽奖前事件，返回0表示成功
	},
	'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
		LotteryManager.alert(callbackObj.sMsg);
		$("#second").addClass('btn-got').attr("href","javascript:void(0)");
	}
};

// 抽奖领取主功能初始化
amsCfg_528266 = {
	'iAMSActivityId' : '183534', // AMS活动号
	'activityId' : '223141', // 模块实例号
	'onBeginGetGiftEvent' : function(){
		return 0; // 抽奖前事件，返回0表示成功
	},
	'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
		LotteryManager.alert(callbackObj.sMsg);
		$("#third").addClass('btn-got').attr("href","javascript:void(0)");
	}
};

// 抽奖领取主功能初始化
amsCfg_528383 = {
	'iAMSActivityId' : '183534', // AMS活动号
	'activityId' : '223141', // 模块实例号
	'onBeginGetGiftEvent' : function(){
		return 0; // 抽奖前事件，返回0表示成功
	},
	'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
		LotteryManager.alert(callbackObj.sMsg);
		$("#four").addClass('btn-got').attr("href","javascript:void(0)");
	}
};

// 抽奖领取主功能初始化
amsCfg_528384 = {
	'iAMSActivityId' : '183534', // AMS活动号
	'activityId' : '223141', // 模块实例号
	'onBeginGetGiftEvent' : function(){
		return 0; // 抽奖前事件，返回0表示成功
	},
	'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
		LotteryManager.alert(callbackObj.sMsg);
		$("#five").addClass('btn-got').attr("href","javascript:void(0)");
	}
};

//提交请求至AME
amsCfg_528267 = {
	"iActivityId": 183534, //活动id	
	"iFlowId":    528267, //流程id
	"sNeedSubmitPopDiv":  false , // 是否开启loading层
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
		//失败会走到这个函数
		//条件不满足，ame返回大于0是后走到这里
		alert(res.sMsg);
	}
};
