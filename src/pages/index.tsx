// src/pages/index.tsx
import React, { useState } from "react";
import StepOne from "../components/StepOne";
import ServiceSelection from "../components/ServiceSelection";
import ServiceList from "../components/ServiceList";
import FStackBlackForm from "../components/FStackBlackForm";
import precios from "../data/precios.json";
import Image from "next/image";

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

const Home = () => {
  const [step, setStep] = useState(1);
  // const [clienteInfo, setClienteInfo] = useState<{
  //   nombre: string;
  //   modelo: string;
  //   año: string;
  //   version: string;
  // } | null>(null);
  const [selectedServiceCategory, setSelectedServiceCategory] = useState<
    "ppf" | "tratamiento-ceramico" | "f-stack-black" | null
  >(null);

  const [selectedServices, setSelectedServices] = useState<{
    ppf: SelectedService[];
    "tratamiento-ceramico": SelectedService[];
    "f-stack-black": SelectedService[];
  }>({
    ppf: [],
    "tratamiento-ceramico": [],
    "f-stack-black": [],
  });

  const handleContinue = (info: {
    nombre: string;
    modelo: string;
    año: string;
    version: string;
  }) => {
    // setClienteInfo(info);
    setStep(2);
  };

  const handleSelectService = (
    service: "ppf" | "tratamiento-ceramico" | "f-stack-black"
  ) => {
    setSelectedServiceCategory(service);
    setStep(3);
  };

  const handleSelectFStackBlack = (tamaño: string) => {
    const precioFStackBlack = precios["f-stack-black"].preciosPorTamaño[tamaño];
    const fStackBlackService = {
      nombre: "F-Stack Black",
      descripcion: `Paquete premium para ${tamaño}`,
      precio: precioFStackBlack,
      cantidad: 1,
    };

    setSelectedServices((prev) => ({
      ...prev,
      "f-stack-black": [fStackBlackService],
    }));

    setStep(2);
  };

  const handleAddService = (service: Service, change: number) => {
    const currentServices =
      selectedServices[
        selectedServiceCategory as "ppf" | "tratamiento-ceramico"
      ];
    const existingService = currentServices.find(
      (s) => s.nombre === service.nombre
    );

    if (existingService) {
      const updatedServices = currentServices.map((s) =>
        s.nombre === service.nombre
          ? {
              ...s,
              cantidad: Math.max(s.cantidad + change, 1),
            }
          : s
      );
      setSelectedServices((prev) => ({
        ...prev,
        [selectedServiceCategory as "ppf" | "tratamiento-ceramico"]:
          updatedServices,
      }));
    } else {
      setSelectedServices((prev) => ({
        ...prev,
        [selectedServiceCategory as "ppf" | "tratamiento-ceramico"]: [
          ...currentServices,
          { nombre: service.nombre, cantidad: 1, precio: service.precio || 0 },
        ],
      }));
    }
  };

  const handleRemoveService = (service: Service) => {
    setSelectedServices((prev) => ({
      ...prev,
      [selectedServiceCategory as "ppf" | "tratamiento-ceramico"]: prev[
        selectedServiceCategory as "ppf" | "tratamiento-ceramico"
      ].filter((s) => s.nombre !== service.nombre),
    }));
  };

  const handleBack = () => {
    setStep(2);
  };

  const total =
    selectedServices.ppf.reduce(
      (acc, service) => acc + service.precio * service.cantidad,
      0
    ) +
    selectedServices["tratamiento-ceramico"].reduce(
      (acc, service) => acc + service.precio * service.cantidad,
      0
    ) +
    selectedServices["f-stack-black"].reduce(
      (acc, service) => acc + service.precio,
      0
    );

  // Ajustar los márgenes según el paso actual
  const getLogoMargin = () => {
    if (step === 1) {
      return "mt-6 mb-4"; // Menos espacio para StepOne
    } else if (step === 2) {
      return "mt-4 mb-4"; // Menos espacio para ServiceSelection
    } else {
      return "mt-4 mb-2"; // Aún menos en ServiceList
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-black text-white">
      {/* Ajuste dinámico de márgenes para el logo */}
      <div className={getLogoMargin()}>
        <Image
          src="images/logo.png"
          alt="Logo F-Stack"
          width={406}
          height={184}
        />
      </div>

      {/* Contenido principal */}
      <div>
        {step === 1 && <StepOne onContinue={handleContinue} />}
        {step === 2 && (
          <ServiceSelection onSelectService={handleSelectService} />
        )}
        {step === 3 && selectedServiceCategory === "ppf" && (
          <ServiceList
            services={precios.ppf.services}
            selectedServices={selectedServices.ppf}
            onAddService={handleAddService}
            onRemoveService={handleRemoveService}
            onBack={handleBack}
            total={total}
            allSelectedServices={selectedServices}
            currentCategory="ppf"
          />
        )}
        {step === 3 && selectedServiceCategory === "tratamiento-ceramico" && (
          <ServiceList
            services={precios["tratamiento-ceramico"].services}
            selectedServices={selectedServices["tratamiento-ceramico"]}
            onAddService={handleAddService}
            onRemoveService={handleRemoveService}
            onBack={handleBack}
            total={total}
            allSelectedServices={selectedServices}
            currentCategory="tratamiento-ceramico"
          />
        )}
        {step === 3 && selectedServiceCategory === "f-stack-black" && (
          <FStackBlackForm
            onSelectService={handleSelectFStackBlack}
            onBack={handleBack}
            serviciosIncluidos={precios["f-stack-black"].services}
            preciosPorTamaño={precios["f-stack-black"].preciosPorTamaño}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
