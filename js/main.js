$(document).ready(function () {
    //navbar toggle
    $('.navbar-toggler').click(function () {
        $(this).toggleClass('active');
        $('header').toggleClass('bg-white');
    });

    // category list owl carousel

    $('.category-list').owlCarousel({
        loop: false,
        dots: false,
        margin: 16,
        autoplayHoverPause: true,
        responsiveClass: true,
        nav: true,
        navText: ["<i class='lnr lnr-chevron-left'></i>", "<i class='lnr lnr-chevron-right'></i>"],
        autoplay: true,
        autoplayTimeout: 7000,
        autoplaySpeed: 1000,
        smartSpeed: 1000,
        slideBy: 3,
        stagePadding: 5,
        responsive: {
            0: {
                items: 3,
                nav: false
            },
            576: {
                items: 4,
                nav: false
            },
            768: {
                items: 5,
            },
            991: {
                items: 7,
            },
            1199: {
                items: 9
            }
        }
    });


    $('.latest-recipe-list').owlCarousel({
        margin: 15,
        dots: false,
        responsiveClass: true,
        nav: true,
        navText: ["<i class='lnr lnr-chevron-left'></i>", "<i class='lnr lnr-chevron-right'></i>"],
        autoplay: false,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            576: {
                items: 2,
                nav: false
            },
            768:{
                items: 2,
                nav: true
            }
        }
    });

    $('.recipe-day-carousel').owlCarousel({
        dots: true,
        responsiveClass: true,
        nav: false,
        items: 1,
        singleItem: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplay: true,
        loop: true,
        autoplayHoverPause: true
    });

    $('.cuisine-list').owlCarousel({
        loop: false,
        dots: false,
        margin: 15,
        autoplayTimeout: 8000,
        autoplaySpeed: 1500,
        smartSpeed: 1500,
        slideBy: 2,
        autoplayHoverPause: true,
        responsiveClass: true,
        nav: true,
        navText: ["<i class='lnr lnr-chevron-left'></i>", "<i class='lnr lnr-chevron-right'></i>"],
        autoplay: true,
        responsive: {
            0: {
                items: 2,
                nav: false
            },
            768: {
                items: 3,
            },
            991: {
                items: 4
            }
        }
    });

});

$(window).on('load', function () {
    $(this).scrollTop(0);
    //sticky header
    $(window).scroll(function () {

        var ws = $(window).scrollTop();
        var nav_height = $('header').outerHeight();
        var header_top = $('header');
        if (ws >= nav_height) {
            header_top.addClass("fixed");
        } else {
            header_top.removeClass("fixed");
        }
    });

});