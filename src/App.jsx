import React from "react"; 
import AdminLayout from "./layouts/AdminLayout"; 
import Mahasiswa from "./pages/Admin/Mahasiswa"; 
function App() { 
  return ( 
    <AdminLayout> 
      <Mahasiswa /> 
    </AdminLayout> 
  ); 
} 

export default App;