import Balllon from "./Ballon"

function Child(props){
    return(
        <div>
            <h3>{props.kid.name}</h3>
            <Balllon color={props.kid.color} />
        </div>
    )
}

export default Child