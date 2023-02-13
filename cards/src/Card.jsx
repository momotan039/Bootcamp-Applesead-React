function Card(props){
    return <>
    <div className="card">
        <img src={props.img} />
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
    </div>
    </>
}

export default Card