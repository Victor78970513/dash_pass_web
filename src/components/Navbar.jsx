import React from 'react';
import appFirebase from '../credenciales';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Logo from '/img/logo.svg';
import './styles/NavBars.css';

const auth = getAuth(appFirebase);

const NavBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate('/'); // Redirige al usuario a la página de Login después de cerrar sesión
    }).catch((error) => {
      console.error("Error al cerrar sesión:", error);
    });
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo and System Name */}
        <div className="brand-section">
          <div className="logo">
            <img src={Logo} alt="Logo"/>
          </div>
          <div className="system-name">
            <span className="system-title">Sistema administrativo</span>
            <span className="system-subtitle">DASH-PASS</span>
          </div>
        </div>

        {/* Elementos de navegación */}
        <div className="nav-items">
          <button className="nav-button" onClick={() => navigate('/registrar-usuarios')}>Registro de Usuarios</button>
          <button className="nav-button" onClick={() => navigate('/flujo-vehicular')}>Monitoreo vehicular</button>
          <button className="nav-button" onClick={() => navigate('/gestion-usuarios')}>Gestión de Usuarios</button>
          <button className="nav-button" onClick={() => navigate('/reporte')}>Informes y Reportes</button>
        </div>

        {/* Botón de logout */}
        <button className="logout-button" onClick={handleLogout}>
          <span>Logout</span>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
