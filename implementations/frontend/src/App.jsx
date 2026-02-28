import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Cars from './pages/Cars'
import Bookings from './pages/Bookings'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/bookings" element={<Bookings />} />
      </Routes>
    </>
  )
}

export default App
