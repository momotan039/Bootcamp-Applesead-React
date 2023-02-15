import "./SelectOrder.css"
import CardOrder from "./CardOrder"
import { useState } from "react"
import Topping from "./Topping"
function SelectOrder(props) {
    let [selectedToppings,setSelectedToppings]=useState([])
    const handelSelectedToppings = (topping) => {
        if (selectedToppings.length === 5) {
            alert("you add up to 5 toppings , you reach to the maximum possible!!")
            return
        }

        if (selectedToppings.includes(topping)) {
            alert("this topping already selected")
            return
        }

        setSelectedToppings([...selectedToppings,topping])
    }
    return (
        <>
        <h1>Ninja Turtles</h1>
        <h2>Order Pizza with the turtles</h2>
            <div className="order">
                {
                    props.turtles.map((t, i) => {
                        return <CardOrder selectOrder={handelSelectedToppings} turtle={t} key={i} />
                    })
                }

            </div>
            <div className="selected-toppings-container">
                     {
                      selectedToppings.map((t, i) => {
                        return <Topping key={i} topping={t} />
                    })
                     }  
            </div>
        </>
    )

}

export default SelectOrder