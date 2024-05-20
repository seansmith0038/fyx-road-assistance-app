import { NavLink } from "react-router-dom";
import { useVehicles } from "../features/vehicles/useVehicles";
import { useDeleteVehicle } from "../features/vehicles/useDeleteVehicle";
import Loader from "../ui/Loader";
import Header from "../features/home/Header";

const MyVehicles = () => {
  const { vehicles, isLoading } = useVehicles();
  const { deleteVehicle } = useDeleteVehicle();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="relative flex h-full flex-col gap-2 px-4 py-4">
      <Header />

      <div className="flex flex-col gap-4 pb-4 text-teal-800">
        <h2 className="text-md font-normal">My Vehicles</h2>

        <div className="flex flex-col gap-4">
          {vehicles.map((vehicle, i) => (
            <div
              key={i}
              className="relative flex h-20 items-center gap-6 rounded-lg p-2 shadow-md"
            >
              <img src={vehicle.image} className="h-16" alt={vehicle.brand} />
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold">{vehicle.model}</h3>
                <div className="flex gap-1">
                  <p className="text-xs font-normal">{vehicle.brand}</p>
                  <span className="text-xs font-normal">|</span>
                  <p className="text-xs font-normal">{vehicle.year}</p>
                  <span className="text-xs font-normal">|</span>
                  <p className="text-xs font-normal">{vehicle.color}</p>
                </div>
              </div>

              <button
                onClick={() => deleteVehicle(vehicle.id)}
                className="absolute right-2 top-2 rounded-lg bg-red-500 px-3 py-1 text-sm text-white"
              >
                Delete
              </button>
            </div>
          ))}
        </div>

        <NavLink
          to="/myvehicles/new"
          className="ml-auto w-fit rounded-full bg-teal-800 px-4 py-2 text-teal-100"
        >
          Add Vehicle
        </NavLink>
      </div>
    </div>
  );
};

export default MyVehicles;
