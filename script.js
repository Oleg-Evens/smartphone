var x = 0;
$('.block').offset({
	top: 10
}) 
	

$('.iphone').scroll(function(){
	x = $('.iphone').scrollTop();
})

var n = 0;
var timer = setInterval(function(){
	n++;
	$('.message:nth-child(' + n + ')').css('opacity', '1');
	if(n >= 9) {
		clearInterval(timer);
	}
	if(n == 6 && $('.iphone').scrollTop() < 85) {
		$('.iphone').animate({scrollTop: 85}, 500);
	}
	if(n == 7 && $('.iphone').scrollTop() < 170) {
		$('.iphone').animate({scrollTop: 170}, 500);
	}
	if(n == 8 && $('.iphone').scrollTop() < 255) {
		$('.iphone').animate({scrollTop: 255}, 500);
	}
	if(n == 9 && $('.iphone').scrollTop() < 340) {
		$('.iphone').animate({scrollTop: 340}, 500);
	}
}, 1000)