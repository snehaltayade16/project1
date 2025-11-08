console.log('loadd')
const humberger = document.getElementById('hamburger')
const menu = document.getElementById('menu')
const overlay = document.getElementById('overlay')
const a = document.getElementById('a')
const searchInput = document.getElementById('searchInputId')

console.log(searchInput)

humberger.addEventListener('click',() => {
    menu.classList.add('active');
    overlay.classList.add('overlayActive')
})

const close = document.getElementById('closeMenu')
close.addEventListener('click',() =>{
    menu.classList.remove('active');
    overlay.classList.remove('overlayActive')
})

a.addEventListener('click',() => {
    searchInput.classList.toggle('enlarge')
})