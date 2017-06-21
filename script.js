function messages(){
	$('.space').animate({
		scrollTop: 0
	}, 500);
	$('.smile1').css('display','none');
	$('.smile1').css('width','0px');
	$('.smile2').css('display','none');
	$('.smile2').css('width','0px');
	$('.message').css('display','none');
	$('.message').css('width','0px');
	$('.message').css('padding','0px');
	$('.message').css('font-size','0px');
	setTimeout(function(){
		$('.message').css('display','block');
		$('.smile1').css('display','inline');
		$('.smile2').css('display','inline');
	}, 500)
	var n = 0;
	var timer = setInterval(function(){
		n++;
		$('.message:nth-child('+ n +')').css('width','250px');
		$('.message:nth-child('+ n +')').css('padding','5px');
		$('.message:nth-child('+ n +')').css('font-size','16px');
		if(n == 3) {
			$('.smile1').css('width','25px');
		}
		if(n == 8) {
			$('.smile2').css('width','25px');
		}
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
		if(n == 8 && $('.space').scrollTop() < 150) {
			$('.space').animate({
				scrollTop: 150
			}, 500);
		}
	}, 3000)
	setTimeout(function(){
		messages();
	},30000)
}
messages();