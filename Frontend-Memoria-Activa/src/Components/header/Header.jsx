import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../../assets/imagenes/logo.svg'
export default function Header() {
    return (
        <>
            <header>
                <div className="con">
                    <div className='lo'>
                        <img className='marca' src={logo} alt="" />
                    </div>
                    <nav className="nav">
                        <ul className='vista'>
                            <li className='navegacion'><NavLink className='op' to="/">Inicio</NavLink></li><hr />
                            <li className='navegacion'><NavLink className='op' to="/nosotros">Quienes somos</NavLink></li><hr />
                            <li className='navegacion'><NavLink className='op' to="/informacion">Informacion</NavLink></li><hr />
                            <li className='navegacion'><NavLink className='op' to="/actividad">Que ofrecemos</NavLink></li><hr />
                            <li className='navegacion'><NavLink className='op' to="/contacto">Contactenos</NavLink></li>

                        </ul>
                    </nav>
                    <nav className="na">
                        <ul className='vi'>
                            <li className='navegacion'><NavLink className='op' to="/logIn">Iniciar Seccion</NavLink></li><hr />
                            <li className='navegacion'><NavLink className='op' to="/registro">Registrate</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}
