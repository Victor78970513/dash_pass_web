import React, { useState } from 'react'
import Logo from '/img/logo.svg'
import ReCAPTCHA from "react-google-recaptcha"
import appFirebase from '../../credenciales'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import '../styles/Login.css';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { useAuth } from './AuthContext';
const auth = getAuth(appFirebase)
const db = getFirestore(appFirebase);

const Login = () => {

    const navigate = useNavigate();
    const { setRole, setUser } = useAuth(); 
    const [recaptchaValue, setRecaptchaValue] = useState(null);

    const onChange = (value) => {
        setRecaptchaValue(value);
        console.log('Captcha Value: ', value);
    }
    
    const fAutenticacion = async(e) =>{
        e.preventDefault();
        const correo = e.target.correo.value;
        const contrasena = e.target.contrasena.value;

        if (!recaptchaValue) {
            alert("Por favor, completa el CAPTCHA");
            return;
        }
        console.log(correo);   
        console.log(contrasena);  
        try {
            const userCredential = await signInWithEmailAndPassword(auth, correo, contrasena);
            const uid = userCredential.user.uid;
            console.log(uid);
            const usuariosRef = collection(db, 'administradores');
            const q = query(usuariosRef, where('uid', '==',uid));
            const querySnapshot = await getDocs(q);

            if(!querySnapshot.empty){
                const userDoc = querySnapshot.docs[0].data();
                const rolId = userDoc.rol_id;
                setUser(uid)
                setRole(rolId)
                navigate('/registrar-usuarios');
                console.log("Inicio de sesión exitoso");
                
            }
        } catch (error) {
            console.error("Error al iniciar sesión:", error.message);
            alert("Error al iniciar sesión. Verifica tus credenciales.");
        }
        
    }
  return (
    <div>
        <div className="registro-contenedor">
            <div className="registro-caja">
                <div className="login-logo">
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