import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import appFirebase from './credenciales';

import {getAuth, onAuthStateChanged}from 'firebase/auth';

import Login from './Pages/Login';
import RegistrarUsuario from './Pages/RegistrarUsuario';
import InformesReportes from './Pages/InformesReportes';
import FlujoVehicular from './Pages/FlujoVehicular';
import GestionUsuarios from './Pages/GestionUsuarios';
import ReportePasadas from './Pages/ReportePasadas';

import'./App.css'

const auth = getAuth(appFirebase)


function App() {

  const [usuario, setUsuario] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, (usuarioFirebase)=>{
      if(usuarioFirebase){
        setUsuario(usuarioFirebase)
      }else{
        setUsuario(null)
      }
    });
  }, []);
  
  
  return (
    <Router>
      <Routes>
        {usuario ? (
          <>
            <Route path="/registrar-usuarios" element={<RegistrarUsuario />} />
            <Route path="/flujo-vehicular" element={<ReportePasadas />} />
            <Route path="/gestion-usuarios" element={<GestionUsuarios />} />
            <Route path="/reporte" element={<InformesReportes />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/" />} />
        )}
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
    
  )
}

export default App;

