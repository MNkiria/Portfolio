const navEl = document.querrySelector('.nav');
const hamburgerEl = document.querrySelector('.hamburger');

hamburgerEl.addEventListener('click', () => {
    navEl.classList.add("nav--open")
});