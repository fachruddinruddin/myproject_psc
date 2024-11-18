// RouteList.jsx
import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import Login from './pages/Auth/Login.jsx'; 

const router = createBrowserRouter([
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
  }
]);

export default router;