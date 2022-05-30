import React from 'react'

const NuevoPresupuesto = ({ presupuesto, setPresupuesto }) => {

    const handlePresupuesto = (e) => {
        e.preventDefault()
        console.log(Number(presupuesto))
    }

    return (
        <div className="contenedor-presupuesto contenedor sombra">
            <form onSubmit={handlePresupuesto} className='formulario'>
                <div className="campo">
                    <label htmlFor="" className=''>Definir presupuesto</label>
                    <input
                        className='nuevo-presupuesto'
                        type="text"
                        placeholder='Añade tu presupuesto'
                        value={presupuesto}
                        onChange={e => setPresupuesto(e.target.value)}
                    />
                </div>
                <input type="submit" value="Añadir" />
            </form>
        </div>
    )
}

export default NuevoPresupuesto