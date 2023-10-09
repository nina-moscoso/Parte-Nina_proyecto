import React from 'react'
import '../footer/Footer.css'
import facebook from '../../assets/imagenes/facebook.png'
import instagram from '../../assets/imagenes/instagram.png'
import ubicacion from '../../assets/imagenes/ubicacion.png'
import twiter from '../../assets/imagenes/twiter.png'
export default function Footer() {
    return (
        <>
            <footer className="contenho">
                <hr className="lineas" />
                <div className="redes">
                    <img className="social" src={facebook} alt="" />
                    <img className="social" src={instagram} alt="" />
                    <img className="social" src={ubicacion} alt="" />
                    <img className="social" src={twiter} alt="" />
                    <h4 className='pieho'>copyright © Sena-Cauca</h4>
                </div>
            </footer>
        </>
    )
}
