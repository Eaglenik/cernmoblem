
// slider
$('.owl-carousel').owlCarousel({
    items:1,
    loop:false,
    center:true,
    margin:10,
    nav: true,
    URLhashListener:true,
    autoplayHoverPause:true,
    startPosition: 'URLHash',
    dots: false,
    navText: [
      '<img src="../../images/header/icons/angle-left-solid.png" alt="">',
      '<img src="../../images/header/icons/angle-right-solid.png" alt="">',
    ],
    mouseDrag: false,
});
