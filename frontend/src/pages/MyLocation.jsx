import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useGeolocated } from "react-geolocated";
import L from "leaflet";

const MyLocation = () => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });

  const [myLocation, setMyLocation] = useState([45.4215, -75.6972]);

  if (!isGeolocationAvailable || !isGeolocationEnabled) {
    return (
      <div className="flex h-screen w-full items-center justify-center text-xl text-teal-800">
        Geolocation is not enabled
      </div>
    );
  }

  if (!coords) {
    return (
      <div className="flex h-screen w-full items-center justify-center text-xl text-teal-800">
        Getting your location...
      </div>
    );
  }

  const handleMyLocation = () => {
    setMyLocation([coords.latitude, coords.longitude]);
  };

  const icon = L.icon({ iconUrl: "/icons/map-marker.svg", iconSize: [40] });

  return (
    <div className="relative h-[100dvh] w-full">
      <MapContainer
        center={[coords.latitude, coords.longitude]}
        zoom={20}
        className="z-10 h-full w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">
            OpenStreetMap</a> contributors'
        />

        <Marker
          position={myLocation}
          icon={icon}
          draggable={true}
          animate={true}
        >
          <Popup>
            <span>You are here</span>
          </Popup>
        </Marker>

        <ChangeCenter position={myLocation} />
        <DetectClick setCoords={setMyLocation} />
      </MapContainer>

      <div className="absolute right-0 top-0 z-20 m-4">
        <button
          onClick={handleMyLocation}
          className="rounded-lg bg-teal-800 p-2 text-white"
        >
          Pin My Location
        </button>
      </div>
    </div>
  );
};

export default MyLocation;

const ChangeCenter = ({ position }) => {
  const map = useMap();
  map.setView(position);
  return null;
};

const DetectClick = ({ setCoords }) => {
  useMapEvents({
    click: (e) => {
      setCoords([e.latlng.lat, e.latlng.lng]);
    },
  });

  return null;
};
