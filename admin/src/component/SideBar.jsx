import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SideBar = () => {
  const navigate=useNavigate();
  const logout=()=>{
    localStorage.removeItem("token")
navigate("/")
  }
  return (
    <div>
    <div class="sidebar">
        <div class="sidebar-content">
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/doctors">Doctors</Link>
            <Link to="/timing">Timing</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
            <button onClick={logout} className="btn btn-danger">Logout</button>
        </div>
    </div>
    </div>
  )
}

export default SideBar