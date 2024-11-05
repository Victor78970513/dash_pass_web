import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import Logo from '/img/logo.svg';
import appFirebase from '../credenciales';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import '../App.css';

const auth = getAuth(appFirebase);

const Login = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Inicializa el hook de navegación

  const fAutenticacion = async (e) => {
    e.preventDefault();
    const correo = e.target.correo.value;
    const contrasena = e.target.contrasena.value;

    try {
      await signInWithEmailAndPassword(auth, correo, contrasena);
      console.log("Inicio de sesión exitoso");
      setError(null);
      navigate('/home'); // Redirige al componente Home después de la autenticación exitosa
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setError("Correo o contraseña incorrectos");
    }
  };

  return (
    <div>
      <div className="registro-contenedor">
        <div className="registro-caja">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <h3>Ingrese sus credenciales</h3>
          <form className="registro-formulario" onSubmit={fAutenticacion}>
            <label htmlFor="usuario">Correo Electrónico:</label>
            <input
              type="text"
              id="correo"
              name="correo"
              placeholder="Ingrese su correo electrónico"
              required
            />

            <label htmlFor="correo">Contraseña:</label>
            <input
              type="password"
              id="contrasena"
              name="contrasena"
              placeholder="Ingrese su contraseña"
              required
            />

            <button type="submit">Ingresar</button>
          </form>

          {error && <p style={{ color: 'red' }}>{error}</p>}

          <div className="enlaces-pie">
            <a href="/recuperar-contraseña">¿Olvidaste tu contraseña?</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
