
export default function Paciente({patience, setPatience, delPatience}) {
   
    const {name, propietary, email, date, synthoms, id} = patience
    const handleDelete=()=>{
        const respuesta = confirm("Deseas eliminar este paciente?")
        if (respuesta){
            delPatience(id)
        }
    }
    
  return (
    <div className="mx-5 my-6 bg-white shadow-md px-5 py-10 rounded-lg">
        <p className="font-bold mb-3 text-gray-700 uppercase">Folio:{" "}
            <span className="font-normal normal-case">{id}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre:{" "}
            <span className="font-normal normal-case">{name}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario:{" "}
            <span className="font-normal normal-case">{propietary}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email:{" "}
            <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta del paciente:{" "}
            <span className="font-normal normal-case">{date}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas:{" "}
            <span className="font-normal normal-case">{synthoms}</span>
        </p>
        <div className="flex justify-between mt-10">
            <button onClick={() => setPatience(patience)} className="py-2 px-10 bg-indigo-600 hover:bg-indigo-800 font-bold uppercase rounded-lg text-white" type="button">
                Editar
            </button>
            <button onClick={handleDelete} className="py-2 px-10 bg-red-600 hover:bg-red-800 font-bold uppercase rounded-lg text-white" type="button">
                Eliminar
            </button>
        </div>
    </div>
  )
}
