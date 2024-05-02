import './App.css'
import Player from './components/player'
import Header from './components/header'
import User from './components/user';
import Avatar from './components/avatar';


function App (){
  
  return(
<>


<Player></Player>

  <h1>React Bonjour</h1>
  <Header></Header>
  <User></User>
  
  
  </>

  )
}





/* Créer un composant Player.
Déclarer une constante “score” et lui donner une Valeur aléatoire.
Avant de retourner le JSX dans le composant Player, Vérifier :
Si le score est supérieur à 500, afficher ‘vainqueur’ en vert suivi du ‘score’.
Sinon, afficher ‘Perdant’ en couleur rouge suivi du ‘score’.*/  
export default App
