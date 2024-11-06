import React from 'react';
import { useLocation } from 'react-router-dom';
import appFirebase from '../credenciales';
import { getAuth, signOut } from 'firebase/auth';
import NavBar from '../components/Navbar';
import Navegacion from '../components/Navegacion';
import { navigationConfig } from './navigationConfig';
// import Navegacion from '../components/Navegacion';
const auth = getAuth(appFirebase);

const Home = () => {

  const location = useLocation();
  const currentSection = location.pathname.split('/')[1]; // obtiene 'registrar-usuarios'
  const { title, actions } = navigationConfig[currentSection];

  return (
    <div className="cuerpo">
      <NavBar />
      <Navegacion title={title} actions={actions} />
      {/* <Navegacion /> */}
      <div className='bienvenido'>
        {/* aqui va tu parte */}
      </div>
    </div>
  );
};

export default Home;
