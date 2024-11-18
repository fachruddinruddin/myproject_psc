// RouteList.jsx
import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import Login from './pages/Auth/Login.jsx'; // Pastikan jalur ini benar

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
    
  }
]);

export default router;