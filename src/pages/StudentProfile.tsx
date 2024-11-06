import React from 'react';
import { User, Mail, Phone, Book } from 'lucide-react';

export default function StudentProfile() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Perfil del Estudiante</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-6">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop"
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
          <div className="ml-6">
            <h2 className="text-xl font-semibold">Juan Pérez</h2>
            <p className="text-gray-600">Estudiante de Ingeniería</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <User className="w-5 h-5 text-gray-600" />
              <div>
                <p className="text-sm text-gray-600">Nombre Completo</p>
                <p className="font-medium">Juan Antonio Pérez García</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gray-600" />
              <div>
                <p className="text-sm text-gray-600">Correo Electrónico</p>
                <p className="font-medium">juan.perez@universidad.edu</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-gray-600" />
              <div>
                <p className="text-sm text-gray-600">Teléfono</p>
                <p className="font-medium">+1 234 567 890</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Book className="w-5 h-5 text-gray-600" />
              <div>
                <p className="text-sm text-gray-600">Carrera</p>
                <p className="font-medium">Ingeniería en Sistemas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}