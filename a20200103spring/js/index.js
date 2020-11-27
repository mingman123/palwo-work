// 小小英雄Video
var legendVideo = new Txplayer({
  containerId: 'legendVideo',
  vid: 't3026munudb',
  width: '100%',
  height: '100%',
  autoplay: false
});

// 无限乱斗Video
var fightVideo = new Txplayer({
  containerId: 'fightVideo',
  vid: 't3026munudb',
  width: '100%',
  height: '100%',
  autoplay: false
});

$('.btn-play-fight').click(function() {
	TGDialogS('dialogVideo');
	legendVideo.pause();
	fightVideo.play();
});

$('.btn-play-legend').click(function() {
	$(this).fadeOut(500);
	$('.video-shadow').fadeOut(500);
	legendVideo.play();
	fightVideo.pause();
});

$('.dialog-video .close').click(function(){
	fightVideo.pause();
	closeDialog();
});