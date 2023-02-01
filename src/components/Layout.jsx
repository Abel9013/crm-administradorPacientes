import { Outlet, Link , useLocation } from "react-router-dom"
const Layout = () => {
  const location = useLocation( )

  return (
    <div className="md:flex md:min-h-screen">
        <aside className="md:w-1/4 bg-blue-900 px-5 py-10">
            <h2 className="text-4xl font-black text-center text-white">CRM Pacientes</h2>
            <nav className="mt-10">
              <Link className={`${location.pathname === '/' ? 'text-blue-300' : 'text-white'} text-2xl block hover:text-blue-300 text-white`} to="/">Pacientes</Link>
              <Link className={`${location.pathname === '/pacientes/nuevo' ? 'text-blue-300' : 'text-white'} text-2xl block hover:text-blue-300 text-white`} to='/pacientes/nuevo' >Nuevo Paciente</Link>
              
            </nav>
        </aside>
        <main className="md:w-3/4 p-10 md:h-screen over" >
          <Outlet />      
        </main>
    </div>
  )
}

export default Layout