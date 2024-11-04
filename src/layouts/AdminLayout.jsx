import React from "react";
import Button from '../components/button';

const AdminLayout = ({ children }) => {
  return (
    <div class="flex flex-row min-h-screen">
      <aside class="w-64 bg-indigo-900 text-white">
        <div class="p-4">
          <h2 class="text-2xl font-bold">Admin Panel</h2>
          <nav class="ml-4 mt-5">
            <ul>
              <li class="hover:text-indigo-500">
                <a href="#dashboard">Dashboard</a>
              </li>
              <li class="hover:text-indigo-500">
                <a href="#mahasiswa">Mahasiswa</a>
              </li>
              <li class="hover:text-indigo-500">
                <a href="#settings">Settings</a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      <div class="flex flex-1 flex-col">
        <header class="bg-white shadow p-4 flex justify-end">
          <Button style="primary" text="Logout" />
        </header>

        <main class="flex-grow bg-blue-50 p-4">
          {children}
        </main>

        <footer class="bg-indigo-900 p-4 text-white text-center">
          &copy; 2024 Admin Panel
        </footer>
      </div>
    </div>
  );
};

export default AdminLayout;