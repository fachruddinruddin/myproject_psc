import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import Login from './pages/Auth/Login.jsx';
import Register from './pages/Auth/Register.jsx'; // Make sure to import Register

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
]);

export default RouteList;
