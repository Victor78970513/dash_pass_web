import React, { useState } from 'react';
import { XIcon } from 'lucide-react';

const AddUserModal = ({ onClose, onSaveUser }) => {
  const [newUser, setNewUser] = useState({
    name: '',
    carnet: '',
    placa: '',
  });

  const handleInputChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSaveUser(newUser); // Pasa solo los datos
    onClose();
  };

  return (
    <div className="modal-container">
        <div className="modal">
          <div className="modal-header">
            <h2 className='titulo-usuario'>Agregar Nuevo Usuario</h2>
            <button className="close-button" onClick={onClose}>
              <XIcon className="icon" />
            </button>
          </div>
          <div className="modal-body">
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              value={newUser.name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="carnet"
              placeholder="Carnet"
              value={newUser.carnet}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="placa"
              placeholder="Placa"
              value={newUser.placa}
              onChange={handleInputChange}
            />
          </div>
          <div className="modal-footer">
            <button className="save-button" onClick={handleSubmit}>
              Guardar
            </button>
          </div>
        </div>
      </div>
  );
};

export default AddUserModal;