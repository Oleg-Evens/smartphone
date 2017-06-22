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
		var h = [];
		var g = [];
		var q = 15;
		for(var i = 0; i < 8; i++) {
			h[i] = $('.message:nth-child(' + (i + 1) + ')').height();
		}

		g[0] = 0;

		for(var i = 1; i < 8; i++) {
			g[i] = h[i - 1] + g[i - 1] + q;
			$('.message:nth-child('+ (i + 1) +')').css('top', g[i]);
		}
		var hd = $('.display').height();
		if(g[7] + h[7] > 450 && $('.space').scrollTop() < 100 && n < 8) {
			$('.space').animate({
				scrollTop: 100
			}, 500)
		}
		if(n == 3) {
			$('.smile1').css('width','25px');
		}
		if(n == 8) {
			$('.smile2').css('width','25px');
		}

	}, 3000)
	setTimeout(function(){
		messages();
	},30000)
}
messages();
var r = 0;

$('.img-s').click(function(){
	r += 1;
	if(r == 6) {
		r = 0;
	}
	if(r == 1) {
		$('.header').css('background', 'linear-gradient(to left, #9d3bc0, #fb6574)');
	}
	if(r == 2) {
		$('.header').css('background', 'orange');
	}
	if(r == 3) {
		$('.header').css('background', 'linear-gradient(to left, #9d3bc0, #4d4d4d)');
	}
	if(r == 4) {
		$('.header').css('background', 'linear-gradient(to left, #4d4d4d, #808080)');
	}
	if(r == 5) {
		$('.header').css('background', 'linear-gradient(to left, #9d3bc0, #455af0)');
	}
})

q = 0;

$('.tt1').click(function(){
	if(q == 0) {
		$('.tt1').css('color','#fff');
		q = 1;
	} else if(q == 1) {
		$('.tt1').css('color','#000');
		q = 0;
	}
})