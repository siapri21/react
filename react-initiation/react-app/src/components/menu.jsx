import mesClasses from "./menu.module.css";
import { useState } from "react";

// Définition du composant Menu
export default function Menu (props) {
  // État local pour suivre la visibilité du menu
  const [menuVisible, setMenuVisible] = useState(false);

//   setmenuVisible prermet de modifie la valeur initial

  // Fonction pour basculer la visibilité du menu
  function toggleMenu () {
    // Inversion de la valeur de menuVisible
    setMenuVisible(!menuVisible);
  };

  return (
    <div className={mesClasses.container}>
            <h1>Titre</h1>

      {/* Bouton pour afficher ou cacher le menu */}
      <button onClick={toggleMenu}>Menu</button>
      {/* Si menuVisible est vrai, afficher le contenu du menu */}
      {menuVisible && (
        <nav >
      
          <ul>
            <li>HOME</li>
            <li>HOME</li>
            <li>HOME</li>
          </ul>
        </nav>
      )}
    </div>
  );
};







// Créez un composant ‘Menu’ contenant un bouton.
// Ajouter un gestionnaire d’événement au bouton de tel sort à afficher ou cacher un menu. 
//Exerice:
// Créer un composant Menu:
    // Recevoir en props children(Element a cacher), titre: tire a afficher.
    // Afficher le titre dans un h3
    // Créer une var d'état initialiser a false
    // Utiliser un op ternaire pour afficher ou cacher les children suivant l'etat de variable
    // Ajouter un bouton, quand on clique dessus, il va inverser la variable d'état.