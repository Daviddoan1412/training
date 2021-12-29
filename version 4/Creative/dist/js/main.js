/* ================ Call owl carousel ================ */
$(document).ready(function() {
    /* ==== Slider_content === */
    $('.slider__content').owlCarousel({
        center: true,
        loop: true,
        margin: 100,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
    /* ==== Document_content === */
    $('.document__content').owlCarousel({
        loop: false,
        margin: 10,
        responsive: {
            0: {
                items: 1,
                dots: true,
                autoplay: true
            },
            600: {
                items: 2,
                dots: true,
                autoplay: true
            },
            1000: {
                items: 3
            }
        }
    });
    /* === Slide_brand ==== */
    $('.brand_content').owlCarousel({
        autoplay: true,
        loop: true,
        margin: 10,
        nav: false,
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
    /* fancy box */
    $('[data-fancybox="slide"]').fancybox();
});

/* =============== Menu responsive =============== */
var menuResponsive = {
    init: function() {
        this.toggleMenu();
        this.dropdownMenu()
    },
    toggleMenu: function() {
        var button = document.querySelector('.header__menu-bar');
        var menu = document.querySelector('.header__menu-list');
        button.addEventListener('click', function() {
            menu.classList.toggle('show')
        })
    },
    dropdownMenu: function() {
        var menuItems = document.querySelectorAll('.list__items');
        menuItems.forEach(function(menuItem) {
            menuItem.addEventListener('click', function() {
                var dropdown = this.querySelector('.box');
                console.log(dropdown);
                dropdown.classList.toggle('show')
            })
        })
    }
}
menuResponsive.init()
    /* ================== Scroll menu ================= */
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.header').outerHeight();
$(window).scroll(function(event) {
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 500);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('.header').css('top', '-100px');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('.header').css('top', '0');
            $('.header').css('backgroundColor', 'white');
            $('.link_item').css('color', 'black');
            $('.link').css('color', 'black');
            $('.header__menu-logo').css('color', 'black');
            $('.bar').css('color', 'black');
        }
    }

    lastScrollTop = st;
    if (lastScrollTop < 50) {
        $('.header').css('background', 'none');
        $('.link_item').css('color', 'white');
        $('.header__menu-logo').css('color', 'white');
        $(' .link').css('color', 'white');
        $('.bar').css('color', 'white');
    }
}
/* =========== wow js =============== */
new WOW().init();