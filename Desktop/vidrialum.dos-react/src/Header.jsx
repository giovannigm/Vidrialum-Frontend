import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from './media/VIDRIALUM.png';
import { useHistory } from 'react-router-dom';
import menu from './media/butons/menu1.svg';

function Header () {
  const [mostrarNav,cambiarMostrarNav]= useState(false);

  const userToken = localStorage.getItem('token');

  let classNav = '';
  if (mostrarNav) {
    classNav = 'active'
  }
      const history = useHistory();
  
    return (
      <header className="header">
        <div className="title-container">
          <h1 className="title">
            VIDRIALUM
            <img
              src={Logo}
              alt="logo empresa"
              id="img-title"
            />
          </h1>
          <span className="open-nav" onClick = {function  () {
            cambiarMostrarNav(!mostrarNav) 
          }} > 
            <img src={menu} alt="boton menu" />
          </span>
        </div>
        <nav className={`nav ${classNav}`} >
          <ul>
            <li>
              <Link className="nav-link" to="/">
                {" "}
                INICIO{" "}
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/Industry">
                {" "}
                INDUSTRIA{" "}
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/Company">
                {" "}
                EMPRESA{" "}
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/Jobs">
                {" "}
                TRABAJOS{" "}
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/Contact">
                {" "}
                CONTACTO{" "}
              </Link>
            </li>
            {userToken && (
              <li>
                <span className="nav-link" 
                  onClick={() => { 
                    localStorage.clear()
                    history.push('/');
                  }}
                >
                  Cerrar Sesion
                </span>
              </li>
            )}
          </ul>
        </nav>
      </header>
    )
}

export default Header ;