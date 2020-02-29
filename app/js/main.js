$(function () {

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
			if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
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
    timer: true,
    shuffle: true,
    // firstTransition: 'fade',
    firstTransitionDuration: 5000,
    transition: 'fade2',
    // animation: 'random',
    transitionDuration: 3000,
    slides: [
        { src: '../images/fullpage/fullpage-1.jpg' },
        { src: '../images/fullpage/fullpage-2.jpg' },
        { src: '../images/fullpage/fullpage-3.jpg' },
    ]
  });

  // Slick Slider
  $('.works__slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'ease-in',
    prevArrow: '<button type="button" class="slick-prev"><svg class="slider-icon slider-prev"><use xlink:href="#arrow"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="slider-icon slider-next"><use xlink:href="#arrow"></use></svg></button>',
  });


});