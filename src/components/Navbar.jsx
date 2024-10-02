import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="#" className="navbar-link">Gestión de Usuarios</a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">Tarjetas de Usuarios RFID</a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">Registrar Usuario</a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">Reporte de pasadas</a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">Soporte & Ayuda</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
