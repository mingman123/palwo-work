/**
 * Load Js
 * 
 * @param {Array} t js
 * @param {Object} e �ص�
 */
function loadScripts(t, e) {
	function a() {
		var o = document.createElement("script");
		o.type = "text/javascript";
		var c = -1 == t[n].indexOf("?") ? t[n] + "?d=" + Math.random() : t[n] + "&d=" + Math.random();
		o.src = c, document.body.appendChild(o), n++, o.readyState ? o.onreadystatechange = function() {
			("loaded" == o.readyState || "complete" == o.readyState) && (o.onreadystatechange = null, d++, d < t.length - 1 ?
				a() : e && e())
		} : o.onload = function() {
			d++, d < t.length ? a() : e && e()
		}
	}
	e = e || function() {};
	var n = 0,
		d = 0;
	a()
}

/**
 * ��ʾ����
 * 
 * @param {String} e ����ID
 */
function TGDialogS(e) {
	// ����milo������dialog���
	need("biz.dialog", function(Dialog) {
		Dialog.show({
			id: e,
			bgcolor: '#000', //���������֡�����ɫ����ʽΪ"#FF6600"�����޸ģ�Ĭ��Ϊ"#fff"
			opacity: 50 //���������֡���͸���ȣ���ʽΪ��10-100������ѡ
		});
	});
}

/**
 * �رյ���
 */
function closeDialog() {
	// ����milo������dialog���
	need("biz.dialog", function(Dialog) {
		Dialog.hide();
	});
}

var globalNav = {
	currentOn: 0,
	init: function() {
		
		$('.header').on('mouseover', '.global-nav a', function(){
			var idx = $(this).index();
			$('.global-nav').removeClass('on1 on2 on3 on4 on5').addClass('on' + idx);
		});
	
		$('.header').on('mouseout ', '.global-nav a', function(){
			$('.global-nav').removeClass('on1 on2 on3 on4 on5').addClass('on' + globalNav.currentOn);
		});	
		
	},
	/**
	 * ��ʼ��������
	 * 
	 * @param {Number} index �����±�
	 * @param {Boolean} isMobile �Ƿ��ƶ���  
	 */
	initNav: function(index, isMobile){
		globalNav.currentOn = index;
		var domHtml = '';
		if (isMobile) {
			domHtml = '<div class="global-nav on' + index  + '">' + 
						'<a href="javascript:;" title="�����ʺ�"></a>' +
						'<a href="javascript:;" title="���ڳ齱"></a>' +
						'<a href="javascript:;" title="������Ƥ��"></a>' +
						'<a href="javascript:;" title="����ͨ��֤"></a>' +
						'<a href="javascript:;" title="�����Ƶ����"></a>' +
					'</div>';			
		} else {
			domHtml = '<div class="global-nav on' + index + '">' + 
						'<a href="javascript:;" title="�����ʺ�"></a>' +
						'<a href="javascript:;" title="���ڳ齱"></a>' +
						'<a href="javascript:;" title="������Ƥ��"></a>' +
						'<a href="javascript:;" title="����ͨ��֤"></a>' +
						'<a href="javascript:;" title="�����Ƶ����"></a>' +
					'</div>';
		}
		$('.header').append(domHtml);			
	}
}

globalNav.init();