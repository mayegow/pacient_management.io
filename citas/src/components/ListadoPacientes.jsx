import Paciente from "./Paciente"


export default function ListadoPacientes() {
  return (
    <div className=" md:w-1/2 lg:3/5 mt-10">
        <h2 className="font-black text-3xl text-center">
            Listado de Pacientes
        </h2>
        <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
        </p>
        <div className="md:h-screen md:overflow-y-scroll">
            <Paciente/>
            <Paciente/>
            <Paciente/>
            <Paciente/>
            <Paciente/>
            <Paciente/>
            <Paciente/>
            <Paciente/>
        </div>
    </div>
  )
}
