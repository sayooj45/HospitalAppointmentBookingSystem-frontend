import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const PatientSignup = () => {

  const [fullName,setFullName]= useState("")
  const [email,setEmail]= useState("")
  const [phone,setPhone]= useState("")
  const [password,setPassword]= useState("")
  const [newPassword,setNewpassword] = useState("")

  const navigate = useNavigate()

  const handleSubmit = async(e)=>{
    e.preventDefault()
      console.log(password,newPassword);
      
    if(password !== newPassword){
      alert('password not match')
      console.log('password not match');
      }
      
      try {
      const response = await axios.post('/api/signup',{
        fullName:fullName,
        email:email,
        phone:phone,
        password:password
      })
      console.log(response.data);
      navigate('/')

    } catch (error) {
      console.log(error);
      alert(error.response?.data || "Signup failed")
      
    }
    
  }

  return (
    <div className="min-h-screen grid md:grid-cols-2 bg-gray-100">

      {/* Left Side */}
      <div className="hidden md:flex items-center justify-center bg-green-600 text-white p-10">
        <div>
          <h1 className="text-4xl font-bold mb-4">Join Medicare</h1>
          <p className="text-lg opacity-90">
            Create your account to book appointments easily.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center justify-center p-6">
        <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">

          <h2 className="text-2xl font-semibold mb-6 text-center">
            Patient Signup
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
              onChange={(e)=>setFullName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
              onChange={(e)=>setEmail(e.target.value)}
              required
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
              onChange={(e)=>setPhone(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
              onChange={(e)=>setPassword(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
              onChange={(e)=>setNewpassword(e.target.value)}
              required
            />

            <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
              Create Account
            </button>
          </form>

          <p className="text-center text-sm mt-6">
            Already have an account?{" "}
            <Link to="/" className="text-green-600 font-medium">
              Login
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default PatientSignup;
