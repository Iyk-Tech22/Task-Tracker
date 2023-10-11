import PropTypes from "prop-types"
import Button from "./Button"

const Header = ({title}) => {
   const onClick = e => {
      console.log("click")
   }
   return (
    <header className="header">
      <h1 style={headingStyles}>{title}</h1>
      <Button color="green" text="Add" onClick={onClick} />
    </header>
   )
}
// DEFAULT PROPS
Header.defaultProps = {
   title:"Task Tracker"
}

// PROPS TYPE
Header.propTypes = {
   title:PropTypes.string,
}

// CSS IN JS
const headingStyles = {
   color:"#fff",
   fontWeight:"bold",
   backgroundColor:"black"
}
export default Header;