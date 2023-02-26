import Son from "./Son";
import { useContext, useEffect } from "react";
import {MainContext} from "./Grandfather"
import Box from "./Box";
export default function Father() {
    const mainContext = useContext(MainContext)

    // useEffect(()=>{
    // mainContext.setArr([1,2,3])
    // },[])

  return (
    <div>
    <h1>Father</h1>
    <Box color='red' />
    <Son/>
    </div>
  )
}
