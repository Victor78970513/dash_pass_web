import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import appFirebase from './credenciales';

import {getAuth, onAuthStateChanged}from 'firebase/auth';

import Login from './Pages/auth/Login';
import RegistrarUsuario from './Pages/RegistrarUsuario';
import InformesReportes from './Pages/InformesReportes';
import MonitoreoVehicular from './Pages/MonitoreoVehicular';
import GestionPeajes from './Pages/GestionPeajes';
import'./App.css'
import { AuthProvider } from './Pages/auth/AuthContext';

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
    <AuthProvider>
    <Router>
      <Routes>
        {usuario ? (
          <>
            <Route path="/registrar-usuarios" element={<RegistrarUsuario />} />
            <Route path="/monitoreo-vehicular" element={<MonitoreoVehicular />} />
            <Route path="/gestion-peajes" element={<GestionPeajes />} />
            <Route path="/reporte" element={<InformesReportes />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/" />} />
        )}
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
    </AuthProvider>
    
  )
}

export default App;

