import { useState } from 'react'

import appFirebase from './credenciales'
import {getAuth, onAuthStateChanged}from 'firebase/auth'
const auth = getAuth(appFirebase)

import Login from './components/Login'
import Home from './components/Home'

import'./App.css'

function App() {

  const [usuario, setUsuario] = useState(null)

  onAuthStateChanged(auth, (usuarioFirebase)=>{
    if(usuarioFirebase){
      setUsuario(usuarioFirebase)
    }else{
      setUsuario(null)
    }
  })
  
  return (
    <div>
      {usuario ? <Home correoUsuario = {usuario.email} /> : <Login/>}

    </div>
    
  )
}

export default App;

