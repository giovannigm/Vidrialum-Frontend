import { Link } from 'react-router-dom';
import Edit from "./media/butons/edit.svg"
import Trash from "./media/butons/trash.svg"
import axios from 'axios'
function Work(props) {
    return (
        <div className="product">
            <img src={props.imagen} alt=" foto Accesorio" />
            <h4>{props.nombre}</h4>
            {
                localStorage.getItem('token') && (
                    <>
 <Link to={`/Updateworks/${props.id}`}>
                <img className="icono" src={Edit} alt="editar"/>
            </Link>
            <Link to='/works'>
                <img 
                    className="icono" 
                    src={Trash} 
                    alt="trash" 
                    onClick={() => {axios.delete(`http://localhost:3000/works/${props.id}`, { headers: {token: localStorage.getItem('token')} })}}/>
            </Link>
                    </>
                )
            }
           
        </div>
    )
}

export default Work;