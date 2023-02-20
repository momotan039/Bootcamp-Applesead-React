import { useEffect, useState } from "react"

function Box({bg,w,h,showTime,hideTime}) {

    let[classEffect,setClassEffect]=useState('')

    useEffect(()=>{
        setTimeout(() => {
           setClassEffect('show') 
        }, showTime??1000);
    },[])

    useEffect(()=>{
        setTimeout(() => {
           setClassEffect('') 
        }, hideTime??4000);
    },[classEffect])

    return <div style={{
        backgroundColor: bg??'black',
        width: w??'100px',
        height: h??'100px'
    }} className={`box ${classEffect}`}>
    </div>
}

export default Box