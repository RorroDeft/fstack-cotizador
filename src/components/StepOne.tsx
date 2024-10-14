// src/components/StepOne.tsx
import React, { useState } from 'react';

interface StepOneProps {
  onContinue: (clienteInfo: { nombre: string; modelo: string; año: string; version: string }) => void;
}

const StepOne: React.FC<StepOneProps> = ({ onContinue }) => {
  const [nombre, setNombre] = useState('');
  const [modelo, setModelo] = useState('');
  const [año, setAño] = useState('');
  const [version, setVersion] = useState('');

  const handleContinue = () => {
    if (nombre && modelo && año && version) {
      onContinue({ nombre, modelo, año, version });
    } else {
      alert('Por favor completa todos los campos antes de continuar.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-white">
          ¡Hola! 😊 Por favor, dinos tu nombre para empezar
        </h2>
        
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre"
          className="w-full p-3 mb-4 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#ed6b0d]"
        />

        <input
          type="text"
          value={modelo}
          onChange={(e) => setModelo(e.target.value)}
          placeholder="Modelo del auto"
          className="w-full p-3 mb-4 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#ed6b0d]"
        />

        <input
          type="text"
          value={año}
          onChange={(e) => setAño(e.target.value)}
          placeholder="Año del auto"
          className="w-full p-3 mb-4 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#ed6b0d]"
        />

        <input
          type="text"
          value={version}
          onChange={(e) => setVersion(e.target.value)}
          placeholder="Versión del auto"
          className="w-full p-3 mb-6 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#ed6b0d]"
        />

        <button
          onClick={handleContinue}
          className="w-full bg-[#ed6b0d] text-white font-bold py-3 rounded-lg hover:bg-[#cf5c0b] transition-colors"
        >
          Continuar
        </button>
      </div>
    </div>
  );
};

export default StepOne;
