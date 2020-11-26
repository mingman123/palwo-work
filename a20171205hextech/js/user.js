var G_AREA=0;
var G_TRADE=[
    [121009  ,5,'炫彩',0],
    [121010  ,5,'炫彩',0],
    [107012  ,5,'炫彩',0],
    [107013  ,5,'炫彩',0],
    [266004  ,5,'炫彩',0],
    [266006  ,5,'炫彩',0],
    [54011   ,5,'炫彩',0],
    [54015   ,5,'炫彩',0],
    [103010  ,10,"炫彩 沙漠玫瑰打歌服<br>赠 偶像歌手 阿狸",1],
    [103012  ,10,"炫彩 极地雪莲打歌服<br>赠 偶像歌手 阿狸",1],
    [254006  ,10,"炫彩 督察<br>赠 女警官 蔚",1],
    [254007  ,10,"炫彩 海警警长<br>赠 女警官 蔚",1]
];
var G_AWARD=[
    ['龙的传人 李青','龙年限定'],
    ['海克斯科技 安妮','限定皮肤'],
    ['摄魂使者 薇恩','限定皮肤'],
    ['银龙裁决 泰隆','龙年限定'],
    ['钢铁军团 拉克丝','限定皮肤'],
    ['定海神珍 孙悟空','龙年限定'],
    ['安妮漫游仙境','一周年限定'],
    ['你看见过我的熊猫吗','蛇年限定'],
    ['地底世界 崔斯特','限定皮肤'],
    ['古琴余韵 娑娜','龙年限定'],
    ['神龙之翼 库奇','蛇年限定'],
    ['神龙烈焰 金克丝','羊年限定'],
    ['电玩女神 厄运小姐','三周年限定'],
    ['冬季仙境 奥莉安娜','冰雪节限定'],
    ['SKT T1 李青','限定皮肤'],
    ['勇敢的心 德莱厄斯','二周年限定'],
    ['创战纪 希维尔','限定皮肤'],
    ['S卧虎藏龙 贾克斯','限定皮肤'],
    ['醒狮 克格莫','龙年限定'],
    ['替父从军 花木兰','马年限定']
];

function GetLOLItem(vData)
{
    iRet = parseInt(vData["iRet"],10);
    if(iRet == 0)
    {
        for(var j=0; j< G_TRADE.length; j++)
        {
            for(var i=0;i<vData["dataItem"]["Item_2"].length;i++)
            {
                if(G_TRADE[j][0] == vData["dataItem"]["Item_2"][i]["ItemCode"])
                {
                    $("#BTN_"+G_TRADE[j][0]).attr("onclick","").attr("class","spr yyy-btn").html("<i class='sp'></i>");
                }
            }
        }
    }
    else
    {
        showSysInfo(vData["sMsg"]);
    }
}

//显示弹框
function showSysInfo(sysMsg)
{
    $("#sys_info").html(sysMsg);
    TGDialogS('sys');
}
//确认兑换后出现弹框
function showLoadInfo(sysMsg)
{
    $("#sys_info").html(sysMsg);
    TGDialogS('sys');
}
//显示多少颗
function GetLOLLoot(vData)
{
    iRet = parseInt(vData["iRet"],10);
    if(iRet == 0)
    {
        if(parseInt(vData["dataItem"]["iTotal"],10) > 0)
        {
            for(var i=0;i<vData["dataItem"]["list"].length;i++)
            {
                if(vData["dataItem"]["list"][i]["item"] == "MATERIAL_rare")
                {
                    $("#RARE_NUM").html(vData["dataItem"]["list"][i]["num"]);
                    //G_MATERIAL_rare = parseInt(vData["dataItem"]["list"][i]["num"],10);
                    break;
                }
            }
        }
    }
    else
    {
        showSysInfo(vData["sMsg"]);
    }
}
//页面初始化
function InitTrade()
{
    var awardHtml='';
    var LootList={"list":[]};
    for(var i=0; i< G_TRADE.length; i++)
    {
        var LootItem={};
        LootItem["vItemCode"]=G_TRADE[i][0];
        LootItem["iAmount"]=G_TRADE[i][1];
        if(G_TRADE[i][3] == 1)
        {
            LootItem["vItemName"]=G_TRADE[i][2];
        }
        else
        {
            var _tmpName =RALFSHEN_LOLHeroAndSkin[G_TRADE[i][0]].split(" ");
            if(_tmpName.length < 3)
            {
                LootItem["vItemName"]=RALFSHEN_LOLHeroAndSkin[G_TRADE[i][0]]+"<br>"+G_TRADE[i][2];
            }
            else
            {
                LootItem["vItemName"]=_tmpName[0]+" "+_tmpName[1]+"<br>"+_tmpName[2]+" "+G_TRADE[i][2];
            }
        }
        LootList["list"].push(LootItem);
        //$("#BTN_"+G_TRADE[i][0]).attr("onclick","TradeSkin("+G_TRADE[i][0]+")").attr("class","sp btn-2").html("立即兑换<i class='sp'></i>");
    }
    for(var i=0; i< G_AWARD.length; i++){
        awardHtml+='<li><div class="list2-img"><i></i>' +
            '<img src="//ossweb-img.qq.com/images/lol/act/a20160921hextech/img-'+(i+1)+'.jpg" width="156" height="284" alt="'+G_AWARD[i][0]+'">' +
            '<p class="name"><strong>'+G_AWARD[i][0]+'</strong>'+G_AWARD[i][1]+'</p></div></li>' ;

    }
    // need("util.template",function(template){
    // var t = template.parseDOMTemplate("rTradeItem_jst");
    // $("#TradeItem_List").html(t.process(LootList));
    // });
    //暂时屏蔽
    $('#awardItem_List').html(awardHtml);
}
//点击立即兑换
function TradeSkin(vItemCode)
{
    if(G_AREA == 0)
    {
        GetAreaInfo();
        return;
    }

    for(var i=0; i< G_TRADE.length; i++)
    {
        if(G_TRADE[i][0] == vItemCode)
        {
            var _msg = "";
            _msg = "您是否确认消耗<span>"+G_TRADE[i][1]+"</span>颗稀有宝石兑换皮肤 <span>"+RALFSHEN_LOLHeroAndSkin[vItemCode]+"</span><br>并领取至<span>"+LOLServerSelect.zoneToName(G_AREA)+"</span>";
            _msg += "<div class='dia-btn'>";
            _msg += "<a href='javascript:;' onclick='DoTrade("+vItemCode+")' class='sp btn-2' title='确认' style='position: static;'>确认<i class='sp'></i></a>";
            _msg += "<a href='javascript:;' onclick='closeDialog()' class='sp btn-3' title='取消' >取消<i class='sp'></i></a>";
            _msg += "</div>";
            showSysInfo(_msg);
            break;
        }
    }
}
//点击确认兑换后
function DoTrade(vItemCode)
{
    CallFunction('','DiamondTrade','&Item='+vItemCode,'MarciaAction',false);
}
function DiamondTrade(vData)
{
    iRet = parseInt(vData["iRet"],10);
    if(iRet == 0)
    {
        CallFunction('UserHist_GetLOLItem_GetLOLLoot','','SearchType=4&e_num=49','MarciaAction',true);
        var _msg="恭喜您获得:<br>";
        _msg +=RALFSHEN_LOLHeroAndSkin[vData["list"]["vItemCode"]];
        if(vData["list"]["iSend"] != "0")
            _msg +="<a href='javascript:;' onclick=\"DoGetItem('"+vData["list"]["vSerialNo"]+"')\">>>请点击领取</a>";
        _msg += "<br>";
        _msg += "虚拟道具将会在24小时内到账";
        showSysInfo(_msg);
    }
    else
    {
        if(vData["sMsg"]!==''){
            showSysInfo(vData["sMsg"]);
        }else{
            showSysInfo('对不起，您尚未拥有对应英雄，无法兑换');
        }
    }
}

function UnloginFunc()
{
    need("biz.login",function(LoginManager){
        LoginManager.login();
    });
}

function GetAreaInfo()
{
    closeDialog();
    need("biz.login",function(LoginManager){
        LoginFunc = function(){
            need(["biz.roleselector"],function(RoleSelector){
                RoleSelector.init({
                    'gameId' : 'lol',
                    'isQueryRole' : true,
                    'isShutdownSubmit' : false,
                    'submitEvent' : function(roleObject){
                        if(G_AREA == roleObject.submitData["areaid"])
                            return;
                        G_AREA=roleObject.submitData["areaid"];
                        SetAreaInfo();
                    },
                    'cancelEvent' : function(){
                    },
                    'openEvent' : function(){
                    },
                    'closeEvent' : function(){
                    }
                });
                RoleSelector.show();
            });
        };
        LoginManager.checkLogin(LoginFunc, UnloginFunc);
    });
}
var goUrl='';
function CallFunction(m,a,param,control,Noload)
{
    need("biz.login",function(LoginManager){
        LoginFunc = function(){
            if(!Noload)
                showLoadInfo("处理中，请稍候......");
            if(G_AREA == 0)
            {
                GetAreaInfo();
                return;
            }
            param+="&areaid="+G_AREA;
            goUrl="http://apps.game.qq.com/lol/a20150928lolRF/"+control+".php?module="+m+"&action="+a+"&"+param+"&rid=" + Math.random();
            $.getScript(goUrl, function() {
                if(!Noload)
                    closeDialog();
                if(typeof(window["J_"+control])!="undefined" && window["J_"+control] !=null) {
                    var iRet = parseInt(window["J_"+control]["iRet"],10);
                    if(iRet == 0)
                    {
                        var ParamArray = m.split("_").concat(a.split("_"));
                        for(var i=0;i<ParamArray.length; i++ )
                        {
                            if(ParamArray[i] == "")
                                continue;
                            if(typeof(window["J_"+control][ParamArray[i]])!="undefined" && window["J_"+control][ParamArray[i]]!=null)
                                if(typeof(window[ParamArray[i]])=="function")
                                    window[ParamArray[i]](window["J_"+control][ParamArray[i]]);
                        }
                    }
                    else
                    {
                        showSysInfo(window["J_"+control]["sMsg"]);
                    }
                }
            });
        };
        LoginManager.checkLogin(LoginFunc, UnloginFunc);
    });
}
//兑换记录
function UserHist(vData)
{
    iRet = parseInt(vData["iRet"],10);
    if(iRet == 0)
    {
        for(var i=0;i < vData["list"].length;i++)
        {
            if(vData["list"][i]["iItemType"] == "1" || vData["list"][i]["iItemType"] == "2")
            {
                vData["list"][i]["vInfo"] =RALFSHEN_LOLHeroAndSkin[vData["list"][i]["vItemCode"]];
                if(vData["list"][i]["iDuration"] != "0")
                    vData["list"][i]["vInfo"] += " "+vData["list"][i]["iDuration"]+"天体验"
            }
            else
                vData["list"][i]["vInfo"]=vData["list"][i]["vInfo"]+"*"+vData["list"][i]["iItemNum"];
            if(vData["list"][i]["iType"] == '0')
            {
                $("#BTN_"+vData["list"][i]["vItemCode"]).attr("onclick","DoGetItem('"+vData["list"][i]["vSerialNo"]+"')").attr("class","sp btn-2").html("立即领取<i class='sp'></i>");
                vData["list"][i]["Send"]="<a href=\"javascript:;\" onclick=\"DoGetItem('"+vData["list"][i]["vSerialNo"]+"')\">点击领取</a>";
            }
            else
            {
                $("#BTN_"+vData["list"][i]["vItemCode"]).attr("onclick","").attr("class","spr yyy-btn").html("<i class='sp'></i>");
                vData["list"][i]["Send"]="已领取";
            }
            vData["list"][i]["iAreaStr"] = LOLServerSelect.zoneToName(vData["list"][i]["iArea"]);
        }
        need("util.template",function(template){
            var t = template.parseDOMTemplate("rUserGet_jst");
            $("#target_list").html(t.process(vData));
        });
    }
    else
    {
        showSysInfo(vData["sMsg"]);
    }
}


function SetAreaInfo()
{
    $("#areainfo").html("<a href='javascript:;' onclick='amsInit(219461, 559988);'>["+LOLServerSelect.zoneToName(G_AREA)+"]</a>");
    // var cookieKey = "LOL_a20160921hextech_bind_"+LoginManager.getUserUin();
    // milo.cookie.set(cookieKey, G_AREA, 691200, document.domain, "/", false);
    //<a href='javascript:;' onclick='TGDialogS(d_userhist);'>[兑换记录]</a>
    //$("#areainfo").html("<a href='javascript:;' onclick='GetAreaInfo(\"Undo\")'>["+LOLServerSelect.zoneToName(G_AREA)+"]</a>拥有的稀有宝石数量<span id='RARE_NUM'>0</span> 颗<a href='javascript:;' onclick='TGDialogS(\"d_userhist\");'>[兑换记录]</a>");
    //InitTrade();
    //CallFunction('UserHist_GetLOLItem_GetLOLLoot','','SearchType=4&e_num=49','MarciaAction',true);
}
//点击刷新
function RefUser()
{
    var time = 10;
    (function() {
        if (time > 1) {
            time--;
            $("#btn_ref").attr("onclick","").html(time+"秒");
            setTimeout(arguments.callee, 1000);
        } else {
            $("#btn_ref").attr("onclick","pgvSendClick({hottag:'act.a20160921hextech.renovate'});RefUser();").html("点击刷新<i class='sp'></i>");
        }
    })();
    InitTrade();
    CallFunction('UserHist_GetLOLItem_GetLOLLoot','','SearchType=4&e_num=49','MarciaAction',true);
}
//获取轮播图
function  loads() {
    CallSwooleFunc('Hextech','HaxRotationMap','Haxrotationmap')
}

function CallSwooleFunc(proj, c, a, param) {
    var url = '//lol.sw.game.qq.com/lol/commact/?proj=' + proj + '&c=' + c + '&a=' + a;
    if (param) {
        url += param;
    }
    url += '&rd=' + Math.random();
    $.ajax({
        dataType : 'jsonp',
        url : url,
        xhrFields : {
            withCredentials : true
        },
        success : function(data) {
            console.log(data);
            var target = $('.qt-skin ul'),
                html = '<li>';
            $.each(data,function (key,val) {
                $.each(val,function (k,v) {
                    if(typeof(v[0]) == "number") {
                        html += '<div class="skin-item"><div class="list3-img"><i></i>' +
                            '<img src="http://ossweb-img.qq.com/images/lol/appskin/' + v[0] + '.jpg" width="156" height="284" alt="' + RALFSHEN_LOLHeroAndSkin[v[0]] + '"></div>' +
                            '<p class="name"><strong>恭喜' + v[1] + '获得</strong>' + RALFSHEN_LOLHeroAndSkin[v[0]] + '</p></div>';
                    }else if(typeof(v[0]) == 'object'){
                        html +='<div class="skin-item"><div class="list3-img"><i></i>' +
                            '<img src="http://game.gtimg.cn/images/lol/companion/'+v[0]['UrlImg']+'.png" width="156" height="284" alt="'+v[0]['ShowName']+'"></div>' +
                            '<p class="name"><strong>恭喜'+v[1]+'获得</strong>'+v[0]['ShowName']+'</p></div>';
                    }
                    if(k==9||k==19||k==29){
                        html= html+'</li><li>';
                    }
                })
            });

            html= html+'</li>';
            target.html( html);
            $('.qt-skin .list3').css({'height':'735px','width':'4040px'});
            var itemcss={
                'position': 'relative',
                'width': '178px',
                'height': '310px',
                'float': 'left',
                'display': 'inline',
                'margin': '-2px 0 70px 0'
            }
            $('.skin-item ').css(itemcss);
            $('.list3 li').css({'width': '890px', 'float': 'left', 'height': '735px', 'padding': '0 47px 0 63px','overflow':'hidden','margin-right':'10px'});


        }
    });
}
// 用户中奖皮肤列表轮播12-8
need("biz.scroll",function(s){
    //左右滚动js代码
    s.init({
        conId:'qt_skin',//内容容器ID
        leftId:'m_right',//左箭头ID
        rightId:'m_left',//右箭头ID
        frameWidth:'1000',//显示框宽度
        pageSpace:'1010',//翻页宽度或高度 一次滑过多少
        autoPlay:true,//true为自动播放、false为不自动播放
        position:'left',//播放方向 left为向左，up为向上,设置为up时必须加上翻页高度pageHeight值
        autoPlayTime:'5',//自动播放间隔时间(秒)
        dotListId:'qt_dot'//是否需要分页，不需要则删掉此行，并将页面上相应代码去掉，如此例分页代码为<div id="do" class="do"></div>，删掉即可
    });
});


// 加载英雄、皮肤图片12-8
// need(["biz.delayLoad"]);
InitTrade();
//加载轮播列表
loads();
