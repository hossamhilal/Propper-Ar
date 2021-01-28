/*global $ */
(function($) {
    "use strict";

    // $(window).on('load', function(){
    //     $('body').addClass('stopScroll');
    //     $('.loader').fadeOut(500, function () {
    //         $(this).remove();
    //         $('body').removeClass('stopScroll');
    //     }); 
    // });

    // OPEN SIDE  MENU 
    $('.menuBtn').on('click', function(){
        $(this).toggleClass('open');
        $('.navMenu').toggleClass('open');
        $('.bodyOverlay').toggleClass('show');  
        setTimeout(function(){
            $('body').toggleClass('stopScroll');
        }, 200); 
    });

    // check If Rtl 
    var rtlVal = false ;    
    $('body').hasClass('ar') ? rtlVal = true : rtlVal = false;
    
    // Header OWL 
    let owlHeader = $('.owlHeader');
    owlHeader.owlCarousel({
        rtl: rtlVal ,
        margin: 0,
        autoplay: true,
        loop: true,
        center: true ,
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

    // Preview Active Image As Bacground
    let ActiveSrc = $('.owlHeader .owl-item.active.center img').attr('src');
    $('.owlHeader').parents('header').css( { 'background' : 'url('+ ActiveSrc +')' , 'background-size': 'cover' });

    owlHeader.on('changed.owl.carousel',function(elem){
        let current = elem.item.index;
        let ActiveSrc = $(elem.target).find(".owl-item").eq(current).find('img').attr('src');
        console.log('Image current is ' + ActiveSrc);
        $('.owlHeader').parents('header').css( { 'background' : 'url('+ ActiveSrc +')' , 'background-size': 'cover' });
    });

    // Gallery OWL 
    $('.owlGallery').owlCarousel({
        rtl: rtlVal ,
        margin: 0,
        autoplay: false,
        loop: false,
        nav: false,
        dots: true,
        center : false ,
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
        rtl: rtlVal ,
        margin: 20,
        autoplay: true,
        loop: true,
        nav: true,
        dots: false,
        center : false ,
        autoplaySpeed : 2000,
        autoplayTimeout : 2000,
        smartSpeed: 2000 ,
        navText: [$('.nextBtn'),$('.prevBtn')],
        responsive: {
            0: {
                items: 1,
                stagePadding: 40
            },
            600: {
                items: 1 ,
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
        rtl: rtlVal ,
        margin: 0,
        autoplay: true,
        loop: false,
        nav: false,
        dots: true,
        center : false ,
        autoplaySpeed : 2000,
        autoplayTimeout : 2000,
        smartSpeed: 2000 ,
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
        rtl: rtlVal ,
        margin: 20,
        autoplay: true,
        loop: true,
        nav: true,
        dots: false,
        center : false ,
        autoplaySpeed : 2000,
        autoplayTimeout : 2000,
        smartSpeed: 2000 ,
        navText: [$('.next'),$('.prev')],
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
    $('.colapseHead').on('click' , function() {
        let collapseBody = $(this).next('.colapseBody');

        if( $(collapseBody).css('display') !== 'none'){
            $('.colapseBody').slideUp();
        } else {
            $('.colapseBody').slideUp();
            $(collapseBody).slideDown();
        }
    });


    // // Upload File 
    // $('.uploadFile').on('change', function(e) {
    //     let fileName = e.target.value.split( '\\' ).pop();
    //     console.log(fileName);
    //     let files = $(this).parent('.uploadBox').prev('.uploadedFiles');
    //     files.append(
    //         '<div class="file">' +
    //             '<h3 class="fileName">' + fileName  + '</h3>' +
    //             '<span class="deleteFile"> <i class="icofont-ui-delete"></i> </span>' +
    //         '</div>'
    //     );               
    // });

    // // Delete File
    // $(document).on('click','.deleteFile' , function(){
    //     $(this).parent('.file').remove();
    // });

    // Tabs 
    $('.tabsList a').on('click' , function(e){
        e.preventDefault();
        $('.tabsList a').removeClass('active');
        $(this).addClass('active');
        
        var itemId = $(this).attr("href"); 
        $('.tabContent').removeClass('show'); 
        $(itemId).addClass('show');
    });

    // Back To Top 
    $('.backToTop').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 4000);
        return false;
    });

    // iniat WOW Js
    // new WOW().init();
   
})(jQuery);

