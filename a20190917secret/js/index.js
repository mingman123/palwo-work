need("daoju.mo", function(mo) {
    mo.isH5 = location.host == "app.daoju.qq.com" ? true : false;
    mo.get = function(k) {
        if(!mo.isIE) {
            return localStorage.getItem(k);
        } else {
            return milo.cookie.get(k);
        }
    }
    mo.set = function(k, v) {
        if(!mo.isIE) {
            localStorage.setItem(k, v);
        } else {
            milo.cookie.set(k, v);
        }
    }
    mo({
        type: "pc,h5", //����ͣ�pt��¼"pc,h5"��openid��¼"qq,wx"��������Ƕ�"gamein"
        biz: "fo4", //ҵ��
        iActivityId: "203571", //AMS���
        iQueryFlowId: "543178", //��ѯ�������̺�
        iSubmitFlowId: "543177", //�󶨴������̺�
        callback: function(bindedInfo, LoginManager) {
            //�󶨴����ɹ�
            //D.mo.bindInfo��Ӧ��������Ϣ
            //�����Ϊ"qq,wx"ʱ��D.mo.source��Ӧ��¼��ʽ��"mqq"/"wx"
            //����һ����ȡ��Ϣ
            Hx.amslqrecord();
            //�����Ƽ�����
            D.mo.sUin = LoginManager.getUserUin();
            D.mo.bindInfo.iSex = bindedInfo.Fsex;
            mo.sUin = bindedInfo.Fuin;
            mo.bindInfo.iSex = bindedInfo.Fsex;
            mo.timekey = timeString("dd") + (parseInt(timeString("hh")) < 16 ? "15" : "23"); //��¼��ǰ�׶�
            mo.iKey = "timekey03" + D.mo.sUin;
            //�ж��Ƿ��ȡ�ۿ�
            if(mo.get(mo.iKey) != mo.timekey) {
                //δ����
                D.mo.isopenDiscount = false;
            }else{
                D.mo.isopenDiscount = true;
            }
            //��������
            Hx.checkRec(function () {
                Hx.amssearch(function(){

                });
            });
        }
    });
    //mo.appid����eas�ϱ�
    mo.appid("fo4", "11514", function(_app_id) {
        window.alert = function(msg, callback) {
            mo.alert(msg, callback);
        };
        window.confirm = function(msg, callback) {
            mo.confirm(msg, callback);
        };
    });
});
if(!Array.indexOf){
    Array.prototype.indexOf = function(obj){
        for(var i=0; i<this.length; i++){
            if(this[i]==obj){
                return i;
            }
        }
        return -1;
    }
}
//��ȡ�ۿ�
$("#disbtn").click(function () {
    //���ˢ��ʱ������
    D.mo.login(function(){
        if(D.mo.bindInfo==undefined || D.mo.bindInfo=="undefined"){
            alert("��󶨴���������");
            return ;
        }
    });
    //�жϵ�¼
    var timestr = parseInt(timeString("hhMMss"));
    if (timestr > 235950 || timestr < 10) {
        alert("�������ˢ���У����Ժ�����");
        return;
    }
    D.mo.now = undefined;
    D.mo.set(D.mo.iKey, D.mo.timekey);
    if (D.mo.isopenDiscount) {
        alert("�ۿ��ѿ���");
        return;
    }
    D.mo.isopenDiscount=true;
    Hx.openDiscount();
    repordrawClick();
});
Array.prototype.removearr=function(dx)
{
    if(isNaN(dx)||dx>this.length){return false;}
    for(var i=0,n=0;i<this.length;i++)
    {
        if(this[i]!=this[dx])
        {
            this[n++]=this[i]
        }
    }
    this.length-=1
}
var Hx = {
    todayischou:0,
    openDiscount: function () {
        if (recommend2.errcode != "0") {
            alert("�Բ������޷����뱾�ڻŶ��");
            return;
        }
        //�û��ڻҳ��¼���ʺ��Ұ󶨴������ϱ�
        if (D.mo.isReload == undefined) {
            D.mo.isReload = "isReload";
        }
        //�ж��Ƿ��ȡ
        if(parseInt(Hx.todayischou)==parseInt(0) && !D.mo.isopenDiscount){
            //��һ�α���
            var ii = 1;
            Hx.temPackId = {};
            $.each(recommend2.data.client_data.items, function (k, v) {
                Hx.temPackId[v] = v;
            });
            $.each(Hx.sItems_list, function (k, v) {
                if (Hx.temPackId[v] == null || Hx.temPackId[v] == "undefined" || Hx.temPackId[v] == undefined) {
                    ii = ii + 1;
                }
            });
            if (parseInt(ii) > 1) {
                alert("����Ѿ����£���ˢ��ҳ���ȡ��һ�ֵ��ۿ�Ŷ~", function () {
                    location.reload();
                });
                return;
            }
            var hh = 23; //��һ�׶���24ʱˢ��
            if (parseInt(timeString('hh')) < 16) {
                hh = 15; //��һ�׶���16ʱˢ��
            }
            //ʹ��������¼�齱��¼
            var item = Hx.sItems_list.join('_');//ѡ��ֵ
            var item_2 = hh;
            Hx.amsrecord(item, item_2, function () {
                //ֱ����Ⱦҳ�棬������ʾ�ۿ�
                D.mo.template(Hx.allGoods, "tpl1", "#dj1", function () {
                    init(0) //��ʼ�������ʽ
                });
            });
        }else {
            //��ʵ����
            var selfchoose=[];
            for(var kuihua=0;kuihua<Hx.sItems_list.length;kuihua++){
                var cidxx=parseInt(Hx.sItems_list[kuihua]);
                selfchoose[kuihua]=Hx.allinfoxx[cidxx];
                selfchoose[kuihua]['sshuxu']=parseInt(kuihua);
                selfchoose[kuihua]['realsshuxu']=parseInt(kuihua)+parseInt(1);
            }
            Hx.selfchoose=selfchoose;
            var templatetpl='tpl1';
            if (D.mo.isopenDiscount) {
                templatetpl='tpl2';
            }
            //��Ⱦҳ��
            D.mo.template(Hx.selfchoose,templatetpl, "#dj1", function () {
                //��ʾ�ۿ�
                if (D.mo.isopenDiscount) {
                    D.mo.set(D.mo.iKey, D.mo.timekey);
                    //��ť�û�
                    if(D.mo.isH5) {
                        $("#disbtn").removeClass('btn-discount').addClass('btn-discounton').attr('id', '').html("�ҵ��ۿ�:<span>" + (Hx.discount) / 10+"</span>");
                    }else{
                        $("#disbtn").addClass('on').attr('id', '').html("�ҵ��ۿ�:" + (Hx.discount) / 10);
                    }
                    Hx.limit(1000); //��ѯ�����Ƿ���
                    //����ʱ
                    var hh = 23; //��һ�׶���24ʱˢ��
                    if (parseInt(timeString('hh')) < 16) {
                        hh = 15; //��һ�׶���16ʱˢ��
                    }
                    Hx.nowDay = new Date(timeString("yyyy/mm/dd hh:MM:ss"));
                    Hx.endDay = new Date(timeString("yyyy/mm/dd " + hh + ":59:59"));
                    Hx.timer = setInterval(function () {
                        countTime();
                        Hx.nowDay.setSeconds(Hx.nowDay.getSeconds() + 1);
                    }, 1000);
                    if (D.mo.isReload == undefined) {
                        D.mo.isReload = "isReload";
                    }
                }
                init(0);
            });
        }
    },
    checkRec: function (callback) {
        D.mo.bind(function (bindedInfo, LoginManager) {
            var sUrl = location.protocol + "//apps.game.qq.com/daoju/v3/recommend/common?",
                oParams = {
                    actid: "11514",
                    userid: D.mo.sUin,
                    sceneid: "11002",
                    jsonp_name: "recommend2", //���ϱ��������� �ʸ�Ϊrecommend2
                    report:1,
                    area: D.mo.bindInfo.iZone
                };
            D.mo.loadScript(sUrl, oParams, function () {
                console.log(recommend2);
                if (recommend2.errcode != "0") {
                    alert("��Ǹ��ϵͳ��æ��δ������ݡ�");
                    return;
                }
                //Ĭ��ȡǰ����
                var itemsarr=recommend2.data.client_data.items;
                var strall='';
                for(var kk=0;kk<=itemsarr.length;kk++){
                    if(strall==''){
                        strall=itemsarr[kk];
                    }else{
                        strall=strall+"_"+itemsarr[kk];
                    }
                }
                Hx.alltuijian=strall;//��������
                var xuanarr = [];
                Hx.sItems_list=[];
                Hx.chushistr='';
                var allinfoxx = recommend2.data.client_data.itemsdetail;
                //��������չʾ��ҳ����
                var allxxinfoyy=[0, 125815, 125816, 125817, 125818, 125819, 125820, 125823, 125824, 125825, 125826, 125827, 125828, 125829, 125830, 125831, 125832, 125833, 125834, 125835, 125836, 125837, 125838, 125839, 125840, 125842];
                $.each(allinfoxx, function (k, v) {
                    v.oldPrice = Math.floor(v.iPrice) / 100;
                    v.curPrice = Math.floor(v.iPrice * v.discount / 100) / 100;
                    //var num = $.inArray(parseInt(v.iGoodsId), [0, 125815, 125816, 125817, 125818, 125819, 125820, 125823, 125824, 125825, 125826, 125827, 125828, 125829, 125830, 125831, 125832, 125833, 125834, 125835, 125836, 125837, 125838, 125839, 125840, 125842]);
                    var num=allxxinfoyy.indexOf(parseInt(v.iGoodsId));
                    num = num < 0 ? "no" : num;
                    v.src = "prop2-" + num + ".png";
                });
                Hx.allinfoxx=allinfoxx;
                for (mk = 0; mk <= 5; mk++) {
                    var idcc = parseInt(itemsarr[mk]);
                    $.each(allinfoxx, function (k, v) {
                        var idyy = parseInt(k)
                        if (idcc == idyy) {
                            xuanarr[mk] = v;
                            Hx.sItems_list.push(idcc);
                        }
                    });
                    if(Hx.chushistr==''){
                        Hx.chushistr=idcc;
                    }else{
                        Hx.chushistr=Hx.chushistr+"_"+idcc;
                    }
                }
                Hx.allGoods =xuanarr;
                Hx.discount = recommend2.data.extend_info.base_discount;//�ۿ�
                Hx.rcinfo = recommend2;
                delete Hx.rcinfo.data.djc_actioninfo;
                delete Hx.rcinfo.errdetail;
                delete Hx.rcinfo.req_str;
                delete Hx.rcinfo.errdetail;
                delete Hx.rcinfo.req_ip_port;
                delete Hx.rcinfo.rsv_str;
                var detail = {};
                $.each(allinfoxx, function (k, v) {
                    detail[v.iGoodsId] = {'discount': v.discount};
                });
                Hx.rcinfo.data.client_data.itemsdetail = detail;
                callback(LoginManager);
                return true;
            });
        })
    },
    //��ȡ����
    amsbuy: function(item) {
        D.mo.now = undefined;
        var timestr = parseInt(timeString("hhMMss"));
        if (timestr > 235950 || timestr < 10) {
            alert("�������ˢ���У����Ժ�����");
            return;
        }
        var now = timeString("dd") + (parseInt(timeString("hh")) < 16 ? "15" : "23");
        if ( D.mo.get(D.mo.iKey) != now)
        {
            alert("����Ѿ����£���ˢ��ҳ���ȡ��һ�ֵ��ۿ�Ŷ~",function () {
                location.reload();
            });
        }
        reportBuyClick(item);//�ϱ�
        D.mo.amsSubmit(203571,560527, {
            type: "buy", //��ͨ����
            sData: {
                item:item
            },
            success: function(res) {
                init(0);
                //�ɹ��ص�
                $(".btn_" + item).addClass('on').attr('href', "javascript:alert('�����ѹ���');");
                $(this).text("�ѹ���").attr('href', "javascript:alert('�����ѹ���');")
                Hx.limit(3000); //��ѯ����
            }
        });
    },
    limit: function (a) {
        setTimeout(function () {
            var propids = [];
            $.each(Hx.allinfoxx, function (k, v) {
                if (v.iGoodsId)
                {
                    propids.push(v.iGoodsId);
                }
            });
            //��ѯ�����/�û�����/��������
            var oParams = {
                limit_type: "user", //��ѯ�û�������"user",��ѯ����/�������"goods"
                appid: 1003, //������Ĭ��1003
                type: 2, //type��0-��ڼ䣬1-ÿСʱ2-ÿ��3-ÿ��
                propids: propids.join(), //����id�����ŷָ�����ѯ�������0��
                actids: "11514", //��ţ���ҵ��һ�������ö��ŷָ���
                bizs: "fo4" //ҵ����루��ҵ��һ������ҵ���ö��ŷָ���
            };
            D.mo.limit(oParams, function (limitlist) {
                Hx.limitlistinfo=limitlist;
                console.log(limitlist);
                $.each(limitlist, function (k, v) {
                    if (v.used == 1) {
                        $(".btn" + k).addClass('on').attr('href', "javascript:alert('�����ѹ���');");
                    }
                });
            });
        }, a || 3000);
    },
    //��ȡ����
    amslq: function(item) {
        D.mo.amsSubmit(203571,560518,{
            sData: {
                item:item
            },
            success: function(res) {
                //�ɹ��ص�
                alert('��ϲ������� ��Ļ������');
                $(".new-btn").addClass('on');
                $(".new-btn").attr('href', "javascript:alert('����ȡ');");
                reportLqClick(1311163);//��ȡ�ϱ�
            }
        });
    },
    //��ȡ���꽱����¼
    amslqrecord: function(item) {
        D.mo.amsSubmit2(203571,543185,{
            success: function(res) {
                //�ɹ��ص�
                if(res.sOutValue1!=0){
                    $(".new-btn").addClass('on');
                    $(".new-btn").attr('href', "javascript:alert('����ȡ');");
                }else{
                    $(".new-btn").removeClass('on')
                }
                Hx.totalnunmx=parseInt(res.sOutValue2);
            }
        });
    },
    //ʹ��������ȡ��¼
    amsrecord: function(item,item_2,func) {
        D.mo.amsSubmit2(203571,560519,{
            sData: {
                item:item,
                item_2:item_2
            },
            success: function(res) {
                //�ɹ��ص�
                func();
            }
        });
    },
    //����ú���
    send_friend: function(item,item_2,fuc) {
        var _share = {
            "title": "���������̵����˳�ֵ�ۿۣ����������������",
            "icon": "https://game.gtimg.cn/images/actdaoju/act/a20190225fo4brithday/h5/share.jpg",
            "desc": "���������̵����˳�ֵ�ۿۣ����������������",
            "link": 'https://app.daoju.qq.com/act/a20190225fo4brithday/index.html' //����򿪵�ַ
        };
        D.mo.setShare(_share);
        D.mo.sendShare(_share);
        D.mo.amsSubmit2(203571,560520,{
            sData: {

            },
            success: function(res) {
                alert(res.sMsg)
            },
            failure: function(res) {

            }
        });
    },
    //��ѯ��¼
    amssearch: function(fuc) {
        D.mo.amsSubmit2(203571,543519, {
            success: function(res) {
                //��ʼ��ʱ���
                //�ɹ��ص�
                if(parseInt(res.jData.iTotal)>parseInt(0)){
                    var hh = 23; //��һ�׶���24ʱˢ��
                    if(parseInt(timeString('hh')) < 16) {
                        hh = 15; //��һ�׶���16ʱˢ��
                    }
                    var jData =  res.jData.jData[0];
                    //console.log(new Date(jData.dtGetPackageTime.replace(/-/ig, '/')).toDateString() === new Date().toDateString() && parseInt(jData.sExtend5)==parseInt(hh));
                    if (new Date(jData.dtGetPackageTime.replace(/-/ig, '/')).toDateString() === new Date().toDateString() && parseInt(jData.sExtend5)==parseInt(hh)) {
                        //����
                        Hx.todayischou=1;
                        Hx.sItems_list=jData.sExtend4.split('_'); // ��ȡ��ʱ������Ѿ��齱�����
                        Hx.chushistr=jData.sExtend4;
                        fuc();
                    }
                    Hx.openDiscount();
                }else{
                    Hx.openDiscount();
                }
            }
        });
    },
    //��һ��
    changeone:function (position,iszhekou) {
        var hh = 23; //��һ�׶���24ʱˢ��
        if (parseInt(timeString('hh')) < 16) {
            hh = 15; //��һ�׶���16ʱˢ��
        }
        //ʹ��������¼�齱��¼
        var item_2 = hh;
        D.mo.amsSubmit2(203571,560861, {
            sData: {
                item:Hx.chushistr,
                itemall:Hx.alltuijian,
                position:position,
                item_2:item_2
            },
            sNeedSubmitPopDiv: false, //����Ҫ������תȦ��ʽ
            success: function(res) {
                var nowxuanid=parseInt(res.jExtend);
                var tishuanzhi=""+nowxuanid+"";
                var replace = Hx.sItems_list.splice(position,1,tishuanzhi);
                console.log(Hx.sItems_list);
                var onelist=Hx.allinfoxx[nowxuanid];
                var imgzhix=onelist.src;
                var imgutl="//game.gtimg.cn/images/actdaoju/act/a20190422secret/"+imgzhix;
                var sGoodsDescarr=onelist.sGoodsDesc.split(',');
                var phtmlx='';
                for(var mn=0;mn<sGoodsDescarr.length;mn++){
                    if(mn==0){
                        phtmlx='<p>'+sGoodsDescarr[mn]+'</p>'
                    }else{
                        phtmlx=phtmlx+'<p>'+sGoodsDescarr[mn]+'</p>'
                    }
                }
                var iGoodsId=onelist.iGoodsId;
                var clssxx="btn-get spr btn_"+onelist.iGoodsId;
                var keyxx="_"+nowxuanid;
                if(parseInt(iszhekou)==parseInt(0)){
                    var isbuymm=0;
                }else{
                    var isbuymm=parseInt(Hx.limitlistinfo[keyxx]['used']);//�Ƿ����
                }
                if(D.mo.isH5){
                    if(isbuymm){
                        var clssxx="btn-purchase spr on  btn_"+onelist.iGoodsId;
                    }else {
                        var clssxx ="btn-purchase spr btn_" + onelist.iGoodsId;
                    }
                }else{
                    if(isbuymm){
                        var clssxx="btn-get on spr btn_"+onelist.iGoodsId;
                    }else {
                        var clssxx="btn-get spr btn_"+onelist.iGoodsId;
                    }
                }
                var buyitemm='';
                var curPrice=onelist.curPrice;
                if(parseInt(iszhekou)==parseInt(1)){
                    var isbuymm=1;
                    buyitemm='<a class="'+clssxx+'"  href="javascript:Hx.amsbuy('+iGoodsId+');"></a>'
                }else{
                    curPrice='?';
                    var isbuymm=0;
                }
                if(D.mo.isH5) {
                    var newhtmlzhi ='<div class="tk">'
                        +phtmlx
                        +'</div>'
                        +'<p class="bg-prize">'
                        +'<img src="' + imgutl + '"/>'
                        +'<span>'+onelist.sGoodsName+'</span>'
                        +'</p>'
                        +'<p class="oldprice">ԭ�ۣ�<span>' + onelist.oldPrice + '</span>Q��</p>'
                        +'<p class="newprice">�ּۣ�'+ curPrice + ' Q��</p>'
                        + buyitemm
                        + '<a class="btn-change spr" href="javascript:Hx.changeone(' + position + ',' + iszhekou + ');">'
                        + '</a>';
                }else{
                    var newhtmlzhi = '<div class="befor">'
                        + '<div class="imgBox">'
                        + '<img src="' + imgutl + '" width="186" height="200" >'
                        + '<p class="name"><span>' + onelist.sGoodsName + '</span></p>'
                        + '<div class="fc spr">' + phtmlx + '</div>'
                        + '</div>'
                        + '<p class="original">ԭ�ۣ�<span>' + onelist.oldPrice + '</span></p>'
                        + '<p class="ruling">�ּۣ�<span>' + curPrice + '</span></p>'
                        + buyitemm
                        + '<a class="btn-change spr hid" href="javascript:Hx.changeone(' + position + ',' + iszhekou + ');">'
                        + '</a>'
                        + '</div>';
                }
                $(".choosesj_"+position).attr('packid',iGoodsId);
                $(".choosesj_"+position).html('');
                $(".choosesj_"+position).addClass('on');
                $(".choosesj_"+position).html(newhtmlzhi);
                setTimeout(function() {
                    $(".choosesj_" + position).removeClass('on');
                },1500);
                init(0);
            }
        });
    }
}
//�°��ϱ�
Hx.report = function(table_type, djcInfo, rcinfo) { //�ϱ�
    need("daoju.mo.json", function(JSON) {
        var callback = function() {
            D.mo.bind(function() {
                var option = {
                    recommend_id: recommend2.data.extend_info.recommend_id,
                    uin: D.mo.sUin,
                    zoneid: D.mo.bindInfo.iZone,
                    sceneid: 11002,
                    user_type: recommend2.data.algo_info.payuser_type,
                    timestamp: D.mo.getSeverDateTime().getTime()
                };
                var sUrl = location.protocol + "//apps.game.qq.com/daoju/v3/dcrpt/ping?ver=2&",
                    oParams = {
                        bid: "sshop",
                        uin: option.uin,
                        area: option.zoneid,
                        table_type: table_type,
                        scendid: option.sceneid,
                        fields: JSON.stringify({
                            //ǰ����Ϣ
                            userInfo: {
                                "credid": 'fo4_secretshop_8326',
                                "userid": option.uin,
                                "area": option.zoneid, //��������
                            },
                            djcInfo: djcInfo, //���۳���Ϣ
                            rcInfo: rcinfo //rc������Ϣ
                        })
                    };
                console.log("fields:" + JSON.stringify(oParams));
                D.mo.loadScript(sUrl, oParams);
            })
        };
        if(typeof recommend2 != "undefined") {
            callback();
        }
    })
};
//��ȡ�ϱ�
function reportLqClick(pkgId) {
    Hx.report("SecretShopFreeInfo", {
        "freeitems": [pkgId]
    },{'extend_info':Hx.rcinfo.data.extend_info,'alog_info':Hx.rcinfo.data.alog_info});
};

//�齱���
function repordrawClick() {
    Hx.report("SecretShopClickInfo", {
        "button_type": "3",
        "discount":Hx.discount
    },Hx.rcinfo);
};

//����ʱ
function countTime() {
    var msec = Hx.endDay.getTime() - Hx.nowDay.getTime();
    if (msec <= 0) {
        $("#countdown").text("00Сʱ00��00��");
        clearInterval(Hx.timer);
        return;
    }
    var hour = Math.floor(msec / 1000 / 60 / 60 % 24);
    var minute = Math.floor(msec / 1000 / 60 % 60);
    var second = Math.floor(msec / 1000 % 60);
    var _html = hour + 'Сʱ' + minute + '��' + second + '��';
    //$("#countdown").text( _html);
    $('#hour').text(hour);
    $('#minute').text(minute);
    $('#s').text(second);
}
//����ʱ��
function timeString(a) {
    if (D.mo.now == undefined) {
        D.mo.now = D.mo.getSeverDateTime();
        D.mo.now.setUTCHours(D.mo.now.getUTCHours() + 8);
    }
    var now = D.mo.now;
    // now.setUTCHours(now.getUTCHours() + 8);
    a = a.replace("yyyy", now.getUTCFullYear());
    //a = a.replace("mm", checktime(now.getUTCMonth() + 1));
    a = a.replace("mm", now.getUTCMonth() + 1); //ǰ�治��0
    a = a.replace("dd", checktime(now.getUTCDate()));
    a = a.replace("hh", checktime(now.getUTCHours()));
    a = a.replace("MM", checktime(now.getUTCMinutes()));
    a = a.replace("ss", checktime(now.getUTCSeconds()));
    return a;
}
function checktime(i) {
    return i < 10 ? "0" + i : i;
}
//������
function reportBuyClick(iGoodsId) {
    Hx.report("SecretShopClickInfo", {
        "button_type": "0",
        "discount":Hx.discount,
        "item_id":iGoodsId
    },Hx.rcinfo);
};
//�����ʽ
function init(typezhi){
    if(D.mo.isH5){
        if(Hx.totalnunmx>=7){
            $(".box-prize .btn-change").attr('href',"javascript:alert('��Ǹ�����Ѿ�ȫ�����꣬�޷��ٻ�');");
        }
        $('.box-prize .bg-prize').unbind().on('touchstart touchend',function(){
            $(this).parents().find('.tk').css('opacity','0')
            $(this).parent().find('.tk').toggle();
        })
    }else{
        if(Hx.totalnunmx>=7){
            $(".shop-list li .btn-change").attr('href',"javascript:alert('��Ǹ�����Ѿ�ȫ�����꣬�޷��ٻ�');");
        }
        $('.shop-list .imgBox').unbind().hover(function(){
            $(this).find('.fc').toggle();
        })
    }
}
// ����
function TGDialogS(e){
    // ����milo������dialog���
    need("biz.dialog",function(Dialog){
        Dialog.show({
            id:e,
            bgcolor:'#000', //���������֡�����ɫ����ʽΪ"#FF6600"�����޸ģ�Ĭ��Ϊ"#fff"
            opacity:50 //���������֡���͸���ȣ���ʽΪ��10-100������ѡ
        });
    });
}
function closeDialog(){
    // ����milo������dialog���
    need("biz.dialog",function(Dialog){
        Dialog.hide();
    });
}
//�����¼
//�ҵĹ����¼
var w_index = 1;
var w_total = 1;
$("body").delegate("#prev", "click", function() {
    if(w_index == 1) {
        return;
    }
    record(w_index - 1);
});

$("body").delegate("#next", "click", function() {
    if(w_index == w_total) {
        return;
    }
    record(w_index + 1);
});
//�ҵĹ����¼
function record(a) {
    D.mo.bind(function(bindedInfo, LoginManager) {
        var sUrl = location.protocol + "//apps.game.qq.com/cgi-bin/daoju/v3/api/order/order_list.cgi?",
            oParams = {
                _biz_code: "fo4",
                pn: a,
                ps: 5,
                app_set: "1101,1003,2106,2110,1000",
                buy_begin: "2019-4-23 00:00:00",
                _act_id: [D.mo.actid, D.mo.actid2].join(),
                hist: 0,
                _cs: 1,
                status: 100,
                plug_unset: 9800,
                _output_fmt: 2
            };
        milo.loader.loadScript(sUrl + $.param(oParams) + "&_t=" + Math.random(), function() {
            w_index = a;
            w_total = order_list.total % oParams.ps > 0 ? parseInt(order_list.total / oParams.ps) + 1 : parseInt(order_list.total / oParams.ps);
            if(order_list.data == null) {
                TGDialogS('dialog');
                return;
            }
            var leng = order_list.data.length;
            for(var i = 0; i < oParams.ps; i++) {
                if(i < leng) {
                    var itembuylistinfo = order_list.data[i];
                    itembuylistinfo.sRoleName = decodeURIComponent(itembuylistinfo.sRoleName);
                    itembuylistinfo.sGoodsName = itembuylistinfo.sGoodsInfo.list[0].sPacketName;
                    itembuylistinfo.sPrice = itembuylistinfo.iPayAmount / 100 + "Q��";
                    if(itembuylistinfo.sAttach != null) {
                        itembuylistinfo.sTicket = parseInt(itembuylistinfo.sAttach.iCouponNum) / 10 + "��";
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
                TGDialogS('dialog');
            });
        });
    })
};