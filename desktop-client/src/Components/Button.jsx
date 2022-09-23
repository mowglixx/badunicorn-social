import './Button.css'

const Button = (props) => {
    return (
        <button
            className={
                props.type !== 'nav-link'
                    ? `button ${props.type && props.type}`
                    : props.type}
            onClick={props.clickEvent}
            title={props.title && props.title}
            description={props.description && props.description}
        >
            <div className={'flex-row'}>
                {
                    props.icon &&
                    <div className={'flex-row'} style={{ paddingRight: '1em' }}>
                        {props.icon}
                    </div>
                }
                {
                    props.children &&
                    <div className={'flex-row'} style={{ flexGrow: 1 }}>
                        {props.children}
                    </div>
                }
            </div>
        </button>
    )
}

export default Button