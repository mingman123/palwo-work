$('.tabbox a').on('click',function(){
    var idx = $(this).index()
    $('.tabbox a').removeClass('on').eq(idx).addClass('on')
    $('.tabcont').hide().eq(idx).fadeIn()
})
$('.seltabbox a').on('click',function(){
    var idx = $(this).index()
    $(this).addClass('on').siblings().removeClass('on')
})
$('.tabcont2-navbox div').on('click',function(){
    var idx = $(this).index()
    $(this).addClass('on').siblings().removeClass('on')
})/* #t6Hl8#F09081308EF33BD82E6B390C3C3C4F0B */