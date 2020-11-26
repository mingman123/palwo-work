var myTicket = 0;
var myPoint = 0;
var myTPoint = 0;
var myCycle = 0;
var myHolds = [0, 0, 0, 0, 0];

// ��ѯ�󶨴���
amsCfg_600632 = {
    type: 'query',
    iQueryFlowID: 600632,
    service: 'fo4',
    success: function(bindedInfo) {
        // ��ʼ��ҳ��
        amsSubmit(251917, 600657);
    },
    failure: function() {}
};

// �ύ�󶨵�����
amsCfg_600631 = {
    type: 'comit',
    needPopupRole: true, // �Ƿ�Ĭ�Ͻ�ɫ��ѡ��ɫ
    roleInfo: null, // ���needPopupRoleΪfalse����Ҫ�Զ��崫���ɫ��Ϣ��roleInfo��Ҫ����ɫ��Ϣ����
    iQueryFlowID: 600632,
    service: 'fo4',
    success: function(bindedInfo) {
        // ��ʼ��ҳ��
        amsSubmit(251917, 600657);
    },
    failure: function() {}
};

// ���˻񽱼�¼��ʼ��
amsCfg_600634 = {
	'iAMSActivityId' : '251917', // AMS���
	'iLotteryFlowId' : '600634', //  ��ѯ���ֲ������̺�
	'activityId' : '303008', // ģ��ʵ����
	'contentId' : 'getGiftContent_600634', //����ID
	'templateId' : 'getGiftTemplate_600634', //ģ��ID
	'contentPageId' : 'getGiftPageContent_600634',	//��ҳ����ID
	'showContentId' : 'showMyGiftContent_600634' //������ID
};

// ��ʼ��ҳ��
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
            $('.rank-ticket').eq(idx).text('���֣�' + obj.ticket);
            $('.rank-qq').eq(idx).text('[QQ: ' + obj.qq + ']');
        });
        res.jData.rank.forEach(function(val, idx) {
            if (val === false || val > 29) {
                $('#myRank' + (idx + 1)).text('δ�ϰ�');
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

// ��¼��ת���
amsCfg_600633 = {
    iAMSActivityId: 251917, // AMS���
    activityId: 303008, // ģ��ʵ����
    sNeedSubmitPopDiv: false,
    onBeginGetGiftEvent: 0,
    onGetGiftFailureEvent: function(obj) { // �齱ʧ���¼�
        // alert(obj.sMsg);
    },
    onGetGiftSuccessEvent: function(obj) { // �齱�ɹ��¼�
        myTicket += 2;
        $('.my-ticket').text(myTicket);
        // LotteryManager.alert(obj.sMsg);
        $('#dia4').find('.name').text(obj.sMsg.split('��')[1]);
        TGDialogS('dia4');
    }
};

// ��ѡ��1��
amsCfg_600639 = {
    iAMSActivityId: 251917, // AMS���
    activityId: 303008, // ģ��ʵ����
    sNeedSubmitPopDiv: true,
    onBeginGetGiftEvent: 0,
    onGetGiftFailureEvent: function(obj) { // �齱ʧ���¼�
        alert(obj.sMsg);
    },
    onGetGiftSuccessEvent: function(obj) { // �齱�ɹ��¼�
        myTicket -= 1;
        if (myTicket <= 0) myTicket = 0;
        $('.my-ticket').text(myTicket);
        // LotteryManager.alert(obj.sMsg);
        $('#dia3').find('.name').text(obj.sMsg.split('��')[1]);
        $('#dia3').find('.btn-cjone').attr('href', 'javascript:showDialog.hide();amsSubmit(251917, 600639);');
        TGDialogS('dia3');
        amsCfg_600657.sNeedSubmitPopDiv = false;
        amsSubmit(251917, 600657);
    }
};

// ��Ӣ��1��
amsCfg_600640 = {
    iAMSActivityId: 251917, // AMS���
    activityId: 303008, // ģ��ʵ����
    sNeedSubmitPopDiv: true,
    onBeginGetGiftEvent: 0,
    onGetGiftFailureEvent: function(obj) { // �齱ʧ���¼�
        alert(obj.sMsg);
    },
    onGetGiftSuccessEvent: function(obj) { // �齱�ɹ��¼�
        myTicket -= 10;
        if (myTicket <= 0) myTicket = 0;
        $('.my-ticket').text(myTicket);
        // LotteryManager.alert(obj.sMsg);
        $('#dia3').find('.name').text(obj.sMsg.split('��')[1]);
        $('#dia3').find('.btn-cjone').attr('href', 'javascript:showDialog.hide();amsSubmit(251917, 600640);');
        TGDialogS('dia3');
        amsCfg_600657.sNeedSubmitPopDiv = false;
        amsSubmit(251917, 600657);
    }
};

// ��Ӣ��10��
amsCfg_600641 = {
    iAMSActivityId: 251917, // AMS���
    activityId: 303008, // ģ��ʵ����
    sNeedSubmitPopDiv: true,
    onBeginGetGiftEvent: 0,
    onGetGiftFailureEvent: function(obj) { // �齱ʧ���¼�
        alert(obj.sMsg);
    },
    onGetGiftSuccessEvent: function(obj) { // �齱�ɹ��¼�
        myTicket -= 100;
        if (myTicket <= 0) myTicket = 0;
        $('.my-ticket').text(myTicket);
        // LotteryManager.alert(obj.sMsg);
        $('#dia2').find('.items').html(obj.sMsg.split('��')[1].split(',').map(function(val) {
            return '<p>' + val + '</p>';
        }).join(''));
        $('#dia2').find('.btn-cjten').attr('href', 'javascript:showDialog.hide();amsSubmit(251917, 600641);');
        TGDialogS('dia2');
        amsCfg_600657.sNeedSubmitPopDiv = false;
        amsSubmit(251917, 600657);
    }
};

// �����1��
amsCfg_600642 = {
    iAMSActivityId: 251917, // AMS���
    activityId: 303008, // ģ��ʵ����
    sNeedSubmitPopDiv: true,
    onBeginGetGiftEvent: 0,
    onGetGiftFailureEvent: function(obj) { // �齱ʧ���¼�
        alert(obj.sMsg);
    },
    onGetGiftSuccessEvent: function(obj) { // �齱�ɹ��¼�
        myTicket -= 50;
        if (myTicket <= 0) myTicket = 0;
        $('.my-ticket').text(myTicket);
        // LotteryManager.alert(obj.sMsg);
        $('#dia3').find('.name').text(obj.sMsg.split('��')[1]);
        $('#dia3').find('.btn-cjone').attr('href', 'javascript:showDialog.hide();amsSubmit(251917, 600642);');
        TGDialogS('dia3');
        amsCfg_600657.sNeedSubmitPopDiv = false;
        amsSubmit(251917, 600657);
    }
};

// �����10��
amsCfg_600643 = {
    iAMSActivityId: 251917, // AMS���
    activityId: 303008, // ģ��ʵ����
    sNeedSubmitPopDiv: true,
    onBeginGetGiftEvent: 0,
    onGetGiftFailureEvent: function(obj) { // �齱ʧ���¼�
        alert(obj.sMsg);
    },
    onGetGiftSuccessEvent: function(obj) { // �齱�ɹ��¼�
        myTicket -= 500;
        if (myTicket <= 0) myTicket = 0;
        $('.my-ticket').text(myTicket);
        // LotteryManager.alert(obj.sMsg);
        $('#dia2').find('.items').html(obj.sMsg.split('��')[1].split(',').map(function(val) {
            return '<p>' + val + '</p>';
        }).join(''));
        $('#dia2').find('.btn-cjten').attr('href', 'javascript:showDialog.hide();amsSubmit(251917, 600643);');
        TGDialogS('dia2');
        amsCfg_600657.sNeedSubmitPopDiv = false;
        amsSubmit(251917, 600657);
    }
};

// ����99��ȡ
amsCfg_600644 = {
    iAMSActivityId: 251917, // AMS���
    activityId: 303008, // ģ��ʵ����
    sNeedSubmitPopDiv: true,
    onBeginGetGiftEvent: 0,
    onGetGiftFailureEvent: function(obj) { // �齱ʧ���¼�
        alert(obj.sMsg);
    },
    onGetGiftSuccessEvent: function(obj) { // �齱�ɹ��¼�
        myHolds[0] += 1;
        updatePoint();
        // LotteryManager.alert(obj.sMsg);
        $('#dia4').find('.name').text(obj.sMsg.split('��')[1]);
        TGDialogS('dia4');
    }
};

// ����299��ȡ
amsCfg_600645 = {
    iAMSActivityId: 251917, // AMS���
    activityId: 303008, // ģ��ʵ����
    sNeedSubmitPopDiv: true,
    onBeginGetGiftEvent: 0,
    onGetGiftFailureEvent: function(obj) { // �齱ʧ���¼�
        alert(obj.sMsg);
    },
    onGetGiftSuccessEvent: function(obj) { // �齱�ɹ��¼�
        myHolds[1] += 1;
        updatePoint();
        // LotteryManager.alert(obj.sMsg);
        $('#dia4').find('.name').text(obj.sMsg.split('��')[1]);
        TGDialogS('dia4');
    }
};

// ����799��ȡ
amsCfg_600646 = {
    iAMSActivityId: 251917, // AMS���
    activityId: 303008, // ģ��ʵ����
    sNeedSubmitPopDiv: true,
    onBeginGetGiftEvent: 0,
    onGetGiftFailureEvent: function(obj) { // �齱ʧ���¼�
        alert(obj.sMsg);
    },
    onGetGiftSuccessEvent: function(obj) { // �齱�ɹ��¼�
        myHolds[2] += 1;
        updatePoint();
        // LotteryManager.alert(obj.sMsg);
        $('#dia4').find('.name').text(obj.sMsg.split('��')[1]);
        TGDialogS('dia4');
    }
};

// ����1499��ȡ
amsCfg_600647 = {
    iAMSActivityId: 251917, // AMS���
    activityId: 303008, // ģ��ʵ����
    sNeedSubmitPopDiv: true,
    onBeginGetGiftEvent: 0,
    onGetGiftFailureEvent: function(obj) { // �齱ʧ���¼�
        alert(obj.sMsg);
    },
    onGetGiftSuccessEvent: function(obj) { // �齱�ɹ��¼�
        myHolds[3] += 1;
        updatePoint();
        // LotteryManager.alert(obj.sMsg);
        $('#dia4').find('.name').text(obj.sMsg.split('��')[1]);
        TGDialogS('dia4');
    }
};

// ����4999��ȡ
amsCfg_600648 = {
    iAMSActivityId: 251917, // AMS���
    activityId: 303008, // ģ��ʵ����
    sNeedSubmitPopDiv: true,
    onBeginGetGiftEvent: 0,
    onGetGiftFailureEvent: function(obj) { // �齱ʧ���¼�
        alert(obj.sMsg);
    },
    onGetGiftSuccessEvent: function(obj) { // �齱�ɹ��¼�
        myHolds[4] += 1;
        myCycle += 1;
        myPoint -= 4999;
        if (myPoint <= 0) myPoint = 0;
        $('.my-point').text(myPoint);
        updatePoint();
        // LotteryManager.alert(obj.sMsg);
        $('#dia4').find('.name').text(obj.sMsg.split('��')[1]);
        TGDialogS('dia4');
    }
};

// ��1��
amsCfg_600649 = {
    iAMSActivityId: 251917, // AMS���
    activityId: 303008, // ģ��ʵ����
    sNeedSubmitPopDiv: true,
    onBeginGetGiftEvent: 0,
    onGetGiftFailureEvent: function(obj) { // �齱ʧ���¼�
        alert(obj.sMsg);
    },
    onGetGiftSuccessEvent: function(obj) { // �齱�ɹ��¼�
        // LotteryManager.alert(obj.sMsg);
        $('#dia4').find('.name').text(obj.sMsg.split('��')[1]);
        TGDialogS('dia4');
    }
};

// ��2��
amsCfg_600650 = {
    iAMSActivityId: 251917, // AMS���
    activityId: 303008, // ģ��ʵ����
    sNeedSubmitPopDiv: true,
    onBeginGetGiftEvent: 0,
    onGetGiftFailureEvent: function(obj) { // �齱ʧ���¼�
        alert(obj.sMsg);
    },
    onGetGiftSuccessEvent: function(obj) { // �齱�ɹ��¼�
        // LotteryManager.alert(obj.sMsg);
        $('#dia4').find('.name').text(obj.sMsg.split('��')[1]);
        TGDialogS('dia4');
    }
};

// ��3��
amsCfg_600651 = {
    iAMSActivityId: 251917, // AMS���
    activityId: 303008, // ģ��ʵ����
    sNeedSubmitPopDiv: true,
    onBeginGetGiftEvent: 0,
    onGetGiftFailureEvent: function(obj) { // �齱ʧ���¼�
        alert(obj.sMsg);
    },
    onGetGiftSuccessEvent: function(obj) { // �齱�ɹ��¼�
        // LotteryManager.alert(obj.sMsg);
        $('#dia4').find('.name').text(obj.sMsg.split('��')[1]);
        TGDialogS('dia4');
    }
};

// 4-30��
amsCfg_600652 = {
    iAMSActivityId: 251917, // AMS���
    activityId: 303008, // ģ��ʵ����
    sNeedSubmitPopDiv: true,
    onBeginGetGiftEvent: 0,
    onGetGiftFailureEvent: function(obj) { // �齱ʧ���¼�
        alert(obj.sMsg);
    },
    onGetGiftSuccessEvent: function(obj) { // �齱�ɹ��¼�
        // LotteryManager.alert(obj.sMsg);
        $('#dia4').find('.name').text(obj.sMsg.split('��')[1]);
        TGDialogS('dia4');
    }
};

milo.ready(function() {
    // ��ѯ�󶨴���
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
                //apptype:4	�°�webpay����Ĭ��
                onPaySuccess: function() {
                    setTimeout(function() {
                        myTicket += 1;
                        myPoint += 1;
                        myTPoint += 1;
                        $('.my-ticket').text(myTicket);
                        $('.my-point').text(myPoint);
                        $('.my-tpoint').text(myTPoint);
                    }, 1500);
                }, //֧���ɹ���ص�����
                //onPayClose:function(){}//�ر�֧��ҳ��ص�����
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
            //final_appidΪ�Զ��жϵõ��ĵ��۳�������
            //���δ������Զ����е��۳�ȫ�������ݵ��ռ������뱣�����ŵ�milo.ready�ڣ�����������ҳ���Ͻ��л��ڵ��۳ǻ�ŵ�eas�ع��ϱ�
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
                //apptype:4	�°�webpay����Ĭ��
                onPaySuccess: function() {
                    setTimeout(function() {
                        myTicket += 1;
                        myPoint += 1;
                        myTPoint += 1;
                        $('.my-ticket').text(myTicket);
                        $('.my-point').text(myPoint);
                        $('.my-tpoint').text(myTPoint);
                    }, 1500);
                }, //֧���ɹ���ص�����
                //onPayClose:function(){}//�ر�֧��ҳ��ص�����
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
            //final_appidΪ�Զ��жϵõ��ĵ��۳�������
            //���δ������Զ����е��۳�ȫ�������ݵ��ռ������뱣�����ŵ�milo.ready�ڣ�����������ҳ���Ͻ��л��ڵ��۳ǻ�ŵ�eas�ع��ϱ�
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
                //apptype:4	�°�webpay����Ĭ��
                onPaySuccess: function() {
                    setTimeout(function() {
                        myTicket += 10;
                        myPoint += 10;
                        myTPoint += 10;
                        $('.my-ticket').text(myTicket);
                        $('.my-point').text(myPoint);
                        $('.my-tpoint').text(myTPoint);
                    }, 1500);
                }, //֧���ɹ���ص�����
                //onPayClose:function(){}//�ر�֧��ҳ��ص�����
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
            //final_appidΪ�Զ��жϵõ��ĵ��۳�������
            //���δ������Զ����е��۳�ȫ�������ݵ��ռ������뱣�����ŵ�milo.ready�ڣ�����������ҳ���Ͻ��л��ڵ��۳ǻ�ŵ�eas�ع��ϱ�
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
                //apptype:4	�°�webpay����Ĭ��
                onPaySuccess: function() {
                    setTimeout(function() {
                        myTicket += 110;
                        myPoint += 110;
                        myTPoint += 110;
                        $('.my-ticket').text(myTicket);
                        $('.my-point').text(myPoint);
                        $('.my-tpoint').text(myTPoint);
                    }, 1500);
                }, //֧���ɹ���ص�����
                //onPayClose:function(){}//�ر�֧��ҳ��ص�����
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
            //final_appidΪ�Զ��жϵõ��ĵ��۳�������
            //���δ������Զ����е��۳�ȫ�������ݵ��ռ������뱣�����ŵ�milo.ready�ڣ�����������ҳ���Ͻ��л��ڵ��۳ǻ�ŵ�eas�ع��ϱ�
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
                //apptype:4	�°�webpay����Ĭ��
                onPaySuccess: function() {
                    setTimeout(function() {
                        myTicket += 550;
                        myPoint += 550;
                        myTPoint += 550;
                        $('.my-ticket').text(myTicket);
                        $('.my-point').text(myPoint);
                        $('.my-tpoint').text(myTPoint);
                    }, 1500);
                }, //֧���ɹ���ص�����
                //onPayClose:function(){}//�ر�֧��ҳ��ص�����
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
            //final_appidΪ�Զ��жϵõ��ĵ��۳�������
            //���δ������Զ����е��۳�ȫ�������ݵ��ռ������뱣�����ŵ�milo.ready�ڣ�����������ҳ���Ͻ��л��ڵ��۳ǻ�ŵ�eas�ع��ϱ�
        });
    });
});

function updatePoint() {
    $('.mz-btn').removeClass('on').text('��ȡ');
    if (myPoint >= 4999) {
        for (var i = 0; i < 5; i++) {
            if (myHolds[i] >= myCycle + 1) {
                $('.mz-btn').eq(i).addClass('on').text('����ȡ');
            } else {
                $('.mz-btn').eq(i).removeClass('on').text('��ȡ');
            }
        }
    } else if (myPoint >= 1499 && myPoint < 4999) {
        for (var i = 0; i < 4; i++) {
            if (myHolds[i] >= myCycle + 1) {
                $('.mz-btn').eq(i).addClass('on').text('����ȡ');
            } else {
                $('.mz-btn').eq(i).removeClass('on').text('��ȡ');
            }
        }
    } else if (myPoint >= 799 && myPoint < 1499) {
        for (var i = 0; i < 3; i++) {
            if (myHolds[i] >= myCycle + 1) {
                $('.mz-btn').eq(i).addClass('on').text('����ȡ');
            } else {
                $('.mz-btn').eq(i).removeClass('on').text('��ȡ');
            }
        }
    } else if (myPoint >= 299 && myPoint < 799) {
        for (var i = 0; i < 2; i++) {
            if (myHolds[i] >= myCycle + 1) {
                $('.mz-btn').eq(i).addClass('on').text('����ȡ');
            } else {
                $('.mz-btn').eq(i).removeClass('on').text('��ȡ');
            }
        }
    } else if (myPoint >= 99 && myPoint < 299) {
        for (var i = 0; i < 1; i++) {
            if (myHolds[i] >= myCycle + 1) {
                $('.mz-btn').eq(i).addClass('on').text('����ȡ');
            } else {
                $('.mz-btn').eq(i).removeClass('on').text('��ȡ');
            }
        }
    }
}
