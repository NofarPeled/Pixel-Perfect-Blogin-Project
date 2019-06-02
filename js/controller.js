'use strict'

function toggleMenu() {
    var elMenu = document.querySelector('.main-nav');
    if (elMenu.classList.contains('hide')) {
        elMenu.classList.remove('hide')
    } else {
        elMenu.classList.add('hide')
    }
}

function toggleModal() {
    var elModal = document.querySelector('.modal');
    if (elModal.classList.contains('hide')){
        elModal.classList.remove('hide')
    } else {
        elModal.classList.add('hide')
    }
}

