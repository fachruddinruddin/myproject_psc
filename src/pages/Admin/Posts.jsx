import { useEffect, useState } from "react";
import axios from "axios";

export const getMahasiswaCount = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data.length;
  } catch (error) {
    throw new Error("Error fetching Mahasiswa count");
  }
};

const Mahasiswa = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({ title: "", body: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        form
      );
      setData([...data, response.data]);
      setForm({ title: "", body: "" });
      setIsModalOpen(false);
    } catch (error) {
      setError("Error saat submit");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(response.data);
        setData(response.data.slice(0, 5));
      } catch (error) {
        setError("Error saat fetch data");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Daftar Posts</h1>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Tambah
          </button>
        </div>
      </div>

      {error && <p className="text-red-500">{error}</p>}
      <div className="bg-white shadow-lg rounded-lg">
        <div className="p-6">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">No</th>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Body</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item.id}>
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{item.title}</td>
                  <td className="border px-4 py-2">{item.body}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Informasi</h2>
        <p className="text-gray-600">
          Halaman ini menampilkan daftar posts yang tersedia. Anda dapat
          menambah, mengedit, atau menghapus data post. Data akan diperbarui
          secara otomatis setelah setiap perubahan.
        </p>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-bold mb-4">Tambah Data</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Title:
                </label>
                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="body"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Body:
                </label>
                <textarea
                  name="body"
                  value={form.body}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mahasiswa;
