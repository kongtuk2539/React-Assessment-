import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
//component
import Home from './component/Home.jsx'
import User from './component/User.jsx'
import Admin from './component/Admin.jsx'
import Owner from './component/Owner.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    exact: true
  },
  {
    path: '/owner',
    element: <Owner />,
    exact: true
  },
  {
    path: '/user',
    element: <User />,
    exact: true
  },
  {
    path: '/admin',
    element: <Admin />,
    exact: true
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)
