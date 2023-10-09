import React from 'react'
import '../nosotros/Nosotros.css'
import Somos from '../../assets/imagenes/somos.jpg'
import Mision from '../../assets/imagenes/mision.jpg'
import Vision from '../../assets/imagenes/vision.jpg'
export default function Nosotros() {
    return (
        <>
            <main className='co-nosotros'>
                <aside className='padre'>
                    <section class="ima-nosotros">
                        <img class="imn1" src={Somos} alt="" />
                    </section>
                    <section class="teo">
                        <h1 class="tito">¿QUIENES SOMOS?</h1>
                        <br />
                        <p class="te1">Somo una empresa que mediante un aplicativo móvil con un componente web que ayuda a las personas con alzheimer en el desarrollo de actividades tanto ludicas como cognitivias fortaleciendo su capacidad cognitiva y autonomia.</p>
                    </section>
                </aside>
                <aside className='padre'>
                    <section class="ima-nosotros">
                        <img class="imn1" src={Mision} alt="" />
                    </section>
                    <section class="teo">
                        <h1 class="tito">MISION</h1>
                        <br />
                        <p class="te1">Facilitar el desarrollo de las actividades ludicas cognitivas en personas que padecen alzheimer en sus primeras etapas mediante actividades especificas que permitan fortalecer su bienestar mental y autonomia.
                        </p>
                    </section>
                </aside>
                <aside className='padre'>
                    <section class="ima-nosotros">
                        <img class="imn1" src={Vision} alt="" />
                    </section>
                    <section class="teo">
                        <h1 class="tit3">VISION</h1>
                        <br />
                        <p class="tex3">Lograr que la aplicacion de gran utilidad e impacto para la comunidad con alzheimer y familiares o acompañantes siendo apetecida en el mercado digital</p>
                    </section>
                </aside>
                <aside class="final">
                    <section class="teo">
                        <h1 class="tito">OBJETIVOS</h1>
                        <br />
                        <ul className='obj'>
                            <li className='objetivo'>Generar bienestar emocional para las personas diagnosticadas con alzheimer, cuidadores y familiares.</li>
                            <li className='objetivo'>Estimular la comunicacion e interaccion de la persona con alzheimer, familiares, y/o cuidadores</li>
                            <li className='objetivo'>Aumentar el nivel de funcionamiento de los sentidos cognitivos en los pacientes con alzheimer.</li>
                        </ul>
                    </section>
                </aside>
            </main>
        </>
    )
}
