const humberger = document.getElementById('hamburger')
const menu = document.getElementById('menu')

humberger.addEventListener('click',() => {
    menu.classList.add('active');
    menu.classList.remove('inActive');
})

const close = document.getElementById('closeMenu')
close.addEventListener('click',() =>{
    menu.classList.add('inActive');
    menu.classList.remove('active');
})