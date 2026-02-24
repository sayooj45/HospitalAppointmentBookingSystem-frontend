import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddDoctor = () => {

    const navigate = useNavigate()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [qualification, setQualification] = useState("");

  const [specialization, setSpecialization] = useState("");
  const [experience, setExperience] = useState("");
  const [fee, setFee] = useState("");
  const [hospital, setHospital] = useState("");

  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [availableDays, setAvailableDays] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
        const response = await axios.post("/api/admin/addDoctor",{
            name,
            email,
            phone,
            qualification,
            specialization,
            experience,
            fee,
            hospital,
            startTime,
            endTime,
            availableDays,
            password
        })
        console.log(response.data);
        navigate("/admin/manageDoctors")
        
    } catch (error) {
        console.log(error);
        alert("Server Error")
        
    }

    
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Add New Doctor
        </h1>
        <p className="text-gray-500 text-sm">
          Fill doctor information and availability
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow p-8 max-w-4xl"
      >
        {/* Basic Info */}
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Basic Information
        </h2>

        <div className="grid md:grid-cols-2 gap-5 mb-8">
  <div>
    <label className="label">Doctor Name</label>
    <input
      type="text"
      className="input"
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
    />
  </div>

  <div>
    <label className="label">Email</label>
    <input
      type="email"
      className="input"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />
  </div>

  <div>
    <label className="label">Phone</label>
    <input
      type="tel"
      className="input"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      required
    />
  </div>

  <div>
    <label className="label">Password</label>
    <input
      type="password"
      className="input"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    />
  </div>

  <div>
    <label className="label">Qualification</label>
    <input
      type="text"
      className="input"
      value={qualification}
      onChange={(e) => setQualification(e.target.value)}
      required
    />
  </div>
</div>


        {/* Divider */}
        <div className="border-t my-6" />

        {/* Professional */}
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Professional Details
        </h2>

        <div className="grid md:grid-cols-2 gap-5 mb-8">
          <div>
            <label className="label">Specialization</label>
            <input
              type="text"
              className="input"
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="label">Experience (years)</label>
            <input
              type="number"
              className="input"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="label">Consultation Fee</label>
            <input
              type="text"
              className="input"
              value={fee}
              onChange={(e) => setFee(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="label">Hospital / Clinic</label>
            <input
              type="text"
              className="input"
              value={hospital}
              onChange={(e) => setHospital(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t my-6" />

        {/* Availability */}
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Availability
        </h2>

        <div className="grid md:grid-cols-3 gap-5 mb-8">
          <div>
            <label className="label">Start Time</label>
            <input
              type="time"
              className="input"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="label">End Time</label>
            <input
              type="time"
              className="input"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="label">Available Days</label>
            <select
              className="input"
              value={availableDays}
              onChange={(e) => setAvailableDays(e.target.value)}
              required
            >
              <option value="">Select</option>
              <option>Mon–Fri</option>
              <option>Mon–Sat</option>
              <option>Weekends</option>
            </select>
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add Doctor
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDoctor;
