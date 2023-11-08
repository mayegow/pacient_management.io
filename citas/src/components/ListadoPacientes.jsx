import Paciente from "./Paciente"


export default function ListadoPacientes({patiences, setPatience, delPatience}) {
  

  
  return (
    <div className=" md:w-1/2 lg:3/5 mt-10">
      {patiences && patiences.length ? 
      (<>
        <h2 className="font-black text-3xl text-center">
            Listado de Pacientes
        </h2>
        <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
        </p>
      </>)
      :(
        <h2 className="font-black text-3xl text-center">
            Sin pacientes
        </h2> 
      )
        
    }
        
        <div className="md:h-screen md:overflow-y-scroll">
          { patiences.map( (x, i) => ( 
          <Paciente key={x.id} patience={x} setPatience={setPatience} delPatience={delPatience} />
          )

          )}
        </div>
    </div>
  )
}
