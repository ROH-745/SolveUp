

import { Link } from 'react-router-dom'
import NavBarSimple from './NavBarSimple'
import '../Style/HomePage.css'

function HomePage() {
  return (
    <div>
      <NavBarSimple />

      <div className="home-container">
        <h1 className="home-title">📘 SolveUp</h1>
        <p className="home-subtitle">Your personal exam practice companion.</p>
        <Link to="/upload">
          <button className="home-button">Go to Upload Page</button>
        </Link>
      </div>
    </div>
  )
}

export default HomePage
