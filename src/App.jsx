import { useState, useEffect } from 'react';
import appFirebase from './credenciales';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Login from './components/Login';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReportePasadas from './ReportePasadas';

function App() {
  const [usuario, setUsuario] = useState(null);
  const auth = getAuth(appFirebase);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
      if (usuarioFirebase) {
        setUsuario(usuarioFirebase);
      } else {
        setUsuario(null);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={usuario ? <Home correoUsuario={usuario.email} /> : <Login />} />
        <Route path="/home" element={<Home correoUsuario={usuario ? usuario.email : ''} />} />
        <Route path="/report-pasadas" element={<ReportePasadas />} />
      </Routes>
    </Router>
  );
}

export default App;
