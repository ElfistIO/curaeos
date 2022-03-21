let headerItem = document.getElementById('header_menu');
let headerlist = document.querySelector('.header__list');
const sliderContainer = document.querySelector('.slider__row');
const sliders = sliderContainer.querySelectorAll('.slider__slide');
const arrowLeft = document.querySelector('._arrow_left');
const arrowRight = document.querySelector('._arrow_right');

headerItem.addEventListener('click', () => {
    headerlist.classList.toggle('display-block');
})

arrowLeft.addEventListener('click', (evt) => {
    evt.preventDefault();

    sliders[0].style.marginRight = (-100) + '%';
});

arrowRight.addEventListener('click', (evt) => {
    evt.preventDefault();

    sliders[0].style.marginRight = (100) + '%';
});