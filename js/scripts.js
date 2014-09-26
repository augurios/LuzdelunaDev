// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
});

$('#map').gmap3({
	marker:{
	    latLng: [9.9334296, -84.0634591],
		options:{
	          icon: "image/logo-icon.png"
	        }
	  },
	  map:{
	    options:{
	      zoom: 12
	    }
	  }
});

$('.carousel').carousel({
     interval: 5000 //changes the speed
});

$('.date-picker').datepicker({
    format: "mm/dd/yyyy",
    calendarWeeks: true,
    autoclose: true
});



var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( '.navbar-fixed-top' ),
		didScroll = false,
		changeHeaderOn = 50;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			$('.navbar-fixed-top').addClass('navbar-shrink');
		}
		else {
			$('.navbar-fixed-top').removeClass('navbar-shrink');

		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();