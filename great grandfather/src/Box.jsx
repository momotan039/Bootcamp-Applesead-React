import { useContext, useRef } from "react"
import { MainContext } from "./Grandfather"

export default function Box({name,color,arr,pushtoArray}) {
    const mainContext=useContext(MainContext)
    const inputRef=useRef()
    const addItem=()=>{
       const item=inputRef.current.value
       if(!item)
       return
       const items=mainContext.gifts
       mainContext.update([...items,item])
    }
  return (
    <div style={{backgroundColor:color}} className="box">
        <h1>{name}</h1>
        <div className="arr">
           <h2> arr:{mainContext.gifts.join(',')}</h2>
        </div>
        <div className="change">
            <input ref={inputRef} type="text" />
            <button onClick={addItem}>add</button>
        </div>
    </div>
  )
}
