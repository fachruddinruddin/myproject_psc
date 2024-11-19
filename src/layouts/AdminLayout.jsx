import React from 'react';
import { Outlet } from 'react-router-dom';
import Button from '../components/button';
import Sidebar from '../components/Sidebar'; // Import Sidebar

const AdminLayout = () => {
  return (
    <div className="flex flex-row min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        <header className="bg-white shadow p-4 flex justify-end">
          <Button className="primary" text="Logout" onClick={() => { window.location.href = '/login'; }} />
        </header>

        <main className="flex-grow bg-blue-50 p-4">
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
