import { useEffect } from "react";
import { useState } from "react"

function Comp(props){

return<div>
<button onClick={()=>{props.toggleBoxes()}}>{props.ShowBox?'Hide Box':'Show Box'}</button>
<div className={props.ShowBox?'box':'box hidden'}></div>
</div>
}

export default Comp