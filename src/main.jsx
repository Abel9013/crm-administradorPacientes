import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import NuevoPaciente, {action as nuevoPacienteAction} from './components/pages/NuevoPaciente'
import Index, {loader as pacientesLoader } from './components/pages/Index'
import EditarPaciente, { loader as editarClienteLoader, action as editarPacienteAction} from './components/pages/EditarPaciente'
import ErrorPage from './components/ErrorPage'
import { action as eliminarPacienteAction }   from './components/Paciente'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[
      {
        index: true,
        element: <Index />,
        loader: pacientesLoader,
        errorElement: <ErrorPage />
      },
      {
        path: '/pacientes/nuevo',
        element: <NuevoPaciente />,
        action: nuevoPacienteAction,
        errorElement: <ErrorPage />
  
      },
      {
        path: '/pacientes/:pacienteId/editar',
        element: <EditarPaciente />,
        loader: editarClienteLoader,
        action: editarPacienteAction,
        errorElement: <ErrorPage />
      },
      {
        path: '/pacientes/:pacienteId/eliminar',
        action: eliminarPacienteAction
      }
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
