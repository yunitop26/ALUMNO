import React from 'react';
import { Clock, CheckCircle2, XCircle } from 'lucide-react';

export default function Corrections() {
  const corrections = [
    {
      id: 1,
      title: 'Corrección de Documentación',
      status: 'pending',
      deadline: '2024-03-20',
      description: 'Actualizar diagramas UML y documentación de APIs',
    },
    {
      id: 2,
      title: 'Optimización de Código',
      status: 'completed',
      deadline: '2024-03-18',
      description: 'Refactorizar código para mejorar rendimiento',
    },
    {
      id: 3,
      title: 'Corrección de Errores',
      status: 'rejected',
      deadline: '2024-03-15',
      description: 'Solucionar bugs reportados en el módulo de usuarios',
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Correcciones Pendientes</h1>

      <div className="grid gap-6">
        {corrections.map((correction) => (
          <div key={correction.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">{correction.title}</h3>
              <div className="flex items-center gap-2">
                {correction.status === 'pending' && (
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    Pendiente
                  </span>
                )}
                {correction.status === 'completed' && (
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" />
                    Completado
                  </span>
                )}
                {correction.status === 'rejected' && (
                  <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm flex items-center gap-1">
                    <XCircle className="w-4 h-4" />
                    Rechazado
                  </span>
                )}
              </div>
            </div>
            <p className="text-gray-600 mb-4">{correction.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">
                Fecha límite: {correction.deadline}
              </span>
              {correction.status === 'pending' && (
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                    Marcar como Completado
                  </button>
                  <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors">
                    Solicitar Ayuda
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Subir Corrección</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Título de la Corrección
            </label>
            <input
              type="text"
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Descripción
            </label>
            <textarea
              rows={4}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Archivos Adjuntos
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                  >
                    <span>Subir archivos</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      multiple
                    />
                  </label>
                  <p className="pl-1">o arrastrar y soltar</p>
                </div>
                <p className="text-xs text-gray-500">
                  PNG, JPG, PDF hasta 10MB
                </p>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Enviar Corrección
          </button>
        </form>
      </div>
    </div>
  );
}