"use client";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { FC } from "react";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 37.819928,
  lng: -122.478255, // San Francisco, USA
};

const GoogleMapSection: FC = () => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return <p className="text-red-500">Google Maps API key is missing</p>;
  }

  return (
    <div className="p-4 bg-BackgroundColor text-white">
      <p className="mb-4 xl:text-3xl text-2xl">Find us at our location below:</p>
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default GoogleMapSection;
