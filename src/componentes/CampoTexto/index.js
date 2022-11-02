/*
import './CampoTexto.css'

const CampoTexto = () => {
    return(
        <div>
            <label>
                {'Nome'}
            </label>
            <input placeholder='Digite o seu nome...'></input>
        </div>
    )
}
export default CampoTexto

*/

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...` 

    let valor = ''

    const aoDigitado = (evento) => {
        valor = evento.target.value
    }

    return (
        <div className='campo-texto'>
            <label>
                {props.label}
            </label>
            <input value={valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto
