import React from "react";
import { useVehicles } from "../../features/admin/useVehicles";
import { useUsers } from "../../features/admin/useUsers";

const Vehicles = () => {
  const { users, isLoading } = useUsers();
  const { vehicles, isVehiclesLoading } = useVehicles();

  if (isVehiclesLoading || isLoading) {
    return <div className="h-full w-full flex items-center justify-center">Loading...</div>;
  }

  const vehicleUser = vehicles?.map((vehicle) => ({
    id: vehicle.id,
    user: users?.find((user) => user.id === vehicle.user),
  }));

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-normal">Vehicles</h2>

      <div className="flex flex-col gap-4">
        <div className="flex h-fit flex-col gap-4 rounded-md bg-gray-50 p-2">
          {vehicles?.map((vehicle) => (
            <div
              className="flex flex-col gap-3 rounded-md bg-white p-2 py-4"
              key={vehicle.id}
            >
              <div key={vehicle.id} className="flex gap-2 rounded-md bg-white">
                <img
                  src="https://placehold.co/400"
                  alt="vehicle"
                  className="h-8 w-8 rounded-full object-cover"
                />

                <h3 className="text-lg font-normal">
                  {vehicleUser.find((v) => v.id === vehicle.id).user?.name}
                </h3>
              </div>
              <span className="h-[1px] w-full bg-gray-200"></span>

              <div className="text-md flex w-full justify-between text-gray-500">
                <div>
                  <p>Model: {vehicle.model}</p>
                  <p>Year: {vehicle.year}</p>
                  <p>Color: {vehicle.color}</p>
                  <p>License Plate: {vehicle.licensePlate}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vehicles;
