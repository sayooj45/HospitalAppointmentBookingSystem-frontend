import React from "react";
import { FaCalendarCheck, FaUserMd, FaClock } from "react-icons/fa";

const PatientDashboard = () => {
  const upcomingAppointment = {
    doctor: "Dr. Sarah Johnson",
    date: "2026-02-18",
    time: "11:00 AM",
    department: "Cardiology",
  };

  const recentAppointments = [
    {
      id: 1,
      doctor: "Dr. Michael Lee",
      date: "2026-02-10",
      status: "Completed",
    },
    {
      id: 2,
      doctor: "Dr. Emma Brown",
      date: "2026-02-05",
      status: "Cancelled",
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-600";
      case "Cancelled":
        return "bg-red-100 text-red-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="space-y-6 p-4">

      {/* Welcome */}
      <div className="">
        <h1 className="text-2xl font-semibold">Welcome Back 👋</h1>
        <p className="text-gray-500">Here’s your health overview</p>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm flex items-center gap-4">
          <FaCalendarCheck className="text-blue-500 text-3xl" />
          <div>
            <p className="text-gray-500 text-sm">Total Appointments</p>
            <h3 className="text-xl font-semibold">12</h3>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm flex items-center gap-4">
          <FaUserMd className="text-green-500 text-3xl" />
          <div>
            <p className="text-gray-500 text-sm">Doctors Consulted</p>
            <h3 className="text-xl font-semibold">5</h3>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm flex items-center gap-4">
          <FaClock className="text-orange-500 text-3xl" />
          <div>
            <p className="text-gray-500 text-sm">Upcoming</p>
            <h3 className="text-xl font-semibold">1</h3>
          </div>
        </div>
      </div>

      {/* Upcoming Appointment */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Upcoming Appointment</h2>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div>
            <p className="font-medium">{upcomingAppointment.doctor}</p>
            <p className="text-gray-500 text-sm">
              {upcomingAppointment.department}
            </p>
            <p className="text-gray-500 text-sm">
              {upcomingAppointment.date} at {upcomingAppointment.time}
            </p>
          </div>

          <button className="mt-4 md:mt-0 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            View Details
          </button>
        </div>
      </div>

      {/* Recent Appointments */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Recent Appointments</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-500 text-sm border-b">
                <th className="pb-3">Doctor</th>
                <th className="pb-3">Date</th>
                <th className="pb-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentAppointments.map((app) => (
                <tr key={app.id} className="border-b hover:bg-gray-50">
                  <td className="py-3">{app.doctor}</td>
                  <td className="py-3">{app.date}</td>
                  <td className="py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${getStatusStyle(
                        app.status
                      )}`}
                    >
                      {app.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Action */}
      <div className="text-right">
        <button className="bg-green-500 text-white px-6 py-3 rounded-xl hover:bg-green-600">
          Book New Appointment
        </button>
      </div>

    </div>
  );
};

export default PatientDashboard;
