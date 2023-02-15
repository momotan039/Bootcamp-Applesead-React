function CardOrder(props){
return (
   <>
    <div className="Card">
        <h2>{props.turtle.name}</h2>
        <img src={props.turtle.img} />
        <h2>Toppings:</h2>
        <div className="topping-container">
        {
            props.turtle.pizzaToppings.map((pt,i)=>{
                return <span key={i} onClick={()=>props.selectOrder(pt)} className="topping">{pt.name}</span>
            })
        }
        </div>
    </div>
   </>
)
}

export default CardOrder