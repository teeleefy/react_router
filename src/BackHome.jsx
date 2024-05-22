import { Link } from "react-router-dom";
import "./NavBar.css";

function BackHome() {
  return (
    <nav className="NavBar-back">
      <Link to="/" className="NavBar-backlink">
        Back to Vending Machine
      </Link>
    </nav>
  );
}

export default BackHome;