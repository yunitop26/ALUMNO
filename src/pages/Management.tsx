import React, { useState } from 'react';
import { Users, UserPlus, Search } from 'lucide-react';

export default function Management() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedReviewers, setSelectedReviewers] = useState<string[]>([]);

  const availableReviewers = [
    { id: '1', name: 'Dr. Ana García', department: 'Sistemas', expertise: 'Software' },
    { id: '2', name: 'Dr. Carlos López', department: 'Redes', expertise: 'Networking' },
    { id: '3', name: 'Dra. María Torres', department: 'IA', expertise: 'Machine Learning' },
  ];

  const handleReviewerToggle = (reviewerId: string) => {
    setSelectedReviewers(prev =>
      prev.includes(reviewerId)
        ? prev.filter(id => id !== reviewerId)
        : [...prev, reviewerId]
    );
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Gestión de Comisión</h1>

      <div className="grid gap-6">
        {/* Crear Comisión */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold">Crear Comisión de Revisión</h2>
          </div>

          <div className="space-y-6">
            {/* Búsqueda de Revisores */}
            <div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Buscar revisores..."
                  className="w-full pl-10 pr-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Lista de Revisores Disponibles */}
            <div className="border rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Seleccionar
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nombre
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Departamento
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Especialidad
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {availableReviewers.map((reviewer) => (
                    <tr key={reviewer.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="checkbox"
                          checked={selectedReviewers.includes(reviewer.id)}
                          onChange={() => handleReviewerToggle(reviewer.id)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {reviewer.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {reviewer.department}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {reviewer.expertise}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Resumen de Selección */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                Revisores Seleccionados: {selectedReviewers.length}
              </h3>
              <div className="flex flex-wrap gap-2">
                {selectedReviewers.map((id) => {
                  const reviewer = availableReviewers.find(r => r.id === id);
                  return (
                    <span
                      key={id}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                    >
                      {reviewer?.name}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Botón de Crear Comisión */}
            <button
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400"
              disabled={selectedReviewers.length === 0}
            >
              <div className="flex items-center justify-center gap-2">
                <UserPlus className="w-5 h-5" />
                <span>Crear Comisión de Revisión</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}