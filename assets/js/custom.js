$(document).ready(function() {

    // country dropdown
    $('.country-dropdown').select2({
        minimumResultsForSearch: Infinity,
        dropdownParent: $('.cmn-select-dropdown')
    });

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
            //location.reload();
        });
    });


    // Category slider
    $('.category-slider').owlCarousel({
        loop: false,
        items: 1,
        autoplay: false,
        margin: 10,
        autoWidth:true,
        center: true,
        nav: true,
        navText: [
            '<span class="arrow-left"></span>',
            '<span class="arrow-right"></span>',
        ],
        dots: false,
        responsiveClass:true,
        responsive:{
            480:{
                items:1,
                margin: 20,
                nav: true,
            },
            767:{
                items:2,
                margin: 20,
                nav: true,
            },
            992:{
                items:2,
                margin: 25,
                nav: true,
            },
            1200:{
                items:3,
                margin: 40,
                nav: true,
            },
            1600:{
                items:4,
                margin: 60,
                nav: true,
            }
        }
    })

    //feature slider
        $('.feature-slider').owlCarousel({
        loop: false,
        items: 1,
        autoplay: false,
        margin: 10,
        autoWidth:true,
        center: true,
        nav: true,
        navText: [
            '<span class="arrow-left"></span>',
            '<span class="arrow-right"></span>',
        ],
        dots: false,
        responsiveClass:true,
        responsive:{
            480:{
                items:1,
                margin: 10,
                nav: true,
            },
            767:{
                items:2,
                margin: 15,
                nav: true,
            },
            992:{
                items:2,
                margin: 20,
                nav: true,
            },
            1200:{
                items:3,
                margin: 35,
                nav: true,
            },
            1600:{
                items:4,
                margin: 55,
                nav: true,
            }
        }
    })

    // Modal
    $('.modal-select-dropdown').select2({
        minimumResultsForSearch: Infinity,
        dropdownParent: $('.modal-select')
    });

    //scroll to section 
    const $header = $('.header-navbar');
    const $bar = $('.inter-section-redirection');


    if ($header.length && $bar.length) {
        let barOffsetTop = $bar.offset().top;

        function getHeaderHeight() {
            return $header.outerHeight() || 0;
        }

        function updateBarOffset() {
            barOffsetTop = $bar.offset().top;
        }

        function handleScroll() {
            const scrollTop = $(window).scrollTop();
            const headerHeight = getHeaderHeight();

            if (scrollTop >= barOffsetTop - headerHeight) {
                $bar.addClass('fixed');
            } else {
                $bar.removeClass('fixed');
            }

            const scrollPos = scrollTop + headerHeight + $bar.outerHeight() + 1;
            let foundActive = false;

            $('.intersection-redirect').each(function () {
                const sectionId = $(this).attr('href');
                const $section = $(sectionId);

                if ($section.length) {
                    const sectionTop = $section.offset().top;
                    const sectionBottom = sectionTop + $section.outerHeight();

                    if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                        $('.intersection-redirect').removeClass('active');
                        $(this).addClass('active');
                        foundActive = true;
                    }
                }
            });

            if (!foundActive) {
                $('.intersection-redirect').removeClass('active');
            }
        }

        $('.intersection-redirect').on('click', function (e) {
            e.preventDefault();
            const targetId = $(this).attr('href');
            const $target = $(targetId);

            if ($target.length) {
                const totalOffset = getHeaderHeight() + ($bar.hasClass('fixed') ? $bar.outerHeight() : 0);
                const scrollTo = $target.offset().top - totalOffset;

                $('html, body').animate({
                    scrollTop: scrollTo
                }, 500);
            }
        });

        $(window).on('scroll', handleScroll);

        $(window).on('resize', function () {
            updateBarOffset();
            handleScroll();
        });

        $(window).on('load', function () {
            updateBarOffset();
            handleScroll();
        });
    }

    //product slider
    var main = $(".main-carousel");
    var thumbs = $(".thumb-carousel");

    main.owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: false,
        autoplay: false,
        onChanged: syncPosition
    });

    thumbs.owlCarousel({
        margin: 15,
        loop: false,
        nav: false,
        dots: false,
        center: false,
        autoWidth: true,
        responsiveClass:true,
        responsive: {
            0:{
                items: 2
            },
            575:{
                items: 3
            }
        }
    });

    // Sync thumbnails
    function syncPosition(event) {
      let index = event.item.index - event.relatedTarget._clones.length / 2;
      let count = event.item.count;
      index = ((index % count) + count) % count;

      thumbs.find(".item").parent().removeClass("current");
      thumbs.find(".item").eq(index).parent().addClass("current");
    }

    thumbs.on("click", ".item", function () {
      var index = $(this).parent().index();
      main.trigger("to.owl.carousel", [index, 300, true]);
    });

    // Set initial current class
    thumbs.find(".item").eq(0).parent().addClass("current");

    $(".thumb-prev").click(function () {
        thumbs.trigger("prev.owl.carousel");
    });

    $(".thumb-next").click(function () {
        thumbs.trigger("next.owl.carousel");
    });

    //search autocomplete
    const searchSuggestions = [
        "Masada", "Masada Slim", "TMG", "Pistol",
        "Sniper", "Firearms", "Assault Rifles", "GL"
    ];

    $(function () {
        $("#searchInput").autocomplete({
        source: searchSuggestions,
        minLength: 1
        });

        $("#openSearchBtn").on("click", function () {
            const offcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('offcanvasRight'));
            if (offcanvas) offcanvas.hide(); // Close offcanvas menu if open

            $("body").addClass("search-open"); 

            $("#searchOverlay").fadeIn(200, () => {
                const input = document.getElementById("searchInput");
                if (/Mobi|Android/i.test(navigator.userAgent)) {
                setTimeout(() => input.focus(), 400);
                } else {
                input.focus();
                }
            });
        });

        $("#closeSearchBtn").on("click", function () {
        $("#searchOverlay").fadeOut();
        });

        $(document).on("keydown", function (e) {
        if (e.key === "Escape") {
            $("#searchOverlay").fadeOut();
        }
        });
    });

    //video modal popup js
    $('#videoModal').on('hidden.bs.modal', function () {
        var $video = $('#categoryVideo')[0];
        $video.pause();
        $video.currentTime = 0;
    });

    //product categoy popup
    $('#ProductvideoSlide').on('click', function () {
      $('#Productmodal').modal('show');
    });

    // Pause and reset video on modal close
    $('#ProductvideoSlide').on('click', function () {
      $('#Productmodal').modal('show');
    });

    // Pause and reset video on modal close
    $('#Productmodal').on('hidden.bs.modal', function () {
      var video = $('#categoryVideo')[0];
      video.pause();
      video.currentTime = 0;
    });

    //read more button on view product and view series
    function applyReadMoreLogic() {
        const $content = $('.cmn-sec-overview-content');
        const $carousel = $('.main-carousel, .overview-image-wrapper');

        // Check if both elements exist
        if ($content.length && $carousel.length) {
            // Remove any existing read-more setup
            $content.removeClass('collapsed expanded').css('max-height', '');
            $content.next('.read-more-toggle').remove();

            if ($(window).width() > 991) {
                const contentHeight = $content.outerHeight();
                const carouselHeight = $carousel.outerHeight();

                if (contentHeight > carouselHeight) {
                    const collapsedHeight = carouselHeight;

                    // Set max-height and add toggle button
                    $content
                    .css('max-height', collapsedHeight)
                    .addClass('collapsed')
                    .css('overflow', 'hidden');

                    $content.after('<button class="read-more-toggle">Read More</button>');

                    // Toggle logic
                    $('.read-more-toggle').on('click', function () {
                    const isExpanded = $content.hasClass('expanded');

                    if (isExpanded) {
                        $content.removeClass('expanded').addClass('collapsed').css('max-height', collapsedHeight);
                        $(this).text('Read More');
                    } else {
                        const expandedHeight = $content.get(0).scrollHeight;
                        $content.removeClass('collapsed').addClass('expanded').css('max-height', expandedHeight + 'px');
                        $(this).text('Read Less');
                    }
                    });
                }
            }
        }
    }

    $(document).ready(function () {
        applyReadMoreLogic();
    });

    $(window).on('resize', function () {
        applyReadMoreLogic();
    });
});