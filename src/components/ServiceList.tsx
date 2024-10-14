import React from 'react';

interface Service {
  nombre: string;
  descripcion: string;
  precio?: number;
  cantidadVariable?: boolean;
}

interface SelectedService {
  nombre: string;
  cantidad: number;
  precio: number;
}

interface ServiceListProps {
  services: Service[];
  selectedServices: SelectedService[];
  onAddService: (service: Service, cantidad: number) => void;
  onRemoveService: (service: Service) => void;
  onBack: () => void;
  total: number;
  allSelectedServices: {
    ppf: SelectedService[];
    'tratamiento-ceramico': SelectedService[];
    'f-stack-black': SelectedService[];
  };
  currentCategory: 'ppf' | 'tratamiento-ceramico' | 'f-stack-black';
}

// Función para procesar la descripción y las listas
const processDescription = (descripcion: string) => {
  // Dividir entre la descripción inicial y la lista de viñetas
  const [descInicial, listaItems] = descripcion.split('|');
  
  const items = listaItems ? listaItems.split('*').filter(item => item.trim() !== "") : [];

  return (
    <>
      {/* Mostrar la parte de la descripción inicial */}
      {descInicial && <p>{descInicial.trim()}</p>}

      {/* Mostrar la lista si hay items */}
      {items.length > 0 && (
        <ul className="list-disc list-inside">
          {items.map((item, index) => (
            <li key={index}>{item.trim()}</li>
          ))}
        </ul>
      )}
    </>
  );
};

const ServiceList: React.FC<ServiceListProps> = ({
  services,
  selectedServices,
  onAddService,
  onRemoveService,
  onBack,
  total,
  allSelectedServices,
  currentCategory,
}) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-black text-white">
      {/* Lista de Servicios */}
      <div className="w-full md:w-2/3 p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Servicios Disponibles</h2>
        <ul className="space-y-4">
          {services.map((service) => (
            <li key={service.nombre} className="bg-gray-900 p-4 rounded-lg shadow-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold">{service.nombre}</h3>
                  <div className="text-sm">{processDescription(service.descripcion)}</div>
                </div>
                {currentCategory !== 'f-stack-black' && (
                  <div className="flex items-center">
                    <span className="text-lg font-bold text-[#ed6b0d] mr-4">
                      ${service.precio ? service.precio.toLocaleString('es-CL') : 'N/A'}
                    </span>
                    {service.cantidadVariable ? (
                      <div className="flex items-center">
                        {/* Botones de cantidad */}
                        <button
                          onClick={() => onAddService(service, -1)}
                          className="bg-gray-700 text-white px-2 py-1 rounded-l-lg hover:bg-gray-500"
                          disabled={
                            selectedServices.find((s) => s.nombre === service.nombre)?.cantidad === 1
                          }
                        >
                          -
                        </button>
                        <span className="px-4 py-2">
                          {selectedServices.find((s) => s.nombre === service.nombre)?.cantidad || 1}
                        </span>
                        <button
                          onClick={() => onAddService(service, 1)}
                          className="bg-gray-700 text-white px-2 py-1 rounded-r-lg hover:bg-gray-500"
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => onAddService(service, 1)}
                        className="bg-[#ed6b0d] text-white font-bold py-2 px-4 rounded-lg ml-4 hover:bg-[#cf5c0b]"
                      >
                        Agregar +
                      </button>
                    )}
                    {/* Botón de Eliminar */}
                    {selectedServices.find((s) => s.nombre === service.nombre) && (
                      <button
                        onClick={() => onRemoveService(service)}
                        className="bg-red-500 text-white font-bold py-2 px-4 ml-4 rounded-lg hover:bg-red-700"
                      >
                        Eliminar
                      </button>
                    )}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Resumen de Cotización */}
      <div className="w-full md:w-1/3 p-8 bg-gray-900">
        <h2 className="text-xl font-bold mb-4">Resumen de Cotización</h2>
        <ul className="space-y-2">
          {Object.entries(allSelectedServices).map(([categoria, servicios]) =>
            servicios.map((service) => (
              <li key={service.nombre} className="flex justify-between">
                <span>
                  {service.nombre} ({categoria}) - {service.cantidad}x
                </span>
                <span>${service.precio && service.cantidad ? (service.precio * service.cantidad).toLocaleString('es-CL') : 'N/A'}</span>
              </li>
            ))
          )}
        </ul>
        <div className="mt-6">
          <h3 className="text-lg font-bold">Total: ${!isNaN(total) ? total.toLocaleString('es-CL') : 'N/A'}</h3>
        </div>
        <div className="mt-8">
          <button
            onClick={onBack}
            className="bg-gray-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-500"
          >
            Volver
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
