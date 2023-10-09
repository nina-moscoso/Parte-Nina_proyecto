import React from 'react'
import mente from '../../assets/imagenes-Admi/mente.png'
import mente2 from '../../assets/imagenes-Admi/mente2.png'
import ejercicio from '../../assets/imagenes-Admi/ejercicio.png'
import mas from '../../assets/imagenes-Admi/mas.png'
import '../../view/paginas_admi/estilos/estilos.css'
export default function Menu() {
return (
    <>
    <main className='contenedor1admi'>
        <section className='acti-admi'> 
            <h2 className="titulo2admi">LISTA DE ACTIVIDADES</h2>   
            <nav className="imagenes">
                <img className="ima2admi" src={mente} alt=""/> 
                <p className="nombreadmi">Juegos Mentales</p>
            </nav>
            <nav className="imagenesadmi">
                <img className="ima2admi" src={mente2} alt=""/> 
                <p className="nombreadmi">Juegos Mentales</p>
            </nav>
            <nav className="imagenesadmi">
                <img className="ima2admi" src={ejercicio} alt=""/> 
                <p className="nombreadmi">Actividades Fisicas</p>
            </nav>
            <nav className="imagenesadmi">
                <img className="ima2admi" src={mas} alt=""/> 
                <p className="nombreadmi">Agregar mas listas de actividades</p>
            </nav>
        </section>
    </main>

    </>
)
}
