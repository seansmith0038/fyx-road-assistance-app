import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";

const ConfirmLocationPage = ({ coords, setCoords }) => {
  return (
    <div className="absolute left-0 top-0 z-10 flex h-[90%] w-full flex-col gap-2 overflow-hidden rounded-md bg-black text-teal-800">
      <MapContainer center={coords} zoom={20} className="h-full w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">
            OpenStreetMap</a> contributors'
        />

        <Marker position={coords}>
          <Popup>
            <span>You are here</span>
          </Popup>
        </Marker>

        <ChangeCenter position={coords} />
        <DetectClick setCoords={setCoords} />
      </MapContainer>
    </div>
  );
};

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

export default ConfirmLocationPage;
