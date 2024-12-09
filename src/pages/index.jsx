import React, { useState } from 'react';
import UserTable from '../modules/Users/components/UserTable';
import UserModal from '../modules/Users/components/UserModal';


export default function Home() {
  const [users, setUsers] = useState([]);
  const [modalUser, setModalUser] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleCreate = (name, email) => {
    if (!name || !email) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const newUser = {
      id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
      name,
      email,
    };

    setUsers((prevUsers) => [...prevUsers, newUser]);
    console.log("Usuarios actuales:", users); // Diagnóstico
    setModalOpen(false);
  };

  const openModal = (user = null) => {
    setModalUser(user);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalUser(null);
    setModalOpen(false);
  };
  const handleEdit = (id, name, email) => {
    if (!name || !email) {
      alert("Por favor, completa todos los campos.");
      return;
    }
  
    // Actualizar el usuario en el estado global
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, name, email } : user
    );
  
    setUsers(updatedUsers);
    setModalOpen(false); // Cerrar el modal
  };
  
  return (
    <div>
      <h1>Gestión de Usuarios</h1>
      <button
        onClick={() => openModal()}
        style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '10px 20px',
            fontSize: '1rem',
            borderRadius: '10px',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            transition: 'transform 0.2s, box-shadow 0.2s',
        }}
        onMouseOver={(e) => {
            e.target.style.transform = 'scale(1.05)';
            e.target.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
        }}
        onMouseOut={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        }}
        >
        Crear Usuario
        </button>
      <UserTable
        users={users}
        onEdit={(user) => openModal(user)}
        onDelete={(id) => setUsers(users.filter((user) => user.id !== id))}
      />
      {isModalOpen && (
        <UserModal
        user={modalUser} // Usuario a editar, o null si es creación
        onSubmit={(id, name, email) => {
            if (modalUser) {
            handleEdit(id, name, email); // Editar usuario existente
            } else {
            handleCreate(name, email); // Crear nuevo usuario
            }
        }}
        onClose={closeModal}
        />

      )}
    </div>
  );
}
