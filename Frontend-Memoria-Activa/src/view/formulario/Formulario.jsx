import React from 'react'
import '../formulario/formulario.css'
export default function Formulario() {
    return (
        <>
            <aside className='fon'>
                <section className="Registro">
                    <h5 className='ti'>Formulario De Registro</h5>
                    <input className="controles" type="text" name="nombre" placeholder="Ingrese un nombre" />
                    <input className="controles" type="text" name="apellido" placeholder="Ingrese un apellido" />
                    <input className="controles" type="email" name="email" placeholder="Ingrese un email" />
                    <input className="controles" type="password" name="password" placeholder="Ingrese su contraseña" />
                    <button className="boton"> Ingresar</button>
                    <p className='cu'><a className='enla' href="#">Ya tengo una cuenta </a></p>
                </section>
            </aside>
        </>
    )
}

