svg4everybody();

$('a').smoothScroll({
  speed: 1000
});

$(function () {
  $.scrollUp({
    scrollDistance: 500,
    animation: 'slide',  
    AnimationSpeed: 600,
    scrollImg: true,
    zIndex: 500
  });
});

particlesJS.load('particles-js', './js/particlesjs-config.json', function() {
  console.log('callback - particles.js config loaded');
});
