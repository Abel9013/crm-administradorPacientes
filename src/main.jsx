import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import NuevoPaciente from './components/pages/NuevoPaciente'
import Index, {loader as pacientesLoader } from './components/pages/Index'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[
      {
        index: true,
        element: <Index />,
        loader: pacientesLoader 
      },
      {
        path: '/pacientes/nuevo',
        element: <NuevoPaciente />
      },
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
