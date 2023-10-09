import React from 'react'
export default function Index_Frases() {
return (
    <>
    <main className='Frases-contenedor'>
        <nav className="cuadro">
        <h1 className="melo">FRASE DEL DIA</h1>
        <section className="DIA">
            <h2 className="melo2">NUEVA FRASE</h2>
            <input className="frase4" type="text" />
            <h2 className="autores">AUTORES</h2>
            <input className="auto1" type="text" />
        </section>
        <br />
        <br />
        <button className="enviar">Guardar</button>
        </nav>
        <table className='table_fase' >
        <thead>
            <tr>
            <th className='casilla1'>FRASES</th>
            <th className='casilla1'>AUTOR</th>
            <th className='casilla1'>AGREGAR FRASE</th>
            </tr>
        </thead>
        <tbody className='conteFrase'>
            <tr>
            <td className='casilla2'>'El éxito es la suma de pequeños esfuerzos repetidos día tras día.'</td>
            <td className='casilla2'>Robert Collier</td>
            <td className='casilla2'>
                <input type="checkbox" id="switch" />
                <button id="button">enviar</button>
                <button id="button">Eliminar</button>
            </td>
            </tr>
            <tr>
            <td className='casilla2'>'El único lugar donde el éxito viene antes que el trabajo es en el diccionario.'</td>
            <td className='casilla2'>Vidal Sassoon</td>
            <td className='casilla2'>
                <input type="checkbox" id="switch" />
                <button id="button">enviar</button>
                <button id="button">Eliminar</button>
            </td>
            </tr>
            <tr>
            <td className='casilla2'>'El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. Si amas lo que haces, tendrás éxito.''</td>
            <td className='casilla2'>Albert Schweitzer</td>
            <td className='casilla2'>
                <input type="checkbox" id="switch" />
                <button id="button">enviar</button>
                <button id="button">Eliminar</button>
            </td>
            </tr>
        </tbody>
        </table>
    </main>         
    
    </>
)
}
