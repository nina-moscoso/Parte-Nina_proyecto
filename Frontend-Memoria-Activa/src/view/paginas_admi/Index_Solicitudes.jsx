import React from 'react'
import Menu from '../../Components/componetAdmi/Menu'
export default function Index_Solicitudes() {
return (
    <>
    <main class="contenido1">
        <Menu />
        <aside class="contenedor3">
            <h1 class="titulo3">Solicitudes</h1>
            <table class="tabla2">
                <tr class="partarriba">
                    <th class="dos">Nombre</th>
                    <th class="dos">Cedula</th>
                    <th class="dos">Rol</th>
                    <th class="dos">Usuario</th>
                    <th class="dos">En curso</th>
                </tr>
                <tr>
                    <td class="cuatro">Yeison Guzman</td>
                    <td class="cuatro">1058555487</td>
                    <td class="cuatro">Administrador</td>
                    <td class="cuatro">yeisonguzman133@gmail.com</td>
                    <td class="cinco"><button class="seis">Aceptar</button><button class="siete">Eliminar</button></td>
                </tr>
                <tr>
                    <td class="cuatro">Nina Amparo</td>
                    <td class="cuatro">1234578910</td>
                    <td class="cuatro">Paciente</td>
                    <td class="cuatro">ninaamparo123@gmail.com</td>
                    <td class="cinco"><button class="seis">Aceptar</button><button class="siete">Eliminar</button></td>
                </tr>
            </table>
        </aside>
    </main>    
    
    </>
)
}
