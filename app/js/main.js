$(function () {

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


});