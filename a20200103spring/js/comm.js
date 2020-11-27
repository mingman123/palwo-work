/**
 * Load Js
 * 
 * @param {Array} t js
 * @param {Object} e 回调
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
 * 显示弹窗
 * 
 * @param {String} e 弹窗ID
 */
function TGDialogS(e) {
	// 利用milo库引入dialog组件
	need("biz.dialog", function(Dialog) {
		Dialog.show({
			id: e,
			bgcolor: '#000', //弹出“遮罩”的颜色，格式为"#FF6600"，可修改，默认为"#fff"
			opacity: 50 //弹出“遮罩”的透明度，格式为｛10-100｝，可选
		});
	});
}

/**
 * 关闭弹窗
 */
function closeDialog() {
	// 利用milo库引入dialog组件
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
	 * 初始化导航栏
	 * 
	 * @param {Number} index 亮的下标
	 * @param {Boolean} isMobile 是否移动端  
	 */
	initNav: function(index, isMobile){
		globalNav.currentOn = index;
		var domHtml = '';
		if (isMobile) {
			domHtml = '<div class="global-nav on' + index  + '">' + 
						'<a href="javascript:;" title="春节问候"></a>' +
						'<a href="javascript:;" title="春节抽奖"></a>' +
						'<a href="javascript:;" title="春节新皮肤"></a>' +
						'<a href="javascript:;" title="春节通行证"></a>' +
						'<a href="javascript:;" title="年度视频大赏"></a>' +
					'</div>';			
		} else {
			domHtml = '<div class="global-nav on' + index + '">' + 
						'<a href="javascript:;" title="春节问候"></a>' +
						'<a href="javascript:;" title="春节抽奖"></a>' +
						'<a href="javascript:;" title="春节新皮肤"></a>' +
						'<a href="javascript:;" title="春节通行证"></a>' +
						'<a href="javascript:;" title="年度视频大赏"></a>' +
					'</div>';
		}
		$('.header').append(domHtml);			
	}
}

globalNav.init();