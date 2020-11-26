milo.ready(function() {
	need("daoju.mo", function(mo) {
		window.alert = function(msg, callback) {
			mo.alert(msg, callback);
		};
		window.confirm = function(msg, callback) {
			mo.confirm(msg, callback);
		};
		//是否H5页面
		mo.actid = "11451"; //折扣购买
		mo.actid2 = "11444"; //精准推荐购买
		mo.isH5 = location.host == "app.daoju.qq.com" ? true : false;
		mo.isIE = (!!window.ActiveXObject || "ActiveXObject" in window) ? true : false;
		mo.get = function(k) {
			if (!mo.isIE) {
				return localStorage.getItem(k);
			} else {
				return milo.cookie.get(k);
			}
		}
		mo.set = function(k, v) {
			if (!mo.isIE) {
				localStorage.setItem(k, v);
			} else {
				milo.cookie.set(k, v);
			}
		}
		mo.clear = function(k) {
			if (!mo.isIE) {
				localStorage.removeItem(k);
			} else {
				milo.cookie.clear(k);
			}
		}
		mo({
			type: "pc,h5", //活动类型，pt登录"pc,h5"，openid登录"qq,wx"，手游内嵌活动"gamein"
			biz: "fifa", //业务
			iActivityId: "202090", //AMS活动号
			iQueryFlowId: "541367", //查询大区流程号
			iSubmitFlowId: "541366", //绑定大区流程号
			callback: function(bindedInfo, LoginManager) {
				//绑定大区成功
				//D.mo.bindInfo对应绑定区服信息
				mo.sUin = bindedInfo.Fuin;
				mo.bindInfo.iSex = bindedInfo.Fsex;
				mo.timekey = timeString("dd") + (parseInt(timeString("hh")) < 16 ? "15" : "23"); //记录当前阶段
				mo.iKey = "timekey01" + D.mo.sUin;
				w.checkRec(function(LoginManager) {
					//玩家未点击抽取折扣
					if (mo.get(mo.iKey) == mo.timekey) {
						w.openDiscount();
					}
				});
				//查询生日礼包已领取
				mo.amsSubmit2(202090, 541512, {
					success: function(res) {
						if (res.sOutValue1 == "1") {
							$("#lott").addClass("btn-got").removeClass("btn-get").text("已领取");
						}
					}
				});
			}
		});
		//mo.appid包含eas上报
		mo.appid("fifa", mo.actid); //折扣购买
		mo.appid("fifa", mo.actid2); //精准推荐购买
		dategift(); //每日惊喜礼包
	});
});

var nowDayDju = 0; //今日推荐道具

function dategift() {
	var md = timeString("nndd");
	if (milo.request("test") != "") {
		md = parseInt(milo.request("test"));
	}
	var _time = {
		"717": "133735,133741",
		"718": "133735,133741",
		"719": "133735,133741",
		"720": "133735,133741",
		"721": "133735,133741",
		"722": "133735,133741",
		"723": "133736,133742",
		"724": "133737,133743",
		"725": "133738,133744",
		"726": "133739,133745",
		"727": "133740,133746",
		"728": "133735,133747",
		"729": "133736,133741",
		"730": "133737,133742",
		"731": "133738,133743",
		"801": "133739,133744",
		"802": "133740,133745",
		"803": "133735,133746",
		"804": "133736,133747",
		"805": "133737,133741",
		"806": "133738,133742",
		"807": "133739,133743",
		"808": "133740,133744",
		"809": "133735,133745",
		"810": "133736,133746",
		"811": "133737,133747",
		"812": "133738,133741",
		"813": "133739,133742",
		"814": "133740,133743",
		"815": "133735,133744",
		"816": "133736,133745",
		"817": "133737,133746",
		"818": "133738,133747"
	};
	var item = [xyx["0"], xyx["0"]];
	if (typeof _time[md] != "undefined") {
		var id = _time[md].split(",");
		item = [xyx[id[0]], xyx[id[1]]];
		nowDayDju = _time[md];
	}
	$.each(item, function(k, v) {
		item[k].name = decodeURIComponent(v.name);
		item[k].extend = decodeURIComponent(v.extend).replace(/\*/g, "×");
		item[k].md = nowDayDju == 0 ? 0 : md;
		if (nowDayDju != 0) {
			item[k].iSeqId = nowDayDju.split(",")[k];
		}
	});
	D.mo.template(item, "tpl2", "#dj2", function() {
		if (typeof _time[md] != "undefined") {
			w.limit2(1, nowDayDju);
		}
		$(".con3 .half").click(function() {
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
//折扣购买
$("body").delegate("[data-md]", "click", function() {
	var $this = $(this),
		type = $this.attr("data-type"),
		md = $this.attr("data-md");
	if (md == "0") return;
	if ($this.hasClass("btn-buy2on")) {
		alert('今日已购买');
		return;
	}
	D.mo.amsSubmit(202090, 587762, {
		type: "buy", //普通购买
		sData: {
			item: type,
			nowTime: md
		},
		success: function(res) {
			var shujuarr = nowDayDju.split(',');
			if (type == 2) {
				var leizhi = "_" + shujuarr[1];
			} else {
				var leizhi = "_" + shujuarr[0];
			}
			$("." + leizhi).addClass("btn-buy2on").text("已购买");
		}
	});
});

//抽奖领取
$("#lott").click(function() {
	var $this = $(this);
	if ($this.hasClass("btn-got")) return;
	D.mo.amsSubmit(202090, 587761, {
		success: function(res) {
			alert(res.sMsg.replace("礼包", ""));
			$("#lott").addClass("btn-got").removeClass("btn-get").text("已领取");
			//领取上报
			reportLqClick(947665);
		}
	});
});
//抽取折扣
$("#disbtn").click(function() {
	D.mo.bind(function() {
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
		repordrawClick();
	})
});

var w = {
	openDiscount: function() {
		if (recommend2.errcode != "0") {
			alert("对不起，您无法参与本期活动哦。");
			return;
		}
		var sItems_list = "";
		//处理数据展示在页面上
		$.each(w.allGoods, function(k, v) {
			sItems_list += v.iGoodsId + "_";
			v.oldPrice = Math.floor(v.iPrice) / 100;
			v.curPrice = Math.floor(v.iPrice * v.discount / 100) / 100;
			var num = $.inArray(parseInt(v.iGoodsId), [0, 133710, 133712, 133713, 133714, 133715, 133716, 133717, 133718,
				133719, 133720, 133721, 133722, 133723, 133724, 133725, 133726, 133727, 133728, 133729, 133730, 133731,
				133732, 133733, 133734
			]);
			num = num < 0 ? "no" : num;
			v.src = "prop2-" + num + ".png";
		});
		D.mo.template(w.allGoods, "tpl1", "#dj1", function() {
			//显示折扣
			$("#disbtn").html("我的折扣：" + parseFloat(w.discount / 10) + "折");
			D.mo.set(D.mo.iKey, D.mo.timekey);
			D.mo.isopenDiscount = true;
			w.limit(1); //查询限量
			//倒计时
			w.nowDay = new Date(timeString("yyyy/mm/dd hh:MM:ss"));
			var hh = 23; //下一阶段是24时刷新
			if (parseInt(timeString('hh')) < 16) {
				hh = 15; //下一阶段是16时刷新
			}
			w.endDay = new Date(timeString("yyyy/mm/dd " + hh + ":59:59"));
			w.timer = setInterval(function() {
				countTime();
				w.nowDay.setSeconds(w.nowDay.getSeconds() + 1);
			}, 1000);
			if (D.mo.isH5) {
				$(".prop-ul2 li").click(function() {
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
		//进入页面，曝光上报
		if (D.mo.isReload == undefined) {
			D.mo.isReload = "isReload";
		}
	},
	//判断有没有推荐数据 没有就再拉一遍推荐接口
	checkRec: function(callback) {
		D.mo.bind(function(bindedInfo, LoginManager) {
			var sUrl = location.protocol + "//apps.game.qq.com/daoju/v3/recommend/common?",
				oParams = {
					actid: D.mo.actid2,
					userid: D.mo.sUin,
					area: D.mo.bindInfo.iZone,
					sceneid: "11002",
					jsonp_name: "recommend2", //与上报返回重名 故改为recommend2
					report: 1
				};
			D.mo.loadScript(sUrl, oParams, function() {
				recommend2.sceneid = "11002";
				if (recommend2.errcode != "0") {
					alert("抱歉，系统繁忙，未获得数据。");
					return;
				}
				w.allGoods = recommend2.data.client_data.itemsdetail;
				w.discount = recommend2.data.extend_info.base_discount;
				callback(LoginManager);
			});
		})
	},
	//购买礼包
	hsSubmit: function(iSeqId) {
		var timestr = parseInt(timeString("hhMMss"));
		if ((timestr > 155950 && timestr < 160010) || timestr > 235950 || timestr < 10) {
			alert("礼包正在刷新中，请稍后重试");
			return;
		}
		$.each(w.allGoods, function(k, v) {
			if (parseInt(v.iGoodsId) == iSeqId) {
				$("#cfm_dialog").length > 0 && $("#cfm_dialog").remove();
				w.item = [v["iSeqId"], parseInt(v["iPrice"]) * parseInt(v["discount"]) / 100];
				D.mo.amsSubmit(202090, 541171, {
					type: "buy", //普通购买
					sData: {
						item: iSeqId,
					},
					success: function(res) {
						$("#_" + iSeqId + " a").addClass("btn-bought").text("已购买").attr('href', "javascript:alert('今日已购买');");
					}
				});
				reportBuyClick(iSeqId);
			}
		});
	},
	//道具限量
	limit: function(a) {
		setTimeout(function() {
			var propids = [];
			$.each(w.allGoods, function(k, v) {
				if (v.iGoodsId) {
					propids.push(v.iGoodsId);
				}
			});
			//查询活动限量/用户限量/道具限量
			var oParams = {
				limit_type: "user", //查询用户限量填"user",查询道具/活动限量填"goods"
				appid: 1003, //渠道；默认1003
				type: 2, //type：0-活动期间，1-每小时2-每天3-每周
				propids: propids.join(), //道具id，逗号分隔（查询活动限量传0）
				actids: D.mo.actid2, //活动号（单业务传一个，多活动用逗号分隔）
				bizs: "fifa" //业务代码（单业务传一个，多业务用逗号分隔）
			};
			D.mo.limit(oParams, function(limitlist) {
				$.each(limitlist, function(k, v) {
					if (v.used == 1) {
						$("#" + k + " a").addClass("btn-bought").text("已购买").attr('href', "javascript:alert('今日已购买');");
					}
				});
			});
		}, a);
	},
	//道具限量2
	limit2: function(a, propid) {
		setTimeout(function() {
			//查询活动限量/用户限量/道具限量
			var oParams = {
				limit_type: "user", //查询用户限量填"user",查询道具/活动限量填"goods"
				appid: 1003, //渠道；默认1003
				type: 2, //type：0-活动期间，1-每小时2-每天3-每周
				propids: propid, //道具id，逗号分隔（查询活动限量传0）
				actids: D.mo.actid, //活动号（单业务传一个，多活动用逗号分隔）
				bizs: "fifa" //业务代码（单业务传一个，多业务用逗号分隔）
			};
			D.mo.limit(oParams, function(limitlist) {
				$.each(limitlist, function(k, v) {
					if (v.used == 1) {
						$("." + k).addClass("btn-buy2on").text("已购买");
					}
				});
			});
		}, a);
	}
};

function timeString(a) {
	if (D.mo.now == undefined) {
		D.mo.now = D.mo.getSeverDateTime();
		D.mo.now.setUTCHours(D.mo.now.getUTCHours() + 8);
	}
	var now = D.mo.now;
	// now.setUTCHours(now.getUTCHours() + 8);
	a = a.replace("yyyy", now.getUTCFullYear());
	a = a.replace("mm", checktime(now.getUTCMonth() + 1));
	a = a.replace("nn", now.getUTCMonth() + 1); //没有补0
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
var xyx = {
	"0": {
		name: "%3F%3F%3F",
		img: "prop2-no.png",
		oPrice: "???",
		cPrice: "???",
		extend: "%3F%3F%3F"
	},
	"133735": {
		name: "世界最佳金卡混合超值包",
		img: "prop3-1.png",
		oPrice: "388",
		cPrice: "116",
		extend: "世界最佳球员包（8强）*1,CC赛季BEST100球员包(5~8强)*5,LP赛季BEST100球员包(5~8强)*5,100亿"
	},
	"133736": {
		name: "荣耀金卡混合高强超值包",
		img: "prop3-2.png",
		oPrice: "458",
		cPrice: "137",
		extend: "荣耀传奇（8强）*1,荣耀传奇球星5~8强（含UL 5强）*2,CP赛季BEST100球员包(5~8强)*5,100亿"
	},
	"133737": {
		name: "欧洲7强混合高强超值包",
		img: "prop3-3.png",
		oPrice: "418",
		cPrice: "125",
		extend: "欧洲混合传奇球员包（7强）*1,世界最佳球员（5~8强）*5,世界传奇5强（含UL 2强）球员包*5,100亿"
	},
	"133738": {
		name: "精选高强超值包",
		img: "prop3-4.png",
		oPrice: "428",
		cPrice: "128",
		extend: "精选传奇巨星包（5~8强）*1,终极传奇球员包（5强）*2,荣耀传奇（6强）*5,100亿"
	},
	"133739": {
		name: "TT金卡混合高强超值包",
		img: "prop3-5.png",
		oPrice: "499",
		cPrice: "150",
		extend: "TT赛季球员包（8强）*1,TT赛季BEST100(5~8强）*1,TT赛季50名指定球员包（7强）*1,100亿"
	},
	"133740": {
		name: "TB金卡混合高强超值包",
		img: "prop3-6.png",
		oPrice: "368",
		cPrice: "110",
		extend: "TB赛季BEST100球员包（8强）*1,TB赛季BEST100(5~8强）*1,TB赛季50名指定球员包（7强）*1,100亿"
	},


	"133741": {
		name: "足坛大师金卡混合超值包",
		img: "prop4-1.png",
		oPrice: "1880",
		cPrice: "376",
		extend: "足坛大师（8强）*1,足坛大师（7~8强）*2,CC赛季BEST100球员包(8强)*2,120亿"
	},
	"133742": {
		name: "荣耀传奇8-9强混合超值包",
		img: "prop4-2.png",
		oPrice: "2260",
		cPrice: "452",
		extend: "荣耀传奇（8~9强）*1,荣耀传奇（8强）*2,CP赛季BEST100球员包(8强)*2,120亿"
	},
	"133743": {
		name: "精选传奇金卡混合高强超值包",
		img: "prop4-3.png",
		oPrice: "5249",
		cPrice: "1050",
		extend: "精选传奇（8强）*1,精选传奇（7强）*1,精选赛季（CC&CP&LP）150人包（8强）*1,120亿"
	},
	"133744": {
		name: "世界最佳8-9强混合超值包",
		img: "prop4-4.png",
		oPrice: "2180",
		cPrice: "436",
		extend: "世界最佳球员包（8~9强）*1,世界最佳球员包（8强）*2,LP赛季BEST100球员包(8强)*2,120亿"
	},
	"133745": {
		name: "世界传奇金卡全位置超值包",
		img: "prop4-5.png",
		oPrice: "1790",
		cPrice: "358",
		extend: "世界传奇前场包（8强）*1,世界传奇中场包（8强）*1,世界传奇后场包（8强）*1,120亿"
	},
	"133746": {
		name: "欧洲传奇金卡混合超值包",
		img: "prop4-6.png",
		oPrice: "2890",
		cPrice: "578",
		extend: "欧洲混合传奇球员包（8强）*1,欧洲混合传奇球员包（7强）*1,欧洲混合传奇球员包（5~8强）*5,120亿"
	},
	"133747": {
		name: "终极传奇金卡混合史诗包",
		img: "prop4-7.png",
		oPrice: "6999",
		cPrice: "1400",
		extend: "终极传奇巨星三选一（8强）*1,终极传奇球员包（7强）*1,终极传奇球员包（5~8强）*1,120亿"
	}
};
//上报
w.report = function(table_type, djcInfo) { //上报
	need("daoju.mo.json", function(JSON) {
		D.mo.login(function() {
			//折扣信息
			var detail = {};
			$.each(recommend2.data.client_data.itemsdetail, function(k, v) {
				if (k == '_MODIFIERS' || k == "defined") {

				} else {
					detail[k] = {
						'discount': v.discount
					};
				}
			});
			recommend2.data.client_data.itemsdetail = detail;
			delete recommend2.req_str;
			delete recommend2.data.djc_actioninfo;
			delete recommend2.errdetail;
			delete recommend2.rsv_str;
			delete recommend2.req_ip_port;
			var sUrl = location.protocol + "//apps.game.qq.com/daoju/v3/dcrpt/ping?ver=2&",
				oParams = {
					bid: "sshop",
					uin: D.mo.sUin,
					area: 0,
					table_type: table_type,
					scendid: recommend2.sceneid,
					fields: JSON.stringify({
						//前端信息
						userInfo: {
							"credid": "fifa_secretshop_8792",
							"userid": D.mo.sUin,
							"area": D.mo.bindInfo.iZone, //（大区）
							"partition": 0, //小区，端游填0
							"roleid": D.mo.bindInfo.iRole //角色id
						},
						djcInfo: djcInfo, //道聚城信息
						rcInfo: recommend2 //rc返回信息
					})
				};
			console.warn(table_type);
			console.log("fields:" + JSON.stringify(oParams));
			D.mo.loadScript(sUrl, oParams);
		})
	})
};

//购买点击
function reportBuyClick(item_id) {
	w.report("SecretShopClickInfo", {
		"button_type": "0",
		"discount": w.discount,
		"item_id": item_id
	});
};
//抽奖点击
function repordrawClick() {
	w.report("SecretShopClickInfo", {
		"button_type": "3",
		"discount": w.discount
	});
};
//领取上报
function reportLqClick(item_id) {
	w.report("SecretShopFreeInfo", {
		"button_type": "4",
		"item_id": item_id
	});
};

//我的购买记录
var w_index = 1;
var w_total = 1;
$("body").delegate("#prev", "click", function() {
	if (w_index == 1) {
		return;
	}
	record(w_index - 1);
});

$("body").delegate("#next", "click", function() {
	if (w_index == w_total) {
		return;
	}
	record(w_index + 1);
});
//我的购买记录
function record(a) {
	D.mo.bind(function(bindedInfo, LoginManager) {
		var sUrl = location.protocol + "//apps.game.qq.com/cgi-bin/daoju/v3/api/order/order_list.cgi?",
			oParams = {
				_biz_code: "fifa",
				pn: a,
				ps: 5,
				app_set: "1101,1003,2008",
				buy_begin: "2019-07-17 00:00:00",
				_act_id: [D.mo.actid, D.mo.actid2].join(),
				hist: 0,
				_cs: 1,
				status: 100,
				plug_unset: 9800,
				_output_fmt: 2
			};
		milo.loader.loadScript(sUrl + $.param(oParams) + "&_t=" + Math.random(), function() {
			w_index = a;
			w_total = order_list.total % oParams.ps > 0 ? parseInt(order_list.total / oParams.ps) + 1 : parseInt(order_list.total /
				oParams.ps);
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
			D.mo.template(order_list.data, "tpl4", "#dj4", function() {
				$("#page").text(w_index + "/" + w_total);
				TGDialogS('test1');
			});
		});
	})
};

//弹框效果
function TGDialogS(e) {
	need("biz.dialog-min", function(Dialog) {
		Dialog.show({
			id: e,
			bgcolor: '#000', //弹出“遮罩”的颜色，格式为"#FF6600"，可修改，默认为"#fff"
			opacity: 50 //弹出“遮罩”的透明度，格式为｛10-100｝，可选
		});
	});
}

function closeDialog() {
	need("biz.dialog-min", function(Dialog) {
		Dialog.hide();
	});
}
