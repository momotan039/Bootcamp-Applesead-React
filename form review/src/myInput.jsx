import { useState } from "react"

function MYInput(props) {
    let [checked, changeState] = useState(props.checked)

 
    return <div>
        <input
            id={props.id}
            onChange={() => changeState(!checked)}
            type="checkbox"
            checked={checked}
             />
        <label htmlFor={props.id}>{props.label}</label>
        <span> , isChecked:{checked?'yes':'no'}</span>
    </div>
}

export default MYInput