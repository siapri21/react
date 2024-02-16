section-2 {
    text-align: center; /* Centre le contenu horizontalement */
  }
  
  .circle-container {
    position: relative;
    width: 150px; /* La largeur et la hauteur du cercle, à adapter selon vos besoins */
    height: 150px;
    border-radius: 50%; /* Crée un cercle en utilisant la propriété border-radius */
    background-color: #6f34fe; /* Couleur de fond */
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden; /* Masque le contenu qui dépasse du cercle */
  }
  
  .circle-container::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("images/siap.png") center center no-repeat;
    background-size: cover;
    border-radius: 50%; /* Garde les coins de l'image en forme de cercle pour correspondre au conteneur */
  }
  
  
