milo.ready(function() {
	need("daoju.mo", function(mo) {
		window.alert = function(msg, callback) {
			mo.alert(msg, callback);
		};
		window.confirm = function(msg, callback) {
			mo.confirm(msg, callback);
		};
		//�Ƿ�H5ҳ��
		mo.actid = "11451"; //�ۿ۹���
		mo.actid2 = "11444"; //��׼�Ƽ�����
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
			type: "pc,h5", //����ͣ�pt��¼"pc,h5"��openid��¼"qq,wx"��������Ƕ�"gamein"
			biz: "fifa", //ҵ��
			iActivityId: "202090", //AMS���
			iQueryFlowId: "541367", //��ѯ�������̺�
			iSubmitFlowId: "541366", //�󶨴������̺�
			callback: function(bindedInfo, LoginManager) {
				//�󶨴����ɹ�
				//D.mo.bindInfo��Ӧ��������Ϣ
				mo.sUin = bindedInfo.Fuin;
				mo.bindInfo.iSex = bindedInfo.Fsex;
				mo.timekey = timeString("dd") + (parseInt(timeString("hh")) < 16 ? "15" : "23"); //��¼��ǰ�׶�
				mo.iKey = "timekey01" + D.mo.sUin;
				w.checkRec(function(LoginManager) {
					//���δ�����ȡ�ۿ�
					if (mo.get(mo.iKey) == mo.timekey) {
						w.openDiscount();
					}
				});
				//��ѯ�����������ȡ
				mo.amsSubmit2(202090, 541512, {
					success: function(res) {
						if (res.sOutValue1 == "1") {
							$("#lott").addClass("btn-got").removeClass("btn-get").text("����ȡ");
						}
					}
				});
			}
		});
		//mo.appid����eas�ϱ�
		mo.appid("fifa", mo.actid); //�ۿ۹���
		mo.appid("fifa", mo.actid2); //��׼�Ƽ�����
		dategift(); //ÿ�վ�ϲ���
	});
});

var nowDayDju = 0; //�����Ƽ�����

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
		item[k].extend = decodeURIComponent(v.extend).replace(/\*/g, "��");
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
//�ۿ۹���
$("body").delegate("[data-md]", "click", function() {
	var $this = $(this),
		type = $this.attr("data-type"),
		md = $this.attr("data-md");
	if (md == "0") return;
	if ($this.hasClass("btn-buy2on")) {
		alert('�����ѹ���');
		return;
	}
	D.mo.amsSubmit(202090, 587762, {
		type: "buy", //��ͨ����
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
			$("." + leizhi).addClass("btn-buy2on").text("�ѹ���");
		}
	});
});

//�齱��ȡ
$("#lott").click(function() {
	var $this = $(this);
	if ($this.hasClass("btn-got")) return;
	D.mo.amsSubmit(202090, 587761, {
		success: function(res) {
			alert(res.sMsg.replace("���", ""));
			$("#lott").addClass("btn-got").removeClass("btn-get").text("����ȡ");
			//��ȡ�ϱ�
			reportLqClick(947665);
		}
	});
});
//��ȡ�ۿ�
$("#disbtn").click(function() {
	D.mo.bind(function() {
		//���ˢ��ʱ������
		var timestr = parseInt(timeString("hhMMss"));
		if ((timestr > 155950 && timestr < 160010) || timestr > 235950 || timestr < 10) {
			alert("�������ˢ���У����Ժ�����");
			return;
		}
		if (D.mo.isopenDiscount) {
			alert("�ۿ��ѿ���");
			return;
		}
		w.openDiscount();
		repordrawClick();
	})
});

var w = {
	openDiscount: function() {
		if (recommend2.errcode != "0") {
			alert("�Բ������޷����뱾�ڻŶ��");
			return;
		}
		var sItems_list = "";
		//��������չʾ��ҳ����
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
			//��ʾ�ۿ�
			$("#disbtn").html("�ҵ��ۿۣ�" + parseFloat(w.discount / 10) + "��");
			D.mo.set(D.mo.iKey, D.mo.timekey);
			D.mo.isopenDiscount = true;
			w.limit(1); //��ѯ����
			//����ʱ
			w.nowDay = new Date(timeString("yyyy/mm/dd hh:MM:ss"));
			var hh = 23; //��һ�׶���24ʱˢ��
			if (parseInt(timeString('hh')) < 16) {
				hh = 15; //��һ�׶���16ʱˢ��
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
		//����ҳ�棬�ع��ϱ�
		if (D.mo.isReload == undefined) {
			D.mo.isReload = "isReload";
		}
	},
	//�ж���û���Ƽ����� û�о�����һ���Ƽ��ӿ�
	checkRec: function(callback) {
		D.mo.bind(function(bindedInfo, LoginManager) {
			var sUrl = location.protocol + "//apps.game.qq.com/daoju/v3/recommend/common?",
				oParams = {
					actid: D.mo.actid2,
					userid: D.mo.sUin,
					area: D.mo.bindInfo.iZone,
					sceneid: "11002",
					jsonp_name: "recommend2", //���ϱ��������� �ʸ�Ϊrecommend2
					report: 1
				};
			D.mo.loadScript(sUrl, oParams, function() {
				recommend2.sceneid = "11002";
				if (recommend2.errcode != "0") {
					alert("��Ǹ��ϵͳ��æ��δ������ݡ�");
					return;
				}
				w.allGoods = recommend2.data.client_data.itemsdetail;
				w.discount = recommend2.data.extend_info.base_discount;
				callback(LoginManager);
			});
		})
	},
	//�������
	hsSubmit: function(iSeqId) {
		var timestr = parseInt(timeString("hhMMss"));
		if ((timestr > 155950 && timestr < 160010) || timestr > 235950 || timestr < 10) {
			alert("�������ˢ���У����Ժ�����");
			return;
		}
		$.each(w.allGoods, function(k, v) {
			if (parseInt(v.iGoodsId) == iSeqId) {
				$("#cfm_dialog").length > 0 && $("#cfm_dialog").remove();
				w.item = [v["iSeqId"], parseInt(v["iPrice"]) * parseInt(v["discount"]) / 100];
				D.mo.amsSubmit(202090, 541171, {
					type: "buy", //��ͨ����
					sData: {
						item: iSeqId,
					},
					success: function(res) {
						$("#_" + iSeqId + " a").addClass("btn-bought").text("�ѹ���").attr('href', "javascript:alert('�����ѹ���');");
					}
				});
				reportBuyClick(iSeqId);
			}
		});
	},
	//��������
	limit: function(a) {
		setTimeout(function() {
			var propids = [];
			$.each(w.allGoods, function(k, v) {
				if (v.iGoodsId) {
					propids.push(v.iGoodsId);
				}
			});
			//��ѯ�����/�û�����/��������
			var oParams = {
				limit_type: "user", //��ѯ�û�������"user",��ѯ����/�������"goods"
				appid: 1003, //������Ĭ��1003
				type: 2, //type��0-��ڼ䣬1-ÿСʱ2-ÿ��3-ÿ��
				propids: propids.join(), //����id�����ŷָ�����ѯ�������0��
				actids: D.mo.actid2, //��ţ���ҵ��һ�������ö��ŷָ���
				bizs: "fifa" //ҵ����루��ҵ��һ������ҵ���ö��ŷָ���
			};
			D.mo.limit(oParams, function(limitlist) {
				$.each(limitlist, function(k, v) {
					if (v.used == 1) {
						$("#" + k + " a").addClass("btn-bought").text("�ѹ���").attr('href', "javascript:alert('�����ѹ���');");
					}
				});
			});
		}, a);
	},
	//��������2
	limit2: function(a, propid) {
		setTimeout(function() {
			//��ѯ�����/�û�����/��������
			var oParams = {
				limit_type: "user", //��ѯ�û�������"user",��ѯ����/�������"goods"
				appid: 1003, //������Ĭ��1003
				type: 2, //type��0-��ڼ䣬1-ÿСʱ2-ÿ��3-ÿ��
				propids: propid, //����id�����ŷָ�����ѯ�������0��
				actids: D.mo.actid, //��ţ���ҵ��һ�������ö��ŷָ���
				bizs: "fifa" //ҵ����루��ҵ��һ������ҵ���ö��ŷָ���
			};
			D.mo.limit(oParams, function(limitlist) {
				$.each(limitlist, function(k, v) {
					if (v.used == 1) {
						$("." + k).addClass("btn-buy2on").text("�ѹ���");
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
	a = a.replace("nn", now.getUTCMonth() + 1); //û�в�0
	a = a.replace("dd", checktime(now.getUTCDate()));
	a = a.replace("hh", checktime(now.getUTCHours()));
	a = a.replace("MM", checktime(now.getUTCMinutes()));
	a = a.replace("ss", checktime(now.getUTCSeconds()));
	return a;
}

function checktime(i) {
	return i < 10 ? "0" + i : i;
}
//����ʱ
function countTime() {
	var msec = w.endDay.getTime() - w.nowDay.getTime();
	if (msec <= 0) {
		$("#countdown").text("���ˢ�µ���ʱ��00Сʱ00��00��");
		clearInterval(w.timer);
		return;
	}
	var hour = Math.floor(msec / 1000 / 60 / 60 % 24);
	var minute = Math.floor(msec / 1000 / 60 % 60);
	var second = Math.floor(msec / 1000 % 60);
	var _html = hour + 'Сʱ' + minute + '��' + second + '��';
	$("#countdown").text("���ˢ�µ���ʱ��" + _html);
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
		name: "������ѽ𿨻�ϳ�ֵ��",
		img: "prop3-1.png",
		oPrice: "388",
		cPrice: "116",
		extend: "���������Ա����8ǿ��*1,CC����BEST100��Ա��(5~8ǿ)*5,LP����BEST100��Ա��(5~8ǿ)*5,100��"
	},
	"133736": {
		name: "��ҫ�𿨻�ϸ�ǿ��ֵ��",
		img: "prop3-2.png",
		oPrice: "458",
		cPrice: "137",
		extend: "��ҫ���棨8ǿ��*1,��ҫ��������5~8ǿ����UL 5ǿ��*2,CP����BEST100��Ա��(5~8ǿ)*5,100��"
	},
	"133737": {
		name: "ŷ��7ǿ��ϸ�ǿ��ֵ��",
		img: "prop3-3.png",
		oPrice: "418",
		cPrice: "125",
		extend: "ŷ�޻�ϴ�����Ա����7ǿ��*1,���������Ա��5~8ǿ��*5,���紫��5ǿ����UL 2ǿ����Ա��*5,100��"
	},
	"133738": {
		name: "��ѡ��ǿ��ֵ��",
		img: "prop3-4.png",
		oPrice: "428",
		cPrice: "128",
		extend: "��ѡ������ǰ���5~8ǿ��*1,�ռ�������Ա����5ǿ��*2,��ҫ���棨6ǿ��*5,100��"
	},
	"133739": {
		name: "TT�𿨻�ϸ�ǿ��ֵ��",
		img: "prop3-5.png",
		oPrice: "499",
		cPrice: "150",
		extend: "TT������Ա����8ǿ��*1,TT����BEST100(5~8ǿ��*1,TT����50��ָ����Ա����7ǿ��*1,100��"
	},
	"133740": {
		name: "TB�𿨻�ϸ�ǿ��ֵ��",
		img: "prop3-6.png",
		oPrice: "368",
		cPrice: "110",
		extend: "TB����BEST100��Ա����8ǿ��*1,TB����BEST100(5~8ǿ��*1,TB����50��ָ����Ա����7ǿ��*1,100��"
	},


	"133741": {
		name: "��̳��ʦ�𿨻�ϳ�ֵ��",
		img: "prop4-1.png",
		oPrice: "1880",
		cPrice: "376",
		extend: "��̳��ʦ��8ǿ��*1,��̳��ʦ��7~8ǿ��*2,CC����BEST100��Ա��(8ǿ)*2,120��"
	},
	"133742": {
		name: "��ҫ����8-9ǿ��ϳ�ֵ��",
		img: "prop4-2.png",
		oPrice: "2260",
		cPrice: "452",
		extend: "��ҫ���棨8~9ǿ��*1,��ҫ���棨8ǿ��*2,CP����BEST100��Ա��(8ǿ)*2,120��"
	},
	"133743": {
		name: "��ѡ����𿨻�ϸ�ǿ��ֵ��",
		img: "prop4-3.png",
		oPrice: "5249",
		cPrice: "1050",
		extend: "��ѡ���棨8ǿ��*1,��ѡ���棨7ǿ��*1,��ѡ������CC&CP&LP��150�˰���8ǿ��*1,120��"
	},
	"133744": {
		name: "�������8-9ǿ��ϳ�ֵ��",
		img: "prop4-4.png",
		oPrice: "2180",
		cPrice: "436",
		extend: "���������Ա����8~9ǿ��*1,���������Ա����8ǿ��*2,LP����BEST100��Ա��(8ǿ)*2,120��"
	},
	"133745": {
		name: "���紫���ȫλ�ó�ֵ��",
		img: "prop4-5.png",
		oPrice: "1790",
		cPrice: "358",
		extend: "���紫��ǰ������8ǿ��*1,���紫���г�����8ǿ��*1,���紫��󳡰���8ǿ��*1,120��"
	},
	"133746": {
		name: "ŷ�޴���𿨻�ϳ�ֵ��",
		img: "prop4-6.png",
		oPrice: "2890",
		cPrice: "578",
		extend: "ŷ�޻�ϴ�����Ա����8ǿ��*1,ŷ�޻�ϴ�����Ա����7ǿ��*1,ŷ�޻�ϴ�����Ա����5~8ǿ��*5,120��"
	},
	"133747": {
		name: "�ռ�����𿨻��ʷʫ��",
		img: "prop4-7.png",
		oPrice: "6999",
		cPrice: "1400",
		extend: "�ռ����������ѡһ��8ǿ��*1,�ռ�������Ա����7ǿ��*1,�ռ�������Ա����5~8ǿ��*1,120��"
	}
};
//�ϱ�
w.report = function(table_type, djcInfo) { //�ϱ�
	need("daoju.mo.json", function(JSON) {
		D.mo.login(function() {
			//�ۿ���Ϣ
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
						//ǰ����Ϣ
						userInfo: {
							"credid": "fifa_secretshop_8792",
							"userid": D.mo.sUin,
							"area": D.mo.bindInfo.iZone, //��������
							"partition": 0, //С����������0
							"roleid": D.mo.bindInfo.iRole //��ɫid
						},
						djcInfo: djcInfo, //���۳���Ϣ
						rcInfo: recommend2 //rc������Ϣ
					})
				};
			console.warn(table_type);
			console.log("fields:" + JSON.stringify(oParams));
			D.mo.loadScript(sUrl, oParams);
		})
	})
};

//������
function reportBuyClick(item_id) {
	w.report("SecretShopClickInfo", {
		"button_type": "0",
		"discount": w.discount,
		"item_id": item_id
	});
};
//�齱���
function repordrawClick() {
	w.report("SecretShopClickInfo", {
		"button_type": "3",
		"discount": w.discount
	});
};
//��ȡ�ϱ�
function reportLqClick(item_id) {
	w.report("SecretShopFreeInfo", {
		"button_type": "4",
		"item_id": item_id
	});
};

//�ҵĹ����¼
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
//�ҵĹ����¼
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
					item.sPrice = item.iPayAmount / 100 + "Q��";
					if (item.sAttach != null) {
						item.sTicket = parseInt(item.sAttach.iCouponNum) / 10 + "��";
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

//����Ч��
function TGDialogS(e) {
	need("biz.dialog-min", function(Dialog) {
		Dialog.show({
			id: e,
			bgcolor: '#000', //���������֡�����ɫ����ʽΪ"#FF6600"�����޸ģ�Ĭ��Ϊ"#fff"
			opacity: 50 //���������֡���͸���ȣ���ʽΪ��10-100������ѡ
		});
	});
}

function closeDialog() {
	need("biz.dialog-min", function(Dialog) {
		Dialog.hide();
	});
}
