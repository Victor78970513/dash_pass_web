import React from 'react';
import appFirebase from '../credenciales';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Logo from '/img/logo.svg'
// import { LogOut } from 'lucide-react';
import './styles/NavBarr.css';

const auth = getAuth(appFirebase);

const NavBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth).then(() => {
      // Redirigimos al usuario a la página de Login después de cerrar sesión
      navigate('/');
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

        {/* Navigation Items */}
        <div className="nav-items">
          <button className="nav-button">Registro de Usuarios</button>
          <button className="nav-button">Flujo vehicular</button>
          <button className="nav-button">Gestión de Usuarios</button>
          <button className="nav-button">Informes y Reportes</button>
        </div>

        {/* Logout Button */}
        <button className="logout-button" onClick={handleLogout}>
          <span>Logout</span>
          {/* <LogOut size={18} /> */}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;




////////////////////////////////////////////////////////
// import React from 'react';
// import './styles/Navbar.css';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <ul className="navbar-list">
//         <li className="navbar-item">
//           <a href="#" className="navbar-link">Gestión de Usuarios</a>
//         </li>
//         <li className="navbar-item">
//           <a href="#" className="navbar-link">Flujo Vehicular</a>
//         </li>
//         <li className="navbar-item">
//           <a href="#" className="navbar-link">Registrar Usuario</a>
//         </li>
//         <li className="navbar-item">
//           <a href="#" className="navbar-link">Reporte de pasadas</a>
//         </li>
//         <li className="navbar-item">
//           <a href="#" className="navbar-link">Informes y Reportes</a>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
