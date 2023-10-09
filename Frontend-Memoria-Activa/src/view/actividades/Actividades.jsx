import React from 'react'
import '../actividades/Actividades.css'
import Caminata from '../../assets/ima-quinonez/caminata.jpg'
import baile from '../../assets/ima-quinonez/Baile.jpeg'
import ejercicios from '../../assets/ima-quinonez/Act-Fisica.jpg'
import terapia from '../../assets/ima-quinonez/musicoterapia.webp'
import karaoke from '../../assets/ima-quinonez/karaokee.jpg'
import rompecabeza from '../../assets/ima-quinonez/Rompecabezas.png'
import cricigrama from '../../assets/ima-quinonez/Crucigrama.jpg'
import pintar from '../../assets/ima-quinonez/pintar.jpg'
import observar from '../../assets/ima-quinonez/Observacion.jpg'

export default function Actividades() {
  return (
    <>
        <main className="contenido-actividades">
            <section className="cuadro">
                <h1 className='cateac'>ACTIVIDADES FISICAS</h1>
                <p className='descripac'>El ejercicio ofrece numerosos beneficios para nuestra salud, por lo tanto, 
                    llevaremos a cabo las siguientes actividades
                </p>

                <section className='imagenes-1'>
                    <nav className='img-contenido'>
                        <h1 className='titulo-ac'>Caminatas</h1>
                        <nav className='padre-img'>
                            <img className='img-ac' src={Caminata} alt="" />
                        </nav>
                    </nav>

                    <nav className='img-contenido'>
                        <h1 className='titulo-ac'>Baile</h1>
                        <nav className='padre-img'>
                            <img className='img-ac' src={baile} alt="" />
                        </nav>
                    </nav>

                    <nav className='img-contenido'>
                        <h1 className='titulo-ac'>Ejercicios</h1>
                        <nav className='padre-img'>
                            <img className='img-ac' src={ejercicios} alt="" />
                        </nav>
                    </nav>
                </section>
            </section> 
  
            <section className="cuadro">
                
                <h1 className='cateac'>ACTIVIDADES LUDICAS COGNITIVAS</h1>
                <p className='descripac'>
                    Son especialmente beneficiosas, ya que ayudan a estimular sus mentes
                    y fomentar la interacción social
                </p>
                <section className='imagenes-1'>
                    <nav className='img-contenido'>
                        <h1 className='titulo-ac'>Musica terapia</h1>
                        <nav className='padre-img'>
                            <img className='img-ac' src={terapia} alt="" />
                        </nav>
                    </nav>
                    <nav className='img-contenido'>
                        <h1 className='titulo-ac'>Karaoke</h1>
                        <nav className='padre-img'>
                            <img className='img-ac' src={karaoke} alt="" />
                        </nav>
                    </nav> 
                </section>
            </section>
            <section className="cuadro">
                <h1 className='cateac'>JUEGOS MENTALES</h1>
                <p className='descripac'>
                Los juegos mentales pueden brindar numerosos beneficios al estimular
                la mente, mejorar la cognición y proporcionar entretenimiento. A
                continuación, te presentamos algunas ideas de juegos mentales que
                puedes disfrutar
                </p>

                <section className='imagenes-1-mentales'>
                    <nav className='img-contenido-1'>
                        <h1 className='titulo-ac'>Rompecabezas</h1>
                        <nav className='padre-img'>
                            <img className='img-ac' src={rompecabeza} alt="" />
                        </nav>
                    </nav>
                    <nav className='img-contenido'>
                        <h1 className='titulo-ac'>Sopa de letras</h1>
                        <nav className='padre-img'>
                            <img className='img-ac' src={karaoke} alt="" />
                        </nav>
                    </nav>
                    <nav className='img-contenido'>
                        <h1 className='titulo-ac'>Crucigrama</h1>
                        <nav className='padre-img'>
                            <img className='img-ac' src={cricigrama} alt="" />
                        </nav>
                    </nav>
                </section>
                <section className='imagenes-1-mentales'>
                    <nav className='img-contenido-1'>
                        <h1 className='titulo-ac'>Pintar</h1>
                        <nav className='padre-img'>
                            <img className='img-ac' src={pintar} alt="" />
                        </nav>
                    </nav>
                    <nav className='img-contenido'>
                        <h1 className='titulo-ac'>Observacion</h1>
                        <nav className='padre-img'>
                            <img className='img-ac' src={observar} alt="" />
                        </nav>
                    </nav>
                </section>
            </section>
        </main>
    </>
  )
}
