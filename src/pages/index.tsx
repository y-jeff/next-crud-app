import { useState } from "react";
import ModalForm from "../components/ModalForm"; // Importa el modal

export default function Home() {
  const [workers, setWorkers] = useState([
    { id: 1, name: "Juan Pérez", position: "Developer" },
    { id: 2, name: "Ana López", position: "Designer" },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingWorker, setEditingWorker] = useState(null);

  // Abrir modal para agregar o editar
  const handleOpenModal = (worker = null) => {
    setEditingWorker(worker);
    setIsModalOpen(true);
  };

  // Cerrar modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingWorker(null);
  };

  // Guardar trabajador (agregar o editar)
  const handleSaveWorker = (workerData) => {
    if (editingWorker) {
      // Editar trabajador existente
      setWorkers(
        workers.map(worker =>
          worker.id === editingWorker.id ? { ...worker, ...workerData } : worker
        )
      );
    } else {
      // Agregar nuevo trabajador
      setWorkers([...workers, { id: workers.length + 1, ...workerData }]);
    }
    handleCloseModal();
  };

  // Eliminar trabajador
  const handleDeleteWorker = (id) => {
    setWorkers(workers.filter(worker => worker.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      {/* Título */}
      <h1 className="text-3xl font-bold text-center mb-5 text-blue-700">
        Gestión de Trabajadores
      </h1>

      {/* Botón para agregar */}
      <div className="mb-5 text-right">
        <button
          onClick={() => handleOpenModal()}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Agregar Trabajador
        </button>
      </div>

      {/* Tabla */}
      <div className="bg-white shadow-md rounded-lg p-5">
        <table className="table-auto w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-gray-800">ID</th>
              <th className="px-4 py-2 text-gray-800">Nombre</th>
              <th className="px-4 py-2 text-gray-800">Puesto</th>
              <th className="px-4 py-2 text-gray-800">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {workers.map(worker => (
              <tr key={worker.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2 text-red-600">{worker.id}</td>
                <td className="border px-4 py-2 text-blue-500">{worker.name}</td>
                <td className="border px-4 py-2 text-green-600">{worker.position}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleOpenModal(worker)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDeleteWorker(worker.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded ml-2 hover:bg-red-600"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <ModalForm
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSaveWorker}
        initialData={editingWorker}
      />
    </div>
  );
}
