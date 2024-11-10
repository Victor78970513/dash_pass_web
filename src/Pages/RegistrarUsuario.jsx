import {React, useState} from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../components/Navbar';
import Navegacion from '../components/Navegacion';
import { navigationConfig } from './navigationConfig';
import AgregarUsuario from './AgregarUsuario';
import './styles/AgregarUsuario.css';


const Home = () => {

  const location = useLocation();
  const currentSection = location.pathname.split('/')[1]; // obtiene 'registrar-usuarios'
  const { title, actions } = navigationConfig[currentSection];

  const [usuarios, setUsuarios] = useState([
    { id: 1, nombre: 'Juan', carnet: '12345678', placa: 'ABC123' },
    { id: 2, nombre: 'Maria', carnet: '87654321', placa: 'XYZ789' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);


  const [formData, setFormData] = useState({
    nombre: '',
    carnet: '',
    placa: '',
  });

  const handleAgregarUsuario = () => {
    setUsuarioSeleccionado(null); // No hay usuario seleccionado al agregar
    setIsModalOpen(true);
    console.log('modal: ',isModalOpen);
  };

  const handleEditarUsuario = (usuario) => {
    setUsuarioSeleccionado(usuario); // Establecer el usuario a editar
    console.log('preion');
    setIsModalOpen(true);
  };

  const handleEliminarUsuario = (id) => {
    setUsuarios(usuarios.filter(usuario => usuario.id !== id));
  };

  const handleGuardarUsuario = (usuario) => {
    if (usuario.id) {
      // Editar usuario existente
      setUsuarios(usuarios.map(u => (u.id === usuario.id ? usuario : u)));
    } else {
      // Agregar nuevo usuario
      usuario.id = usuarios.length + 1;
      setUsuarios([...usuarios, usuario]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="cuerpo">
      <NavBar />
      <Navegacion title={title} actions={actions} />
      {/* <Navegacion /> */}
      <div className='lista-usuarios'>
      {/* <h2>Lista de Usuarios</h2> */}
      <button onClick={handleAgregarUsuario} className="boton-agregar">+ Agregar Usuario</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Carnet</th>
            <th>Placa</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(usuario => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.nombre}</td>
              <td>{usuario.carnet}</td>
              <td>{usuario.placa}</td>
              <td>
                <button onClick={() => handleEditarUsuario(usuario)} className="boton-editar">
                  Editar
                </button>
              </td>
              <td>
                <button onClick={() => handleEliminarUsuario(usuario.id)} className="boton-eliminar">
                  Borrar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && (
        <AgregarUsuario
          usuario={usuarioSeleccionado}
          onGuardar={handleGuardarUsuario}
          onClose={() => setIsModalOpen(false)}
        />
      )}    
      </div>
    </div>
  );
};

export default Home;
