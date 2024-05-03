import { useState } from "react"

export default function Formulaire() {
const [nom , setNom] = useState("")

function UserName(name) {
    setNom(name.target.value)
    
}
const [email, setEmail] = useState("")
function getEmail(mail) {
    setEmail(mail.target.value)
    
}

const  [passwords, setPasswords] = useState("")
function Password(param) {
    setPasswords(param.target.value)
    
}

function Display(params) {
    alert(nom + ' ' + email)
    
}
    return (
     <div>
        <h1>Formulaire</h1>
       <form action="">
        <label htmlFor="name">Username:</label>
       <input type="text" placeholder="nom" onChange={(name)=> UserName(name)}/>
       <label htmlFor="email">Email:</label>
       <input type="text" placeholder="email"  onChange={(mail) => getEmail(mail)}/>
       <label htmlFor="password">Mot de Passe:</label>
       <input type="password"  placeholder="mot de pase" onChange={(param) => getEmail(param)}/>
       </form>
       <button onClick={Display}>Valider</button>
       {/* <button onClick={(params) => Display(params)}></button> */}
     </div>

    )
    
}

/*Exercice:
Créer un composant (SigninForm) formulaire qui demande : username, email et password.
Utiliser les variables d’état pour stocker les entrées de l’utilisateur.
Ajouter un bouton qui affiche le ‘username’ et ‘email’ dans une boîte d’alerte*/ 