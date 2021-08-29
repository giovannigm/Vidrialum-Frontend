import { Link } from 'react-router-dom';
import Edit from "./media/butons/edit.svg"
import Trash from "./media/butons/trash.svg"
function Work(props) {
    return (
        <div className="product">
            <img src={props.imagen} alt=" foto Accesorio" />
            <h4>{props.nombre}</h4>
            <Link to="/Updatework">
                <img className="icono" src={Edit} alt="editar"/>
            </Link>
            <Link>
                <img className="icono" src={Trash} alt="trash" onClick={() => {console.log('hola mundo')}}/>
            </Link>
        </div>
    )
}

export default Work;