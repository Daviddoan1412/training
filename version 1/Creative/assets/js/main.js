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
    /* === Slide_brand ==== */
    $('.brand_content').owlCarousel({
        autoplay: true,
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
    /* fancy box */
    $('[data-fancybox="slide"]').fancybox();
});