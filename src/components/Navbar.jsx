import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';  // Agrega aquí 'Link'
import appFirebase from '../credenciales';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const auth = getAuth(appFirebase);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log('Sesión cerrada correctamente');
        navigate('/'); // Redirige a la página de login
      })
      .catch((error) => {
        console.error('Error al cerrar sesión:', error);
      });
  };

  return (
    
    <nav className="navbar">
       
      <ul className="navbar-list">
      <div className="logo">
       <img src="../public/img/logo.svg" alt="Logo" className="navbar-logo" />
      </div>
        <li className="navbar-item">
          <Link to="/home" className="navbar-link">Gestión de Usuarios</Link>
        </li>
        <li className="navbar-item">
          <Link to="/tarjetas-rfid" className="navbar-link">Tarjetas de Usuarios RFID</Link>
        </li>
        <li className="navbar-item">
          <Link to="/registrar-usuario" className="navbar-link">Registrar Usuario</Link>
        </li>
        <li className="navbar-item">
          <Link to="/report-pasadas" className="navbar-link">Reporte de pasadas</Link>
        </li>
        <li className="navbar-item">
          <Link to="/soporte" className="navbar-link">Soporte & Ayuda</Link>
        </li>
        <li className="navbar-item">
          <button onClick={handleLogout} className="logout-button">
            Cerrar sesión
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
