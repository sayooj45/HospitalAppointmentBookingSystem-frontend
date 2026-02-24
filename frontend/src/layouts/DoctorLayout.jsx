import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar'
const DoctorLayout = () => {
  return (
    <div className='min-h-screen bg-gray-100'>
        <Navbar role='doctor'/>
        <div className='max-w-7xl mx-auto px-6 py-8'></div>
        <Outlet/>
    </div>
  )
}

export default DoctorLayout