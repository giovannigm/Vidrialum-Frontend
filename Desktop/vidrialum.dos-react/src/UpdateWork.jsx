import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';



function UpdateWork() {
    const { id } = useParams();

    const [Name, setname] = useState('');
    const [image, setimage] = useState('');
  
    const manejarEnvio = (event) => {
      event.preventDefault();

      const formData = new FormData();


      formData.append('image', image);
      formData.append('name', Name);

      console.log({image}, {formData})


      axios.patch(`http://localhost:3000/works/${id}`, formData, { headers: { token: localStorage.getItem('token')}});
    }
    
    return (
        <div>
            <section className="home">
            <h3 className="sub-title">actualizar trabajo</h3>
            <form className="form" onSubmit={manejarEnvio}>
                <div className="field">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" placeholder="Nombre"
                     value={Name}
                     onChange={(event) => setname(event.target.value)}/>
                </div>
                <div className="field">
                    <label htmlFor="nombre">Foto</label>
                    <input type="file" id="nombre" placeholder="imagen" onChange={(event) => setimage(event.target?.files[0])}/>
                </div>
                <button id="enviar">actualizar</button>
            </form>
            </section>
        </div>
    )
}

export default UpdateWork;
