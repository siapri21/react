const buttonNav =document.getElementById('navigation');
const buttonMenuBurger = document.getElementById('menu_Burger');

buttonMenuBurger.addEventListener('click', ()=>{
    buttonNav.classList.toggle('active')
    // toggle permet d'ajouter une classe et de l'enlever apres le clic +
})