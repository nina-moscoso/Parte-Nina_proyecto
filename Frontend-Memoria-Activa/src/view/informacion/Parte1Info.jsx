import React from 'react'
import '../informacion/Parte1Info.css'
import imagen1 from '../../assets/imagenes/imagen1.jpg'
import imagen2 from '../../assets/imagenes/imagen2.jfif'
import imagen3 from '../../assets/imagenes/imagen3.webp'
import rompecabeza from '../../assets/imagenes/rompecabeza.png'
import { Link } from 'react-router-dom'
import Informativo from './Informacion'

export default function Parte1Info() {

    return (
        <>
            <main className='info-principalin' >
                <h1 className="tituloinfo">LO QUE DEBES SABER ACERCA DEL ALZHEIMER</h1>
                <article className="containerin" >

                    <div className="cardin" >
                        <img className="ima-pa" src={imagen1} alt="" />
                        <Link to="/Informativo">
                            <p className="textabajo"  >¿QUE ES?</p>
                        </Link>
                    </div>
                    <div className="cardin">
                        <img className="ima-pa" src={imagen3} alt="" />
                        <Link to="/Informativo">

                        <p className="textabajo" >ETAPAS</p>
                        </Link>
                    </div>
                    <div className="cardin">
                        <img className="ima-pa" src={imagen2} alt="" />
                        <Link to="/Informativo">

                        <p className="textabajo" >SINTOMAS</p>
                        </Link>
                    </div>
                    <div className="cardin">
                        <img className="ima-pa" src={rompecabeza} alt="" />
                        <Link to="/Informativo">

                        <p className="textabajo" >TRATAMIENTO</p>
                        </Link>
                    </div>
                </article>
            </main>
        </>
    )
}
