import { AiOutlineClose } from "react-icons/ai"
import { MdOutlineDone } from "react-icons/md"
function Todo({ task, deleteMe,changeMe }) {
    return <div className="task">
        {
            task.done ?
                <MdOutlineDone onClick={changeMe} color="green" size={40} />
                :
                <AiOutlineClose onClick={changeMe} color="red" size={40} />
        }
        <h3>{task.value}</h3>
        <button onClick={deleteMe}>delete</button>
    </div>
}

export default Todo