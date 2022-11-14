import { useState } from 'react'
import Banner from './componentes/Banner'
import Formulario from './componentes/Formulario'

function App() {

  const [integrantes, setIntegrantes] = useState([])

  const aoNovoIntegranteAdicionado = (integrante) => {
    console.log(integrante)
    setIntegrantes([...integrantes, integrante])
  }

  return (
    <div className='App'>
       <Banner />
       <Formulario aoIntegranteCadastrado={integrante => aoNovoIntegranteAdicionado(integrante)} />
    </div>
  )
}

export default App
