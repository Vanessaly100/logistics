'use client';

import { useState } from "react";
import axios from "axios";
import heroImage from "../../../assets/breadcrumb-shop.jpg.jpg";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// const containerStyle = {
//   width: '100%',
//   height: '400px',
// };

interface Shipment {
  status: string;
  updatedAt: string;
  current_location: string;
  latitude?: number;
  longitude?: number;
}

const TrackShipmentPage = () => {
  const [trackingId, setTrackingId] = useState('');
  const [shipment, setShipment] = useState<Shipment | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const geocodeLocation = async (address: string): Promise<{ lat: number; lng: number } | null> => {
    try {
      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!;
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`
      );
      const data = await response.json();

      if (data.status === 'OK') {
        const location = data.results[0].geometry.location;
        return { lat: location.lat, lng: location.lng };
      } else {
        console.error('Geocoding failed:', data.status);
        return null;
      }
    } catch (error) {
      console.error('Geocoding error:', error);
      return null;
    }
  };

  const fetchTracking = async () => {
    if (!trackingId.trim()) {
      setError('Tracking ID is required');
      return;
    }

    try {
      setLoading(true);
      setError('');
      const res = await axios.get(
        `http://localhost:8000/api/shipments/track/${trackingId}`
      );

      const shipmentData = res.data;
      const geo = await geocodeLocation(shipmentData.current_location);

      if (!geo) {
        setError('Could not resolve current location on the map.');
        return;
      }

      setShipment({
        ...shipmentData,
        latitude: geo.lat,
        longitude: geo.lng,
      });
    } catch (err: unknown) {
      setShipment(null);
      const errorObj = err as {
        response?: { data?: { message?: string } };
      };
      const message =
        errorObj?.response?.data?.message || 'Failed to track shipment';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      {/* Hero Section */}
      <div className="relative h-[400px] pt-[80px]">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${heroImage.src})`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-80"></div>
        </div>

        {/* Content Inside Hero Section */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6 text-white">
          <div>
          <h1 className="text-[4rem] font-bold text-bgOrange">Track Your Shipment</h1>
            <div className="flex gap-3">
              <Link href="/" className="flex items-center gap-2 group">
                <span className="text-white">Home</span>
                <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1 text-bgOrange" />
              </Link>
              <p className="text-gray-400">Track Your Shipment</p>
            </div>
          </div>
        </div>
      </div>
      {/* <section className="relative w-full h-[400px] lg:h-[500px] z-10 bg-no-repeat">
        <div
          className="relative w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage.src})` }}
        >
          <div className="absolute inset-0 bg-black opacity-80 z-0" />
          <div className="flex flex-col lg:w-3/5 relative top-[35%] left-10 text-white font-bold items-start pb-10 justify-center">
            <h1 className="text-[4rem] font-bold text-bgOrange">Track Your Shipment</h1>
            <div className="flex gap-3">
              <Link href="/" className="flex items-center gap-2 group">
                <span className="text-white">Home</span>
                <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1 text-bgOrange" />
              </Link>
              <p className="text-gray-400">Track Your Shipment</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Tracking Input */}
      <div className="">
        <div className="flex flex-col gap-8 py-20 w-2/4 mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-center text-bgLightGreen">Track Your Shipment</h2>
          <p className="text-lg">
            We make it easy to see where your shipment is when you track. Because we assign a tracking number to each package,
            you&apos;ll know about your shipment&apos;s progress when it&apos;s scanned as it moves through our system.
          </p>
        </div>

        <div className="flex py-20 items-center justify-center gap-4">
          <input
            type="text"
            placeholder="Enter Tracking ID"
            className="border border-gray-300 p-2 rounded-md w-1/2"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
          />
          <button
            onClick={fetchTracking}
            className="bg-bgOrange text-white px-4 py-2 rounded hover:bg-TextDarkGreen"
          >
            {loading ? "Tracking..." : "Track"}
          </button>
        </div>

        {error && <p className="text-red-500 text-center mt-4">{error}</p>}

        {shipment && (
          <div className="mt-6 space-y-4 w-3/4 mx-auto">
            <h3 className="text-xl font-semibold">Tracking Info</h3>
            <p><strong>Status:</strong> {shipment.status}</p>
            <p><strong>Last Updated:</strong> {new Date(shipment.updatedAt).toLocaleString()}</p>
            <p><strong>Current Location:</strong> {shipment.current_location}</p>

            {/* Google Map Rendering */}
            {shipment.latitude && shipment.longitude && (
              <div style={{ width: "100%", height: "400px" }}>
                <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
                  <GoogleMap
                    key={`${shipment.latitude}-${shipment.longitude}`}
                    mapContainerStyle={{ width: "100%", height: "100%" }}
                    center={{ lat: shipment.latitude, lng: shipment.longitude }}
                    zoom={12}
                    mapTypeId="roadmap"
                  >
                    <Marker position={{ lat: shipment.latitude, lng: shipment.longitude }} />
                  </GoogleMap>
                </LoadScript>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackShipmentPage;
