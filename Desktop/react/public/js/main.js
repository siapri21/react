const buttonNav =document.getElementById('navigation');
const buttonMenuBurger = document.getElementById('menu_Burger');

buttonMenuBurger.addEventListener('click', ()=>{
    buttonNav.classList.toggle('active')
    // toggle permet d'ajouter une classe et de l'enlever apres le clic +
})

// doto list

const button = document.querySelector('.button');

button.addEventListener('click', (e)=>{
    e.preventDefault()
    const buttonInput =document.getElementById('input');
   if (input.value == "") {
    const messageError = document.getElementById('texte');
    messageError.textContent = "champ est vide";
    messageError.style.color = 'red b                                                                                                                                                                                                                                                                      '
        
   }

   else{
    const creationDiv = document.createElement('p');
        creationDiv.textContent=input.value
        
        const dateTache = new Date();
        const datePara = document.createElement('p')
        datePara.textContent= dateTache.toLocaleString()

        const createValider= document.createElement('button');
        createValider.textContent = 'valider';
        createValider.style.background ='green'

        const createSupprime = document.createElement('button')
        createSupprime.textContent = 'supprimer'
        createSupprime.style.background = 'red'

        createSupprime.addEventListener('click',()=>{
            creationDiv.remove()
            datePara.remove()
            createValider.remove()
            createSupprime.remove()
        })

        

        const createPara = document.getElementById('taches');
        createPara.append(creationDiv,datePara,createValider,createSupprime);


        
        
   }


})