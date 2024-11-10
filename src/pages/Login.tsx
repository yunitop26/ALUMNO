import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, User, Lock, Mail, CreditCard, AlertCircle, CheckCircle } from 'lucide-react';

interface FormData {
  email: string;
  password: string;
  name: string;
  cedula: string;
}

interface ValidationErrors {
  email?: string;
  password?: string;
  name?: string;
  cedula?: string;
}

export default function Login() {
  const navigate = useNavigate();
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    name: '',
    cedula: ''
  });
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [showError, setShowError] = useState('');
  const [showSuccess, setShowSuccess] = useState('');

  useEffect(() => {
    // Redirigir si ya está autenticado
    if (localStorage.getItem('isAuthenticated') === 'true') {
      navigate('/secretary');
    }
  }, [navigate]);

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};
    
    if (isRegistering) {
      if (!formData.name.trim()) {
        newErrors.name = 'El nombre es requerido';
      } else if (formData.name.length < 3) {
        newErrors.name = 'El nombre debe tener al menos 3 caracteres';
      }

      if (!formData.cedula.trim()) {
        newErrors.cedula = 'La cédula es requerida';
      } else if (!/^\d{10}$/.test(formData.cedula)) {
        newErrors.cedula = 'La cédula debe tener 10 dígitos';
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El correo es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ingrese un correo válido';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'La contraseña es requerida';
    } else if (formData.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowError('');
    setShowSuccess('');

    if (!validateForm()) {
      return;
    }

    try {
      if (isRegistering) {
        // Guardar usuario
        localStorage.setItem('registeredUser', JSON.stringify(formData));
        setShowSuccess('Cuenta creada exitosamente');
        
        // Limpiar formulario y cambiar a login después de 2 segundos
        setTimeout(() => {
          setIsRegistering(false);
          setFormData({ email: '', password: '', name: '', cedula: '' });
          setShowSuccess('');
        }, 2000);
        return;
      }

      // Verificar credenciales
      const registeredUser = localStorage.getItem('registeredUser');
      if (registeredUser) {
        const user = JSON.parse(registeredUser);
        if (user.email === formData.email && user.password === formData.password) {
          localStorage.setItem('isAuthenticated', 'true');
          localStorage.setItem('currentUser', JSON.stringify({
            name: user.name,
            email: user.email,
            cedula: user.cedula
          }));
          navigate('/secretary');
          return;
        }
      }
      setShowError('Credenciales inválidas');
    } catch (error) {
      setShowError('Error en el servidor. Intente nuevamente.');
    }
  };

  const toggleMode = () => {
    setIsRegistering(!isRegistering);
    setFormData({ email: '', password: '', name: '', cedula: '' });
    setErrors({});
    setShowError('');
    setShowSuccess('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-academic-primary to-academic-secondary flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <GraduationCap className="w-16 h-16 text-academic-primary" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">
            Sistema de Gestión Académica
          </h1>
          <p className="text-gray-600 mt-2">
            {isRegistering ? 'Crear nueva cuenta' : 'Ingresar al sistema'}
          </p>
        </div>

        {showError && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700">
            <AlertCircle className="w-5 h-5" />
            <span>{showError}</span>
          </div>
        )}

        {showSuccess && (
          <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 text-green-700">
            <CheckCircle className="w-5 h-5" />
            <span>{showSuccess}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {isRegistering && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre Completo
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`pl-10 w-full rounded-lg border ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    } focus:border-blue-500 focus:ring-blue-500`}
                    placeholder="Juan Pérez"
                  />
                </div>
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Cédula de Identidad
                </label>
                <div className="relative">
                  <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={formData.cedula}
                    onChange={(e) => setFormData({ ...formData, cedula: e.target.value })}
                    className={`pl-10 w-full rounded-lg border ${
                      errors.cedula ? 'border-red-500' : 'border-gray-300'
                    } focus:border-blue-500 focus:ring-blue-500`}
                    placeholder="0123456789"
                    maxLength={10}
                  />
                </div>
                {errors.cedula && (
                  <p className="mt-1 text-sm text-red-600">{errors.cedula}</p>
                )}
              </div>
            </>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Correo Electrónico
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`pl-10 w-full rounded-lg border ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                } focus:border-blue-500 focus:ring-blue-500`}
                placeholder="estudiante@universidad.edu"
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contraseña
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className={`pl-10 w-full rounded-lg border ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                } focus:border-blue-500 focus:ring-blue-500`}
                placeholder="••••••••"
              />
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-academic-primary text-white rounded-lg hover:bg-academic-secondary transition-colors duration-200 flex items-center justify-center gap-2"
          >
            {isRegistering ? 'Crear Cuenta' : 'Iniciar Sesión'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={toggleMode}
            className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
          >
            {isRegistering
              ? '¿Ya tienes una cuenta? Inicia sesión'
              : '¿No tienes una cuenta? Regístrate'}
          </button>
        </div>

        {!isRegistering && (
          <div className="mt-4 text-center">
            <a
              href="#"
              className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        )}
      </div>
    </div>
  );
}