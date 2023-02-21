import { Link } from "react-router-dom"

function Avatar(props){
return <div className="avatar">
    <h1>Avatar Details</h1>
    <img src={props.s}/>
    <Link to='/avatars'>Go Back</Link>
</div>
}

export default Avatar