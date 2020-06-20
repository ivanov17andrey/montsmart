document.addEventListener("DOMContentLoaded", function () {

	$('.key-points__slider').slick({
		mobileFirst: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		draggable: true,
		centerMode: true,
		arrows: false,
		infinite: false,
		responsive: [
			{
				breakpoint: 415,
				settings: 'unslick'
			}
		]
	});

	$('.ml__btn button').on('click', function () {
		this.innerText = this.innerText == 'Скрыть' ? 'Подробнее' : 'Скрыть';
		$('.ml__brain').toggleClass('ml__brain--pulse');
		$('.ml__more').toggleClass('ml__more--visible');
	});

	$('.slider__item').on('click', function () {
		// console.log(this);
		$(this).toggleClass('slider__item--turn-over');
	});

	$(window).on('scroll', function scrollObserver() {
		if (window.pageYOffset + (1 / 2 * window.innerHeight) > $('.steps-box').offset().top) {
			showSteps();
			$(window).off('scroll', scrollObserver);
		}
	})

	function showSteps() {
		let i = 1;
		let timer = setTimeout(function show() {
			$('#step-' + i).toggleClass('wait');
			$('#step-name-' + i).toggleClass('wait');
			$('#line-' + (i - 1)).css('stroke-dashoffset', '0');
			i++;
			if (i == 7) return;
			timer = setTimeout(show, 1250);
		}, 1);
	}




	new WOW().init();
	$(".wow").each(function () {
		var wowHeight = $(this).height();
		$(this).attr("data-wow-offset", wowHeight);
	});

});
