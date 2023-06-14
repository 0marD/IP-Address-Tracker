"use client";
import ErrorModal from "@/Components/ErrorModal";
import Hero from "@/Components/Hero";
import IPSearcher from "@/Components/IPSearcher";
import Loader from "@/Components/Loader";
import Map from "@/Components/Map";
import Modal from "@/Components/Modal";
import { getGeolocation } from "@/api/geoApi";
import { GeoResponse } from "@/interfaces/GeoResponse";
import { validateIPAddress } from "@/utils/validateIPAddress";
import { useState } from "react";

export default function Home() {
  const [ip, setIp] = useState("");
  const [geolocation, setGeolocation] = useState<GeoResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isIPValidate, setIsIPValidate] = useState(true);
  const [error, setError] = useState(false);
  const [latitude, setLatitude] = useState(37.7749);
  const [longitude, setLongitude] = useState(-122.4194);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIp(event.target.value);
  };

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setIsIPValidate(true);

    if (!validateIPAddress(ip)) {
      setIsIPValidate(false);
      setIsLoading(false);
      setGeolocation(null);
      return;
    } else {
      try {
        setError(false)
        const geoData = await getGeolocation(ip);
        setGeolocation(geoData);
        setLatitude(geoData.location.lat);
        setLongitude(geoData.location.lng);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
  };

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
        {isLoading ? <Loader /> : geolocation && !error && <Modal item={geolocation} />}
      </Hero>
      <Map lat={latitude} lng={longitude} />
    </main>
  );
}
