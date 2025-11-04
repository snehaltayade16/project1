const humberger = document.getElementById('hamburger')
const menu = document.getElementById('menu')

humberger.addEventListener('click',() => {
    menu.classList.add('active');
})

const close = document.getElementById('closeMenu')
close.addEventListener('click',() =>{
    menu.classList.remove('active');
})