import {useState, useEffect} from 'react'
import Error from './Error'

const Formulario = ({patients, setPatients, patience, setPatience}) => {
    /**
     * los hooks deben ir antes del return
     * no deben ir dentro de condicionales
     * no deben ir despues de un return 
     * deben estar dentro de la funcion o clase del componente
     */
    const [name, setName] = useState('')
    const [propietary, setPropietary] = useState('')
    const [email, setEmail] = useState('')
    const [date, setDate] = useState('')
    const [synthoms, setSynthoms] = useState('')
    const [alert, setAlert] = useState(false)
    const [pacient, setPacient] = useState({})
    
    useEffect(() => {
        if(Object.keys(patience).length > 0){
            setName(patience.name)
            setPropietary(patience.propietary)
            setEmail(patience.email)
            setDate(patience.date)
            setSynthoms(patience.synthoms)
        }

    },[/*DEPENDENCIAS*/ patience])


    const generarId = () => {
        const random = Math.random().toString(36).substr(2)
        const date = Date.now().toString(36).substr(2)

        return date+random
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const fields = [name, propietary, email, date, synthoms]
        if (fields.includes("")){
            setAlert(true)
            return
        } 
        setAlert(false)

        // Object patience

        const objectPatience = {
            name,
            propietary,
            email,
            date,
            synthoms,
        }

        if (patience.id){
            // editando el registro
            objectPatience.id = patience.id
            const updatePatience = patients.map(patienceState => patienceState.id === patience.id ? objectPatience : patienceState)
            setPatients(updatePatience)
            setPatience({})
        } else{
            // nuevo registro
            objectPatience.id = generarId()
            setPatients([...patients, objectPatience])
        }
        // reiniciar form
        setName('')
        setPropietary('')
        setEmail('')
        setDate('')
        setSynthoms('')

    }

    // const [client, setClient] = useState({})
    // const [clients, setClients] = useState([])
    

    return (
        <div className="md:w-1/2 lg:w-2/5 mt-10">
            <h2 className="font-black text-3xl text-center">
            Seguimiento Pacientes
            </h2>
            <p className="text-lg mt-5 text-center mb-10"> Añade pacientes y {""}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>
            <form 
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg py-10 px-5 mx-5">
                {alert &&
                    <Error> 
                        <p>Todos los campos son obligatorios</p> 
                    </Error>
                }
                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold"> Nombre de la mascota</label>
                    <input
                        id="mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        type="text"
                        placeholder="Nombre de la mascota"
                        value={name}
                        onChange={(e) => setName(e.target.value) }

                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold"> Nombre del propietario</label>
                    <input
                        id="propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        type="text"
                        placeholder="Nombre del propietario"
                        value={propietary}
                        onChange={(e) => setPropietary(e.target.value)}

                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold"> Email </label>
                    <input
                        id="email"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        type="email"
                        placeholder="Email contacto propietario"
                        value={email}
                        onChange={(e) => setEmail(e.target.value) } 

                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="date" className="block text-gray-700 uppercase font-bold"> Alta </label>
                    <input
                        id="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}

                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold"> Síntomas </label>
                    <textarea
                    id="sintomas"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    placeholder="Síntomas"
                    value={synthoms}
                    onChange={(e) => setSynthoms(e.target.value) }
                    ></textarea>
                </div>
                
                <input
                    type="submit"
                    className="bg-indigo-600 p-3 w-full text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all"
                    value={patience.id ? "Editar Paciente" : "Agregar paciente"}
                />

            </form>
        </div>
    )
}
export default Formulario