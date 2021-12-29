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

function functionScroll() {
    var section = document.querySelectorAll(".section"),
        sections = {},
        i = 0;

    Array.prototype.forEach.call(section, function(e) {
        sections[e.id] = e.offsetTop;
    });
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

// A $( document ).ready() block.
$(document).ready(function(e) {
    $('.portfolio__info-content').click(function() {
        var imageItem = $(this).children('.portfolio_image').attr("src");
        console.log(imageItem);
        var imageModal = $('#image__modal');
        console.log(imageModal);
        imageModal.attr('src', imageItem)
    })
});

// // Get DOM Elements
// const modal = document.querySelector('#my-modal');
// const closeBtn = document.querySelectorAll('.closes');
// const items = document.querySelectorAll('.item');
// const listModal = document.querySelectorAll('.modal-content');
// // Events

// closeBtn.forEach((btn) => {
//     btn.addEventListener('click', closeModal);
// })
// window.addEventListener('click', outsideClick);
// items.forEach((item, index) => {

//         item.addEventListener('click', () => openModal(index));
//     })
//     // Open
// function openModal(index) {
//     modal.style.display = 'block';
//     const modalContent = document.getElementById(`modal_${index+1}`);
//     modalContent.style.display = 'block'
//     console.log("Ok");
// }

// // Close
// function closeModal() {
//     modal.style.display = 'none';
//     for (let i = 0; i < listModal.length; i++) {
//         listModal[i].style.display = 'none';
//     }
// }

// // Close If Outside Click
// function outsideClick(e) {
//     if (e.target == modal) {
//         modal.style.display = 'none';
//     }
// }