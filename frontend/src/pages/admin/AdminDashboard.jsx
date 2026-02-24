import React from "react";
import { useSelector } from "react-redux";



const AdminDashboard = () => {

    const { doctors } = useSelector(state => state.doctors);

  return (
    <div className="min-h-screen bg-gray-100">

      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Admin Dashboard
          </h1>
          <p className="text-gray-500 mt-1">
            Overview of hospital system statistics
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Total Doctors Card */}
          <div className="bg-white rounded-xl shadow-md p-6 flex items-center justify-between hover:shadow-lg transition">
            <div>
              <p className="text-gray-500 text-sm">Total Doctors</p>
              <h2 className="text-3xl font-bold text-gray-800 mt-2">
                {doctors.length}
              </h2>
            </div>

            <div className="bg-blue-100 p-4 rounded-full">
              <i className="fa-solid fa-user-doctor text-blue-600 text-2xl"></i>
            </div>
          </div>

          {/* Total Appointments Card */}
          <div className="bg-white rounded-xl shadow-md p-6 flex items-center justify-between hover:shadow-lg transition">
            <div>
              <p className="text-gray-500 text-sm">Total Appointments</p>
              <h2 className="text-3xl font-bold text-gray-800 mt-2">
                25
              </h2>
            </div>

            <div className="bg-green-100 p-4 rounded-full">
              <i className="fa-solid fa-calendar-check text-green-600 text-2xl"></i>
            </div>
          </div>

        </div>

        {/* Optional: Recent Activity Section */}
        <div className="mt-10 bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Recent Activity
          </h2>

          <div className="text-gray-500 text-sm">
            No recent activity available.
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;
