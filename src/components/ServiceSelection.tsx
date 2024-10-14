// src/components/ServiceSelection.tsx
import React from 'react';

interface ServiceSelectionProps {
  onSelectService: (service: 'ppf' | 'tratamiento-ceramico' | 'f-stack-black') => void;
}

const ServiceSelection: React.FC<ServiceSelectionProps> = ({ onSelectService }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-6xl p-8">
        
        {/* Opción PPF */}
        <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
          <img
            src="/images/ppf-example.jpg"
            alt="PPF - Paint Protection Film"
            className="w-full h-56 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-4 text-[#ed6b0d]">PPF - Paint Protection Film</h3>
            <p className="mb-6">
              Protege la pintura de tu vehículo contra rayones, impactos de piedras, y otros daños. Ideal para mantener la apariencia original de tu auto.
            </p>
            <button
              onClick={() => onSelectService('ppf')}
              className="w-full bg-[#ed6b0d] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#cf5c0b] transition-colors"
            >
              Seleccionar PPF
            </button>
          </div>
        </div>
        
        {/* Opción Tratamiento Cerámico */}
        <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
          <img
            src="/images/ceramic-coating-example.jpg"
            alt="Tratamiento Cerámico"
            className="w-full h-56 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-4 text-[#ed6b0d]">Tratamiento Cerámico</h3>
            <p className="mb-6">
              Aumenta la protección y brillo de tu vehículo con un recubrimiento cerámico. Perfecto para mantener tu auto con un aspecto reluciente.
            </p>
            <button
              onClick={() => onSelectService('tratamiento-ceramico')}
              className="w-full bg-[#ed6b0d] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#cf5c0b] transition-colors"
            >
              Seleccionar Tratamiento Cerámico
            </button>
          </div>
        </div>

        {/* Opción F-Stack Black */}
        <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
          <img
            src="/images/f-stack-black-example.jpg"
            alt="F-Stack Black"
            className="w-full h-56 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-4 text-[#ed6b0d]">F-Stack Black</h3>
            <p className="mb-6">
              Nuestro pack premium recomendado que combina los mejores servicios de F-Stack para la protección total y el brillo de tu auto.
            </p>
            <button
              onClick={() => onSelectService('f-stack-black')}
              className="w-full bg-[#ed6b0d] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#cf5c0b] transition-colors"
            >
              Seleccionar F-Stack Black
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ServiceSelection;
