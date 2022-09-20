const Card = (props) => {
    return (
        <div className="surface">
            <div className="card-body">
                {props.header && <h2 className="card-header">{props.header}</h2>} 
                {props.children}
                {props.footer && <div className="card-footer">{props.footer}</div>} 
            </div>
        </div>
    )
}

export default Card