import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const PatientLayout = () => {
  return (
    <div className='min-h-screen bg-gray-100'>
        <Navbar role='patient'/>
        <div className='max-w-7xl mx-auto px-6 py-8'>
            <Outlet/>
        </div>
    </div>
  )
}

export default PatientLayout