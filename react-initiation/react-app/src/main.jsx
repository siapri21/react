// SPA: Single Page Application: Application a page unique
// SSR: Server Side Rendering

// Librarie qui permet des geréer les etat de notre
import React from "react";
// Rendre l'apllication dans le html et de mettrea jour les bon élement
import ReactDOM from "react-dom/client";

import "./index.css";

// Créer un composant:
// Déclaration d'un fonction qui prend en params un object avec 1 clé: label et retourne JSX
function Bouton({ label }) {
  // Déclaration de variable de type object avec 2 clés: backgroundColor et color
  const monStyle = { backgroundColor: "royalblue", color: "white" };

  // Return Du jsx qui sera rendu en bouton et on a assigné le style: monStyle
  return <button style={monStyle}> {label} </button>;
}

// Créer un composant:
// Déclaration d'un fonction  retourne JSX
function ContactForm() {
  // Déclarer une variable objet 1 clé: label
  const boutonProps = { label: "Valider" };

  return (
    <form>
      <input placeholder="Nom" />
      <input placeholder="age" />
      {Bouton(boutonProps)}
    </form>
  );
}

// Créer un objet user avec deux clé: prenom et nom
const user = {
  prenom: "Siapri",
  age: 12,
};

// Point d'entrée de l'application
// On utilise la librairie ReactDom pour mettre notre application dans la page HTML




// Exercice:
// Créer un composant Titre qui reçoit un parametre de type objet avec la clé text.
function Titre (props){
  // Dans le composant affiché un h1 en utilisant l'objet reçue en props pour le text du titre
  return (
    <h1>{props.text}</h1> 
    // la cle text on lui attribue une variavle apres 
  );
}


// On utilise la librairie ReactDom pour mettre notre application dans la page HTML
ReactDOM.createRoot(document.getElementById("root")).render(
  <div>

     {/* Utiliser la composant dans le render pour l'afficher */}
    {Titre({text: 'premier composant'})}
    {/* {Titre({text: 'premier comjjhjhjposant'})} */}

    {ExerciceBtn({text: "siapri", type: 'danger'})}
    {ExerciceBtn({text: "siapri", type: 'primary'})}
    {ExerciceBtn({text: "siapri", type: 'secondary'})}
  </div>


)


// Exercice 2:
// Créer un composant: Btn: qui recoit en paramètre 2 clé:
// - text: string
// - type: string: "primary", 'secondary', 'danger'.

function ExerciceBtn (obj){
  let monstyleBtn = ''

  if (obj.type == 'primary') {
      monstyleBtn ={backgroundColor: "blue"}
  }else if (obj.type== "secondary") {
    monstyleBtn ={backgroundColor: "white",color:"black"}
  }else if(obj.type =="danger"){
    monstyleBtn ={backgroundColor: "red"}
  }

 // Utiliser des condition/op ternaire/switch case. pour determiner la couleur du bouton:
 // Si type === primary, afficcher le bouton en bleu
 // Si type === secondary, afficcher le bouton en blanc
 // Si type === danger, afficher le bouton en rouge
  return (
  <button style={monstyleBtn}>{obj.text}</button>
  )
}

