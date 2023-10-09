import React from 'react'
import '../contacto/Contacto.css'
export default function () {
    return (
        <>
            <article class="contened">
                <form class="formular">
                    <h1 className='ti'>FORMULARIO DE CONTACTO</h1>
                    <br />
                    <label for="nombre" class="label">Nombres y Apellidos</label>
                    <input id="nombre" class="input" type="text" placeholder="Escriba su nombre y apellidos" />

                    <label for="correo" class="label">Correo Electronico</label>
                    <input id="correo" class="input" type="text" placeholder="Escriba su correo" />

                    <label for="mensaje" class="label">Mensaje</label>
                    <textarea id="mensaje" class="textarea" placeholder="Aqui deja tu mensaje"></textarea>

                    <input type="submit" class="submit" value="Enviar" />
                </form>
            </article>
        </>
    )
}
