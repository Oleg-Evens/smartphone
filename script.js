var x = 0;
$('.block').offset({
	top: 10
}) 
	

$('.iphone').scroll(function(){
	x = $('.iphone').scrollTop();
	console.log(x);
})

var n = 0;
var timer = setInterval(function(){
	n++;
	$('.message:nth-child(' + n + ')').css('opacity', '1');
	if(n >= 9) {
		clearInterval(timer);
	}
}, 2000)