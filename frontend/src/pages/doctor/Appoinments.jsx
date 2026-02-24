import React from "react";

const Appointments = () => {
  const appointments = [
    {
      id: 1,
      patient: "John Smith",
      date: "2026-02-14",
      time: "10:30 AM",
      symptoms: "Fever, Cough",
      status: "Pending",
    },
    {
      id: 2,
      patient: "Emma Wilson",
      date: "2026-02-14",
      time: "12:00 PM",
      symptoms: "Headache",
      status: "Approved",
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-600";
      case "Approved":
        return "bg-blue-100 text-blue-600";
      case "Completed":
        return "bg-green-100 text-green-600";
      case "Cancelled":
        return "bg-red-100 text-red-600";
      default:
        return "";
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">My Appointments</h2>
        <input
          type="text"
          placeholder="Search patient..."
          className="border px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-600 text-sm uppercase">
              <th className="p-3">Patient</th>
              <th className="p-3">Date</th>
              <th className="p-3">Time</th>
              <th className="p-3">Symptoms</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {appointments.map((app) => (
              <tr
                key={app.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="p-3 font-medium">{app.patient}</td>
                <td className="p-3">{app.date}</td>
                <td className="p-3">{app.time}</td>
                <td className="p-3">{app.symptoms}</td>

                <td className="p-3">
                  <span
                    className={`px-3 py-1 text-sm rounded-full ${getStatusStyle(
                      app.status
                    )}`}
                  >
                    {app.status}
                  </span>
                </td>

                <td className="p-3 space-x-2">
                  <button className="px-3 py-1 text-sm bg-green-500 text-white rounded-md hover:bg-green-600">
                    Approve
                  </button>
                  <button className="px-3 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600">
                    Reject
                  </button>
                  <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600">
                    Complete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Appointments;
