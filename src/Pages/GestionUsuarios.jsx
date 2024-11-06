import React, { useState, useEffect } from 'react';
import { Button, Modal, Form, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/GestionPeajes.css';
import NavBar from '../components/Navbar';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../credenciales'; // Asegúrate de importar la configuración de Firebase

const GestionUsuarios = () => {
  const [peajes, setPeajes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editPeaje, setEditPeaje] = useState(null); 

  // Obtener los peajes de Firestore al cargar el componente
  useEffect(() => {
    const fetchPeajes = async () => {
      const querySnapshot = await getDocs(collection(db, 'Peajes')); // Asegúrate de tener la colección 'peajes' en Firestore
      const peajesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPeajes(peajesData);
    };

    fetchPeajes();
  }, []);

  // Función para agregar un nuevo peaje
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const nombre = form.nombre.value;
    const encargado = form.encargado.value;
    const ubicacion = form.ubicacion.value;
    const monto = parseFloat(form.monto.value);

    if (editPeaje) {
      // Actualizar un peaje existente
      const peajeRef = doc(db, 'Peajes', editPeaje.id);
      await updateDoc(peajeRef, { nombre, encargado, ubicacion, monto });
      setPeajes(peajes.map(p => (p.id === editPeaje.id ? { ...p, nombre, encargado, ubicacion, monto } : p)));
    } else {
      // Agregar un nuevo peaje
      const newPeaje = { nombre, encargado, ubicacion, monto };
      const docRef = await addDoc(collection(db, 'Peajes'), newPeaje);
      setPeajes([...peajes, { id: docRef.id, ...newPeaje }]);
    }
    
    handleCloseModal();
  };

  // Función para eliminar un peaje
  const handleDelete = async (id) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar este peaje?")) {
      const peajeRef = doc(db, 'Peajes', id);
      await deleteDoc(peajeRef);
      setPeajes(peajes.filter(p => p.id !== id));
    }
  };

  // Funciones de modal
  const handleShowModal = (peaje = null) => {
    setEditPeaje(peaje);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditPeaje(null);
  };

  return (
    <div className="container mt-5">
      <NavBar />
      <h2 className="mb-4">Gestion de Peajes (Modo Super Administrador)</h2>
      <Button variant="success" onClick={() => handleShowModal()}>+ Agregar Peaje</Button>

      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Encargado</th>
            <th>Ubicación</th>
            <th>Monto(Bs)</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {peajes.map((peaje) => (
            <tr key={peaje.id}>
              <td>{peaje.id}</td>
              <td>{peaje.nombre}</td>
              <td>{peaje.encargado}</td>
              <td>{peaje.ubicacion}</td>
              <td>{peaje.monto}</td>
              <td><Button variant="info" onClick={() => handleShowModal(peaje)}>Editar</Button></td>
              <td><Button variant="danger" onClick={() => handleDelete(peaje.id)}>Borrar</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>

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
              <Form.Control
                type="text"
                name="encargado"
                defaultValue={editPeaje ? editPeaje.encargado : ''}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Ubicación</Form.Label>
              <Form.Control
                type="text"
                name="ubicacion"
                defaultValue={editPeaje ? editPeaje.ubicacion : ''}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Monto(Bs)</Form.Label>
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

export default GestionUsuarios;