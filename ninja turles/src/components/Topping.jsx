function Topping(props) {
    return (
        <>
            <div>
                <h3>{props.topping.name}</h3>
                <img src={props.topping.img} />
            </div>
        </>
    )
}

export default Topping