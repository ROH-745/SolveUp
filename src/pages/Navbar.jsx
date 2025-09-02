import { Link } from "react-router-dom";

function NavBar() {
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
      
      <div style={{ display: "flex", gap: "10px" }}>
        <Link to="/upload">
          <button style={{borderRadius:"3px",border:"1px solid black"}}>Back</button>
        </Link>
        <Link to="/">
          <button style={{borderRadius:"3px",border:"1px solid black"}}>Home</button>
        </Link>
      </div>

    
      <h3 style={{ margin: 0, position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
        SolveUp
      </h3>

      
      <p style={{ margin: 0 }}>⏳ Timer will go here</p>
    </div>
  );
}

export default NavBar;
