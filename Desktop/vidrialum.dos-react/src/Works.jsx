import { useEffect, useState } from 'react';

import Work from './Work';


function Works() {
    const [trabajos, setTrabajos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/works', {
            headers:{
                'Content-Type': 'application/json',
                'token': localStorage.getItem("token"),
            }
        })
        .then((response) => response.json())
        .then((json) => { 
            setTrabajos(json) 
        })
        .catch((error) => console.log(error));
    }, []);

    return (
        <section className="products">
            <h3 className="title">Trabajos</h3>
            <div className="products-list">
               {trabajos.map((trabajo) => <Work imagen={trabajo.image} nombre={trabajo.name} key={trabajo.id} />)} 
            </div>
        </section>
    )
}

export default Works
