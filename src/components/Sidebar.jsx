import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTachometerAlt, FaUserGraduate, FaCog, FaBars } from 'react-icons/fa'; // Importing icons

const Sidebar = () => {
  const location = useLocation(); // To highlight the active link
  const [isOpen, setIsOpen] = useState(false); // State to manage sidebar open/close

  // Sidebar links with icons
  const links = [
    { path: '/admin', label: 'Dashboard', icon: <FaTachometerAlt /> },
    { path: '/admin/mahasiswa', label: 'Mahasiswa', icon: <FaUserGraduate /> },
    { path: '/admin/settings', label: 'Settings', icon: <FaCog /> },
  ];

  return (
    <div>
      <div className="md:hidden p-4 flex justify-between items-center bg-indigo-900 text-white">
        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
          <FaBars />
        </button>
      </div>
      <aside className={`w-64 bg-indigo-900 text-white min-h-screen ${isOpen ? 'block' : 'hidden'} md:block`}>
        <div className="p-4">
          <h2 className="text-2xl font-bold">Admin Panel</h2>
          <nav className="ml-4 mt-5">
            <ul>
              {links.map((link) => (
                <li
                  key={link.path}
                  className={`flex items-center my-3 space-x-3 ${
                    location.pathname === link.path ? 'text-indigo-500' : 'hover:text-indigo-500'
                  }`}
                >
                  <span className="text-xl">{link.icon}</span>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
