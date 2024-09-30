import React, { useState } from 'react'
import Logo from '/img/logo.svg'

import appFirebase from '../credenciales'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
const auth = getAuth(appFirebase)

const Login = () => {

    const [registrando, setRegistrando] = useState(false)

    const fAutenticacion = async(e) =>{
        e.preventDefault();
        const correo = e.target.correo.value;
        const contrasena = e.target.contrasena.value;
        console.log(correo);   
        console.log(contrasena);   
        
        await signInWithEmailAndPassword(auth, correo, contrasena)
        
    }
  return (
    <div>
        <div className="registro-contenedor">
            <div className="registro-caja">
                <div className="logo">
                    <img src={Logo} alt="Logo"/>
                </div>
                <h3>Ingrese sus credenciales</h3>
                <form className="registro-formulario" onSubmit={fAutenticacion}>
                    <label htmlFor="usuario">Correo Electrónico:</label>
                    <input type="text" id="correo" name="correo" placeholder="Ingrese su correo electrónico" required />
                    
                    <label htmlFor="correo">Contraseña:</label>
                    <input type="password" id="contrasena" name="contrasena" placeholder="Ingrese su contraseña" required />

                    <button type="submit">Ingresar</button>
                </form>
                <div className="enlaces-pie">
                    <a href="/recuperar-contraseña">¿Olvidaste tu contraseña?</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login