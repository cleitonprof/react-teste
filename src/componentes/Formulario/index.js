import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => {

    const grupo = [
        'Node',
        'React',
        'MongoDB'
    ]


    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card do aluno</h2>
                <CampoTexto obrigatorio={true} label='Nome' placeholder='Digite seu nome' />
                <CampoTexto label='Matricula' placeholder='Digite sua matrícula' />
                <CampoTexto label='Imagem' placeholder='Digite o endereço da imagem' />
                <ListaSuspensa obrigatorio={true} label='Grupo' itens={grupo}></ListaSuspensa>
            </form>
        </section>
    )
}

export default Formulario