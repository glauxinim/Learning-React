import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "black" : "pink"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// <h1 style={{ color: "red", backgroundColor: "black" }}>{title}</h1> --- css em linha

// CSS em JS
//const headingStyle = {
//  color: "red",
//  backgroundColor: "black"
//}

export default Header;
