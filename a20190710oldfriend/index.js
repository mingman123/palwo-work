// ��ѯ�󶨴���
amsCfg_571564 = {
	type: 'query',
	iQueryFlowID: 571564,
	service: 'fo4',
	success: function(bindedInfo) {
        initPage();
	},
	failure: function() {}
};

// �ύ�󶨵�����
amsCfg_571563 = {
	type: 'comit',
	needPopupRole: true, // �Ƿ�Ĭ�Ͻ�ɫ��ѡ��ɫ
	roleInfo: null, // ���needPopupRoleΪfalse����Ҫ�Զ��崫���ɫ��Ϣ��roleInfo��Ҫ����ɫ��Ϣ����
	iQueryFlowID: 571564,
	service: 'fo4',
	success: function(bindedInfo) {
		initPage();
	},
	failure: function() {}
};

function initPage() {
    // ��ʼ��ҳ��
}

milo.ready(function() {
    startTime = new Date().getTime(); // mark
    // ��ѯ�󶨴���
    // amsInit(229151, 571564); // mark

    need(['biz.login'], function(LoginManager) {
        LoginManager.checkLogin(function() {
            // ��ʼ��ҳ��
        }, function() {
            console.log('δ��¼');
        });
    });
});
