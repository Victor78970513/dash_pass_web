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


// import React from 'react'
// import appFirebase from '../credenciales'
// import {getAuth, signOut} from 'firebase/auth'
// import NavBar from '../components/Navbarr'
// const auth = getAuth(appFirebase)

// const Home = ({correoUsuario}) => {
//   return (

//     <NavBar></NavBar>
//     <div>
//         <div className='bienvenido'>Bienvenido a la pagina de administracion {correoUsuario} </div>
//         <button onClick={()=>signOut(auth)}>logout</button>
//     </div>
//   )
// }

// export default Home