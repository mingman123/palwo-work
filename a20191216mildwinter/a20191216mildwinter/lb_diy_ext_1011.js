/* ���ļ����������һЩ�������ص���������openlinkid����¼��ص��������󶨻ص���ams�ύ�ص��Ƚ����Զ��� */

// ͨ��΢��OpenLink����΢��ʱ���ݵ�noticeId
var gLubanOpenLinkId = 0;

// ��¼��ص�
function lbCallBackAfterLogin(LoginManager){
    console.log(LoginManager);
}

// �󶨴����ɹ���ʧ�ܵĻص���
// resType
// 1- query_success:    �а���Ϣ
// 2- query_failed :    ���ް���Ϣ
// 3- comit_success:    �ύ����Ϣ�ɹ�
// 4- comit_failed :    �ύ����Ϣʧ��
// parms
// success���Ӧ��bindedInfo
// failed���Ӧ:''
function lbCallBackOfAreaHandle(resType, parms){
    console.log(resType, parms);
}

// ams�ύ�ص�
// resType: success=�ɹ���failed=ʧ��
// iFlowId: �ύ��Ӧ�����̺�
// parms  : �����б���ԭ����һ��
function lbCallBackOfAmsSubmit(resType, iFlowId, parms){
    console.log(resType, iFlowId, parms);
}
