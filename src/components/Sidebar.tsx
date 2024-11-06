import React from 'react';
import { Menu, GraduationCap, FileCheck, MessageCircle, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const menuItems = [
    { path: '/', icon: Home, label: 'Inicio' },
    { path: '/student-profile', icon: GraduationCap, label: 'Perfil Estudiante' },
    { path: '/observations', icon: FileCheck, label: 'Observaciones' },
    { path: '/corrections', icon: MessageCircle, label: 'Correcciones' },
  ];

  return (
    <div className="h-screen w-64 bg-gray-900 text-white fixed left-0 top-0">
      <div className="p-4 flex items-center gap-2 border-b border-gray-800">
        <Menu className="w-6 h-6" />
        <span className="font-semibold text-lg">Sistema Académico</span>
      </div>
      <nav className="p-4">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 p-3 rounded-lg mb-2 transition-colors ${
              isActive(item.path)
                ? 'bg-blue-600 text-white'
                : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}