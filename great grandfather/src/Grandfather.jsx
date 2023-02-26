import { createContext,useState } from "react";
import Box from "./Box";
import Father from "./Father";
import Son from "./Son";

const main={
    gifts:[],
    update:undefined
}

export const MainContext=createContext(main)

export default function Grandfather() {
    const [gifts, setGifts] = useState([])
  return (
    <MainContext.Provider value={{gifts:gifts,update:setGifts}}>
        <div>
        <h1>Grand Father</h1>
        <Box  color='red' />
        <Father/>
        </div>
    </MainContext.Provider>
  )
}
