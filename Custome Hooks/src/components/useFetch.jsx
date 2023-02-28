import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data,setData]=useState()
    const fetchData=async ()=>{
        const res=await fetch(url).then(res=>res.json())
        setData(res)
    }
    
    useEffect(()=>{
        fetchData()
    },[])

    return data;
}
