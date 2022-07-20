// Sliders

// Number of slider objects
 if (document.querySelector('#objects-section-arrows') && document.querySelector('.objects-section__slider')) {
  let objectSlider = document.querySelector('.objects-section');
  let totalSlides = document.querySelector('#objects-section-arrows .objects-section__total-slides');

  totalSlides.innerHTML = getNumberOfSlides();

  function getNumberOfSlides() {
    return objectSlider.querySelectorAll('.objects-section__card:not(.slick-cloned)').length;
  }
  // Next code in jQuery
}

jQuery(document).ready(function($){
  // Number of slider objects
  $('.object-card-slider').on('beforeChange', function(event, slick, direction, currentSlide){
    let numberCurrentSlide = document.querySelector('#objects-section-arrows .objects-section__current-slide');
    numberCurrentSlide.innerHTML = currentSlide + 1;
  });

  // Slick sliders
  $('.slider-banner').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 849,
        settings: {
          arrows: true,
          nextArrow:
            '<span class="btn-play-arrow btn-play-arrow--next"><button class="btn-play-arrow__btn" aria-label="Next" tabindex="0" role="button"><svg viewBox="0 0 10.51 14" width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.755 5.7L4.979.376C4.619.13 4.258 0 3.957 0c-.582 0-.941.467-.941 1.248v11.506c0 .78.359 1.246.939 1.246.301 0 .657-.13 1.017-.377l7.78-5.324c.5-.343.778-.804.778-1.3 0-.495-.274-.956-.775-1.299z" fill="#1A1A1A"/></svg></button></span>',
          prevArrow:
            '<span class="btn-play-arrow btn-play-arrow--prew"><button class="btn-play-arrow__btn" aria-label="Previous" tabindex="0" role="button"><svg viewBox="0 0 10.51 14" width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M1.245 8.3l7.776 5.324c.36.246.721.376 1.022.376.582 0 .941-.467.941-1.248V1.246c0-.78-.359-1.246-.939-1.246-.301 0-.657.13-1.017.377l-7.78 5.324C.748 6.044.47 6.505.47 7c0 .495.274.956.775 1.299z" fill="#1A1A1A"/></g><defs><clipPath id="clip0"><path fill="#fff" transform="rotate(180 7 7)" d="M0 0h14v14H0z"/></clipPath></defs></svg></button></span>',
          dots: false,
        }
      },
    ],
    mobileFirst:true
  });

  $('.date-slider-text').slick({
    arrows: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'ease-in-out',
    asNavFor: '.date-slider-nav',
    swipe: false,
  });

  $('.date-slider-nav').slick({
    infinite: false,
    arrows: true,
    nextArrow:
      '<span class="slider-circle-arrow slider-circle-arrow--next"><button class="circle-arrow" aria-label="Next" tabindex="0" role="button"><span class="visually-hidden">Следующие даты</span></button></span>',
    prevArrow:
      '<span class="slider-circle-arrow slider-circle-arrow--prew"><button class="circle-arrow circle-arrow--left" aria-label="Previous" tabindex="0" role="button"><span class="visually-hidden">Предыдущие даты</span></button></span>',
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    asNavFor: '.date-slider-text',
    focusOnSelect: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1023,
        settings: {
          centerMode: true,
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
    ],
    mobileFirst:true
  });

  $('.logo-slider').slick({
    arrows: false,
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 549,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 850,
        settings: {
          arrows: true,
          slidesToShow: 4,
          slidesToScroll: 4,
          nextArrow:
            '<span class="slider-circle-arrow slider-circle-arrow--next"><button class="circle-arrow" aria-label="Next" tabindex="0" role="button"><span class="visually-hidden">Следующие даты</span></button></span>',
          prevArrow:
            '<span class="slider-circle-arrow slider-circle-arrow--prew"><button class="circle-arrow circle-arrow--left" aria-label="Previous" tabindex="0" role="button"><span class="visually-hidden">Предыдущие даты</span></button></span>',
          dots: false,
        }
      },
    ],
    mobileFirst:true
  });

  $('.object-card-slider').slick({
    arrows: false,
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 549,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 849,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          appendArrows: '.objects-section__arrows-slider',
          nextArrow:
            '<span class="slider-circle-arrow slider-circle-arrow--next"><button class="circle-arrow" aria-label="Next" tabindex="0" role="button"><span class="visually-hidden">Следующие даты</span></button></span>',
          prevArrow:
            '<span class="slider-circle-arrow slider-circle-arrow--prew"><button class="circle-arrow circle-arrow--left" aria-label="Previous" tabindex="0" role="button"><span class="visually-hidden">Предыдущие даты</span></button></span>',
          dots: false,
        }
      },
    ],
    mobileFirst:true
  });

  $('.card-blackout--slider').slick({
    arrows: false,
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 549,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 849,
        settings: {
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 2,
          appendArrows: '.card-blackout__arrows-slider',
          nextArrow:
            '<span class="slider-circle-arrow slider-circle-arrow--next"><button class="circle-arrow" aria-label="Next" tabindex="0" role="button"><span>Следующие даты</span></button></span>',
          prevArrow:
            '<span class="slider-circle-arrow slider-circle-arrow--prew"><button class="circle-arrow circle-arrow--left" aria-label="Previous" tabindex="0" role="button"><span>Предыдущие даты</span></button></span>',
          dots: false,
        }
      },
      {
        breakpoint: 1079,
        settings: {
          arrows: true,
          slidesToShow: 4,
          slidesToScroll: 2,
          appendArrows: '.card-blackout__arrows-slider',
          nextArrow:
            '<span class="slider-circle-arrow slider-circle-arrow--next"><button class="circle-arrow"><span aria-label="Next" tabindex="0" role="button">Следующие даты</span></button></span>',
          prevArrow:
            '<span class="slider-circle-arrow slider-circle-arrow--prew"><button class="circle-arrow circle-arrow--left"><span aria-label="Previous" tabindex="0" role="button">Предыдущие даты</span></button></span>',
          dots: false,
        }
      },
      {
        breakpoint: 1999,
        settings: {
          arrows: true,
          slidesToShow: 5,
          slidesToScroll: 2,
          appendArrows: '.card-blackout__arrows-slider',
          nextArrow:
            '<span class="slider-circle-arrow slider-circle-arrow--next"><button class="circle-arrow" aria-label="Next" tabindex="0" role="button"><span>Следующие даты</span></button></span>',
          prevArrow:
            '<span class="slider-circle-arrow slider-circle-arrow--prew"><button class="circle-arrow circle-arrow--left" aria-label="Previous" tabindex="0" role="button"><span>Предыдущие даты</span></button></span>',
          dots: false,
        }
      },
    ],
    mobileFirst:true
  });

});
// jQuery - END