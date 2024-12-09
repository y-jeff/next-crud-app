import React from 'react';


const UserTable = ({ users, onEdit, onDelete }) => {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <button
                onClick={() => onEdit(user)}
                style={{
                  backgroundColor: '#0070f3',
                  color: 'white',
                  padding: '5px 10px',
                  borderRadius: '5px',
                  marginRight: '5px',
                  border: 'none',
                }}
              >
                Editar
              </button>
              <button
                onClick={() => onDelete(user.id)}
                style={{
                  backgroundColor: '#dc3545',
                  color: 'white',
                  padding: '5px 10px',
                  borderRadius: '5px',
                  border: 'none',
                }}
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;