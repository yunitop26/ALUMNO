import React, { useState } from 'react';
import { FileText, UserCheck, FileOutput } from 'lucide-react';

export default function ReviewCoordinator() {
  const [proposals] = useState([
    { id: 1, title: 'Sistema de Gestión Académica', status: 'pending', author: 'Juan Pérez' },
    { id: 2, title: 'Aplicación IoT para Smart Cities', status: 'assigned', author: 'María López' },
    { id: 3, title: 'Plataforma E-learning', status: 'pending', author: 'Carlos Ruiz' },
  ]);

  const [reviewers] = useState([
    { id: 1, name: 'Dr. Ana García', expertise: 'Software', assignedCount: 2 },
    { id: 2, name: 'Dr. Carlos López', expertise: 'Networking', assignedCount: 1 },
    { id: 3, name: 'Dra. María Torres', expertise: 'Machine Learning', assignedCount: 0 },
  ]);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Coordinador de Revisión</h1>

      <div className="grid gap-6">
        {/* Asignación de Propuestas */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold">Asignación de Propuestas</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Propuesta
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Autor
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Estado
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Asignar a
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {proposals.map((proposal) => (
                  <tr key={proposal.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {proposal.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {proposal.author}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          proposal.status === 'assigned'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {proposal.status === 'assigned' ? 'Asignado' : 'Pendiente'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <select
                        className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Seleccionar revisor
                        </option>
                        {reviewers.map((reviewer) => (
                          <option key={reviewer.id} value={reviewer.id}>
                            {reviewer.name} ({reviewer.assignedCount} asignadas)
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Generación de Informe */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-3 mb-6">
            <FileOutput className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold">Generar Informe</h2>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-green-600 text-lg font-semibold">12</div>
                <div className="text-sm text-gray-600">Propuestas Aprobadas</div>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <div className="text-yellow-600 text-lg font-semibold">5</div>
                <div className="text-sm text-gray-600">En Revisión</div>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <div className="text-red-600 text-lg font-semibold">3</div>
                <div className="text-sm text-gray-600">Rechazadas</div>
              </div>
            </div>

            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
              <div className="flex items-center justify-center gap-2">
                <FileOutput className="w-5 h-5" />
                <span>Generar Informe de Evaluación</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}