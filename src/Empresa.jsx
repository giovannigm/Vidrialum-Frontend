import React from 'react';
import Company from './media/company.jpg';
import Equipo from './media/equipo.jpg'

function Empresa(){
    return(<section className="home">
    <h3 className="sub-title">empresa</h3>
    <p className="text-industria">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
      ut. Omnis vero doloremque consequatur fuga non eaque voluptatem nobis,
      dolore suscipit accusantium tempore in id molestias aliquam ducimus sed
      laborum.
    </p>
    <img src={Company} alt="" />

    <h3 className="sub-title">Historia</h3>
    <p className="text-industria">
      Vidrialum es,desde 2010. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Deleniti recusandae est voluptate quia in omnis
      ducimus fugiat hic fuga dolor.
    </p>
    <img src={Equipo} alt="" />
    <h2 className="sub-title">Vision y Mision</h2>
    <h3 className="sub-title">Vision</h3>
    <p className="text-industria">
      Una empresa exitosa reconocida por la alta calidad de su gente y sus
      productos.
    </p>
    <h3 className="sub-title">Mision</h3>
    <p className="text-industria">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, natus.
      Nemo consequatur ab adipisci impedit veritatis reprehenderit tempore
      necessitatibus accusamus quae blanditiis excepturi praesentium
      architecto voluptates ea, velit, rerum sapiente?
    </p>
  </section>)
}

export default Empresa ;