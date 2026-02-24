import React, { useEffect } from "react";
import {  useSelector } from "react-redux";
import { Link} from "react-router-dom";


const ManageDoctors = () => {


  const {doctors,loading,error} = useSelector((state)=> state.doctors)



  if (loading) return <p>Loading doctors...</p>;
  if (error) return <p>{error}</p>;


  return (
    <div>

      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Manage Doctors
          </h1>
          <p className="text-gray-500 text-sm">
            Add, update or remove doctors from the system
          </p>
        </div>

        <Link className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition" to='/admin/addDoctor'>
          <i className="fa-solid fa-plus"></i>
          Add Doctor
        </Link>
      </div>

      {/* Search Bar */}
      <div className="bg-white p-4 rounded-xl shadow mb-6">
        <input
          type="text"
          placeholder="Search doctor by name or specialization..."
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Doctors Table */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-left border-collapse">

          {/* Table Head */}
          <thead className="bg-gray-100 text-gray-600 text-sm uppercase">
            <tr>
              <th className="p-4">Doctor Name</th>
              <th className="p-4">Specialization</th>
              <th className="p-4">Email</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="text-gray-700">
            {
                doctors.map((doc,index)=>(
            <tr className="border-t hover:bg-gray-50 transition" key={index}>
              
                  
                    <td className="p-4 font-medium">{doc.FullName}</td>
              <td className="p-4">{doc.Specialization}</td>
              <td className="p-4">{doc.Email}</td>

              <td className="p-4">
                <span className="px-3 py-1 text-xs font-semibold bg-green-100 text-green-700 rounded-full">
                  Active
                </span>
              </td>

              <td className="p-4 text-center">
                <div className="flex justify-center gap-4">
                  <button className="text-blue-600 hover:text-blue-800">
                    <i className="fas fa-edit"></i>
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    <i className="fa-solid fa-trash-can"></i>
                  </button>
                </div>
              </td>
                  
              
            </tr>
            ))
              }
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default ManageDoctors;
