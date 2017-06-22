window.gcEmbedId=10137;


var currentScript = document.currentScript || (function() {
	var scripts = document.getElementsByTagName('script');
	return scripts[scripts.length - 1];
})();

var getLocation = function(href) {
	var l = document.createElement("a");
	l.href = href;
	return l;
};

var domain = ( (getLocation( currentScript.src )).hostname );
iframe.src = "//" + domain + "/cms/default/embed/id/" + window.gcEmbedId;
iframe.frameborder = 0;
iframe.style.borderStyle="none";

addGcIframeWidget( iframe );

function addGcIframeWidget( iframe )
{
	var thisScript = document.currentScript || (function() {
		var scripts = document.getElementsByTagName('script');
		return scripts[scripts.length - 1];
	})();

	var parent = thisScript.parentElement;

	parent.insertBefore(iframe, thisScript.nextSibling);

	var gcEmbedOnMessage = function(e) {
		if (e.data.height ) {
			iframe.height = ( e.data.height )+ "px";
		}
	};


	if (window.addEventListener) {
		window.addEventListener("message", gcEmbedOnMessage, false);
	}
	else if (window.attachEvent) {
		window.attachEvent('onmessage', gcEmbedOnMessage)
	}
	else {
		window['onmessage'] = gcEmbedOnMessage
	}
}

if ( typeof( window.commonGcCounter ) == "undefined" ) {
	document.write( "<img width=1 height=1 style='display:none' id='gccounterImg' src='//" + domain + "/stat/counter?ref=" + encodeURIComponent( document.referrer ) + "&loc=" + encodeURIComponent( document.location.href ) + "'/>" );
	window.commonGcCounter = 1;
}