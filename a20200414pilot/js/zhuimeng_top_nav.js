//���ļ���������ר��top�����밴ע���е�**********�Ų����޸��ļ��Ĳ�������
//�˰��top��ʹ�þ��Զ�λ������ר��CSS�����body{padding-top:42px;}
//����ֱ�Ӳ���top�����ݽṹ���������DOM����
//���ڱ��ⲿ�����ݱ����棬������ַ���뵽gg.js�ļ���
//�����CSS�ļ�������ļ�������ͼ�ļ��ĵ�ַ�Զ����һ�������ʵ���ļ���ǿ�и���
function insertHead(){
	//��3��DOM����
	var g_id=function(id){return document.getElementById(id);},c_obj=function(elem){return document.createElement(elem);},g_obj=function(pnt,elem){return pnt.getElementsByTagName(elem);console.log(222)}
//�����ļ�������furl����Ϊ·����pic����ΪCSSͼƬ�ļ�����css����ΪCSS�ļ�����**********�밴���ľ�����������޸�**********
	var furl="css/",css="comm_head.css";
//�������
	var rd="?rd="+Math.random(),wp=c_obj("div"),tgBox,ul,c=0;
//CSS������Ϻ���ʾtop����ע����������1000��CSS��ul����Ŀ�ȣ�**********�밴��CSS�ľ��嶨������޸�**********
	var check=function(){if(ul.offsetWidth=='100%'){clearInterval(ck);ul.style.height=42+"px";ul.style.overflow="visible";ul.setAttribute("style","");};};
//��̬����css��js�ļ�
	var delay=function(url){var type=url.split("."),file=type[type.length-1];if(file=="css"){var obj=c_obj("link"),lnk="href",tp="text/css";obj.setAttribute("rel","stylesheet");}else var obj=c_obj("script"),lnk="src",tp="text/javascript";url=furl+url+rd;obj.setAttribute(lnk,url);obj.setAttribute("type",tp);file=="css"?g_obj(document,"head")[0].appendChild(obj):document.body.appendChild(obj);return obj;};delay(css);
//��̬����ͨ�������div
	wp.id="tgTB";wp.style.position="absolute";wp.style.left=wp.style.top=0;wp.style.width='100%';document.body.appendChild(wp);document.body.style.paddingTop=80+"px";
	wp.style.opacity = 0;
//����ͨ�����ṹ���޸�ʱ��ע�����ź�ת�����**********�밴���ľ���ṹ�����޸�**********
//�벻Ҫ�޸�ul��ǩ���style����
//bg����Ϊ�ṹ�ı���ͼƬ���벻Ҫ�޸�
	wp.innerHTML=[
	'<div class="header-wrapper">'+
			'<div class="comm-header-nav">'+
				'<div class="mod-header">'+
					'<div class="topline">'+
			   			'<a href="https://zhuimeng.qq.com/community/" class="logo" onclick="PTTSendClick(\'topline\',\'logo\',\'��Ѷ׷�μƻ�\');" title="��Ѷ׷�μƻ�">��Ѷ׷�μƻ�</a>'+
						'<ul class="menu" id="toplineBtns">'+
					       ' <li><a href="https://zhuimeng.qq.com/community/" onclick="PTTSendClick(\'menu\',\'menu1\',\'��ҳ\');">��ҳ</a></li>'+
							' <li>'+
					            '<a href="https://zhuimeng.qq.com/act/1187/4a3e7948d2ca6fb0/a20190625dream/eventslist.shtml"  class="btn-event" onclick="PTTSendClick(\'menu\',\'menu2\',\'���»\');">���»</a>'+
					       ' </li>'+
					       ' <li><a href="javascript:alert(\'�����ڴ�\');" onclick="PTTSendClick(\'menu\',\'menu3\',\'�γ�\');">�γ�</a></li>'+
					       ' <li><a href="https://coding.qq.com/community/" onclick="PTTSendClick(\'menu\',\'menu4\',\'���\');">���</a></li>'+
					       ' <li><a href="javascript:alert(\'�����ڴ�\');;" onclick="PTTSendClick(\'menu\',\'menu5\',\'��Ӧ��\');">��Ӧ��</a></li>'+
					       ' <li><a href="javascript:alert(\'�����ڴ�\');" onclick="PTTSendClick(\'menu\',\'menu6\',\'�ٿ�\');">�ٿ�</a></li>'+
					  '  </ul>'+
					   ' <div class="login-box">'+
					       ' <div id="unlogin" class="login unlogin">'+
					            '<a href="javascript:TGDialogS(\'pop-login\');">[��¼]</a>'+
					      '  </div>'+
					      '  <!--��¼ǰ״̬ End-->'+
					      '  <!--��¼��״̬ Start-->'+
					       ' <div id="logined" class="logined login" style="display: none;">'+
					        	'<div class="login_user_show">'+
					        	'	<div class="head_img_show">'+
					        			'<a href="javascript:void(0)" >'+
						        		'	<img width="40px" src="ossweb-img/user-head-img.jpg" class="headImgurl" />'+
						        	'	</a>'+
					        	'	</div>'+
					        		'<dl class="my_center_show" id="my_center_show">'+
						               ' <dd><a href="https://zhuimeng.qq.com/act/1187/4a3e7948d2ca6fb0/personal/message.shtml" target="_blank" class="message_a_show" onclick="PTTSendClick(\'menu\',\'messageCenter\',\'��Ϣ����\');"><i class="comm_header_spr icon-message"></i>��Ϣ����</a></dd>'+
						               ' <dd><a href="https://zhuimeng.qq.com/act/1187/4a3e7948d2ca6fb0/personal/index.shtml" target="_blank" class="personal_a_show" onclick="PTTSendClick(\'menu\',\'personalCenter\',\'��������\');"><i class="comm_header_spr icon-personal"></i>��������</a></dd>'+
						              '  <dd><a href="https://zhuimeng.qq.com/act/1187/4a3e7948d2ca6fb0/a20200302fans/mygrowth.html" target="_blank" class="rank_a_show" onclick="PTTSendClick(\'menu\',\'myRank\',\'�ҵĵȼ�\');"><i class="comm_header_spr icon-rank"></i>�ҵĵȼ�</a></dd>'+
						           ' </dl>'+
					        		'<span class="login_nickName">Jackson_cloud</span>'+
					        		'<span class="icon_rank_show">1</span>'+
					        	'</div>'+
					           ' <a id="logout_btn" class="logout_btn" href="javascript:void(0)" title="�˳�">[�˳�]</a>'+
					       ' </div>'+
					       ' <!--��¼��״̬ End-->'+
					    '</div>'+
					'</div>'+
				'</div>'+
			'</div>'+
		'</div>'+
		'<div class="pop pop-1" id="pop-login" style="display: none;">'+
		 ' <h4>���ȵ�¼</h4>'+
		  '<ul class="cen">'+
		   ' <li>'+
		     ' <a onclick="PTTSendClick(\'btn\',\'qq\',\'QQ\');" id="login_qq" class="qq spr" href="javascript:;">QQ��¼</a>'+
		   ' </li>'+
		   ' <li>'+
		   '   <a onclick="PTTSendClick(\'btn\',\'wx\',\'΢��\');" id="login_wx" class="wx spr" href="javascript:;">΢�ŵ�¼</a>'+
		  '  </li>'+
		'  </ul>'+
		'  <a onclick="PTTSendClick(\'btn\',\'close1\',\'�ر�1\');" class="close spr ti" href="javascript:closeDialog();" title="�ر�">�ر�</a>'+
		'</div>'
	].join(""); 

}
insertHead();
//�ӳټ���
function ath_tb(e,name,func,cap){if(e.addEventListener){e.addEventListener(name,func,cap);}else if(e.attachEvent){e.attachEvent('on'+name,func);}}
//�ӳٿ�ʼ
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
