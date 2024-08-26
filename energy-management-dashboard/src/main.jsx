import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.scss'
import Login from './pages/login/Login.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path:'/dashboard',
    element: <Dashboard/>
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
