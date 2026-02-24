import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link, NavLink, useNavigate} from 'react-router-dom'
import { useLocation } from 'react-router-dom' 

const Navbar = ({role}) => {

  const [menuOpen,setMenuOpen] = useState(false)
 

  const location = useLocation()
  const navigate = useNavigate()

useEffect(() => {
  setMenuOpen(false)
}, [location.pathname])

const menuItems = {
  admin: [
    { name: "Dashboard", path: "/admin" },
    { name: "Manage Doctors", path: "/admin/manageDoctors" },
    { name: "All Appointments", path: "/admin/allAppointments" }
  ],
  doctor: [
    { name: "Dashboard", path: "/doctor"},
    { name: "My Appointments", path: "/doctor/appointments" }
  ],
  patient: [
    { name: "Dashboard", path: "/patient" },
    { name: "Book Appointment", path: "/patient/book" },
    { name: "My Appointments", path: "/patient/appointments" }
  ]
};

const logout = async()=>{
  try {
    const response = await axios.post('/api/logout')
  console.log(response);
  navigate('/')

  } catch (error) {
    console.log(error);
    alert("server Error")
  }
  
}
  return (

 <nav className="bg-[rgb(var(--navbg))] text-white items-center  mx-auto px-4 flex items-center justify-between">
  <div>
    <h1 className='text-[32px] logo-font p-4'>Medicare</h1>
  </div>
  <div className='hidden lg:flex '>
    <ul className="flex items-center">
  {menuItems[role]?.map((item) => (
    <li key={item.path}>
      <NavLink
        to={item.path}
        end
        className={({ isActive }) =>
          `relative inline-block px-5 font-medium ${
            isActive ? "text-orange-400" : "text-white"
          }`
        }
      >
        {item.name}
      </NavLink>
    </li>
  ))}

  {/* Bell */}
  <li>
    <Link className="px-5 font-medium">
      <i className="fa-regular fa-bell"></i>
    </Link>
  </li>

  {/* Profile */}
  <li className="relative group">
    <Link className="px-5 font-medium">
      <i className="fa-solid fa-user"></i>
    </Link>

    <ul className="absolute right-0 top-full mt-2 min-w-[180px] bg-white text-gray-700 rounded-md shadow-lg opacity-0 invisible translate-y-2 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
      <Link className="block px-4 py-2 hover:bg-gray-100">
        Settings
      </Link>
      <div className="block px-4 py-2 hover:bg-gray-100">
        <button onClick={logout}>
        Logout
      </button>
      </div>
    </ul>
  </li>
</ul>

  </div>


    

  <div
  className="lg:hidden border px-4 py-2 rounded-sm cursor-pointer z-50"
  onClick={() => setMenuOpen(true)}
>
  <i className="fa-solid fa-bars text-2xl"></i>
</div>

{menuOpen && (
  <div
    onClick={() => setMenuOpen(false)}
    className="fixed inset-0 backdrop-blur-md bg-opacity-95 z-40 lg:hidden"
  />
)}

<div
  className={`
    fixed top-0 left-0 h-full w-[280px]
    bg-[rgb(var(--navbg))]
    text-white
    z-50
    transform transition-transform duration-300 ease-in-out
    ${menuOpen ? 'translate-x-0' : '-translate-x-full'}
    lg:hidden
  `}
>
  {/* mobile view  */}
<div className="flex flex-col h-full">

  {/* Header */}
  <div className="flex items-center justify-between px-5 py-4 border-b border-white/20">
    <h2 className="text-xl font-semibold">Medicare</h2>
    <button onClick={() => setMenuOpen(false)}>
      <i className="fa-solid fa-xmark text-xl"></i>
    </button>
  </div>

  {/* Menu */}
  <ul className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
    {menuItems[role]?.map((item)=>(
      <div key={item.path}>
        <li>
          <NavLink to={item.path} onClick={() => setMenuOpen(false)} className="block">
            {item.name}
          </NavLink>
        </li>
      </div>
       
    ))}
    <li>
      <NavLink to="/notification" onClick={() => setMenuOpen(false)}>
      Notification
    </NavLink>
    </li>
    
  </ul>

  {/* Footer buttons */}
  <div className="px-5 py-4 border-t border-white/20 flex gap-3">
    <button className="flex-1 border rounded-sm py-2">Settings</button>
    <button className="flex-1 bg-white text-black rounded-sm py-2">
      Logout
    </button>
  </div>

</div>

</div>


  </nav>



  )
}

export default Navbar