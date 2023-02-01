import { useNavigate, Form, useActionData, redirect } from "react-router-dom"
import Formulario from "../Formulario"
import Error from "../Error"
import { agregarPaciente } from '../../data/Pacientes'
export async function action ({request}){
    const formData = await request.formData()
    const datos = Object.fromEntries(formData)
    // Validacion 
    const errores = []
    if(Object.values(datos).includes('')){
      errores.push('Todos los campos son obligatorios')
    }
    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    if(!regex.test(datos.email)){
      errores.push('El email no es válido')
    }
    // Retornar datos si hay errores
    if(Object.keys(errores).length){
      return errores
    }
    await agregarPaciente(datos)
  
  return redirect('/')
}
function NuevoPaciente() {
  const errores = useActionData() 
  const navigate = useNavigate()
  
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Nuevo Paciente</h1>
      <p className="mt-3">Llena todos los campos para registrar un nuevo paciente</p>
      <div className='flex justify-end'>
        <button 
              className='bg-blue-800 text-white px-3 py-1 font-bold uppercase'
              onClick={() => navigate('/')}>Volver
        </button>
      </div>
      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
        { errores?.length && errores.map( (error, i) => <Error key={i}>{error}</Error> )  }
        <Form
          method="post"

        >
          <Formulario />
          <input type="submit" 
                  className="mt-5 w-full bg-blue-800 text-white p-3 uppercase font-bold text-lg"
                  value="Registrar Paciente"
                  />
        </Form>
      </div>
    </>
  )
}

export default NuevoPaciente