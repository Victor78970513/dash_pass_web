// import React, { useState } from 'react';
// import { XIcon } from 'lucide-react';

// const AddUserModal = ({ onClose, onSaveUser }) => {
//   const [newUser, setNewUser] = useState({
//     name: '',
//     carnet: '',
//     placa: '',
//   });

//   const handleInputChange = (e) => {
//     setNewUser({ ...newUser, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = () => {
//     onSaveUser(newUser); // Pasa solo los datos
//     onClose();
//   };

//   return (
//     <div className="modal-container">
//         <div className="modal">
//           <div className="modal-header">
//             <h2 className='titulo-usuario'>Agregar Nuevo Usuario</h2>
//             <button className="close-button" onClick={onClose}>
//               <XIcon className="icon" />
//             </button>
//           </div>
//           <div className="modal-body">
//             <input
//               type="text"
//               name="name"
//               placeholder="Nombre"
//               value={newUser.name}
//               onChange={handleInputChange}
//             />
//             <input
//               type="text"
//               name="carnet"
//               placeholder="Carnet"
//               value={newUser.carnet}
//               onChange={handleInputChange}
//             />
//             <input
//               type="text"
//               name="placa"
//               placeholder="Placa"
//               value={newUser.placa}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="modal-footer">
//             <button className="save-button" onClick={handleSubmit}>
//               Guardar
//             </button>
//           </div>
//         </div>
//       </div>
//   );
// };

// export default AddUserModal;

import React, { useState, useEffect } from 'react';
import './styles/AgregarUsuario.css';

const AgregarUsuario = ({ usuario, onGuardar, onClose }) => {
  const [nombre, setNombre] = useState('');
  const [carnet, setCarnet] = useState('');
  const [placa, setPlaca] = useState('');

  useEffect(() => {
    if (usuario) {
      // Rellenar los campos si se edita un usuario existente
      setNombre(usuario.nombre);
      setCarnet(usuario.carnet);
      setPlaca(usuario.placa);
    }
  }, [usuario]);

  const handleGuardar = () => {
    const nuevoUsuario = { id: usuario ? usuario.id : null, nombre, carnet, placa };
    onGuardar(nuevoUsuario);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{usuario ? 'Editar Usuario' : 'Agregar Nuevo Usuario'}</h2>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="text"
          placeholder="Carnet"
          value={carnet}
          onChange={(e) => setCarnet(e.target.value)}
        />
        <input
          type="text"
          placeholder="Placa"
          value={placa}
          onChange={(e) => setPlaca(e.target.value)}
        />
        <button onClick={handleGuardar}>Guardar</button>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default AgregarUsuario;
