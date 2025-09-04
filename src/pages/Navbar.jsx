
import { Link } from "react-router-dom";
import Timer from "./Timer";
import "../Style/Navbar.css";

function NavBar() {
  return (
    <div className="navbar">
      {/* Left: Back + Home */}
      <div className="navbar-left">
        <Link to="/upload">
          <button className="navbar-btn">Back</button>
        </Link>
        <Link to="/">
          <button className="navbar-btn">Home</button>
        </Link>
      </div>

      {/* Center: Title */}
      <h3 className="navbar-title">SolveUp</h3>

      {/* Right: Timer */}
      <div>
        <Timer />
      </div>
    </div>
  );
}

export default NavBar;
