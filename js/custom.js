/*global $ */
(function ($) {
    "use strict";

    // remove scrollbar when loading 
    $(window).on('load', function(){
        $('body').addClass('stopScroll');
    });

    // OPEN SIDE  MENU 
    $('.menuBtn').on('click', function () {
        $(this).toggleClass('open');
        $('.navMenu').toggleClass('open');
        $('.bodyOverlay').toggleClass('show');
        setTimeout(function () {
            $('body').toggleClass('stopScroll');
        }, 200);
    });

    // Fixed NavBar 
    window.onscroll = function() {
        var topElement = document.getElementById('features') ,
            Header = document.getElementsByTagName('header') ,
            Top = topElement.offsetTop;
        window.pageYOffset >= Top + 200 && window.innerWidth > 992  ? $(Header).addClass("fixedNav") : $(Header).removeClass("fixedNav");
    }

    // check If Rtl 
    var rtlVal = false;
    $('body').hasClass('ar') ? rtlVal = true : rtlVal = false;

    // Header OWL 
    $('.owlHeader').owlCarousel({
        rtl: rtlVal,
        margin: 0,
        autoplay: true,
        loop: true,
        center: true,
        nav: false,
        dots: false,
        navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    // Gallery OWL 
    $('.owlGallery').owlCarousel({
        rtl: rtlVal,
        margin: 0,
        autoplay: false,
        loop: false,
        nav: false,
        dots: true,
        center: false,
        navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
        responsive: {
            0: {
                items: 1,
                dotsEach: 1
            },
            600: {
                items: 1,
                dotsEach: 1
            },
            1000: {
                items: 1,
                dotsEach: 1
            }
        }
    });

    // Main Gallery OWL 
    $('.owlMainGallery').owlCarousel({
        rtl: rtlVal,
        margin: 20,
        autoplay: true,
        loop: true,
        nav: true,
        dots: false,
        center: false,
        autoplaySpeed: 2000,
        autoplayTimeout: 2000,
        smartSpeed: 2000,
        navText: [$('.nextBtn'), $('.prevBtn')],
        responsive: {
            0: {
                items: 1,
                stagePadding: 40
            },
            600: {
                items: 1,
                stagePadding: 50
            },
            1000: {
                items: 1,
                stagePadding: 150
            }
        }
    });


    // Testimonials OWL 
    $('.owlTestimonial').owlCarousel({
        rtl: rtlVal,
        margin: 0,
        autoplay: true,
        loop: false,
        nav: false,
        dots: true,
        center: false,
        autoplaySpeed: 2000,
        autoplayTimeout: 2000,
        smartSpeed: 2000,
        navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    // Clients OWL 
    $('.owlClients').owlCarousel({
        rtl: rtlVal,
        margin: 20,
        autoplay: true,
        loop: true,
        nav: true,
        dots: false,
        center: false,
        autoplaySpeed: 2000,
        autoplayTimeout: 2000,
        smartSpeed: 2000,
        navText: [$('.next'), $('.prev')],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    // Collapse 
    $('.colapseHead').on('click', function () {
        let collapseBody = $(this).next('.colapseBody');

        if ($(collapseBody).css('display') !== 'none') {
            $('.colapseBody').slideUp();
        } else {
            $('.colapseBody').slideUp();
            $(collapseBody).slideDown();
        }
    });

    // Tabs 
    $('.tabsList a').on('click', function (e) {
        e.preventDefault();
        $('.tabsList a').removeClass('active');
        $(this).addClass('active');

        var itemId = $(this).attr("href");
        $('.tabContent').removeClass('show');
        $(itemId).addClass('show');
    });

    // Back To Top 
    $('.backToTop').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 4000);
        return false;
    });

    // Loader 
    var width = 100,
        perfData = window.performance.timing, // The PerformanceTiming interface represents timing-related performance information for the given page.
        EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
        time = parseInt((EstimatedTime / 1000) % 60) * 100;

    // Loadbar Animation
    $('.progress-bar').animate({
        width: width + "%"
    }, time);

    // Percentage Increment Animation
    var PercentageID = $('#precent'),
        start = 0,
        end = 100,
        durataion = time;
    animateValue(PercentageID, start, end, durataion);

    function animateValue(id, start, end, duration) {
        var range = end - start,
            current = start,
            increment = end > start ? 1 : -1,
            stepTime = Math.abs(Math.floor(duration / range)),
            obj = $(id);

        var timer = setInterval(function () {
            current += increment;
            $(obj).text(current + "%");
            if (current == end) {
                clearInterval(timer);
            }
        }, stepTime);
    }

    // Fading Out Loadbar on Finised
    setTimeout(function () {
        $('.loader').fadeOut(300);
        $('.loader').remove();
        $('header').removeClass('animated');
        $('body').removeClass('stopScroll');
    }, time);


    // iniat WOW Js
    new WOW().init();

})(jQuery);

