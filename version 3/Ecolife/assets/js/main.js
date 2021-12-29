/* ================ Call owl carousel ================ */
$(document).ready(function() {
    /* ==== scroll to top then fixed navigation effect ==== */
    $(document).scroll(function() {
        var y = $(this).scrollTop();
        if (y > 100) {
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
        }
    });
    /* ==== Banner_section === */
    $('.banner_section').owlCarousel({
        items: 1,
        lazyLoad: true,
        loop: false,
        margin: 0,
        dots: true,
        autoplay: true
    });
    /* ==== seller_section === */
    $('.seller_section').owlCarousel({
        loop: false,
        margin: 30,
        nav: false,
        dots: false,
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
    /* ==== popular_section === */
    $('.popular_section').owlCarousel({
        loop: false,
        margin: 30,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    /* ==== deal_section === */
    $('.deal-left_section').owlCarousel({
        loop: false,
        margin: 30,
        nav: false,
        dots: false,
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
    /* ==== arrival_section === */
    $('.arrival_section').owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
    /* ==== recent-add_section === */
    $('.recent-add').owlCarousel({
        loop: false,
        margin: 30,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 4
            },
            1000: {
                items: 6
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
});

/* ========== menuResponsive ============ */
var menuResponsive = {
    init: function() {
        this.toggleMenu()
    },
    toggleMenu: function() {
        var button = document.querySelector('.menu_bar');
        var menu = document.querySelector('.header__menu-list');
        button.addEventListener('click', function() {
            menu.classList.toggle('show')
        })
    }
}
menuResponsive.init()
    // button scroll hidden
var buttonScrollTop = {
    init: function() {
        this.scrollTop()
    },
    scrollTop: function() {
        //Get the button
        var mybutton = document.querySelector('.button_bottom');
        // When the user scrolls down 20px from the top of the document, show the button
        window.addEventListener('scroll', scrollFunction);

        function scrollFunction() {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }
        // When the user clicks on the button, scroll to the top of the document
        mybutton.addEventListener('click', (function(e) {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            e.preventDefault()
        }))
    }
}
buttonScrollTop.init()