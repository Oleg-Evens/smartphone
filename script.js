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

var x = 1;
$('.img-s').click(function(){
	if(x == 1) {
		$('.content .fa').css('color', 'yellow');
		x = 2; 
	} else if(x == 2) {
		$('.content .fa').css('color', '#455af0');
		x = 3;
	} else if(x == 3) {
		$('.content .fa').css('color', 'red');
		x = 4;
	} else if(x == 4) {
		$('.content .fa').css('color', 'purple');
		x = 5;
	} else if(x == 5) {
		$('.content .fa').css('color', 'brown');
		x = 6;
	} else if(x == 6) {
		$('.content .fa').css('color', 'green');
		x = 7;
	} else if(x == 7) {
		$('.content .fa').css('color', 'black');
		x = 8;
	} else if(x == 8) {
		$('.content .fa').css('color', 'orange');
		x = 1;
	}
})