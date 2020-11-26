	function renderHtml(data) {
        let html = '';
        for(var i in data) {
            html +='<li>';
            html +='<img src="'+data[i]['img']+'"'+'alt="">';
            html +='<p>'+data[i]['desc']+'</p>';
            html +='</li>';
        }
        $('.list').html(html);
        TGDialogS('dia1');
      
    }
    let championList44 = [
    {
//          id: 498003,
            desc: "iG-艾瑞莉娅",
            img: "ossweb-img/img1.jpg"
        },
        {
//          id: 498003,
            desc: "iG-菲奥娜",
            img: "ossweb-img/img2.jpg"
        },
        {
//          id: 498003,
            desc: "iG-卡蜜尔",
            img: "ossweb-img/img3.jpg"
        },
        {
//          id: 498003,
            desc: "iG-卡莎",
            img: "ossweb-img/img4.jpg"
        },
        {
//          id: 498003,
            desc: "iG-乐芙兰",
            img: "ossweb-img/img5.jpg"
        },
        {
//          id: 498003,
            desc: "iG-洛",
            img: "ossweb-img/img6.jpg"
        },
        {
            id: 498003,
            desc: "SSG 霞",
            img: "https://ossweb-img.qq.com/images/lol/appskin/498003.jpg"
        },
        {
            id: 497003,
            desc: "SSG 洛",
            img: "https://ossweb-img.qq.com/images/lol/appskin/497003.jpg"
        },
        {
            id: 81019,
            desc: "SSG 伊泽瑞尔",
            img: "https://ossweb-img.qq.com/images/lol/appskin/81019.jpg"
        },
        {
            id: 59008,
            desc: "SSG 嘉文四世",
            img: "https://ossweb-img.qq.com/images/lol/appskin/59008.jpg"
        },
        {
            id: 163002,
            desc: "SSG 塔莉垭",
            img: "https://ossweb-img.qq.com/images/lol/appskin/163002.jpg"
        },
        {
            id: 150014,
            desc: "SSG 纳尔",
            img: "https://ossweb-img.qq.com/images/lol/appskin/150014.jpg"
        },
        {
            id: 30005,
            desc: "Fnatic 卡尔萨斯",
            img: "https://ossweb-img.qq.com/images/lol/appskin/30005.jpg"
        },
        {
            id: 40006,
            desc: "Fnatic 迦娜",
            img: "https://ossweb-img.qq.com/images/lol/appskin/40006.jpg"
        },
        {
            id: 42007,
            desc: "Fnatic 库奇",
            img: "https://ossweb-img.qq.com/images/lol/appskin/42007.jpg"
        },
        {
            id: 59006,
            desc: "Fnatic 嘉文四世",
            img: "https://ossweb-img.qq.com/images/lol/appskin/59006.jpg"
        },
        {
            id: 79008,
            desc: "Fnatic 古拉加斯",
            img: "https://ossweb-img.qq.com/images/lol/appskin/79008.jpg"
        },
        {
            id: 20006,
            desc: "暗杀星 努努",
            img: "https://ossweb-img.qq.com/images/lol/appskin/20006.jpg"
        },
        {
            id: 36007,
            desc: "暗杀星 蒙多",
            img: "https://ossweb-img.qq.com/images/lol/appskin/36007.jpg"
        },
        {
            id: 61004,
            desc: "暗杀星 奥莉安娜",
            img: "https://ossweb-img.qq.com/images/lol/appskin/61004.jpg"
        },
        {
            id: 81006,
            desc: "暗杀星 伊泽瑞尔",
            img: "https://ossweb-img.qq.com/images/lol/appskin/81006.jpg"
        },
        {
            id: 98006,
            desc: "暗杀星 慎",
            img: "https://ossweb-img.qq.com/images/lol/appskin/98006.jpg"
        },
        {
            id: 143003,
            desc: "SKT T1 婕拉",
            img: "https://ossweb-img.qq.com/images/lol/appskin/143003.jpg"
        },
        {
            id: 238002,
            desc: "SKT T1 劫",
            img: "https://ossweb-img.qq.com/images/lol/appskin/238002.jpg"
        },
        {
            id: 24008,
            desc: "SKT T1 贾克斯",
            img: "https://ossweb-img.qq.com/images/lol/appskin/24008.jpg"
        },
        {
            id: 64006,
            desc: "SKT T1 李青",
            img: "https://ossweb-img.qq.com/images/lol/appskin/64006.jpg"
        },
        {
            id: 67005,
            desc: "SKT T1 薇恩",
            img: "https://ossweb-img.qq.com/images/lol/appskin/67005.jpg"
        },
        {
            id: 107003,
            desc: "SSW 雷恩加尔",
            img: "https://ossweb-img.qq.com/images/lol/appskin/107003.jpg"
        },
        {
            id: 27007,
            desc: "SSW 辛吉德 ",
            img: "https://ossweb-img.qq.com/images/lol/appskin/27007.jpg"
        },
        {
            id: 29007,
            desc: "SSW 图奇",
            img: "https://ossweb-img.qq.com/images/lol/appskin/29007.jpg"
        },
        {
            id: 412004,
            desc: "SSW 锤石",
            img: "https://ossweb-img.qq.com/images/lol/appskin/412004.jpg"
        },
        {
            id: 91004,
            desc: "SSW 泰隆",
            img: "https://ossweb-img.qq.com/images/lol/appskin/91004.jpg"
        },
        {
            id: 12009,
            desc: "SKT T1 阿利斯塔",
            img: "https://ossweb-img.qq.com/images/lol/appskin/12009.jpg"
        },
        {
            id: 13010,
            desc: "SKT T1 瑞兹",
            img: "https://ossweb-img.qq.com/images/lol/appskin/13010.jpg"
        },
        {
            id: 268003,
            desc: "SKT T1 阿兹尔",
            img: "https://ossweb-img.qq.com/images/lol/appskin/268003.jpg"
        },
        {
            id: 429003,
            desc: "SKT T1 卡莉丝塔",
            img: "https://ossweb-img.qq.com/images/lol/appskin/429003.jpg"
        },
        {
            id: 58008,
            desc: "SKT T1 雷克顿",
            img: "https://ossweb-img.qq.com/images/lol/appskin/58008.jpg"
        },
        {
            id: 60004,
            desc: "SKT T1 伊莉丝",
            img: "https://ossweb-img.qq.com/images/lol/appskin/60004.jpg"
        },
        {
            id: 134005,
            desc: "SKT T1辛德拉",
            img: "https://ossweb-img.qq.com/images/lol/appskin/134005.jpg"
        },
        {
            id: 202003,
            desc: "SKT T1烬",
            img: "https://ossweb-img.qq.com/images/lol/appskin/202003.jpg"
        },
        {
            id: 245011,
            desc: "SKT T1艾克",
            img: "https://ossweb-img.qq.com/images/lol/appskin/245011.jpg"
        },
        {
            id: 154006,
            desc: "SKT T1扎克",
            img: "https://ossweb-img.qq.com/images/lol/appskin/154006.jpg"
        },
        {
            id: 267008,
            desc: "SKT T1娜美",
            img: "https://ossweb-img.qq.com/images/lol/appskin/267008.jpg"
        },
        {
            id: 2015,
            desc: "SKT T1奥拉夫",
            img: "https://ossweb-img.qq.com/images/lol/appskin/2015.jpg"
        }
        ]

        let championList477 = [
{
id: 86013,
desc: "神王 盖伦 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/86013.jpg"
},
{
id: 122015,
desc: "神王 德莱厄斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/122015.jpg"
},
{
id: 17018,
desc: "小蜜蜂 提莫 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/17018.jpg"
},
{
id: 21016,
desc: "武装战姬 厄运小姐 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/21016.jpg"
},
{
id: 99007,
desc: "大元素使 拉克丝 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/99007.jpg"
},
{
id: 37006,
desc: "DJ 娑娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/37006.jpg"
},
{
id: 67011,
desc: "源计划：净化 薇恩 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/67011.jpg"
},
{
id: 92018,
desc: "未来战士 锐雯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/92018.jpg"
},
{
id: 145001,
desc: "弹幕天使 卡莎 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/145001.jpg"
},
{
id: 59007,
desc: "死兆星 嘉文四世 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/59007.jpg"
},
{
id: 8008,
desc: "黑潮 弗拉基米尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/8008.jpg"
},
{
id: 131012,
desc: "黑潮 黛安娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/131012.jpg"
},
{
id: 92016,
desc: "黎明使者 锐雯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/92016.jpg"
},
{
id: 157009,
desc: "黑夜使者 亚索 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/157009.jpg"
},
{
id: 11009,
desc: "源计划：林 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/11009.jpg"
},
{
id: 157002,
desc: "源计划：风 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/157002.jpg"
},
{
id: 4011,
desc: "未来战士 崔斯特 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/4011.jpg"
},
{
id: 98015,
desc: "未来战士 慎 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/98015.jpg"
},
{
id: 555001,
desc: "怨之砂 派克 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/555001.jpg"
},
{
id: 28005,
desc: "腥红之月 伊芙琳 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/28005.jpg"
},
{
id: 68004,
desc: "废土男爵 兰博 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/68004.jpg"
},
{
id: 420002,
desc: "抵抗军炎魔 俄洛伊 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/420002.jpg"
},
{
id: 50004,
desc: "驯龙大师 斯维因 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/50004.jpg"
},
{
id: 24013,
desc: "武神 贾克斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/24013.jpg"
},
{
id: 142001,
desc: "赛博潮流 佐伊 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/142001.jpg"
},
{
id: 202004,
desc: "源计划：升华 烬 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/202004.jpg"
},
{
id: 254011,
desc: "源计划：裁决 蔚 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/254011.jpg"
},
{
id: 53021,
desc: "银白枪骑 布里茨 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/53021.jpg"
},
{
id: 53020,
desc: "暮色枪骑 布里茨 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/53020.jpg"
},
{
id: 107008,
desc: "霸天猎手 雷恩加尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/107008.jpg"
},
{
id: 1011,
desc: "银河魔装机神 安妮 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/1011.jpg"
},
{
id: 60005,
desc: "银河魔装机神 伊莉丝 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/60005.jpg"
},
{
id: 76009,
desc: "银河魔装机神 奈德丽 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/76009.jpg"
},
{
id: 150013,
desc: "银河魔装机神 纳尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/150013.jpg"
},
{
id: 83003,
desc: "苍穹之光 约里克 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/83003.jpg"
},
{
id: 11011,
desc: "玉剑传说 无极 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/11011.jpg"
},
{
id: 40008,
desc: "玉剑传说 风仙子 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/40008.jpg"
},
{
id: 114022,
desc: "玉剑传说 无双 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/114022.jpg"
},
{
id: 69008,
desc: "上古魔蛇 卡西奥佩娅 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/69008.jpg"
},
{
id: 16007,
desc: "星之守护者 索拉卡 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/16007.jpg"
},
{
id: 21015,
desc: "星之守护者 厄运小姐 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/21015.jpg"
},
{
id: 103014,
desc: "星之守护者 阿狸 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/103014.jpg"
},
{
id: 134006,
desc: "星之守护者 辛德拉 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/134006.jpg"
},
{
id: 516001,
desc: "雷霆领主 奥恩 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/516001.jpg"
},
{
id: 10009,
desc: "五杀摇滚女声主唱 凯尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/10009.jpg"
},
{
id: 63006,
desc: "战场BOSS 布兰德 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/63006.jpg"
},
{
id: 90006,
desc: "战场BOSS 玛尔扎哈 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/90006.jpg"
},
{
id: 18012,
desc: "欧米伽小队 魔鬼伞兵 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/18012.jpg"
},
{
id: 29008,
desc: "欧米伽小队 毒针狙击手 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/29008.jpg"
},
{
id: 45009,
desc: "欧米伽小队 天雷爆破手 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/45009.jpg"
},
{
id: 105010,
desc: "欧米伽小队 鬼影蛙人 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/105010.jpg"
},
{
id: 141001,
desc: "摄魂猎手 凯隐 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/141001.jpg"
},
{
id: 51011,
desc: "未来战士 凯特琳 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/51011.jpg"
},
{
id: 61007,
desc: "死兆星 奥莉安娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/61007.jpg"
},
{
id: 121004,
desc: "死兆星 卡兹克 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/121004.jpg"
},
{
id: 497001,
desc: "晨星之翎 洛 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/497001.jpg"
},
{
id: 498001,
desc: "暮星之羽 霞 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/498001.jpg"
},
{
id: 64011,
desc: "神拳 李青 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/64011.jpg"
},
{
id: 12010,
desc: "哞利斯塔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/12010.jpg"
},
{
id: 58009,
desc: "鳄霸 雷克顿 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/58009.jpg"
},
{
id: 85007,
desc: "超级英雄 凯南 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/85007.jpg"
},
{
id: 5013,
desc: "屠龙勇士 赵信 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/5013.jpg"
},
{
id: 143004,
desc: "驯龙女巫 婕拉 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/143004.jpg"
},
{
id: 4010,
desc: "腥红之月 崔斯特 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/4010.jpg"
},
{
id: 91005,
desc: "腥红之月 泰隆 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/91005.jpg"
},
{
id: 131011,
desc: "腥红之月 黛安娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/131011.jpg"
},
{
id: 202002,
desc: "腥红之月 烬 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/202002.jpg"
},
{
id: 41008,
desc: "恐惧新星 普朗克 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/41008.jpg"
},
{
id: 164001,
desc: "源代码 卡蜜尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/164001.jpg"
},
{
id: 30009,
desc: "卡尔萨斯·祸害之光 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/30009.jpg"
},
{
id: 113007,
desc: "瑟庄妮·逐晓者 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/113007.jpg"
},
{
id: 126004,
desc: "杰斯·光明之锤 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/126004.jpg"
},
{
id: 432006,
desc: " 巴德·吟游诗人 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/432006.jpg"
},
{
id: 48005,
desc: "灭世魔神 特朗德尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/48005.jpg"
},
{
id: 75010,
desc: "灭世魔神 内瑟斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/75010.jpg"
},
{
id: 111005,
desc: "灭世魔神 诺提勒斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/111005.jpg"
},
{
id: 120006,
desc: "灭世魔神 赫卡里姆 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/120006.jpg"
},
{
id: 40007,
desc: "星之守护者 迦娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/40007.jpg"
},
{
id: 78007,
desc: "星之守护者 波比 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/78007.jpg"
},
{
id: 117006,
desc: "星之守护者 璐璐 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/117006.jpg"
},
{
id: 222004,
desc: "星之守护者 金克丝 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/222004.jpg"
},
{
id: 427001,
desc: "糖果之王 艾翁 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/427001.jpg"
},
{
id: 2006,
desc: "牛扒狂战 奥拉夫 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/2006.jpg"
},
{
id: 80008,
desc: "面包之王 潘森 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/80008.jpg"
},
{
id: 84008,
desc: "刺身之拳 阿卡丽 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/84008.jpg"
},
{
id: 89009,
desc: "烧烤女神 蕾欧娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/89009.jpg"
},
{
id: 42008,
desc: "电玩上校 库奇 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/42008.jpg"
},
{
id: 81009,
desc: "电玩勇者 伊泽瑞尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/81009.jpg"
},
{
id: 240001,
desc: "爵士 克烈 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/240001.jpg"
},
{
id: 22008,
desc: "源计划：联合 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/22008.jpg"
},
{
id: 55009,
desc: "源计划：雄心 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/55009.jpg"
},
{
id: 245003,
desc: "源计划：自由 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/245003.jpg"
},
{
id: 267007,
desc: "海皇姬 娜美 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/267007.jpg"
},
{
id: 110006,
desc: "死兆星 韦鲁斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/110006.jpg"
},
{
id: 412005,
desc: "死兆星 锤石 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/412005.jpg"
},
{
id: 36009,
desc: "硬汉 蒙多 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/36009.jpg"
},
{
id: 106005,
desc: "怒熊 沃利贝尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/106005.jpg"
},
{
id: 150004,
desc: "狂狮 纳尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/150004.jpg"
},
{
id: 102006,
desc: "银河魔装机神 希瓦娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/102006.jpg"
},
{
id: 105009,
desc: "银河魔装机神 菲兹 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/105009.jpg"
},
{
id: 203002,
desc: "银河魔装机神 千珏 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/203002.jpg"
},
{
id: 163001,
desc: "弗雷尔卓德 塔莉垭 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/163001.jpg"
},
{
id: 10008,
desc: "钢铁审判官 凯尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/10008.jpg"
},
{
id: 27008,
desc: "黑色天灾 辛吉德 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/27008.jpg"
},
{
id: 56006,
desc: "恶咒亡魂 魔腾 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/56006.jpg"
},
{
id: 131003,
desc: "无限烈焰 黛安娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/131003.jpg"
},
{
id: 16006,
desc: "源代码 索拉卡 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/16006.jpg"
},
{
id: 127003,
desc: "源代码 丽桑卓 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/127003.jpg"
},
{
id: 14005,
desc: "霸天零式 赛恩 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/14005.jpg"
},
{
id: 57006,
desc: "喵凯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/57006.jpg"
},
{
id: 161003,
desc: "这货不是维克兹 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/161003.jpg"
},
{
id: 223002,
desc: "海牛大大 塔姆 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/223002.jpg"
},
{
id: 136001,
desc: "灰烬领主 奥瑞利安·索尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/136001.jpg"
},
{
id: 121003,
desc: "死亡绽放 卡兹克 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/121003.jpg"
},
{
id: 85006,
desc: "腥红之月 凯南 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/85006.jpg"
},
{
id: 157003,
desc: "腥红之月 亚索 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/157003.jpg"
},
{
id: 266002,
desc: "霸天剑魔 亚托克斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/266002.jpg"
},
{
id: 266003,
desc: "狂鲨 亚托克斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/266003.jpg"
},
{
id: 202001,
desc: "西部牛仔 烬 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/202001.jpg"
},
{
id: 432005,
desc: "冰雪游神 巴德 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/432005.jpg"
},
{
id: 13009,
desc: "瑞兹·白须 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/13009.jpg"
},
{
id: 79009,
desc: "古拉加斯·碎桶者 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/79009.jpg"
},
{
id: 110005,
desc: "韦鲁斯·迅箭 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/110005.jpg"
},
{
id: 120005,
desc: "长者之森 赫卡里姆 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/120005.jpg"
},
{
id: 201003,
desc: "布隆·狮心 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/201003.jpg"
},
{
id: 268002,
desc: "幽冥领主 阿兹尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/268002.jpg"
},
{
id: 18010,
desc: "驯龙炮手 崔丝塔娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/18010.jpg"
},
{
id: 420001,
desc: "虚空使者 俄洛伊 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/420001.jpg"
},
{
id: 20007,
desc: "丧尸 努努和威朗普 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/20007.jpg"
},
{
id: 80007,
desc: "丧尸杀手 潘森 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/80007.jpg"
},
{
id: 222003,
desc: "丧尸杀手 金克丝 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/222003.jpg"
},
{
id: 38005,
desc: "掠星魔刃 卡萨丁 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/38005.jpg"
},
{
id: 254004,
desc: "炼狱魔女 蔚 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/254004.jpg"
},
{
id: 63005,
desc: "灵魂烈焰 布兰德 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/63005.jpg"
},
{
id: 203001,
desc: "黯焰双魂 千珏 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/203001.jpg"
},
{
id: 2005,
desc: "黑暗骑士 奥拉夫 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/2005.jpg"
},
{
id: 12008,
desc: "黑暗骑士 阿利斯塔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/12008.jpg"
},
{
id: 24012,
desc: "光明骑士 贾克斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/24012.jpg"
},
{
id: 43005,
desc: "光明骑士 卡尔玛 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/43005.jpg"
},
{
id: 54007,
desc: "无畏号 墨菲特 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/54007.jpg"
},
{
id: 89008,
desc: "源计划：山 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/89008.jpg"
},
{
id: 114004,
desc: "源计划：火 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/114004.jpg"
},
{
id: 236006,
desc: "源计划：雷 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/236006.jpg"
},
{
id: 238003,
desc: "源计划：阴 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/238003.jpg"
},
{
id: 8007,
desc: "学生会长 弗拉基米尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/8007.jpg"
},
{
id: 103006,
desc: "风纪委员 阿狸 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/103006.jpg"
},
{
id: 122008,
desc: "热血班长 德莱厄斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/122008.jpg"
},
{
id: 245002,
desc: "任性学霸 艾克 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/245002.jpg"
},
{
id: 53011,
desc: "战场BOSS 布里茨 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/53011.jpg"
},
{
id: 105008,
desc: "兔宝宝 菲兹 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/105008.jpg"
},
{
id: 41002,
desc: "老兵 普朗克 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/41002.jpg"
},
{
id: 41005,
desc: "特种部队 普朗克 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/41005.jpg"
},
{
id: 4009,
desc: "逍遥赌侠 崔斯特 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/4009.jpg"
},
{
id: 21008,
desc: "女帝 厄运小姐 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/21008.jpg"
},
{
id: 86010,
desc: "暴君 盖伦 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/86010.jpg"
},
{
id: 104006,
desc: "无情重炮 格雷福斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/104006.jpg"
},
{
id: 133003,
desc: "死亡之鹰 奎因 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/133003.jpg"
},
{
id: 150002,
desc: "萌侦探 喵尔摩斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/150002.jpg"
},
{
id: 36008,
desc: "泳池派对 蒙多 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/36008.jpg"
},
{
id: 117005,
desc: "泳池派对 璐璐 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/117005.jpg"
},
{
id: 119004,
desc: "泳池派对 德莱文 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/119004.jpg"
},
{
id: 154002,
desc: "泳池派对 扎克 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/154002.jpg"
},
{
id: 223001,
desc: "大厨 塔姆 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/223001.jpg"
},
{
id: 421002,
desc: "泳池派对 雷克塞 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/421002.jpg"
},
{
id: 64010,
desc: "地下拳王 李青 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/64010.jpg"
},
{
id: 31006,
desc: "暴龙 科加斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/31006.jpg"
},
{
id: 34006,
desc: "翼龙 艾尼维亚 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/34006.jpg"
},
{
id: 58007,
desc: "猛龙 雷克顿 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/58007.jpg"
},
{
id: 23007,
desc: "梦魇 泰达米尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/23007.jpg"
},
{
id: 39005,
desc: "莲花之令 艾瑞莉娅 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/39005.jpg"
},
{
id: 245001,
desc: "时之砂 艾克 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/245001.jpg"
},
{
id: 35007,
desc: "万能小丑 萨科 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/35007.jpg"
},
{
id: 81008,
desc: "黑桃皇牌 伊泽瑞尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/81008.jpg"
},
{
id: 82005,
desc: "梅花国王 莫德凯撒 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/82005.jpg"
},
{
id: 134003,
desc: "方块王后 辛德拉 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/134003.jpg"
},
{
id: 99006,
desc: "星之守护者 拉克丝 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/99006.jpg"
},
{
id: 3005,
desc: "风执事 加里奥 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/3005.jpg"
},
{
id: 5006,
desc: "秘密特工 赵信 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/5006.jpg"
},
{
id: 67006,
desc: "苍穹之光 薇恩 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/67006.jpg"
},
{
id: 26005,
desc: "腥红之月 基兰 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/26005.jpg"
},
{
id: 115005,
desc: "奥术大师 吉格斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/115005.jpg"
},
{
id: 9008,
desc: "重生之沙 费德提克 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/9008.jpg"
},
{
id: 126003,
desc: "天启骑士 杰斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/126003.jpg"
},
{
id: 33007,
desc: "圣金甲虫 拉莫斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/33007.jpg"
},
{
id: 72004,
desc: "圣金甲虫 斯卡纳 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/72004.jpg"
},
{
id: 84007,
desc: "铁血女忍 阿卡丽 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/84007.jpg"
},
{
id: 101004,
desc: "圣金巫灵 泽拉斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/101004.jpg"
},
{
id: 17008,
desc: "欧米伽小队 幽灵特工 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/17008.jpg"
},
{
id: 15007,
desc: "光明骑士 希维尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/15007.jpg"
},
{
id: 19008,
desc: "黑暗骑士 沃里克 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/19008.jpg"
},
{
id: 22007,
desc: "黑暗骑士 艾希 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/22007.jpg"
},
{
id: 16005,
desc: "蕉泥座人 索拉卡 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/16005.jpg"
},
{
id: 75006,
desc: "单身贵族 内瑟斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/75006.jpg"
},
{
id: 77004,
desc: "这货不是乌迪尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/77004.jpg"
},
{
id: 267003,
desc: "鲛妮座人 娜美 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/267003.jpg"
},
{
id: 432001,
desc: "长者之森 巴德 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/432001.jpg"
},
{
id: 110004,
desc: "觅心射手 韦鲁斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/110004.jpg"
},
{
id: 111004,
desc: "光明骑士 诺提勒斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/111004.jpg"
},
{
id: 161002,
desc: "苍穹之光 维克兹 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/161002.jpg"
},
{
id: 55008,
desc: "闭月之颜 貂蝉 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/55008.jpg"
},
{
id: 76007,
desc: "枭姬 孙尚香 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/76007.jpg"
},
{
id: 201002,
desc: "猛虎 布隆 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/201002.jpg"
},
{
id: 60003,
desc: "腥红之月 伊莉丝 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/60003.jpg"
},
{
id: 412003,
desc: "腥红之月 锤石 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/412003.jpg"
},
{
id: 28004,
desc: "惊天魔盗 伊芙琳 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/28004.jpg"
},
{
id: 29006,
desc: "绝影神偷 图奇 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/29006.jpg"
},
{
id: 48004,
desc: "巡逻警官 特朗德尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/48004.jpg"
},
{
id: 106004,
desc: "警长 沃利贝尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/106004.jpg"
},
{
id: 421001,
desc: "上古战魂 雷克塞 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/421001.jpg"
},
{
id: 72003,
desc: "战地机甲 斯卡纳 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/72003.jpg"
},
{
id: 96008,
desc: "战地机甲 克格莫 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/96008.jpg"
},
{
id: 429001,
desc: "腥红之月 卡莉丝塔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/429001.jpg"
},
{
id: 7004,
desc: "邪鸦魅影 乐芙兰 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/7004.jpg"
},
{
id: 62004,
desc: "地狱行者 孙悟空 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/62004.jpg"
},
{
id: 122004,
desc: "灌篮高手 德莱厄斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/122004.jpg"
},
{
id: 51006,
desc: "铁血狙击手 凯特琳 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/51006.jpg"
},
{
id: 54006,
desc: "霸天巨兽 墨菲特 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/54006.jpg"
},
{
id: 121002,
desc: "圣金甲虫 卡兹克 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/121002.jpg"
},
{
id: 268001,
desc: "星际之门 阿兹尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/268001.jpg"
},
{
id: 21003,
desc: "特工狂花 厄运小姐 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/21003.jpg"
},
{
id: 22003,
desc: "勇敢的心 艾希 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/22003.jpg"
},
{
id: 55004,
desc: "暗夜猫女 卡特琳娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/55004.jpg"
},
{
id: 56005,
desc: "上古战魂 魔腾 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/56005.jpg"
},
{
id: 62001,
desc: "三昧真火 孙悟空 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/62001.jpg"
},
{
id: 64002,
desc: "防弹武僧 李青 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/64002.jpg"
},
{
id: 68003,
desc: "银河魔装机神 兰博 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/68003.jpg"
},
{
id: 75005,
desc: "炼狱魔犬 内瑟斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/75005.jpg"
},
{
id: 81003,
desc: "冰川勇者 伊泽瑞尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/81003.jpg"
},
{
id: 81005,
desc: "未来战士 伊泽瑞尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/81005.jpg"
},
{
id: 103004,
desc: "偶像歌手 阿狸 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/103004.jpg"
},
{
id: 110002,
desc: "苍穹之光 韦鲁斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/110002.jpg"
},
{
id: 112003,
desc: "造物主 维克托 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/112003.jpg"
},
{
id: 114003,
desc: "女校长 菲奥娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/114003.jpg"
},
{
id: 157001,
desc: "西部牛仔 亚索 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/157001.jpg"
},
{
id: 81007,
desc: "光执事 伊泽瑞尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/81007.jpg"
},
{
id: 254003,
desc: "铁拳执事 蔚 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/254003.jpg"
},
{
id: 45008,
desc: "最终BOSS 维迦 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/45008.jpg"
},
{
id: 150001,
desc: "最后一只恐龙 纳尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/150001.jpg"
},
{
id: 8006,
desc: "摄魂男爵 弗拉基米尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/8006.jpg"
},
{
id: 74005,
desc: "生化博士 黑默丁格 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/74005.jpg"
},
{
id: 133002,
desc: "勇敢的心 奎因 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/133002.jpg"
},
{
id: 119003,
desc: "金牌主播 德莱文 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/119003.jpg"
},
{
id: 80006,
desc: "屠龙勇士 潘森 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/80006.jpg"
},
{
id: 107002,
desc: "暗黑武士 雷恩加尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/107002.jpg"
},
{
id: 134002,
desc: "亚特兰蒂斯 辛德拉 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/134002.jpg"
},
{
id: 267002,
desc: "河水之灵 娜美 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/267002.jpg"
},
{
id: 201001,
desc: "屠龙勇士 布隆 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/201001.jpg"
},
{
id: 127002,
desc: "刀锋女王 丽桑卓 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/127002.jpg"
},
{
id: 105004,
desc: "虚空海灵 菲兹 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/105004.jpg"
},
{
id: 110003,
desc: "白色死神 韦鲁斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/110003.jpg"
},
{
id: 161001,
desc: "战地机甲 维克兹 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/161001.jpg"
},
{
id: 58005,
desc: "枯萎之壤 雷克顿 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/58005.jpg"
},
{
id: 23006,
desc: "关羽 云长 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/23006.jpg"
},
{
id: 143002,
desc: "鬼影森森 婕拉 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/143002.jpg"
},
{
id: 254002,
desc: "女警官 蔚 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/254002.jpg"
},
{
id: 222001,
desc: "黑帮狂花 金克丝 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/222001.jpg"
},
{
id: 40005,
desc: "女主播 迦娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/40005.jpg"
},
{
id: 236001,
desc: "职业杀手 卢锡安 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/236001.jpg"
},
{
id: 77003,
desc: "灵魂守卫 乌迪尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/77003.jpg"
},
{
id: 25005,
desc: "鬼魂新娘 莫甘娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/25005.jpg"
},
{
id: 119002,
desc: "绞肉机刽子手 德莱文 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/119002.jpg"
},
{
id: 76006,
desc: "铁血猎手 奈德丽 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/76006.jpg"
},
{
id: 34005,
desc: "黯晶凤凰 艾尼维亚 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/34005.jpg"
},
{
id: 102004,
desc: "冰霜亚龙 希瓦娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/102004.jpg"
},
{
id: 106003,
desc: "符文战熊 沃利贝尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/106003.jpg"
},
{
id: 86006,
desc: "钢铁军团 盖伦 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/86006.jpg"
},
{
id: 35006,
desc: "武动巅峰 萨科 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/35006.jpg"
},
{
id: 53006,
desc: "苹果机器人 布里茨 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/53006.jpg"
},
{
id: 10006,
desc: "钢铁之翼 凯尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/10006.jpg"
},
{
id: 126002,
desc: "蔷薇绅士 杰斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/126002.jpg"
},
{
id: 133001,
desc: "血羽凤凰 奎因 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/133001.jpg"
},
{
id: 122002,
desc: "生化骑士 德莱厄斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/122002.jpg"
},
{
id: 412001,
desc: "深渊恐惧 锤石 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/412001.jpg"
},
{
id: 5005,
desc: "赵云 子龙 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/5005.jpg"
},
{
id: 59005,
desc: "吕布 奉先 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/59005.jpg"
},
{
id: 254001,
desc: "霓虹杀拳 蔚 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/254001.jpg"
},
{
id: 117003,
desc: "驯龙女巫 璐璐 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/117003.jpg"
},
{
id: 267001,
desc: "锦鲤 娜美 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/267001.jpg"
},
{
id: 31005,
desc: "战地巨兽 科加斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/31005.jpg"
},
{
id: 238001,
desc: "冲击之刃 劫 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/238001.jpg"
},
{
id: 60001,
desc: "死亡绽放 伊莉丝 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/60001.jpg"
},
{
id: 63004,
desc: "丧尸 布兰德 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/63004.jpg"
},
{
id: 2004,
desc: "五杀摇滚鼓手 奥拉夫 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/2004.jpg"
},
{
id: 40003,
desc: "寒冰女皇 迦娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/40003.jpg"
},
{
id: 51005,
desc: "女警狙击 凯特琳 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/51005.jpg"
},
{
id: 24007,
desc: "复仇武神 贾克斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/24007.jpg"
},
{
id: 37005,
desc: "电玩女神 娑娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/37005.jpg"
},
{
id: 79006,
desc: "美酒节特使 古拉加斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/79006.jpg"
},
{
id: 111003,
desc: "宇航员 诺提勒斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/111003.jpg"
},
{
id: 115003,
desc: "泳池派对 吉格斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/115003.jpg"
},
{
id: 121001,
desc: "霸天异形 卡’兹克 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/121001.jpg"
},
{
id: 134001,
desc: "仲裁圣女 辛德拉 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/134001.jpg"
},
{
id: 3004,
desc: "地狱之门卫士 加里奥 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/3004.jpg"
},
{
id: 8005,
desc: "鲜血领主 弗拉基米尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/8005.jpg"
},
{
id: 17006,
desc: "约德尔国队长 提莫 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/17006.jpg"
},
{
id: 32007,
desc: "殇之机器人 阿木木 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/32007.jpg"
},
{
id: 50003,
desc: "绝代智将 斯维因 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/50003.jpg"
},
{
id: 59004,
desc: "凯旋英雄 嘉文四世 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/59004.jpg"
},
{
id: 64004,
desc: "至高之拳 李青 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/64004.jpg"
},
{
id: 67003,
desc: "屠龙勇士 薇恩 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/67003.jpg"
},
{
id: 101003,
desc: "枯萎之壤 泽拉斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/101003.jpg"
},
{
id: 18006,
desc: "火箭达人 崔丝塔娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/18006.jpg"
},
{
id: 27005,
desc: "炼金狂士 辛吉德 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/27005.jpg"
},
{
id: 107001,
desc: "铁血猎人 雷恩加尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/107001.jpg"
},
{
id: 54005,
desc: "冰川巨兽 墨菲特 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/54005.jpg"
},
{
id: 63003,
desc: "冰晶之核 布兰德 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/63003.jpg"
},
{
id: 131001,
desc: "暗黑女武神 黛安娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/131001.jpg"
},
{
id: 103003,
desc: "焰尾妖狐 阿狸 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/103003.jpg"
},
{
id: 84004,
desc: "实习护士 阿卡丽 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/84004.jpg"
},
{
id: 96003,
desc: "帝王斑蝶 克格莫 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/96003.jpg"
},
{
id: 143001,
desc: "野火之藤 婕拉 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/143001.jpg"
},
{
id: 39004,
desc: "冰霜之刃 艾瑞莉娅 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/39004.jpg"
},
{
id: 126001,
desc: "全金属狂潮 杰斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/126001.jpg"
},
{
id: 11003,
desc: "天人合一 易 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/11003.jpg"
},
{
id: 86004,
desc: "死亡骑士 盖伦 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/86004.jpg"
},
{
id: 25004,
desc: "黑色荆棘 莫甘娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/25004.jpg"
},
{
id: 98005,
desc: "战国大名 慎 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/98005.jpg"
},
{
id: 30003,
desc: "死神 卡尔萨斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/30003.jpg"
},
{
id: 33003,
desc: "熔火之心 拉莫斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/33003.jpg"
},
{
id: 105003,
desc: "海牛猎手 菲兹 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/105003.jpg"
},
{
id: 119001,
desc: "灵魂收割者 德莱文 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/119001.jpg"
},
{
id: 1006,
desc: "安伯斯与提妮 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/1006.jpg"
},
{
id: 17005,
desc: "兔宝宝 提莫 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/17005.jpg"
},
{
id: 92003,
desc: "兔女郎 锐雯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/92003.jpg"
},
{
id: 122001,
desc: "铁血帝皇 德莱厄斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/122001.jpg"
},
{
id: 53004,
desc: "陆地王者4WD 布里茨 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/53004.jpg"
},
{
id: 69002,
desc: "深海妖姬 卡西奥佩娅 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/69002.jpg"
},
{
id: 99004,
desc: "星际迷航 拉克丝 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/99004.jpg"
},
{
id: 24006,
desc: "少林武僧 贾克斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/24006.jpg"
},
{
id: 34001,
desc: "双重冰晶 艾尼维亚 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/34001.jpg"
},
{
id: 6003,
desc: "战地机甲 厄加特 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/6003.jpg"
},
{
id: 13007,
desc: "恶魔男爵 瑞兹 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/13007.jpg"
},
{
id: 104003,
desc: "黑帮教父 格雷福斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/104003.jpg"
},
{
id: 31002,
desc: "绅士 科加斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/31002.jpg"
},
{
id: 45006,
desc: "穿着正装的恶魔 维迦 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/45006.jpg"
},
{
id: 85005,
desc: "刺客信条 凯南 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/85005.jpg"
},
{
id: 4005,
desc: "西部牛仔 崔斯特 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/4005.jpg"
},
{
id: 22005,
desc: "紫晶射手 艾希 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/22005.jpg"
},
{
id: 96007,
desc: "侏罗纪化石 克格莫 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/96007.jpg"
},
{
id: 11005,
desc: "铁血剑豪 易 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/11005.jpg"
},
{
id: 15004,
desc: "钢铁之心 希维尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/15004.jpg"
},
{
id: 20004,
desc: "合金巨兽 努努和威朗普 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/20004.jpg"
},
{
id: 30004,
desc: "五杀摇滚主唱 卡尔萨斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/30004.jpg"
},
{
id: 21006,
desc: "黑帮狂花 厄运小姐 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/21006.jpg"
},
{
id: 19006,
desc: "火牙狼人 沃里克 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/19006.jpg"
},
{
id: 61003,
desc: "灵骨工匠 奥莉安娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/61003.jpg"
},
{
id: 37002,
desc: "五杀摇滚键盘手 娑娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/37002.jpg"
},
{
id: 114001,
desc: "皇家守卫 菲奥娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/114001.jpg"
},
{
id: 114002,
desc: "夜鸦 菲奥娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/114002.jpg"
},
{
id: 84006,
desc: "银色之牙 阿卡丽 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/84006.jpg"
},
{
id: 80004,
desc: "钢铁意志 潘森 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/80004.jpg"
},
{
id: 18003,
desc: "烈焰雄心 崔丝塔娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/18003.jpg"
},
{
id: 15001,
desc: "战场公主 希维尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/15001.jpg"
},
{
id: 20005,
desc: "攻城巨兽 努努和威朗普 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/20005.jpg"
},
{
id: 111001,
desc: "失落大陆 诺提勒斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/111001.jpg"
},
{
id: 36003,
desc: "律政大亨 蒙多 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/36003.jpg"
},
{
id: 31004,
desc: "侏罗纪化石 科加斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/31004.jpg"
},
{
id: 10005,
desc: "圣光审判 凯尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/10005.jpg"
},
{
id: 4003,
desc: "魔幻卡牌 崔斯特 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/4003.jpg"
},
{
id: 115001,
desc: "科学狂人 吉格斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/115001.jpg"
},
{
id: 35002,
desc: "贵族血统 萨科 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/35002.jpg"
},
{
id: 21002,
desc: "法国皇室 厄运小姐 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/21002.jpg"
},
{
id: 11001,
desc: "暗影 易 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/11001.jpg"
},
{
id: 19007,
desc: "荒野豺狼 沃里克 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/19007.jpg"
},
{
id: 63002,
desc: "V字仇杀者 布兰德 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/63002.jpg"
},
{
id: 5001,
desc: "特战先锋 赵信 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/5001.jpg"
},
{
id: 14004,
desc: "战争机器 赛恩 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/14004.jpg"
},
{
id: 50001,
desc: "北领前线 斯维因 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/50001.jpg"
},
{
id: 86003,
desc: "铁甲雄心 盖伦 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/86003.jpg"
},
{
id: 112001,
desc: "全金属狂潮 维克托 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/112001.jpg"
},
{
id: 103001,
desc: "高丽风情 阿狸 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/103001.jpg"
},
{
id: 103002,
desc: "暗影妖狐 阿狸 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/103002.jpg"
},
{
id: 44003,
desc: "血精石诅咒 塔里克 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/44003.jpg"
},
{
id: 58003,
desc: "血色暴君 雷克顿 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/58003.jpg"
},
{
id: 84005,
desc: "腥红之月 鬼武姬 阿卡丽 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/84005.jpg"
},
{
id: 98004,
desc: "腥红之月 鬼武者 慎 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/98004.jpg"
},
{
id: 102002,
desc: "骸骨之爪 希瓦娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/102002.jpg"
},
{
id: 92001,
desc: "刺客信条 锐雯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/92001.jpg"
},
{
id: 92002,
desc: "血色精锐 锐雯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/92002.jpg"
},
{
id: 91001,
desc: "刺客信条 泰隆 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/91001.jpg"
},
{
id: 91002,
desc: "血色精锐 泰隆 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/91002.jpg"
},
{
id: 89001,
desc: "瓦尔基里 蕾欧娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/89001.jpg"
},
{
id: 62002,
desc: "斗战胜佛 孙悟空 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/62002.jpg"
},
{
id: 23004,
desc: "恶魔之刃 泰达米尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/23004.jpg"
},
{
id: 83002,
desc: "五杀摇滚贝斯手 约里克 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/83002.jpg"
},
{
id: 1005,
desc: "冰霜烈焰 安妮 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/1005.jpg"
},
{
id: 61002,
desc: "木偶奇遇记 奥莉安娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/61002.jpg"
},
{
id: 51003,
desc: "古墓丽影 凯特琳 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/51003.jpg"
},
{
id: 67001,
desc: "摩登骇客 薇恩 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/67001.jpg"
},
{
id: 67002,
desc: "猎天使魔女 薇恩 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/67002.jpg"
},
{
id: 42005,
desc: "海牛骑手 库奇 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/42005.jpg"
},
{
id: 45004,
desc: "绿野仙踪 维迦 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/45004.jpg"
},
{
id: 54003,
desc: "石破天惊 墨菲特 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/54003.jpg"
},
{
id: 64001,
desc: "传统僧侣 李青 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/64001.jpg"
},
{
id: 68002,
desc: "独眼海盗 兰博 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/68002.jpg"
},
{
id: 79004,
desc: "品酒大师 古拉加斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/79004.jpg"
},
{
id: 11004,
desc: "侍魂 易 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/11004.jpg"
},
{
id: 59001,
desc: "孤胆英豪 嘉文四世 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/59001.jpg"
},
{
id: 59002,
desc: "屠龙勇士 嘉文四世 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/59002.jpg"
},
{
id: 12004,
desc: "荒野镖客 阿利斯塔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/12004.jpg"
},
{
id: 14003,
desc: "原野伐木工 赛恩 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/14003.jpg"
},
{
id: 29005,
desc: "横行霸道 图奇 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/29005.jpg"
},
{
id: 32005,
desc: "王子不是我 阿木木 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/32005.jpg"
},
{
id: 43002,
desc: "樱花乱舞 卡尔玛 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/43002.jpg"
},
{
id: 51002,
desc: "荒野治安官 凯特琳 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/51002.jpg"
},
{
id: 57001,
desc: "烈焰古树 茂凯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/57001.jpg"
},
{
id: 58002,
desc: "荒野之咬 雷克顿 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/58002.jpg"
},
{
id: 7002,
desc: "社会名流 乐芙兰 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/7002.jpg"
},
{
id: 27003,
desc: "冲浪高手 辛吉德 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/27003.jpg"
},
{
id: 33004,
desc: "极度深寒 拉莫斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/33004.jpg"
},
{
id: 39001,
desc: "夜刃 艾瑞莉娅 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/39001.jpg"
},
{
id: 39002,
desc: "凌云之翼 艾瑞莉娅 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/39002.jpg"
},
{
id: 48002,
desc: "垃圾场 特朗德尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/48002.jpg"
},
{
id: 74003,
desc: "创意工坊 黑默丁格 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/74003.jpg"
},
{
id: 85003,
desc: "空手道 凯南 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/85003.jpg"
},
{
id: 2003,
desc: "铁哥们儿 奥拉夫 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/2003.jpg"
},
{
id: 1002,
desc: "小红帽 安妮 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/1002.jpg"
},
{
id: 3001,
desc: "幽蓝梦魇 加里奥 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/3001.jpg"
},
{
id: 4004,
desc: "探戈灵魂 崔斯特 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/4004.jpg"
},
{
id: 5002,
desc: "皇家守卫 赵信 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/5002.jpg"
},
{
id: 6002,
desc: "电锯狂人 厄加特 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/6002.jpg"
},
{
id: 8001,
desc: "弗拉基米尔伯爵 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/8001.jpg"
},
{
id: 9001,
desc: "幽魂 费德提克 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/9001.jpg"
},
{
id: 9002,
desc: "联合王国 费德提克 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/9002.jpg"
},
{
id: 10002,
desc: "末世天使 凯尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/10002.jpg"
},
{
id: 11002,
desc: "星战 易 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/11002.jpg"
},
{
id: 12002,
desc: "金牛座 阿利斯塔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/12002.jpg"
},
{
id: 13003,
desc: "美国大叔 瑞兹 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/13003.jpg"
},
{
id: 15002,
desc: "亮丽女神 希维尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/15002.jpg"
},
{
id: 16001,
desc: "森林女神 索拉卡 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/16001.jpg"
},
{
id: 17002,
desc: "军情五处 提莫 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/17002.jpg"
},
{
id: 17004,
desc: "提莫:'约德尔人的一大步' ",
img: "https://ossweb-img.qq.com/images/lol/appskin/17004.jpg"
},
{
id: 18004,
desc: "游击队员 崔丝塔娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/18004.jpg"
},
{
id: 19004,
desc: "冻原猎手 沃里克 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/19004.jpg"
},
{
id: 20001,
desc: "荒野巨兽 努努和威朗普 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/20001.jpg"
},
{
id: 20003,
desc: "脏兮兮 努努和威朗普 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/20003.jpg"
},
{
id: 21001,
desc: "西部牛仔 厄运小姐 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/21001.jpg"
},
{
id: 22001,
desc: "极地女神 艾希 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/22001.jpg"
},
{
id: 23001,
desc: "勇敢的心 泰达米尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/23001.jpg"
},
{
id: 24003,
desc: "宗师级钓鱼训练师 贾克斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/24003.jpg"
},
{
id: 25001,
desc: "杀戮天使昔拉 莫甘娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/25001.jpg"
},
{
id: 26003,
desc: "遗迹守护者 基兰 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/26003.jpg"
},
{
id: 28001,
desc: "黑暗女王 伊芙琳 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/28001.jpg"
},
{
id: 28002,
desc: "假面女皇 伊芙琳 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/28002.jpg"
},
{
id: 28003,
desc: "探戈灵魂 伊芙琳 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/28003.jpg"
},
{
id: 29002,
desc: "北风冻原 图奇 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/29002.jpg"
},
{
id: 29004,
desc: "黑金诱惑 图奇 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/29004.jpg"
},
{
id: 30001,
desc: "幽灵幻影 卡尔萨斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/30001.jpg"
},
{
id: 32002,
desc: "狂欢 阿木木 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/32002.jpg"
},
{
id: 36001,
desc: "战栗之毒 蒙多 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/36001.jpg"
},
{
id: 37001,
desc: "缪斯女神 娑娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/37001.jpg"
},
{
id: 40001,
desc: "暴风女神 迦娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/40001.jpg"
},
{
id: 42003,
desc: "红色男爵 库奇 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/42003.jpg"
},
{
id: 44001,
desc: "绿水晶光辉 塔里克 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/44001.jpg"
},
{
id: 45001,
desc: "白魔法师 维迦 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/45001.jpg"
},
{
id: 53003,
desc: "擂台皇帝 布里茨 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/53003.jpg"
},
{
id: 54001,
desc: "三叶草 墨菲特 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/54001.jpg"
},
{
id: 55001,
desc: "赏金猎人 卡特琳娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/55001.jpg"
},
{
id: 75001,
desc: "星空之门 内瑟斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/75001.jpg"
},
{
id: 76002,
desc: "丛林猎豹 奈德丽 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/76002.jpg"
},
{
id: 76003,
desc: "法国女仆 奈德丽 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/76003.jpg"
},
{
id: 77001,
desc: "武力全开 乌迪尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/77001.jpg"
},
{
id: 78001,
desc: "诺克萨斯 波比 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/78001.jpg"
},
{
id: 80001,
desc: "斯巴达之魂 潘森 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/80001.jpg"
},
{
id: 81001,
desc: "冒险精神 伊泽瑞尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/81001.jpg"
},
{
id: 81004,
desc: "失落的世界 伊泽瑞尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/81004.jpg"
},
{
id: 82001,
desc: "龙骑士 莫德凯撒 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/82001.jpg"
},
{
id: 82003,
desc: "五杀摇滚吉他手 莫德凯撒 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/82003.jpg"
},
{
id: 84001,
desc: "蜂刺 阿卡丽 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/84001.jpg"
},
{
id: 84002,
desc: "奈落之炎 阿卡丽 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/84002.jpg"
},
{
id: 86001,
desc: "战神阿瑞斯 盖伦 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/86001.jpg"
},
{
id: 86002,
desc: "黄金骑士 盖伦 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/86002.jpg"
},
{
id: 90002,
desc: "暗影王子 玛尔扎哈 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/90002.jpg"
},
{
id: 96001,
desc: "毛毛虫 克格莫 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/96001.jpg"
},
{
id: 98002,
desc: "炎爆 慎 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/98002.jpg"
},
{
id: 99001,
desc: "奥术光辉 拉克丝 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/99001.jpg"
},
{
id: 99002,
desc: "游侠法师 拉克丝 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/99002.jpg"
}
];

let heroList = [
{
id: 99,
desc: "光辉女郎 拉克丝 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/99000.jpg"
},
{
id: 86,
desc: "德玛西亚之力 盖伦 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/86000.jpg"
},
{
id: 22,
desc: "寒冰射手 艾希 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/22000.jpg"
},
{
id: 92,
desc: "放逐之刃 锐雯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/92000.jpg"
},
{
id: 238,
desc: "影流之主 劫 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/238000.jpg"
},
{
id: 429,
desc: "复仇之矛 卡莉丝塔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/429000.jpg"
},
{
id: 412,
desc: "魂锁典狱长 锤石 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/412000.jpg"
},
{
id: 102,
desc: "龙血武姬 希瓦娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/102000.jpg"
},
{
id: 7,
desc: "诡术妖姬 乐芙兰 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/7000.jpg"
},
{
id: 15,
desc: "战争女神 希维尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/15000.jpg"
},
{
id: 59,
desc: "德玛西亚皇子 嘉文四世 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/59000.jpg"
},
{
id: 40,
desc: "风暴之怒 迦娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/40000.jpg"
},
{
id: 42,
desc: "英勇投弹手 库奇 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/42000.jpg"
},
{
id: 79,
desc: "酒桶 古拉加斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/79000.jpg"
},
{
id: 30,
desc: "死亡颂唱者 卡尔萨斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/30000.jpg"
},
{
id: 266,
desc: "暗裔剑魔 亚托克斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/266000.jpg"
},
{
id: 126,
desc: "未来守护者 杰斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/126000.jpg"
},
{
id: 122,
desc: "诺克萨斯之手 德莱厄斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/122000.jpg"
},
{
id: 39,
desc: "刀锋意志 艾瑞莉娅 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/39000.jpg"
},
{
id: 5,
desc: "德邦总管 赵信 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/5000.jpg"
},
{
id: 84,
desc: "暗影之拳 阿卡丽 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/84000.jpg"
},
{
id: 64,
desc: "盲僧 李青 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/64000.jpg"
},
{
id: 41,
desc: "海洋之灾 普朗克 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/41000.jpg"
},
{
id: 81,
desc: "探险家 伊泽瑞尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/81000.jpg"
},
{
id: 14,
desc: "亡灵战神 赛恩 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/14000.jpg"
},
{
id: 6,
desc: "无畏战车 厄加特 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/6000.jpg"
},
{
id: 12,
desc: "牛头酋长 阿利斯塔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/12000.jpg"
},
{
id: 134,
desc: "暗黑元首 辛德拉 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/134000.jpg"
},
{
id: 13,
desc: "符文法师 瑞兹 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/13000.jpg"
},
{
id: 555,
desc: "血港鬼影 派克 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/555000.jpg"
},
{
id: 145,
desc: "虚空之女 卡莎 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/145000.jpg"
},
{
id: 142,
desc: "暮光星灵 佐伊 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/142000.jpg"
},
{
id: 516,
desc: "山隐之焰 奥恩 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/516000.jpg"
},
{
id: 498,
desc: "逆羽 霞 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/498000.jpg"
},
{
id: 497,
desc: "幻翎 洛 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/497000.jpg"
},
{
id: 222,
desc: "暴走萝莉 金克丝 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/222000.jpg"
},
{
id: 103,
desc: "九尾妖狐 阿狸 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/103000.jpg"
},
{
id: 11,
desc: "无极剑圣 易 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/11000.jpg"
},
{
id: 55,
desc: "不祥之刃 卡特琳娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/55000.jpg"
},
{
id: 54,
desc: "熔岩巨兽 墨菲特 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/54000.jpg"
},
{
id: 157,
desc: "疾风剑豪 亚索 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/157000.jpg"
},
{
id: 236,
desc: "圣枪游侠 卢锡安 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/236000.jpg"
},
{
id: 121,
desc: "虚空掠夺者 卡兹克 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/121000.jpg"
},
{
id: 110,
desc: "惩戒之箭 韦鲁斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/110000.jpg"
},
{
id: 61,
desc: "发条魔灵 奥莉安娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/61000.jpg"
},
{
id: 104,
desc: "法外狂徒 格雷福斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/104000.jpg"
},
{
id: 67,
desc: "暗夜猎手 薇恩 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/67000.jpg"
},
{
id: 51,
desc: "皮城女警 凯特琳 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/51000.jpg"
},
{
id: 254,
desc: "皮城执法官 蔚 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/254000.jpg"
},
{
id: 245,
desc: "时间刺客 艾克 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/245000.jpg"
},
{
id: 114,
desc: "无双剑姬 菲奥娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/114000.jpg"
},
{
id: 89,
desc: "曙光女神 蕾欧娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/89000.jpg"
},
{
id: 78,
desc: "圣锤之毅 波比 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/78000.jpg"
},
{
id: 21,
desc: "赏金猎人 厄运小姐 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/21000.jpg"
},
{
id: 16,
desc: "众星之子 索拉卡 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/16000.jpg"
},
{
id: 202,
desc: "戏命师 烬 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/202000.jpg"
},
{
id: 4,
desc: "卡牌大师 崔斯特 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/4000.jpg"
},
{
id: 1,
desc: "黑暗之女 安妮 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/1000.jpg"
},
{
id: 24,
desc: "武器大师 贾克斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/24000.jpg"
},
{
id: 75,
desc: "沙漠死神 内瑟斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/75000.jpg"
},
{
id: 62,
desc: "齐天大圣 孙悟空 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/62000.jpg"
},
{
id: 427,
desc: "翠神 艾翁 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/427000.jpg"
},
{
id: 141,
desc: "影流之镰 凯隐 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/141000.jpg"
},
{
id: 421,
desc: "虚空遁地兽 雷克塞 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/421000.jpg"
},
{
id: 420,
desc: "海兽祭司 俄洛伊 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/420000.jpg"
},
{
id: 268,
desc: "沙漠皇帝 阿兹尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/268000.jpg"
},
{
id: 267,
desc: "唤潮鲛姬 娜美 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/267000.jpg"
},
{
id: 240,
desc: "暴怒骑士 克烈 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/240000.jpg"
},
{
id: 223,
desc: "河流之王 塔姆 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/223000.jpg"
},
{
id: 203,
desc: "永猎双子 千珏 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/203000.jpg"
},
{
id: 201,
desc: "弗雷尔卓德之心 布隆 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/201000.jpg"
},
{
id: 164,
desc: "青钢影 卡蜜尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/164000.jpg"
},
{
id: 163,
desc: "岩雀 塔莉垭 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/163000.jpg"
},
{
id: 161,
desc: "虚空之眼 维克兹 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/161000.jpg"
},
{
id: 154,
desc: "生化魔人 扎克 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/154000.jpg"
},
{
id: 150,
desc: "迷失之牙 纳尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/150000.jpg"
},
{
id: 113,
desc: "北地之怒 瑟庄妮 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/113000.jpg"
},
{
id: 143,
desc: "荆棘之兴 婕拉 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/143000.jpg"
},
{
id: 136,
desc: "铸星龙王 奥瑞利安·索尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/136000.jpg"
},
{
id: 133,
desc: "德玛西亚之翼 奎因 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/133000.jpg"
},
{
id: 131,
desc: "皎月女神 黛安娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/131000.jpg"
},
{
id: 127,
desc: "冰霜女巫 丽桑卓 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/127000.jpg"
},
{
id: 23,
desc: "蛮族之王 泰达米尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/23000.jpg"
},
{
id: 20,
desc: "雪人骑士 努努 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/20000.jpg"
},
{
id: 120,
desc: "战争之影 赫卡里姆 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/120000.jpg"
},
{
id: 119,
desc: "荣耀行刑官 德莱文 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/119000.jpg"
},
{
id: 117,
desc: "仙灵女巫 璐璐 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/117000.jpg"
},
{
id: 115,
desc: "爆破鬼才 吉格斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/115000.jpg"
},
{
id: 112,
desc: "机械先驱 维克托 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/112000.jpg"
},
{
id: 111,
desc: "深海泰坦 诺提勒斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/111000.jpg"
},
{
id: 107,
desc: "傲之追猎者 雷恩加尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/107000.jpg"
},
{
id: 106,
desc: "雷霆咆哮 沃利贝尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/106000.jpg"
},
{
id: 105,
desc: "潮汐海灵 菲兹 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/105000.jpg"
},
{
id: 101,
desc: "远古巫灵 泽拉斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/101000.jpg"
},
{
id: 98,
desc: "暮光之眼 慎 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/98000.jpg"
},
{
id: 96,
desc: "深渊巨口 克格莫 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/96000.jpg"
},
{
id: 91,
desc: "刀锋之影 泰隆 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/91000.jpg"
},
{
id: 90,
desc: "虚空先知 玛尔扎哈 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/90000.jpg"
},
{
id: 432,
desc: "星界游神 巴德 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/432000.jpg"
},
{
id: 85,
desc: "狂暴之心 凯南 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/85000.jpg"
},
{
id: 83,
desc: "牧魂人 约里克 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/83000.jpg"
},
{
id: 82,
desc: "铁铠冥魂 莫德凯撒 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/82000.jpg"
},
{
id: 80,
desc: "战争之王 潘森 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/80000.jpg"
},
{
id: 77,
desc: "兽灵行者 乌迪尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/77000.jpg"
},
{
id: 76,
desc: "狂野女猎手 奈德丽 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/76000.jpg"
},
{
id: 74,
desc: "大发明家 黑默丁格 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/74000.jpg"
},
{
id: 72,
desc: "水晶先锋 斯卡纳 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/72000.jpg"
},
{
id: 69,
desc: "魔蛇之拥 卡西奥佩娅 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/69000.jpg"
},
{
id: 68,
desc: "机械公敌 兰博 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/68000.jpg"
},
{
id: 63,
desc: "复仇焰魂 布兰德 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/63000.jpg"
},
{
id: 60,
desc: "蜘蛛女皇 伊莉丝 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/60000.jpg"
},
{
id: 58,
desc: "荒漠屠夫 雷克顿 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/58000.jpg"
},
{
id: 57,
desc: "扭曲树精 茂凯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/57000.jpg"
},
{
id: 56,
desc: "永恒梦魇 魔腾 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/56000.jpg"
},
{
id: 53,
desc: "蒸汽机器人 布里茨 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/53000.jpg"
},
{
id: 50,
desc: "策士统领 斯维因 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/50000.jpg"
},
{
id: 48,
desc: "巨魔之王 特朗德尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/48000.jpg"
},
{
id: 45,
desc: "邪恶小法师 维迦 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/45000.jpg"
},
{
id: 44,
desc: "瓦洛兰之盾 塔里克 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/44000.jpg"
},
{
id: 43,
desc: "天启者 卡尔玛 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/43000.jpg"
},
{
id: 38,
desc: "虚空行者 卡萨丁 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/38000.jpg"
},
{
id: 37,
desc: "琴瑟仙女 娑娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/37000.jpg"
},
{
id: 36,
desc: "祖安狂人 蒙多医生 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/36000.jpg"
},
{
id: 35,
desc: "恶魔小丑 萨科 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/35000.jpg"
},
{
id: 34,
desc: "冰晶凤凰 艾尼维亚 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/34000.jpg"
},
{
id: 33,
desc: "披甲龙龟 拉莫斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/33000.jpg"
},
{
id: 32,
desc: "殇之木乃伊 阿木木 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/32000.jpg"
},
{
id: 31,
desc: "虚空恐惧 科加斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/31000.jpg"
},
{
id: 29,
desc: "瘟疫之源 图奇 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/29000.jpg"
},
{
id: 28,
desc: "痛苦之拥 伊芙琳 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/28000.jpg"
},
{
id: 27,
desc: "炼金术士 辛吉德 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/27000.jpg"
},
{
id: 26,
desc: "时光守护者 基兰 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/26000.jpg"
},
{
id: 25,
desc: "堕落天使 莫甘娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/25000.jpg"
},
{
id: 19,
desc: "祖安怒兽 沃里克 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/19000.jpg"
},
{
id: 18,
desc: "麦林炮手 崔丝塔娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/18000.jpg"
},
{
id: 17,
desc: "迅捷斥候 提莫 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/17000.jpg"
},
{
id: 10,
desc: "审判天使 凯尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/10000.jpg"
},
{
id: 9,
desc: "末日使者 费德提克 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/9000.jpg"
},
{
id: 8,
desc: "猩红收割者 弗拉基米尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/8000.jpg"
},
{
id: 3,
desc: "正义巨像 加里奥 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/3000.jpg"
},
{
id: 2,
desc: "狂战士 奥拉夫 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/2000.jpg"
}
];

//限时体验全英雄
let listCommon = [
{
id: 99002,
desc: "游侠法师 拉克丝 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/99002.jpg"
},
{
id: 86004,
desc: "死亡骑士 盖伦 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/86004.jpg"
},
{
id: 22005,
desc: "紫晶射手 艾希 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/22005.jpg"
},
{
id: 92001,
desc: "刺客信条 锐雯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/92001.jpg"
},
{
id: 238001,
desc: "冲击之刃 劫 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/238001.jpg"
},
{
id: 429001,
desc: "腥红之月 卡莉丝塔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/429001.jpg"
},
{
id: 412001,
desc: "深渊恐惧 锤石 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/412001.jpg"
},
{
id: 102002,
desc: "骸骨之爪 希瓦娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/102002.jpg"
},
{
id: 7002,
desc: "社会名流 乐芙兰 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/7002.jpg"
},
{
id: 15004,
desc: "钢铁之心 希维尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/15004.jpg"
},
{
id: 59002,
desc: "屠龙勇士 嘉文四世 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/59002.jpg"
},
{
id: 40003,
desc: "寒冰女皇 迦娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/40003.jpg"
},
{
id: 42003,
desc: "红色男爵 库奇 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/42003.jpg"
},
{
id: 79006,
desc: "美酒节特使 古拉加斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/79006.jpg"
},
{
id: 30003,
desc: "死神 卡尔萨斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/30003.jpg"
},
{
id: 266003,
desc: "狂鲨 亚托克斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/266003.jpg"
},
{
id: 126001,
desc: "全金属狂潮 杰斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/126001.jpg"
},
{
id: 122002,
desc: "生化骑士 德莱厄斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/122002.jpg"
},
{
id: 39001,
desc: "夜刃 艾瑞莉娅 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/39001.jpg"
},
{
id: 5001,
desc: "特战先锋 赵信 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/5001.jpg"
},
{
id: 84002,
desc: "奈落之炎 阿卡丽 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/84002.jpg"
},
{
id: 64002,
desc: "防弹武僧 李青 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/64002.jpg"
},
{
id: 41002,
desc: "老兵 普朗克 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/41002.jpg"
},
{
id: 81003,
desc: "冰川勇者 伊泽瑞尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/81003.jpg"
},
{
id: 14004,
desc: "战争机器 赛恩 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/14004.jpg"
},
{
id: 6002,
desc: "电锯狂人 厄加特 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/6002.jpg"
},
{
id: 12004,
desc: "荒野镖客 阿利斯塔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/12004.jpg"
},
{
id: 134001,
desc: "仲裁圣女 辛德拉 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/134001.jpg"
},
{
id: 13003,
desc: "美国大叔 瑞兹 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/13003.jpg"
},
{
id: 555001,
desc: "怨之砂 派克 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/555001.jpg"
},
{
id: 145001,
desc: "弹幕天使 卡莎 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/145001.jpg"
},
{
id: 142001,
desc: "赛博潮流 佐伊 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/142001.jpg"
},
{
id: 516001,
desc: "雷霆领主 奥恩 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/516001.jpg"
},
{
id: 498001,
desc: "暮星之羽 霞 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/498001.jpg"
},
{
id: 497001,
desc: "晨星之翎 洛 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/497001.jpg"
},
{
id: 222001,
desc: "黑帮狂花 金克丝 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/222001.jpg"
},
{
id: 103003,
desc: "焰尾妖狐 阿狸 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/103003.jpg"
},
{
id: 11003,
desc: "天人合一 易 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/11003.jpg"
},
{
id: 55007,
desc: "夺命美人 卡特琳娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/55007.jpg"
},
{
id: 54005,
desc: "冰川巨兽 墨菲特 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/54005.jpg"
},
{
id: 157001,
desc: "西部牛仔 亚索 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/157001.jpg"
},
{
id: 236001,
desc: "职业杀手 卢锡安 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/236001.jpg"
},
{
id: 121003,
desc: "死亡绽放 卡兹克 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/121003.jpg"
},
{
id: 110003,
desc: "白色死神 韦鲁斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/110003.jpg"
},
{
id: 61003,
desc: "灵骨工匠 奥莉安娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/61003.jpg"
},
{
id: 104006,
desc: "无情重炮 格雷福斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/104006.jpg"
},
{
id: 67002,
desc: "猎天使魔女 薇恩 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/67002.jpg"
},
{
id: 51003,
desc: "古墓丽影 凯特琳 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/51003.jpg"
},
{
id: 254004,
desc: "炼狱魔女 蔚 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/254004.jpg"
},
{
id: 245002,
desc: "任性学霸 艾克 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/245002.jpg"
},
{
id: 114002,
desc: "夜鸦 菲奥娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/114002.jpg"
},
{
id: 89001,
desc: "瓦尔基里 蕾欧娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/89001.jpg"
},
{
id: 78005,
desc: "军神战甲 波比 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/78005.jpg"
},
{
id: 21006,
desc: "黑帮狂花 厄运小姐 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/21006.jpg"
},
{
id: 16005,
desc: "蕉泥座人 索拉卡 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/16005.jpg"
},
{
id: 202001,
desc: "西部牛仔 烬 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/202001.jpg"
},
{
id: 4004,
desc: "探戈灵魂 崔斯特 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/4004.jpg"
},
{
id: 1005,
desc: "冰霜烈焰 安妮 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/1005.jpg"
},
{
id: 24007,
desc: "复仇武神 贾克斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/24007.jpg"
},
{
id: 75006,
desc: "单身贵族 内瑟斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/75006.jpg"
},
{
id: 62001,
desc: "三昧真火 孙悟空 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/62001.jpg"
},
{
id: 427001,
desc: "糖果之王 艾翁 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/427001.jpg"
},
{
id: 141001,
desc: "摄魂猎手 凯隐 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/141001.jpg"
},
{
id: 421001,
desc: "上古战魂 雷克塞 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/421001.jpg"
},
{
id: 420001,
desc: "虚空使者 俄洛伊 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/420001.jpg"
},
{
id: 268002,
desc: "幽冥领主 阿兹尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/268002.jpg"
},
{
id: 267003,
desc: "鲛妮座人 娜美 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/267003.jpg"
},
{
id: 240001,
desc: "爵士 克烈 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/240001.jpg"
},
{
id: 223002,
desc: "海牛大大 塔姆 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/223002.jpg"
},
{
id: 203001,
desc: "黯焰双魂 千珏 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/203001.jpg"
},
{
id: 201003,
desc: "布隆·狮心 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/201003.jpg"
},
{
id: 164001,
desc: "源代码 卡蜜尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/164001.jpg"
},
{
id: 163001,
desc: "弗雷尔卓德 塔莉垭 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/163001.jpg"
},
{
id: 161001,
desc: "战地机甲 维克兹 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/161001.jpg"
},
{
id: 154002,
desc: "泳池派对 扎克 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/154002.jpg"
},
{
id: 150002,
desc: "萌侦探 喵尔摩斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/150002.jpg"
},
{
id: 113007,
desc: "瑟庄妮·逐晓者 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/113007.jpg"
},
{
id: 143001,
desc: "野火之藤 婕拉 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/143001.jpg"
},
{
id: 136001,
desc: "灰烬领主 奥瑞利安·索尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/136001.jpg"
},
{
id: 133003,
desc: "死亡之鹰 奎因 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/133003.jpg"
},
{
id: 131001,
desc: "暗黑女武神 黛安娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/131001.jpg"
},
{
id: 127002,
desc: "刀锋女王 丽桑卓 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/127002.jpg"
},
{
id: 23007,
desc: "梦魇 泰达米尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/23007.jpg"
},
{
id: 20004,
desc: "合金巨兽 努努和威朗普 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/20004.jpg"
},
{
id: 120002,
desc: "幽魂骑士 赫卡里姆 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/120002.jpg"
},
{
id: 119002,
desc: "绞肉机刽子手 德莱文 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/119002.jpg"
},
{
id: 117003,
desc: "驯龙女巫 璐璐 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/117003.jpg"
},
{
id: 115001,
desc: "科学狂人 吉格斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/115001.jpg"
},
{
id: 112001,
desc: "全金属狂潮 维克托 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/112001.jpg"
},
{
id: 111004,
desc: "光明骑士 诺提勒斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/111004.jpg"
},
{
id: 107002,
desc: "暗黑武士 雷恩加尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/107002.jpg"
},
{
id: 106004,
desc: "警长 沃利贝尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/106004.jpg"
},
{
id: 105008,
desc: "兔宝宝 菲兹 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/105008.jpg"
},
{
id: 101004,
desc: "圣金巫灵 泽拉斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/101004.jpg"
},
{
id: 98005,
desc: "战国大名 慎 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/98005.jpg"
},
{
id: 96003,
desc: "帝王斑蝶 克格莫 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/96003.jpg"
},
{
id: 91002,
desc: "血色精锐 泰隆 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/91002.jpg"
},
{
id: 90004,
desc: "至高君王 玛尔扎哈 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/90004.jpg"
},
{
id: 432001,
desc: "长者之森 巴德 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/432001.jpg"
},
{
id: 85005,
desc: "刺客信条 凯南 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/85005.jpg"
},
{
id: 83002,
desc: "五杀摇滚贝斯手 约里克 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/83002.jpg"
},
{
id: 82003,
desc: "五杀摇滚吉他手 莫德凯撒",
img: "https://ossweb-img.qq.com/images/lol/appskin/82003.jpg"
},
{
id: 80004,
desc: "钢铁意志 潘森 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/80004.jpg"
},
{
id: 77004,
desc: "这货不是乌迪尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/77004.jpg"
},
{
id: 76003,
desc: "法国女仆 奈德丽 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/76003.jpg"
},
{
id: 74005,
desc: "生化博士 黑默丁格 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/74005.jpg"
},
{
id: 72003,
desc: "战地机甲 斯卡纳 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/72003.jpg"
},
{
id: 69008,
desc: "上古魔蛇 卡西奥佩娅 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/69008.jpg"
},
{
id: 68003,
desc: "银河魔装机神 兰博 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/68003.jpg"
},
{
id: 63005,
desc: "灵魂烈焰 布兰德 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/63005.jpg"
},
{
id: 60003,
desc: "腥红之月 伊莉丝 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/60003.jpg"
},
{
id: 58003,
desc: "血色暴君 雷克顿 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/58003.jpg"
},
{
id: 57001,
desc: "烈焰古树 茂凯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/57001.jpg"
},
{
id: 56006,
desc: "恶咒亡魂 魔腾 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/56006.jpg"
},
{
id: 53003,
desc: "擂台皇帝 布里茨 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/53003.jpg"
},
{
id: 50003,
desc: "绝代智将 斯维因 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/50003.jpg"
},
{
id: 48004,
desc: "巡逻警官 特朗德尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/48004.jpg"
},
{
id: 45008,
desc: "最终BOSS 维迦 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/45008.jpg"
},
{
id: 44003,
desc: "血精石诅咒 塔里克 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/44003.jpg"
},
{
id: 43005,
desc: "光明骑士 卡尔玛 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/43005.jpg"
},
{
id: 38005,
desc: "掠星魔刃 卡萨丁 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/38005.jpg"
},
{
id: 37002,
desc: "五杀摇滚键盘手 娑娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/37002.jpg"
},
{
id: 36006,
desc: "战争血统 蒙多 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/36006.jpg"
},
{
id: 35005,
desc: "飞越疯人院 萨科 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/35005.jpg"
},
{
id: 34006,
desc: "翼龙 艾尼维亚 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/34006.jpg"
},
{
id: 33007,
desc: "圣金甲虫 拉莫斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/33007.jpg"
},
{
id: 32005,
desc: "王子不是我 阿木木 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/32005.jpg"
},
{
id: 31002,
desc: "绅士 科加斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/31002.jpg"
},
{
id: 29004,
desc: "黑金诱惑 图奇 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/29004.jpg"
},
{
id: 28003,
desc: "探戈灵魂 伊芙琳 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/28003.jpg"
},
{
id: 27003,
desc: "冲浪高手 辛吉德 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/27003.jpg"
},
{
id: 26003,
desc: "遗迹守护者 基兰 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/26003.jpg"
},
{
id: 25003,
desc: "刀锋女王 莫甘娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/25003.jpg"
},
{
id: 19008,
desc: "黑暗骑士 沃里克 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/19008.jpg"
},
{
id: 18004,
desc: "游击队员 崔丝塔娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/18004.jpg"
},
{
id: 17008,
desc: "欧米伽小队 幽灵特工 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/17008.jpg"
},
{
id: 10008,
desc: "钢铁审判官 凯尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/10008.jpg"
},
{
id: 9008,
desc: "重生之沙 费德提克 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/9008.jpg"
},
{
id: 8007,
desc: "学生会长 弗拉基米尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/8007.jpg"
},
{
id: 3005,
desc: "风执事 加里奥 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/3005.jpg"
},
{
id: 2004,
desc: "五杀摇滚鼓手 奥拉夫 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/2004.jpg"
}
];

let championList301 = [
{
id: 1005,
desc: "冰霜烈焰 安妮 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/1005.jpg"
},
{
id: 2004,
desc: "五杀摇滚鼓手 奥拉夫 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/2004.jpg"
},
{
id: 3003,
desc: "战地之王 加里奥 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/3003.jpg"
},
{
id: 4003,
desc: "魔幻卡牌 崔斯特 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/4003.jpg"
},
{
id: 5004,
desc: "翼骑统领 赵信 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/5004.jpg"
},
{
id: 6002,
desc: "电锯狂人 厄加特 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/6002.jpg"
},
{
id: 7001,
desc: "潮流女王 乐芙兰 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/7001.jpg"
},
{
id: 8002,
desc: "弗拉基米尔侯爵 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/8002.jpg"
},
{
id: 9005,
desc: "铁钩船长 费德提克 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/9005.jpg"
},
{
id: 10004,
desc: "战场女武神 凯尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/10004.jpg"
},
{
id: 11005,
desc: "铁血剑豪 易 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/11005.jpg"
},
{
id: 12007,
desc: "后场堡垒 阿利斯塔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/12007.jpg"
},
{
id: 13002,
desc: "部落精神 瑞兹 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/13002.jpg"
},
{
id: 14004,
desc: "战争机器 赛恩 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/14004.jpg"
},
{
id: 15001,
desc: "战场公主 希维尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/15001.jpg"
},
{
id: 16003,
desc: "圣洁化身 索拉卡 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/16003.jpg"
},
{
id: 17007,
desc: "熊猫 提莫 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/17007.jpg"
},
{
id: 18006,
desc: "火箭达人 崔丝塔娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/18006.jpg"
},
{
id: 19003,
desc: "狼外婆 沃里克 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/19003.jpg"
},
{
id: 20007,
desc: "丧尸 努努 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/20007.jpg"
},
{
id: 21005,
desc: "荒野女警 厄运小姐 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/21005.jpg"
},
{
id: 22004,
desc: "女皇 艾希 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/22004.jpg"
},
{
id: 23001,
desc: "勇敢的心 泰达米尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/23001.jpg"
},
{
id: 24006,
desc: "少林武僧 贾克斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/24006.jpg"
},
{
id: 25003,
desc: "刀锋女王 莫甘娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/25003.jpg"
},
{
id: 26005,
desc: "腥红之月 基兰 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/26005.jpg"
},
{
id: 27003,
desc: "冲浪高手 辛吉德 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/27003.jpg"
},
{
id: 28004,
desc: "惊天魔盗 伊芙琳 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/28004.jpg"
},
{
id: 29006,
desc: "绝影神偷 图奇 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/29006.jpg"
},
{
id: 30004,
desc: "五杀摇滚主唱 卡尔萨斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/30004.jpg"
},
{
id: 31002,
desc: "绅士 科加斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/31002.jpg"
},
{
id: 32003,
desc: "情绪摇滚 阿木木 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/32003.jpg"
},
{
id: 33006,
desc: "全金属狂潮 拉莫斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/33006.jpg"
},
{
id: 34004,
desc: "钢铁之翼 艾尼维亚 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/34004.jpg"
},
{
id: 35007,
desc: "万能小丑 萨科 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/35007.jpg"
},
{
id: 36003,
desc: "律政大亨 蒙多 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/36003.jpg"
},
{
id: 37002,
desc: "五杀摇滚键盘手 娑娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/37002.jpg"
},
{
id: 38003,
desc: "虚空前世 卡萨丁 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/38003.jpg"
},
{
id: 39004,
desc: "冰霜之刃 艾瑞莉娅 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/39004.jpg"
},
{
id: 40001,
desc: "暴风女神 迦娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/40001.jpg"
},
{
id: 41005,
desc: "特种部队 普朗克 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/41005.jpg"
},
{
id: 42005,
desc: "海牛骑手 库奇 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/42005.jpg"
},
{
id: 43005,
desc: "光明骑士 卡尔玛 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/43005.jpg"
},
{
id: 44001,
desc: "绿水晶光辉 塔里克 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/44001.jpg"
},
{
id: 45004,
desc: "绿野仙踪 维迦 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/45004.jpg"
},
{
id: 48004,
desc: "巡逻警官 特朗德尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/48004.jpg"
},
{
id: 50001,
desc: "北领前线 斯维因 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/50001.jpg"
},
{
id: 51005,
desc: "女警狙击 凯特琳 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/51005.jpg"
},
{
id: 53003,
desc: "擂台皇帝 布里茨 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/53003.jpg"
},
{
id: 54006,
desc: "霸天巨兽 墨菲特 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/54006.jpg"
},
{
id: 55002,
desc: "红牌！退场！ 卡特琳娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/55002.jpg"
},
{
id: 56003,
desc: "劫掠梦魇 魔腾 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/56003.jpg"
},
{
id: 57005,
desc: "绿茵门神 茂凯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/57005.jpg"
},
{
id: 58005,
desc: "枯萎之壤 雷克顿 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/58005.jpg"
},
{
id: 59001,
desc: "孤胆英豪 嘉文四世 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/59001.jpg"
},
{
id: 60001,
desc: "死亡绽放 伊莉丝 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/60001.jpg"
},
{
id: 61007,
desc: "死兆星 奥莉安娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/61007.jpg"
},
{
id: 62001,
desc: "三昧真火 孙悟空 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/62001.jpg"
},
{
id: 63004,
desc: "丧尸 布兰德 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/63004.jpg"
},
{
id: 64001,
desc: "传统僧侣 李青 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/64001.jpg"
},
{
id: 67003,
desc: "屠龙勇士 薇恩 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/67003.jpg"
},
{
id: 68003,
desc: "银河魔装机神 兰博 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/68003.jpg"
},
{
id: 69001,
desc: "荒漠之咬 卡西奥佩娅 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/69001.jpg"
},
{
id: 72004,
desc: "圣金甲虫 斯卡纳 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/72004.jpg"
},
{
id: 74002,
desc: "拆弹专家 黑默丁格 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/74002.jpg"
},
{
id: 75005,
desc: "炼狱魔犬 内瑟斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/75005.jpg"
},
{
id: 76004,
desc: "艳后 奈德丽 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/76004.jpg"
},
{
id: 77002,
desc: "四神之力 乌迪尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/77002.jpg"
},
{
id: 78005,
desc: "军神战甲 波比 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/78005.jpg"
},
{
id: 79006,
desc: "美酒节特使 古拉加斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/79006.jpg"
},
{
id: 80008,
desc: "面包之王 潘森 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/80008.jpg"
},
{
id: 81004,
desc: "失落的世界 伊泽瑞尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/81004.jpg"
},
{
id: 82003,
desc: "五杀摇滚吉他手 莫德凯撒 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/82003.jpg"
},
{
id: 83002,
desc: "五杀摇滚贝斯手 约里克 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/83002.jpg"
},
{
id: 84003,
desc: "足球宝贝 阿卡丽 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/84003.jpg"
},
{
id: 85005,
desc: "刺客信条 凯南 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/85005.jpg"
},
{
id: 86004,
desc: "死亡骑士 盖伦 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/86004.jpg"
},
{
id: 89002,
desc: "神圣守卫 蕾欧娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/89002.jpg"
},
{
id: 90003,
desc: "魔灵 玛尔扎哈 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/90003.jpg"
},
{
id: 91001,
desc: "刺客信条 泰隆 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/91001.jpg"
},
{
id: 92001,
desc: "刺客信条 锐雯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/92001.jpg"
},
{
id: 96007,
desc: "侏罗纪化石 克格莫 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/96007.jpg"
},
{
id: 98004,
desc: "腥红之月 鬼武者 慎 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/98004.jpg"
},
{
id: 99004,
desc: "星际迷航 拉克丝 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/99004.jpg"
},
{
id: 101004,
desc: "圣金巫灵 泽拉斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/101004.jpg"
},
{
id: 102003,
desc: "黯黑魔龙 希瓦娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/102003.jpg"
},
{
id: 103004,
desc: "偶像歌手 阿狸 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/103004.jpg"
},
{
id: 104006,
desc: "无情重炮 格雷福斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/104006.jpg"
},
{
id: 105009,
desc: "银河魔装机神 菲兹 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/105009.jpg"
},
{
id: 106004,
desc: "警长 沃利贝尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/106004.jpg"
},
{
id: 107001,
desc: "铁血猎人 雷恩加尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/107001.jpg"
},
{
id: 110002,
desc: "苍穹之光 韦鲁斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/110002.jpg"
},
{
id: 111004,
desc: "光明骑士 诺提勒斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/111004.jpg"
},
{
id: 112001,
desc: "全金属狂潮 维克托 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/112001.jpg"
},
{
id: 113006,
desc: "野兽猎人 瑟庄妮 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/113006.jpg"
},
{
id: 114003,
desc: "女校长 菲奥娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/114003.jpg"
},
{
id: 115002,
desc: "少校 吉格斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/115002.jpg"
},
{
id: 117002,
desc: "邪恶女巫 璐璐 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/117002.jpg"
},
{
id: 119002,
desc: "绞肉机刽子手 德莱文 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/119002.jpg"
},
{
id: 120006,
desc: "灭世魔神 赫卡里姆 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/120006.jpg"
},
{
id: 121004,
desc: "死兆星 卡兹克 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/121004.jpg"
},
{
id: 122001,
desc: "铁血帝皇 德莱厄斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/122001.jpg"
},
{
id: 126001,
desc: "全金属狂潮 杰斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/126001.jpg"
},
{
id: 127002,
desc: "刀锋女王 丽桑卓 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/127002.jpg"
},
{
id: 131001,
desc: "暗黑女武神 黛安娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/131001.jpg"
},
{
id: 133002,
desc: "勇敢的心 奎因 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/133002.jpg"
},
{
id: 134002,
desc: "亚特兰蒂斯 辛德拉 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/134002.jpg"
},
{
id: 136001,
desc: "灰烬领主 奥瑞利安·索尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/136001.jpg"
},
{
id: 141001,
desc: "摄魂猎手 凯隐 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/141001.jpg"
},
{
id: 142001,
desc: "赛博潮流 佐伊 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/142001.jpg"
},
{
id: 516001,
desc: "雷霆领主 奥恩 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/516001.jpg"
},
{
id: 143002,
desc: "鬼影森森 婕拉 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/143002.jpg"
},
{
id: 145001,
desc: "弹幕天使 卡莎 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/145001.jpg"
},
{
id: 150001,
desc: "最后一只恐龙 纳尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/150001.jpg"
},
{
id: 154002,
desc: "泳池派对 扎克 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/154002.jpg"
},
{
id: 157001,
desc: "西部牛仔 亚索 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/157001.jpg"
},
{
id: 161003,
desc: "这货不是维克兹 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/161003.jpg"
},
{
id: 163001,
desc: "弗雷尔卓德 塔莉垭 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/163001.jpg"
},
{
id: 164001,
desc: "源代码 卡蜜尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/164001.jpg"
},
{
id: 201001,
desc: "屠龙勇士 布隆 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/201001.jpg"
},
{
id: 202002,
desc: "腥红之月 烬 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/202002.jpg"
},
{
id: 203002,
desc: "银河魔装机神 千珏 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/203002.jpg"
},
{
id: 222003,
desc: "丧尸杀手 金克丝 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/222003.jpg"
},
{
id: 223001,
desc: "大厨 塔姆 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/223001.jpg"
},
{
id: 236002,
desc: "夺命前锋 卢锡安 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/236002.jpg"
},
{
id: 238001,
desc: "冲击之刃 劫 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/238001.jpg"
},
{
id: 240001,
desc: "爵士 克烈 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/240001.jpg"
},
{
id: 245001,
desc: "时之砂 艾克 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/245001.jpg"
},
{
id: 254004,
desc: "炼狱魔女 蔚 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/254004.jpg"
},
{
id: 266002,
desc: "霸天剑魔 亚托克斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/266002.jpg"
},
{
id: 267001,
desc: "锦鲤 娜美 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/267001.jpg"
},
{
id: 268001,
desc: "星际之门 阿兹尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/268001.jpg"
},
{
id: 412005,
desc: "死兆星 锤石 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/412005.jpg"
},
{
id: 420001,
desc: "虚空使者 俄洛伊 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/420001.jpg"
},
{
id: 421001,
desc: "上古战魂 雷克塞 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/421001.jpg"
},
{
id: 427001,
desc: "糖果之王 艾翁 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/427001.jpg"
},
{
id: 429001,
desc: "腥红之月 卡莉丝塔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/429001.jpg"
},
{
id: 432001,
desc: "长者之森 巴德 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/432001.jpg"
},
{
id: 497001,
desc: "晨星之翎 洛 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/497001.jpg"
},
{
id: 498001,
desc: "暮星之羽 霞 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/498001.jpg"
},
{
id: 1006,
desc: "安伯斯与提妮 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/1006.jpg"
},
{
id: 2002,
desc: "冰河时代 奥拉夫 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/2002.jpg"
},
{
id: 3001,
desc: "幽蓝梦魇 加里奥 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/3001.jpg"
},
{
id: 4004,
desc: "探戈灵魂 崔斯特 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/4004.jpg"
},
{
id: 5003,
desc: "绞肉机角斗士 赵信 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/5003.jpg"
},
{
id: 6003,
desc: "战地机甲 厄加特 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/6003.jpg"
},
{
id: 7002,
desc: "社会名流 乐芙兰 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/7002.jpg"
},
{
id: 8004,
desc: "霹雳游侠 弗拉基米尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/8004.jpg"
},
{
id: 9002,
desc: "联合王国 费德提克 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/9002.jpg"
},
{
id: 10003,
desc: "大天使长米迦勒 凯尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/10003.jpg"
},
{
id: 11003,
desc: "天人合一 易 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/11003.jpg"
},
{
id: 12004,
desc: "荒野镖客 阿利斯塔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/12004.jpg"
},
{
id: 13003,
desc: "美国大叔 瑞兹 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/13003.jpg"
},
{
id: 14003,
desc: "原野伐木工 赛恩 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/14003.jpg"
},
{
id: 15002,
desc: "亮丽女神 希维尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/15002.jpg"
},
{
id: 16005,
desc: "蕉泥座人 索拉卡 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/16005.jpg"
},
{
id: 17002,
desc: "军情五处 提莫 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/17002.jpg"
},
{
id: 18003,
desc: "烈焰雄心 崔丝塔娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/18003.jpg"
},
{
id: 19004,
desc: "冻原猎手 沃里克 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/19004.jpg"
},
{
id: 20003,
desc: "脏兮兮 努努 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/20003.jpg"
},
{
id: 21002,
desc: "法国皇室 厄运小姐 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/21002.jpg"
},
{
id: 22005,
desc: "紫晶射手 艾希 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/22005.jpg"
},
{
id: 23008,
desc: "野兽猎人 泰达米尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/23008.jpg"
},
{
id: 24003,
desc: "宗师级钓鱼训练师 贾克斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/24003.jpg"
},
{
id: 25001,
desc: "杀戮天使昔拉 莫甘娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/25001.jpg"
},
{
id: 26003,
desc: "遗迹守护者 基兰 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/26003.jpg"
},
{
id: 27005,
desc: "炼金狂士 辛吉德 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/27005.jpg"
},
{
id: 28001,
desc: "黑暗女王 伊芙琳 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/28001.jpg"
},
{
id: 29005,
desc: "横行霸道 图奇 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/29005.jpg"
},
{
id: 30003,
desc: "死神 卡尔萨斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/30003.jpg"
},
{
id: 31004,
desc: "侏罗纪化石 科加斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/31004.jpg"
},
{
id: 32006,
desc: "小小骑士 阿木木 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/32006.jpg"
},
{
id: 33004,
desc: "极度深寒 拉莫斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/33004.jpg"
},
{
id: 34006,
desc: "翼龙 艾尼维亚 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/34006.jpg"
},
{
id: 35002,
desc: "贵族血统 萨科 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/35002.jpg"
},
{
id: 36001,
desc: "战栗之毒 蒙多 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/36001.jpg"
},
{
id: 37001,
desc: "缪斯女神 娑娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/37001.jpg"
},
{
id: 38004,
desc: "先驱行者 卡萨丁 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/38004.jpg"
},
{
id: 39002,
desc: "自由之翼 艾瑞莉娅 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/39002.jpg"
},
{
id: 40003,
desc: "寒冰女皇 迦娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/40003.jpg"
},
{
id: 41002,
desc: "老兵 普朗克 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/41002.jpg"
},
{
id: 43002,
desc: "樱花乱舞 卡尔玛 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/43002.jpg"
},
{
id: 44003,
desc: "血精石诅咒 塔里克 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/44003.jpg"
},
{
id: 45002,
desc: "冰壶选手 维迦 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/45002.jpg"
},
{
id: 48005,
desc: "灭世魔神 特朗德尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/48005.jpg"
},
{
id: 50003,
desc: "绝代智将 斯维因 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/50003.jpg"
},
{
id: 51002,
desc: "荒野治安官 凯特琳 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/51002.jpg"
},
{
id: 53004,
desc: "陆地王者4WD 布里茨 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/53004.jpg"
},
{
id: 54001,
desc: "三叶草 墨菲特 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/54001.jpg"
},
{
id: 55001,
desc: "赏金猎人 卡特琳娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/55001.jpg"
},
{
id: 56001,
desc: "蓝焰梦魔 魔腾 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/56001.jpg"
},
{
id: 57001,
desc: "烈焰古树 茂凯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/57001.jpg"
},
{
id: 58003,
desc: "血色暴君 雷克顿 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/58003.jpg"
},
{
id: 59002,
desc: "屠龙勇士 嘉文四世 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/59002.jpg"
},
{
id: 61002,
desc: "木偶奇遇记 奥莉安娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/61002.jpg"
},
{
id: 62002,
desc: "斗战胜佛 孙悟空 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/62002.jpg"
},
{
id: 63001,
desc: "末日余生 布兰德 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/63001.jpg"
},
{
id: 67001,
desc: "摩登骇客 薇恩 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/67001.jpg"
},
{
id: 68002,
desc: "独眼海盗 兰博 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/68002.jpg"
},
{
id: 69002,
desc: "深海妖姬 卡西奥佩娅 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/69002.jpg"
},
{
id: 72001,
desc: "沙暴巨蝎 斯卡纳 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/72001.jpg"
},
{
id: 74003,
desc: "创意工坊 黑默丁格 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/74003.jpg"
},
{
id: 75002,
desc: "法老王朝 内瑟斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/75002.jpg"
},
{
id: 76003,
desc: "法国女仆 奈德丽 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/76003.jpg"
},
{
id: 77001,
desc: "武力全开 乌迪尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/77001.jpg"
},
{
id: 78001,
desc: "诺克萨斯 波比 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/78001.jpg"
},
{
id: 79002,
desc: "乡村农夫 古拉加斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/79002.jpg"
},
{
id: 80007,
desc: "丧尸杀手 潘森 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/80007.jpg"
},
{
id: 81002,
desc: "足球先生 伊泽瑞尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/81002.jpg"
},
{
id: 82005,
desc: "梅花国王 莫德凯撒 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/82005.jpg"
},
{
id: 84002,
desc: "绯红 阿卡丽 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/84002.jpg"
},
{
id: 85004,
desc: "医学博士 凯南 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/85004.jpg"
},
{
id: 86002,
desc: "黄金骑士 盖伦 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/86002.jpg"
},
{
id: 89001,
desc: "瓦尔基里 蕾欧娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/89001.jpg"
},
{
id: 90002,
desc: "暗影王子 玛尔扎哈 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/90002.jpg"
},
{
id: 91002,
desc: "血色精锐 泰隆 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/91002.jpg"
},
{
id: 96003,
desc: "帝王斑蝶 克格莫 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/96003.jpg"
},
{
id: 98001,
desc: "极寒 慎 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/98001.jpg"
},
{
id: 99002,
desc: "游侠法师 拉克丝 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/99002.jpg"
},
{
id: 101002,
desc: "战地法师 泽拉斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/101002.jpg"
},
{
id: 102004,
desc: "冰霜亚龙 希瓦娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/102004.jpg"
},
{
id: 103002,
desc: "暗影妖狐 阿狸 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/103002.jpg"
},
{
id: 104002,
desc: "杀出重围 格雷福斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/104002.jpg"
},
{
id: 105002,
desc: "苔原猎手 菲兹 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/105002.jpg"
},
{
id: 106002,
desc: "北地风暴 沃利贝尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/106002.jpg"
},
{
id: 111001,
desc: "失落大陆 诺提勒斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/111001.jpg"
},
{
id: 115001,
desc: "科学狂人 吉格斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/115001.jpg"
},
{
id: 117001,
desc: "糖果女巫 璐璐 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/117001.jpg"
},
{
id: 119005,
desc: "野兽猎人 德莱文 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/119005.jpg"
},
{
id: 120001,
desc: "血色骑士 赫卡里姆 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/120001.jpg"
},
{
id: 122002,
desc: "生化骑士 德莱厄斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/122002.jpg"
},
{
id: 126003,
desc: "天启骑士 杰斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/126003.jpg"
},
{
id: 127001,
desc: "血石妖后 丽桑卓 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/127001.jpg"
},
{
id: 133001,
desc: "血羽凤凰 奎因 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/133001.jpg"
},
{
id: 134001,
desc: "仲裁圣女 辛德拉 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/134001.jpg"
},
{
id: 143001,
desc: "野火之藤 婕拉 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/143001.jpg"
},
{
id: 161001,
desc: "战地机甲 维克兹 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/161001.jpg"
},
{
id: 201002,
desc: "猛虎 布隆 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/201002.jpg"
},
{
id: 236001,
desc: "职业杀手 卢锡安 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/236001.jpg"
},
{
id: 1007,
desc: "科学怪熊的新娘 安妮 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/1007.jpg"
},
{
id: 2006,
desc: "牛扒狂战 奥拉夫 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/2006.jpg"
},
{
id: 4005,
desc: "西部牛仔 崔斯特 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/4005.jpg"
},
{
id: 5002,
desc: "皇家守卫 赵信 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/5002.jpg"
},
{
id: 8007,
desc: "学生会长 弗拉基米尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/8007.jpg"
},
{
id: 9001,
desc: "幽魂 费德提克 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/9001.jpg"
},
{
id: 10002,
desc: "末世天使 凯尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/10002.jpg"
},
{
id: 11002,
desc: "星战 易 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/11002.jpg"
},
{
id: 12006,
desc: "地狱火 阿利斯塔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/12006.jpg"
},
{
id: 13005,
desc: "宗师级法师训练师 瑞兹 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/13005.jpg"
},
{
id: 15004,
desc: "钢铁之心 希维尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/15004.jpg"
},
{
id: 16002,
desc: "月光女神阿忒弥斯 索拉卡 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/16002.jpg"
},
{
id: 17004,
desc: "提莫:'约德尔人的一大步' ",
img: "https://ossweb-img.qq.com/images/lol/appskin/17004.jpg"
},
{
id: 18005,
desc: "约德尔海贼团 崔丝塔娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/18005.jpg"
},
{
id: 19006,
desc: "火牙狼人 沃里克 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/19006.jpg"
},
{
id: 20005,
desc: "攻城巨兽 努努 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/20005.jpg"
},
{
id: 21008,
desc: "女帝 厄运小姐 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/21008.jpg"
},
{
id: 22001,
desc: "极地女神 艾希 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/22001.jpg"
},
{
id: 23007,
desc: "梦魇 泰达米尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/23007.jpg"
},
{
id: 24012,
desc: "光明骑士 贾克斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/24012.jpg"
},
{
id: 25002,
desc: "地狱厨房 莫甘娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/25002.jpg"
},
{
id: 26002,
desc: "嘻哈精神 基兰 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/26002.jpg"
},
{
id: 27004,
desc: "科学狂人 辛吉德 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/27004.jpg"
},
{
id: 28003,
desc: "探戈灵魂 伊芙琳 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/28003.jpg"
},
{
id: 29004,
desc: "黑金诱惑 图奇 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/29004.jpg"
},
{
id: 30002,
desc: "自由女神 卡尔萨斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/30002.jpg"
},
{
id: 31001,
desc: "梦魇 科加斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/31001.jpg"
},
{
id: 32007,
desc: "殇之机器人 阿木木 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/32007.jpg"
},
{
id: 33003,
desc: "熔火之心 拉莫斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/33003.jpg"
},
{
id: 34002,
desc: "联盟之喙 艾尼维亚 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/34002.jpg"
},
{
id: 35006,
desc: "武动巅峰 萨科 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/35006.jpg"
},
{
id: 36005,
desc: "嗜血行刑 蒙多 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/36005.jpg"
},
{
id: 38001,
desc: "寒冰王座 卡萨丁 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/38001.jpg"
},
{
id: 39003,
desc: "夜行义贼 艾瑞莉娅 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/39003.jpg"
},
{
id: 40002,
desc: "海克斯科技 迦娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/40002.jpg"
},
{
id: 41001,
desc: "幽灵船长 普朗克 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/41001.jpg"
},
{
id: 42003,
desc: "红色男爵 库奇 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/42003.jpg"
},
{
id: 43001,
desc: "日冕女神 卡尔玛 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/43001.jpg"
},
{
id: 44002,
desc: "紫水晶意志 塔里克 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/44002.jpg"
},
{
id: 45003,
desc: "灰胡子魔法师 维迦 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/45003.jpg"
},
{
id: 48001,
desc: "里尔击球手 特朗德尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/48001.jpg"
},
{
id: 50002,
desc: "海贼参谋 斯维因 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/50002.jpg"
},
{
id: 51003,
desc: "古墓丽影 凯特琳 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/51003.jpg"
},
{
id: 53002,
desc: "钢铁之门 布里茨 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/53002.jpg"
},
{
id: 54002,
desc: "珊瑚礁 墨菲特 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/54002.jpg"
},
{
id: 55003,
desc: "海贼魅影 卡特琳娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/55003.jpg"
},
{
id: 56002,
desc: "幻影梦魔 魔腾 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/56002.jpg"
},
{
id: 57002,
desc: "图腾古树 茂凯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/57002.jpg"
},
{
id: 58001,
desc: "星河战队 雷克顿 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/58001.jpg"
},
{
id: 59003,
desc: "龙骑统帅 嘉文四世 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/59003.jpg"
},
{
id: 61001,
desc: "哥特女仆 奥莉安娜 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/61001.jpg"
},
{
id: 63002,
desc: "V字仇杀者 布兰德 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/63002.jpg"
},
{
id: 69003,
desc: "蛇发女妖 卡西奥佩娅 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/69003.jpg"
},
{
id: 72002,
desc: "远土之灵 斯卡纳 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/72002.jpg"
},
{
id: 74005,
desc: "生化博士 黑默丁格 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/74005.jpg"
},
{
id: 75001,
desc: "星空之门 内瑟斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/75001.jpg"
},
{
id: 76006,
desc: "铁血猎手 奈德丽 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/76006.jpg"
},
{
id: 78006,
desc: "血色之锤 波比 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/78006.jpg"
},
{
id: 79005,
desc: "飞车暴走族 古拉加斯 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/79005.jpg"
},
{
id: 80002,
desc: "万人敌 潘森 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/80002.jpg"
},
{
id: 81001,
desc: "冒险精神 伊泽瑞尔 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/81001.jpg"
},
{
id: 82002,
desc: "地狱火 莫德凯撒 ",
img: "https://ossweb-img.qq.com/images/lol/appskin/82002.jpg"
}
];
    //钻石tab
    //冠军44
    $('.btn-check1').on('click', function(){
    	renderHtml(championList44);
        $(".tc-title").css("backgroundImage","url(ossweb-img/tc-title1.png)");
    })
    //限定477
    $('.btn-check2').on('click', function(){
        renderHtml(championList477);
        $(".tc-title").css("backgroundImage","url(ossweb-img/tc-title2.png)");
    })
    //全英雄141
    $('.btn-check3').on('click', function(){
        renderHtml(heroList);
        $(".tc-title").css("backgroundImage","url(ossweb-img/tc-title3.png)");
    })
    //黄金tab
    //特权皮肤全英雄301
    $('.btn-check4').on('click', function(){
        renderHtml(championList301);
        $(".tc-title").css("backgroundImage","url(ossweb-img/tc-title4.png)");
    })
    //全英雄141
    $('.btn-check5').on('click', function(){
        renderHtml(heroList);
        $(".tc-title").css("backgroundImage","url(ossweb-img/tc-title3.png)");
    })
    //助威tab
     //特权皮肤全英雄143
    $('.btn-check6').on('click', function(){
        renderHtml(listCommon);
        $(".tc-title").css("backgroundImage","url(ossweb-img/tc-title4.png)");
    })
     //全英雄143
    $('.btn-check7').on('click', function(){
        renderHtml(heroList);
        $(".tc-title").css("backgroundImage","url(ossweb-img/tc-title3.png)");
    })


