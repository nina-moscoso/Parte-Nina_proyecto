import React from 'react'
import '../Login/inicioSeccion.css'
import usuario from '../../assets/imagenes/correo.gif'
import contraseña from '../../assets/imagenes/usuario.gif'
import google from '../../assets/imagenes/google.png'
export default function InicioSeccion() {
    const handleButton = (e) => {
        e.preventDefault()
        localStorage.setItem("token", "token"); // setItem para guardar algo 
        location.href= "/dashboard"; // lugar donde se direccione el token 
        window.location.href = '/Dashboard'
    }
    return (
        <>
            <main className='conte_login'>
                <article className='co-login'>
                    <section className="im">

                        <h1 className="bienvenida">¡BIENVENIDO!</h1>
                        <p className="title-pro">MEMORIA ACTIVA</p>
                    </section>
                    <section className="login">
                        <h1 className="log">Iniciar Seccion</h1>
                        <form className="format" action="">
                            <label for="correo">Email</label>
                            <div className="cor">
                                <img className="usu" src={usuario} alt="" />
                                <input className="nom" type="email" placeholder="correo electronico" />
                            </div><br />
                            <label for="Contraseña">Contraseña</label> <br />
                            <div className="cor">
                                <img className="usu" src={contraseña} alt="" />
                                <input className="nom" type="password" />
                            </div>
                            <br />
                            <input className="ini" type="submit" value="Iniciar Seccion" onClick={handleButton} />
                            <br />
                            <br />
                            <input className="cuenta" type="button" value="Crea una cuenta" />
                            <br />
                            <br />
                            <div className="registro">
                                <img className="google" src={google} alt="" />
                                <input className="nom" type="button" value="Registrate con google" />
                            </div>
                        </form>
                    </section>
                </article>
            </main>
        </>
    )
}
