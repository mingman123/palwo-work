//此文件用于生成专题top条，请按注释中的**********号部分修改文件的部分内容
//此版对top条使用绝对定位，请在专题CSS中添加body{padding-top:42px;}
//改用直接插入top条内容结构，避免大量DOM操作
//由于避免部分内容被缓存，将广告地址剥离到gg.js文件中
//代码对CSS文件、广告文件、背景图文件的地址自动添加一个随机数实现文件的强行更新
function insertFooter(){
	//简化3个DOM函数
	var g_id=function(id){return document.getElementById(id);},c_obj=function(elem){return document.createElement(elem);},g_obj=function(pnt,elem){return pnt.getElementsByTagName(elem);}
//定义文件变量：furl变量为路径，pic变量为CSS图片文件名，css变量为CSS文件名，**********请按您的具体情况进行修改**********
	var furl="css/",pic="",css="comm_footer.css";
//定义变量
	var rd="?rd="+Math.random(),wp=c_obj("div"),tgBox,ul,c=0;
//CSS加载完毕后显示top条，注意下面数字1000是CSS对ul定义的宽度，**********请按您CSS的具体定义进行修改**********
	var check=function(){if(ul.offsetWidth=='100%'){clearInterval(ck);ul.style.height=42+"px";ul.style.overflow="visible";ul.setAttribute("style","");};};
//动态插入css或js文件
	var delay=function(url){var type=url.split("."),file=type[type.length-1];if(file=="css"){var obj=c_obj("link"),lnk="href",tp="text/css";obj.setAttribute("rel","stylesheet");}else var obj=c_obj("script"),lnk="src",tp="text/javascript";url=furl+url+rd;obj.setAttribute(lnk,url);obj.setAttribute("type",tp);file=="css"?g_obj(document,"head")[0].appendChild(obj):document.body.appendChild(obj);return obj;};delay(css);
//动态插入通用条外框div
	wp.id="tgTB2";wp.style.position="relative";wp.style.left=wp.style.bottom=0;wp.style.width='100%';document.body.appendChild(wp);
//插入通用条结构，修改时请注意引号和转义符，**********请按您的具体结构进行修改**********
//请不要修改ul标签里的style属性
//bg变量为结构的背景图片，请不要修改
	wp.style.opacity = 0;
	wp.innerHTML=[
	'<!-- footer-box  -->'+
		'<div class="footer-box">'+
		'  <div class="content cl">'+
		 '   <div class="we-footer-copyright fl">'+
		        '<a onclick="PTTSendClick(\'link\',\'footer-logo\',\'footer-logo\');" target="_blank" href="//ieg.tencent.com/" title="腾讯互动娱乐" class="footer-logo">'+
		       '   <img src="https://zhuimeng.qq.com/act/1187/4a3e7948d2ca6fb0/ossweb-img/footer_logo.png" alt="footer_logo">'+
		      '  </a>'+
		      '  <p class="footer-copyright">'+
		           ' COPYRIGHT &copy; 1998 - 2020 TENCENT. ALL RIGHTS RESERVED.'+
		          '  <a onclick="PTTSendClick(\'link\',\'footer-link\',\'footer-link\');" href="//www.tencent.com/law/mo_law.shtml?/law/copyright.htm" target="_blank">腾讯公司 版权所有</a>'+
		       ' </p>'+
		  '  </div>'+
		   ' <div class="we-footer-contact fr">'+
		    '    <p>联系我们：zhuimeng@tencent.com</p>'+
		   ' </div>'+
		' </div>'+
		'</div>'
	].join(""); 

}
insertFooter()
//延迟加载
function ath_tb(e,name,func,cap){if(e.addEventListener){e.addEventListener(name,func,cap);}else if(e.attachEvent){e.attachEvent('on'+name,func);}}
//延迟开始
ath_tb(window,"load",function(){
	document.getElementById("tgTB2").style.opacity = 1;
});