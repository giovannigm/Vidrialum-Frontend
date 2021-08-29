import { useState } from 'react';



function CreateWorks() {
    const [Name, setname] = useState('');
    const [image, setimage] = useState('');
  
    const manejarEnvio = (event) => {
      event.preventDefault();

      const formData = new FormData();

      formData.append('image', image);
      formData.append('name', Name);

      fetch('http://localhost:3000/works', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'token': localStorage.getItem("token"),
        },
        body: formData,
        mode: 'cors'
      })
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
                    <label for="nombre">Foto</label>
                    <input type="file" id="nombre" onChange={(event) => setimage(event.target?.files[0])}/>
                </div>
                <button id="enviar">Crear</button>
            </form>
            </section>
        </div>
    )
}

export default CreateWorks
