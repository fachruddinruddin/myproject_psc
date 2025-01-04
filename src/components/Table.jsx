import React from "react";
import Button from "@/components/Button";

const Table = ({ data, onEdit, onDelete }) => {
  if (!data.length) {
    return <div className="text-center text-gray-500">Tidak ada data mahasiswa</div>;
  }

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 border">No</th>
              <th className="px-4 py-2 border">Nama</th>
              <th className="px-4 py-2 border">NIM</th>
              <th className="px-4 py-2 border">Alamat</th>
              <th className="px-4 py-2 border">Umur</th>
              <th className="px-4 py-2 border">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((mahasiswa, index) => (
              <tr key={mahasiswa.id} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="px-4 py-2 border text-center">{index + 1}</td>
                <td className="px-4 py-2 border">{mahasiswa.nama}</td>
                <td className="px-4 py-2 border">{mahasiswa.nim}</td>
                <td className="px-4 py-2 border">{mahasiswa.alamat}</td>
                <td className="px-4 py-2 border text-center">{mahasiswa.umur}</td>
                <td className="px-4 py-2 border text-center">
                  <Button className="my-1 px-2 py-1 text-sm" text="Edit" style="warning" onClick={() => onEdit(mahasiswa)} />
                  <Button className="px-2 py-1 text-sm" text="Hapus" style="danger" onClick={() => onDelete(mahasiswa.id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
