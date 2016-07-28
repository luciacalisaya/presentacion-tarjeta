$(document).ready(function(){
	// alert('hola!');
	var banner = {
		father: $('#banner'),
		slidesNumber: $('#banner').children('.slide').length,
		position: 1
	}

	var info = {
		father: $('#info'),
		slidesNumber: $('#info').children('.slide').length,
		position: 1
	}

	// console.log(banner.father)
	// console.log(banner.slidesNumber)

	banner.father.children('.slide').first().css({
		'left': 0
	});

	info.father.children('.slide').first().css({
		'left': 0
	});

	var bannerHeight = function(){
		var height = banner.father.children('.slide').outerHeight();
		banner.father.css({
			'height': height + 'px'
		});

		console.log(height);
	};

	var infoHeight = function(){
		var height = info.father.children('.active').outerHeight();
		info.father.animate({
			'height': height + 'px'
		});

		console.log(height);
	};

	var containerHeight = function(){
		var windowHeight = $(window).height();
		if (windowHeight <= $('#contenedor').outerHeight + 200) {
			$('#container').css({
				'height': ''
			});
		} else {
			$('#container').css({
				'height': windowHeight + 'px'
			});
		}
	}

	bannerHeight();
	infoHeight();

	$(window).resize(function(){
		bannerHeight();
		infoHeight();
		containerHeight();
	})

	$('#info').children('.slide').each(function(){
		$('#buttons').append('<span>')
	});

	$('#buttons').children('span').first().addClass('active');

// ------------------------------------------------
// ----- Banner
// ------------------------------------------------

	// Next button
	$('#banner-next').on('click', function(e){
		e.preventDefault();

		if(banner.position < banner.slidesNumber){
			// All the slides should start from the right.
			banner.father.children().not('.active').css({
				'left': '100%'
			});

			// It removes active class and it will apply it on the next element with animation.
			$('#banner .active').removeClass('active').next().addClass('active').animate({
			// "left": "-100%"
			'left': '0'
			});

			// Animate the prev slides el slide for moving to the right.
			$('#banner .active').prev().animate({
				'left': '-100%'
			});
			banner.position = banner.position + 1;
		 } else {

		 	// The active slide (the last one) animates to the left.
		 	$('#banner .active').animate({
		 		'left': '-100%'
		 	});

			// Select all the slides that they do not have active class and we posicionate to the right.
			banner.father.children().not('.active').css({
				'left': '100%'
			});

			// Eliminates the active class and it will be added to the first element with animation.
		 	$('#banner .active').removeClass('active');
		 	banner.father.children('.slide').first().addClass('active').animate({
		 		'left': '0'
		 	});
		 	// Reset the position to 1.
		 	banner.position = 1;
		}

	});

	// Prev button
	$('#banner-prev').on('click', function(e){
		e.preventDefault();

		if(banner.position > 1){
			banner.father.children().not('.active').css({
			'left':'-100%'
		});

		$('#banner .active').animate({
			'left': '100%'
		});

		$('#banner .active').removeClass('active').prev().addClass('active').animate({
			'left': '0'
		});

		banner.position = banner.position - 1;

		} else {
			banner.father.children().not('.active').css({
				'left': '-100%'
			});

			$('#banner .active').animate({
				'left': '100%'
			});

			$('#banner .active').removeClass('active');
			banner.father.children().last().addClass('active').animate({
				'left': '0'
			});

			banner.position = banner.slidesNumber;

		}

	});

// ------------------------------------------------
// ----- Info
// ------------------------------------------------

	// Next button
	$('#info-next').on('click', function(e){
		e.preventDefault();

		if(info.position < info.slidesNumber){
			// All the slides should start from the right.
			info.father.children().not('.active').css({
				'left': '100%'
			});

			// It removes active class and it will apply it on the next element with animation.
			$('#info .active').removeClass('active').next().addClass('active').animate({
			// "left": "-100%"
			'left': '0'
			});

			// Animate the prev slides el slide for moving to the left.
			$('#info .active').prev().animate({
				'left': '-100%'
			});

			$('#buttons').children('.active').removeClass('active').next().addClass('active');

			info.position = info.position + 1;

		 } else {

		 	// The active slide (the last) animates to the right.
		 	$('#info .active').animate({
		 		'left': '-100%'
		 	});

			// Seleccionamos todos los slides que no tengan la clase active y los posicionamos a la derecha
			info.father.children().not('.active').css({
				'left': '100%'
			});

			// Eliminates the active class and it will be added to the first element with animation.
		 	$('#info .active').removeClass('active');
		 	info.father.children('.slide').first().addClass('active').animate({
		 		'left': '0'
		 	});

		 	$('#buttons').children('.active').removeClass('active');
		 	$('#buttons').children('span').first().addClass('active');

		 	// Reset the position to 1.
		 	info.position = 1;
		}

		infoHeight();

	});

	// Prev button
	$('#info-prev').on('click', function(e){
		e.preventDefault();

		if(info.position > 1){
			info.father.children().not('.active').css({
			'left':'-100%'
		});

		$('#info .active').animate({
			'left': '100%'
		});

		$('#info .active').removeClass('active').prev().addClass('active').animate({
			'left': '0'
		});

		$('#buttons').children('.active').removeClass('active').prev().addClass('active');

		info.position = info.position - 1;

		} else {
			info.father.children().not('.active').css({
				'left': '-100%'
			});

			$('#info .active').animate({
				'left': '100%'
			});

			$('#info .active').removeClass('active');
			info.father.children().last().addClass('active').animate({
				'left': '0'
			});

			$('#buttons').children('.active').removeClass('active');
			$('#buttons').children('span').last().addClass('active');

			info.position = info.slidesNumber;

		}
		infoHeight();
	});

});