import './Button.css'

// eslint-disable-next-line react/prop-types
const Button = ({id, text, action}) => {
    const handleAction = (e) => {
        action(e);
    }

    return (
        <button onClick={handleAction} id={id}>{text}</button>
    )
}

export default Button