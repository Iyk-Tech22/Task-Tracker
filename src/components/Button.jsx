import PropsTypes from "prop-types"

const Button = ({color, text, onClick}) => {
    return (
        <button
        onClick={onClick} 
        style={{ backgroundColor:color }} 
        className="btn">
            {text}
        </button>
    )
}

// PROPSTYPE
Button.propsTypes = {
    color: PropsTypes.string,
    text : PropsTypes.string,
    onClick: PropsTypes.func,
}
export default Button