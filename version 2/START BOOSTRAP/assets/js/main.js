window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop < 40) {
        document.querySelector(".header").style.background = 'none';


    } else {
        document.querySelector(".header").style.backgroundColor = '#fff';

        document.querySelector(".header").style.index = "10000";
    }
}
/* fancy box */
$('[data-fancy-box="image"]').fancybox({
    loop: true
});