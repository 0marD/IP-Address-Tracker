import { GeoResponse } from "@/interfaces/GeoResponse";
import axios from "axios";

export const getGeolocation = async (ip: string = ""): Promise<GeoResponse> => {
  const apiKey = process.env.NEXT_PUBLIC_apiKeyGeolocation;
  const url = `https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${ip}`;

  try {
    const response = await axios.get<GeoResponse>(url);
    return response.data;
  } catch (error) {
    throw new Error("Error al obtener la información de geolocalización");
  }
};
