import React from "react";
import { Link, Outlet } from "react-router-dom"; // Added Outlet import
import Button from "../components/button";

const AdminLayout = () => {
  return (
    <div className="flex flex-row min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-indigo-900 text-white">
        <div className="p-4">
          <h2 className="text-2xl font-bold">Admin Panel</h2>
          <nav className="ml-4 mt-5">
            <ul>
              <li className="hover:text-indigo-500">
                <Link to="/admin">Dashboard</Link>
              </li>
              <li className="hover:text-indigo-500">
                <Link to="/admin/mahasiswa">Mahasiswa</Link>
              </li>
              <li className="hover:text-indigo-500">
                <a href="#settings">Settings</a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        <header className="bg-white shadow p-4 flex justify-end">
          <Button className="primary" text="Logout" />
        </header>

        {/* This is where nested routes will be rendered */}
        <main className="flex-grow bg-blue-50 p-4">
          <Outlet />
        </main>

        <footer className="bg-indigo-900 p-4 text-white text-center">
          &copy; 2024 Admin Panel
        </footer>
      </div>
    </div>
  );
};

export default AdminLayout;
