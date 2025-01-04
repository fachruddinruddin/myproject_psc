import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import Button from "@/components/Button";
import Table from "@/components/Table";

const Modal = ({ onClose, onSubmit, mahasiswa }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h3 className="text-lg font-bold mb-4">
          {mahasiswa ? "Edit Mahasiswa" : "Tambah Mahasiswa"}
        </h3>
        <form onSubmit={onSubmit}>
          <input type="hidden" name="id" defaultValue={mahasiswa?.id || ""} />
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Nama:
            </label>
            <input
              type="text"
              name="nama"
              defaultValue={mahasiswa?.nama || ""}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              NIM:
            </label>
            <input
              type="text"
              name="nim"
              defaultValue={mahasiswa?.nim || ""}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Alamat:
            </label>
            <input
              type="text"
              name="alamat"
              defaultValue={mahasiswa?.alamat || ""}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Umur:
            </label>
            <input
              type="number"
              name="umur"
              defaultValue={mahasiswa?.umur || ""}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Program Studi ID:
            </label>
            <input
              type="text"
              name="progdi_id"
              defaultValue={mahasiswa?.progdi_id || ""}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="flex justify-end">
            <Button
              style="danger"
              text="Batal"
              onClick={(e) => {
                e.preventDefault();
                onClose();
              }}
              className="mr-2"
            />
            <Button style="primary" text="Simpan" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

const Mahasiswa = () => {
  const [mahasiswaData, setMahasiswaData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentMahasiswa, setCurrentMahasiswa] = useState(null);
  const toggleModal = () => setModalVisible((prev) => !prev);

  // Ambil token dari localStorage
  const token = localStorage.getItem("auth_token");

  // Jika token tidak ada, tampilkan pesan error
  if (!token) {
    Swal.fire(
      "Error",
      "Token tidak ditemukan. Silakan login terlebih dahulu.",
      "error"
    );
    return null;
  }

  // Fetch Mahasiswa Data
  useEffect(() => {
    const fetchMahasiswaData = async () => {
      try {
        const response = await axios.get(
          "http://demo-api.syaifur.io/api/mahasiswa",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setMahasiswaData(response.data.data); 
      } catch (error) {
        Swal.fire("Error", "Gagal mengambil data mahasiswa", "error");
      }
    };
    fetchMahasiswaData();
  }, [token]);

  // Handle form submit (Create / Update)
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const { id, nama, nim, alamat, umur, progdi_id } = Object.fromEntries(new FormData(e.target));
  
    const url = id
      ? `http://demo-api.syaifur.io/api/mahasiswa/${id}`
      : "http://demo-api.syaifur.io/api/mahasiswa";
    const method = id ? "PUT" : "POST";
  
    try {
      const response = await axios({
        method,
        url,
        data: {
          progdi_id, 
          nama,
          nim,
          alamat,
          umur
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (id) {
        setMahasiswaData((prev) =>
          prev.map((m) => (m.id === Number(id) ? { ...m, nama, nim, alamat, umur, progdi_id } : m))
        );
      } else {
        setMahasiswaData((prev) => [...prev, response.data.data]);
      }

      Swal.fire("Berhasil", `Mahasiswa ${id ? "diupdate" : "ditambahkan"}!`, "success");
      toggleModal(); 
    } catch (error) {
      console.log(error.response);
      Swal.fire("Error", error.response?.data?.message || "Gagal menyimpan data mahasiswa", "error");
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = await Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Data mahasiswa ini akan dihapus.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Hapus",
      cancelButtonText: "Batal",
    });

    if (confirmDelete.isConfirmed) {
      try {
        await axios.delete(`http://demo-api.syaifur.io/api/mahasiswa/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Update state setelah berhasil menghapus
        setMahasiswaData((prev) =>
          prev.filter((mahasiswa) => mahasiswa.id !== id)
        );

        Swal.fire("Berhasil", "Mahasiswa berhasil dihapus!", "success");
      } catch (error) {
        Swal.fire("Error", "Gagal menghapus data mahasiswa", "error");
      }
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div>
        {modalVisible && (
          <Modal
            onClose={toggleModal}
            onSubmit={handleFormSubmit}
            mahasiswa={currentMahasiswa}
          />
        )}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Daftar Mahasiswa</h1>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => {
                setCurrentMahasiswa(null);
                toggleModal();
              }}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Tambah Mahasiswa
            </button>
          </div>
        </div>
        <Table
          data={mahasiswaData}
          onEdit={(data) => {
            setCurrentMahasiswa(data);
            toggleModal();
          }}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default Mahasiswa;
