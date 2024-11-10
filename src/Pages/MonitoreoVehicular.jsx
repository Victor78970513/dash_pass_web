import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, doc, onSnapshot, getDoc } from 'firebase/firestore';
import './ReportePasadas.css';
import NavBar from '../components/Navbar';
import { db } from "../credenciales";

const MonitoreoVehicular = () => {
  const { uid } = useParams();
  const [scanHistory, setScanHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterPlaca, setFilterPlaca] = useState(''); // Estado para la placa
  const [filteredHistory, setFilteredHistory] = useState([]); // Estado para los datos filtrados

  // Configura la escucha en tiempo real de la colección "pases"
  useEffect(() => {
    const passesRef = collection(db, 'pases');
    const unsubscribe = onSnapshot(passesRef, async (snapshot) => {
      setLoading(true);
      const updatedScanHistory = [];

      for (const docSnapshot of snapshot.docs) {
        const paseData = docSnapshot.data();
        const userId = paseData.id_usuario;
        const vehicleId = paseData.vehiculo_id;

        // Obtener datos del usuario
        const userRef = doc(db, 'usuarios', userId);
        const userSnapshot = await getDoc(userRef);
        const userData = userSnapshot.exists() ? userSnapshot.data() : null;

        // Obtener datos del vehículo
        const vehicleRef = doc(db, 'vehiculos', vehicleId);
        const vehicleSnapshot = await getDoc(vehicleRef);
        const vehicleData = vehicleSnapshot.exists() ? vehicleSnapshot.data() : null;

        // Agregar al historial con los datos completos
        updatedScanHistory.push({
          id: docSnapshot.id,
          uid: paseData.uid,
          timestamp: paseData.created_at,
          nombre: userData ? userData.name : 'Usuario no encontrado',
          email: userData ? userData.email : 'No disponible',
          monto: paseData.monto,
          vehiculoId: vehicleData ? vehicleData.marca : 'Vehículo no encontrado',
          vehiculoPlaca: vehicleData ? vehicleData.placa : 'No disponible'
        });
      }

      setScanHistory(updatedScanHistory);
      setLoading(false);
    }, (error) => {
      console.error('Error al obtener los datos de pases:', error);
      setLoading(false);
    });

    // Limpiar la suscripción cuando el componente se desmonte
    return () => unsubscribe();
  }, []);

  // Filtra los resultados según la placa
  const handleFilterChange = (event) => {
    setFilterPlaca(event.target.value);
  };

  const handleFilterClick = () => {
    if (filterPlaca === '') {
      setFilteredHistory(scanHistory);
    } else {
      const filtered = scanHistory.filter(scan => 
        scan.vehiculoPlaca.toLowerCase().includes(filterPlaca.toLowerCase().trim())
      );
      setFilteredHistory(filtered);
    }
  };
  

  return (
    <div className="principal">
      <NavBar />
      <h1 className="text-2xl font-bold mb-2">Monitoreo Vehicular</h1>
      <div className="filtro-container">
  <div className="filtro">
    <input 
      type="text" 
      value={filterPlaca} 
      onChange={handleFilterChange} 
      placeholder="Filtrar por placa" 
      className="input-filtro"
    />
    <button onClick={handleFilterClick} className="btn-filtrar">Filtrar</button>
  </div>
</div>
      <div className='tabla-monitoreo'>
        {loading ? <p>Cargando...</p> : (
          <table>
            <thead>
              <tr>
                <th>UID</th>
                <th>Nombre</th>
                <th>Email</th>
                <th>Monto</th>
                <th>Vehículo</th>
                <th>Placa Vehículo</th>
                <th>Fecha y Hora</th>
              </tr>
            </thead>
            <tbody>
              {(filterPlaca ? filteredHistory : scanHistory).map((scan, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{scan.nombre || 'N/A'}</td>
                  <td>{scan.email || 'N/A'}</td>
                  <td>{scan.monto ? `Bs. ${scan.monto}` : 'N/A'}</td>
                  <td>{scan.vehiculoId || 'N/A'}</td>
                  <td>{scan.vehiculoPlaca || 'N/A'}</td>
                  <td>{new Date(scan.timestamp?.seconds * 1000).toLocaleString() || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default MonitoreoVehicular;









// useEffect(() => {
//   const socket = io('http://localhost:3001');

//   socket.on('connect', () => {
//     setIsConnected(true);
//     console.log('Conectado al servidor');
//   });

//   socket.on('disconnect', () => {
//     setIsConnected(false);
//     console.log('Desconectado del servidor');
//   });

//   socket.on('uid', async (data) => {
//     const cleanedUid = data.replace("UID de la tarjeta:", "").trim().replace(/\s+/g, ''); // Limpia el UID
//     /* console.log("UID limpio recibido:", cleanedUid); */
//     setLastScannedUid(cleanedUid);

//     const usuario = await buscarUsuario(cleanedUid);
//     setScanHistory(prevHistory => [...prevHistory, {
//       uid: cleanedUid,
//       timestamp: new Date().toLocaleString(),
//       usuario: usuario ? usuario.nombre : 'No encontrado'
//     }]);
//   });

//   return () => {
//     socket.disconnect();
//   };
// }, []);




// const buscarUsuario = async (tarjetaId) => {
//   try {
//     setLoading(true);
//     setError(null);

//     const usuariosRef = collection(db, 'usuarios');
//     const q = query(usuariosRef, where('TarjetaID', '==', tarjetaId));
//     const querySnapshot = await getDocs(q);

//     if (!querySnapshot.empty) {
//       const userData = querySnapshot.docs[0].data();
//       setUserData(userData);
//       return userData;
//     } else {
//       setUserData(null);
//       setError('Usuario no encontrado');
//       return null;
//     }
//   } catch (error) {
//     console.error('Error al buscar usuario:', error);
//     setError('Error al buscar usuario');
//     setUserData(null);
//     return null;
//   } finally {
//     setLoading(false);
//   }
// };
