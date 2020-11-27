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
 * 限制最大值最小值
 * @param {数值} val
 * @param {最大值} max
 * @param {最小值} min
 */

function rangeLimit(val, max, min) {
    return Math.min(Math.max(val, min), max);
}
if (/(iPhone|iPad|iPod|iOS|Android|Windows Phone|BlackBerry|SymbianOS)/i.test(navigator.userAgent)) {
    // 移动端
    isM();
} else {
    if ($(window).width() > 1200) {
        // PC
        isPc();
    } else {
        // 笔记本
        isBook();
    }
}
