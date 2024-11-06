import React from 'react';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';

export default function Observations() {
  const observations = [
    {
      id: 1,
      title: 'Revisión de Proyecto Final',
      status: 'success',
      date: '2024-03-15',
      comments: 'Excelente trabajo en la implementación de los patrones de diseño.',
    },
    {
      id: 2,
      title: 'Entrega Parcial 2',
      status: 'warning',
      date: '2024-03-10',
      comments: 'Necesita mejorar la documentación del código.',
    },
    {
      id: 3,
      title: 'Práctica de Laboratory',
      status: 'error',
      date: '2024-03-05',
      comments: 'No cumple con los requisitos mínimos establecidos.',
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case 'warning':
        return <AlertCircle className="w-6 h-6 text-yellow-500" />;
      case 'error':
        return <XCircle className="w-6 h-6 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Observaciones</h1>

      <div className="grid gap-6">
        {observations.map((obs) => (
          <div key={obs.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                {getStatusIcon(obs.status)}
                <h3 className="text-lg font-semibold">{obs.title}</h3>
              </div>
              <span className="text-sm text-gray-600">{obs.date}</span>
            </div>
            <p className="text-gray-700">{obs.comments}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Nueva Observación</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Título
            </label>
            <input
              type="text"
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Comentarios
            </label>
            <textarea
              rows={4}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Estado
            </label>
            <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
              <option value="success">Aprobado</option>
              <option value="warning">Requiere Mejoras</option>
              <option value="error">No Aprobado</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Agregar Observación
          </button>
        </form>
      </div>
    </div>
  );
}