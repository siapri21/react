import { useState } from "react";

const [valeur , setValeur] = useState("");

export default function AfficheNom () {
    function changeNom(event) {
        setValeur(event.target.value)
        
    }
        return(
          <div>
            <h1>
               {/* {valeur !==""  ? `hello, ${valeur}` : ""}  cest le if de q'uon utilise en react */}
            </h1>
            <h2>{valeur}</h2>
            <input type="text" onChange={(event) => changeNom(event)} />
            
          </div>
        );
    }


// Exercice:
// Créer AfficheNom
// Input pour entrer un valeur
// Utiliser une variable pour stocker les entrées de l'utilisateur
// Afficher la variable dans un titre