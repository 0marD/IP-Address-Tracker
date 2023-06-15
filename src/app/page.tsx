"use client";
import ErrorModal from "@/Components/ErrorModal";
import Hero from "@/Components/Hero";
import IPSearcher from "@/Components/IPSearcher";
import Loader from "@/Components/Loader";
import Map from "@/Components/Map";
import Modal from "@/Components/Modal";
import { useFormSubmit } from "@/utils/useFormSubmit";

export default function Home() {
  const {
    ip,
    geolocation,
    isLoading,
    isIPValidate,
    error,
    latitude,
    longitude,
    handleFormSubmit,
    handleInputChange,
  } = useFormSubmit();

  return (
    <main>
      <Hero>
        <IPSearcher
          ip={ip}
          onChange={handleInputChange}
          onSubmit={handleFormSubmit}
        />
        {!isIPValidate && <ErrorModal text="IP no válida" />}
        {error && (
          <ErrorModal text="Error al obtener la información de geolocalización, intentelo más tarde" />
        )}
        {isLoading ? (
          <Loader />
        ) : (
          geolocation && !error && <Modal item={geolocation} />
        )}
      </Hero>
      <Map lat={latitude} lng={longitude} />
    </main>
  );
}
