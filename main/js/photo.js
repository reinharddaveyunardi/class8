
let mainSliderSelector = '.main-slider',
    thumbSliderSelector = '.thumb-slider';
let mainSliderOptions = {
  loop: true,
  speed:1500,
  parallax: true,
  loopAdditionalSlides: 5,
  grabCursor: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
};
let mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);
let thumbSliderOptions = {
  loop: true,
  loopAdditionalSlides: 5,
  speed:1500,
  spaceBetween: 5,
  slidesPerView: 5,
  centeredSlides : true,
  touchRatio: 0.2,
  slideToClickedSlide: true,
  direction: 'vertical'
};
let thumbSlider = new Swiper(thumbSliderSelector, thumbSliderOptions);

mainSlider.controller.control = thumbSlider;
thumbSlider.controller.control = mainSlider;