import React, { useState } from 'react'
import Logo from '/img/logo.svg'
import ReCAPTCHA from "react-google-recaptcha"


import appFirebase from '../credenciales'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
const auth = getAuth(appFirebase)

const onChange = () => {
    // console.log("Captcha value:");
}

const Login = () => {

    const [registrando, setRegistrando] = useState(false)

    const fAutenticacion = async(e) =>{
        e.preventDefault();
        const correo = e.target.correo.value;
        const contrasena = e.target.contrasena.value;
        const recaptchaResponse = grecaptcha.getResponse();

        if (recaptchaResponse.length === 0) {
            alert("Por favor, completa el CAPTCHA");
            return;
        }
        console.log(correo);   
        console.log(contrasena); 
        console.log("reCAPTCHA:", recaptchaResponse);
          
        
        await signInWithEmailAndPassword(auth, correo, contrasena)
        
    }
  return (
    <div>
        <div className="registro-contenedor">
            <div className="registro-caja">
                <div className="logo">
                    <img src={Logo} alt="Logo"/>
                </div>
                <p className="descripcion-sistema">Sistema administrativo de gestión de peajes.</p>
                <p className="descripcion-sistema">Inicie sesión con su cuenta administrativa. </p>

                <h3>Ingrese sus credenciales</h3>
                <form className="registro-formulario" onSubmit={fAutenticacion}>
                    <label htmlFor="correo">Correo Electrónico:</label>
                    <input type="text" id="correo" name="correo" placeholder="Ingrese su correo electrónico" required />
                    
                    <label htmlFor="correo">Contraseña:</label>
                    <input type="password" id="contrasena" name="contrasena" placeholder="Ingrese su contraseña" required />

                    <ReCAPTCHA className="recaptcha-estilo" sitekey="6Ldzi1UqAAAAAADbp1EBcGWuWOy5YsLJD1ja_Lfe" onChange={onChange}/>
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