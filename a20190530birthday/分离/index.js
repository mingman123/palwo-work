// logo定位
//function setLogoPos(){
//  if($(window).width()>1000){
//      var strLeft1 = -(($(window).width()-1000)/2-30)+"px";
//      var strLeft2 = -(($(window).width()-1000)/2-340)+"px";
//      $(".logo").css({left:strLeft1})
//      $(".logo-djc").css({left:strLeft2})
//  }else{
//      $(".logo").css({left:"30px"})
//      $(".logo-djc").css({left:"340px"})
//  }
//}
//$(window).ready(function(){setLogoPos()});
//$(window).resize(function(){setLogoPos()});


milo.ready(function () {
    need("daoju.mo", function (mo) {
        //是否H5页面
        mo.isH5 = location.host == "app.daoju.qq.com" ? true : false;
        mo({
            type: "pc,h5", //活动类型，pt登录"pc,h5"，openid登录"qq,wx"，手游内嵌活动"gamein"
            biz: "fifa", //业务
            iActivityId: "163021", //AMS活动号
            iQueryFlowId: "502150", //查询大区流程号
            iSubmitFlowId: "502149", //绑定大区流程号
            callback: function (bindedInfo, LoginManager) {
                //绑定大区成功
                //D.mo.bindInfo对应绑定区服信息
                D.mo.sUin = LoginManager.getUserUin();
                D.mo.bindInfo.iSex = bindedInfo.Fsex;
                D.mo.timekey = timeString("dd") + (parseInt(timeString("hh")) < 16 ? "15" : "23"); //记录当前阶段
                w.checkRec(function (LoginManager) {
                    //玩家未点击抽取折扣
                    if (milo.cookie.get("timekey10" + D.mo.sUin) == D.mo.timekey) {
                        w.openDiscount();
                    }
                });
                //查询生日礼包已领取
                D.mo.amsSubmit2(163021, 502152, {
                    success: function (res) {
                        if (res.sOutValue1 == "1") {
                            $("#lott").addClass("btn-got").removeClass("btn-get").text("已领取");
                        }
                    }
                });
            }
        });
        //mo.appid包含eas上报
        mo.appid("fifa", "9905", function (_app_id) {
            if (_app_id != 1003 && _app_id != 1005) {
                window.alert = function (msg, callback) {
                    mo.alert(msg, callback);
                };
            } else {
                need("biz.lottery", function (LotteryManager) {
                    window.alert = function (msg, call) {
                        LotteryManager.alert(msg);
                        $("#lotteryAlertDialogCls").hide();
                        $("#lotteryAlertDialogBtn").click(function () {
                            $("#lotteryAlertDialogBtn").unbind();
                            $.isFunction(call) && call();
                        })
                    }
                });
            }
        });
        dategift();//每日惊喜礼包
    });
});

function dategift() {
    var md = parseInt(timeString("mmdd"));
    if (milo.request("test") != "") {
        md = parseInt(milo.request("test"));
    }
    var a = [1017, 1018, 1019, 1020, 1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110, 1111, 1112, 1113, 1114];
    var num = $.inArray(md, a);
    if (num == -1) return;
    var b = [4, 3, 1, 2, 7, 5, 6, 4, 7, 2, 3, 1, 7, 5, 4, 1, 3, 7, 2, 4, 1, 6, 5, 3, 1, 2, 5, 7, 6][num];
    var c = allGoods[b];
    var item = {
        sGoodsName: decodeURIComponent(c[0]),
        oldPrice: c[1],
        curPrice: c[2],
        src: c[3],
        ext1: decodeURIComponent(c[4]).replace(/\*/g, "×"),
        iSeqId: c[5],
        md: md
    };
    D.mo.template(item, "tpl2", "#dj2", function () {
        w.limit2(1, item.iSeqId);
        $(".con3 .half").click(function () {
            var $t = $(this).children(".fluid-txt").eq(0);
            if ($t.css("display") == "none") {
                $('.fluid-txt').hide();
                $t.show();
            } else {
                $t.hide();
            }
        })
    })
}

function dategift_buy(md) {
    D.mo.amsSubmit(163021, 502153, {
        type: "buy", //普通购买
        sData: {
            item: md
        },
        success: function (res) {
            $("#buy").addClass("btn-buy2on").text("已购买").attr('href', "javascript:alert('今日已购买');");
        },
        failure: function () {
            //支付关闭回调
        }
    });
}
var allGoods = [
    [],
    ["%E8%8D%A3%E8%80%805-8%E5%BC%BA%E8%B6%B3%E5%9D%9B%E8%8D%A3%E8%80%805%E5%BC%BA%E6%83%8A%E5%96%9C%E5%8C%85", "930", "279", "prop3-1.png", "%E8%8D%A3%E8%80%80%E4%BC%A0%E5%A5%87%E7%90%83%E6%98%9F5~8%E5%BC%BA%EF%BC%88%E5%90%ABUL%205%E5%BC%BA%EF%BC%89*1%2C%E8%B6%B3%E5%9D%9B%E5%A4%A7%E5%B8%88%E7%90%83%E5%91%98%E5%8C%85%EF%BC%885%E5%BC%BA%EF%BC%89*1%2C%E8%8D%A3%E8%80%80%E4%BC%A0%E5%A5%875%E5%BC%BA%EF%BC%88%E5%90%ABUL%201%E5%BC%BA%EF%BC%89*2%2C30%E4%BA%BFEP", "104183"],
    ["%E8%8D%A3%E8%80%808%E5%BC%BA%E9%97%AA%E8%80%80%E7%B2%BE%E9%80%89%E7%BB%84%E5%90%88%E6%83%8A%E5%96%9C%E5%8C%85", "3300", "990", "prop3-2.png", "%E8%8D%A3%E8%80%80%E4%BC%A0%E5%A5%87%EF%BC%888%E5%BC%BA%EF%BC%89*1%2C%E9%97%AA%E8%80%80%E9%98%B6%E6%A2%AF%E4%BC%A0%E5%A5%87%E7%90%83%E5%91%98%E5%8D%A1*1%2C%E7%B2%BE%E9%80%89%E4%BC%A0%E5%A5%87%E5%B7%A8%E6%98%9F%E5%8C%85%EF%BC%885%E5%BC%BA%EF%BC%89*1%2C20Lv%E7%BB%8F%E9%AA%8C%E5%8D%A1*3", "104184"],
    ["%E8%B6%B3%E5%9D%9B%E5%A4%A7%E5%B8%887%E5%BC%BA%E7%BB%84%E5%90%88%E9%AB%98%E7%BA%A7%E9%98%B6%E6%A2%AF%E6%83%8A%E5%96%9C%E5%8C%85", "1650", "495", "prop3-3.png", "%E8%B6%B3%E5%9D%9B%E5%A4%A7%E5%B8%88%EF%BC%887%E5%BC%BA%EF%BC%89*1%2C%E8%B6%B3%E5%9D%9B%E5%A4%A7%E5%B8%88%E7%90%83%E5%91%98%E5%8C%85%EF%BC%885%E5%BC%BA%EF%BC%89*1%2C%E9%AB%98%E7%BA%A7%E9%98%B6%E6%A2%AF%E4%BC%A0%E5%A5%87%E7%90%83%E5%91%98%E5%8D%A1*1%2C20Lv%E7%BB%8F%E9%AA%8C%E5%8D%A1*2", "104185"],
    ["%E7%BB%88%E6%9E%81%E4%BC%A0%E5%A5%876%E5%BC%BA%E8%B6%B3%E5%9D%9B%E8%8D%A3%E8%80%806%E5%BC%BA%E6%83%8A%E5%96%9C%E5%8C%85", "1588", "476", "prop3-4.png", "%E7%BB%88%E6%9E%81%E4%BC%A0%E5%A5%87%E7%90%83%E5%91%98%E5%8C%85%EF%BC%886%E5%BC%BA%EF%BC%89*1%2C%E8%B6%B3%E5%9D%9B%E5%A4%A7%E5%B8%88%EF%BC%886%E5%BC%BA%EF%BC%89*1%2C%E8%8D%A3%E8%80%80%E4%BC%A0%E5%A5%87%EF%BC%886%E5%BC%BA%EF%BC%89*1%2C20Lv%E7%BB%8F%E9%AA%8C%E5%8D%A1*3", "104186"],
    ["%E8%B5%9B%E5%AD%A3%E9%87%91%E5%8D%A1EP%E7%BB%84%E5%90%88%E6%83%8A%E5%96%9C%E5%8C%85", "988", "296", "prop3-5.png", "CC%E8%B5%9B%E5%AD%A3BEST100%E7%90%83%E5%91%98%E5%8C%85(8%E5%BC%BA)*1%2CLP%E8%B5%9B%E5%AD%A3BEST100%E7%90%83%E5%91%98%E5%8C%85(8%E5%BC%BA)*1%2CCP%E8%B5%9B%E5%AD%A3BEST100%E7%90%83%E5%91%98%E5%8C%85(8%E5%BC%BA)*1%2C20%E4%BA%BFEP", "104187"],
    ["%E7%BB%88%E6%9E%81%E4%BC%A0%E5%A5%87%E6%AC%A7%E6%B4%B2%E8%B6%B3%E5%9D%9B5%E5%BC%BA%E7%BB%84%E5%90%88%E6%83%8A%E5%96%9C%E5%8C%85", "950", "285", "prop3-6.png", "%E7%BB%88%E6%9E%81%E4%BC%A0%E5%A5%87%E5%B7%A8%E6%98%9F%E4%B8%89%E9%80%89%E4%B8%80%EF%BC%885%E5%BC%BA%EF%BC%89*1%2C%E6%AC%A7%E6%B4%B2%E6%B7%B7%E5%90%88%E4%BC%A0%E5%A5%875%E5%BC%BA%EF%BC%88%E5%90%ABUL%202%E5%BC%BA%EF%BC%89%E7%90%83%E5%91%98%E5%8C%85*1%2C%E8%B6%B3%E5%9D%9B%E5%A4%A7%E5%B8%88%E7%90%83%E5%91%98%E5%8C%85%EF%BC%885%E5%BC%BA%EF%BC%89*2%2C20Lv%E7%BB%8F%E9%AA%8C%E5%8D%A1*3", "104188"],
    ["%E8%8D%A3%E8%80%807%E5%BC%BA%E9%AB%98%E7%BA%A7%E9%98%B6%E6%A2%AF%E6%83%8A%E5%96%9C%E5%8C%85", "1098", "329", "prop3-7.png", "%E8%8D%A3%E8%80%80%E4%BC%A0%E5%A5%87%EF%BC%887%E5%BC%BA%EF%BC%89*1%2C%E8%8D%A3%E8%80%80%E4%BC%A0%E5%A5%87%EF%BC%886%E5%BC%BA%EF%BC%89*1%2C%E9%AB%98%E7%BA%A7%E9%98%B6%E6%A2%AF%E4%BC%A0%E5%A5%87%E7%90%83%E5%91%98%E5%8D%A1*1%2C20Lv%E7%BB%8F%E9%AA%8C%E5%8D%A1*3", "104189"]
];

//抽奖领取
$("#lott").click(function () {
    var $this = $(this);
    if (D.mo.onBuy()) return;
    D.mo.bind(function (bindedInfo, LoginManager) {
        if ($this.hasClass("btn-got")) {
            alert("已领取");
            return;
        }
        D.mo.amsSubmit2(163021, 502154, {
            success: function (res) {
                alert(res.sMsg.replace("礼包", ""));
                $("#lott").addClass("btn-got").removeClass("btn-get").text("已领取");
                //领取上报
                report4(680446);
            }
        });
    })
});
//抽取折扣
$("#disbtn").click(function () {
    //礼包刷新时，提醒
    var timestr = parseInt(timeString("hhMMss"));
    if ((timestr > 155950 && timestr < 160010) || timestr > 235950 || timestr < 10) {
        alert("礼包正在刷新中，请稍后重试");
        return;
    }
    if (D.mo.isopenDiscount) {
        alert("折扣已开启");
        return;
    }
    w.openDiscount();
    report2(1, 0);
});


var w = {
    openDiscount: function () {
        if (recommend2.errcode != "0") {
            alert("对不起，您不是2017年11月14日前在游戏内注册并成功创建角色的玩家，无法参与本期活动哦。");
            return;
        }
        var sItems_list = "";
        //处理数据展示在页面上
        $.each(w.allGoods, function (k, v) {
            sItems_list += v.iSeqId + "_";
            v.oldPrice = Math.floor(v.iPrice) / 100;
            v.curPrice = Math.floor(v.iPrice * v.discount / 100) / 100;
            var num = $.inArray(parseInt(v.iSeqId), [0, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409]);
            num = num < 0?"no":num;
            v.src = "prop2-" + num + ".png";
        });
        D.mo.template(w.allGoods, "tpl1", "#dj1", function () {
            //显示折扣
            $("#disbtn").html("我的折扣：" + parseFloat(w.discount / 10) + "折");
            milo.cookie.set("timekey10" + D.mo.sUin, D.mo.timekey);
            D.mo.isopenDiscount = true;
            w.init(); //初始化购买
            w.limit(1); //查询限量
            //倒计时
            // D.mo.now = undefined;
            w.nowDay = new Date(timeString("yyyy/mm/dd hh:MM:ss"));
            var hh = 23; //下一阶段是24时刷新
            if (parseInt(timeString('hh')) < 16) {
                hh = 15; //下一阶段是16时刷新
            }
            w.endDay = new Date(timeString("yyyy/mm/dd " + hh + ":59:59"));
            w.timer = setInterval(function () {
                countTime();
                w.nowDay.setSeconds(w.nowDay.getSeconds() + 1);
            }, 1000);
            if (D.mo.isH5) {
                $(".prop-ul2 li").click(function () {
                    var $t = $(this).children(".fluid-txt").eq(0);
                    if ($t.css("display") == "none") {
                        $('.fluid-txt').hide();
                        $t.show();
                    } else {
                        $t.hide();
                    }
                });
            }
        });
        //用户在活动页登录了帐号且绑定大区就上报
        if (D.mo.isReload == undefined) {
            D.mo.isReload = "isReload";
            report1(sItems_list.slice(0, -1));
        }
    },
    //判断有没有推荐数据 没有就再拉一遍推荐接口
    checkRec: function (callback) {
        D.mo.bind(function (bindedInfo, LoginManager) {
            var sUrl = location.protocol + "//apps.game.qq.com/daoju/v3/recommend/common?",
                oParams = {
                    actid: "3463",
                    iUin: D.mo.sUin,
                    sceneid: "70002",
                    jsonp_name: "recommend2" //与上报返回重名 故改为recommend2
                };
            D.mo.loadScript(sUrl, oParams, function () {
                if (recommend2.errcode != "0") {
                    alert("抱歉，系统繁忙，未获得数据。");
                    return;
                }
                w.allGoods = recommend2.data.items;
                w.discount = w.allGoods[0].discount;
                callback(LoginManager);
            });
        })
    },
    //初始化
    init: function (callback) {
        //购买
        need("daoju.hx.recorder", function (OrderManager) {
            var sItemsOrc = "70002_";
            $.each(recommend2.data.items, function (k, v) {
                sItemsOrc += v.iSeqId + "_";
            });
            sItemsOrc = sItemsOrc.substring(0, sItemsOrc.length - 1);
            var obj = {
                _biz_code: "fifa", //
                iActionId: "3463", //活动id
                act_id: "3463", //gpm活动id
                _app_id: D.mo._app_id,
                //签名参数
                llRecommendId: "",
                sSignInfo: "",
                llTimeStamp: recommend2.data.recommend_id,
                user_type: recommend2.data.iUserType,
                roleid: D.mo.bindInfo.iRole,
                scene_id: "70002", //场景id
                sItemsOrc: sItemsOrc,
                sign_areaid: D.mo.bindInfo.iZone, //针对与区分大区的精准推进活动
                areaType: 1, //默认1表示
                desc: 0, //场景id
                btn_type: 0,
                table_type: 2,
                buy_suc_table_type: 3, //上报表类型
                type: 3, //gpm类型
                curr_type: 0, //货币类型默认0，按需调整
                partition: 0,
                act_type: 2, //活动类型
                channel: 2, //gpm渠道id
                days: 30, //期限id
                _v: 'v4',
                sAttach: '{"noReport":1}',
                //支付和购买回调
                onPaySuccess: function () {
                    report3(w.item[0], w.item[1]);
                    $("#_" + w.item[0] + " a").removeClass("btn-buy").addClass("btn-bought").text("已购买").attr('href', "javascript:alert('今日已购买');");
                },
                onPayClose: null, //支付弹层关闭回调
                onBuyError: null //下单失败回调
            };
            if (D.mo._app_id == 1003) {
                obj.apptype = 4;
            }
            D.hx.recorder.init(obj);
            $.isFunction(callback) && callback();
        });
    },
    //购买礼包
    hsSubmit: function (iSeqId) {
        var timestr = parseInt(timeString("hhMMss"));
        if ((timestr > 155950 && timestr < 160010) || timestr > 235950 || timestr < 10) {
            alert("礼包正在刷新中，请稍后重试");
            return;
        }
        $.each(w.allGoods, function (k, v) {
            if (parseInt(v.iSeqId) == iSeqId) {
                $("#cfm_dialog").length > 0 && $("#cfm_dialog").remove();
                var daoju = {
                    propid: v["iSeqId"],
                    item_type: v["sSendType"],
                    item_id: v["iSeqId"],
                    discount: parseInt(v["discount"]),
                    iGoodsNum: 1, //选填默认是1
                    item_num: 1,
                    iPrice: parseInt(v["iPrice"]) * parseInt(v["discount"]) / 100,
                    sGoodsPic: v["sGoodsPic"],
                    sGoodsName: v["sGoodsName"],
                    iTradeType: 1,
                    areaid: D.mo.bindInfo.iZone,
                    lRoleId: D.mo.bindInfo.iRole, //pc的角色
                    roleid: D.mo.bindInfo.iRole, //app的角色
                    table_type: 2,
                    _ver: "v4"
                };
                w.item = [daoju.propid, daoju.iPrice];
                $("#cfm_dialog").length > 0 && $("#cfm_dialog").remove();
                D.hx.recorder.buy(daoju);
                report2(0, iSeqId);
            }
        });
    },
    //道具限量
    limit: function (a) {
        setTimeout(function () {
            var propids = [];
            $.each(w.allGoods, function (k, v) {
                propids.push(v.iSeqId);
            });
            //查询活动限量/用户限量/道具限量
            var oParams = {
                limit_type: "user", //查询用户限量填"user",查询道具/活动限量填"goods"
                appid: 1003, //渠道；默认1003
                type: 2, //type：0-活动期间，1-每小时2-每天3-每周
                propids: propids.join(), //道具id，逗号分隔（查询活动限量传0）
                actids: "3463", //活动号（单业务传一个，多活动用逗号分隔）
                bizs: "fifa_3463" //业务代码（单业务传一个，多业务用逗号分隔）
            };
            D.mo.limit(oParams, function (limitlist) {
                console.log(limitlist);
                $.each(limitlist, function (k, v) {
                    if (v.used == 1) {
                        $("#" + k + " a").removeClass("btn-buy").addClass("btn-bought").text("已购买").attr('href', "javascript:alert('今日已购买');");
                    }
                });
            });
        }, a);
    },
    //道具限量2
    limit2: function (a, propid) {
        setTimeout(function () {
            //查询活动限量/用户限量/道具限量
            var oParams = {
                limit_type: "user", //查询用户限量填"user",查询道具/活动限量填"goods"
                appid: 1003, //渠道；默认1003
                type: 2, //type：0-活动期间，1-每小时2-每天3-每周
                propids: propid, //道具id，逗号分隔（查询活动限量传0）
                actids: "9905", //活动号（单业务传一个，多活动用逗号分隔）
                bizs: "fifa" //业务代码（单业务传一个，多业务用逗号分隔）
            };
            D.mo.limit(oParams, function (limitlist) {
                $.each(limitlist, function (k, v) {
                    if (v.used == 1) {
                        $("#buy").addClass("btn-buy2on").text("已购买").attr('href', "javascript:alert('今日已购买');");
                    }
                });
            });
        }, a);
    }
}

function timeString(a) {
    if (D.mo.now == undefined) {
        D.mo.now = D.mo.getSeverDateTime();
        D.mo.now.setUTCHours(D.mo.now.getUTCHours() + 8);
    }
    var now = D.mo.now;
    // now.setUTCHours(now.getUTCHours() + 8);
    a = a.replace("yyyy", now.getUTCFullYear());
    //a = a.replace("mm", checktime(now.getUTCMonth() + 1));
    a = a.replace("mm", now.getUTCMonth() + 1); //前面不加0
    a = a.replace("dd", checktime(now.getUTCDate()));
    a = a.replace("hh", checktime(now.getUTCHours()));
    a = a.replace("MM", checktime(now.getUTCMinutes()));
    a = a.replace("ss", checktime(now.getUTCSeconds()));
    return a;
}

function checktime(i) {
    return i < 10 ? "0" + i : i;
}

//倒计时
function countTime() {
    var msec = w.endDay.getTime() - w.nowDay.getTime();
    if (msec <= 0) {
        $("#countdown").text("礼包刷新倒计时：00小时00分00秒");
        clearInterval(w.timer);
        return;
    }
    var hour = Math.floor(msec / 1000 / 60 / 60 % 24);
    var minute = Math.floor(msec / 1000 / 60 % 60);
    var second = Math.floor(msec / 1000 % 60);
    var _html = hour + '小时' + minute + '分' + second + '秒';
    $("#countdown").text("礼包刷新倒计时：" + _html);
}

//上报comm
w.report = function (table_type, option1, params) {
    var cc = function () {
        var option = $.extend({
                biz: "qq.birthday.fifa_new",
                recommend_id: recommend2.data.recommend_id,
                uin: D.mo.sUin,
                zoneid: 0,
                //sceneid: _app_id == 1003 ? 11002 : 11003,
                sceneid: 11002,
                user_type: recommend2.data.iUserType,
                option1: option1
            }, params),
            sUrl = location.protocol + "//apps.idata.qq.com/outer/recommendReport?isjson=1&",
            oParams = {
                bid: "sshop",
                uin: option.uin,
                area: D.mo.bindInfo.iZone,
                table_type: table_type,
                scendid: option.sceneid,
                worldid: D.mo.bindInfo.iZone,
                fields: D.mo.tofields(option)
            };
        console.log(table_type + " " + sUrl + $.param(oParams));
        milo.loader.loadScript(sUrl + $.param(oParams) + "&_t=" + Math.random());
    };
    if (recommend2 == undefined) {
        w.checkRec(cc);
    } else {
        cc();
    }
};

function report1(items_list) {
    w.report("SecretShopPopInfo", {
        items_list: items_list,
        src: milo.request('tips') == 1 ? "1" : "2",
        discount: w.discount,
        usertype_active: 0,
        roleid: D.mo.bindInfo.iRole,
        gender: D.mo.bindInfo.iSex,
        algorithm_type: recommend2.data.iAlgoType,
        whitenamelist_type: 0
    })
}

function report2(button_type, item_id) {
    w.report("SecretShopClickInfo", {
        button_type: button_type,
        item_type: 0,
        item_id: item_id,
        discount: w.discount,
        usertype_active: 0,
        roleid: D.mo.bindInfo.iRole,
        gender: D.mo.bindInfo.iSex,
        src: milo.request('tips') == 1 ? "1" : "2",
        whitenamelist_type: 0,
        algorithm_type: recommend2.data.iAlgoType
    });
}

function report3(item_id, pay_qb) {
    w.report("SecretShopResInfo", {
        item_type: 0,
        item_id: item_id,
        discount: w.discount,
        itemnum: 1,
        pay_way: 0,
        pay_qb: pay_qb,
        usertype_active: 0,
        roleid: D.mo.bindInfo.iRole,
        gender: D.mo.bindInfo.iSex,
        src: milo.request('tips') == 1 ? "1" : "2",
        whitenamelist_type: 0,
        algorithm_type: recommend2.data.iAlgoType,
        item_algotype: 0
    })
}
var report4 = function (item_id) {
    w.report("SecretShopFreeInfo", {
        item_type: 0,
        item_id: item_id,
        itemnum: 1,
        usertype_active: 0,
        roleid: D.mo.bindInfo.iRole,
        gender: D.mo.bindInfo.iSex,
        whitenamelist_type: 0,
        algorithm_type: recommend2.data.iAlgoType
    })
};
//我的购买记录
var w_index = 1;
var w_total = 1;
$("body").delegate("#prev", "click", function () {
    if (w_index == 1) {
        return;
    }
    record(w_index - 1);
});

$("body").delegate("#next", "click", function () {
    if (w_index == w_total) {
        return;
    }
    record(w_index + 1);
});

function record(a) {
    D.mo.bind(function (bindedInfo, LoginManager) {
        var sUrl = location.protocol + "//apps.game.qq.com/cgi-bin/daoju/v3/api/order/order_list.cgi?",
            oParams = {
                _biz_code: "fifa",
                pn: a,
                ps: 5,
                app_set: "1101,1003,2008",
                buy_begin: "2018-10-17 00:00:00",
                _act_id: "3463,9905",
                hist: 0,
                _cs: 1,
                status: 100,
                plug_unset: 9800,
                _output_fmt: 2
            };
        milo.loader.loadScript(sUrl + $.param(oParams) + "&_t=" + Math.random(), function () {
            w_index = a;
            w_total = order_list.total % oParams.ps > 0 ? parseInt(order_list.total / oParams.ps) + 1 : parseInt(order_list.total / oParams.ps);
            if (order_list.data == null) {
                TGDialogS('test1');
                return;
            }
            var leng = order_list.data.length;
            for (var i = 0; i < oParams.ps; i++) {
                if (i < leng) {
                    var item = order_list.data[i];
                    item.sRoleName = decodeURIComponent(item.sRoleName);
                    item.sGoodsName = item.sGoodsInfo.list[0].sGoodsName;
                    item.sPrice = item.iPayAmount / 100 + "Q币";
                    if (item.sAttach != null) {
                        item.sTicket = parseInt(item.sAttach.iCouponNum) / 10 + "折";
                    }
                } else {
                    order_list.data.push({
                        dtBuyTime: "&nbsp;",
                        sRoleName: "&nbsp;",
                        sZoneDesc: "&nbsp;",
                        sGoodsName: "&nbsp;",
                        sPrice: "&nbsp;",
                        sTicket: "&nbsp;"
                    });
                }
            }
            D.mo.template(order_list.data, "tpl4", "#dj4", function () {
                $("#page").text(w_index + "/" + w_total);
                TGDialogS('test1');
            });
        });
    })
};

//弹框效果
function TGDialogS(e) {
    need("biz.dialog-min", function (Dialog) {
        Dialog.show({
            id: e,
            bgcolor: '#000', //弹出“遮罩”的颜色，格式为"#FF6600"，可修改，默认为"#fff"
            opacity: 50 //弹出“遮罩”的透明度，格式为｛10-100｝，可选
        });
    });
}

function closeDialog() {
    need("biz.dialog-min", function (Dialog) {
        Dialog.hide();
    });
}
