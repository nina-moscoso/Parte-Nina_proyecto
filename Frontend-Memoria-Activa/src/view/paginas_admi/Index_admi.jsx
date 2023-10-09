import React from 'react'
import Menu from '../../Components/componetAdmi/Menu';
export default function Index_admi() {
    return (
    <>
    <main class="contenido1admi">
        <Menu />
        <aside class="contenedor3admi">
            <h1 class="titulo3admi">JUEGOS MENTALES:</h1>
            <table class="tabla2admi">
                <tr class="partarriba">
                    <th class="dos">Id</th>
                    <th class="dos">ACTIVIDADES</th>
                    <th class="dos">DESCRIPCIÓN</th>
                    <th class="dos">AGREGAR/ELIMINAR</th>
                </tr>
                <tr>
                    <td class="cuatro">1</td>
                    <td class="cuatro">Rompecabezas</td>
                    <td class="cuatro">El jugador tiene que colocar las piezas de manera correcta para poder obtener la solución.</td>
                    <td class="cinco"><button class="seis">Habilitar</button><button class="siete">Desabilitar</button></td>
                </tr>
                <tr>
                    <td class="cuatro">2</td>
                    <td class="cuatro">Sopa de letras</td>
                    <td class="cuatro">El objetivo de la sopa de letras es encontrar palabras escondidas en una ventana llena de caracteres.</td>
                    <td class="cinco"><button class="seis">Habilitar</button><button class="siete">Desabilitar</button></td>
                </tr>
            </table>
            <div class="contenedor4admi">
            <button id="agregaradmi">AGREGAR</button>
            </div>
        </aside>
    </main>
        
    </>
    )
}



