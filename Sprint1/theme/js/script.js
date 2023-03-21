/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://www.facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */

(function ($) {
	'use strict';

	// Preloader js    
	$(window).on('load', function () {
		$('.preloader').fadeOut(100);
	});


	// navfixed
	$(window).scroll(function () {
		if ($('.navigation').offset().top > 50) {
			$('.navigation').addClass('nav-bg');
		} else {
			$('.navigation').removeClass('nav-bg');
		}
	});

	// masonry
	$('.masonry-wrapper').masonry({
		columnWidth: 1
	});

	// clipboard
	var clipInit = false;
	$('code').each(function () {
		var code = $(this),
			text = code.text();
		if (text.length > 2) {
			if (!clipInit) {
				var text, clip = new ClipboardJS('.copy-to-clipboard', {
					text: function (trigger) {
						text = $(trigger).prev('code').text();
						return text.replace(/^\$\s/gm, '');
					}
				});
				clipInit = true;
			}
			code.after('<span class="copy-to-clipboard">copy</span>');
		}
	});
	$('.copy-to-clipboard').click(function () {
		$(this).html('copied');
	});


	// match height
	$(function () {
		$('.match-height').matchHeight({
			byRow: true,
			property: 'height',
			target: null,
			remove: false
		});
	});

	// search
	$('#search-by').keyup(function () {
		if (this.value) {
			$(this).addClass('active')
		} else {
			$(this).removeClass('active')
		}
	})

	// Accordions
	$('.collapse').on('shown.bs.collapse', function () {
		$(this).parent().find('.ti-plus').removeClass('ti-plus').addClass('ti-minus');
	}).on('hidden.bs.collapse', function () {
		$(this).parent().find('.ti-minus').removeClass('ti-minus').addClass('ti-plus');
	});
	
	// GDPR
	function initializeGDPRModal() {
	  const gdprModal = $('#gdpr-modal');

	  // Check if the user has already agreed to the policy
	  const agreed = localStorage.getItem('gdprPolicyAgreed') === 'true';
	  if (!agreed) {
	    // Show the modal if the user hasn't agreed
	    gdprModal.modal('show');
	  }

	  // Handle the click event on the Agree button
	  const agreeButton = $('#gdpr-agree');
	  agreeButton.on('click', function() {
	    // Check if the user has agreed to the policy
	    const gdprCheck = $('#gdpr-check');
	    if (gdprCheck.prop('checked')) {
	      // Remember the user's choice
	      localStorage.setItem('gdprPolicyAgreed', 'true');
	      // Hide the modal
	      gdprModal.modal('hide');
	      // Enable Google Analytics tracking
	      gtag('consent', 'update', {
		analytics_storage: 'granted'
	      });
	    }
	  });
	}
	
})(jQuery);
