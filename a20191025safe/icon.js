$(function(){
var talkWord=[
{img:"ossweb-img/box4-head.png",name:"Roure.",con:"没错，就是得打击外挂，没有外挂的游戏才是我们需要的游戏！加油腾讯！加油地下城与勇士！我还可以再战十年！"},
{img:"ossweb-img/box4-head.png",name:"喜。",con:"虽然我没玩过这游戏，但是我知道腾讯大大的反作弊系统是越来越强大了，非常感谢腾讯大大给了我们这么良好的游戏环境"},
{img:"ossweb-img/box4-head.png",name:"王向林",con:"骂人，开挂，代练都应该处罚，这些都是影响我们正常玩家的因素"},
{img:"ossweb-img/box4-head.png",name:"당 신 을 만 난",con:"健康游戏，文明发言。 从我们做起！"},
{img:"ossweb-img/box4-head.png",name:"dxlybkg",con:"首先在网上卖号买号都不安全，借号也不安全，代练也是不靠谱的，即使是代练账号也会封号，请大家保管好自己的账号请勿相信他人预防受骗上当"},
{img:"ossweb-img/box4-head.png",name:"A ゛",con:"只要游戏存在，黑产就会通过各种方式进行破坏来获得利益。"},
{img:"ossweb-img/box4-head.png",name:"晚风",con:"账号首先不安全！这是最重要的！而且代练可能使用外挂，异地登录等可能会导致封号处罚，这是给你解不了的，只能慢慢等！游戏，自己玩开心就行了！拒绝外挂，拒绝代练，游戏环境需要大家共同维护"},
{img:"ossweb-img/box4-head.png",name:"音儿 洋洋🇨🇳",con:"开外挂真的很影响游戏体验，希望腾讯继续重拳出击，我们看好你哦"},
{img:"ossweb-img/box4-head.png",name:"年年有余的鱼",con:"净化网络环境，从小事做起。省得，有些人就觉得网络世界就跟个厕所似的，现实中不知道，但是网络世界中，那么放肆，出口成脏，臭不可闻的。游戏世界中这种事最常见，因为，大家都带着面具。所以净化游戏环境还是必须要支持滴."},
{img:"ossweb-img/box4-head.png",name:"Alchemie",con:"其实不止王者荣耀，lol的反演员也做得好，昨天宗师局遇到演员举报了，大概过了两个小时立马回复封禁了，不得不说安全团队做得还是很到位的"},
{img:"ossweb-img/box4-head.png",name:"热情难料",con:"支持加大力度打击修改游戏皮肤之类的辅助 英雄联盟禁用这个东西 qq飞车手游也应该禁用 修改游戏数据 就应该严惩不贷！"},
{img:"ossweb-img/box4-head.png",name:"Y·H·L",con:"拒绝使用任何第三方插件工具，一切都要凭实力。难道你的生活也要开挂吗？"},
{img:"ossweb-img/box4-head.png",name:"雷老虎",con:"对自己负责，对他人尊重！良好游戏环境从我做起。没有无敌的外挂，只有永恒的初心！愿腾讯越做越好，让那些躲在黑暗的家伙无处可逃！"},
{img:"ossweb-img/box4-head.png",name:"嗯丶",con:"希望对骂人的惩罚加大点，单禁言不会让他们长记性，原本有时打的好好的，因为一点小事就在那骂来骂去，玩游戏的心情都被他们弄差了"},
{img:"ossweb-img/box4-head.png",name:"Kittie",con:"打造积极绿色公正的游戏环境，对开挂辅助玩家零容忍！"},
{img:"ossweb-img/box4-head.png",name:"Sunday",con:"演员这种行为真的会破坏游戏公平，挫伤玩家游戏积极性，会让玩家渐渐失去对游戏的热爱，支持官方！"},
{img:"ossweb-img/box4-head.png",name:"南风知我意",con:"我觉得游戏内干预挺好的，可以给那些因为某些原因而恶意挂机、送人头的人一个严重的警告。这样看到会被封号，就会严肃对待了，至少继续恶意下去了。不过还是有几点注意的:1在排位中如果有恶意挂机的，送人头的导致游戏输掉了比赛，应当给输得这一方少扣点排位点，赢得一方少给一点排位点。2对于多次挂机恶意送人头的，应当给予禁赛处理，若要解除禁赛必须完整的打若干把人机模式，具体局数根据违规的严重处理。在严重的可以封号处理。3希望系统的检测会更加完善，让那些非人为而造成的挂机，和对游戏技术掌握不娴熟的人并非恶意送人头的人更好的体验。"},
{img:"ossweb-img/box4-head.png",name:"华开天下°",con:"严格打击辅助外挂，让游戏更具有公平性，获得更好的游戏体验感！"},
{img:"ossweb-img/box4-head.png",name:"付成磊",con:"挂机的处罚标准感觉现在挺成熟了，游戏过程中突发状况在所难免，主要还是要有一个良好的心态对待游戏娱乐。"},
{img:"ossweb-img/box4-head.png",name:"柠檬洗洁精",con:"支持。靠自己的能力胜利通过的团才有意思，但有时候出现一只老鼠坏了一锅粥，开了团不能及时的将他强行请出去，还捣乱的让团里其他人制裁，希望建议在这方面出台政策，及时将那只老鼠强行下线，保护好其他正常开团的团员利益谢谢！"},
{img:"ossweb-img/box4-head.png",name:"曦之",con:"个人更希望，官方对使用外挂的机器和账号下的所有游戏进行封号，0收益，禁言，禁赛处理。严重者对同一身份认证下的账号封停或账号回收"},
{img:"ossweb-img/box4-head.png",name:"A-杨.X.L",con:"其实任何一款游戏的宗旨都是为了给玩家提供一个公平公开的娱乐平台，在游戏里面没有所谓的等级之分，你厉害我不跟你玩，我找同级别的玩，这就是玩家的心得。非要说针对游戏的安全方面的话，那就是为了公平，游戏的体验而打击第三方软件的力度。从而在这里要感谢那些一直坚守在维护在后台的工作人员们，你们辛苦了"},
{img:"ossweb-img/box4-head.png",name:"阿瞞。",con:"支持外挂整治，希望官方开启一个投诉入口，不仅仅是秒人外挂，在pk场微调加速这种的外挂是占很大比例的。希望官方更好的解决一下"},
{img:"ossweb-img/box4-head.png",name:"魏薇【Amy小可爱呀💋 】",con:"腾讯在DNF中打击外挂这方面做的还是很不错的"},
{img:"ossweb-img/box4-head.png",name:"张凯杨",con:"作弊行为还是要靠打击 腾讯这方面运营的确比别的平台好太多"},
{img:"ossweb-img/box4-head.png",name:"晨曦~",con:"cf加油，建造良好的游戏环境"},
{img:"ossweb-img/box4-head.png",name:"车前车后",con:"看得出来最近系统很公正，游戏里无缘无故骂人的我举报了几次。全部都被禁言了。"},
{img:"ossweb-img/box4-head.png",name:"文艺",con:"10年老玩家，对飞车整治外挂这一块还是相对满意的！加油"},
{img:"ossweb-img/box4-head.png",name:"wao",con:"感谢每一个对抗外挂的工作人员和堡垒玩家们！不开挂从我做起！"},
{img:"ossweb-img/box4-head.png",name:"KPLYN",con:"言必行公司，上次我把网吧一个开脚本的人拍给客服看后续就一系列查封处罚，觉得很爽谢谢维持游戏平衡的工作人员"},
{img:"ossweb-img/box4-head.png",name:"清灯",con:"局内干预很好，但是有少部分玩家崩了就干扰队友，骂队友。万年野最典型，一直刷野不抓，崩了就怪队友不帮忙。抓人就送。团战不见人影，线也不带。少部分是技术不好可以理解，但是有些玩家故意这样玩真的很气人。永远都是四打五很难受。对队友根本不公平。还有些玩家选英雄是拿来恶心的队友的，像蛤蟆冰鸟，堵队友，吃队友去卖，完事就怪队友送。被坑的玩家还要被举报。真的很气人。希望系统越来越完善，针对这种玩家给予处罚吧。"},
{img:"ossweb-img/box4-head.png",name:"a铭记在xin",con:"请继续坚持！加大对外挂的打击力度！辛苦你们了！"},
{img:"ossweb-img/box4-head.png",name:"阿江",con:"真的感到欣慰，现实中有法律，游戏里有官方，加油，谢谢DNF官方，一直在保护着我们的权益！"},
{img:"ossweb-img/box4-head.png",name:"回忆♥幸福",con:"打击外挂必须得严厉！看见使用外挂的一定要看到一个举报一个！！！让那些使用外挂的通通滴消失。"},
{img:"ossweb-img/box4-head.png",name:"安筱诺",con:"好样的，为你们这些战斗在一线的工作人员点赞，但是说实话不能放松，因为现在的外挂更新速度完全超乎你们的想象，今天可能是这个外挂，明天可能是那个外挂，但是不管怎样都感谢你们为我们这些玩家付出的一切！"},
{img:"ossweb-img/box4-head.png",name:"王鹏宇",con:"腾讯对付外挂还是有一套的"},
{img:"ossweb-img/box4-head.png",name:"Run.t",con:"支持严厉打击各类辅助外挂！创造和谐公平良好游戏环境。"},
{img:"ossweb-img/box4-head.png",name:"王王王Zhao宇",con:"打个游戏碰见代练，赢的也没劲，输得没脾气，希望每位召唤师都能够尊重别人的游戏体验，建立文明和谐自由平等的游戏环境"},
{img:"ossweb-img/box4-head.png",name:"🌚",con:"不管怎么说，对于打击外挂这件事吧，我是举二十个指头赞成的，虽然我们能力有限不能参与详细的技术工作进去，但是！但是！但是！我们可以自身做起，抵制外挂！只有自身做起，大家才能有更好的环境。"},
{img:"ossweb-img/box4-head.png",name:"kd",con:"做得好！还大家一个公平的竞技环境！"},
{img:"ossweb-img/box4-head.png",name:"林",con:"对于任何消极游戏行为都讨厌，及其影响游戏体验，国内游戏环境还是有很大进步空间的，期待一个有素质的游戏环境"},
{img:"ossweb-img/box4-head.png",name:"Will",con:"支持！希望加大力度打击外挂，给我们提供一个更好的游戏环境！笔芯️"},
{img:"ossweb-img/box4-head.png",name:"烨",con:"遏制低素质游戏行为，提高整体游戏体验。从我做起"},
{img:"ossweb-img/box4-head.png",name:"云野.",con:"现在cf活动挺良心的.就是排位演员外挂透视锁头挺多！望官方能下重拳！9年老兵报道！"},
{img:"ossweb-img/box4-head.png",name:"Arise",con:"感谢奋斗在与外挂斗争第一线的技术人员，你们辛苦了！"},
{img:"ossweb-img/box4-head.png",name:"召民L之路B70B52B83B52B93",con:"共同维护游戏环境，公平竞技，拒绝外挂，见一个举报一个，从我做起，体验游戏的乐趣，加油！"},
{img:"ossweb-img/box4-head.png",name:"无为自在清净",con:"游戏里碰见不公平的时候，非常气，每个人都有体会，希望大家一起抵制这种行为，见到就举报，维护游戏安全，提高我们每个人的游戏体验！"},
{img:"ossweb-img/box4-head.png",name:"风里雨里昌平等你",con:"腾讯还是比较优秀的，我比较喜欢要DNF玩了好久了，虽然不是大佬，但是在很用心的玩。"},
{img:"ossweb-img/box4-head.png",name:"一个孤独的六",con:"加油，感谢腾讯游戏安全日让我们的游戏体验更上一步！祝腾讯越来优质越来越智能！加油！我爱腾讯！天美、光子、等腾讯工作室的工作人员你们辛苦了！我爱你们"},
{img:"ossweb-img/box4-head.png",name:"绝地课代表",con:"安全日：我有个建议很想提一下。针对游戏外挂，我们不应该妥协，建立全面的信誉分体系，让他一处开挂，处处受限。比如CF开了透视挂被封号30天，扣除腾讯全游戏信誉分，这个时候登录王者荣耀，显示信誉分过低，无法进行排位，并且无法活动活动奖励。针对严重开挂的，对全游戏限制"},
{img:"ossweb-img/box4-head.png",name:"音痴杰",con:"对于游戏外挂我深有体会，我很痛恨外挂。因为账号借助他人玩耍开挂导致被封三年。也因此再不好心借助他人账号，打击外挂从我做起"},
{img:"ossweb-img/box4-head.png",name:"杨振凯50960",con:"抵制外挂真的是超好的，还有挂机的人也是，严重影响游戏环境加油"},
{img:"ossweb-img/box4-head.png",name:"樂樂母",con:" @腾讯游戏安全中心 游戏不是生活的全部，但是已经成为了生活中不可或缺的一部分，在闲暇时，疲惫时开始一局精彩的竞技游戏是一件很美好的事情，但是现如今的游戏环境恶劣，不像以前那样公平，随之而来的是更多玩家的作弊，不公平竞技。希望游戏环境越来越好，维护游戏环境从我做起。"},
{img:"ossweb-img/box4-head.png",name:"2019要早睡早起",con:"我感觉确实效率变好了。不再是以前那样举报了就石沉大海根本没有反馈，即使对方行径恶劣也不一定会受到惩罚。不过最近我举报的只要确实存在不好的行为的确实都有反馈。继续加油！"},
{img:"ossweb-img/box4-head.png",name:"你是我的太阳865",con:"亲爱的客服你们好，为了良好的游戏环境，举报有奖活动奖励一定要丰富，对于开挂游戏玩家举报的也很积极，因为有奖励收获，才能压制外挂就是会辛苦游戏检查人员，被举报的玩家会变多会给你们工作压力。我不知道什么办法可以中和又能反外挂，我只是不想你们很辛苦，但也想希望所有的玩家有更好的游戏体验"},
{img:"ossweb-img/box4-head.png",name:"千代晶juiey_咸鱼躺",con:"玩游戏这么多年了，游戏安全一直是很重要的用户体验，如今越来越健全的法律和意识让人越来越安心_(:з」∠)_希望渐渐消除开挂黑号等情况叭"},
{img:"ossweb-img/box4-head.png",name:"叮咚滴哦",con:"虽然我也开过挂，  但是我也深有体会，发现开外挂玩游戏一点意思都有没有，希望安全中心越做越好。给大家一个公平公正的游戏环境！"},
{img:"ossweb-img/box4-head.png",name:"眼中的天空多了一丝波纹",con:"对每一局游戏都权力以赴，这就是我对游戏世界及所有游戏人的最大敬意。"},
{img:"ossweb-img/box4-head.png",name:"飞--帘",con:"#1220游戏安全日#抵制外挂,为自己喜欢的游戏创造一个良好的环境"},
{img:"ossweb-img/box4-head.png",name:"不要再让我女装了呀QwQ",con:"网络空间也是公共领域。公共生活需要公共秩序。有序的公共生活是社会生产活动的重要基础;是提高社会成员生活质量的基本保障;是社会文明的重要标志。网络空间是虚拟的，但运用网络空间的主体是现实的。网络空间与现实社会一样，既要提倡自由，也要遵守秩序，守法律，讲道德。"},
{img:"ossweb-img/box4-head.png",name:"阿bu同学",con:"再次给大家安利qq安全中心的游戏保护功能，晚安"},
{img:"ossweb-img/box4-head.png",name:"Shisan顿",con:"有真本事就比比技术，不要比谁外挂贵。遇到外挂宁愿杀错 也不放过 从今往后腾讯与玩家一起发力 让外挂无处遁形。我与外挂不共戴天"},
{img:"ossweb-img/box4-head.png",name:"大aa老师",con:"我觉得的吧，腾讯相对来说做的很不错了，至少我在打游戏时没有遇到过外挂，但是喷子倒不少。感觉喷子这方面想要改善还有很长一段路要走啊，可能关乎到整个社会文明的大义了，哈哈哈哈"},
{img:"ossweb-img/box4-head.png",name:"EA7--XMS",con:"绿色游戏从我做起，维护游戏的良好环境，坚决不使用第三方软件（任何不应该有的），同时希望腾讯游戏对旗下的游戏里面的外挂严惩不误，对其制作者更要严厉，不能留情！（一名腾讯游戏玩家）"},
{img:"ossweb-img/box4-head.png",name:"鳯九岁",con:"打击外挂，从我做起，外挂者令我们深恶痛绝，不仅破坏游戏平衡，还破坏我广大玩家的游戏体验，腾讯能够做到0外挂，只要开挂就绝对封号，这是我们的福音，也是我们的骄傲！"},
{img:"ossweb-img/box4-head.png",name:"DaiYingJie",con:"每一次流水的冲刷，虽微不足道，经久不息，造就沃野千里，鱼米之乡；一缕微风的吹拂，虽了无痕迹，经久不息，造就石林山海，造化奇观。沧海桑田起源于每一次微小的力量。不是每一次磨砺都足以改变，不是每一点改变都可以知，但我们始终坚持抵制游戏外挂。与腾讯游戏安全中心为伴！"},
{img:"ossweb-img/box4-head.png",name:"钟情TsHonour",con:" +我坚决不开任何形式的外挂，这是一名十年老兵的承诺！我坚决打击任何外挂！还我大穿越火线一片蓝天净土！！"},
{img:"ossweb-img/box4-head.png",name:"一般小富",con:"真心希望腾讯能够一直把封外挂做下去，维护好健康的游戏环境，不忘初心，加油！"},
{img:"ossweb-img/box4-head.png",name:"SXJ_Butter-Fly",con:"Nice，终于是有了一个良好的开端，希望信用体系越来越完善，甚至能给那些被破坏游戏体验的玩家合适的补偿"},
{img:"ossweb-img/box4-head.png",name:"皮新兰",con:" 作为堡垒死忠玩家，上次和朋友们四排遇到神仙，直接举报，然后观看～两分钟后，神仙那一队，就……在赛场消失了， 没什么宣言，只能说，无论出于任何形式任何目的的开挂，都会被封号，路还长，我们走着瞧"},
{img:"ossweb-img/box4-head.png",name:"蘑菇君Fual",con:"我是来自英雄联盟的一位召唤师，从s6玩到现在s9，没有开过外挂，文明游戏。让我们一起捍卫英雄联盟的安全环境，远离外挂，文明游戏，从你我做起。保护并热爱它！ @腾讯游戏安全中心"},
{img:"ossweb-img/box4-head.png",name:"爱听歌的鱼有么有",con:"希望能够把处罚系统做的更加智能化，人性化，把游戏中的各种情况都能够考虑到，这样才能使环境越来越好"},
{img:"ossweb-img/box4-head.png",name:"小麦哥only",con:"就在前些天我LOL出现异地登录，可能是开挂封号了，一封就是三年，玩LOL也差不多六年了。突然的封号让我整个人都特别的不自在，总觉得生活少了点什么，但同样我还是要感谢腾讯客服，在他们的辛苦审查下帮我处理好了！特别讨厌开挂的人，开外挂一定要严惩！"},
{img:"ossweb-img/box4-head.png",name:"ZAN520a",con:"玩LOL4年，从未试过第一挂机。信用满分"},
{img:"ossweb-img/box4-head.png",name:"_夢無淚_",con:"我是來自香港的玩家， 雖然騰訊遊戲在香港只有很少的活動可以供玩家參加， 但是我依然很喜歡玩王者榮耀， 我有一些 感謝之言想表達給遊戲團隊， 王者榮耀是一款很成功的很少外掛的遊戲，希望王者榮耀能夠越做越好，擁有更多更多的三年！ 辛苦了各位"},
{img:"ossweb-img/box4-head.png",name:"余生一网红 ",con:"腾讯游戏第一届游戏安全日！希望所有游戏玩家拒绝外挂，积极举报。游戏娱乐为主，玩的是快乐，没必要出口成脏，做一个素质玩家，共创素质游戏平台。@腾讯游戏安全中心"},
{img:"ossweb-img/box4-head.png",name:"胖妞滴微博 ",con:"现实已经有诸多的不公平， 不要再毁坏游戏界仅剩的一点净土， 杜绝外挂、从自身做起， 致敬所有为维护游戏环境所努力的玩家和厂商。"},
{img:"ossweb-img/box4-head.png",name:"cyw对对对",con:"安全日:我希望没有外挂，没有代练，没有挂机的人，让低段位有更好的游戏平台，是一个公平的对决，我知道总有一天不会在，有挂了，没有代练了，有这一个公平，公正的游戏，共同维护游戏环境，公平竞技，拒绝外挂，消极比赛，从大家做"},
{img:"ossweb-img/box4-head.png",name:"次元的意义",con:"游戏是为了开心是为了休闲，然而现在很多忘记了游戏的意义。现在太多人为了输赢不择手段，输赢成了最重要的把游戏当成自己生活的所有的人，当你回头事你会发现你其实一无所有，你什么都不是。靠自己技术提升的人会留下一些美好的回忆和快乐可以和同胞分享，你要怎么开口呢！"},
{img:"ossweb-img/box4-head.png",name:"余山海 ",con:"希望当成年人在现实生活中感到疲惫时能够有一个放松的地方。希望孩子在孤独时能够有一个找到玩伴的地方。而当有人逃避现实到游戏世界里时，也希望游戏能够温暖他们。适度游戏，理性消费。让玩家与平台共同打造一个好的游戏环境。这样游戏运营商和玩家才能共赢。"},
{img:"ossweb-img/box4-head.png",name:"天蝎流浪的猫",con:"安全日 改成安全月 安全年多好 鄙视那些投机取巧 我只信服真实力硬功夫，我所玩的游戏有很多，遇到的外G也数不胜数 深受其害啊 往往投诉不得结果很是懊恼  势单力薄吗？ 在娱乐的游戏里都要投机取巧的家伙现实中人品也不一定好到哪里去 所以我把这些人看成恶势力 看到听到碰到的我叫朋友和我一起投诉"},
{img:"ossweb-img/box4-head.png",name:"我很无奈哥",con:"腾讯游戏安全中心 玩了近10年的各种腾讯下的游戏了 从未有过一次因开挂 恶意语言攻击 而被封过"},
{img:"ossweb-img/box4-head.png",name:"剩一点将星耿耿",con:"把骂人举报效率比以前高多了！原来一天之后出结果还不一定处罚现在我打完下一局就有结果还都是已处理！夸爆！"},
{img:"ossweb-img/box4-head.png",name:"小甜啵啵啵X",con:"我觉得现在骂脏话的少了，屏蔽了好多，这个很棒哦"},
{img:"ossweb-img/box4-head.png",name:"小钢人大钢帽",con:"从今天起觉得不消极比赛，认真打好每一局就是对游戏环境最好的维护"},
{img:"ossweb-img/box4-head.png",name:"亚特兰蒂斯87949",con:"玩dnf八年，从未开过外挂。良好游戏环境从我做起！"},
{img:"ossweb-img/box4-head.png",name:"超酷的小隆",con:"太好了  有个朋友开挂开了两年半终于封了 安全优化的太好了"},
{img:"ossweb-img/box4-head.png",name:"Superpen9",con:"骂人禁言这方面确实做的不错，开挂封号也处理的很快"},
{img:"ossweb-img/box4-head.png",name:"如果木有感情",con:"加大打击力度，加强对外挂的自查功能，还游戏世界里的一片蓝天。"},
{img:"ossweb-img/box4-head.png",name:"白首迟暮53880 ",con:"堡垒之夜感觉到了tx打击外国的力度，第四赛季的时候外国猖獗到我一度想退游，幸亏坚持下来，现在环境已经好很多了，希望可以继续加大力度，加油～"},
{img:"ossweb-img/box4-head.png",name:"白以羽白54063",con:"我们一定要严厉监督破坏游戏安全的行为，从每个人自己做起，一旦发现走有破坏游戏安全和平衡的行为如外挂等，一律及时举报，同时自身也严格遵守游戏规则，共同缔造一个安全和谐的游戏环境"},
{img:"ossweb-img/box4-head.png",name:"太子杂货薇XiaoQ9502",con:" 曾经我也想向往辅助，奈何缺少了公平竞技的乐趣。所以我将凡事使用辅助者，一律举报。毫不留情！"},
{img:"ossweb-img/box4-head.png",name:"SakuraSea27056",con:"发扬电竞精神，抵制恶意游戏，我是@王者荣耀  普通玩家，我将@腾讯游戏安全中心  携手安全中心捍卫游戏荣耀，为了游戏的荣誉，我将坚持到底！"},
{img:"ossweb-img/box4-head.png",name:"最帅的黄帅帅",con:"开外挂和代练的人真的很恶心，我们辛辛苦苦上分在他们面前不堪一击，共同维护游戏环境，公平竞技"},
{img:"ossweb-img/box4-head.png",name:"77SGod",con:"玩了9年没被盗过号，希望腾讯能再接再厉"},
{img:"ossweb-img/box4-head.png",name:"电竞吴奇隆259695",con:"建议严厉打击外挂和游戏中破坏游戏平衡的人，例如骗子和盗号的人，抓到一定不能放过，做为心悦玩家的其中一员，坚决为和谐游戏做贡献，积极提倡大家绿色游戏！这游戏我不想放弃"}
]
var sayHtml='';
for(var i = 0; i< talkWord.length; i++){
	sayHtml += '<li>'+
		'<div class="head-box">'+
			'<img src="' + talkWord[i].img + '" alt="" />'+
		'</div>'+
		'<div class="int">'+
			'<p  class="name">'+ talkWord[i].name + '</p>'+
		'</div>'+
		'<div  class="detail">' +
			'<p>'+talkWord[i].con + '</p>'+
	'</li>';
	}
$(".cont4 ul").html(sayHtml);
$(".cont4 ul li:even").css({"background-color":"#FFFFFF"});
$(".cont4 ul li:odd").css({"background-color":"#e9effb"});

$(".cont4 ul .head-box:eq(16)").css({"margin-top":"60px"});
$(".cont4 ul .name:eq(16)").css({"padding-top":"84px"});
$(".cont4 ul .head-box:eq(30)").css({"margin-top":"36px"});
$(".cont4 ul .name:eq(30)").css({"padding-top":"62px"});
$(".head-box:eq(21),.head-box:eq(49),.head-box:eq(52),.head-box:eq(54),.head-box:eq(65),.head-box:eq(78),.head-box:eq(80)").css({"margin-top":"26px"});
$(".name:eq(21),.name:eq(49),.name:eq(52),.name:eq(54),.name:eq(65),.name:eq(78),.name:eq(80)").css({"padding-top":"48px"});
})