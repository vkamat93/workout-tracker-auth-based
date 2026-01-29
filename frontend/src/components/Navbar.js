import { Link } from 'react-router-dom'
import useLogout from '../pages/useLogout'

const Navbar = () => {
  const { logout } = useLogout()

  const handleClickLogout = () => {
    logout()
  }

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout Buddy</h1>
        </Link>
        <nav>
          <div>
            <button onClick={handleClickLogout}>Log Out</button>
          </div>
          <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign up</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar