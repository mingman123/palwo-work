//���ļ���������ר��top�����밴ע���е�**********�Ų����޸��ļ��Ĳ�������
//�˰��top��ʹ�þ��Զ�λ������ר��CSS�����body{padding-top:42px;}
//����ֱ�Ӳ���top�����ݽṹ���������DOM����
//���ڱ��ⲿ�����ݱ����棬������ַ���뵽gg.js�ļ���
//�����CSS�ļ�������ļ�������ͼ�ļ��ĵ�ַ�Զ����һ�������ʵ���ļ���ǿ�и���
function insertFooter(){
	//��3��DOM����
	var g_id=function(id){return document.getElementById(id);},c_obj=function(elem){return document.createElement(elem);},g_obj=function(pnt,elem){return pnt.getElementsByTagName(elem);}
//�����ļ�������furl����Ϊ·����pic����ΪCSSͼƬ�ļ�����css����ΪCSS�ļ�����**********�밴���ľ�����������޸�**********
	var furl="css/",pic="",css="comm_footer.css";
//�������
	var rd="?rd="+Math.random(),wp=c_obj("div"),tgBox,ul,c=0;
//CSS������Ϻ���ʾtop����ע����������1000��CSS��ul����Ŀ�ȣ�**********�밴��CSS�ľ��嶨������޸�**********
	var check=function(){if(ul.offsetWidth=='100%'){clearInterval(ck);ul.style.height=42+"px";ul.style.overflow="visible";ul.setAttribute("style","");};};
//��̬����css��js�ļ�
	var delay=function(url){var type=url.split("."),file=type[type.length-1];if(file=="css"){var obj=c_obj("link"),lnk="href",tp="text/css";obj.setAttribute("rel","stylesheet");}else var obj=c_obj("script"),lnk="src",tp="text/javascript";url=furl+url+rd;obj.setAttribute(lnk,url);obj.setAttribute("type",tp);file=="css"?g_obj(document,"head")[0].appendChild(obj):document.body.appendChild(obj);return obj;};delay(css);
//��̬����ͨ�������div
	wp.id="tgTB2";wp.style.position="relative";wp.style.left=wp.style.bottom=0;wp.style.width='100%';document.body.appendChild(wp);
//����ͨ�����ṹ���޸�ʱ��ע�����ź�ת�����**********�밴���ľ���ṹ�����޸�**********
//�벻Ҫ�޸�ul��ǩ���style����
//bg����Ϊ�ṹ�ı���ͼƬ���벻Ҫ�޸�
	wp.style.opacity = 0;
	wp.innerHTML=[
	'<!-- footer-box  -->'+
		'<div class="footer-box">'+
		'  <div class="content cl">'+
		 '   <div class="we-footer-copyright fl">'+
		        '<a onclick="PTTSendClick(\'link\',\'footer-logo\',\'footer-logo\');" target="_blank" href="//ieg.tencent.com/" title="��Ѷ��������" class="footer-logo">'+
		       '   <img src="https://zhuimeng.qq.com/act/1187/4a3e7948d2ca6fb0/ossweb-img/footer_logo.png" alt="footer_logo">'+
		      '  </a>'+
		      '  <p class="footer-copyright">'+
		           ' COPYRIGHT &copy; 1998 - 2020 TENCENT. ALL RIGHTS RESERVED.'+
		          '  <a onclick="PTTSendClick(\'link\',\'footer-link\',\'footer-link\');" href="//www.tencent.com/law/mo_law.shtml?/law/copyright.htm" target="_blank">��Ѷ��˾ ��Ȩ����</a>'+
		       ' </p>'+
		  '  </div>'+
		   ' <div class="we-footer-contact fr">'+
		    '    <p>��ϵ���ǣ�zhuimeng@tencent.com</p>'+
		   ' </div>'+
		' </div>'+
		'</div>'
	].join(""); 

}
insertFooter()
//�ӳټ���
function ath_tb(e,name,func,cap){if(e.addEventListener){e.addEventListener(name,func,cap);}else if(e.attachEvent){e.attachEvent('on'+name,func);}}
//�ӳٿ�ʼ
ath_tb(window,"load",function(){
	document.getElementById("tgTB2").style.opacity = 1;
});