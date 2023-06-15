'use client'

import { GeoResponse } from "@/interfaces/GeoResponse";
import { useState } from "react";
import { validateIPAddress } from "./validateIPAddress";
import { getGeolocation } from "@/api/geoApi";

export const useFormSubmit = () => {
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
        setError(false);
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

  return {
    ip,
    geolocation,
    isLoading,
    isIPValidate,
    error,
    latitude,
    longitude,
    handleFormSubmit,
    setIp,
    handleInputChange
  };
};