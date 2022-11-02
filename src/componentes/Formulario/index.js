import CampoTexto from '../CampoTexto'
import './Formulario.css'

const Formulario = () => {

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Form foi submetido')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do aluno</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Matricula" placeholder="Digite sua matrícula" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                
            </form>
        </section>
    )
}

export default Formulario