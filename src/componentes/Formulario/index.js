import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const grupos = [
        'Node',
        'React',
        'MongoDB'
    ]
    const [nome, setNome] = useState('')
    const [matricula, setMatricula] = useState('')
    const [imagem, setImagem] = useState('')
    const [grupo, setGrupo] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoIntegranteCadastrado({
            nome,
            matricula,
            imagem,
            grupo
        })
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do aluno</h2>
                <CampoTexto
                    obrigatorio={true}
                    label='Nome'
                    placeholder='Digite seu nome'
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    label='Matricula'
                    placeholder='Digite sua matrícula'
                    valor={matricula}
                    aoAlterado={valor => setMatricula(valor)}
                />
                <CampoTexto
                    label='Imagem'
                    placeholder='Digite o endereço da imagem'
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label='Grupo'
                    itens={grupos}
                    valor={grupo}
                    aoAlterado={valor => setGrupo(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario