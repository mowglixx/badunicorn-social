const Button = (props) => {
    return (
        <button
            className={props.type ? `${props.type} button` : 'button'} onClick={props.clickEvent}>
            {props.children}
        </button>
    )
}

export default Button