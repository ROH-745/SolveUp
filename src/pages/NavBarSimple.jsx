import { Link } from "react-router-dom";

function NavBarSimple() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        background: "#00d5ffff",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "60px",
        zIndex: 1000
      }}
    >
      <Link to="/">
        <button style={{ backgroundColor: "blue" }}>Back</button>
      </Link>
      <h3 style={{ margin: 0 }}>SolveUp</h3>
    </div>
  );
}

export default NavBarSimple;
