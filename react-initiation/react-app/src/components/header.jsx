import mesClasses from './Header.module.css';

export default function Header() {

    return(
      <header className={mesClasses.container}>
        <h1 className="titre">Bonjour je suis le cours de react</h1>
        <p className="texte">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatum, perferendis et voluptates aliquam nesciunt exercitationem sint a harum recusandae itaque obcaecati adipisci nobis, soluta odit reprehenderit similique nisi nostrum.</p>
        <img  className={mesClasses.images} src="/fond.jpg" alt="" />
        <button className= {mesClasses.button}>Valider</button>

        <div className= {mesClasses.square}></div>
      </header>
    );
}


/*Créer un composant ‘Header’ contenant un titre, une description, une image et un bouton.
Styliser le composant en utilisant les module CSS, de manière à qu’il soit responsive.
Ajouter le header dans App.js, pour l’afficher. */ 