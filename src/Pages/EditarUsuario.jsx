// EditUserModal.js
import React, { useState } from 'react';
import { XIcon } from 'lucide-react';

const EditUserModal = ({ user, onClose, onSaveUser }) => {
  const [updatedUser, setUpdatedUser] = useState(user);

  const handleInputChange = (e) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSaveUser(updatedUser);
    onClose();
  };

  return (
    <div className="modal-container">
      <div className="modal">
        <div className="modal-header">
          <h2 className='titulo-usuario'>Editar Usuario</h2>
          <button className="close-button" onClick={onClose}>
            <XIcon className="icon" />
          </button>
        </div>
        <div className="modal-body">
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={updatedUser.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="carnet"
            placeholder="Carnet"
            value={updatedUser.carnet}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="placa"
            placeholder="Placa"
            value={updatedUser.placa}
            onChange={handleInputChange}
          />
        </div>
        <div className="modal-footer">
          <button className="save-button" onClick={handleSubmit}>
            Guardar Cambios
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUserModal;
