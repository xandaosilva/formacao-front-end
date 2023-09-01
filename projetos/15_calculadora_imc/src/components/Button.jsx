import './Button.css'

// eslint-disable-next-line react/prop-types
const Button = ({id, text}) => {
  return (
    <button id={id}>{text}</button>
  )
}

export default Button