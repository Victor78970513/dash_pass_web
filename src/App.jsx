import { useState, useEffect } from 'react';
import appFirebase from './credenciales';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Login from './components/Login';
import Home from './components/Home';
import './App.css';

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

    // Limpieza de la suscripción al desmontar el componente
    return () => unsubscribe();
  }, [auth]);

  return (
    <div>
      {usuario ? <Home correoUsuario={usuario.email} /> : <Login />}
    </div>
  );
}

export default App;
