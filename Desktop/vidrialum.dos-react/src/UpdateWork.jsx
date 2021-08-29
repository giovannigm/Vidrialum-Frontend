function UpdateWork() {
    return (
        <div>
            <section className="home">
            <h3 className="sub-title">actualizar trabajo</h3>
            <form className="form">
                <div className="field">
                    <label for="nombre">Nombre</label>
                    <input type="text" id="nombre" placeholder="Nombre"/>
                </div>
                <div className="field">
                    <label for="nombre">Foto</label>
                    <input type="file" id="nombre" placeholder="imagen"/>
                </div>
                <button id="enviar">Crear</button>
            </form>
            </section>
        </div>
    )
}

export default UpdateWork;
