let headerItem = document.getElementById('header_menu');
let headerlist = document.querySelector('.header__list');

headerItem.addEventListener('click', () => {
    headerlist.classList.toggle('display-block');
})