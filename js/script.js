jQuery(document).ready(function($) {
    // Owl Carousel
   $(".banner-carousel-wrapper .owl-carousel").owlCarousel({
        items:1,
        loop: true,
        nav: true,
        dots: false,
        navText : ['<img src="images/prev.png" alt="next">','<img src="images/next.png" alt="prev">'],

    }); 
    $(".projects-gallery.owl-carousel").owlCarousel({
        items:4,
        loop: true,
        nav: true,
        dots: false,
        margin: 50,
        navText : ['<img src="images/left-arrow.png" alt="next">','<img src="images/right-arrow.png" alt="prev">'],
        responsive : {
            350:{
              items: 1
            },
            550:{
              items: 2
            },
            768:{
              items: 3,
              margin: 10
            },
            1024:{
              items:4,
              margin: 15
            }
        }
    });
    // Media
    $('.materialboxed').materialbox();
    //Scrollspy
    $('.scrollspy').scrollSpy();
    //Mobile
    $('.sidenav').sidenav();
    //Counter
        var $element = $('.help-wrapper');
        let counter = 0;
        $(window).scroll(function() {
          var scroll = $(window).scrollTop() + $(window).height();
          var offset = $element.offset().top
        
          if (scroll > offset && counter == 0) {
            counter = 1;
          }
        });
}); //ready