import React from 'react';
import Button from './button';

const Table = ({ data, onEdit, onDelete }) => {
  return (
    <table class="min-w-full table-auto">
      <thead>
        <tr class="bg-gray-200">
          <th class="px-4 py-2">No</th>
          <th class="px-4 py-2">Nama</th>
          <th class="px-4 py-2">NIM</th>
          <th class="px-4 py-2">Aksi</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={item.id}>
            <td class="border px-4 py-2">{index + 1}</td>
            <td class="border px-4 py-2">{item.nama}</td>
            <td class="border px-4 py-2">{item.nim}</td>
            <td class="border px-4 py-2">
              <Button
                style="warning"
                text="Edit"
                onClick={() => onEdit(item)}
                class="mx-1"
              />
              <Button
                style="danger"
                text="Hapus"
                onClick={() => onDelete(item.id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;