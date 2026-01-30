"use client";

import React from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { MapPin } from "lucide-react";

interface PropertyMapProps {
  coordinates: {
    lat: number;
    lng: number;
  };
  propertyTitle: string;
  propertyImage?: string;
  propertyPrice?: number;
}

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const mapOptions = {
  disableDefaultUI: false,
  zoomControl: true,
  mapTypeControl: false,
  streetViewControl: true,
  fullscreenControl: true,
};

const PropertyMap: React.FC<PropertyMapProps> = ({
  coordinates,
  propertyTitle,
  propertyImage,
  propertyPrice,
}) => {
  const [showInfo, setShowInfo] = React.useState(false);

  // Use placeholder API key if not set
  const apiKey =
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "YOUR_API_KEY_HERE";

  return (
    <div className="w-full h-full min-h-[400px] rounded overflow-hidden">
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={coordinates}
          zoom={15}
          options={mapOptions}
        >
          <Marker
            position={coordinates}
            onClick={() => setShowInfo(!showInfo)}
            icon={{
              path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
              fillColor: "#000000",
              fillOpacity: 1,
              strokeColor: "#ffffff",
              strokeWeight: 2,
              scale: 2,
            }}
          />

          {showInfo && (
            <InfoWindow
              position={coordinates}
              onCloseClick={() => setShowInfo(false)}
            >
              <div className="p-2">
                {propertyImage && (
                  <img
                    src={propertyImage}
                    alt={propertyTitle}
                    className="w-48 h-32 object-cover rounded mb-2"
                  />
                )}
                <h3 className="font-serif text-lg font-semibold text-gray-900 mb-1">
                  {propertyTitle}
                </h3>
                {propertyPrice && (
                  <p className="text-sm font-bold text-gray-900">
                    ${propertyPrice.toLocaleString()}
                  </p>
                )}
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default PropertyMap;
