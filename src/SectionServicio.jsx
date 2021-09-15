import React from 'react';
import Burletes from './media/burletes.jpeg';
import Aluminio from './media/aluminio.jpeg';
import Acesorios from './media/acesorios.jpeg';


function SectionServicio (){
    return(
        <section className="products">
            <h3 className="title">Nuestros Servicios</h3>
            <div className="products-list">
                <div className="product">
                    <img src={Burletes} alt=" foto burletes" />
                    <h4>Burletes</h4>
                </div>
                <div className="product">
                    <img src={Aluminio} alt="foto aluminio" />
                    <h4>Aluminio</h4>
                </div>
                <div className="product">
                    <img src={Acesorios} alt=" foto Accesorio" />
                    <h4>Accesorio en General</h4>
                </div>
            </div>
        </section>
    )
}
export default SectionServicio;