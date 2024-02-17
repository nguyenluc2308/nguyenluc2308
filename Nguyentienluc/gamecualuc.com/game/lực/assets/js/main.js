(function ($) {
	"use strict";

/*=============================================
	=    		 Preloader			      =
=============================================*/
function preloader() {
	$('#preloader').delay(0).fadeOut();
};

$(window).on('load', function () {
	preloader();
	wowAnimation();
});


/*=============================================
	=     Menu sticky & Scroll to top      =
=============================================*/
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$("#sticky-header").removeClass("sticky-menu");
		$('.scroll-to-target').removeClass('open');

	} else {
		$("#sticky-header").addClass("sticky-menu");
		$('.scroll-to-target').addClass('open');
	}
});


/*=============================================
	=    		 Scroll Up  	         =
=============================================*/
if ($('.scroll-to-target').length) {
  $(".scroll-to-target").on('click', function () {
    var target = $(this).attr('data-target');
    // animate
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1000);

  });
}


// --------------------------------------------------
/*=============================================
		=           Partical         =
=============================================*/
if ($('.banner-area').length) {
	const colors = ["#ffbe18", "#ddd", "#45f882", "#ffbe18", "#45f882"];

	const numBalls = 30;
	const balls = [];

	for (let i = 0; i < numBalls; i++) {
		let ball = document.createElement("div");
		ball.classList.add("ball");
		ball.style.background = colors[Math.floor(Math.random() * colors.length)];
		ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
		ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
		ball.style.transform = `scale(${Math.random()})`;
		ball.style.width = `${Math.random()}em`;
		ball.style.height = ball.style.width;
		balls.push(ball);

		$('.banner-area').append(ball);
	}

	balls.forEach((el, i, ra) => {
		let to = {
			x: Math.random() * (i % 2 === 0 ? -11 : 11),
			y: Math.random() * 12
		};

		let anim = el.animate(
			[
				{ transform: "translate(0, 0)" },
				{ transform: `translate(${to.x}rem, ${to.y}rem)` }
			],
			{
				duration: (Math.random() + 1) * 2000,
				direction: "alternate",
				fill: "both",
				iterations: Infinity,
				easing: "ease-in-out"
			}
		);
	});
}


/*=============================================
		=           Fade effect         =
=============================================*/
var democol = $('.demo-section .demo-fade');
democol.on({
	mouseenter: function () {
		$(this).siblings().stop().fadeTo(300, 0.4);
	},
	mouseleave: function () {
		$(this).siblings().stop().fadeTo(300, 1);
	}
});


/*=============================================
		=           counterUp         =
=============================================*/
$('.count').counterUp({
	delay: 10,
	time: 1500
});

/*=============================================
	=    		 Wow Active  	         =
=============================================*/
function wowAnimation() {
	var wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animated',
		offset: 0,
		mobile: false,
		live: true
	});
	wow.init();
}


})(jQuery);