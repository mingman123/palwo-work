var shareTitle ="���������̵����˳�ֵ�ۿۣ����������������";
var shareDesc ="���������̵����˳�ֵ�ۿۣ����������������";
var sharePic ="https://game.gtimg.cn/images/actdaoju/act/a20190225fo4brithday/h5/share.jpg";
//�����qq����
function send_friend() {
    //�ú���
    D.mo.amsSubmit2(203571,543184,{
        sData: {

        },
        success: function(res) {
            alert(res.sMsg)
        },
        failure: function(res) {

        }
    });
    var p = {
        url:'https://act.daoju.qq.com/act/a20190225fo4brithday/index.html',
        desc:shareDesc, /*��������(���Ӧģ���û��Ի�),֧�ֶ���������չ�֣�ʹ��|�ָ���*/
        title:shareTitle, /*�������(��ѡ)*/
        summary:shareDesc,
        pics:sharePic, /*����ͼƬ(��ѡ)*/
        flash: '',
        site:'',
        style:'201',
        width:32,
        height:32
    };
    var s = [];
    for(var i in p){
        s.push(i + '=' + encodeURIComponent(p[i]||''));
    }
    window.open('//connect.qq.com/widget/shareqq/index.html?'+s.join('&'),'');
}
//����������QQ�ռ�
function send_qzone()
{
    if($("#encrypt").val() == "������..."){
        alert("�������������У����Ժ�~");
        return false;
    }
    need("biz.qzoneShare",function(share){
        share.share({
            url:$("#encrypt").val(),//��������[��ѡ��������ȡҳ��url]
            title:shareTitle,
            desc:shareDesc,//
            pics:sharePic,
            summary:shareDesc,
            showcount:'0',//1Ĭ����ʾ  0����ʾ
            md:'1',//1Ĭ�ϲ��������  0�������
            callback:function(shareId){
                alert("����ɹ���");
            }
        });
    });
}
//�����������
$('#btn_copy').click(function(){
    if(window.is_h5 != 1){
        if (!+[1,]) {
            clipboardData.setData('Text', $("#encrypt").val());
            alert("���Ƴɹ�");
        } else if (prompt('��ʹ�õ��Ƿ�IE������������밴�� Ctrl+C ���Ƽ����뵽������', $("#encrypt").val())) {
            //do nothing
        }
    }else{
        alert("ok!");
    }

});
