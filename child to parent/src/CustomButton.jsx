function CustomeButton(props) {
    return <>
        <button
            onClick={() => props.setButton(props.color)}
            className={props.color}>
            {props.color}</button>
    </>
}
export default CustomeButton