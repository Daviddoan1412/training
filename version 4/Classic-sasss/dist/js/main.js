/* ================ Call owl carousel ================ */
$(document).ready(function() {
    /*=== Count_up ===*/
    const counters = document.querySelectorAll('.counter');
    console.log(counters)
    const speed = 2000; // The lower the slower

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            // Lower inc to slow and higher to slow
            const inc = target / speed;
            // Check if target is reached
            if (count < target) {
                // Add inc to count and output in counter
                counter.innerText = Math.ceil(count + inc);
                // Call function every ms
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
    /* === Slide_brand ==== */
    $('.slider_brand').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
    /* === Member_info ==== */
    $('.member_info').owlCarousel({
        items: 1,
        lazyLoad: true,
        loop: true,
        margin: 10,
        autoplay: true,
    });
    /* play video */
    $('[data-fancybox]').fancybox({
        youtube: {}
    });
});

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
            $('.list__items-link').css('color', 'black');
        }
    }

    lastScrollTop = st;
    if (lastScrollTop < 50) {
        $('.header').css('background', 'none');
        $('.list__items-link').css('color', 'white');
    }
}
/* =============== Menu responsive =============== */
var menuResponsive = {
    init: function() {
        this.toggleMenu()
    },
    toggleMenu: function() {
        var button = document.querySelector('.header__menu-bar');
        var menu = document.querySelector('.header__menu-list');
        button.addEventListener('click', function() {
            menu.classList.toggle('show')
        })
    }
}
menuResponsive.init()
    /* =========== wow js =============== */
new WOW().init();