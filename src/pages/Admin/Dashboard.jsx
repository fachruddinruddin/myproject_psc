import React, { useEffect, useState } from 'react';
import Card from '@/components/Card';
import { FaUserGraduate, FaBookOpen, FaCog } from 'react-icons/fa';

const Dashboard = () => {
  const [mahasiswaCount, setMahasiswaCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the count of Mahasiswa from your API
    const fetchMahasiswaCount = async () => {
      try {
        const response = await fetch('/api/mahasiswa/count'); // Replace with your API endpoint
        const data = await response.json();
        setMahasiswaCount(data.count);
      } catch (error) {
        console.error('Error fetching Mahasiswa count:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMahasiswaCount();
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Mahasiswa Count Card */}
        <Card 
          title="Total Mahasiswa" 
          count={mahasiswaCount} 
          icon={<FaUserGraduate />} 
        />
        
        {/* Example of other cards */}
        <Card 
          title="Total Courses" 
          count={12} 
          icon={<FaBookOpen />} 
        />
        <Card 
          title="Settings" 
          count="5 Active" 
          icon={<FaCog />} 
        />
      </div>
    </div>
  );
};

export default Dashboard;
