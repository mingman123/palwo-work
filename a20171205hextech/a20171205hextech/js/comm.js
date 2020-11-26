var sell_id = 0;
var buy_list = [559958,559980,559981,559982,559983,562480,562479,562477,562478];
var url = "//lol.sw.game.qq.com/lol/commact/?proj=HexConfig&c=HexConfig&a=GetAllConfig";

ForSale()

function buy(){
	var num = $('#dialog-buy .count').html();
	switch(sell_id){
		case 0:
		amsCfg_559958.sData.num = parseInt(num);
		break;
		case 1:
		amsCfg_559980.sData.num = parseInt(num);
		break;
		case 2:
		amsCfg_559981.sData.num = parseInt(num);
		break;
		case 3:
		amsCfg_559982.sData.num = parseInt(num);
		break;
		case 4:
		amsCfg_559983.sData.num = parseInt(num);
		break;
		case 5:
		amsCfg_562480.sData.num = parseInt(num);
		break;
		case 6:
		amsCfg_562479.sData.num = parseInt(num);
		break;
		case 7:
		amsCfg_562477.sData.num = parseInt(num);
		break;
		case 8:
		amsCfg_562478.sData.num = parseInt(num);
		break;
	}
	amsSubmit(219461, buy_list[sell_id]);
	closeDialog();
}

amsCfg_559958 = {
	'iActivityId' : '219461',
	'iFlowId' : '559958',
	'sData'	: {},
	'fFlowSubmitEnd': function(res) {
		need(["ams.daoju_buy_v2.daoju_buy_v2"], function(DaojuBuy) {
			var option = {
				//apptype:4	新版webpay，已默认
				//onPaySuccess:function(){},//支付成功后回调方法
				//onPayClose:function(){}//关闭支付页面回调方法
			};
			DaojuBuy.pay(res.jData,option);
		});
	},
	'fFlowSubmitFailed':function(res) {
		alert(res.sMsg);
	}
};
milo.ready(function() {
	need(["ams.daoju_buy_v2.appid"], function(autoappid) {
		autoappid.init('lol', 12133, function(final_appid) {
			//final_appid为自动判断得到的道聚城渠道号
			//本段代码内自动进行道聚城全流程数据的收集，必须保留并放到milo.ready内，除非自行在页面上进行基于道聚城活动号的eas曝光上报
		});
	});
});					

amsCfg_559980 = {
	'iActivityId' : '219461',
	'iFlowId' : '559980',
	'sData'	: {},
	'fFlowSubmitEnd': function(res) {
		need(["ams.daoju_buy_v2.daoju_buy_v2"], function(DaojuBuy) {
			var option = {
				//apptype:4	新版webpay，已默认
				//onPaySuccess:function(){},//支付成功后回调方法
				//onPayClose:function(){}//关闭支付页面回调方法
			};
			DaojuBuy.pay(res.jData,option);
		});
	},
	'fFlowSubmitFailed':function(res) {
		alert(res.sMsg);
	}
};
milo.ready(function() {
	need(["ams.daoju_buy_v2.appid"], function(autoappid) {
		autoappid.init('lol', 12133, function(final_appid) {
			//final_appid为自动判断得到的道聚城渠道号
			//本段代码内自动进行道聚城全流程数据的收集，必须保留并放到milo.ready内，除非自行在页面上进行基于道聚城活动号的eas曝光上报
		});
	});
});					

amsCfg_559981 = {
	'iActivityId' : '219461',
	'iFlowId' : '559981',
	'sData'	: {},
	'fFlowSubmitEnd': function(res) {
		need(["ams.daoju_buy_v2.daoju_buy_v2"], function(DaojuBuy) {
			var option = {
				//apptype:4	新版webpay，已默认
				//onPaySuccess:function(){},//支付成功后回调方法
				//onPayClose:function(){}//关闭支付页面回调方法
			};
			DaojuBuy.pay(res.jData,option);
		});
	},
	'fFlowSubmitFailed':function(res) {
		alert(res.sMsg);
	}
};
milo.ready(function() {
	need(["ams.daoju_buy_v2.appid"], function(autoappid) {
		autoappid.init('lol', 12133, function(final_appid) {
			//final_appid为自动判断得到的道聚城渠道号
			//本段代码内自动进行道聚城全流程数据的收集，必须保留并放到milo.ready内，除非自行在页面上进行基于道聚城活动号的eas曝光上报
		});
	});
});					

amsCfg_559982 = {
	'iActivityId' : '219461',
	'iFlowId' : '559982',
	'sData'	: {},
	'fFlowSubmitEnd': function(res) {
		need(["ams.daoju_buy_v2.daoju_buy_v2"], function(DaojuBuy) {
			var option = {
				//apptype:4	新版webpay，已默认
				//onPaySuccess:function(){},//支付成功后回调方法
				//onPayClose:function(){}//关闭支付页面回调方法
			};
			DaojuBuy.pay(res.jData,option);
		});
	},
	'fFlowSubmitFailed':function(res) {
		alert(res.sMsg);
	}
};
milo.ready(function() {
	need(["ams.daoju_buy_v2.appid"], function(autoappid) {
		autoappid.init('lol', 12133, function(final_appid) {
			//final_appid为自动判断得到的道聚城渠道号
			//本段代码内自动进行道聚城全流程数据的收集，必须保留并放到milo.ready内，除非自行在页面上进行基于道聚城活动号的eas曝光上报
		});
	});
});					

amsCfg_559983 = {
	'iActivityId' : '219461',
	'iFlowId' : '559983',
	'sData'	: {},
	'fFlowSubmitEnd': function(res) {
		need(["ams.daoju_buy_v2.daoju_buy_v2"], function(DaojuBuy) {
			var option = {
				//apptype:4	新版webpay，已默认
				//onPaySuccess:function(){},//支付成功后回调方法
				//onPayClose:function(){}//关闭支付页面回调方法
			};
			DaojuBuy.pay(res.jData,option);
		});
	},
	'fFlowSubmitFailed':function(res) {
		alert(res.sMsg);
	}
};
milo.ready(function() {
	need(["ams.daoju_buy_v2.appid"], function(autoappid) {
		autoappid.init('lol', 12133, function(final_appid) {
			//final_appid为自动判断得到的道聚城渠道号
			//本段代码内自动进行道聚城全流程数据的收集，必须保留并放到milo.ready内，除非自行在页面上进行基于道聚城活动号的eas曝光上报
		});
	});
});					

amsCfg_562477 = {
	'iActivityId' : '219461',
	'iFlowId' : '562477',
	'sData'	: {},
	'fFlowSubmitEnd': function(res) {
		need(["ams.daoju_buy_v2.daoju_buy_v2"], function(DaojuBuy) {
			var option = {
				//apptype:4	新版webpay，已默认
				//onPaySuccess:function(){},//支付成功后回调方法
				//onPayClose:function(){}//关闭支付页面回调方法
			};
			DaojuBuy.pay(res.jData,option);
		});
	},
	'fFlowSubmitFailed':function(res) {
		alert(res.sMsg);
	}
};
milo.ready(function() {
	need(["ams.daoju_buy_v2.appid"], function(autoappid) {
		autoappid.init('lol', 12133, function(final_appid) {
			//final_appid为自动判断得到的道聚城渠道号
			//本段代码内自动进行道聚城全流程数据的收集，必须保留并放到milo.ready内，除非自行在页面上进行基于道聚城活动号的eas曝光上报
		});
	});
});					

amsCfg_562478 = {
	'iActivityId' : '219461',
	'iFlowId' : '562478',
	'sData'	: {},
	'fFlowSubmitEnd': function(res) {
		need(["ams.daoju_buy_v2.daoju_buy_v2"], function(DaojuBuy) {
			var option = {
				//apptype:4	新版webpay，已默认
				//onPaySuccess:function(){},//支付成功后回调方法
				//onPayClose:function(){}//关闭支付页面回调方法
			};
			DaojuBuy.pay(res.jData,option);
		});
	},
	'fFlowSubmitFailed':function(res) {
		alert(res.sMsg);
	}
};
milo.ready(function() {
	need(["ams.daoju_buy_v2.appid"], function(autoappid) {
		autoappid.init('lol', 12133, function(final_appid) {
			//final_appid为自动判断得到的道聚城渠道号
			//本段代码内自动进行道聚城全流程数据的收集，必须保留并放到milo.ready内，除非自行在页面上进行基于道聚城活动号的eas曝光上报
		});
	});
});					

amsCfg_562479 = {
	'iActivityId' : '219461',
	'iFlowId' : '562479',
	'sData'	: {},
	'fFlowSubmitEnd': function(res) {
		need(["ams.daoju_buy_v2.daoju_buy_v2"], function(DaojuBuy) {
			var option = {
				//apptype:4	新版webpay，已默认
				//onPaySuccess:function(){},//支付成功后回调方法
				//onPayClose:function(){}//关闭支付页面回调方法
			};
			DaojuBuy.pay(res.jData,option);
		});
	},
	'fFlowSubmitFailed':function(res) {
		alert(res.sMsg);
	}
};
milo.ready(function() {
	need(["ams.daoju_buy_v2.appid"], function(autoappid) {
		autoappid.init('lol', 12133, function(final_appid) {
			//final_appid为自动判断得到的道聚城渠道号
			//本段代码内自动进行道聚城全流程数据的收集，必须保留并放到milo.ready内，除非自行在页面上进行基于道聚城活动号的eas曝光上报
		});
	});
});					

amsCfg_562480 = {
	'iActivityId' : '219461',
	'iFlowId' : '562480',
	'sData'	: {},
	'fFlowSubmitEnd': function(res) {
		need(["ams.daoju_buy_v2.daoju_buy_v2"], function(DaojuBuy) {
			var option = {
				//apptype:4	新版webpay，已默认
				//onPaySuccess:function(){},//支付成功后回调方法
				//onPayClose:function(){}//关闭支付页面回调方法
			};
			DaojuBuy.pay(res.jData,option);
		});
	},
	'fFlowSubmitFailed':function(res) {
		alert(res.sMsg);
	}
};
milo.ready(function() {
	need(["ams.daoju_buy_v2.appid"], function(autoappid) {
		autoappid.init('lol', 12133, function(final_appid) {
			//final_appid为自动判断得到的道聚城渠道号
			//本段代码内自动进行道聚城全流程数据的收集，必须保留并放到milo.ready内，除非自行在页面上进行基于道聚城活动号的eas曝光上报
		});
	});
});	

 //查询是否绑定的配置
amsCfg_559989={
	type : "query",
	iQueryFlowID:559989,
	service:"lol" ,
	success : function(bindedInfo){
		//已绑定时的扩展处理
		AMSBindAreaCallback(bindedInfo);
	},
	failure : function(){
		//未绑定时的扩展处理
		amsInit(219461, 559988);
	}
};

//提交绑定的配置
amsCfg_559988={
	type : "comit",
	needPopupRole:true,//是否弹默认角色框选角色
	roleInfo:null,//如果needPopupRole为false，需要自定义传入角色信息，roleInfo需要传角色信息对象
	iQueryFlowID:559989,
	service:"lol" ,
	success : function(bindedInfo){
		//已绑定时的扩展处理
		AMSBindAreaCallback(bindedInfo);
	},
	failure : function(){
		//未绑定时的扩展处理
		
	}
};

function ForSale(){
	$.ajax({
		type: 'GET',
		url: url,
		xhrFields: {
			withCredentials: true
		},
		dataType: 'jsonp',
		success: function(data){
			if(data["msg"]["0"]["isSale"] == 0){
				$(".cont04").addClass("long");
				$("#jiezuo").attr("style", "display: block;");
			}else{
				$(".cont04").removeClass("long");
				$("#jiezuo").attr("style", "display: none;");
			}
		},
		error: function(res){
			var params = $.parseJSON(res['responseText']);
			if(params['code'] == '-606'){
				need("biz.login",function(LoginManager){
					alert("未登录或登录超时，请重新登录！");
					LoginManager.login();
				});
			}
		}
	});
}

function AMSBindAreaCallback(bindedInfo) {
	var areaData = bindedInfo['jData']['data'];
	var cookieKey = CGA.dCookieKey + CGA.iUin;
	CGA.iArea = areaData['Farea'];
	G_AREA = CGA.iArea;
	CGA.sRoleName = areaData['FareaName'];
	CGA.iLevel = areaData['FroleLevel'];
	var cookieValue = CGA.iArea + '|' + CGA.sRoleName + '|' + CGA.iLevel + '||';
	milo.cookie.set(cookieKey, cookieValue);
	CGA.iChangeArea = CGA.iArea;
	$(".areainfo").html("<a href='javascript:;' onclick='amsInit(219461, 559988);'>["+LOLServerSelect.zoneToName(G_AREA)+"]</a>");
}

		

				
			