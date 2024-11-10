import React, { useState } from 'react';
import { ClipboardCheck, AlertCircle, CheckCircle2, XCircle } from 'lucide-react';

export default function ProposalReviewer() {
  const [activeProposal, setActiveProposal] = useState(0);
  const [proposals] = useState([
    {
      id: 1,
      title: 'Sistema de Gestión Académica',
      author: 'Juan Pérez',
      abstract: 'Desarrollo de un sistema integral para la gestión académica universitaria...',
      status: 'pending',
    },
    {
      id: 2,
      title: 'Aplicación IoT para Smart Cities',
      author: 'María López',
      abstract: 'Implementación de una red de sensores IoT para monitoreo urbano...',
      status: 'pending',
    },
  ]);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Revisor de Propuestas</h1>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Lista de Propuestas */}
        <div className="md:col-span-1 bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-3 mb-4">
            <ClipboardCheck className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold">Propuestas Asignadas</h2>
          </div>
          <div className="space-y-2">
            {proposals.map((proposal, index) => (
              <button
                key={proposal.id}
                className={`w-full text-left p-4 rounded-lg transition-colors ${
                  activeProposal === index
                    ? 'bg-blue-50 border-2 border-blue-500'
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
                onClick={() => setActiveProposal(index)}
              >
                <h3 className="font-medium">{proposal.title}</h3>
                <p className="text-sm text-gray-600">{proposal.author}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Detalles y Evaluación */}
        <div className="md:col-span-2 space-y-6">
          {/* Detalles de la Propuesta */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">
              {proposals[activeProposal].title}
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-700">Autor</h3>
                <p>{proposals[activeProposal].author}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-700">Resumen</h3>
                <p className="text-gray-600">
                  {proposals[activeProposal].abstract}
                </p>
              </div>
            </div>
          </div>

          {/* Formulario de Evaluación */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Evaluación</h2>
            <form className="space-y-6">
              {/* Criterios de Evaluación */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  Criterios
                </h3>
                <div className="space-y-4">
                  {['Originalidad', 'Metodología', 'Viabilidad', 'Impacto'].map(
                    (criterio) => (
                      <div key={criterio}>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {criterio}
                        </label>
                        <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                          <option value="">Seleccionar calificación</option>
                          <option value="5">Excelente (5)</option>
                          <option value="4">Bueno (4)</option>
                          <option value="3">Regular (3)</option>
                          <option value="2">Deficiente (2)</option>
                          <option value="1">Muy deficiente (1)</option>
                        </select>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Observaciones */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Observaciones
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Ingrese sus observaciones..."
                ></textarea>
              </div>

              {/* Decisión */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  Decisión Final
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 p-3 rounded-md border-2 border-green-500 text-green-700 hover:bg-green-50"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    Aprobar
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 p-3 rounded-md border-2 border-yellow-500 text-yellow-700 hover:bg-yellow-50"
                  >
                    <AlertCircle className="w-5 h-5" />
                    Solicitar Correcciones
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 p-3 rounded-md border-2 border-red-500 text-red-700 hover:bg-red-50"
                  >
                    <XCircle className="w-5 h-5" />
                    Reprobar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}