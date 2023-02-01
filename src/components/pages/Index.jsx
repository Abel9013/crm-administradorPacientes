import { useLoaderData } from "react-router-dom"
import { obtenerPacientes } from "../../data/Pacientes";
import Paciente from "../Paciente";
export function loader(){
    // console.log(import.meta.env);
    const pacientes =obtenerPacientes()
    return pacientes
}

function Index() {
  const pacientes = useLoaderData()
  console.log(pacientes)
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3">Administra tus Pacientes</p>
      {pacientes.length ?  
          ( <table className="w-full bg-white shadow mt-5  table-auto">
                <thead className="bg-blue-800 text-white " >
                    <tr>
                      <th className="p-2 ">Paciente </th>
                      <th className="p-2 ">Contacto </th>
                      <th className="p-2 ">Acciones </th>
                    </tr>
                </thead>
                <tbody>
                      {pacientes.map(paciente =>(
                          <Paciente 
                                  paciente={paciente}
                                  key={paciente.id}
                           />
                          
                      ))}
                </tbody>
            </table>  ) : 
        (<p className="text-center mt-10">No hay clientes aun...</p>) }
    </>
  )
}

export default Index;
