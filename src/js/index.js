const header = document.querySelector('.navigation');
const headerOffset = header.offsetTop;

window.addEventListener('scroll', function () {
    if (window.scrollY > headerOffset) {
        header.style.top = '0';
    }
});

const iconMenu = document.querySelector('.menu');
const offScreenMenu = document.querySelector('.off__screen__menu');

iconMenu.addEventListener('click', function (e) {
    iconMenu.classList.toggle('__active');
    offScreenMenu.classList.toggle('__active');
    // menuBody.classList.toggle('__active');
    // if (!popUp.classList.contains('hidden')) {
    //     popUp.classList.toggle('hidden');
    //     closeOverlay();
    //     unlock();
    // }
});
