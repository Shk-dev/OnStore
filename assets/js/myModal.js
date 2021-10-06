let doc = document,
    buttons = doc.querySelectorAll('#btn'),
    modal = doc.querySelector('.modal'),
    bg = doc.querySelector('.bg'),
    hidden = doc.querySelector('html');

for (let button of buttons) {
    button.addEventListener('click', () => {
        modal.classList.toggle('active');
        bg.classList.toggle('modalbg');
        hidden.classList.toggle('modal__active');
    })
}

bg.addEventListener('click', () => {
    modal.classList.remove('active');
    bg.classList.remove('modalbg');
    hidden.classList.remove('modal__active');
})