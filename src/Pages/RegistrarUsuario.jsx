import React from 'react';
import appFirebase from '../credenciales';
import { getAuth, signOut } from 'firebase/auth';
import NavBar from '../components/Navbar';
import Navegacion from '../components/Navegacion';
const auth = getAuth(appFirebase);

const Home = () => {
  return (
    <div class="cuerpo">
      <NavBar />
      <Navegacion />
      <div className='bienvenido'>
        {/* aqui va tu parte */}
      </div>
    </div>
  );
};

export default Home;
