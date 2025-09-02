
import { Link } from 'react-router-dom'
import NavBarSimple from './NavBarSimple'

function HomePage() {
  return (
    <div>
   <NavBarSimple/>
    
    <div style={{ textAlign: "center", marginTop: "300px" }}>
     
       <h1>📘 SolveUp</h1>
      <p>Your personal exam practice companion.</p>
      <Link to="/upload">
        <button>Go to Upload Page</button>
      </Link>
      </div>
      </div>
  )
}

export default HomePage