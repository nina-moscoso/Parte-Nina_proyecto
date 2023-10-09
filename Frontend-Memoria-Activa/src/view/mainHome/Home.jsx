import React from 'react'
import '../mainHome/Home.css'
import Abuelo from '../../assets/imagenes/abuelos.png'

export default function Home() {
  return (
    <>
        <main className='home'>
                <div className="conta">
                    <div className="informaci">
                        <h1 className='no'>Memoria Activa</h1>
                        <p className='te'>Ven y utiliza nuestro aplicativo sobre el alzheimer que te  facilitar el desarrollo de las actividades ludico cognitivas con el fin de fortalecer su bienestar emocional y su autonomia.</p>
                    </div>
                    <div className="imag">
                        <img className="abuelo" src={Abuelo} alt="" />
                    </div>
                </div>
            </main>
    </>
  )
}
