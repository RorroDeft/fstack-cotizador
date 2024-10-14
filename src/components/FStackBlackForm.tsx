// src/components/FStackBlackForm.tsx
import React, { useState } from 'react';

interface FStackBlackFormProps {
  onSelectService: (tamaño: string) => void;
  onBack: () => void;
  serviciosIncluidos: { nombre: string; descripcion: string }[];
  preciosPorTamaño: { [key: string]: number };
}

const FStackBlackForm: React.FC<FStackBlackFormProps> = ({ onSelectService, onBack, serviciosIncluidos, preciosPorTamaño }) => {
  const [tamaño, setTamaño] = useState('sedan'); // Por defecto, seleccionamos "sedan"

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#ed6b0d]">F-Stack Black</h2>
        <p className="mb-4 text-center">Nuestro paquete premium incluye los siguientes servicios:</p>
        <ul className="space-y-3 mb-6">
          {serviciosIncluidos.map((servicio) => (
            <li key={servicio.nombre} className="bg-gray-800 p-3 rounded-lg">
              <h3 className="font-bold">{servicio.nombre}</h3>
              <p className="text-sm">{servicio.descripcion}</p>
            </li>
          ))}
        </ul>

        {/* Selección del tamaño del auto */}
        <div className="mb-6">
          <label htmlFor="tamaño" className="block mb-2 font-bold">Selecciona el tamaño de tu auto:</label>
          <select
            id="tamaño"
            value={tamaño}
            onChange={(e) => setTamaño(e.target.value)}
            className="w-full bg-gray-700 text-white py-2 px-4 rounded-lg"
          >
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="3-corridas">SUV 3 Corridas de Asientos</option>
            <option value="pickup-xl">Pickup / XL</option>
          </select>
        </div>

        {/* Mostrar el precio basado en el tamaño */}
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold">
            Precio Total: <span className="text-[#ed6b0d]">${preciosPorTamaño[tamaño].toLocaleString('es-CL')}</span>
          </h3>
        </div>

        <button
          onClick={() => onSelectService(tamaño)}
          className="w-full bg-[#ed6b0d] text-white font-bold py-3 rounded-lg hover:bg-[#cf5c0b] transition-colors"
        >
          Seleccionar F-Stack Black
        </button>
        <button
          onClick={onBack}
          className="w-full bg-gray-700 text-white font-bold py-3 mt-4 rounded-lg hover:bg-gray-500 transition-colors"
        >
          Volver
        </button>
      </div>
    </div>
  );
};

export default FStackBlackForm;
