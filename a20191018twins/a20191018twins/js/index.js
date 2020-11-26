$(function(){
	$(".screen").on("touchmove",function(event){
    event.preventDefault;
}, false);
	$(".screen .btn-act").click(function(){
		$(this).fadeOut(100);
		$(".screen>div").addClass("on");
		$(".wrap").fadeIn(300);
		$("#afooter").show()
		$(".screen").off("touchmove");
//		if($(".screen>div").hasClass("on")){
//		$(".screen").removeClass("cj");
//		}
	})
	var e = document.getElementsByClassName('left')[0];
   function whichTransitionEvent(){
   var t,
       el = document.createElement('surface'),
       transitions = {
         'transition':'transitionend',
         'OTransition':'oTransitionEnd',
         'MozTransition':'transitionend',
         'WebkitTransition':'webkitTransitionEnd'
       }
 
       for(t in transitions){
           if( el.style[t] !== undefined ){
               return transitions[t];
           }
       }
   }
 
   var transitionEvent = whichTransitionEvent();
   transitionEvent && e.addEventListener(transitionEvent, function() {
    $(".screen").addClass("cj");
    e. removeEventListener(transitionEvent,arguments.callee,false);//Ïú»ÙÊÂ¼þ
                                 
   });
   
   $(".cont1 .on a").click(function(){
		TGDialogS('dia2');
	});
//	$(".cont1 .award-box4.on .btn-red").click(function(){
//		TGDialogS('dia2');
//	});
})





