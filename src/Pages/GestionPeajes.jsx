import React, { useState, useEffect } from 'react';
import { Button, Modal, Form, Card, Dropdown, CardText } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/GestionPeajes.css';
import NavBar from '../components/Navbar';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../credenciales';
import { useAuth } from '../Pages/auth/AuthContext';
import Map, {
  Marker
} from "react-map-gl";

const GestionPeajes = () => {
  const [lng, setLng] = useState(-68.1396478468924);
  const [lat, setLat] = useState(-16.4985065423747);
  const { rolId, userId } = useAuth();
  const [peajes, setPeajes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editPeaje, setEditPeaje] = useState(null);
  const [encargados, setEncargados] = useState([]);
  const [selectedEncargado, setSelectedEncargado] = useState(null);
  const [ubicacion, setUbicacion] = useState(null);
  const [viewport, setViewport] = useState({
    latitude: 13.089,
    longitude: -59.617,
    zoom: 12
  });

  useEffect(() => {
    const fetchPeajes = async () => {
      const querySnapshot = await getDocs(collection(db, 'peajes'));
      const peajesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPeajes(peajesData);
    };

    const fetchEncargados = async () => {
      const querySnapshot = await getDocs(collection(db, 'administradores'));
      const encargadosData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setEncargados(encargadosData);
    };

    fetchPeajes();
    fetchEncargados();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const nombre = form.nombre.value;
    const user_id = selectedEncargado;
    const tarifa = parseFloat(form.monto.value);
    const newPeaje = { nombre, user_id, ubicacion, tarifa };

    try {
      if (editPeaje) {
        // Actualizar un peaje existente
        const peajeRef = doc(db, 'peajes', editPeaje.id);
        await updateDoc(peajeRef, { nombre, user_id, ubicacion, tarifa });
        setPeajes(peajes.map(p => (p.id === editPeaje.id ? { ...p, nombre, user_id, ubicacion, tarifa } : p)));
      } else {
        const docRef = await addDoc(collection(db, 'peajes'), newPeaje);
        await setDoc(doc(db, 'peajes', docRef.id), { peaje_id: docRef.id }, { merge: true });
        setPeajes([...peajes, { id: docRef.id, peaje_id: docRef.id, ...newPeaje }]);
      }

      handleCloseModal();
    } catch (error) {
      console.error("Error al agregar/actualizar peaje: ", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar este peaje?")) {
      const peajeRef = doc(db, 'peajes', id);
      await deleteDoc(peajeRef);
      setPeajes(peajes.filter(p => p.id !== id));
    }
  };

  const handleShowModal = (peaje = null) => {
    setEditPeaje(peaje);
    setShowModal(true);
    if (peaje) {
      setSelectedEncargado(peaje.encargado);
      setUbicacion(peaje.ubicacion);
    } else {
      setSelectedEncargado(null);
      setUbicacion(null);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditPeaje(null);
    setSelectedEncargado(null);
    setUbicacion(null);
  };

  // Filtrar los peajes en función del rol
  const filteredPeajes = rolId === 1 ? peajes : peajes.filter(peaje => peaje.user_id === userId);

  const findEncargado = (userId) => {
    const encargado = encargados.find(admin => admin.uid === userId);
    return encargado ? encargado.name : 'Encargado no encontrado';
  };

  return (
    <div>
      <NavBar />
      <h2 className="mb-4">
        Gestión de Peajes {rolId === 1 ? '(Modo Super Administrador)' : '(Modo Administrador)'}
      </h2>

      {rolId === 1 && (
        <div>
          <Button variant="success" onClick={() => handleShowModal()}>+ Agregar Peaje</Button>
          <div className="peajes-container mt-3">
            {filteredPeajes.map((peaje) => (
              <Card key={peaje.id} className="peaje-card" onClick={() => handleShowModal(peaje)}>
                <Card.Body>
                  <Card.Title>{peaje.nombre}</Card.Title>
                  <Card.Text>
                    <strong>Encargado:</strong> {findEncargado(peaje.user_id)}
                    <br/>
                    <strong>Ubicación:</strong> {peaje.ubicacion}
                    <br/>
                    <strong>Tarifa:</strong> {peaje.tarifa}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      )}

      {rolId === 2 && filteredPeajes.length > 0 && (
        <div className="peaje-detail-container">
          <h3>Detalles del Peaje</h3>
          <div className="peaje-detail">
            <p><strong>Nombre:</strong> {filteredPeajes[0].nombre}</p>
            <p><strong>Encargado:</strong> {filteredPeajes[0].encargado}</p>
            <p><strong>Ubicación:</strong> {filteredPeajes[0].ubicacion}</p>
            <p><strong>Monto:</strong> {filteredPeajes[0].tarifa} Bs</p>
          </div>
        </div>
      )}

      {/* Modal para agregar/editar peajes */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{editPeaje ? 'Editar Peaje' : 'Agregar Peaje'}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Nombre del Peaje</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                defaultValue={editPeaje ? editPeaje.nombre : ''}
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Encargado</Form.Label>
              <div className="encargados-list">
                {encargados.map((encargado) => (
                  <div
                    key={encargado.id}
                    className="encargado-circle"
                    onClick={() => setSelectedEncargado(encargado.id)}
                    style={{
                      display: 'inline-block',
                      margin: '5px',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: '#007bff',
                      color: '#fff',
                      textAlign: 'center',
                      lineHeight: '40px',
                      cursor: 'pointer',
                      fontSize: '18px',
                    }}
                  >
                    {encargado.name[0]} {/* Muestra la primera letra del nombre */}
                  </div>
                ))}
              </div>
              {selectedEncargado && (
                <div className="mt-2">Encargado seleccionado: {encargados.find(e => e.id === selectedEncargado).nombre}</div>
              )}
            </Form.Group>

            {/* Mapa */}
            <Form.Group>
              <Form.Label>Ubicación</Form.Label>
              <div className='map-container'>
                <Map
                initialViewState={{
                  longitude: -68.1396478468924,
                  latitude: -16.4985065423747,
                  zoom: 14,
                }}
                  mapboxAccessToken="pk.eyJ1Ijoid2lzY28xMiIsImEiOiJjbGhncHk1dWwwYXIxM2NwODk3cHEyemc5In0.lestajmAjlTu3qsjw-gNsg"
                  // center={[viewport.latitude, viewport.longitude]}
                  style={{ width: "380px", borderRadius: "30px",marginBottom:"20px" }}
                  mapStyle={"mapbox://styles/wisco12/clhi0osie02pa01pa51byh81b"}
                  onClick={(e) => {
                    setUbicacion(`https://www.google.com/maps?q=${e.lngLat.lat},${e.lngLat.lng}`)
                    setLng(e.lngLat.lng)
                    setLat(e.lngLat.lat)
                  }}
                >
                </Map>
              </div>
              {ubicacion && (
                <div className="mt-2">Ubicación seleccionada: <a href={ubicacion} target="_blank" rel="noopener noreferrer">{ubicacion}</a></div>
              )}
            </Form.Group>

            <Form.Group>
              <Form.Label>Monto (Bs)</Form.Label>
              <Form.Control
                type="number"
                name="monto"
                defaultValue={editPeaje ? editPeaje.monto : ''}
                step="0.01"
                required
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>Cancelar</Button>
            <Button type="submit" variant="primary">{editPeaje ? 'Actualizar' : 'Agregar'}</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default GestionPeajes;
