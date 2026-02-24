import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctors } from "../Redux/doctorsSlice";

const AdminLayout = ({ children }) => {
  const dispatch = useDispatch();
  const { doctors } = useSelector((state) => state.doctors);

  useEffect(() => {
    if (doctors.length === 0) {
      dispatch(fetchDoctors());
    }
  }, [dispatch, doctors.length]);

  return <>{children}</>;
};

export default AdminLayout;