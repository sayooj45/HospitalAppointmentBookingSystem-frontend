import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AllAppoinments from "./pages/admin/AllAppoinments";
import ManageDoctors from "./pages/admin/ManageDoctors";
import DoctorLayout from "./layouts/DoctorLayout";
import DoctorDashboard from "./pages/doctor/DoctorDashboard";
import Appointments from "./pages/doctor/Appoinments";
import PatientDashboard from "./pages/patient/PatientDashboard";
import PatientLayout from "./layouts/PatientLayout";
import Login from "./pages/common/Login";
import PatientSignup from "./pages/patient/PatientSignUp";
import AddDoctor from "./pages/admin/AddDoctor";

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Login to='/login' replace/>
    },
            {
          path:"/signup",
          element:<PatientSignup/>
        },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          index: true,  
          element: <AdminDashboard />
        },
        {
          path: "/admin/allAppointments",  
          element: <AllAppoinments />
        },
        {
          path: "/admin/manageDoctors",   
          element: <ManageDoctors />
        },
        {
          path:"/admin/addDoctor",
          element:<AddDoctor/>
        }
      ]
    },
    {
      path:"/doctor",
      element:<DoctorLayout/>,
      children:[
        {
          index : true,
          element:<DoctorDashboard/>
        },
        {
          path:"/doctor/appointments",
          element:<Appointments/>
        }
      ]
    },
    {
      path:"/patient",
      element:<PatientLayout/>,
      children:[
        {
          index:true,
          element:<PatientDashboard/>
        },

      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
