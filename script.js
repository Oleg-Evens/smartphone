function messages(){
	$('.space').animate({
		scrollTop: 0
	}, 500);
	$('.message').css('display','none');
	$('.message').css('width','0px');
	$('.message').css('padding','0px');
	$('.message').css('font-size','0px');
	setTimeout(function(){
		$('.message').css('display','block');
	}, 500)
	var n = 0;
	var timer = setInterval(function(){
		n++;
		$('.message:nth-child('+ n +')').css('width','250px');
		$('.message:nth-child('+ n +')').css('padding','5px');
		$('.message:nth-child('+ n +')').css('font-size','16px');
		if(n >= 9) {
			clearInterval(timer);
		}
		if(n == 6 && $('.space').scrollTop() < 50) {
			$('.space').animate({
				scrollTop: 50
			}, 500);
		}
		if(n == 7 && $('.space').scrollTop() < 100) {
			$('.space').animate({
				scrollTop: 100
			}, 500);
		}
	}, 2000)
	setTimeout(function(){
		messages();
	},20000)
}
messages();