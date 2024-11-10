import React from 'react';
import { 
  Menu, 
  GraduationCap, 
  FileCheck, 
  MessageCircle, 
  ClipboardList,
  Users,
  UserCheck,
  FileSearch
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const menuItems = [
    { path: '/secretary', icon: ClipboardList, label: 'Secretaría' },
    { path: '/management', icon: Users, label: 'Gestión' },
    { path: '/review-coordinator', icon: UserCheck, label: 'Coordinación' },
    { path: '/proposal-reviewer', icon: FileSearch, label: 'Revisión' },
    { path: '/student-profile', icon: GraduationCap, label: 'Estudiantes' },
    { path: '/observations', icon: FileCheck, label: 'Observaciones' },
    { path: '/corrections', icon: MessageCircle, label: 'Correcciones' },
  ];

  return (
    <div className="h-screen w-64 bg-academic-primary text-white fixed left-0 top-0">
      <div className="p-4 flex items-center gap-2 border-b border-opacity-20 border-white academic-gradient">
        <GraduationCap className="w-8 h-8" />
        <span className="font-semibold text-lg">Sistema Académico</span>
      </div>
      <nav className="p-4">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 p-3 rounded-lg mb-2 transition-colors ${
              isActive(item.path)
                ? 'bg-academic-secondary text-white'
                : 'text-gray-300 hover:bg-academic-secondary/50'
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