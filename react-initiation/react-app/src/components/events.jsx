export default function EventsBoutton() {
    function ButtonClick() {
        alert("Manger c'est la vie")
        
       
    }

    function ButtonMang() {
        alert("dormir fait du bien")
    }

    function ButtonDord() {
        alert("etudier permet d'avoir une avenir propre ou pas ")

    }

    return(
        <div>
            <button onClick={() =>
            ButtonClick()}>Manger</button>
            <button onClick={() =>
            ButtonMang()}>Dormir</button>
            <button onClick={() =>
            ButtonDord()}>Etudier</button>
        </div>
    )
}