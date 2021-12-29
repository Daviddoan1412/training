window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop < 40) {
        document.querySelector(".header").style.background = 'none';


    } else {
        document.querySelector(".header").style.backgroundColor = '#fff';
        document.querySelector(".header").style.index = "10000";
    }
}
/* =============== fancy box =============== */
$('[data-fancy-box="image"]').fancybox({
    loop: true
});

/* =========== menuResponsive ============== */
var menuResponsive = {
    init: function() {
        this.toggleMenu()
    },
    toggleMenu: function() {
        var button = document.querySelector('.header__menu-bar');
        var menu = document.querySelector('.header__menu-list');
        button.addEventListener('click', function() {
            menu.classList.toggle('show');
        })
    }
}
menuResponsive.init()
    /* ============ Active ============= */
function functionScroll() {
    var section = document.querySelectorAll(".section"),
        sections = {},
        i = 0;

    Array.prototype.forEach.call(section, function(e) {
        sections[e.id] = e.offsetTop;
    });
    console.log(window.scrollY);
    for (i in sections) {
        if (window.scrollY > 500) {
            if (sections[i] <= window.pageYOffset + 100) {
                if (document.querySelector('.active') !== null) {
                    document.querySelector('.active').classList.remove('active');
                }
                document.querySelector('a[href*=' + i + ']').classList.add('active');
            }
        } else {
            document.querySelector('a[href*=' + i + ']').classList.remove('active');
        }
    }
}

window.addEventListener('scroll', functionScroll);
window.addEventListener('resize', functionScroll);