import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Button from "../components/button";
import Sidebar from "../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/AuthSlice";

const AdminLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    //localStorage.removeItem("authToken");
    Swal.fire({
      icon: "success",
      title: "Logout Success",
    });
    navigate("/login");
  };

  return (
    <div className="flex flex-row min-h-screen">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold">Admin Dashboard</h1>
            <p className="text-sm text-gray-600">
              Welcome, {user.name} ({user.email})
            </p>
          </div>
          <Button className="primary" text="Logout" onClick={handleLogout} />
        </header>
        <main className="flex-grow bg-gray-100 p-6">
          <Outlet /> {/* Render nested routes here */}
        </main>
        <footer className="bg-indigo-900 p-4 text-white text-center">
          &copy; 2024 Admin Panel
        </footer>
      </div>
    </div>
  );
};

export default AdminLayout;
