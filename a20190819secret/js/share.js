var shareTitle ="我在幸运商店获得了超值折扣，快来试试你的手气";
var shareDesc ="我在幸运商店获得了超值折扣，快来试试你的手气";
var sharePic ="https://game.gtimg.cn/images/actdaoju/act/a20190225fo4brithday/h5/share.jpg";
//分享给qq好友
function send_friend() {
    //得好礼
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
        desc:shareDesc, /*分享理由(风格应模拟用户对话),支持多分享语随机展现（使用|分隔）*/
        title:shareTitle, /*分享标题(可选)*/
        summary:shareDesc,
        pics:sharePic, /*分享图片(可选)*/
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
//分享链接至QQ空间
function send_qzone()
{
    if($("#encrypt").val() == "生成中..."){
        alert("分享链接生成中，请稍后~");
        return false;
    }
    need("biz.qzoneShare",function(share){
        share.share({
            url:$("#encrypt").val(),//分享链接[可选，不传则取页面url]
            title:shareTitle,
            desc:shareDesc,//
            pics:sharePic,
            summary:shareDesc,
            showcount:'0',//1默认显示  0不显示
            md:'1',//1默认不允许更改  0允许更改
            callback:function(shareId){
                alert("分享成功！");
            }
        });
    });
}
//点击复制链接
$('#btn_copy').click(function(){
    if(window.is_h5 != 1){
        if (!+[1,]) {
            clipboardData.setData('Text', $("#encrypt").val());
            alert("复制成功");
        } else if (prompt('你使用的是非IE核心浏览器，请按下 Ctrl+C 复制激活码到剪贴板', $("#encrypt").val())) {
            //do nothing
        }
    }else{
        alert("ok!");
    }

});
