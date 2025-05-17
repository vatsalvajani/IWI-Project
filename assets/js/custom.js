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

    // whats new section js
    function enableHoverTabsOnDesktop() {
        if ($(window).width() >= 768) {
        $('#hoverTabs .nav-link').each(function () {
            $(this).on('mouseenter', function () {
            const tab = new bootstrap.Tab(this);
            tab.show();
            });
        });
        }
    }

    function setupAccordionBehavior() {
        const $links = $('#hoverTabs .nav-link');

        $links.on('click', function (e) {
        if ($(window).width() < 768) {
            const $this = $(this);
            const targetId = $this.data('bs-target');
            const $targetPane = $(targetId);
            const isActive = $this.hasClass('active');

            // Remove all active classes
            $links.removeClass('active');
            $('.tab-pane').removeClass('show active');

            // Toggle clicked item if it was not already active
            if (!isActive) {
            $this.addClass('active');
            $targetPane.addClass('show active');
            }

            e.preventDefault();
        }
        });
    }

    $(document).ready(function () {
        enableHoverTabsOnDesktop();
        setupAccordionBehavior();
        $(window).on('resize', function () {
        location.reload();
        });
    });
});