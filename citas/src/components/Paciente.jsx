
export default function Paciente() {
  return (
    <div className="mx-5 my-6 bg-white shadow-md px-5 py-10 rounded-lg">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre:{" "}
            <span className="font-normal normal-case">Hook</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario:{" "}
            <span className="font-normal normal-case">Mario</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email:{" "}
            <span className="font-normal normal-case">mario@mail.com</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta del paciente:{" "}
            <span className="font-normal normal-case">10-11-2022</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas:{" "}
            <span className="font-normal normal-case">Duerme mucho</span>
        </p>
    </div>
  )
}
