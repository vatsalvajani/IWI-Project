$(document).ready(function() {

    // country dropdown
    $('.country-dropdown').select2();

    // banner slider
    $('.banner-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        autoplay: false,
        nav: false,
        dots: false
    })

    //upcoming events
    $('.upcomin-event-slider').owlCarousel({
        loop: true,
        margin: 40,
        items: 3,
        autoplay: false,
        nav: true,
        dots: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            1200:{
                items:3,
            }
        }
    })
});