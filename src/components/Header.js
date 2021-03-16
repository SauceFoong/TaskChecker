import PropTypes from 'prop-types'
import Button from './Button'
import React , {useState} from 'react'



const Header = ({title ,onAdd , showAdd}) => {
    const [counter, setCount] = useState(0) ; 
    const onClick = () => {setCount(counter+1)}  ; 

    return (
            <header>
                <h1>Task Checker</h1>
                {/* <Button onClick = {onClick} name='Increase Counter' />
                <Button onClick = {onAdd} name={showAdd? 'Close' : 'Show'} color={showAdd? 'red': 'green'}/> */}
            </header>
    )
}


//Set default props properties 
Header.defaultProps = {
    title: 'Mr Foong' , 
}

Header.propTypes = {
    title: PropTypes.string , 
}

// const headingStyle = {
//     color : 'red' , 
//     backgroundColor : 'black',

// }

export default Header
