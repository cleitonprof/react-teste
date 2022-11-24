import React, { useState } from 'react'
import Banner from './componentes/Banner'
import Formulario from './componentes/Formulario'
import Grupo from './componentes/Grupo'

function App() {

  const grupos = [
    {
      nome: 'React',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'NodeJS',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'MongoDB',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    }
  ]

  const [integrantes, setIntegrantes] = useState([])

  const aoNovoIntegranteAdicionado = (integrante) => {
    setIntegrantes([...integrantes, integrante])
  }

  return (
    <div className='App'>
      <Banner />
      <Formulario grupos={grupos.map(grupo => grupo.nome)} aoIntegranteCadastrado={integrante => aoNovoIntegranteAdicionado(integrante)} />
      {grupos.map(grupo => <Grupo
        key={grupo.nome}
        nome={grupo.nome}
        corPrimaria={grupo.corPrimaria}
        corSecundaria={grupo.corSecundaria}
        integrantes={integrantes.filter(integrante => integrante.grupo === grupo.nome)}
      />)}
    </div>
  )
}

export default App
