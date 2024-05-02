export default function Player() {
    const score = 600;
    return (
        <p style={{color: score>= 500 ? "green" : "red"}}>
            {score >500 ? 'vainqueur' : 'Perdant'} - {score} 
        </p>

    );
}