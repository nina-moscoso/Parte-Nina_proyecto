import React from 'react'
import {Routes,Route} from 'react-router-dom'
import LandingPage from '../view/landingPage/LandingPage'
import Home from '../view/mainHome/Home'
import Nosotros from '../view/nosotros/Nosotros'
import Contacto from '../view/contacto/Contacto'
import Informacion from '../view/informacion/Parte1Info'
import Actividades from '../view/actividades/Actividades'
import LogIn from '../view/Login/InicioSeccion'
import Formulario from '../view/formulario/Formulario'
import '../Components/header/Header.css'
import PrivateRoute from '../routes/PrivateRoute'
import HeaderAdmi from '../Components/componetAdmi/HeaderAdmi'
import Tarea from '../view/paginas_admi/Index_admi'
import Rol from '../view/paginas_admi/Index_Roles'
import Solicitud from '../view/paginas_admi/Index_Solicitudes'
import Frase from '../view/paginas_admi/Index_Frases'
import Detalle from '../view/informacion/Informacion'
export default function AppRouter() {
  return (
    <>
    <Routes>
        <Route path='/' element={<LandingPage/>}>
            <Route index element={<Home/>}/>
            <Route path='/nosotros' element={<Nosotros/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
            <Route path='/informacion' element={<Informacion/>}/>
            <Route path='/Informativo' element={<Detalle/>}/>
            <Route path='/actividad' element={<Actividades/>}/>
        </Route>

        <Route path='/logIn' element={<LogIn/>}/>
        <Route path='/registro' element={<Formulario/>}/>
        <Route  element={<PrivateRoute/>}>
          <Route path='/Dashboard' element={<HeaderAdmi/>}>
            <Route index element={<Tarea/>}/>
            <Route path='actividad' element={<Rol/>}/>
            <Route path='solicitud' element={<Solicitud/>}/>
            <Route path='frase' element={<Frase/>}/>
        </Route>
        </Route>
    </Routes>
    </>
  )
}
