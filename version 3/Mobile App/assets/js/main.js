var menuResponsive = {
    init: function() {
        this.toggleMenu();
        this.toggleDropdown()
    },
    toggleMenu: function() {
        var button = document.querySelector('.header__menu-bar');
        var menu = document.querySelector('.header__menu-right');
        button.addEventListener('click', function() {
            menu.classList.toggle('show')
        })
    },
    toggleDropdown: function() {
        var button = document.querySelector('.dropdown');
        var dropdown = document.querySelector('.dropdown_menu');
        button.addEventListener('click', function() {
            dropdown.classList.toggle('show')
        })
    }
}
menuResponsive.init()