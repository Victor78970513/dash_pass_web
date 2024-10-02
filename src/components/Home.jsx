import React, { useState } from 'react';
import appFirebase from '../credenciales';
import { getAuth, signOut } from 'firebase/auth';
import { PencilIcon, TrashIcon, PlusIcon } from 'lucide-react';
import Navbar from './navbar';
import './Home.css'; // Asegúrate de crear este archivo

const auth = getAuth(appFirebase);

export default function Home() {
  const [users, setUsers] = useState([
    { id: 5, name: 'Dani Mendoza' },
    { id: 6, name: 'Victor Choque' },
    { id: 7, name: 'ISA' },
  ]);

  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div className="home-container">
      <Navbar /> {/* Componente Navbar */}

      {/* Contenido principal */}
      <main className="main-content">
        {/* Encabezado */}
        <div className="header">
          <h1 className="title">Lista de Usuarios</h1>
          <button className="add-user-button">
            <PlusIcon className="icon" /> Agregar Usuario
          </button>
        </div>

        {/* Tabla */}
        <div className="table-container">
          <table className="user-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Editar</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>
                    <button className="edit-button">
                      <PencilIcon className="icon" /> Editar
                    </button>
                  </td>
                  <td>
                    <button
                      className="delete-button"
                      onClick={() => handleDelete(user.id)}
                    >
                      <TrashIcon className="icon" /> Borrar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
