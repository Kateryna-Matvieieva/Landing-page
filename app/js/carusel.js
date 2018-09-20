$("#slick-images").slick({
	arrows: true,
	  nextArrow: '<div class="arrow-right"><img src="./app/img/team/fa-angle-right.png"></div>',
  prevArrow: '<div class="arrow-left"><img src="./app/img/team/fa-angle-left.png"></div>',
	slidesToShow: 4,
	slidesToScroll: 1,
	//autoplay: true,
	autoplaySpeed: 2000,
	responsive: [
		{
			breakpoint: 1600,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
			}
		},
				{
			breakpoint: 1240,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		}
	]
});
