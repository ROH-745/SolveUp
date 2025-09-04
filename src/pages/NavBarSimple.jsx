
import { Link } from "react-router-dom";
import "../Style/NavBarSimple.css";

function NavBarSimple() {
  return (
    <div className="navbar-simple">
      <Link to="/">
        <button className="navbar-button">Back</button>
      </Link>
      <h3 className="navbar-title">SolveUp</h3>
    </div>
  );
}

export default NavBarSimple;
