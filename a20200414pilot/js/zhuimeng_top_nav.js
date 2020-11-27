//此文件用于生成专题top条，请按注释中的**********号部分修改文件的部分内容
//此版对top条使用绝对定位，请在专题CSS中添加body{padding-top:42px;}
//改用直接插入top条内容结构，避免大量DOM操作
//由于避免部分内容被缓存，将广告地址剥离到gg.js文件中
//代码对CSS文件、广告文件、背景图文件的地址自动添加一个随机数实现文件的强行更新
function insertHead(){
	//简化3个DOM函数
	var g_id=function(id){return document.getElementById(id);},c_obj=function(elem){return document.createElement(elem);},g_obj=function(pnt,elem){return pnt.getElementsByTagName(elem);console.log(222)}
//定义文件变量：furl变量为路径，pic变量为CSS图片文件名，css变量为CSS文件名，**********请按您的具体情况进行修改**********
	var furl="css/",css="comm_head.css";
//定义变量
	var rd="?rd="+Math.random(),wp=c_obj("div"),tgBox,ul,c=0;
//CSS加载完毕后显示top条，注意下面数字1000是CSS对ul定义的宽度，**********请按您CSS的具体定义进行修改**********
	var check=function(){if(ul.offsetWidth=='100%'){clearInterval(ck);ul.style.height=42+"px";ul.style.overflow="visible";ul.setAttribute("style","");};};
//动态插入css或js文件
	var delay=function(url){var type=url.split("."),file=type[type.length-1];if(file=="css"){var obj=c_obj("link"),lnk="href",tp="text/css";obj.setAttribute("rel","stylesheet");}else var obj=c_obj("script"),lnk="src",tp="text/javascript";url=furl+url+rd;obj.setAttribute(lnk,url);obj.setAttribute("type",tp);file=="css"?g_obj(document,"head")[0].appendChild(obj):document.body.appendChild(obj);return obj;};delay(css);
//动态插入通用条外框div
	wp.id="tgTB";wp.style.position="absolute";wp.style.left=wp.style.top=0;wp.style.width='100%';document.body.appendChild(wp);document.body.style.paddingTop=80+"px";
	wp.style.opacity = 0;
//插入通用条结构，修改时请注意引号和转义符，**********请按您的具体结构进行修改**********
//请不要修改ul标签里的style属性
//bg变量为结构的背景图片，请不要修改
	wp.innerHTML=[
	'<div class="header-wrapper">'+
			'<div class="comm-header-nav">'+
				'<div class="mod-header">'+
					'<div class="topline">'+
			   			'<a href="https://zhuimeng.qq.com/community/" class="logo" onclick="PTTSendClick(\'topline\',\'logo\',\'腾讯追梦计划\');" title="腾讯追梦计划">腾讯追梦计划</a>'+
						'<ul class="menu" id="toplineBtns">'+
					       ' <li><a href="https://zhuimeng.qq.com/community/" onclick="PTTSendClick(\'menu\',\'menu1\',\'首页\');">首页</a></li>'+
							' <li>'+
					            '<a href="https://zhuimeng.qq.com/act/1187/4a3e7948d2ca6fb0/a20190625dream/eventslist.shtml"  class="btn-event" onclick="PTTSendClick(\'menu\',\'menu2\',\'赛事活动\');">赛事活动</a>'+
					       ' </li>'+
					       ' <li><a href="javascript:alert(\'敬请期待\');" onclick="PTTSendClick(\'menu\',\'menu3\',\'课程\');">课程</a></li>'+
					       ' <li><a href="https://coding.qq.com/community/" onclick="PTTSendClick(\'menu\',\'menu4\',\'编程\');">编程</a></li>'+
					       ' <li><a href="javascript:alert(\'敬请期待\');;" onclick="PTTSendClick(\'menu\',\'menu5\',\'轻应用\');">轻应用</a></li>'+
					       ' <li><a href="javascript:alert(\'敬请期待\');" onclick="PTTSendClick(\'menu\',\'menu6\',\'百科\');">百科</a></li>'+
					  '  </ul>'+
					   ' <div class="login-box">'+
					       ' <div id="unlogin" class="login unlogin">'+
					            '<a href="javascript:TGDialogS(\'pop-login\');">[登录]</a>'+
					      '  </div>'+
					      '  <!--登录前状态 End-->'+
					      '  <!--登录后状态 Start-->'+
					       ' <div id="logined" class="logined login" style="display: none;">'+
					        	'<div class="login_user_show">'+
					        	'	<div class="head_img_show">'+
					        			'<a href="javascript:void(0)" >'+
						        		'	<img width="40px" src="ossweb-img/user-head-img.jpg" class="headImgurl" />'+
						        	'	</a>'+
					        	'	</div>'+
					        		'<dl class="my_center_show" id="my_center_show">'+
						               ' <dd><a href="https://zhuimeng.qq.com/act/1187/4a3e7948d2ca6fb0/personal/message.shtml" target="_blank" class="message_a_show" onclick="PTTSendClick(\'menu\',\'messageCenter\',\'消息中心\');"><i class="comm_header_spr icon-message"></i>消息中心</a></dd>'+
						               ' <dd><a href="https://zhuimeng.qq.com/act/1187/4a3e7948d2ca6fb0/personal/index.shtml" target="_blank" class="personal_a_show" onclick="PTTSendClick(\'menu\',\'personalCenter\',\'个人中心\');"><i class="comm_header_spr icon-personal"></i>个人中心</a></dd>'+
						              '  <dd><a href="https://zhuimeng.qq.com/act/1187/4a3e7948d2ca6fb0/a20200302fans/mygrowth.html" target="_blank" class="rank_a_show" onclick="PTTSendClick(\'menu\',\'myRank\',\'我的等级\');"><i class="comm_header_spr icon-rank"></i>我的等级</a></dd>'+
						           ' </dl>'+
					        		'<span class="login_nickName">Jackson_cloud</span>'+
					        		'<span class="icon_rank_show">1</span>'+
					        	'</div>'+
					           ' <a id="logout_btn" class="logout_btn" href="javascript:void(0)" title="退出">[退出]</a>'+
					       ' </div>'+
					       ' <!--登录后状态 End-->'+
					    '</div>'+
					'</div>'+
				'</div>'+
			'</div>'+
		'</div>'+
		'<div class="pop pop-1" id="pop-login" style="display: none;">'+
		 ' <h4>请先登录</h4>'+
		  '<ul class="cen">'+
		   ' <li>'+
		     ' <a onclick="PTTSendClick(\'btn\',\'qq\',\'QQ\');" id="login_qq" class="qq spr" href="javascript:;">QQ登录</a>'+
		   ' </li>'+
		   ' <li>'+
		   '   <a onclick="PTTSendClick(\'btn\',\'wx\',\'微信\');" id="login_wx" class="wx spr" href="javascript:;">微信登录</a>'+
		  '  </li>'+
		'  </ul>'+
		'  <a onclick="PTTSendClick(\'btn\',\'close1\',\'关闭1\');" class="close spr ti" href="javascript:closeDialog();" title="关闭">关闭</a>'+
		'</div>'
	].join(""); 

}
insertHead();
//延迟加载
function ath_tb(e,name,func,cap){if(e.addEventListener){e.addEventListener(name,func,cap);}else if(e.attachEvent){e.attachEvent('on'+name,func);}}
//延迟开始
ath_tb(window,"load",function(){
	document.getElementById("tgTB").style.opacity = 1;
	var scriptSrc = document.getElementById('zhuimengTopNav').src;
	var scriptIdx =scriptSrc.substring((scriptSrc.indexOf('=')+1));
	var topNavBtn = document.getElementById("tgTB").getElementsByTagName("ul")[0].getElementsByTagName("li");
	for(var i = 0; i< topNavBtn.length; i++){
		topNavBtn[i].className = '';
	}
	topNavBtn[scriptIdx].className = 'on';
});
