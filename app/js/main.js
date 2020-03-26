$(function () {

// PAGE TRANSITION EFFECT
$(document).ready(function () {
  $(".animsition-overlay").animsition({
    inClass: 'overlay-slide-in-top',
    outClass: 'overlay-slide-out-top',
    inDuration: 1500,
    outDuration: 800,
    linkElement: 'a:not([target="_blank"]):not([href^="#"]):not(#fp-nav ul li a):not(.lightbox):not(.send-message)',
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 3000,
    onLoadEvent: true,
    browser: ['animation-duration', '-webkit-animation-duration'],
    overlay: true,
    overlayClass: 'animsition-overlay-slide',
    overlayParentElement: 'body',
    transition: function (url) { window.location.href = url; }
  });
});

  // GSAP
  TweenMax.to(".col__bg-item", 1, {
    delay: 1,
    width: 0,
    ease: Expo.easeInOut
  });

  TweenMax.to(".col__bg", 1, {
    delay: 1,
    display: 'none',
    ease: Expo.easeInOut
  });

  // Header gsap
  TweenMax.from(".header__logo", 1, {
    delay: 1.5,
    opacity: 0,
    y: +50,
    ease: Expo.easeInOut
  })

  TweenMax.from(".nav-but-wrap", 1, {
    delay: 1.7,
    opacity: 0,
    y: +50,
    ease: Expo.easeInOut
  })


  TweenMax.from(".title", 1, {
    delay: 1.9,
    opacity: 0,
    y: +70,
    ease: Expo.ease
  })

  TweenMax.from(".subtitle", .8, {
    delay: 2.1,
    opacity: 0,
    y: +90,
    ease: Expo.ease
  })

  // About gsap
  TweenMax.from(".about__title", 1, {
    delay: 2.2,
    opacity: 0,
    x: +100,
    ease: Expo.ease
  })

  TweenMax.from(".about__prof", 1, {
    delay: 2.4,
    opacity: 0,
    x: +120,
    ease: Expo.ease
  })

  TweenMax.from(".about__image", 1, {
    delay: 2.4,
    opacity: 0,
    x: -200,
    ease: Expo.ease
  })

  TweenMax.from(".about__text", 1, {
    delay: 2.6,
    opacity: 0,
    y: +50,
    ease: Expo.ease
  })

  // Works gsap
  TweenMax.from(".works__title-in", 1, {
    delay: 2.2,
    opacity: 0,
    x: -100,
    ease: Expo.ease
  })

  TweenMax.from(".works__text", 1, {
    delay: 2.4,
    opacity: 0,
    x: -100,
    ease: Expo.ease
  })

  TweenMax.from(".works__view-in", 1, {
    delay: 2.6,
    opacity: 0,
    x: -100,
    ease: Expo.ease
  })

  TweenMax.from(".works__slide-image", 1, {
    delay: 2.2,
    opacity: 0,
    x: '-50%',
    ease: Expo.ease
  })

  TweenMax.from(".work__link-left", 1, {
    delay: 2.2,
    opacity: 0,
    x: -200,
    ease: Expo.easeOut
  })

  TweenMax.from(".work__link-right", 1, {
    delay: 2.2,
    opacity: 0,
    x: +200,
    ease: Expo.easeOut
  })

  TweenMax.from(".work__image", 1, {
    delay: 2.2,
    opacity: 0,
    y: +100,
    ease: Expo.ease
  })

  TweenMax.from(".slider-icon", 1, {
    delay: 2.2,
    opacity: 0,
    y: +100,
    ease: Expo.ease
  })

  // Contact gsap
  TweenMax.from(".contact__img", 1, {
    delay: 2.4,
    opacity: 0,
    x: -200,
    ease: Expo.ease
  })

  TweenMax.from(".contact__location", 1, {
    delay: 2.8,
    opacity: 0,
    y: +50,
    ease: Expo.ease
  })


  // Footer gsap
  TweenMax.from(".footer__text", 1, {
    delay: 2.7,
    opacity: 0,
    x: -100,
    ease: Power2.ease
  })

  TweenMax.from(".l1", 1, {
    delay: 2.7,
    opacity: 0,
    y: +50,
    ease: Power2.ease
  })

  TweenMax.from(".l2", 1, {
    delay: 2.8,
    opacity: 0,
    y: +50,
    ease: Power2.ease
  })

  TweenMax.from(".l3", 1, {
    delay: 2.9,
    opacity: 0,
    y: +50,
    ease: Power2.ease
  })

  TweenMax.from(".l4", 1, {
    delay: 3,
    opacity: 0,
    y: +50,
    ease: Power2.ease
  })

  // ////////////












  // Menu
  var app = function () {
    var body = undefined;
    var menu = undefined;
    var menuItems = undefined;
    var init = function init() {
      body = document.querySelector('body');
      menu = document.querySelector('.menu-icon');
      menuItems = document.querySelectorAll('.nav__list-item');
      applyListeners();
    };
    var applyListeners = function applyListeners() {
      menu.addEventListener('click', function () {
        return toggleClass(body, 'nav-active');
      });
    };
    var toggleClass = function toggleClass(element, stringClass) {
      if (element.classList.contains(stringClass)) element.classList.remove(stringClass); else element.classList.add(stringClass);
    };
    init();
  }();

  // FULLPAGE
  $('#fullpage').fullpage({
    autoScrolling: true,
    scrollBar: false,
    navigation: true,
    loopBottom: true,
    loopTop: true,
  });


  // Vegas.js
  $(".s1").vegas({
    delay: 15000,
    timer: false,
    shuffle: true,
    // firstTransition: 'fade',
    firstTransitionDuration: 3000,
    transition: 'fade2',
    // animation: 'random',
    transitionDuration: 3000,
    slides: [
      { src: '../images/fullpage/fullpage-2.jpg' },
      { src: '../images/fullpage/fullpage-1.jpg' },
      { src: '../images/fullpage/fullpage-3.jpg' },
    ]
  });

  // Slick Slider
  $('.works__slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 7000,
    cssEase: 'ease-in',
    prevArrow: '<button type="button" class="slick-prev"><svg class="slider-icon slider-prev"><use xlink:href="#arrow"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="slider-icon slider-next"><use xlink:href="#arrow"></use></svg></button>',
  });



  



    // Loader
    // var textWrapper = document.querySelector(".intro-title");
    // textWrapper.innerHTML = textWrapper.textContent.replace(
    //   /([^\x00-\x80]|\w)/g,
    //   "<span class='letter'>$&</span>"
    // );

    // anime
    //   .timeline({ loop: false })
    //   .add({
    //     targets: ".intro-title .letter",
    //     translateX: [140, 0],
    //     translateZ: 0,
    //     opacity: [0, 1],
    //     easing: "easeOutExpo",
    //     duration: 1200,  /* 1400 */
    //     delay: function (el, i) {
    //       return 500 + 50 * i;
    //     }
    //   })
    //   .add({
    //     targets: ".intro-title .letter",
    //     translateX: [0, -140],
    //     opacity: [1, 0],
    //     easing: "easeInExpo",
    //     duration: 600,  /* 1200 */
    //     delay: function (el, i) {
    //       return 700 + 50 * i;
    //     }
    //   });


    // TweenMax.to(".loader", 2.2, {
    //   delay: 3,
    //   top: "-100%",
    //   ease: Expo.easeInOut
    // });


    TweenMax.from(".section__title", 1, {
      delay: 1.9,
      opacity: 0,
      y: +20,
      ease: Power2.easeInOut
    })

    TweenMax.from(".section__text", 1, {
      delay: 2.1,
      opacity: 0,
      y: +20,
      ease: Power2.easeInOut
    })

    TweenMax.from(".section__link", 1, {
      delay: 2.3,
      opacity: 0,
      y: +20,
      ease: Power2.easeInOut
    })

    TweenMax.from("#fp-nav", 1, {
      delay: 2.5,
      opacity: 0,
      x: +20,
      ease: Power2.easeInOut
    })









  });