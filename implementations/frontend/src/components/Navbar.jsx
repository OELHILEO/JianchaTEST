import { Link, useNavigate } from 'react-router-dom'
import { Button } from './ui/button'

function Navbar() {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  const logout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold tracking-tight">
            ✈️ Travel Naja
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/cars" className="text-foreground hover:text-primary transition">
              Cars
            </Link>
            {token ? (
              <>
                <Link to="/bookings" className="text-foreground hover:text-primary transition">
                  My Bookings
                </Link>
                <Button variant="outline" size="sm" onClick={logout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/login" className="h-9 px-3 text-sm inline-flex items-center justify-center hover:bg-accent hover:text-accent-foreground text-foreground transition-colors">
                  Login
                </Link>
                <Button size="sm">
                  <Link to="/register" className="text-primary-foreground">
                    Register
                  </Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
