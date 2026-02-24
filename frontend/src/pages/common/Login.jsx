import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../Redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Login = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {role,error} = useSelector((state)=>state.auth)

  const [email,setEmail] = useState()
  const [password,setPassword] = useState()


  const handleSubmit = async (e)=>{
    e.preventDefault();
    dispatch(loginUser({email,password}))
  }

  useEffect(()=>{
    if (role === "patient") navigate("/patient");
    if (role === "doctor") navigate("/doctor");
    if (role === "admin") navigate("/admin");
  },[role,navigate])

  return (
    <div className="min-h-screen grid md:grid-cols-2 bg-gray-100">

      {/* Left Side */}
      <div className="hidden md:flex items-center justify-center bg-blue-600 text-white p-10">
        <div>
          <h1 className="text-4xl font-bold mb-4">Welcome Back</h1>
          <p className="text-lg opacity-90">
            Login to manage your appointments and health records.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center justify-center p-6">
        <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">

          <h2 className="text-2xl font-semibold mb-6 text-center">
            Patient Login
          </h2>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-1 border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                required
                onChange={(e)=>{setEmail(e.target.value)}}
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full mt-1 border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                required
                onChange={(e)=>{setPassword(e.target.value)}}
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}

            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember me
              </label>
              <Link to="/forgot-password" className="text-blue-500">
                Forgot Password?
              </Link>
            </div>

            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              Login
            </button>
          </form>

          <p className="text-center text-sm mt-6">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 font-medium">
              Sign up
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Login;
