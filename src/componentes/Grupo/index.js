import Integrante from '../Integrante'
import './Grupo.css'

const Grupo = (props) => {
    const css = { backgroundColor: props.corSecundaria }

    return (
        (props.integrantes.length > 0) ? <section className='grupo' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='integrantes'>
                {props.integrantes.map(integrante =>
                    <Integrante
                        corDeFundo={props.corPrimaria}
                        key={integrante.nome}
                        nome={integrante.nome}
                        matricula={integrante.matricula}
                        imagem={integrante.imagem}
                    />
                )}
            </div>
        </section>
            : ''
    )
}

export default Grupo