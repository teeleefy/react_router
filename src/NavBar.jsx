import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <Link to="/coffee" className="NavBar-link">
        Coffee
      </Link>
      <Link to="/soda" className="NavBar-link">
        Soda
      </Link>
      <Link to="/tea" className="NavBar-link">
        Tea
      </Link>
    </nav>
  );
}

export default NavBar;