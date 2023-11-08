import {useState, useEffect} from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'

function App() {
  const [patients, setPatients]=useState([])
  const [patience, setPatience]=useState({})

  useEffect(()=>{
    const patientsLs = JSON.parse(localStorage.getItem('patients'))
    setPatients(patientsLs)
    // const getLs= () => {
    //   // console.log(JSON.parse(localStorage.getItem('patients')))
    //   const patientsLs = JSON.parse(localStorage.getItem('patients')) 
    //   setPatients(patientsLs)
    // }
    // getLs()
  }, [])

  useEffect(()=>{
    localStorage.setItem('patients', JSON.stringify(patients))
  }, [patients])


  const delPatience = (id) => {
    const updatePatiences = patients.filter( patiencesUpdate => patiencesUpdate.id !== id )
    setPatients(updatePatiences)
  }
  
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex ">
        <Formulario
        patients={patients}
        setPatients={setPatients}
        patience={patience}
        setPatience={setPatience}

        />
        <ListadoPacientes
          patiences={patients}
          setPatience={setPatience}
          delPatience={delPatience}
        /> 
      </div>
    </div>
  )
  
}

export default App
