import { useEffect, useState } from "react";
import axios from "axios";

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
        <h2 className="text-2xl font-bold text-gray-800">Halaman Mahasiswa</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Tambah
        </button>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      <table className="min-w-full table-auto bg-white shadow rounded-lg">
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


























// import React, { useState } from "react";
// import Swal from "sweetalert2";
// import Button from "@/components/Button";
// import Table from "@/components/Table";
// const Modal = ({ onClose, onSubmit, mahasiswa }) => {
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
//         <h3 className="text-lg font-bold mb-4">
//           {mahasiswa ? "Edit Mahasiswa" : "Tambah Mahasiswa"}
//         </h3>
//         <form onSubmit={onSubmit}>
//           <input
//             type="hidden"
//             name="id"
//             defaultValue={mahasiswa ? mahasiswa.id : ""}
//           />
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2">
//               Nama:
//             </label>
//             <input
//               type="text"
//               name="nama"
//               defaultValue={mahasiswa ? mahasiswa.nama : ""}
//               required
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2">
//               NIM:
//             </label>
//             <input
//               type="text"
//               name="nim"
//               defaultValue={mahasiswa ? mahasiswa.nim : ""}
//               required
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//             />
//           </div>
//           <div className="flex justify-end">
//             <Button
//               style="danger"
//               text="Batal"
//               onClick={onClose}
//               className="mr-2"
//             />
//             <Button style="primary" text="Simpan" type="submit" />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// const Mahasiswa = () => {
//   const [mahasiswaData, setMahasiswaData] = useState([
//     { id: 1, nama: "Muhammad Fachruddin", nim: "A11.2022.14476" },
//     { id: 2, nama: "Johan Ridho", nim: "A11.2022.12345" },
//     { id: 3, nama: "Reza Aufa", nim: "A11.2022.09876" },
//   ]);

//   const [modalVisible, setModalVisible] = useState(false);
//   const [currentMahasiswa, setCurrentMahasiswa] = useState(null);
//   const toggleModal = () => setModalVisible((prev) => !prev);

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     const { id, nama, nim } = Object.fromEntries(new FormData(e.target));
//     const existingMahasiswa = mahasiswaData.find((m) => m.nim === nim);

//     if (existingMahasiswa && existingMahasiswa.id !== Number(id)) {
//       Swal.fire("Gagal", "NIM sudah terdaftar", "error");
//       return;
//     }

//     if (id) {
//       setMahasiswaData((prev) =>
//         prev.map((m) => (m.id === Number(id) ? { ...m, nama, nim } : m))
//       );
//       Swal.fire("Berhasil", "Data mahasiswa berhasil diperbarui", "success");
//     } else {
//       setMahasiswaData((prev) => [...prev, { id: prev.length + 1, nama, nim }]);
//       Swal.fire("Berhasil", "Mahasiswa baru berhasil ditambahkan", "success");
//     }
//     toggleModal();
//   };

//   const handleDelete = (id) => {
//     Swal.fire({
//       title: "Yakin ingin menghapus?",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonText: "Ya",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         setMahasiswaData((prev) => prev.filter((m) => m.id !== id));
//         Swal.fire("Dihapus!", "Mahasiswa telah dihapus.", "success");
//       }
//     });
//   };

//   const handleEdit = (mahasiswa) => {
//     setCurrentMahasiswa(mahasiswa);
//     toggleModal();
//   };

//   return (
//     <div>
//       <div className="p-6 bg-gray-100 min-h-screen">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6">
//         Daftar Mahasiswa
//       </h2>
//       <div className="bg-white p-6 rounded-lg shadow">
//         <Button
//           style="success"
//           text="Tambah Mahasiswa"
//           onClick={toggleModal}
//           className="mb-5"
//         />
//         <Table
//           data={mahasiswaData}
//           onEdit={handleEdit}
//           onDelete={handleDelete}
//         />
//       </div>
//       {modalVisible && (
//         <Modal
//           onClose={toggleModal}
//           onSubmit={handleFormSubmit}
//           mahasiswa={currentMahasiswa}
//         />
//       )}
//     </div>
//     </div>
//   );
// };

// export default Mahasiswa;
