import React from 'react'
import { createBrowserRouter, RouterProvider} from 'react-router-dom' 
import ReactDOM from 'react-dom/client'
import './index.css'

import Layout from './components/Layout';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[
      {
        index: true,
        element: <Home />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
