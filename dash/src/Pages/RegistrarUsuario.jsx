import React from 'react';
import appFirebase from '../credenciales';
import { getAuth, signOut } from 'firebase/auth';
import NavBar from '../components/Navbar'; // Asegúrate de que el archivo se llama correctamente
const auth = getAuth(appFirebase);

const Home = ({ correoUsuario }) => {
  return (
    <>
      <NavBar />
      <div>
        <div className='bienvenido'>
          Bienvenido a la página de administración, {correoUsuario}
        </div>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </>
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