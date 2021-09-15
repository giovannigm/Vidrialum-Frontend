import React from 'react'

export default function Contact() {
    return (
        <div>
            <section className="home">
                <h3 className="sub-title">Contacto</h3>
                <form id="contact" className="form">
                  <div className="field">
                    <label for="nombre">Nombre</label>
                    <input type="text" id="nombre" placeholder="Nombre" />
                  </div>
                  <div className="field">
                    <label for="apellidos">Apellidos</label>
                    <input type="text" id="apellidos" placeholder=" Apellido" />
                  </div>
                  <div className="field">
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="Email" required />
                  </div>
                  <div className="field">
                    <label for="numero">Numero</label>
                    <input
                      type="number"
                      id="numero"
                      placeholder="Numero de Contacto"
                      required
                    />
                  </div>
                  <div className="field">
                    <label for="mensaje">Mensaje</label>
                    <input id="mensaje" placeholder="Mensaje" required />
                  </div>
                  <button id="enviar">Enviar</button>
                </form>
              </section>
        </div>
    )
}
