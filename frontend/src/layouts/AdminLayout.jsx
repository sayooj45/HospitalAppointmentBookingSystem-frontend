import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar'
const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
        <Navbar role='admin'/>
        <div className="max-w-7xl mx-auto px-6 py-8">
            <Outlet/>
        </div>
    </div>
  )
}

export default AdminLayout