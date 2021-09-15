import { useState } from 'react';
import axios from 'axios';



function CreateWorks() {
    const [Name, setname] = useState('');
    const [image, setimage] = useState('');
  
    const manejarEnvio = (event) => {
      event.preventDefault();

      const formData = new FormData();


      formData.append('image', image);
      formData.append('name', Name);

      console.log({image}, {formData})


      axios.post('http://localhost:3000/works', formData, { headers: { token: localStorage.getItem('token')}});
    }

    return (
        <div>
            <section className="home">
            <h3 className="sub-title">Crear trabajos</h3>
            <form className="form" onSubmit={manejarEnvio}>
                <div className="field">
                    <label for="nombre">Nombre</label>
                    <input type="text" id="nombre" placeholder="Nombre"
                    value={Name}
                     onChange={(event) => setname(event.target.value)}/>
                </div>
                <div className="field">
                    <label for="image">Foto</label>
                    <input type="file" id="image" onChange={(event) => setimage(event.target?.files[0])}/>
                </div>
                <button id="enviar">Crear</button>
            </form>
            </section>
        </div>
    )
}

export default CreateWorks
