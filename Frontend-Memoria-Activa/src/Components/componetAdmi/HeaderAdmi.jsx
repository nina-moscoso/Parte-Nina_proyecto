import React from 'react'
import perfil from '../../assets/imagenes-Admi/perfil.svg';
import volver from '../../assets/imagenes-Admi/volver.png';
import '../../view/paginas_admi/estilos/estilos.css';
import { Outlet } from 'react-router-dom';
export default function HeaderAdmi() {
    return (
        <>
            <header className='admiHeader'>

                <img className="retroceder" src={volver} alt="" />

                <table className="contenidoadmi">
                    <thead>
                        <tr className="hola">
                            <th className="one">Tareas</th>
                            <th className="one">Roles</th>
                            <th className="one">Solicitudes</th>
                            <th className="one">Frases</th>
                        </tr>
                    </thead>
                </table>
                <div className="linea2admi">
                    <div className="contenedorima">
                        <img className="ima1" src={perfil} alt="" />
                    </div>
                    <h2 className="tituloadmi">Pablo Escobar</h2>
                    <h1 className="titulo1admi">Administrador</h1>
                </div>
            </header>
            <Outlet/>
        </>
    )
}
