import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import Login from './pages/Auth/Login.jsx';
import Register from './pages/Auth/Register.jsx';
import AdminLayout from './layouts/AdminLayout.jsx';
import Dashboard from './pages/Admin/Dashboard.jsx'; // Ensure Dashboard is imported

const RouteList = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
]);

export default RouteList;
