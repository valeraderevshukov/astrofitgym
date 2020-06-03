import slick from 'slick-carousel';

let options = {
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  speed: 700,
  focusOnSelect: true,
  adaptiveHeight: true
};


const sliders = [
  {
    wrap: $('.js-slider-wrap'),
    slider: '.js-hero-slider',
    counter: '.js-slider-counter',
    options: {
      arrows: false,
      autoplay: true,
      dots: true,
      autoplaySpeed: 4000,
    }
  },
  {
    wrap: $('.js-testimonials-slider-wrap'),
    slider: '.js-testimonials-slider',
    counter: '.js-testimonials-slider-counter',
    options: {
      prevArrow: '.js-testimonials-slider-btn-left',
      nextArrow: '.js-testimonials-slider-btn-right'
    }
  },
  {
    wrap: $('.js-progressslider-wrap'),
    slider: '.js-progressslider',
    counter: '.js-progressslider-counter',
    options: {
      prevArrow: '.js-progressslider-btn-left',
      nextArrow: '.js-progressslider-btn-right'
    }
  }
];


const initSlider = (prop) => {
  prop.wrap.each((i,el) => {
    const slider = $(el).find(prop.slider);
    const status = $(el).find(prop.counter);

    slider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
      const i = (currentSlide ? currentSlide : 0) + 1;
      const currentSl = i < 10 ? `0${i}` : i;
      const length = slick.slideCount < 10 ? `0${slick.slideCount}` : slick.slideCount;
      status.html(`${currentSl}<span> / ${length}</span>`);
    });

    

    slider.slick(prop.options ? { ...prop.options, ...options } : options);
  });
};

sliders.forEach(optons => initSlider(optons));
