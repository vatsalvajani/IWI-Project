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
        items: 1,
        autoplay: false,
        nav: true,
        navText: [
            '<span class="arrow-left"></span>',
            '<span class="arrow-right"></span>',
        ],
        dots: false,
        responsiveClass:true,
        responsive:{
            480:{
                items:2,
                margin: 15,
                nav: true,
            },
            992:{
                items:3,
                margin: 20,
                nav: true,
            },
            1200:{
                items:3,
                margin: 30,
                nav: true,
            },
            1600:{
                items:3,
                margin: 40,
                nav: true,
            }
        }
    })
});