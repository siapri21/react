export default function Hobbies(props) {
    return(
       <div>{props.mesHobbies.map ((element)=>{
        return (
            <div key={element.id}>
                <h2 >{element.titre}</h2>
                <p>{element.exp}</p>
            </div>
        )
       })}</div>
    )
    
}