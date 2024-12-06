import { useState, useEffect } from "react";

export default function ModalForm({ isOpen, onClose, onSubmit, initialData }) {
  const [formData, setFormData] = useState({ name: "", position: "" });

  // Si el modal es para editar, prellenamos los datos
  useEffect(() => {
    if (initialData) {
      setFormData({ ...initialData });
    } else {
      setFormData({ name: "", position: "" });
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData); // Enviamos los datos
    onClose(); // Cerramos el modal
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-gray-800 p-5 rounded shadow-lg w-1/3">
        <h2 className="text-xl font-bold mb-4 text-white">
          {initialData ? "Editar Trabajador" : "Agregar Trabajador"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white">Nombre</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 text-gray-800"
              placeholder="Ingrese el nombre"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white">Puesto</label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 text-gray-800"
              placeholder="Ingrese el puesto"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-gray-800 px-3 py-1 rounded mr-2"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
