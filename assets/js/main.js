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
						if($(window).scrollTop()>500) {
						$('.navbar').addClass('nav-change');
						}
						else{
							$('.navbar').removeClass('nav-change');
						}
						});

		// banner-type-js
		
		var typed5 = new Typed("#typed", {
				strings: [
				"web designer",
				"web developer",
				"ul designer",
				
				
				],
				
				typeSpeed: 70,
				backSpeed: 50,
				cursorChar: '_',
				shuffle: true,
				smartBackspace: false,
				loop: true,
				
				 
			});
			// about-type-js
		
		var typed1 = new Typed(".about-type", {
				strings: [
				"web designer",
				"web developer",
				"ul designer",
				],
				
				typeSpeed: 80,
				backSpeed: 30,
				cursorChar: '',
				shuffle: true,
				smartBackspace: false,
				loop: true,
				
				 
			});
			
		//tilt-js-for-about-hover-effect	
		$('.about-img').tilt({
		maxTilt:15,
		perspective:1000,   
		speed:300,   
		transition:true,   
		disableAxis:null,  
		reset:false,   
		glare:true,  
		maxGlare:.7      
		});
			
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
	
   		    
		// Display the progress bar calling progressbar.js
		$('.progressbar1').progressBar({
				shadow : true,
				percentage : true,
				animation : true,
				animateTarget : true,
			barColor : "#fd4d4d",
			height : "7",
			
		});
		
		//counter-jquiry
		$('.counter').counterUp({
		delay: 10,
		time: 3000
	    });
	
           
		//testimonial-slider.ls
		$('.testimonial-carousel').owlCarousel({
		loop:true,
		nav:false,
		 items:1
		});


	
		//brand-owlCarousel
		$('.brand-slider').owlCarousel({
		autoplay:true,
		autoplayTimeout:1800,
		autoplayHoverPause:true,
		loop:true,
	   
		responsive:{
			0:{
				items:2
			},
			600:{
				items:4
			},
			1000:{
				items:5
			}
		  }
	    });

		
	
		var overlay = document.getElementById("loader");
		window.addEventListener("load",function(){
		overlay.style.display='none';
		});
		
});
 
  


})(jQuery);


