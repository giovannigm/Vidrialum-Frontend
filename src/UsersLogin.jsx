import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function UsersLogin() {
  const history = useHistory();

  const [cedula, setCedula] = useState('');
  const [contraseña, setContraseña] = useState('');

  const manejarEnvio = (event) => {
    event.preventDefault();

    axios.post('http://localhost:3000/users/login', {
      username: cedula,
      password: contraseña,
    })
    .then((response) => {
      localStorage.setItem("token", response.data.userToken);
      history.push('/works');
    })
    .catch((error) => console.log(error));
  }

  return (
      <div>
        <section className="home">
            <h3 className="sub-title">iniciar secion</h3>
            <form id="contact" className="form" onSubmit={manejarEnvio}>
              <div className="field">
                <label for="numero">Cedula</label>
                <input
                  type="number"
                  placeholder="Numero de cedula"
                  value={cedula}
                  onChange={(event) => setCedula(event.target.value)}
                  required
                />
              </div>
              <div className="field">
                <label for="nombre">Contraseña</label>
                <input 
                  type="password"  
                  placeholder="Contraseña"   
                  value={contraseña}
                  onChange={(event) => setContraseña(event.target.value)}
                  required  
                />
              </div>
              <button id="enviar">Iniciar secion</button>
            </form>
        </section>
      </div>
  )
}

export default UsersLogin
