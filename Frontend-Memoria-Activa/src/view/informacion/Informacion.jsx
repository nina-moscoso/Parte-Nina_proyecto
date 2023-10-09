import React from 'react'
import '../informacion/Informacion.css'

export default function Informacion() {
    return (
        <>
            <main className='cuerpo'>
                <article className='article'>
                    <section className="general">
                        <div className="general-1">
                            <h2 className='dat'>Qué es el Alzheimer</h2>
                            <p className='inf'>
                                La enfermedad de Alzheimer es un trastorno del cerebro que empeora con el tiempo. Se caracteriza por cambios en el cerebro que derivan en depósitos de ciertas proteínas. La enfermedad de Alzheimer hace que el cerebro se encoja y que las neuronas cerebrales, a la larga, mueran. La enfermedad de Alzheimer es la causa más común de demencia, un deterioro gradual en la memoria, el pensamiento, el comportamiento y las habilidades sociales. Estos cambios afectan la capacidad de funcionamiento de una persona.
                            </p>
                        </div>
                        <div className="general-2"></div>
                    </section>
                    <section id="etapas" className="general">
                        <div className="general-3"></div>
                        <div className="general-1">
                            <h2 className='dat'>Etapas</h2>
                            <h3 className='eta'>ETAPA LEVE</h3>
                            <p className='inf'>En las primeras etapas de la enfermedad de Alzheimer, una persona puede funcionar de manera independiente. Él o ella todavía puede conducir, trabajar y ser parte de actividades sociales. A pesar de esto, la persona puede sentir que tiene lapsos de memoria, como olvidar palabras familiares o la ubicación de objetos cotidianos.
                                Amigos, familiares o vecinos empiezan a notar dificultades. Durante una entrevista médica detallada, los médicos pueden detectar problemas de memoria o concentración.</p>
                            <h3 className='eta'>ETAPA MODERADA</h3>
                            <p className='inf'>El Alzheimer moderado suele ser la etapa más larga y puede durar muchos años. A medida que avanza la enfermedad, la persona con Alzheimer requerirá un mayor nivel de atención.
                                Puede notar que la persona con Alzheimer se frustra o actúa de manera inesperada.
                            </p>
                        </div>
                    </section>
                    <section id="sintomas" className="general">
                        <div className="general-4">
                            <h2 className='dat'>Síntomas</h2>
                            <p className='inf'> Pérdida de memoria</p>
                            <p className='inf'>Problemas para usar el lenguaje</p>
                            <p className='inf'>Cambios de personalidad</p>
                            <p className='inf'>Desorientación</p>
                            <p className='inf'>Problemas para llevar a cabo las tareas cotidianas</p>
                            <p className='inf'>Comportamiento conflictivo o inapropiado</p>
                            <p className='inf'>Sin embargo, la enfermedad de Alzheimer también difiere de otras demencias. Por ejemplo, la memoria reciente suele verse afectada mucho más que otras funciones intelectuales.</p>
                            <p className='inf'>Aunque el momento de aparición de los síntomas es variable, su clasificación en tempranos, intermedios o tardíos ayuda a los afectados, familiares y cuidadores a precisar un poco mejor sus expectativas. En la enfermedad de Alzheimer, los cambios de personalidad y la conducta conflictiva (trastornos de conducta) pueden desarrollarse de manera temprana o tardía.</p>
                        </div>
                        <div className="general-5"></div>
                    </section>
                    <section id="tratamiento" className="general">
                        <div className="general-6"></div>
                        <div className="general-4">
                            <h2 className='dat'>Tratamiento</h2>
                            <h3 className='eta'>Medicamentos</h3>
                            <p className='inf'>Los medicamentos para la enfermedad de Alzheimer pueden ayudar con los síntomas...</p>
                            <h3 className='eta'>Técnicas para mejorar la memoria</h3>
                            <p className='inf'>
                                El trabajo se orienta a ejercitar y mejorar tanto la memoria reciente, como favorecer el mantenimiento de recuerdos más lejanos.
                                Algunas tecnicas son como la musica terapia, juegos mentales, apoyo de materiales visual y verbal, Ejercicios para recordar acontecimientos y noticias.
                            </p>
                        </div>
                    </section>
                </article>
            </main>
        </>
    )
}
