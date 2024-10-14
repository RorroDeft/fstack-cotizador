// // src/components/CotizacionForm.tsx
// import React, { useState } from 'react';
// // import CotizacionResult from './CotizacionResult';
// import precios from '../data/precios.json';

// interface CotizacionFormProps {
//   clienteInfo: { nombre: string; modelo: string; año: string; version: string };
//   selectedService: 'ppf' | 'tratamiento-ceramico' | 'f-stack-black';
// }

// const CotizacionForm: React.FC<CotizacionFormProps> = ({ clienteInfo, selectedService }) => {
//   const [resultado, setResultado] = useState<number | null>(null);

//   const calcularCotizacion = () => {
//     const precio = precios[selectedService].sedan; // Usamos el precio de "sedan" como ejemplo.
//     setResultado(precio);
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
//       <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center mb-6">
//           ¡Hola {clienteInfo.nombre}! 😊
//         </h2>
//         <p className="text-center mb-4">
//           Estás cotizando para un {clienteInfo.modelo} del {clienteInfo.año} ({clienteInfo.version}).
//         </p>
//         <p className="text-center mb-4">
//           Has seleccionado el servicio: <span className="text-[#ed6b0d]">{selectedService === 'ppf' ? 'PPF - Paint Protection Film' : selectedService === 'tratamiento-ceramico' ? 'Tratamiento Cerámico' : 'F-Stack Black'}</span>
//         </p>

//         <button
//           onClick={calcularCotizacion}
//           className="w-full bg-[#ed6b0d] text-white font-bold py-3 rounded-lg hover:bg-[#cf5c0b] transition-colors"
//         >
//           Calcular Cotización
//         </button>

//         {/* {resultado && (
//           <CotizacionResult
//             precio={resultado}
//             tipoServicio={selectedService}
//             tipoVehiculo="sedan" // Ajusta esto si necesitas manejar otros tamaños
//           />
//         )} */}
//       </div>
//     </div>
//   );
// };

// export default CotizacionForm;
