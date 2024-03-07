const header = document.querySelector('.navigation');
const headerOffset = header.offsetTop;

window.addEventListener('scroll', function () {
    if (window.scrollY > headerOffset) {
        header.style.top = '0';
    }
});
