var scrollTop = $(window).scrollTop();
// console.log(fsNum);
$(function () {
    setTimeout(function () {
        var scrollTop1 = $(window).scrollTop();
        $(window).scrollTop(0);
        // $(window).scrollTop(scrollTop1 - 1);
    }, 500);
    var nal = navigator.language;
});
window.onresize = function () {
    window.location.reload();
}
/**
 * �������ֵ��Сֵ
 * @param {��ֵ} val
 * @param {���ֵ} max
 * @param {��Сֵ} min
 */

function rangeLimit(val, max, min) {
    return Math.min(Math.max(val, min), max);
}
if (/(iPhone|iPad|iPod|iOS|Android|Windows Phone|BlackBerry|SymbianOS)/i.test(navigator.userAgent)) {
    // �ƶ���
    isM();
} else {
    if ($(window).width() > 1200) {
        // PC
        isPc();
    } else {
        // �ʼǱ�
        isBook();
    }
}
