"use client"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

interface Props {
  lat: number;
  lng: number;
}

const Map = ({ lat, lng }: Props): JSX.Element => {
  const mapContainerStyle = {
    width: "100%",
    height: "100%",
  };

  const containerStyle = {
    width: "100%",
    height:"100%",
    inset:0,
  };

  const center = {
    lat: lat + .05,
    lng: lng,
  };

 

  const marker = {
    lat: lat,
    lng: lng,
  };

  const apiKey = process.env.NEXT_PUBLIC_apiKeyGoogleMaps;

  return (
    <section className="map-section">
      <div style={containerStyle}>
        <LoadScript googleMapsApiKey={`${apiKey}`}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={11}
          >
            <Marker position={marker} />
          </GoogleMap>
        </LoadScript>
      </div>
    </section>
  );
};

export default Map;
