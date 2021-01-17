var menuElement = document.querySelector('.bubble-menu'),
openElement = document.querySelector('.bubble-menu .open'),
closeElement = document.querySelector('.bubble-menu .bottom-right');

function open(event) {
menuElement.classList.add('active');
closeElement.addEventListener('click', close);
openElement.removeEventListener('click', open);
}

function close(event) {
menuElement.classList.remove('active');
openElement.addEventListener('click', open);
closeElement.removeEventListener('click', close);
}

openElement.addEventListener('click', open);