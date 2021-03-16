import PropTypes from 'prop-types'

const Button = ({onClick , name , color}) => {
    return (
        <div>
            <button className = 'btn' onClick = {onClick} style = {{backgroundColor:color}}>{name}</button>
        </div>
    )
}

Button.propTypes = {
    onClick: PropTypes.func , 
}

export default Button
