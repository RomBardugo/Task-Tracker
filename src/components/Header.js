import Button from "./Button"
import PropTypes from 'prop-types'


const Header = ({title, onAdd, showAdd}) => {

    const onClick = () => {onAdd()}

  return (
    <header className="header">
        <h1>{title}</h1>
        <Button text={showAdd ? "Close" : "Add"} color={showAdd ? "red" : "green"} onClick={onClick}/>
    
    </header>
  )
}

Header.defaultProps = {
    title: "Task Tracker",
}

Header.propTypes = {
    title: PropTypes.string
}




export default Header