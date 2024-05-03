export default function Player() {
    const score = 600;
    return (
        <p style={{color: score>= 500 ? "green" : "red"}}>
            {score >500 ? 'vainqueur' : 'Perdant'} - {score} 
        </p>

    );
}

/* Créer un composant Player.
Déclarer une constante “score” et lui donner une Valeur aléatoire.
Avant de retourner le JSX dans le composant Player, Vérifier :
Si le score est supérieur à 500, afficher ‘vainqueur’ en vert suivi du ‘score’.
Sinon, afficher ‘Perdant’ en couleur rouge suivi du ‘score’.*/  