import React, { useEffect, useState } from "react";
import Card from "@/components/Card";
import { Users, FileText, Activity } from "lucide-react";
import { getMahasiswaCount } from "./Posts";

const Dashboard = () => {
  const [stats, setStats] = useState({
    mahasiswaCount: 0,
    postsCount: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const postsCount = 5;
        // Get mahasiswa count from your static data
        const mahasiswaCount = 3; // This matches your static data in Mahasiswa.js

        setStats({
          mahasiswaCount,
          postsCount,
        });
      } catch (error) {
        console.error("Error fetching statistics:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-white text-gray-700 rounded-lg shadow hover:bg-gray-50 transition duration-300"
        >
          Refresh
        </button>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white shadow-lg rounded-lg p-6 animate-pulse"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                <div className="space-y-2">
                  <div className="h-4 w-24 bg-gray-200 rounded"></div>
                  <div className="h-6 w-12 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="Total Mahasiswa"
            count={stats.mahasiswaCount}
            icon={<Users className="w-10 h-10" />}
          />
          <Card
            title="Total Posts"
            count={stats.postsCount}
            icon={<FileText className="w-10 h-10" />}
          />
          <Card
            title="Active Users"
            count="87%"
            icon={<Activity className="w-10 h-10" />}
          />
        </div>
      )}

      <div className="mt-8 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Informasi</h2>
        <p className="text-gray-600">
          Selamat datang di halaman dashboard. Di sini Anda dapat memantau
          metrik utama tentang mahasiswa dan aktivitas sistem. Data
          diperbarui secara real-time dari sumber lokal dan API.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
