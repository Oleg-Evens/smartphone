function messages(){
	var size = $('.message').css('font-size');
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
		$('.message:nth-child('+ n +')').css('font-size',size);
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
		$('.ath').css('background', 'linear-gradient(to left, #9d3bc0, #fb6574)');
		x = 2; 
	} else if(x == 2) {
		$('.ath').css('background', '#455af0');
		x = 3;
	} else if(x == 3) {
		$('.ath').css('background', 'transparent');
		x = 4;
	} else if(x == 4) {
		$('.ath').css('background', '#fff');
		x = 5;
	} else if(x == 5) {
		$('.ath').css('background', 'brown');
		x = 6;
	} else if(x == 6) {
		$('.ath').css('background', 'gray');
		x = 7;
	} else if(x == 7) {
		$('.ath').css('background', 'black');
		x = 8;
	} else if(x == 8) {
		$('.ath').css('background', 'orange');
		x = 1;
	}
})
var y = 1;
$('.author').click(function(){
	if(y == 1) {
		$('.author').css('color', 'orange)');
		y = 2; 
	} else if(y == 2) {
		$('.author').css('color', '#455af0');
		y = 3;
	} else if(y == 3) {
		$('.author').css('color', 'red');
		y = 4;
	} else if(y == 4) {
		$('.author').css('color', 'purple');
		y = 5;
	} else if(y == 5) {
		$('.author').css('color', 'brown');
		y = 6;
	} else if(y == 6) {
		$('.author').css('color', 'green');
		y = 7;
	} else if(y == 7) {
		$('.author').css('color', '#fff');
		y = 8;
	} else if(y == 8) {
		$('.author').css('color', 'black');
		y = 1;
	}
})
var z = 1;
$('.name').click(function(){
	if(z == 1) {
		$('.name').css('color', 'orange)');
		z = 2; 
	} else if(z == 2) {
		$('.name').css('color', '#455af0');
		z = 3;
	} else if(z == 3) {
		$('.name').css('color', 'red');
		z = 4;
	} else if(z == 4) {
		$('.name').css('color', 'purple');
		z = 5;
	} else if(z == 5) {
		$('.name').css('color', 'brown');
		z = 6;
	} else if(z == 6) {
		$('.name').css('color', 'green');
		z = 7;
	} else if(z == 7) {
		$('.name').css('color', '#fff');
		z = 8;
	} else if(z == 8) {
		$('.name').css('color', 'black');
		z = 1;
	}
})
var v = 1;
$('.t-name').click(function(){
	if(v == 1) {
		$('.t-name').css('color', 'orange)');
		v = 2; 
	} else if(v == 2) {
		$('.t-name').css('color', '#455af0');
		v = 3;
	} else if(v == 3) {
		$('.t-name').css('color', 'red');
		v = 4;
	} else if(v == 4) {
		$('.t-name').css('color', 'purple');
		v = 5;
	} else if(v == 5) {
		$('.t-name').css('color', 'brown');
		v = 6;
	} else if(v == 6) {
		$('.t-name').css('color', 'green');
		v = 7;
	} else if(v == 7) {
		$('.t-name').css('color', '#fff');
		v = 8;
	} else if(v == 8) {
		$('.t-name').css('color', 'black');
		v = 1;
	}
})