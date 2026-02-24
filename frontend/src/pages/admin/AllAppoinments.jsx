import React from "react";


const AllAppointments = () => {
  return (
    <div>

      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          All Appointments
        </h1>
        <p className="text-gray-500 text-sm">
          View and monitor all hospital appointments
        </p>
      </div>

      {/* Filter + Search Section */}
      <div className="bg-white p-4 rounded-xl shadow mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        {/* Status Filters */}
        <div className="flex gap-3 text-sm font-medium">
          <button className="px-4 py-2 rounded-lg bg-blue-600 text-white">
            All
          </button>
          <button className="px-4 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200">
            Pending
          </button>
          <button className="px-4 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200">
            Accepted
          </button>
          <button className="px-4 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200">
            Completed
          </button>
          <button className="px-4 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200">
            Cancelled
          </button>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <input
            type="text"
            placeholder="Search by patient or doctor..."
            className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <i class="fa-solid fa-magnifying-glass absolute left-3 top-3 text-gray-400"></i>
        </div>
      </div>

      {/* Appointments Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full text-left border-collapse">

          {/* Table Head */}
          <thead className="bg-gray-100 text-gray-600 text-sm uppercase">
            <tr>
              <th className="p-4">Patient</th>
              <th className="p-4">Doctor</th>
              <th className="p-4">Date</th>
              <th className="p-4">Time</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="text-gray-700">

            <tr className="border-t hover:bg-gray-50 transition">
              <td className="p-4 font-medium">Rahul Kumar</td>
              <td className="p-4">Dr. John Smith</td>
              <td className="p-4">12 Mar 2026</td>
              <td className="p-4">10:00 AM</td>
              <td className="p-4">
                <span className="px-3 py-1 text-xs font-semibold bg-yellow-100 text-yellow-700 rounded-full">
                  Pending
                </span>
              </td>
            </tr>

            <tr className="border-t hover:bg-gray-50 transition">
              <td className="p-4 font-medium">Anjali Nair</td>
              <td className="p-4">Dr. David Lee</td>
              <td className="p-4">13 Mar 2026</td>
              <td className="p-4">2:30 PM</td>
              <td className="p-4">
                <span className="px-3 py-1 text-xs font-semibold bg-green-100 text-green-700 rounded-full">
                  Completed
                </span>
              </td>
            </tr>

            <tr className="border-t hover:bg-gray-50 transition">
              <td className="p-4 font-medium">Arjun Patel</td>
              <td className="p-4">Dr. Maria Gomez</td>
              <td className="p-4">14 Mar 2026</td>
              <td className="p-4">11:15 AM</td>
              <td className="p-4">
                <span className="px-3 py-1 text-xs font-semibold bg-red-100 text-red-700 rounded-full">
                  Cancelled
                </span>
              </td>
            </tr>

          </tbody>
        </table>
      </div>

    </div>
  );
};

export default AllAppointments;
