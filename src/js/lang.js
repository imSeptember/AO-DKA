const select = document.querySelector('select');

function loadContent(lang) {
    if (lang === 'ua') {
        location.href = '/index.html';
    } else {
        location.href = '/en/';
    }
}

document.querySelector('select').addEventListener('change', function () {
    let selectedLang = select.value;
    if (selectedLang !== document.documentElement.lang) {
        loadContent(selectedLang);
    }
});

document
    .querySelector(`option[value='${document.documentElement.lang}']`)
    .setAttribute('selected', true);

// DATE

document.getElementById('currentYear').textContent = new Date().getFullYear();
