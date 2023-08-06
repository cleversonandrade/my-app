import Estudante from '../Estudante'
import './Time.css'

const Time = (props) => {
    return (
        (props.estudantes.length > 0) ? <section className='time' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderBlockColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='estudantes'>
                 {props.estudantes.map(estudante => <Estudante corDeFundo={props.corPrimaria} key={estudante.nome} nome={estudante.nome} cargo={estudante.cargo} imagem={estudante.imagem}/>)}
            </div>
        </section>
       : ''
    )     
}

export default Time