/*========================================================================
EXCLUSIVE ON themeforest.net
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Template Name   : SHAHZ
Author          : MUSLIM UDDIN
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Copyright (c) 2019 - shahZ
========================================================================*/
  

(function($){
    $(document).ready(function(){
			
		//scroll-nav
			
				$('a[href*="#"]')
		// Remove links that don't actually link to anything
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function(event) {
		// On-page links
		if (
		  location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
		  && 
		  location.hostname == this.hostname
		) {
		  // Figure out element to scroll to
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		  // Does a scroll target exist?
		  if (target.length) {
			// Only prevent default if animation is actually gonna happen
			event.preventDefault();
			$('html, body').animate({
			  scrollTop: target.offset().top
			}, 2000, function() {
			  // Callback after animation
			  // Must change focus!
			  var $target = $(target);
			  $target.focus();
			  if ($target.is(":focus")) { // Checking if the target was focused
				return false;
			  } else {
				$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
				$target.focus(); // Set focus again
			  };
			});
		  }
		}
	  });
	  
	  //wow.js-jqury-section
	
		var wow = new WOW(
	  {
		boxClass:     'wow',      
		animateClass: 'animated', 
		offset:       0,         
		mobile:       true,      
		live:         true,      
		callback:     function(box) {
		 
		},
		scrollContainer: null,   
		resetAnimation: true,    
	  }
	);
	wow.init();
	  
		//navbar-changing-after-scrolling
			$(window).on('scroll',function(){
							if($(window).scrollTop()>400) {
							$('.navbar').addClass('nav-change');
							}
							else{
								$('.navbar').removeClass('nav-change');
							}
							});
		
		// banner-type-js
	
			

		//scroll-to-top

		$(window).on('scroll', function() {
			if ($(this).scrollTop() > 600) {
			  $('.scrollToTop').fadeIn();
			} else {
			  $('.scrollToTop').fadeOut();
			}
		});
		$(document).on('click', '.scrollToTop', function() { // When arrow is clicked
			$('html, body').animate({scrollTop : 0},2000);
			return false;
		});
	
   		 
	
	var overlay = document.getElementById("loader");
	window.addEventListener("load",function(){
	overlay.style.display='none';
	});
	
});
 
  


})(jQuery);


