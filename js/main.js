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
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
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
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        dots: true,
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });


    // WhatsApp Float — afficher après 3 secondes
    setTimeout(function () {
        $('.whatsapp-float').css('opacity', '1');
    }, 3000);


    // Active nav link selon page courante
    var currentPage = window.location.pathname.split('/').pop();
    $('.navbar-nav .nav-link').each(function () {
        if ($(this).attr('href') === currentPage) {
            $(this).addClass('active');
        }
    });


    // Animation hover sur les mini-service-cards
    $('.mini-service-card').hover(function () {
        $(this).find('i').addClass('fa-bounce');
    }, function () {
        $(this).find('i').removeClass('fa-bounce');
    });

    /**
     * 🚀 PUBLICITÉ ALÉATOIRE (AD POPUP)
     * Système de promotion contextuelle haute performance
     */
    var ads = [
        'IMG-20260314-WA0175.jpg', 'IMG-20260314-WA0176.jpg', 'IMG-20260314-WA0177.jpg',
        'IMG-20260314-WA0178.jpg', 'IMG-20260314-WA0179.jpg', 'IMG-20260314-WA0180.jpg',
        'IMG-20260314-WA0181.jpg', 'IMG-20260314-WA0182.jpg', 'IMG-20260314-WA0183.jpg',
        'IMG-20260314-WA0184.jpg', 'IMG-20260314-WA0185.jpg', 'IMG-20260314-WA0186.jpg',
        'IMG-20260314-WA0187.jpg', 'IMG-20260314-WA0188.jpg', 'IMG-20260314-WA0189.jpg',
        'IMG-20260314-WA0190.jpg', 'IMG-20260314-WA0191.jpg', 'IMG-20260314-WA0192.jpg'
    ];

    function showRandomAd() {
        // Sélection aléatoire
        var randomAd = ads[Math.floor(Math.random() * ads.length)];
        var adPath = 'img/publie/' + randomAd;

        // Création du markup du popup
        var adMarkup = `
            <div class="ad-popup-overlay" id="adPopup">
                <div class="ad-popup-content">
                    <div class="ad-popup-close" id="closeAd"><i class="fa fa-times"></i></div>
                    <img src="${adPath}" alt="Publicité Sam Le Leader DS" class="ad-popup-image">
                    <div class="ad-popup-timer">Fermeture dans <span id="adTimer">5</span>s</div>
                </div>
            </div>
        `;

        $('body').append(adMarkup);

        // Affichage avec un léger délai après le chargement (2s)
        setTimeout(function () {
            $('#adPopup').addClass('show');

            // Compte à rebours
            var timeLeft = 5;
            var countdown = setInterval(function () {
                timeLeft--;
                $('#adTimer').text(timeLeft);
                if (timeLeft <= 0) {
                    clearInterval(countdown);
                    closePopup();
                }
            }, 1000);

            // Fermeture manuelle
            $('#closeAd, #adPopup').on('click', function (e) {
                if (e.target !== this && this.id === 'adPopup') return;
                clearInterval(countdown);
                closePopup();
            });

        }, 2000);
    }

    function closePopup() {
        $('#adPopup').removeClass('show');
        setTimeout(function () {
            $('#adPopup').remove();
        }, 600);
    }

    // Lancer la pub sur l'accueil et sur la page des services
    var isHome = window.location.pathname === '/' || window.location.pathname.endsWith('index.html');
    var isService = window.location.pathname.endsWith('service.html');

    if (isHome || isService) {
        showRandomAd();
    }

    /**
     * Filtre portfolio (page Réalisations / project.html)
     * Filtres : all, info, couture, tourisme, formation
     */
    if (window.location.pathname.endsWith('project.html') && $('.filter-btn').length) {
        $('.filter-btn').on('click', function () {
            var filter = $(this).data('filter');
            $('.filter-btn').removeClass('active btn-primary').addClass('btn-outline-primary');
            $(this).addClass('active btn-primary').removeClass('btn-outline-primary');

            $('.portfolio-section').each(function () {
                var cat = $(this).data('category') || '';
                var show = filter === 'all' || cat.indexOf(filter) !== -1;
                $(this).toggle(show);
            });
        });
    }


})(jQuery);
