milo.ready(function() {
	need("daoju.util", function(util) {
		var alerts = {
			alert: function(title, message, callback) {
				if(title == null) title = '��ܰ��ʾ';
				alerts._show(title, message, null, 'alert', function(result) {
					if(callback) callback(result);
				});
			},

			confirm: function(title, message, callback) {
				if(title == null) title = '��ܰ��ʾ';
				alerts._show(title, message, null, 'confirm', function(result) {
					if(callback) callback(result);
				});
			},

			_show: function(title, msg, value, type, callback) {

				var _html = "";

				_html += '<div id="mb_box"></div><div id="mb_con"><span id="mb_tit">' + title + '</span>';
				_html += '<div id="mb_msg">' + msg + '</div><div id="mb_btnbox">';
				if(type == "alert") {
					_html += '<input id="mb_btn_ok" type="button" value="ȷ��" />';
				}
				if(type == "confirm") {
					_html += '<input id="mb_btn_ok" type="button" value="ȷ��" />';
					_html += '<input id="mb_btn_no" type="button" value="ȡ��" />';
				}
				_html += '</div></div>';

				//�����Ƚ�_html��ӵ�body��������Css��ʽ
				$("body").append(_html);
				GenerateCss();

				switch(type) {
					case 'alert':

						$("#mb_btn_ok").click(function() {
							alerts._hide();
							callback(true);
						});
						$("#mb_btn_ok").focus().keypress(function(e) {
							if(e.keyCode == 13 || e.keyCode == 27) $("#mb_btn_ok").trigger('click');
						});
						break;
					case 'confirm':

						$("#mb_btn_ok").click(function() {
							alerts._hide();
							callback();
						});
						$("#mb_btn_no").click(function() {
							alerts._hide();
						});
						$("#mb_btn_no").focus();
						$("#mb_btn_ok, #mb_btn_no").keypress(function(e) {
							if(e.keyCode == 13) $("#mb_btn_ok").trigger('click');
							if(e.keyCode == 27) $("#mb_btn_no").trigger('click');
						});
						break;
				}
			},
			_hide: function() {
				$("#mb_box,#mb_con").remove();
			}
		}
		
		window.zdalert = function(message, callback, title) {
			alerts.alert(title, message, callback);
		}

		window.zdconfirm = function(message, callback, title) {
			alerts.confirm(title, message, callback);
		};

		//����Css
		var GenerateCss = function() {

			$("#mb_box").css({
				width: '100%',
				height: '100%',
				zIndex: '99999',
				position: 'fixed',
				filter: 'Alpha(opacity=60)',
				backgroundColor: 'black',
				top: '0',
				left: '0',
				opacity: '0.6'
			});

			$("#mb_con").css({
				zIndex: '999999',
				width: '20%',
				'min-width': '380px',
				position: 'fixed',
				backgroundColor: 'White',
				borderRadius: '5px'
			});

			$("#mb_tit").css({
				display: 'block',
				fontSize: '14px',
				color: 'black',
				padding: '10px 15px',
				backgroundColor: '#DDD',
				borderRadius: '5px 5px 0 0',
				borderBottom: '3px solid #9E9E9E',
				fontWeight: 'bold'
			});

			$("#mb_msg").css({
				padding: '20px',
				lineHeight: '20px',
				borderBottom: '1px dashed #DDD',
				fontSize: '13px',
				color: '#000'
			});

			$("#mb_ico").css({
				display: 'block',
				position: 'absolute',
				right: '10px',
				top: '9px',
				border: '1px solid Gray',
				width: '18px',
				height: '18px',
				textAlign: 'center',
				lineHeight: '16px',
				cursor: 'pointer',
				borderRadius: '12px',
				fontFamily: '΢���ź�'
			});

			$("#mb_btnbox").css({
				margin: '15px 0 10px 0',
				textAlign: 'center',
			});
			$("#mb_btn_ok,#mb_btn_no").css({
				width: '85px',
				height: '30px',
				color: 'white',
				fontSize: '8px',
				border: 0
			});
			$("#mb_btn_ok").css({
				backgroundColor: '#f74a4a',
			});
			$("#mb_btn_no").css({
				backgroundColor: 'gray',
				marginLeft: '20px'
			});

			//���Ͻǹرհ�ťhover��ʽ
			$("#mb_ico").hover(function() {
				$(this).css({
					backgroundColor: 'Red',
					color: 'White'
				});
			}, function() {
				$(this).css({
					backgroundColor: '#DDD',
					color: 'black'
				});
			});

			var _widht = document.documentElement.clientWidth; //��Ļ��
			var _height = document.documentElement.clientHeight; //��Ļ��

			var boxWidth = $("#mb_con").width();
			var boxHeight = $("#mb_con").height();

			//����ʾ�����
			$("#mb_con").css({
				top: (_height - boxHeight) / 2 + "px",
				left: (_widht - boxWidth) / 2 + "px"
			});
		}
	})
})