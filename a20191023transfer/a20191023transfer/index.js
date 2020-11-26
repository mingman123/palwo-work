var myTicket = 0;
var myPoint = 0;
var myTPoint = 0;
var myCycle = 0;
var myHolds = [0, 0, 0, 0, 0];

// 查询绑定大区
amsCfg_600632 = {
    type: 'query',
    iQueryFlowID: 600632,
    service: 'fo4',
    success: function(bindedInfo) {
        // 初始化页面
        amsSubmit(251917, 600657);
    },
    failure: function() {}
};

// 提交绑定的配置
amsCfg_600631 = {
    type: 'comit',
    needPopupRole: true, // 是否弹默认角色框选角色
    roleInfo: null, // 如果needPopupRole为false，需要自定义传入角色信息，roleInfo需要传角色信息对象
    iQueryFlowID: 600632,
    service: 'fo4',
    success: function(bindedInfo) {
        // 初始化页面
        amsSubmit(251917, 600657);
    },
    failure: function() {}
};

// 个人获奖记录初始化
amsCfg_600634 = {
	'iAMSActivityId' : '251917', // AMS活动号
	'iLotteryFlowId' : '600634', //  查询获奖轮播的流程号
	'activityId' : '303008', // 模块实例号
	'contentId' : 'getGiftContent_600634', //容器ID
	'templateId' : 'getGiftTemplate_600634', //模板ID
	'contentPageId' : 'getGiftPageContent_600634',	//分页容器ID
	'showContentId' : 'showMyGiftContent_600634' //弹出层ID
};

// 初始化页面
amsCfg_600657 = {
    iActivityId: 251917,
    iFlowId: 600657,
    sNeedSubmitPopDiv: true,
    fFlowSubmitEnd: function(res) {
        var tickets = res.jData.ticket.split('_').map(function(val) { return +val; });
        myTicket = tickets[0];
        myPoint = tickets[1];
        myCycle = tickets[2];
        myTPoint = tickets[3];
        $('.my-ticket').text(myTicket);
        $('.my-point').text(myPoint);
        $('.my-tpoint').text(myTPoint);
        myHolds = res.jData.hold.split('_').map(function(val) { return +val; });
        updatePoint();
        var html = '';
        res.jData.ranking.forEach(function(obj, idx) {
            html += '<tr><td class="urank">' + (idx + 1) + '</td><td class="uid">' + obj.qq + '</td><td class="upoint">' + obj.ticket + '</td></tr>';
        });
        $('#myRanking').html(html);
        res.jData.ranking3.forEach(function(obj, idx) {
            $('.rank-ticket').eq(idx).text('积分：' + obj.ticket);
            $('.rank-qq').eq(idx).text('[QQ: ' + obj.qq + ']');
        });
        res.jData.rank.forEach(function(val, idx) {
            if (val === false || val > 29) {
                $('#myRank' + (idx + 1)).text('未上榜');
            } else {
                $('#myRank' + (idx + 1)).text(val + 1);
            }
        });
        amsSubmit(251917, 600633);
    },
    fFlowSubmitFailed: function(res) {
        alert(res.sMsg);
    }
};

// 登录送转会点
amsCfg_600633 = {
    iAMSActivityId: 251917, // AMS活动号
    activityId: 303008, // 模块实例号
    sNeedSubmitPopDiv: false,
    onBeginGetGiftEvent: 0,
    onGetGiftFailureEvent: function(obj) { // 抽奖失败事件
        // alert(obj.sMsg);
    },
    onGetGiftSuccessEvent: function(obj) { // 抽奖成功事件
        myTicket += 2;
        $('.my-ticket').text(myTicket);
        // LotteryManager.alert(obj.sMsg);
        $('#dia4').find('.name').text(obj.sMsg.split('：')[1]);
        TGDialogS('dia4');
    }
};

// 精选抽1次
amsCfg_600639 = {
    iAMSActivityId: 251917, // AMS活动号
    activityId: 303008, // 模块实例号
    sNeedSubmitPopDiv: true,
    onBeginGetGiftEvent: 0,
    onGetGiftFailureEvent: function(obj) { // 抽奖失败事件
        alert(obj.sMsg);
    },
    onGetGiftSuccessEvent: function(obj) { // 抽奖成功事件
        myTicket -= 1;
        if (myTicket <= 0) myTicket = 0;
        $('.my-ticket').text(myTicket);
        // LotteryManager.alert(obj.sMsg);
        $('#dia3').find('.name').text(obj.sMsg.split('：')[1]);
        $('#dia3').find('.btn-cjone').attr('href', 'javascript:showDialog.hide();amsSubmit(251917, 600639);');
        TGDialogS('dia3');
        amsCfg_600657.sNeedSubmitPopDiv = false;
        amsSubmit(251917, 600657);
    }
};

// 精英抽1次
amsCfg_600640 = {
    iAMSActivityId: 251917, // AMS活动号
    activityId: 303008, // 模块实例号
    sNeedSubmitPopDiv: true,
    onBeginGetGiftEvent: 0,
    onGetGiftFailureEvent: function(obj) { // 抽奖失败事件
        alert(obj.sMsg);
    },
    onGetGiftSuccessEvent: function(obj) { // 抽奖成功事件
        myTicket -= 10;
        if (myTicket <= 0) myTicket = 0;
        $('.my-ticket').text(myTicket);
        // LotteryManager.alert(obj.sMsg);
        $('#dia3').find('.name').text(obj.sMsg.split('：')[1]);
        $('#dia3').find('.btn-cjone').attr('href', 'javascript:showDialog.hide();amsSubmit(251917, 600640);');
        TGDialogS('dia3');
        amsCfg_600657.sNeedSubmitPopDiv = false;
        amsSubmit(251917, 600657);
    }
};

// 精英抽10次
amsCfg_600641 = {
    iAMSActivityId: 251917, // AMS活动号
    activityId: 303008, // 模块实例号
    sNeedSubmitPopDiv: true,
    onBeginGetGiftEvent: 0,
    onGetGiftFailureEvent: function(obj) { // 抽奖失败事件
        alert(obj.sMsg);
    },
    onGetGiftSuccessEvent: function(obj) { // 抽奖成功事件
        myTicket -= 100;
        if (myTicket <= 0) myTicket = 0;
        $('.my-ticket').text(myTicket);
        // LotteryManager.alert(obj.sMsg);
        $('#dia2').find('.items').html(obj.sMsg.split('：')[1].split(',').map(function(val) {
            return '<p>' + val + '</p>';
        }).join(''));
        $('#dia2').find('.btn-cjten').attr('href', 'javascript:showDialog.hide();amsSubmit(251917, 600641);');
        TGDialogS('dia2');
        amsCfg_600657.sNeedSubmitPopDiv = false;
        amsSubmit(251917, 600657);
    }
};

// 传奇抽1次
amsCfg_600642 = {
    iAMSActivityId: 251917, // AMS活动号
    activityId: 303008, // 模块实例号
    sNeedSubmitPopDiv: true,
    onBeginGetGiftEvent: 0,
    onGetGiftFailureEvent: function(obj) { // 抽奖失败事件
        alert(obj.sMsg);
    },
    onGetGiftSuccessEvent: function(obj) { // 抽奖成功事件
        myTicket -= 50;
        if (myTicket <= 0) myTicket = 0;
        $('.my-ticket').text(myTicket);
        // LotteryManager.alert(obj.sMsg);
        $('#dia3').find('.name').text(obj.sMsg.split('：')[1]);
        $('#dia3').find('.btn-cjone').attr('href', 'javascript:showDialog.hide();amsSubmit(251917, 600642);');
        TGDialogS('dia3');
        amsCfg_600657.sNeedSubmitPopDiv = false;
        amsSubmit(251917, 600657);
    }
};

// 传奇抽10次
amsCfg_600643 = {
    iAMSActivityId: 251917, // AMS活动号
    activityId: 303008, // 模块实例号
    sNeedSubmitPopDiv: true,
    onBeginGetGiftEvent: 0,
    onGetGiftFailureEvent: function(obj) { // 抽奖失败事件
        alert(obj.sMsg);
    },
    onGetGiftSuccessEvent: function(obj) { // 抽奖成功事件
        myTicket -= 500;
        if (myTicket <= 0) myTicket = 0;
        $('.my-ticket').text(myTicket);
        // LotteryManager.alert(obj.sMsg);
        $('#dia2').find('.items').html(obj.sMsg.split('：')[1].split(',').map(function(val) {
            return '<p>' + val + '</p>';
        }).join(''));
        $('#dia2').find('.btn-cjten').attr('href', 'javascript:showDialog.hide();amsSubmit(251917, 600643);');
        TGDialogS('dia2');
        amsCfg_600657.sNeedSubmitPopDiv = false;
        amsSubmit(251917, 600657);
    }
};

// 满赠99领取
amsCfg_600644 = {
    iAMSActivityId: 251917, // AMS活动号
    activityId: 303008, // 模块实例号
    sNeedSubmitPopDiv: true,
    onBeginGetGiftEvent: 0,
    onGetGiftFailureEvent: function(obj) { // 抽奖失败事件
        alert(obj.sMsg);
    },
    onGetGiftSuccessEvent: function(obj) { // 抽奖成功事件
        myHolds[0] += 1;
        updatePoint();
        // LotteryManager.alert(obj.sMsg);
        $('#dia4').find('.name').text(obj.sMsg.split('：')[1]);
        TGDialogS('dia4');
    }
};

// 满赠299领取
amsCfg_600645 = {
    iAMSActivityId: 251917, // AMS活动号
    activityId: 303008, // 模块实例号
    sNeedSubmitPopDiv: true,
    onBeginGetGiftEvent: 0,
    onGetGiftFailureEvent: function(obj) { // 抽奖失败事件
        alert(obj.sMsg);
    },
    onGetGiftSuccessEvent: function(obj) { // 抽奖成功事件
        myHolds[1] += 1;
        updatePoint();
        // LotteryManager.alert(obj.sMsg);
        $('#dia4').find('.name').text(obj.sMsg.split('：')[1]);
        TGDialogS('dia4');
    }
};

// 满赠799领取
amsCfg_600646 = {
    iAMSActivityId: 251917, // AMS活动号
    activityId: 303008, // 模块实例号
    sNeedSubmitPopDiv: true,
    onBeginGetGiftEvent: 0,
    onGetGiftFailureEvent: function(obj) { // 抽奖失败事件
        alert(obj.sMsg);
    },
    onGetGiftSuccessEvent: function(obj) { // 抽奖成功事件
        myHolds[2] += 1;
        updatePoint();
        // LotteryManager.alert(obj.sMsg);
        $('#dia4').find('.name').text(obj.sMsg.split('：')[1]);
        TGDialogS('dia4');
    }
};

// 满赠1499领取
amsCfg_600647 = {
    iAMSActivityId: 251917, // AMS活动号
    activityId: 303008, // 模块实例号
    sNeedSubmitPopDiv: true,
    onBeginGetGiftEvent: 0,
    onGetGiftFailureEvent: function(obj) { // 抽奖失败事件
        alert(obj.sMsg);
    },
    onGetGiftSuccessEvent: function(obj) { // 抽奖成功事件
        myHolds[3] += 1;
        updatePoint();
        // LotteryManager.alert(obj.sMsg);
        $('#dia4').find('.name').text(obj.sMsg.split('：')[1]);
        TGDialogS('dia4');
    }
};

// 满赠4999领取
amsCfg_600648 = {
    iAMSActivityId: 251917, // AMS活动号
    activityId: 303008, // 模块实例号
    sNeedSubmitPopDiv: true,
    onBeginGetGiftEvent: 0,
    onGetGiftFailureEvent: function(obj) { // 抽奖失败事件
        alert(obj.sMsg);
    },
    onGetGiftSuccessEvent: function(obj) { // 抽奖成功事件
        myHolds[4] += 1;
        myCycle += 1;
        myPoint -= 4999;
        if (myPoint <= 0) myPoint = 0;
        $('.my-point').text(myPoint);
        updatePoint();
        // LotteryManager.alert(obj.sMsg);
        $('#dia4').find('.name').text(obj.sMsg.split('：')[1]);
        TGDialogS('dia4');
    }
};

// 第1名
amsCfg_600649 = {
    iAMSActivityId: 251917, // AMS活动号
    activityId: 303008, // 模块实例号
    sNeedSubmitPopDiv: true,
    onBeginGetGiftEvent: 0,
    onGetGiftFailureEvent: function(obj) { // 抽奖失败事件
        alert(obj.sMsg);
    },
    onGetGiftSuccessEvent: function(obj) { // 抽奖成功事件
        // LotteryManager.alert(obj.sMsg);
        $('#dia4').find('.name').text(obj.sMsg.split('：')[1]);
        TGDialogS('dia4');
    }
};

// 第2名
amsCfg_600650 = {
    iAMSActivityId: 251917, // AMS活动号
    activityId: 303008, // 模块实例号
    sNeedSubmitPopDiv: true,
    onBeginGetGiftEvent: 0,
    onGetGiftFailureEvent: function(obj) { // 抽奖失败事件
        alert(obj.sMsg);
    },
    onGetGiftSuccessEvent: function(obj) { // 抽奖成功事件
        // LotteryManager.alert(obj.sMsg);
        $('#dia4').find('.name').text(obj.sMsg.split('：')[1]);
        TGDialogS('dia4');
    }
};

// 第3名
amsCfg_600651 = {
    iAMSActivityId: 251917, // AMS活动号
    activityId: 303008, // 模块实例号
    sNeedSubmitPopDiv: true,
    onBeginGetGiftEvent: 0,
    onGetGiftFailureEvent: function(obj) { // 抽奖失败事件
        alert(obj.sMsg);
    },
    onGetGiftSuccessEvent: function(obj) { // 抽奖成功事件
        // LotteryManager.alert(obj.sMsg);
        $('#dia4').find('.name').text(obj.sMsg.split('：')[1]);
        TGDialogS('dia4');
    }
};

// 4-30名
amsCfg_600652 = {
    iAMSActivityId: 251917, // AMS活动号
    activityId: 303008, // 模块实例号
    sNeedSubmitPopDiv: true,
    onBeginGetGiftEvent: 0,
    onGetGiftFailureEvent: function(obj) { // 抽奖失败事件
        alert(obj.sMsg);
    },
    onGetGiftSuccessEvent: function(obj) { // 抽奖成功事件
        // LotteryManager.alert(obj.sMsg);
        $('#dia4').find('.name').text(obj.sMsg.split('：')[1]);
        TGDialogS('dia4');
    }
};

milo.ready(function() {
    // 查询绑定大区
    amsInit(251917, 600632);

    need(['biz.login'], function(LoginManager) {
        LoginManager.checkLogin(function() {
            console.log('login');
        }, function() {
            console.log('not login');
        });
    });

    $('#btn_qqlogin').click(function() {
        need('biz.login', function(LoginManager) {
            LoginManager.login();
        });
    });

    $('#btn_logout').click(function() {
		need('biz.login', function(LoginManager) {
			LoginManager.logout();
		});
	});
});

// 0.1QB
amsCfg_600638 = {
    'iActivityId': '251917',
    'iFlowId': '600638',
    'fFlowSubmitEnd': function(res) {
        need(["ams.daoju_buy_v2.daoju_buy_v2"], function(DaojuBuy) {
            var option = {
                //apptype:4	新版webpay，已默认
                onPaySuccess: function() {
                    setTimeout(function() {
                        myTicket += 1;
                        myPoint += 1;
                        myTPoint += 1;
                        $('.my-ticket').text(myTicket);
                        $('.my-point').text(myPoint);
                        $('.my-tpoint').text(myTPoint);
                    }, 1500);
                }, //支付成功后回调方法
                //onPayClose:function(){}//关闭支付页面回调方法
            };
            DaojuBuy.pay(res.jData, option);
        });
    },
    'fFlowSubmitFailed': function(res) {
        alert(res.sMsg);
    }
};
milo.ready(function() {
    need(["ams.daoju_buy_v2.appid"], function(autoappid) {
        autoappid.init('fo4', 13431, function(final_appid) {
            //final_appid为自动判断得到的道聚城渠道号
            //本段代码内自动进行道聚城全流程数据的收集，必须保留并放到milo.ready内，除非自行在页面上进行基于道聚城活动号的eas曝光上报
        });
    });
});

// 1QB
amsCfg_600653 = {
    'iActivityId': '251917',
    'iFlowId': '600653',
    'fFlowSubmitEnd': function(res) {
        need(["ams.daoju_buy_v2.daoju_buy_v2"], function(DaojuBuy) {
            var option = {
                //apptype:4	新版webpay，已默认
                onPaySuccess: function() {
                    setTimeout(function() {
                        myTicket += 1;
                        myPoint += 1;
                        myTPoint += 1;
                        $('.my-ticket').text(myTicket);
                        $('.my-point').text(myPoint);
                        $('.my-tpoint').text(myTPoint);
                    }, 1500);
                }, //支付成功后回调方法
                //onPayClose:function(){}//关闭支付页面回调方法
            };
            DaojuBuy.pay(res.jData, option);
        });
    },
    'fFlowSubmitFailed': function(res) {
        alert(res.sMsg);
    }
};
milo.ready(function() {
    need(["ams.daoju_buy_v2.appid"], function(autoappid) {
        autoappid.init('fo4', 13431, function(final_appid) {
            //final_appid为自动判断得到的道聚城渠道号
            //本段代码内自动进行道聚城全流程数据的收集，必须保留并放到milo.ready内，除非自行在页面上进行基于道聚城活动号的eas曝光上报
        });
    });
});

// 10QB
amsCfg_600654 = {
    'iActivityId': '251917',
    'iFlowId': '600654',
    'fFlowSubmitEnd': function(res) {
        need(["ams.daoju_buy_v2.daoju_buy_v2"], function(DaojuBuy) {
            var option = {
                //apptype:4	新版webpay，已默认
                onPaySuccess: function() {
                    setTimeout(function() {
                        myTicket += 10;
                        myPoint += 10;
                        myTPoint += 10;
                        $('.my-ticket').text(myTicket);
                        $('.my-point').text(myPoint);
                        $('.my-tpoint').text(myTPoint);
                    }, 1500);
                }, //支付成功后回调方法
                //onPayClose:function(){}//关闭支付页面回调方法
            };
            DaojuBuy.pay(res.jData, option);
        });
    },
    'fFlowSubmitFailed': function(res) {
        alert(res.sMsg);
    }
};
milo.ready(function() {
    need(["ams.daoju_buy_v2.appid"], function(autoappid) {
        autoappid.init('fo4', 13431, function(final_appid) {
            //final_appid为自动判断得到的道聚城渠道号
            //本段代码内自动进行道聚城全流程数据的收集，必须保留并放到milo.ready内，除非自行在页面上进行基于道聚城活动号的eas曝光上报
        });
    });
});

// 100QB
amsCfg_600655 = {
    'iActivityId': '251917',
    'iFlowId': '600655',
    'fFlowSubmitEnd': function(res) {
        need(["ams.daoju_buy_v2.daoju_buy_v2"], function(DaojuBuy) {
            var option = {
                //apptype:4	新版webpay，已默认
                onPaySuccess: function() {
                    setTimeout(function() {
                        myTicket += 110;
                        myPoint += 110;
                        myTPoint += 110;
                        $('.my-ticket').text(myTicket);
                        $('.my-point').text(myPoint);
                        $('.my-tpoint').text(myTPoint);
                    }, 1500);
                }, //支付成功后回调方法
                //onPayClose:function(){}//关闭支付页面回调方法
            };
            DaojuBuy.pay(res.jData, option);
        });
    },
    'fFlowSubmitFailed': function(res) {
        alert(res.sMsg);
    }
};
milo.ready(function() {
    need(["ams.daoju_buy_v2.appid"], function(autoappid) {
        autoappid.init('fo4', 13431, function(final_appid) {
            //final_appid为自动判断得到的道聚城渠道号
            //本段代码内自动进行道聚城全流程数据的收集，必须保留并放到milo.ready内，除非自行在页面上进行基于道聚城活动号的eas曝光上报
        });
    });
});

// 500QB
amsCfg_600656 = {
    'iActivityId': '251917',
    'iFlowId': '600656',
    'fFlowSubmitEnd': function(res) {
        need(["ams.daoju_buy_v2.daoju_buy_v2"], function(DaojuBuy) {
            var option = {
                //apptype:4	新版webpay，已默认
                onPaySuccess: function() {
                    setTimeout(function() {
                        myTicket += 550;
                        myPoint += 550;
                        myTPoint += 550;
                        $('.my-ticket').text(myTicket);
                        $('.my-point').text(myPoint);
                        $('.my-tpoint').text(myTPoint);
                    }, 1500);
                }, //支付成功后回调方法
                //onPayClose:function(){}//关闭支付页面回调方法
            };
            DaojuBuy.pay(res.jData, option);
        });
    },
    'fFlowSubmitFailed': function(res) {
        alert(res.sMsg);
    }
};
milo.ready(function() {
    need(["ams.daoju_buy_v2.appid"], function(autoappid) {
        autoappid.init('fo4', 13431, function(final_appid) {
            //final_appid为自动判断得到的道聚城渠道号
            //本段代码内自动进行道聚城全流程数据的收集，必须保留并放到milo.ready内，除非自行在页面上进行基于道聚城活动号的eas曝光上报
        });
    });
});

function updatePoint() {
    $('.mz-btn').removeClass('on').text('领取');
    if (myPoint >= 4999) {
        for (var i = 0; i < 5; i++) {
            if (myHolds[i] >= myCycle + 1) {
                $('.mz-btn').eq(i).addClass('on').text('已领取');
            } else {
                $('.mz-btn').eq(i).removeClass('on').text('领取');
            }
        }
    } else if (myPoint >= 1499 && myPoint < 4999) {
        for (var i = 0; i < 4; i++) {
            if (myHolds[i] >= myCycle + 1) {
                $('.mz-btn').eq(i).addClass('on').text('已领取');
            } else {
                $('.mz-btn').eq(i).removeClass('on').text('领取');
            }
        }
    } else if (myPoint >= 799 && myPoint < 1499) {
        for (var i = 0; i < 3; i++) {
            if (myHolds[i] >= myCycle + 1) {
                $('.mz-btn').eq(i).addClass('on').text('已领取');
            } else {
                $('.mz-btn').eq(i).removeClass('on').text('领取');
            }
        }
    } else if (myPoint >= 299 && myPoint < 799) {
        for (var i = 0; i < 2; i++) {
            if (myHolds[i] >= myCycle + 1) {
                $('.mz-btn').eq(i).addClass('on').text('已领取');
            } else {
                $('.mz-btn').eq(i).removeClass('on').text('领取');
            }
        }
    } else if (myPoint >= 99 && myPoint < 299) {
        for (var i = 0; i < 1; i++) {
            if (myHolds[i] >= myCycle + 1) {
                $('.mz-btn').eq(i).addClass('on').text('已领取');
            } else {
                $('.mz-btn').eq(i).removeClass('on').text('领取');
            }
        }
    }
}
