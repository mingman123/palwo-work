// 查询绑定大区
amsCfg_571564 = {
	type: 'query',
	iQueryFlowID: 571564,
	service: 'fo4',
	success: function(bindedInfo) {
        initPage();
	},
	failure: function() {}
};

// 提交绑定的配置
amsCfg_571563 = {
	type: 'comit',
	needPopupRole: true, // 是否弹默认角色框选角色
	roleInfo: null, // 如果needPopupRole为false，需要自定义传入角色信息，roleInfo需要传角色信息对象
	iQueryFlowID: 571564,
	service: 'fo4',
	success: function(bindedInfo) {
		initPage();
	},
	failure: function() {}
};

function initPage() {
    // 初始化页面
}

milo.ready(function() {
    startTime = new Date().getTime(); // mark
    // 查询绑定大区
    // amsInit(229151, 571564); // mark

    need(['biz.login'], function(LoginManager) {
        LoginManager.checkLogin(function() {
            // 初始化页面
        }, function() {
            console.log('未登录');
        });
    });
});
