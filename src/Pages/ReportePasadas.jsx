import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import './ReportePasadas.css'; // Asegúrate de que esta ruta sea correcta
//import Navbar from './components/Navbar.jsx';
import NavBar from '../components/Navbar';
// Tu configuración de Firebase
import { db } from "../credenciales";

const ReportePasadas = () => {
  const { uid } = useParams();
  const [lastScannedUid, setLastScannedUid] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [scanHistory, setScanHistory] = useState([]);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const buscarUsuario = async (tarjetaId) => {
    try {
      setLoading(true);
      setError(null);

      const usuariosRef = collection(db, 'usuarios');
      const q = query(usuariosRef, where('TarjetaID', '==', tarjetaId));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userData = querySnapshot.docs[0].data();
        setUserData(userData);
        return userData;
      } else {
        setUserData(null);
        setError('Usuario no encontrado');
        return null;
      }
    } catch (error) {
      console.error('Error al buscar usuario:', error);
      setError('Error al buscar usuario');
      setUserData(null);
      return null;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const socket = io('http://localhost:3001');

    socket.on('connect', () => {
      setIsConnected(true);
      console.log('Conectado al servidor');
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
      console.log('Desconectado del servidor');
    });

    socket.on('uid', async (data) => {
      const cleanedUid = data.replace("UID de la tarjeta:", "").trim().replace(/\s+/g, ''); // Limpia el UID
      /* console.log("UID limpio recibido:", cleanedUid); */
      setLastScannedUid(cleanedUid);

      const usuario = await buscarUsuario(cleanedUid);
      setScanHistory(prevHistory => [...prevHistory, {
        uid: cleanedUid,
        timestamp: new Date().toLocaleString(),
        usuario: usuario ? usuario.nombre : 'No encontrado'
      }]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="p-4">
      {/* <Navbar /> */}
      <NavBar />
      <h1 className="text-2xl font-bold mb-2">Reporte de Pasadas</h1>
      
     {/* <div className="bg-gray-100 p-3 rounded mb-4">
        <p>Estado: {isConnected ? <span className="text-green-600">Conectado</span> : <span className="text-red-600">Desconectado</span>}</p>
        <p>Último UID escaneado: <strong>{lastScannedUid || 'Ninguno'}</strong></p>
      </div> */}

      {/* Tabla combinada */}
      <table>
        <thead>
          <tr>
            <th>UID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Saldo</th>
            <th>Vehiculo</th>
            <th>Fecha y Hora</th>
          </tr>
        </thead>
        <tbody>
          {userData && (
            <tr>
              <td>{lastScannedUid || 'N/A'}</td>
              <td>{userData.nombre}</td>
              <td>{userData.email}</td>
              <td>S/. {userData.saldo}</td>
              <td>{userData.vehiculoId}</td>
              <td>-</td>
            </tr>
          )}
          {scanHistory.map((scan, index) => (
            <tr key={index}>
              <td>{scan.uid}</td>
              <td>{scan.usuario}</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>{scan.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportePasadas;
