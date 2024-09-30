import React from 'react'
import appFirebase from '../credenciales'
import {getAuth, signOut} from 'firebase/auth'
const auth = getAuth(appFirebase)

const Home = ({correoUsuario}) => {
  return (
    
    <div>
        <div className='bienvenido'>Bienvenido a la pagina de administracion {correoUsuario} </div>
        <button onClick={()=>signOut(auth)}>logout</button>
    </div>
  )
}

export default Home