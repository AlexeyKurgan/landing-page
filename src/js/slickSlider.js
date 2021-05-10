const SLIDES_TO_SHOW = 1,
      $slickElement = $('.slider');

$slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
  const page = Math.ceil(((currentSlide || 0) + 1) / SLIDES_TO_SHOW),
        numPages = Math.ceil(slick.slideCount / SLIDES_TO_SHOW);

  $('.slider__nav-wrap .slider__slides-num', slick.$slider.parent()).text(`${page} / ${numPages}`);
});

$slickElement.slick({
  slidesToShow: SLIDES_TO_SHOW,
  slidesToScroll: SLIDES_TO_SHOW,
  dots: false,
  infinite: true,
  prevArrow: '<div class="arrows arrows_left"><i class="fas fa-chevron-left"></i></div>',
  nextArrow: '<div class="arrows arrows_right"><i class="fas fa-chevron-right"></i></div>',

  responsive:[
    {
      breakpoint: 991,
      settings: {
        fade:false,
        touchMove:true,
        autoplaySpeed:6000,
     }
    },
    {
      breakpoint: 768,
      settings: {
        fade:false,
        touchMove:true,
        autoplaySpeed:10500,
     }
    },
    {
      breakpoint: 575,
      settings: {
        fade:false,
        arrows : false,
        touchMove:true,
        autoplaySpeed:6000,
     }
    },
    {
      breakpoint: 320,
      settings: {
        fade:false,
        arrows : false,
        touchMove:true,
        autoplaySpeed:6000,
     }
    },
  ]

});

