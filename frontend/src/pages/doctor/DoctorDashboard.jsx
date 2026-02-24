import React from "react";
import { FaCalendarCheck, FaClock, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const DoctorDashboard = () => {
  return (
    <div className="p-4">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">
          Doctor Dashboard
        </h1>
        <p className="text-gray-500 text-sm">
          Overview of your appointments and activity
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">

        <div className="bg-white rounded-xl shadow p-6 flex items-center justify-between hover:shadow-lg transition">
          <div>
            <p className="text-gray-500 text-sm">Total Appointments</p>
            <h2 className="text-2xl font-bold text-gray-800 mt-2">48</h2>
          </div>
          <FaCalendarCheck className="text-blue-600 text-2xl" />
        </div>

        <div className="bg-white rounded-xl shadow p-6 flex items-center justify-between hover:shadow-lg transition">
          <div>
            <p className="text-gray-500 text-sm">Pending</p>
            <h2 className="text-2xl font-bold text-yellow-600 mt-2">12</h2>
          </div>
          <FaClock className="text-yellow-500 text-2xl" />
        </div>

        <div className="bg-white rounded-xl shadow p-6 flex items-center justify-between hover:shadow-lg transition">
          <div>
            <p className="text-gray-500 text-sm">Completed</p>
            <h2 className="text-2xl font-bold text-green-600 mt-2">30</h2>
          </div>
          <FaCheckCircle className="text-green-500 text-2xl" />
        </div>

        <div className="bg-white rounded-xl shadow p-6 flex items-center justify-between hover:shadow-lg transition">
          <div>
            <p className="text-gray-500 text-sm">Cancelled</p>
            <h2 className="text-2xl font-bold text-red-600 mt-2">6</h2>
          </div>
          <FaTimesCircle className="text-red-500 text-2xl" />
        </div>

      </div>

      {/* Today's Appointments Section */}
      <div className="bg-white rounded-xl shadow p-6">

        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Today's Appointments
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left">

            <thead className="text-sm text-gray-500 uppercase border-b">
              <tr>
                <th className="py-3">Patient</th>
                <th className="py-3">Time</th>
                <th className="py-3">Reason</th>
                <th className="py-3">Status</th>
              </tr>
            </thead>

            <tbody className="text-gray-700">

              <tr className="border-b hover:bg-gray-50 transition">
                <td className="py-4 font-medium">Rahul Kumar</td>
                <td>10:00 AM</td>
                <td>General Checkup</td>
                <td>
                  <span className="px-3 py-1 text-xs font-semibold bg-yellow-100 text-yellow-700 rounded-full">
                    Pending
                  </span>
                </td>
              </tr>

              <tr className="border-b hover:bg-gray-50 transition">
                <td className="py-4 font-medium">Anjali Nair</td>
                <td>11:30 AM</td>
                <td>Cardiac Consultation</td>
                <td>
                  <span className="px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-700 rounded-full">
                    Accepted
                  </span>
                </td>
              </tr>

            </tbody>

          </table>
        </div>

      </div>

    </div>
  );
};

export default DoctorDashboard;
