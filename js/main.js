/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Script principal — Sam Le Leader DS
 * @created 2026-02-25
 * @updated 2026-02-25
 * 🌐 nexuspartners.xyz | 📧 daoudaabassichristian@gmail.com
 */
/* ─────────────────────────────────────────────── */
(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();

    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar — visible au scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('bg-white shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('bg-white shadow-sm').css('top', '-150px');
        }
    });

    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1200,
        loop: true,
        dots: true,
        items: 1,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        dots: true,
        loop: true,
        nav: false
    });

    
    // WhatsApp Float — afficher après 3 secondes
    setTimeout(function() {
        $('.whatsapp-float').css('opacity', '1');
    }, 3000);


    // Active nav link selon page courante
    var currentPage = window.location.pathname.split('/').pop();
    $('.navbar-nav .nav-link').each(function() {
        if ($(this).attr('href') === currentPage) {
            $(this).addClass('active');
        }
    });


    // Animation hover sur les mini-service-cards
    $('.mini-service-card').hover(function() {
        $(this).find('i').addClass('fa-bounce');
    }, function() {
        $(this).find('i').removeClass('fa-bounce');
    });

})(jQuery);
